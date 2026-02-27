(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-lifecycle-lifecycle-common.js', './kotlin-kotlin-stdlib.js', './androidx-savedstate-savedstate.js', './androidx-lifecycle-lifecycle-viewmodel.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-lifecycle-lifecycle-common.js'), require('./kotlin-kotlin-stdlib.js'), require('./androidx-savedstate-savedstate.js'), require('./androidx-lifecycle-lifecycle-viewmodel.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['androidx-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'androidx-lifecycle-lifecycle-common' was not found. Please, check whether 'androidx-lifecycle-lifecycle-common' is loaded prior to 'androidx-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    if (typeof globalThis['androidx-savedstate-savedstate'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'androidx-savedstate-savedstate' was not found. Please, check whether 'androidx-savedstate-savedstate' is loaded prior to 'androidx-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    if (typeof globalThis['androidx-lifecycle-lifecycle-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'androidx-lifecycle-lifecycle-viewmodel' was not found. Please, check whether 'androidx-lifecycle-lifecycle-viewmodel' is loaded prior to 'androidx-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'androidx-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    globalThis['androidx-lifecycle-lifecycle-viewmodel-savedstate'] = factory(typeof globalThis['androidx-lifecycle-lifecycle-viewmodel-savedstate'] === 'undefined' ? {} : globalThis['androidx-lifecycle-lifecycle-viewmodel-savedstate'], globalThis['androidx-lifecycle-lifecycle-common'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-savedstate-savedstate'], globalThis['androidx-lifecycle-lifecycle-viewmodel'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_androidx_lifecycle_lifecycle_common, kotlin_kotlin, kotlin_androidx_savedstate_savedstate, kotlin_androidx_lifecycle_lifecycle_viewmodel, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var State_INITIALIZED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.l;
  var State_CREATED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.j;
  var toString = kotlin_kotlin.$_$.dh;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var Unit_getInstance = kotlin_kotlin.$_$.l5;
  var KProperty1 = kotlin_kotlin.$_$.li;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vf;
  var lazy = kotlin_kotlin.$_$.um;
  var emptyMap = kotlin_kotlin.$_$.k9;
  var toMutableMap = kotlin_kotlin.$_$.wc;
  var SavedState = kotlin_androidx_savedstate_savedstate.$_$.c;
  var _SavedStateWriter___init__impl__99cr38 = kotlin_androidx_savedstate_savedstate.$_$.i;
  var SavedStateWriter__putAll_impl_no0lvi = kotlin_androidx_savedstate_savedstate.$_$.j;
  var _SavedStateReader___init__impl__k2stzo = kotlin_androidx_savedstate_savedstate.$_$.d;
  var SavedStateReader__isEmpty_impl_ep4h1z = kotlin_androidx_savedstate_savedstate.$_$.g;
  var SavedStateWriter__putSavedState_impl_5xy7ov = kotlin_androidx_savedstate_savedstate.$_$.k;
  var protoOf = kotlin_kotlin.$_$.ah;
  var SavedStateReader__contains_impl_ig4u69 = kotlin_androidx_savedstate_savedstate.$_$.e;
  var SavedStateReader__getSavedStateOrNull_impl_pv2mts = kotlin_androidx_savedstate_savedstate.$_$.f;
  var SavedStateWriter__remove_impl_9y9m5w = kotlin_androidx_savedstate_savedstate.$_$.l;
  var SavedStateProvider = kotlin_androidx_savedstate_savedstate.$_$.a;
  var initMetadataForClass = kotlin_kotlin.$_$.yf;
  var VOID = kotlin_kotlin.$_$.e;
  var Event_ON_CREATE_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.d;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var LifecycleEventObserver = kotlin_androidx_lifecycle_lifecycle_common.$_$.a;
  var ViewModel = kotlin_androidx_lifecycle_lifecycle_viewmodel.$_$.g;
  var ViewModel_init_$Init$ = kotlin_androidx_lifecycle_lifecycle_viewmodel.$_$.i;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var Companion_getInstance = kotlin_androidx_lifecycle_lifecycle_viewmodel.$_$.k;
  var getKClass = kotlin_kotlin.$_$.gi;
  var Key = kotlin_androidx_lifecycle_lifecycle_viewmodel.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.ul;
  var Factory = kotlin_androidx_lifecycle_lifecycle_viewmodel.$_$.d;
  var Companion_getInstance_0 = kotlin_androidx_lifecycle_lifecycle_viewmodel.$_$.j;
  var equals = kotlin_kotlin.$_$.qf;
  var FunctionAdapter = kotlin_kotlin.$_$.bf;
  var isInterface = kotlin_kotlin.$_$.ng;
  var hashCode = kotlin_kotlin.$_$.xf;
  var toMap = kotlin_kotlin.$_$.tc;
  var KtMap = kotlin_kotlin.$_$.i6;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var StateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var MutableStateFlow_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var plus = kotlin_kotlin.$_$.gb;
  var ClassCastException = kotlin_kotlin.$_$.el;
  var objectCreate = kotlin_kotlin.$_$.zg;
  var SavedStateReader__toMap_impl_49zebr = kotlin_androidx_savedstate_savedstate.$_$.h;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zf;
  var create = kotlin_androidx_lifecycle_lifecycle_viewmodel.$_$.c;
  var Char = kotlin_kotlin.$_$.dl;
  var Long = kotlin_kotlin.$_$.nl;
  var isCharSequence = kotlin_kotlin.$_$.jg;
  var isByteArray = kotlin_kotlin.$_$.hg;
  var isBooleanArray = kotlin_kotlin.$_$.gg;
  var isDoubleArray = kotlin_kotlin.$_$.kg;
  var isCharArray = kotlin_kotlin.$_$.ig;
  var isIntArray = kotlin_kotlin.$_$.mg;
  var isFloatArray = kotlin_kotlin.$_$.lg;
  var isShortArray = kotlin_kotlin.$_$.og;
  var isLongArray = kotlin_kotlin.$_$.qe;
  var firstOrNull = kotlin_kotlin.$_$.p9;
  var KtList = kotlin_kotlin.$_$.f6;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(SavedStateHandlesProvider, 'SavedStateHandlesProvider', VOID, VOID, [SavedStateProvider]);
  initMetadataForClass(SavedStateHandleAttacher, 'SavedStateHandleAttacher', VOID, VOID, [LifecycleEventObserver]);
  initMetadataForClass(SavedStateHandlesVM, 'SavedStateHandlesVM', SavedStateHandlesVM, ViewModel);
  initMetadataForClass(SAVED_STATE_REGISTRY_OWNER_KEY$$inlined$Key$1, VOID, VOID, VOID, [Key]);
  initMetadataForClass(VIEW_MODEL_STORE_OWNER_KEY$$inlined$Key$1, VOID, VOID, VOID, [Key]);
  initMetadataForClass(DEFAULT_ARGS_KEY$$inlined$Key$1, VOID, VOID, VOID, [Key]);
  initMetadataForClass(savedStateHandlesVM$1, VOID, VOID, VOID, [Factory]);
  initMetadataForClass(sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0, 'sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0', VOID, VOID, [SavedStateProvider, FunctionAdapter]);
  initMetadataForClass(SavedStateHandleImpl, 'SavedStateHandleImpl', SavedStateHandleImpl);
  initMetadataForCompanion(Companion);
  initMetadataForClass(SavedStateHandle, 'SavedStateHandle', SavedStateHandle_init_$Create$_0);
  initMetadataForClass(SavedStateViewModelFactory, 'SavedStateViewModelFactory', SavedStateViewModelFactory, VOID, [Factory]);
  //endregion
  function get_SAVED_STATE_REGISTRY_OWNER_KEY() {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    return SAVED_STATE_REGISTRY_OWNER_KEY;
  }
  var SAVED_STATE_REGISTRY_OWNER_KEY;
  function get_VIEW_MODEL_STORE_OWNER_KEY() {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    return VIEW_MODEL_STORE_OWNER_KEY;
  }
  var VIEW_MODEL_STORE_OWNER_KEY;
  function get_DEFAULT_ARGS_KEY() {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    return DEFAULT_ARGS_KEY;
  }
  var DEFAULT_ARGS_KEY;
  function enableSavedStateHandles(_this__u8e3s4) {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    var currentState = _this__u8e3s4.get_lifecycle_3iiym9_k$().get_currentState_snihnl_k$();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(currentState.equals(State_INITIALIZED_getInstance()) || currentState.equals(State_CREATED_getInstance()))) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (_this__u8e3s4.get_savedStateRegistry_c47b5c_k$().getSavedStateProvider_j42zqv_k$('androidx.lifecycle.internal.SavedStateHandlesProvider') == null) {
      var provider = new SavedStateHandlesProvider(_this__u8e3s4.get_savedStateRegistry_c47b5c_k$(), _this__u8e3s4);
      _this__u8e3s4.get_savedStateRegistry_c47b5c_k$().registerSavedStateProvider_k3a9pp_k$('androidx.lifecycle.internal.SavedStateHandlesProvider', provider);
      _this__u8e3s4.get_lifecycle_3iiym9_k$().addObserver_xhlg3u_k$(new SavedStateHandleAttacher(provider));
    }
  }
  function _get_savedStateRegistry__7wsyx0($this) {
    return $this.savedStateRegistry_1;
  }
  function _set_restored__6segw1($this, _set____db54di) {
    $this.restored_1 = _set____db54di;
  }
  function _get_restored__60hukr($this) {
    return $this.restored_1;
  }
  function _set_restoredState__84y6tm($this, _set____db54di) {
    $this.restoredState_1 = _set____db54di;
  }
  function _get_restoredState__72tboq($this) {
    return $this.restoredState_1;
  }
  function _get_viewModel__fokd3h($this) {
    var tmp0 = $this.viewModel$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('viewModel', 1, tmp, SavedStateHandlesProvider$_get_viewModel_$ref_aibsd2(), null);
    return tmp0.get_value_j01efc_k$();
  }
  function SavedStateHandlesProvider$viewModel$delegate$lambda($viewModelStoreOwner) {
    return function () {
      return get_savedStateHandlesVM($viewModelStoreOwner);
    };
  }
  function SavedStateHandlesProvider$_get_viewModel_$ref_aibsd2() {
    return function (p0) {
      return _get_viewModel__fokd3h(p0);
    };
  }
  function SavedStateHandlesProvider(savedStateRegistry, viewModelStoreOwner) {
    this.savedStateRegistry_1 = savedStateRegistry;
    this.restored_1 = false;
    this.restoredState_1 = null;
    var tmp = this;
    tmp.viewModel$delegate_1 = lazy(SavedStateHandlesProvider$viewModel$delegate$lambda(viewModelStoreOwner));
  }
  protoOf(SavedStateHandlesProvider).saveState_2v0z6c_k$ = function () {
    // Inline function 'androidx.savedstate.savedState' call
    var initialState = emptyMap();
    var copiedState = toMutableMap(initialState);
    // Inline function 'kotlin.apply' call
    var this_0 = new SavedState(copiedState);
    // Inline function 'androidx.savedstate.write' call
    var $this$savedState = _SavedStateWriter___init__impl__99cr38(this_0);
    var tmp0_safe_receiver = this.restoredState_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      SavedStateWriter__putAll_impl_no0lvi($this$savedState, tmp0_safe_receiver);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = _get_viewModel__fokd3h(this).handles_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var key = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var handle = element.get_value_j01efc_k$();
      var savedState = handle.savedStateProvider_jcu205_k$().saveState_2v0z6c_k$();
      // Inline function 'androidx.savedstate.read' call
      var $this$read = _SavedStateReader___init__impl__k2stzo(savedState);
      if (!SavedStateReader__isEmpty_impl_ep4h1z($this$read)) {
        SavedStateWriter__putSavedState_impl_5xy7ov($this$savedState, key, savedState);
      }
    }
    this.restored_1 = false;
    return this_0;
  };
  protoOf(SavedStateHandlesProvider).performRestore_fnhj4t_k$ = function () {
    if (!this.restored_1) {
      var newState = this.savedStateRegistry_1.consumeRestoredStateForKey_hbgcbf_k$('androidx.lifecycle.internal.SavedStateHandlesProvider');
      var tmp = this;
      // Inline function 'androidx.savedstate.savedState' call
      var initialState = emptyMap();
      var copiedState = toMutableMap(initialState);
      // Inline function 'kotlin.apply' call
      var this_0 = new SavedState(copiedState);
      // Inline function 'androidx.savedstate.write' call
      var $this$savedState = _SavedStateWriter___init__impl__99cr38(this_0);
      var tmp0_safe_receiver = this.restoredState_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        SavedStateWriter__putAll_impl_no0lvi($this$savedState, tmp0_safe_receiver);
      }
      if (newState == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        SavedStateWriter__putAll_impl_no0lvi($this$savedState, newState);
      }
      tmp.restoredState_1 = this_0;
      this.restored_1 = true;
      _get_viewModel__fokd3h(this);
    }
  };
  protoOf(SavedStateHandlesProvider).consumeRestoredStateForKey_hbgcbf_k$ = function (key) {
    this.performRestore_fnhj4t_k$();
    var tmp0_elvis_lhs = this.restoredState_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var state = tmp;
    // Inline function 'androidx.savedstate.read' call
    var $this$read = _SavedStateReader___init__impl__k2stzo(state);
    if (!SavedStateReader__contains_impl_ig4u69($this$read, key))
      return null;
    // Inline function 'androidx.savedstate.read' call
    var $this$read_0 = _SavedStateReader___init__impl__k2stzo(state);
    var tmp0_elvis_lhs_0 = SavedStateReader__getSavedStateOrNull_impl_pv2mts($this$read_0, key);
    var tmp_0;
    if (tmp0_elvis_lhs_0 == null) {
      // Inline function 'androidx.savedstate.savedState' call
      var initialState = emptyMap();
      var copiedState = toMutableMap(initialState);
      // Inline function 'kotlin.apply' call
      var this_0 = new SavedState(copiedState);
      // Inline function 'androidx.savedstate.write' call
      _SavedStateWriter___init__impl__99cr38(this_0);
      tmp_0 = this_0;
    } else {
      tmp_0 = tmp0_elvis_lhs_0;
    }
    var result = tmp_0;
    // Inline function 'androidx.savedstate.write' call
    var $this$write = _SavedStateWriter___init__impl__99cr38(state);
    SavedStateWriter__remove_impl_9y9m5w($this$write, key);
    // Inline function 'androidx.savedstate.read' call
    var $this$read_1 = _SavedStateReader___init__impl__k2stzo(state);
    if (SavedStateReader__isEmpty_impl_ep4h1z($this$read_1)) {
      this.restoredState_1 = null;
    }
    return result;
  };
  function _get_provider__fg8hru($this) {
    return $this.provider_1;
  }
  function SavedStateHandleAttacher(provider) {
    this.provider_1 = provider;
  }
  protoOf(SavedStateHandleAttacher).onStateChanged_3qr65s_k$ = function (source, event) {
    // Inline function 'kotlin.check' call
    if (!event.equals(Event_ON_CREATE_getInstance())) {
      var message = 'Next event must be ON_CREATE, it was ' + event.toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    source.get_lifecycle_3iiym9_k$().removeObserver_thdcdj_k$(this);
    this.provider_1.performRestore_fnhj4t_k$();
  };
  function SavedStateHandlesVM() {
    ViewModel_init_$Init$(this);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.handles_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(SavedStateHandlesVM).get_handles_cq14ki_k$ = function () {
    return this.handles_1;
  };
  function get_savedStateHandlesVM(_this__u8e3s4) {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    var tmp = Companion_getInstance();
    return tmp.create$default_kyfkyv_k$(_this__u8e3s4, new savedStateHandlesVM$1()).get_2zg3lp_k$('androidx.lifecycle.internal.SavedStateHandlesVM', getKClass(SavedStateHandlesVM));
  }
  function SAVED_STATE_REGISTRY_OWNER_KEY$$inlined$Key$1() {
  }
  function VIEW_MODEL_STORE_OWNER_KEY$$inlined$Key$1() {
  }
  function DEFAULT_ARGS_KEY$$inlined$Key$1() {
  }
  function savedStateHandlesVM$1() {
  }
  protoOf(savedStateHandlesVM$1).create_jhkoyr_k$ = function (modelClass, extras) {
    var tmp = new SavedStateHandlesVM();
    return tmp instanceof ViewModel ? tmp : THROW_CCE();
  };
  var properties_initialized_SavedStateHandleSupport_kt_6hqgvh;
  function _init_properties_SavedStateHandleSupport_kt__nxqisr() {
    if (!properties_initialized_SavedStateHandleSupport_kt_6hqgvh) {
      properties_initialized_SavedStateHandleSupport_kt_6hqgvh = true;
      // Inline function 'androidx.lifecycle.viewmodel.Companion.Key' call
      Companion_getInstance_0();
      SAVED_STATE_REGISTRY_OWNER_KEY = new SAVED_STATE_REGISTRY_OWNER_KEY$$inlined$Key$1();
      // Inline function 'androidx.lifecycle.viewmodel.Companion.Key' call
      Companion_getInstance_0();
      VIEW_MODEL_STORE_OWNER_KEY = new VIEW_MODEL_STORE_OWNER_KEY$$inlined$Key$1();
      // Inline function 'androidx.lifecycle.viewmodel.Companion.Key' call
      Companion_getInstance_0();
      DEFAULT_ARGS_KEY = new DEFAULT_ARGS_KEY$$inlined$Key$1();
    }
  }
  function _get_providers__i8h1jl($this) {
    return $this.providers_1;
  }
  function _get_flows__hips44($this) {
    return $this.flows_1;
  }
  function sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0).saveState_2v0z6c_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SavedStateProvider) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function SavedStateHandleImpl$savedStateProvider$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = toMap(this$0.mutableFlows_1).get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var _destruct__k2r9zo = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlin.collections.component1' call
        var key = _destruct__k2r9zo.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var mutableFlow = _destruct__k2r9zo.get_value_j01efc_k$();
        this$0.set_2ioqze_k$(key, mutableFlow.get_value_j01efc_k$());
      }
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_0 = toMap(this$0.providers_1).get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var _destruct__k2r9zo_0 = _iterator__ex2g4s_0.next_20eer_k$();
        // Inline function 'kotlin.collections.component1' call
        var key_0 = _destruct__k2r9zo_0.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var provider = _destruct__k2r9zo_0.get_value_j01efc_k$();
        this$0.set_2ioqze_k$(key_0, provider.saveState_2v0z6c_k$());
      }
      // Inline function 'androidx.savedstate.savedState' call
      var initialState = this$0.regular_1;
      var copiedState = toMutableMap(initialState);
      // Inline function 'kotlin.apply' call
      var this_0 = new SavedState(copiedState);
      // Inline function 'androidx.savedstate.write' call
      _SavedStateWriter___init__impl__99cr38(this_0);
      return this_0;
    };
  }
  function SavedStateHandleImpl(initialState) {
    initialState = initialState === VOID ? emptyMap() : initialState;
    this.regular_1 = toMutableMap(initialState);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.providers_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.flows_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.mutableFlows_1 = LinkedHashMap_init_$Create$();
    var tmp_2 = this;
    var tmp_3 = SavedStateHandleImpl$savedStateProvider$lambda(this);
    tmp_2.savedStateProvider_1 = new sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0(tmp_3);
  }
  protoOf(SavedStateHandleImpl).get_regular_j8emyb_k$ = function () {
    return this.regular_1;
  };
  protoOf(SavedStateHandleImpl).get_mutableFlows_2cn1l4_k$ = function () {
    return this.mutableFlows_1;
  };
  protoOf(SavedStateHandleImpl).get_savedStateProvider_777isk_k$ = function () {
    return this.savedStateProvider_1;
  };
  protoOf(SavedStateHandleImpl).fun_savedStateProvider = function () {
    return this.savedStateProvider_1;
  };
  protoOf(SavedStateHandleImpl).contains_zh0gsb_k$ = function (key) {
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.regular_1;
    return (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(key);
  };
  protoOf(SavedStateHandleImpl).getStateFlow_6p79dg_k$ = function (key, initialValue) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.flows_1;
    var value = this_0.get_wei43m_k$(key);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_1 = this.regular_1;
      if (!(isInterface(this_1, KtMap) ? this_1 : THROW_CCE()).containsKey_aw81wo_k$(key)) {
        // Inline function 'kotlin.collections.set' call
        this.regular_1.put_4fpzoq_k$(key, initialValue);
      }
      var answer = MutableStateFlow(this.regular_1.get_wei43m_k$(key));
      this_0.put_4fpzoq_k$(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var flow = tmp;
    var tmp_0 = asStateFlow(flow);
    return isInterface(tmp_0, StateFlow) ? tmp_0 : THROW_CCE();
  };
  protoOf(SavedStateHandleImpl).getMutableStateFlow_b2kj8a_k$ = function (key, initialValue) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.mutableFlows_1;
    var value = this_0.get_wei43m_k$(key);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_1 = this.regular_1;
      if (!(isInterface(this_1, KtMap) ? this_1 : THROW_CCE()).containsKey_aw81wo_k$(key)) {
        // Inline function 'kotlin.collections.set' call
        this.regular_1.put_4fpzoq_k$(key, initialValue);
      }
      var answer = MutableStateFlow(this.regular_1.get_wei43m_k$(key));
      this_0.put_4fpzoq_k$(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var flow = tmp;
    return isInterface(flow, MutableStateFlow_0) ? flow : THROW_CCE();
  };
  protoOf(SavedStateHandleImpl).keys_1yhh0_k$ = function () {
    return plus(this.regular_1.get_keys_wop4xp_k$(), this.providers_1.get_keys_wop4xp_k$());
  };
  protoOf(SavedStateHandleImpl).get_1z5p00_k$ = function (key) {
    var tmp;
    try {
      var tmp0_safe_receiver = this.mutableFlows_1.get_wei43m_k$(key);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_value_j01efc_k$();
      var tmp_0 = tmp1_elvis_lhs == null ? this.regular_1.get_wei43m_k$(key) : tmp1_elvis_lhs;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof ClassCastException) {
        var e = $p;
        this.remove_kwgu_k$(key);
        tmp_1 = null;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  protoOf(SavedStateHandleImpl).set_2ioqze_k$ = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.regular_1.put_4fpzoq_k$(key, value);
    var tmp0_safe_receiver = this.flows_1.get_wei43m_k$(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.set_value_v1vabv_k$(value);
    }
    var tmp1_safe_receiver = this.mutableFlows_1.get_wei43m_k$(key);
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.set_value_v1vabv_k$(value);
    }
  };
  protoOf(SavedStateHandleImpl).remove_kwgu_k$ = function (key) {
    var tmp = this.regular_1.remove_gppy8k_k$(key);
    var latestValue = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.flows_1.remove_gppy8k_k$(key);
    this.mutableFlows_1.remove_gppy8k_k$(key);
    return latestValue;
  };
  protoOf(SavedStateHandleImpl).setSavedStateProvider_kcymr2_k$ = function (key, provider) {
    // Inline function 'kotlin.collections.set' call
    this.providers_1.put_4fpzoq_k$(key, provider);
  };
  protoOf(SavedStateHandleImpl).clearSavedStateProvider_1yfuw2_k$ = function (key) {
    this.providers_1.remove_gppy8k_k$(key);
  };
  function _set_impl__9ogwfr($this, _set____db54di) {
    $this.impl_1 = _set____db54di;
  }
  function _get_impl__d88w17($this) {
    return $this.impl_1;
  }
  function SavedStateHandle_init_$Init$(initialState, $this) {
    SavedStateHandle.call($this);
    $this.impl_1 = new SavedStateHandleImpl(initialState);
    return $this;
  }
  function SavedStateHandle_init_$Create$(initialState) {
    return SavedStateHandle_init_$Init$(initialState, objectCreate(protoOf(SavedStateHandle)));
  }
  function SavedStateHandle_init_$Init$_0($this) {
    SavedStateHandle.call($this);
    $this.impl_1 = new SavedStateHandleImpl();
    return $this;
  }
  function SavedStateHandle_init_$Create$_0() {
    return SavedStateHandle_init_$Init$_0(objectCreate(protoOf(SavedStateHandle)));
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).createHandle_ccnvp8_k$ = function (restoredState, defaultState) {
    var initialState = restoredState == null ? defaultState : restoredState;
    if (initialState == null)
      return SavedStateHandle_init_$Create$_0();
    // Inline function 'androidx.savedstate.read' call
    var $this$read = _SavedStateReader___init__impl__k2stzo(initialState);
    var tmp$ret$1 = SavedStateReader__toMap_impl_49zebr($this$read);
    return SavedStateHandle_init_$Create$(tmp$ret$1);
  };
  protoOf(Companion).validateValue_t94490_k$ = function (value) {
    return isAcceptableType(value);
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  protoOf(SavedStateHandle).savedStateProvider_jcu205_k$ = function () {
    return this.impl_1.fun_savedStateProvider();
  };
  protoOf(SavedStateHandle).contains_zh0gsb_k$ = function (key) {
    return this.impl_1.contains_zh0gsb_k$(key);
  };
  protoOf(SavedStateHandle).getStateFlow_6p79dg_k$ = function (key, initialValue) {
    return asStateFlow(this.impl_1.getMutableStateFlow_b2kj8a_k$(key, initialValue));
  };
  protoOf(SavedStateHandle).getMutableStateFlow_b2kj8a_k$ = function (key, initialValue) {
    return this.impl_1.getMutableStateFlow_b2kj8a_k$(key, initialValue);
  };
  protoOf(SavedStateHandle).keys_1yhh0_k$ = function () {
    return this.impl_1.keys_1yhh0_k$();
  };
  protoOf(SavedStateHandle).get_1z5p00_k$ = function (key) {
    return this.impl_1.get_1z5p00_k$(key);
  };
  protoOf(SavedStateHandle).set_2ioqze_k$ = function (key, value) {
    return this.impl_1.set_2ioqze_k$(key, value);
  };
  protoOf(SavedStateHandle).remove_kwgu_k$ = function (key) {
    return this.impl_1.remove_kwgu_k$(key);
  };
  protoOf(SavedStateHandle).setSavedStateProvider_kcymr2_k$ = function (key, provider) {
    return this.impl_1.setSavedStateProvider_kcymr2_k$(key, provider);
  };
  protoOf(SavedStateHandle).clearSavedStateProvider_1yfuw2_k$ = function (key) {
    this.impl_1.clearSavedStateProvider_1yfuw2_k$(key);
  };
  function SavedStateHandle() {
    Companion_getInstance_1();
  }
  function SavedStateViewModelFactory() {
  }
  protoOf(SavedStateViewModelFactory).create_jhkoyr_k$ = function (modelClass, extras) {
    return create.call(this, modelClass, extras);
  };
  function isAcceptableType(value) {
    var tmp;
    if (value == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (!(value == null) ? typeof value === 'boolean' : false) {
        tmp_2 = true;
      } else {
        tmp_2 = !(value == null) ? typeof value === 'number' : false;
      }
      if (tmp_2) {
        tmp_1 = true;
      } else {
        var tmp_3;
        if (value instanceof Char) {
          tmp_3 = true;
        } else {
          tmp_3 = !(value == null) ? typeof value === 'number' : false;
        }
        tmp_1 = tmp_3;
      }
      if (tmp_1) {
        tmp_0 = true;
      } else {
        var tmp_4;
        var tmp_5;
        if (!(value == null) ? typeof value === 'number' : false) {
          tmp_5 = true;
        } else {
          tmp_5 = !(value == null) ? typeof value === 'number' : false;
        }
        if (tmp_5) {
          tmp_4 = true;
        } else {
          var tmp_6;
          if (value instanceof Long) {
            tmp_6 = true;
          } else {
            tmp_6 = !(value == null) ? typeof value === 'number' : false;
          }
          tmp_4 = tmp_6;
        }
        tmp_0 = tmp_4;
      }
      if (tmp_0) {
        tmp = true;
      } else {
        var tmp_7;
        if (value instanceof SavedState) {
          tmp_7 = true;
        } else {
          var tmp_8;
          if (!(value == null) ? typeof value === 'string' : false) {
            tmp_8 = true;
          } else {
            tmp_8 = !(value == null) ? isCharSequence(value) : false;
          }
          tmp_7 = tmp_8;
        }
        if (tmp_7) {
          tmp = true;
        } else {
          var tmp_9;
          var tmp_10;
          var tmp_11;
          if (!(value == null) ? isBooleanArray(value) : false) {
            tmp_11 = true;
          } else {
            tmp_11 = !(value == null) ? isByteArray(value) : false;
          }
          if (tmp_11) {
            tmp_10 = true;
          } else {
            var tmp_12;
            if (!(value == null) ? isCharArray(value) : false) {
              tmp_12 = true;
            } else {
              tmp_12 = !(value == null) ? isDoubleArray(value) : false;
            }
            tmp_10 = tmp_12;
          }
          if (tmp_10) {
            tmp_9 = true;
          } else {
            var tmp_13;
            var tmp_14;
            if (!(value == null) ? isFloatArray(value) : false) {
              tmp_14 = true;
            } else {
              tmp_14 = !(value == null) ? isIntArray(value) : false;
            }
            if (tmp_14) {
              tmp_13 = true;
            } else {
              var tmp_15;
              if (!(value == null) ? isLongArray(value) : false) {
                tmp_15 = true;
              } else {
                tmp_15 = !(value == null) ? isShortArray(value) : false;
              }
              tmp_13 = tmp_15;
            }
            tmp_9 = tmp_13;
          }
          if (tmp_9) {
            tmp = true;
          } else {
            if (!(value == null) ? isInterface(value, KtList) : false) {
              var tmp1_subject = firstOrNull(value);
              var tmp_16;
              var tmp_17;
              if (!(tmp1_subject == null) ? typeof tmp1_subject === 'number' : false) {
                tmp_17 = true;
              } else {
                tmp_17 = !(tmp1_subject == null) ? typeof tmp1_subject === 'string' : false;
              }
              if (tmp_17) {
                tmp_16 = true;
              } else {
                tmp_16 = value.isEmpty_y1axqb_k$();
              }
              tmp = tmp_16;
            } else {
              tmp = false;
            }
          }
        }
      }
    }
    return tmp;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_SAVED_STATE_REGISTRY_OWNER_KEY;
  _.$_$.b = SavedStateViewModelFactory;
  _.$_$.c = get_VIEW_MODEL_STORE_OWNER_KEY;
  _.$_$.d = enableSavedStateHandles;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-lifecycle-lifecycle-viewmodel-savedstate.js.map
