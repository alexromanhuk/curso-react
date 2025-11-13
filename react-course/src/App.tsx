import './styles/global.css';
import './styles/theme.css'
import { Heading } from './components/Heading';

export function App() {
    return (
        <>
            <Container>
                <Heading>LOGO</Heading>
            </Container>
            <Container>
                <Heading>MENU</Heading>
             </Container>
        </>
    );
}