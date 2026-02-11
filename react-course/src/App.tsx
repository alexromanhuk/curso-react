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
import { useState } from 'react';

import './styles/global.css';
import './styles/theme.css'


export function App() {
    //Sempre que eu usar useState, ele me retorna um array com 2 posições, a primeira é o valor do estado e a segunda é uma função para atualizar esse estado. 
    // O useState é uma função que recebe o valor inicial do estado como argumento e retorna um array com o valor atual do estado e uma função para atualizar esse estado.
    //Não usar atriuição diretamente no estado, pois isso não vai atualizar a interface do usuário. Sempre usar a função de atualização para garantir que a interface seja atualizada corretamente.
    const [numero, setNumero] = useState(() => {
        console.log('Valor inicial do estado');
        return 0;
    });

    function handleClick() {
        setNumero(prevState => prevState + 1);
    }

    return (
        <>
            <Heading>Número: {numero}</Heading>
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