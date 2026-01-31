import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Input } from './components/Input';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Cycles } from './components/Cycles';
import { Button } from './components/Button';
import { Footer } from './components/Footer';
import { PlayCircleIcon } from 'lucide-react';
import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css'

export function App() {
    let numero  = 0;

    function handleClick() {
        numero++;
        console.log(numero);
    }

    return (
        <>
            <Heading>
                Número: {numero}
            </Heading>
            <button onClick={handleClick}>Aumenta</button>
            <Container>
                <Logo/>                
            </Container>
            <Container>
                <Menu/>
             </Container>
            <Container>
                <CountDown/>
            </Container>
            <Container>
                <form action="form">

                    <div className='formRow'>
                        <Input labelText={numero.toString()} 
                            id='menuInput' 
                            type='text' 
                            placeholder='Digite algo'
                            disabled
                            defaultValue='Valor preenchido'/>
                    </div>

                    <div className='formRow'>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className='formRow'>
                        <Cycles/>
                    </div>

                    <div className='formRow'>
                        <Button color='green'> <PlayCircleIcon /> </Button>
                    </div>

                </form>
             </Container>

             <Container>
                <Footer></Footer>
            </Container>
        </>
    );
}