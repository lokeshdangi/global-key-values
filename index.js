let store = {};

// TODO: override error or not
// TODO: persist values

let listeners = {};

const set = (key, value) => {
  store[key] = value;
  Object.values(listeners).forEach(listener => {
    listener({ key, value });
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

const reset = () => {
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

module.exports.GlobalStore = {
  set,
  setMultiple,
  get,
  getMultiple,
  reset,
  contains,
  addListener,
  removeListener,
  removeAllListeners
};
