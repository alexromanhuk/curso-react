import { Cycles } from "../Cycles";
import { PlayCircleIcon } from "lucide-react";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";

export function MainForm() {
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
                <p>Próximo intervalo é de 00:00 minutes</p>
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