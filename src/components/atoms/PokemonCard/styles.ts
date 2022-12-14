import classNames from 'classnames';

const styles = {
  component: (fullCard: boolean = false) => classNames(
    'relative',
    'bg-white',
    'rounded-md',
    'overflow-hidden',
    'w-100',
    'transition-all',
    'drop-shadow-md',
    {
      'focus:ring-3 focus:drop-shadow-lg': !fullCard,
      'hover:drop-shadow-lg': !fullCard,
    },
  ),
  cardNumber: classNames(
    'absolute',
    'top-0',
    'right-0',
    'px-4',
    'py-2',
    'text-sm',
    'font-bold',
    'bg-gray-50',
    'rounded-md',
  ),
  imageContainer: (fullCard: boolean = false) => classNames(
    'p-6',
    {
      'flex align-start justify-center gap-10 flex-col sm:flex-row': fullCard,
    },
  ),
  image: (fullCard: boolean = false) => classNames(
    'max-w-100',
    'h-32',
    'mx-auto',
    {
      'h-44': fullCard,
      'h-32': !fullCard,
    },
  ),
  name: classNames(
    'font-bold',
    'text-center',
    'bg-gray-50',
    'py-2',
    'block',
    'w-100',
  ),
};

export default styles;
