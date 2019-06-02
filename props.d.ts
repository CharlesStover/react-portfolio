import {
  AnchorHTMLAttributes,
  ComponentClass,
  DetailedHTMLProps,
} from 'react';

export interface Route {
  component: ComponentClass<any>;
  description: string;
  keywords?: string[];
  path: string;
  title?: string;
}

export interface Social {
  github?: string;
  linkedIn?: string;
  npmjs?: string;
  reddit?: string;
  stackOverflow?: string;
  twitter?: string;
  youtube?: string;
}

export default interface IProps {
  copyright?: number;
  footer?: Array<
    DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  >;
  lightness?: number;
  primary: number;
  resume?: string;
  routes?: Route[];
  saturation?: number;
  secondary?: number;
  social?: Social;
  theme?: any;
  title: string;
}
