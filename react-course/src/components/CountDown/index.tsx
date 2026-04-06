import { useContext } from 'react';
import styles from './styles.module.css';
import { TaskContext } from '../../contexts/TaskContext/taskContext';

export function CountDown() {
    const {state} = useContext(TaskContext) as { state: { formattedSecondsRemaining: string } };
    
return <div className={styles.container}>{state.formattedSecondsRemaining}</div>
}