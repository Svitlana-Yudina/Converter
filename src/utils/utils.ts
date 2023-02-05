import { Curr, Resp } from '../types/currency';

/* eslint-disable max-len */
const apiUrl = 'https://openexchangerates.org/api/latest.json?app_id=30480634388b4b9488cd156366071787&prettyprint=false&show_alternative=false';

export function request(): Promise<Resp> {
  return fetch(apiUrl)
    .then(response => response.json());
}

export function filterAndFormat(currList: string[], data: object): Curr[] {
  const arrData = Object
    .entries(data)
    .filter(el => currList.includes(el[0]))
    .map(el => {
      return {
        currency: el[0],
        buy: Math.round(el[1] * 100) / 100,
        sale: Math.round(el[1] * 105) / 100,
      };
    });

  return arrData;
}

export function getRate(currensy: string, currensyArr: Curr[]): number {
  const findedcurrency = currensyArr
    .find(el => el.currency === currensy)
    || {
      currency: 'USD',
      buy: 1,
      sale: 1,
    };

  return findedcurrency.buy;
}

export function roundResult(num: number): number {
  return Math.round(num * 100) / 100;
}
