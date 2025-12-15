export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export interface Reminder {
  id: string;
  text: string;
  time: string; // "HH:MM" 24h format
  active: boolean;
}

export enum TimerMode {
  WORK = 'work',
  BREAK = 'break',
}

export const WORK_TIME = 25 * 60;
export const BREAK_TIME = 5 * 60;