import Cookies from 'js-cookie';

const getItem = (key:string) => {
  const data = Cookies.get(key);

  try {
    return JSON.parse(data as string);
  } catch (err) {
    return data;
  }
};

const setItem = (key:any, value:any) => {
  const stringify = typeof value !== 'string' ? JSON.stringify(value) : value;
  return Cookies.set(key, stringify);
};

const removeItem = (key:any) => {
  Cookies.remove(key);
};

export { getItem, setItem, removeItem };
