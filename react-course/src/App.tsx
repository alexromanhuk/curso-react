import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Input } from './components/Input';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/global.css';
import './styles/theme.css'

export function App() {
    return (
        <>
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
                        <Input labelText='Task' 
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
                        <p>Ciclos</p>
                        <p>0 0 0 0 0 0</p>
                    </div>

                    <div className='formRow'>
                        <button type="submit">Enviar</button>
                    </div>

                </form>
             </Container>
        </>
    );
}