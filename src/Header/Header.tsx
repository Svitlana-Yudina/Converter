import React, { useContext } from 'react';
import { CurrencyContext } from '../CurrensyContext/CurrencyContext';
import './Header.scss';

export const Header: React.FC = () => {
  const { rates } = useContext(CurrencyContext);

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
