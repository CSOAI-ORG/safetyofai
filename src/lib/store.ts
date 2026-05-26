import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const DATA_DIR = join(process.cwd(), '.data');
const DB_FILE = join(DATA_DIR, 'subscribers.json');

export interface Subscriber {
  id: string;
  email: string;
  source: string;
  framework?: string;
  subscribedAt: string;
  nurtureStartedAt?: string;
  nurtureDay: number;
  confirmed: boolean;
}

export interface NurtureSchedule {
  id: string;
  subscriberId: string;
  email: string;
  day: number;
  scheduledAt: string;
  sentAt?: string;
  status: 'pending' | 'sent' | 'failed';
}

interface DB {
  subscribers: Subscriber[];
  nurtureSchedules: NurtureSchedule[];
  rateLimits: Record<string, string[]>;
}

function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readDB(): DB {
  ensureDataDir();
  if (!existsSync(DB_FILE)) {
    const empty: DB = { subscribers: [], nurtureSchedules: [], rateLimits: {} };
    writeFileSync(DB_FILE, JSON.stringify(empty, null, 2));
    return empty;
  }
  return JSON.parse(readFileSync(DB_FILE, 'utf-8'));
}

function writeDB(db: DB) {
  ensureDataDir();
  writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

export function getSubscriberByEmail(email: string): Subscriber | undefined {
  const db = readDB();
  return db.subscribers.find((s) => s.email.toLowerCase() === email.toLowerCase());
}

export function addSubscriber(email: string, source: string, framework?: string): Subscriber {
  const db = readDB();
  const subscriber: Subscriber = {
    id: crypto.randomUUID(),
    email: email.toLowerCase(),
    source,
    framework,
    subscribedAt: new Date().toISOString(),
    nurtureDay: 0,
    confirmed: true,
  };
  db.subscribers.push(subscriber);
  writeDB(db);
  return subscriber;
}

export function checkRateLimit(email: string, maxPerHour = 10): boolean {
  const db = readDB();
  const key = email.toLowerCase();
  const now = Date.now();
  const oneHourAgo = now - 60 * 60 * 1000;

  const timestamps = (db.rateLimits[key] || []).filter(
    (ts) => new Date(ts).getTime() > oneHourAgo
  );

  if (timestamps.length >= maxPerHour) {
    return false;
  }

  timestamps.push(new Date().toISOString());
  db.rateLimits[key] = timestamps;
  writeDB(db);
  return true;
}

export function scheduleNurture(subscriber: Subscriber): NurtureSchedule[] {
  const db = readDB();
  const now = new Date();
  const schedule: NurtureSchedule[] = [
    {
      id: crypto.randomUUID(),
      subscriberId: subscriber.id,
      email: subscriber.email,
      day: 0,
      scheduledAt: now.toISOString(),
      status: 'sent',
    },
    {
      id: crypto.randomUUID(),
      subscriberId: subscriber.id,
      email: subscriber.email,
      day: 2,
      scheduledAt: new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000).toISOString(),
      status: 'pending',
    },
    {
      id: crypto.randomUUID(),
      subscriberId: subscriber.id,
      email: subscriber.email,
      day: 4,
      scheduledAt: new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000).toISOString(),
      status: 'pending',
    },
    {
      id: crypto.randomUUID(),
      subscriberId: subscriber.id,
      email: subscriber.email,
      day: 7,
      scheduledAt: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      status: 'pending',
    },
  ];

  db.nurtureSchedules.push(...schedule);

  const sub = db.subscribers.find((s) => s.id === subscriber.id);
  if (sub) {
    sub.nurtureStartedAt = now.toISOString();
    sub.nurtureDay = 0;
  }

  writeDB(db);
  return schedule;
}

export function getPendingNurture(): NurtureSchedule[] {
  const db = readDB();
  const now = new Date().toISOString();
  return db.nurtureSchedules.filter(
    (s) => s.status === 'pending' && s.scheduledAt <= now
  );
}

export function markNurtureSent(id: string) {
  const db = readDB();
  const schedule = db.nurtureSchedules.find((s) => s.id === id);
  if (schedule) {
    schedule.status = 'sent';
    schedule.sentAt = new Date().toISOString();
  }
  writeDB(db);
}

export function getSubscriberCount(): number {
  return readDB().subscribers.length;
}
