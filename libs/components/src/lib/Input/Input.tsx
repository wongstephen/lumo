import React from 'react';

import styles from './Input.module.css';

export type InputProps = React.ComponentProps<'input'> & {
  /** Input cannot have children */
  children?: never;
  /**
   * Controls the colors and borders of the input   *
   * @default 'outline'
   */
  appearance?: 'outline' | 'underline';
  /**
   * Default value of the input. Use this only for uncontrolled components. For controlled components, use `value`.
   */
  defaultValue?: string;
  /**
   * Current value of the input. Use this for controlled components. For uncontrolled components, use `defaultValue`.
   */
  value?: string;
  /**
   * Disables the input, preventing any interaction
   * @default false
   */
  disabled?: boolean;
  /** Called when input's value changes */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Changes the size of the input (front size and spacing) */
  size?: 'small' | 'medium' | 'large';
  /**
   * The input can have different types.
   * @default 'text'
   */
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'search'
    | 'tel'
    | 'url'
    | 'number';
  /** Element before the input text */
  contentBefore?: React.ReactNode;
  /** Element after the input text */
  contentAfter?: React.ReactNode;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      contentBefore,
      contentAfter,
      disabled,
      appearance = 'outline',
      size = 'medium',
      ...props
    },
    ref,
  ) => {
    return (
      <span
        className={`${styles.container} ${className}`}
        data-disabled={disabled}
        data-size={size}
        data-appearance={appearance}
      >
        {contentBefore && <span>{contentBefore}</span>}
        <input ref={ref} type={type} {...props} disabled={disabled} />
        {contentAfter && <span>{contentAfter}</span>}
      </span>
    );
  },
);

export default Input;
