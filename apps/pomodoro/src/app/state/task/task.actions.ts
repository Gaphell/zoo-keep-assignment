import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction('Add task', args => ({payload: args}));

export const addTaskToComplete = createAction('Add task to completed', args => ({payload: args}));

export const setCurrentTask = createAction('Set current active task', args => ({payload: args}));

export const removeTask = createAction('Remove task', args => ({payload: args}));
