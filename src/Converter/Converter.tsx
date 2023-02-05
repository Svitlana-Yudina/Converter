/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
import React, { useContext, useState } from 'react';
import { CurrencyContext } from '../CurrensyContext/CurrencyContext';
import { getRate, roundResult } from '../utils/utils';
import './Converter.scss';

export const Converter: React.FC = () => {
  const { currensyList, rates } = useContext(CurrencyContext);
  const [firstAmount, setFirstAmount] = useState(1);
  const [secondAmount, setSecondAmount] = useState(1);
  const [firstSelect, setFirstSelect] = useState('USD');
  const [secondSelect, setSecondSelect] = useState('USD');

  const handleFirstSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFirstSelect(event.target.value);

    if (event.target.value === secondSelect) {
      setSecondAmount(firstAmount);
    } else if (event.target.value === 'USD') {
      const exchange = getRate(secondSelect, rates);
      const result = roundResult(firstAmount * exchange);

      setSecondAmount(result);
    } else {
      const firstExch = getRate(event.target.value, rates);
      const secondExch = getRate(secondSelect, rates);
      const result = roundResult(firstAmount / firstExch * secondExch);

      setSecondAmount(result);
    }
  };

  const handleSecondSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSecondSelect(event.target.value);

    if (firstSelect === event.target.value) {
      setSecondAmount(firstAmount);
    } else if (firstSelect === 'USD') {
      const exchange = getRate(event.target.value, rates);
      const result = roundResult(firstAmount * exchange);

      setSecondAmount(result);
    } else {
      const firstExch = getRate(firstSelect, rates);
      const secondExch = getRate(event.target.value, rates);
      const result = roundResult(firstAmount / firstExch * secondExch);

      setSecondAmount(result);
    }
  };

  const handleFirstInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentInputValue = Number(event.target.value);

    setFirstAmount(currentInputValue);
    console.log(currentInputValue, firstAmount);

    if (firstSelect === secondSelect) {
      setSecondAmount(currentInputValue);
    } else if (firstSelect === 'USD') {
      const exchange = getRate(secondSelect, rates);
      const result = roundResult(currentInputValue * exchange);

      setSecondAmount(result);
    } else {
      const firstExch = getRate(firstSelect, rates);
      const secondExch = getRate(secondSelect, rates);
      const result = roundResult(currentInputValue / firstExch * secondExch);

      setSecondAmount(result);
    }
  };

  const handleSecondInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentInputValue = Number(event.target.value);

    setSecondAmount(currentInputValue);

    if (firstSelect === secondSelect) {
      setFirstAmount(currentInputValue);
    } else if (firstSelect === 'USD') {
      const exchange = getRate(secondSelect, rates);
      const result = roundResult(currentInputValue * exchange);

      setFirstAmount(result);
    } else {
      const firstExch = getRate(firstSelect, rates);
      const secondExch = getRate(secondSelect, rates);
      const result = roundResult(currentInputValue / firstExch * secondExch);

      setFirstAmount(result);
    }
  };

  return (
    <div className="converter">
      <div className="converter__currency">
        <input
          type="number"
          value={firstAmount}
          onChange={handleFirstInput}
          className="converter__input"
        />
        <select
          name="curr1"
          id="curr1"
          value={firstSelect}
          onChange={handleFirstSelect}
          className="converter__select"
        >
          {currensyList.map(currensy => (
            <option key={currensy} value={currensy}>
              {currensy}
            </option>
          ))}
        </select>
      </div>

      <div className="converter__currency">
        <input
          type="number"
          value={secondAmount}
          onChange={handleSecondInput}
          className="converter__input"
        />
        <select
          name="curr2"
          id="curr2"
          value={secondSelect}
          onChange={handleSecondSelect}
          className="converter__select"
        >
          {currensyList.map(currensy => (
            <option key={currensy} value={currensy}>
              {currensy}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
