import { ReactNode } from 'react';

export type Children = ReactNode | JSX.Element | JSX.Element[] | string | number | null;

export type NilNumber = number | undefined | null;
export type NilString = string | undefined | null;
export type ClassNameType = string | undefined;

export interface WithChildren {
  children?: Children;
}

export interface WithClassName {
  className?: ClassNameType;
}

export interface BaseComponent extends WithChildren, WithClassName {
}
