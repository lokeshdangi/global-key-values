const EVENT_ADD = "ADD";
const EVENT_REMOVE = "REMOVE";

let store = {};

// TODO: override error or not
// TODO: persist values

let listeners = {};

const set = (key, value) => {
  store[key] = value;
  Object.values(listeners).forEach(listener => {
    listener({ event: EVENT_ADD, data: { key, value } });
  });
};

const setMultiple = keyValuePair => {
  keyValuePair.map(o => {
    set(o.key, o.value);
  });
};

const get = key => {
  return store[key];
};

const getMultiple = keys => {
  return keys.reduce((acc, o) => {
    acc[o] = get(o);
    return acc;
  }, {});
};

const clear = () => {
  store = {};
};

const addListener = (name, listener) => {
  if (listeners.hasOwnProperty(name)) {
    throw new Error("Listener by this name already exists");
  }
  listeners[name] = listener;
  return name;
};

const removeListener = name => {
  delete listeners[name];
};

const removeAllListeners = () => {
  listeners = {};
};

export const contains = key => {
  return store.hasOwnProperty(key);
};

const remove = key => {
  const data = store[key];
  delete store[key];
  Object.values(listeners).forEach(listener => {
    listener({ event: EVENT_REMOVE, data });
  });
};

const removeMultiple = keys => {
  keys.forEach(o => {
    remove(o);
  });
};

const getAllKeys = () => {
  return Object.keys(store);
};

module.exports.GlobalStore = {
  set,
  setMultiple,
  get,
  getMultiple,
  clear,
  contains,
  addListener,
  removeListener,
  removeAllListeners,
  remove,
  removeMultiple,
  getAllKeys
};
