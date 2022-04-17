import { NavigationTabsInterface } from "../model/header.model";


export enum NavigationIds {
  pomodoro,
  shortBreak,
  longBreak,
}

export enum NavigationColors {
  pomodoro= '#ff8fa3',
  shortBreak = '#94d2bd',
  longBreak = '#e9d8a6',
}

export const NAVIGATION_TABS: Array<NavigationTabsInterface> = [
  {
    id: NavigationIds.pomodoro,
    label: 'Pomodoro',
    path: '/',
    color: NavigationColors.pomodoro
  },
  {
    id: NavigationIds.longBreak,
    label: 'Long Break',
    path: '/long-break',
    color: NavigationColors.longBreak
  },
  {
    id: NavigationIds.shortBreak,
    label: 'Short Break',
    path: '/short-break',
    color: NavigationColors.shortBreak
  }
]
