import styles from './Button.module.css';

const variants = {
  primary: 'primary',
  secondary: 'secondary',
};

export type ButtonProps = {
  variant?: keyof typeof variants;
} & React.ComponentProps<'button'>;

export function Button({
  variant = 'primary',
  disabled,
  children,
  onClick,
}: ButtonProps): React.JSX.Element {
  return (
    <button
      onClick={onClick}
      className={styles['container']}
      data-variant={variants[variant]}
      data-disabled={disabled}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
