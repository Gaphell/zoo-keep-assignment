import { createSelector, createSlice } from '@reduxjs/toolkit';
import { addTask, addTaskToComplete, removeTask, setCurrentTask } from "./task.actions";

export const TASK_FEATURE_KEY = 'task';

export class Task {
  id: string;
  title: string;

  constructor(props: Task) {
    this.id = props.id;
    this.title = props.title;
  }
}

export interface TaskState {
  tasks: Array<Task>;
  completedTasks: Array<Task>;
  currentTask: Task | undefined;
  timerStarted: boolean;
}

export const initialTaskState: TaskState = {
  tasks: [],
  completedTasks: [],
  currentTask: undefined,
  timerStarted: false
};

export const taskSlice = createSlice({
  name: TASK_FEATURE_KEY,
  initialState: initialTaskState,
  reducers: {
    resetState: state => {
      state.tasks = [];
      state.currentTask = undefined;
      state.completedTasks = [];
    },
    startTimer: state => {
      state.timerStarted = true;
    },
    pauseTimer: state => {
      state.timerStarted = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addTask, (state, action) => {
      state.tasks.push(action.payload);
    });
    builder.addCase(addTaskToComplete, (state, action) => {
      state.completedTasks.push(action.payload);
    });
    builder.addCase(setCurrentTask, (state, action) => {
      state.currentTask = action.payload;
    });
    builder.addCase(removeTask, (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
      state.completedTasks = state.completedTasks.filter(task => task.id !== action.payload.id);
      if (state.currentTask?.id === action.payload.id) {
        state.currentTask = undefined;
      }
    });
  },
});

/*
 * Export reducer for store configuration.
 */
export const taskReducer = taskSlice.reducer;

export const {resetState, startTimer, pauseTimer} = taskSlice.actions;

export const getTaskState = (rootState: any): TaskState => rootState[TASK_FEATURE_KEY];

export const getTasksState = (rootState: any): Array<Task> => rootState[TASK_FEATURE_KEY].tasks;

export const getCompletedTasksState = (rootState: any): Array<Task> => rootState[TASK_FEATURE_KEY].completedTasks;

export const getCurrentTaskState = (rootState: any): Task => rootState[TASK_FEATURE_KEY].currentTask;

export const getTimerStartedState = (rootState: any): Task => rootState[TASK_FEATURE_KEY].timerStarted;

export const taskState = createSelector(getTaskState, state => state);
export const tasksState = createSelector(getTasksState, state => state);
export const completedTasksState = createSelector(getCompletedTasksState, state => state);
export const currentTaskState = createSelector(getCurrentTaskState, state => state);
export const timerStartedState = createSelector(getTimerStartedState, state => state);




