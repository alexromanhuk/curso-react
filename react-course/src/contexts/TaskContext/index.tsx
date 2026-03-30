import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";

const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    activeTasck: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15,
    },
    activeTaskId: null
}

type TaskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export const TaskContext = createContext<TaskContextProps>({
    state: initialState,
    setState: () => { }
})

type TaskContextProviderProps = {
    children: React.ReactNode;
}

export function TaskContextProvider({ children } : TaskContextProviderProps) {

    return (<TaskContext.Provider value={{ teste:3210 }}> 
        {children} 
    </TaskContext.Provider>)
}
   