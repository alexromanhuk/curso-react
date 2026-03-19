import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
    tasks: TaskModel[];
    activeTaskId: string | null;
    formattedSecondsRemaining: string;
    activeTasck: TaskModel | null;
    currentCycle: number;
    config: {
        workTime: number;
        shortBreakTime: number; 
        longBreakTime: number;
    };
}