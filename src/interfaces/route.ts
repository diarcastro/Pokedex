import { Children } from './index';

export interface PathElementLanguageItem {
  en: string;
  fr?: string;
}

export interface PathElement {
  component: Children;
  key: string;
  languages?: PathElementLanguageItem;
  path?: string;
}
