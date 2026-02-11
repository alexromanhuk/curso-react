import styles from './styles.module.css'

type InputProps = {
    id: string;
    //labelText?: string;
    labelText: string;
} & React.ComponentProps<'input'> ;

export function DefaultInput({ id, type, labelText, ...rest }: InputProps) {
    return (
        <>
            {/*abaixo estava como condicional}*/}
            {/* { labelText && <label htmlFor={id}> {labelText} </label>} */}
            <label htmlFor={id}> {labelText} </label>
            <input className={styles.input} id={id} type={type} {...rest} />
        </>
    );
}
