import styles from './styles.module.css';


export function Footer(){
    return <footer className={styles.footer}>
        <a href="http://"> Entenda como funciona o pomodoro</a>
        <a href="http://"> Chonos &copy; { new Date().getFullYear()} - Feito </a>
    </footer>
}