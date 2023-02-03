/* eslint-disable no-console */
import React, { useCallback, useEffect, useState } from 'react';
import { Curr } from '../types/currency';
// import { NeadedCurrensy } from '../types/currency';
import { request } from '../utils/fetch';
import './Header.scss';

export const Header: React.FC = () => {
  const neededCurrensy = ['UAH', 'USD', 'EUR', 'PLN'];
  const [rates, setRates] = useState<Curr[]>([]);

  // console.log(fetch('https://bank.gov.ua/NBU_Exchange/exchange?json'));

  const getRates = useCallback(async() => {
    try {
      const dataObj = await request();

      const arrData = Object
        .entries(dataObj.rates)
        .filter(el => neededCurrensy.includes(el[0]))
        .map(el => {
          return {
            currency: el[0],
            buy: Math.round(el[1] * 100) / 100,
            sale: Math.round(el[1] * 110) / 100,
            amount: el[1],
          };
        });

      console.log(arrData);

      setRates(arrData);
    } catch {
      throw new Error('Error loading rates');
    }
  }, []);

  useEffect(() => {
    getRates();
  }, []);

  return (
    <div className="header">
      <h1 className="header__title">Exchange Rates</h1>
      <table className="exchange-rates">
        <thead>
          <tr>
            <th>Currency</th>
            <th>Buy</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody>
          {rates.map(rate => {
            if (rate.currency !== 'USD') {
              return (
                <tr key={rate.currency}>
                  <td>{rate.currency}</td>
                  <td>{rate.buy}</td>
                  <td>{rate.sale}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};
