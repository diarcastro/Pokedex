import React from 'react';

import { BaseComponent } from 'interfaces';

import { ButtonStyle, ButtonType } from './enums';
import styles from './styles';

export interface ButtonProps<DataType = any> extends BaseComponent {
  style?: ButtonStyle,
  type?: ButtonType,
  active?: boolean,
  icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>,
  legend?: string,
  data?: DataType;
}

const Button = ({
  style = ButtonStyle.PRIMARY,
  type = ButtonType.BUTTON,
  active = false,
  icon: Icon,
  children,
  className,
  ...props
}: ButtonProps & React.HTMLProps<HTMLButtonElement>) => {
  const componentStyles = styles.component(style, className, Boolean(props.disabled), active);

  return (
    <button
      /* eslint-disable-next-line react/button-has-type */
      type={type}
      className={componentStyles}
      {...props}
    >
      {Icon && <Icon className={styles.icon} />}
      {children}
    </button>
  );
};

export default Button;
