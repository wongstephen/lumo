import { Slot } from 'radix-ui';
import React from 'react';

import styles from './Button.module.css';

type ButtonSizes = 'small' | 'medium' | 'large';

type ButtonAppearance = 'primary' | 'secondary' | 'outline' | 'transparent';

type ButtonIcon = {
  /**
   * Place icon before or after its context.
   *
   * @default 'before'
   */
  iconPosition?: 'before' | 'after';
  /**
   * A button with only an icon.
   *
   * @default false
   */
  iconOnly?: boolean;
  /**
   * Icon to be displayed.
   */
  icon?: React.ReactNode;
};

export type ButtonProps = ButtonIcon & {
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
      asChild = false,
      children,
      disabled,
      icon,
      iconOnly,
      iconPosition = 'before',
      size = 'medium',
      ...props
    },
    ref,
  ): React.JSX.Element => {
    const Comp = asChild ? Slot.Root : 'button';

    return (
      <Comp
        className={styles['container']}
        data-appearance={appearance}
        data-disabled={disabled}
        data-size={size}
        data-icon-position={iconPosition}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {icon && iconPosition === 'before' && (
          <span className={styles.icon}>{icon}</span>
        )}
        {!iconOnly && <Slot.Slottable>{children}</Slot.Slottable>}
        {icon && iconPosition === 'after' && (
          <span className={styles.icon}>{icon}</span>
        )}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export default Button;
