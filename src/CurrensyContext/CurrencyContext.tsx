/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useCallback, useEffect, useState } from 'react';
import { Curr } from '../types/currency';
import { filterAndFormat, request } from '../utils/utils';

interface ContextValues {
  rates: Curr[];
  setRates: React.Dispatch<React.SetStateAction<Curr[]>>;
  currensyList: string[];
}

export const CurrencyContext = React.createContext<ContextValues>({
  rates: [],
  setRates: () => {},
  currensyList: [],
});

type Props = {
  children: React.ReactNode;
};

export const CurrencyProvider: React.FC<Props> = ({ children }) => {
  const [rates, setRates] = useState<Curr[]>([]);
  const currensyList = ['UAH', 'USD', 'EUR', 'PLN'];

  const getRates = useCallback(async() => {
    try {
      const dataObj = await request();

      setRates(filterAndFormat(currensyList, dataObj.rates));
    } catch {
      throw new Error('Error loading rates');
    }
  }, []);

  useEffect(() => {
    getRates();
  }, []);

  const contextValue = {
    rates,
    setRates,
    currensyList,
  };

  return (
    <CurrencyContext.Provider value={contextValue}>
      {children}
    </CurrencyContext.Provider>
  );
};
