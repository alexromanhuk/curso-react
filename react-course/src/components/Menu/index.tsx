import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu(){

    const [theme, setTheme] = useState<AvailableThemes>('dark');

    function handleThemChanged(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault();//Não segue o comportamento padrão do link, ou seja, não navega para lugar nenhum
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    }

    //useEffect(() => {
    //   console.log('Tema atualizado para:', theme);
    //});//Exzecutado toda vez que o componente é renderizado, ou seja, toda vez que o estado 'theme' é atualizado

    /*useEffect(() => {
    //   console.log('useEffect com array deps vazio:', theme);
    }, []);*///Executa apenas quanto o React monta  o componente na tela pela primeira vez, ou seja, quando o componente é renderizado pela primeira vez. Ele verifica se há um tema salvo no localStorage e, se houver, aplica esse tema ao estado e ao atributo data-theme do documento.


    useEffect(() => {
     // console.log('Tema atualizado para:', theme);
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }, [theme]);//Executa apenas quanto o valor do theme é atualizado, ou seja, quando o usuário clica no link para mudar o tema. Ele salva o tema atual no localStorage para que a preferência do usuário seja mantida mesmo após recarregar a página ou fechar o navegador.

    return <div className={styles.menu}>
        <a className={styles.menuLink} href="#" aria-label='Ir para Home' title='Ir para a Home'>
            <HouseIcon />
        </a>
        <a className={styles.menuLink} href="#" aria-label='Ver histórico de tarefas' title='Ver histórico de tarefas'>
            <HistoryIcon />
        </a>
        <a className={styles.menuLink} href="#" aria-label='Ir para configurações' title='Ir para configurações'>
            <SettingsIcon />
        </a>
        <a className={styles.menuLink} href="#" aria-label='Mudar tema' title='Mudar tema' onClick={handleThemChanged}>
            <SunIcon />
        </a>
    </div>
}