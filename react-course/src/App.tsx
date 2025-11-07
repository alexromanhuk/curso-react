import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App(){
    console.log('Oi');
    return (
        <>
            <Heading/>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum tempore optio nulla id illum possimus, architecto sit vitae repudiandae numquam. Nulla, veniam! Assumenda veniam neque quis eum repellat, odio odit?
            </p>
        </>
    )
}