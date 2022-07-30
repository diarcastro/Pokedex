import classNames from 'classnames';

const styles = {
  component: classNames(
    'relative',
    'bg-white',
    'rounded-md',
    'overflow-hidden',
    'w-100',
    'transition-all',
    'drop-shadow-md',
    'focus:ring-3 focus:drop-shadow-lg',
    'hover:drop-shadow-lg',
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
  imageContainer: classNames('p-6'),
  image: classNames(
    'max-w-100',
    'h-32',
    'mx-auto',
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
