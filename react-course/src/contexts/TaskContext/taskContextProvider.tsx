import { useState, type ReactNode } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./taskContext";

type TaskContextProviderProps = {
    children: ReactNode;
}

export function TaskContextProvider({ children } : TaskContextProviderProps) {
    const [state, setState] = useState(initialTaskState);
    
    return (<TaskContext.Provider value={{ state, setState }}> 
        {children} 
    </TaskContext.Provider>)
}
