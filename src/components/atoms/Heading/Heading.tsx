import { BaseComponent } from 'interfaces';

import HeadingSize from './sizes';
import styles from './styles';

export interface HeadingProps extends BaseComponent {
  size?: HeadingSize,
}

const Heading = ({
  size = HeadingSize.H2,
  className,
  children,
}: HeadingProps) => {
  const componentClasses = styles.component(size, className);

  switch (size) {
    case HeadingSize.H1:
      return <h1 className={componentClasses}>{children}</h1>;
    case HeadingSize.H2:
    default:
      return <h2 className={componentClasses}>{children}</h2>;
  }
};

export default Heading;
