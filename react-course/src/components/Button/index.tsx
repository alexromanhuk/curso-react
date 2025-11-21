import styles from './styles.module.css'

type ButtonProps = {
    children: React.ReactNode;
    color?: 'green' | 'red';
} & React.ComponentProps<'button'> ;

export function Button({children, color='green', ...props }: ButtonProps) {
    return (
        <>
            <button className={`${styles.button} ${styles[color]}`} {...props}>
               {children}
            </button>
        </>
    );
}
