import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

import { ClassNameType } from 'interfaces';
import { ButtonStyle } from './enums';

export interface ButtonStyles {
  primary(disabled: boolean): string,

  secondary(disabled: boolean): string,

  pill(active: boolean): string,

  outline(active: boolean): string,

  pager(disabled: boolean, active: boolean): string,

  icon: string,
  legend: string,

  component(
    type: ButtonStyle,
    className: ClassNameType,
    disabled: boolean,
    active: boolean,
  ): string,
}

const styles: ButtonStyles = {
  primary: (disabled: boolean = false) => classNames(
    'rounded-3xl',
    'px-6',
    'py-1.5',
    'bg-blue-500',
    'text-white',
    'shadow-md',
    'border-blue-500',
    'disabled:bg-gray-300',
    'disabled:text-gray-500',
    'disabled:border-gray-400',
    'disabled:shadow-none',
    {
      'hover:bg-blue-800': !disabled,
      'hover:text-white': !disabled,
    },
  ),
  secondary: (disabled: boolean = false) => classNames(
    'rounded-3xl',
    'px-8',
    'py-1.5',
    'text-blue',
    'border-blue',
    'disabled:text-gray',
    'disabled:border-gray',
    {
      'hover:bg-blue-500': !disabled,
      'hover:text-white': !disabled,
    },
  ),
  pill: (active: boolean = false) => classNames(
    'rounded-3xl',
    'px-4',
    'py-1',
    'hover:bg-blue-500',
    'hover:text-white',
    {
      'text-white bg-blue-500': active,
      'text-blue-300 bg-blue-400': !active,
    },
  ),
  outline: (active: boolean = false) => classNames(
    'text-gray-800',
    'p-5',
    'rounded-xl',
    'border',
    'hover:border-blue-800',
    {
      'ring-2 ring-blue-800': active,
      'border-gray': !active,
    },
  ),
  pager: (disabled: boolean, active: boolean = false) => classNames(
    'px-4',
    'py-1.5',
    'border-transparent',
    'disabled:text-gray',
    'text-sm',
    {
      'bg-blue-500 text-white': active,
      'bg-lightGray text-blue': !active,
      'hover:bg-blue-500 hover:text-white': !disabled,
    },
  ),
  component: (
    type: ButtonStyle,
    className: ClassNameType,
    disabled: boolean = false,
    active: boolean = false,
  ) => {
    const primaryButtonClasses = styles.primary(disabled);
    const secondaryButtonClasses = styles.secondary(disabled);
    const pillButtonClasses = styles.pill(active);
    const outlineButtonClasses = styles.outline(active);
    const pagerButtonClasses = styles.pager(disabled, active);
    const defaultButtonsClasses = classNames(
      'font-bold',
      'border',
      'text-lg',
    );

    const isDefaultButton = type !== ButtonStyle.PILL;

    return twMerge(classNames(
      'transition-all',
      {
        [defaultButtonsClasses]: isDefaultButton,
        [primaryButtonClasses]: type === ButtonStyle.PRIMARY,
        [primaryButtonClasses]: type === ButtonStyle.PRIMARY,
        [secondaryButtonClasses]: type === ButtonStyle.SECONDARY,
        [pillButtonClasses]: type === ButtonStyle.PILL,
        [outlineButtonClasses]: type === ButtonStyle.OUTLINE,
        [pagerButtonClasses]: type === ButtonStyle.PAGER,
      },
    ), className);
  },
  icon: classNames('mr-4'),
  legend: classNames(
    'text-xs',
    'text-gray',
    'font-thin',
  ),
};

export default styles;
