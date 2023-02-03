import React from 'react';
import './Converter.scss';

export const Converter: React.FC = () => {
  return (
    <div className="converter">
      <div className="converter_currency">
        <input type="number" />
        <select name="curr1" id="curr1">
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      <div className="converter_currency">
        <input type="number" />
        <select name="curr2" id="curr2">
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    </div>
  );
};
