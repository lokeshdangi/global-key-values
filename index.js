let store = {};

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
  return id;
};

const removeListener = name => {
  delete listeners[name];
};

const removeAllListeners = () => {
  listeners = {};
};

exports.GlobalStore = {
  set,
  setMultiple,
  get,
  getMultiple,
  reset,
  addListener,
  removeListener,
  removeAllListeners
};

module.exports = store;
