import { create } from "zustand";

const store = (set)=>({
tasks: [{title: "test-task",status: "ongoing"}],
addTask: (title,status)=>set((store)=>({tasks: [...store.tasks,{title,status}]})),
})
export const useStore = create(store);