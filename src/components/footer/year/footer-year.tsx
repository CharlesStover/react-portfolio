import React from 'react';
import Context from '../../context';

interface IProps {
  year: number;
}

export default Context.with('copyright')(
  function FooterYear({
    copyright,
  }: IProps): number | string {
    const year: number = new Date().getFullYear();
    if (copyright === year) {
      return year;
    }
    return `${copyright}-${year}`;
  }
);
