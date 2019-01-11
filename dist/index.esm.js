import React, { createContext, useReducer, useEffect, useState, useContext } from 'react';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var subscribers = [];

function subscribe(fn) {
  if (typeof fn === 'function' && subscribers.indexOf(fn) === -1) {
    subscribers.push(fn);
  }
}

function unsubscribe(fn) {
  var index = subscribers.indexOf(fn);

  if (index !== -1) {
    subscribers.splice(index, 1);
  }
}

function publish(state) {
  subscribers.forEach(function (fn) {
    return fn(state);
  });
}

var DispatchContext = createContext();

var globalDispatch;

function logAndDispatch(action) {
  console.log('Action: ', action);
  return globalDispatch(action);
}

function Store(props) {
  var initialState = props.rootReducer(props.initialValue || {}, {
    type: '__INIT__'
  });

  var _useReducer = useReducer(props.rootReducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  useEffect(function () {
    if (props.log) {
      console.log('State: ', state);
    }

    publish(state);
  }, [state]);
  globalDispatch = dispatch;
  return React.createElement(DispatchContext.Provider, {
    value: props.log ? logAndDispatch : dispatch
  }, props.children);
}

// This was taken from react-redux!
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (_typeof(objA) !== 'object' || objA === null || _typeof(objB) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

var oldState;
function useStore(mapContextToState, initialState) {
  var _useState = useState(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  oldState = state;
  useEffect(function () {
    subscribe(handleContextChange);
    return function () {
      return unsubscribe(handleContextChange);
    };
  }, []);

  var handleContextChange = function handleContextChange(context) {
    if (typeof mapContextToState === 'function') {
      var newState = mapContextToState(context);

      if (!shallowEqual(newState, oldState)) {
        setState(newState);
      }
    } else {
      setState(context);
    }
  };

  return state;
}

function useDispatch() {
  return useContext(DispatchContext);
}

function combineReducers(reducers) {
  return function (state, action) {
    var newState = {};
    Object.keys(reducers).forEach(function (r) {
      var reducerState = state[r];
      reducerState = reducers[r](reducerState, action);
      newState[r] = reducerState;
    });
    return newState;
  };
}

export { Store, useStore, useDispatch, combineReducers };
