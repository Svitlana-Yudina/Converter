// eslint-disable-next-line no-shadow
export enum Currensy {
  'UAH',
  'USD',
  'EUR',
}

export type Curr = {
  currency: string,
  buy: number,
  sale: number,
}

export type Resp = {
  base: string,
  disclaimer: string,
  license: string,
  rates: object,
  timestamp: string,
};
