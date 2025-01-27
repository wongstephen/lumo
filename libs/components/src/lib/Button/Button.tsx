import { Slot } from '@radix-ui/react-slot';
import React from 'react';

import styles from './Button.module.css';

type ButtonSizes = 'small' | 'medium' | 'large';

type ButtonAppearance = 'primary' | 'secondary' | 'outline' | 'transparent';

export type ButtonProps = {
  /**
   * A button can have different appearances and passed custom content.
   * - 'primary (default)': Primary button action emphasis.
   * - 'secondary': Secondary button action emphasis.
   * - 'outline': Button removing the background.
   * - 'transparent': Button with no background and no border.
   *
   * @default 'primary'
   */
  appearance?: ButtonAppearance;
  /**
   * Disables the button, preventing any interaction.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * Place icon before or after its context
   *
   * @default 'before'
   */
  iconPosition?: 'before' | 'after';
  /**
   * Button size options
   *
   * @default 'medium'
   */
  size?: ButtonSizes;
  /**
   * Slot for the button content. When true, the styling will be applied to the child element.
   *
   * @default: false
   */
  asChild?: boolean;
} & React.ComponentProps<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      appearance = 'primary',
      disabled,
      children,
      size = 'medium',
      iconPosition = 'before',
      asChild = false,
      ...props
    },
    ref,
  ): React.JSX.Element => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={styles['container']}
        data-appearance={appearance}
        data-disabled={disabled}
        data-size={size}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button };
