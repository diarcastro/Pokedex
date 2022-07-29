import classNames from 'classnames';

import { ClassNameType } from 'interfaces';

const styles = {
  component: (background: boolean = false) => (classNames(
    {
      'bg-gray-50': background,
    },
  )),
  container: (className: ClassNameType) => (classNames(
    'px-4 md:px-6 xl:px-0',
    'max-w-screen-xl',
    'mx-auto',
    className,
  )),
};

export default styles;
