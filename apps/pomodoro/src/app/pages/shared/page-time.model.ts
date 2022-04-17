export interface TimerPageProps {
  remainingTime: number;
  start: () => void;
  pause: () => void;
  finish: (time: number) => void;
}
