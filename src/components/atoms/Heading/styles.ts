import classNames from 'classnames';

import { ClassNameType } from 'interfaces';
import HeadingSize from './sizes';

const styles = {
  component: (size: HeadingSize, className: ClassNameType) => classNames(
    'font-bold',
    {
      'text-4xl mb-4 text-red': size === HeadingSize.H1,
      'text-xl my-2 sm:my-5 text-blue-600': size === HeadingSize.H2,
      'text-lg my-2 sm:my-5 text-blue-500': size === HeadingSize.H2,
    },
    className,
  ),
};

export default styles;
