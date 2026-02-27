(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-browser'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-browser'.");
    }
    globalThis['kotlinx-browser'] = factory(typeof globalThis['kotlinx-browser'] === 'undefined' ? {} : globalThis['kotlinx-browser'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var THROW_CCE = kotlin_kotlin.$_$.ul;
  var VOID = kotlin_kotlin.$_$.e;
  //endregion
  //region block: pre-declaration
  //endregion
  function ShadowRootInit(mode) {
    var o = {};
    o['mode'] = mode;
    return (!(o == null) ? !(o == null) : false) ? o : THROW_CCE();
  }
  function get_OPEN(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    return 'open';
  }
  function AddEventListenerOptions(passive, once, capture) {
    passive = passive === VOID ? false : passive;
    once = once === VOID ? false : once;
    capture = capture === VOID ? false : capture;
    var o = {};
    o['passive'] = passive;
    o['once'] = once;
    o['capture'] = capture;
    return (!(o == null) ? !(o == null) : false) ? o : THROW_CCE();
  }
  function get_LOADING(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    return 'loading';
  }
  function CacheQueryOptions(ignoreSearch, ignoreMethod, ignoreVary, cacheName) {
    ignoreSearch = ignoreSearch === VOID ? false : ignoreSearch;
    ignoreMethod = ignoreMethod === VOID ? false : ignoreMethod;
    ignoreVary = ignoreVary === VOID ? false : ignoreVary;
    cacheName = cacheName === VOID ? get_undefined() : cacheName;
    var o = {};
    o['ignoreSearch'] = ignoreSearch;
    o['ignoreMethod'] = ignoreMethod;
    o['ignoreVary'] = ignoreVary;
    o['cacheName'] = cacheName;
    return (!(o == null) ? !(o == null) : false) ? o : THROW_CCE();
  }
  function get_undefined() {
    return undefined_0;
  }
  var undefined_0;
  //region block: init
  undefined_0 = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_undefined;
  //endregion
  return _;
}));
