import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu(){

    const [theme, setTheme] = useState<AvailableThemes>('dark');

    function handleThemChanged(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault();//Não segue o comportamento padrão do link
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    }

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