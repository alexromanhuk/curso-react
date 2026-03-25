import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import type { HomeProps } from "../../pages/Home";

export function MainForm( {state}:  HomeProps ) {
    return (
        <form action="form">
            <div className='formRow'>
                <DefaultInput 
                    labelText="Task"
                    id='menuInput' 
                    type='text' 
                    placeholder='Digite algo'/>
            </div>
            <div className='formRow'>
                <p>Próximo intervalo é de {state.config.workTime} minutes</p>
            </div>
            <div className='formRow'>
                <Cycles/>
            </div>
            <div className='formRow'>
                <DefaultButton color='green'> <PlayCircleIcon /> </DefaultButton>
            </div>
        </form>
    );
}