let store = {};

export const set = (key, value) => {
  store[key] = value;
};

export const setMultiple = keyValuePair => {
  keyValuePair.map(o => {
    store[o.key] = o.value;
  });
};

export const get = key => {
  return store[key];
};

export const getMultiple = keys => {
  return keys.reduce((acc, o) => {
    acc[o] = store[o];
    return acc;
  }, {});
};

export const reset = () => {
  store = {};
};

export const GlobalStore = {
  set,
  get,
  getMultiple,
  reset
};

export default store;
