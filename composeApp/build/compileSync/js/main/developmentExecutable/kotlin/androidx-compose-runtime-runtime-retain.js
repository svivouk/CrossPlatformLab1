(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-compose-runtime-runtime-retain'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-compose-runtime-runtime-retain'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-compose-runtime-runtime-retain'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'androidx-compose-runtime-runtime-retain'.");
    }
    globalThis['androidx-compose-runtime-runtime-retain'] = factory(typeof globalThis['androidx-compose-runtime-runtime-retain'] === 'undefined' ? {} : globalThis['androidx-compose-runtime-runtime-retain'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ah;
  var isInterface = kotlin_kotlin.$_$.ng;
  var initMetadataForObject = kotlin_kotlin.$_$.eg;
  var VOID = kotlin_kotlin.$_$.e;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.o2;
  var initMetadataForInterface = kotlin_kotlin.$_$.cg;
  var initMetadataForClass = kotlin_kotlin.$_$.yf;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(RetainedValuesStore, 'RetainedValuesStore');
  initMetadataForObject(ForgetfulRetainedValuesStore, 'ForgetfulRetainedValuesStore', VOID, VOID, [RetainedValuesStore]);
  initMetadataForInterface(RetainObserver, 'RetainObserver');
  initMetadataForInterface(RetainedEffectResult, 'RetainedEffectResult');
  initMetadataForClass(RetainedEffectScope$onRetire$1, VOID, VOID, VOID, [RetainedEffectResult]);
  initMetadataForClass(RetainedEffectScope, 'RetainedEffectScope', RetainedEffectScope);
  //endregion
  var androidx_compose_runtime_retain_ForgetfulRetainedValuesStore$stable;
  function ForgetfulRetainedValuesStore() {
    ForgetfulRetainedValuesStore_instance = this;
  }
  protoOf(ForgetfulRetainedValuesStore).onContentEnteredComposition_112l99_k$ = function () {
  };
  protoOf(ForgetfulRetainedValuesStore).onContentExitComposition_yzhdsu_k$ = function () {
  };
  protoOf(ForgetfulRetainedValuesStore).consumeExitedValueOrDefault_cerh7r_k$ = function (key, defaultValue) {
    return defaultValue;
  };
  protoOf(ForgetfulRetainedValuesStore).saveExitingValue_ksocn9_k$ = function (key, value) {
    if (!(value == null) ? isInterface(value, RetainObserver) : false) {
      value.onRetired_ryb0fu_k$();
    }
  };
  var ForgetfulRetainedValuesStore_instance;
  function ForgetfulRetainedValuesStore_getInstance() {
    if (ForgetfulRetainedValuesStore_instance == null)
      new ForgetfulRetainedValuesStore();
    return ForgetfulRetainedValuesStore_instance;
  }
  function get_LocalRetainedValuesStore() {
    _init_properties_LocalRetainedValuesStore_kt__ccuf80();
    return LocalRetainedValuesStore;
  }
  var LocalRetainedValuesStore;
  function LocalRetainedValuesStore$lambda() {
    _init_properties_LocalRetainedValuesStore_kt__ccuf80();
    return ForgetfulRetainedValuesStore_getInstance();
  }
  var properties_initialized_LocalRetainedValuesStore_kt_6m23wu;
  function _init_properties_LocalRetainedValuesStore_kt__ccuf80() {
    if (!properties_initialized_LocalRetainedValuesStore_kt_6m23wu) {
      properties_initialized_LocalRetainedValuesStore_kt_6m23wu = true;
      LocalRetainedValuesStore = staticCompositionLocalOf(LocalRetainedValuesStore$lambda);
    }
  }
  var androidx_compose_runtime_retain_ManagedRetainedValuesStore$stable;
  function get_RetainedValuesStoreMissingValue() {
    _init_properties_Retain_kt__9nht1();
    return RetainedValuesStoreMissingValue;
  }
  var RetainedValuesStoreMissingValue;
  var properties_initialized_Retain_kt_b7s7rt;
  function _init_properties_Retain_kt__9nht1() {
    if (!properties_initialized_Retain_kt_b7s7rt) {
      properties_initialized_Retain_kt_b7s7rt = true;
      RetainedValuesStoreMissingValue = new Object();
    }
  }
  function RetainObserver() {
  }
  function get_InternalRetainedEffectScope() {
    _init_properties_RetainedEffect_kt__g5rdvv();
    return InternalRetainedEffectScope;
  }
  var InternalRetainedEffectScope;
  var androidx_compose_runtime_retain_RetainedEffectScope$stable;
  function RetainedEffectScope$onRetire$1($onRetiredEffect) {
    this.$onRetiredEffect_1 = $onRetiredEffect;
  }
  protoOf(RetainedEffectScope$onRetire$1).retire_a0oj0r_k$ = function () {
    this.$onRetiredEffect_1();
  };
  function RetainedEffectScope() {
  }
  protoOf(RetainedEffectScope).onRetire_7y4qwi_k$ = function (onRetiredEffect) {
    return new RetainedEffectScope$onRetire$1(onRetiredEffect);
  };
  function RetainedEffectResult() {
  }
  var properties_initialized_RetainedEffect_kt_sr7x3d;
  function _init_properties_RetainedEffect_kt__g5rdvv() {
    if (!properties_initialized_RetainedEffect_kt_sr7x3d) {
      properties_initialized_RetainedEffect_kt_sr7x3d = true;
      InternalRetainedEffectScope = new RetainedEffectScope();
      androidx_compose_runtime_retain_RetainedEffectScope$stable = 0;
    }
  }
  var androidx_compose_runtime_retain_RetainedValueHolder$stable;
  function RetainedValuesStore() {
  }
  var androidx_compose_runtime_retain_RetainedValuesStoreRegistry$stable;
  function get_NULL_SENTINEL() {
    _init_properties_SafeMultiValueMap_kt__1ohz7p();
    return NULL_SENTINEL;
  }
  var NULL_SENTINEL;
  var androidx_compose_runtime_retain_impl_SafeMultiValueMap_ValueSafetyWrapper$stable;
  var properties_initialized_SafeMultiValueMap_kt_7qxgxl;
  function _init_properties_SafeMultiValueMap_kt__1ohz7p() {
    if (!properties_initialized_SafeMultiValueMap_kt_7qxgxl) {
      properties_initialized_SafeMultiValueMap_kt_7qxgxl = true;
      NULL_SENTINEL = new Object();
      androidx_compose_runtime_retain_impl_SafeMultiValueMap_ValueSafetyWrapper$stable = 8;
    }
  }
  //region block: init
  androidx_compose_runtime_retain_ForgetfulRetainedValuesStore$stable = 0;
  androidx_compose_runtime_retain_ManagedRetainedValuesStore$stable = 8;
  androidx_compose_runtime_retain_RetainedValueHolder$stable = 8;
  androidx_compose_runtime_retain_RetainedValuesStoreRegistry$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalRetainedValuesStore;
  _.$_$.b = ForgetfulRetainedValuesStore_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-compose-runtime-runtime-retain.js.map
