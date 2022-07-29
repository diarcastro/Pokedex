const PROD_ENV = 'production';

export const isProdEnvironment = process.env.NODE_ENV === PROD_ENV;
export const isDevEnvironment = !isProdEnvironment;
