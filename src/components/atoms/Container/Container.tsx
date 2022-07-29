import { BaseComponent } from 'interfaces';

import styles from './styles';

export interface ContainerProps extends BaseComponent {
  background?: boolean;
}

const Container = ({
  background = false,
  children,
  className,
}: ContainerProps) => (
  <section className={styles.component(background)}>
    <div className={styles.container(className)}>
      {children}
    </div>
  </section>
);

export default Container;
