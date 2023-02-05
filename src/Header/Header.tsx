import React, { useContext } from 'react';
import { CurrencyContext } from '../CurrensyContext/CurrencyContext';
import './Header.scss';

export const Header: React.FC = () => {
  const { rates } = useContext(CurrencyContext);

  return (
    <div className="header">
      <h1 className="header__title">Exchange Rates</h1>
      <table className="exchange-rates">
        <thead className="table__head">
          <tr>
            <th className="title">Currency</th>
            <th className="title">Buy</th>
            <th className="title">Sale</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {rates.map(rate => {
            if (rate.currency !== 'USD') {
              return (
                <tr key={rate.currency}>
                  <td className="content">{rate.currency}</td>
                  <td className="content">{rate.buy}</td>
                  <td className="content">{rate.sale}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};
