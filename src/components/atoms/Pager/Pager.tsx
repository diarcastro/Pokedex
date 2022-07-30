/* eslint-disable */
import React from 'react';

import { BaseComponent } from 'interfaces';
import { NavLink } from 'react-router-dom';

import classNames from 'classnames';

export interface PagerProps extends BaseComponent {
  totalPages: number;
  currentPage: number;
}

const Pager = ({ totalPages, currentPage }: PagerProps) => {
  const pagesLinks = [];
  for (let i = 0; i < totalPages; i += 1) {
    const isActive = i === currentPage;
    const classes = classNames(
      'px-2',
      'py-1',
      'w-12',
      'rounded-sm',
      'bg-blue-400',
      'text-center',
      'text-white',
      'transition-all',
      'hover:bg-blue-900',
      'focus:bg-blue-900 focus:ring-2',
      {
        'bg-blue-900 pointer-events-none': isActive,
      },
    );

    const link = (
      <NavLink key={i} className={classes} to={`/page/${i + 1}`}>
        {i + 1}
      </NavLink>
    );
    pagesLinks.push(link);
  }

  return <div className="mt-10 mb-6 flex flex-wrap gap-4 justify-center">
    { pagesLinks }
  </div>
};

export default Pager;
