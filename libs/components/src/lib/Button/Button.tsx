import styles from './Button.module.css';

export type ButtonProps = React.ComponentProps<'button'>;

export function Button({ children, onClick }: ButtonProps): React.JSX.Element {
  return (
    <button onClick={onClick} className={styles['container']}>
      {children}
    </button>
  );
}

export default Button;
