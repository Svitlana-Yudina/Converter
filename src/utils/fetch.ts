import { Resp } from '../types/currency';

/* eslint-disable max-len */
const apiUrl = 'https://openexchangerates.org/api/latest.json?app_id=30480634388b4b9488cd156366071787&prettyprint=false&show_alternative=false';

export function request(): Promise<Resp> {
  return fetch(apiUrl)
    .then(response => response.json());
}

// export const getRate = async() => {
//   const dataObj = await request();

//   return dataObj;
// };
