(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-navigationevent-navigationevent'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-navigationevent-navigationevent'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-navigationevent-navigationevent'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'androidx-navigationevent-navigationevent'.");
    }
    globalThis['androidx-navigationevent-navigationevent'] = factory(typeof globalThis['androidx-navigationevent-navigationevent'] === 'undefined' ? {} : globalThis['androidx-navigationevent-navigationevent'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$_$.ul;
  var protoOf = kotlin_kotlin.$_$.ah;
  var Annotation = kotlin_kotlin.$_$.zk;
  var initMetadataForClass = kotlin_kotlin.$_$.yf;
  var VOID = kotlin_kotlin.$_$.e;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zf;
  var Long = kotlin_kotlin.$_$.nl;
  var getKClassFromExpression = kotlin_kotlin.$_$.fi;
  var equalsLong = kotlin_kotlin.$_$.ne;
  var getNumberHashCode = kotlin_kotlin.$_$.uf;
  var objectCreate = kotlin_kotlin.$_$.zg;
  var toString = kotlin_kotlin.$_$.dh;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var Unit_getInstance = kotlin_kotlin.$_$.l5;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.y;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.k;
  var addAll = kotlin_kotlin.$_$.x6;
  var toList = kotlin_kotlin.$_$.rc;
  var initMetadataForInterface = kotlin_kotlin.$_$.cg;
  var emptyList = kotlin_kotlin.$_$.j9;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var get_indices = kotlin_kotlin.$_$.da;
  var equals = kotlin_kotlin.$_$.qf;
  var hashCode = kotlin_kotlin.$_$.xf;
  var initMetadataForObject = kotlin_kotlin.$_$.eg;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var Collection = kotlin_kotlin.$_$.v5;
  var isInterface = kotlin_kotlin.$_$.ng;
  var toString_0 = kotlin_kotlin.$_$.hn;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(SwipeEdge, 'SwipeEdge', VOID, VOID, [Annotation]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(NavigationEvent, 'NavigationEvent', NavigationEvent);
  initMetadataForClass(Priority, 'Priority', VOID, VOID, [Annotation]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(NavigationEventDispatcher, 'NavigationEventDispatcher', NavigationEventDispatcher_init_$Create$);
  initMetadataForInterface(NavigationEventDispatcherOwner, 'NavigationEventDispatcherOwner');
  initMetadataForClass(NavigationEventHandler, 'NavigationEventHandler');
  initMetadataForClass(NavigationEventHistory, 'NavigationEventHistory');
  initMetadataForClass(NavigationEventInfo, 'NavigationEventInfo');
  initMetadataForObject(None, 'None', VOID, NavigationEventInfo);
  initMetadataForClass(NavigationEventInput, 'NavigationEventInput');
  initMetadataForClass(NavigationEventProcessor, 'NavigationEventProcessor', NavigationEventProcessor);
  initMetadataForClass(NavigationEventTransitionState, 'NavigationEventTransitionState');
  initMetadataForObject(Idle, 'Idle', VOID, NavigationEventTransitionState);
  initMetadataForClass(InProgress, 'InProgress', VOID, NavigationEventTransitionState);
  initMetadataForClass(Direction, 'Direction', VOID, VOID, [Annotation]);
  initMetadataForCompanion(Companion_1);
  initMetadataForInterface(OnBackCompletedFallback, 'OnBackCompletedFallback');
  //endregion
  function SwipeEdge() {
  }
  protoOf(SwipeEdge).equals = function (other) {
    if (!(other instanceof SwipeEdge))
      return false;
    other instanceof SwipeEdge || THROW_CCE();
    return true;
  };
  protoOf(SwipeEdge).hashCode = function () {
    return 0;
  };
  protoOf(SwipeEdge).toString = function () {
    return '@androidx.navigationevent.NavigationEvent.SwipeEdge(' + ')';
  };
  function Companion() {
    Companion_instance = this;
    this.EDGE_LEFT_1 = 0;
    this.EDGE_RIGHT_1 = 1;
    this.EDGE_NONE_1 = 2;
  }
  protoOf(Companion).get_EDGE_LEFT_c8epgg_k$ = function () {
    return this.EDGE_LEFT_1;
  };
  protoOf(Companion).get_EDGE_RIGHT_nzqb99_k$ = function () {
    return this.EDGE_RIGHT_1;
  };
  protoOf(Companion).get_EDGE_NONE_c8d7vz_k$ = function () {
    return this.EDGE_NONE_1;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function NavigationEvent(swipeEdge, progress, touchX, touchY, frameTimeMillis) {
    Companion_getInstance();
    swipeEdge = swipeEdge === VOID ? 2 : swipeEdge;
    progress = progress === VOID ? 0.0 : progress;
    touchX = touchX === VOID ? 0.0 : touchX;
    touchY = touchY === VOID ? 0.0 : touchY;
    frameTimeMillis = frameTimeMillis === VOID ? new Long(0, 0) : frameTimeMillis;
    this.swipeEdge_1 = swipeEdge;
    this.progress_1 = progress;
    this.touchX_1 = touchX;
    this.touchY_1 = touchY;
    this.frameTimeMillis_1 = frameTimeMillis;
  }
  protoOf(NavigationEvent).get_swipeEdge_xy0dim_k$ = function () {
    return this.swipeEdge_1;
  };
  protoOf(NavigationEvent).get_progress_mo5qeu_k$ = function () {
    return this.progress_1;
  };
  protoOf(NavigationEvent).get_touchX_k228le_k$ = function () {
    return this.touchX_1;
  };
  protoOf(NavigationEvent).get_touchY_k228lf_k$ = function () {
    return this.touchY_1;
  };
  protoOf(NavigationEvent).get_frameTimeMillis_448t9l_k$ = function () {
    return this.frameTimeMillis_1;
  };
  protoOf(NavigationEvent).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NavigationEvent))
      THROW_CCE();
    if (!(this.touchX_1 === other.touchX_1))
      return false;
    if (!(this.touchY_1 === other.touchY_1))
      return false;
    if (!(this.progress_1 === other.progress_1))
      return false;
    if (!(this.swipeEdge_1 === other.swipeEdge_1))
      return false;
    if (!equalsLong(this.frameTimeMillis_1, other.frameTimeMillis_1))
      return false;
    return true;
  };
  protoOf(NavigationEvent).hashCode = function () {
    var result = getNumberHashCode(this.touchX_1);
    result = imul(31, result) + getNumberHashCode(this.touchY_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.progress_1) | 0;
    result = imul(31, result) + this.swipeEdge_1 | 0;
    result = imul(31, result) + this.frameTimeMillis_1.hashCode() | 0;
    return result;
  };
  protoOf(NavigationEvent).toString = function () {
    return 'NavigationEvent(touchX=' + this.touchX_1 + ', touchY=' + this.touchY_1 + ', progress=' + this.progress_1 + ', ' + ('swipeEdge=' + this.swipeEdge_1 + ', frameTimeMillis=' + this.frameTimeMillis_1.toString() + ')');
  };
  function _set_parent__n7jd7x($this, _set____db54di) {
    $this.parent_1 = _set____db54di;
  }
  function _get_parent__oo9xup($this) {
    return $this.parent_1;
  }
  function _get_onBackCompletedFallback__cxswve($this) {
    return $this.onBackCompletedFallback_1;
  }
  function NavigationEventDispatcher_init_$Init$($this) {
    NavigationEventDispatcher.call($this, null, null);
    return $this;
  }
  function NavigationEventDispatcher_init_$Create$() {
    return NavigationEventDispatcher_init_$Init$(objectCreate(protoOf(NavigationEventDispatcher)));
  }
  function NavigationEventDispatcher_init_$Init$_0(onBackCompletedFallback, $this) {
    NavigationEventDispatcher.call($this, null, onBackCompletedFallback);
    return $this;
  }
  function NavigationEventDispatcher_init_$Create$_0(onBackCompletedFallback) {
    return NavigationEventDispatcher_init_$Init$_0(onBackCompletedFallback, objectCreate(protoOf(NavigationEventDispatcher)));
  }
  function NavigationEventDispatcher_init_$Init$_1(parent, $this) {
    NavigationEventDispatcher.call($this, parent, null);
    return $this;
  }
  function NavigationEventDispatcher_init_$Create$_1(parent) {
    return NavigationEventDispatcher_init_$Init$_1(parent, objectCreate(protoOf(NavigationEventDispatcher)));
  }
  function _set_isDisposed__7i5h54($this, _set____db54di) {
    $this.isDisposed_1 = _set____db54di;
  }
  function _get_isDisposed__7k3404($this) {
    var tmp;
    var tmp0_safe_receiver = $this.parent_1;
    if ((tmp0_safe_receiver == null ? null : _get_isDisposed__7k3404(tmp0_safe_receiver)) === true) {
      tmp = true;
    } else {
      tmp = $this.isDisposed_1;
    }
    return tmp;
  }
  function _get_handlers__pkfn2a($this) {
    return $this.handlers_1;
  }
  function _get_inputs__wm5ku($this) {
    return $this.inputs_1;
  }
  function checkInvariants($this) {
    // Inline function 'kotlin.check' call
    if (!!_get_isDisposed__7k3404($this)) {
      var message = 'This NavigationEventDispatcher has already been disposed and cannot be used.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function Priority() {
  }
  protoOf(Priority).equals = function (other) {
    if (!(other instanceof Priority))
      return false;
    other instanceof Priority || THROW_CCE();
    return true;
  };
  protoOf(Priority).hashCode = function () {
    return 0;
  };
  protoOf(Priority).toString = function () {
    return '@androidx.navigationevent.NavigationEventDispatcher.Priority(' + ')';
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.PRIORITY_OVERLAY_1 = 0;
    this.PRIORITY_DEFAULT_1 = 1;
  }
  protoOf(Companion_0).get_PRIORITY_OVERLAY_kftn6q_k$ = function () {
    return this.PRIORITY_OVERLAY_1;
  };
  protoOf(Companion_0).get_PRIORITY_DEFAULT_n5mybz_k$ = function () {
    return this.PRIORITY_DEFAULT_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function NavigationEventDispatcher(parent, onBackCompletedFallback) {
    Companion_getInstance_0();
    this.parent_1 = parent;
    this.onBackCompletedFallback_1 = onBackCompletedFallback;
    this.isDisposed_1 = false;
    this.isEnabled_1 = true;
    var tmp = this;
    var tmp0_safe_receiver = this.parent_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sharedProcessor_1;
    tmp.sharedProcessor_1 = tmp1_elvis_lhs == null ? new NavigationEventProcessor() : tmp1_elvis_lhs;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.childDispatchers_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.handlers_1 = LinkedHashSet_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_2.inputs_1 = LinkedHashSet_init_$Create$();
    var tmp0_safe_receiver_0 = this.parent_1;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.collections.plusAssign' call
      tmp0_safe_receiver_0.childDispatchers_1.add_utx5q5_k$(this);
    }
  }
  protoOf(NavigationEventDispatcher).set_isEnabled_abraij_k$ = function (value) {
    checkInvariants(this);
    if (this.isEnabled_1 === value)
      return Unit_getInstance();
    this.isEnabled_1 = value;
    this.sharedProcessor_1.refreshEnabledHandlers_uswlun_k$();
  };
  protoOf(NavigationEventDispatcher).get_isEnabled_roz1ma_k$ = function () {
    var tmp;
    var tmp0_safe_receiver = this.parent_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isEnabled_roz1ma_k$()) === false) {
      tmp = false;
    } else {
      tmp = this.isEnabled_1;
    }
    return tmp;
  };
  protoOf(NavigationEventDispatcher).get_sharedProcessor_x5iv80_k$ = function () {
    return this.sharedProcessor_1;
  };
  protoOf(NavigationEventDispatcher).get_childDispatchers_weezp7_k$ = function () {
    return this.childDispatchers_1;
  };
  protoOf(NavigationEventDispatcher).get_transitionState_6wuudv_k$ = function () {
    return this.sharedProcessor_1.get_transitionState_6wuudv_k$();
  };
  protoOf(NavigationEventDispatcher).get_history_glfd0r_k$ = function () {
    return this.sharedProcessor_1.get_history_glfd0r_k$();
  };
  protoOf(NavigationEventDispatcher).addHandler_fstcag_k$ = function (handler, priority) {
    checkInvariants(this);
    if (this.handlers_1.add_utx5q5_k$(handler)) {
      this.sharedProcessor_1.addHandler_bbxz2q_k$(this, handler, priority);
    }
  };
  protoOf(NavigationEventDispatcher).addHandler$default_nvijjx_k$ = function (handler, priority, $super) {
    priority = priority === VOID ? 1 : priority;
    var tmp;
    if ($super === VOID) {
      this.addHandler_fstcag_k$(handler, priority);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.addHandler_fstcag_k$.call(this, handler, priority);
    }
    return tmp;
  };
  protoOf(NavigationEventDispatcher).removeHandler_5of7uf_k$ = function (handler) {
    if (this.handlers_1.remove_cedx0m_k$(handler)) {
      this.sharedProcessor_1.removeHandler_u1kuv1_k$(handler);
    }
  };
  protoOf(NavigationEventDispatcher).addInput_f4ybbe_k$ = function (input) {
    checkInvariants(this);
    if (this.inputs_1.add_utx5q5_k$(input)) {
      this.sharedProcessor_1.addInput_sdd6i0_k$(this, input, -1);
    }
  };
  protoOf(NavigationEventDispatcher).addInput_edo56m_k$ = function (input, priority) {
    checkInvariants(this);
    // Inline function 'kotlin.require' call
    if (!(priority === 1 || priority === 0)) {
      var message = 'Unsupported priority value: ' + priority;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.inputs_1.add_utx5q5_k$(input)) {
      this.sharedProcessor_1.addInput_sdd6i0_k$(this, input, priority);
    }
  };
  protoOf(NavigationEventDispatcher).removeInput_k4fy93_k$ = function (input) {
    checkInvariants(this);
    if (this.inputs_1.remove_cedx0m_k$(input)) {
      this.sharedProcessor_1.removeInput_k4fy93_k$(input);
    }
  };
  protoOf(NavigationEventDispatcher).dispatchOnStarted_c2etar_k$ = function (input, direction, event) {
    checkInvariants(this);
    if (!this.get_isEnabled_roz1ma_k$())
      return Unit_getInstance();
    this.sharedProcessor_1.dispatchOnStarted_w5ulxj_k$(input, direction, event);
  };
  protoOf(NavigationEventDispatcher).dispatchOnProgressed_cjkiax_k$ = function (input, direction, event) {
    checkInvariants(this);
    if (!this.get_isEnabled_roz1ma_k$())
      return Unit_getInstance();
    this.sharedProcessor_1.dispatchOnProgressed_auc81h_k$(input, direction, event);
  };
  protoOf(NavigationEventDispatcher).dispatchOnCompleted_itxgeh_k$ = function (input, direction) {
    checkInvariants(this);
    if (!this.get_isEnabled_roz1ma_k$())
      return Unit_getInstance();
    this.sharedProcessor_1.dispatchOnCompleted_uaxmpc_k$(input, direction, this.onBackCompletedFallback_1);
  };
  protoOf(NavigationEventDispatcher).dispatchOnCancelled_z6x9vh_k$ = function (input, direction) {
    checkInvariants(this);
    if (!this.get_isEnabled_roz1ma_k$())
      return Unit_getInstance();
    this.sharedProcessor_1.dispatchOnCancelled_3j9j75_k$(input, direction);
  };
  protoOf(NavigationEventDispatcher).dispose_3nnxhr_k$ = function () {
    checkInvariants(this);
    this.isDisposed_1 = true;
    var dispatchersToDispose = ArrayDeque_init_$Create$();
    // Inline function 'kotlin.collections.plusAssign' call
    dispatchersToDispose.add_utx5q5_k$(this);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!dispatchersToDispose.isEmpty_y1axqb_k$()) {
        break $l$loop;
      }
      var currentDispatcher = dispatchersToDispose.removeFirst_58pi0k_k$();
      currentDispatcher.isDisposed_1 = true;
      // Inline function 'kotlin.collections.plusAssign' call
      var elements = currentDispatcher.childDispatchers_1;
      addAll(dispatchersToDispose, elements);
      var _iterator__ex2g4s = toList(currentDispatcher.inputs_1).iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var input = _iterator__ex2g4s.next_20eer_k$();
        this.sharedProcessor_1.removeInput_k4fy93_k$(input);
      }
      currentDispatcher.inputs_1.clear_j9egeb_k$();
      var _iterator__ex2g4s_0 = toList(currentDispatcher.handlers_1).iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var handler = _iterator__ex2g4s_0.next_20eer_k$();
        handler.remove_ldkf9o_k$();
      }
      currentDispatcher.handlers_1.clear_j9egeb_k$();
      currentDispatcher.childDispatchers_1.clear_j9egeb_k$();
      var tmp0_safe_receiver = currentDispatcher.parent_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.childDispatchers_1;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver.remove_cedx0m_k$(currentDispatcher);
      currentDispatcher.parent_1 = null;
    }
  };
  function NavigationEventDispatcherOwner() {
  }
  function NavigationEventHandler_init_$Init$(initialInfo, isBackEnabled, $this) {
    NavigationEventHandler.call($this, initialInfo, isBackEnabled, false);
    return $this;
  }
  function NavigationEventHandler_init_$Create$(initialInfo, isBackEnabled) {
    return NavigationEventHandler_init_$Init$(initialInfo, isBackEnabled, objectCreate(protoOf(NavigationEventHandler)));
  }
  function _set_currentInfo__l0t2qm($this, _set____db54di) {
    $this.currentInfo_1 = _set____db54di;
  }
  function _set_backInfo__bz91a6($this, _set____db54di) {
    $this.backInfo_1 = _set____db54di;
  }
  function _set_forwardInfo__7vo90u($this, _set____db54di) {
    $this.forwardInfo_1 = _set____db54di;
  }
  function _set_transitionState__55ncg9($this, _set____db54di) {
    $this.transitionState_1 = _set____db54di;
  }
  function NavigationEventHandler(initialInfo, isBackEnabled, isForwardEnabled) {
    this.currentInfo_1 = initialInfo;
    this.backInfo_1 = emptyList();
    this.forwardInfo_1 = emptyList();
    this.transitionState_1 = Idle_getInstance();
    this.isBackEnabled_1 = isBackEnabled;
    this.isForwardEnabled_1 = isForwardEnabled;
    this.dispatcher_1 = null;
  }
  protoOf(NavigationEventHandler).get_currentInfo_ntyvry_k$ = function () {
    return this.currentInfo_1;
  };
  protoOf(NavigationEventHandler).get_backInfo_39mh32_k$ = function () {
    return this.backInfo_1;
  };
  protoOf(NavigationEventHandler).get_forwardInfo_tst2l2_k$ = function () {
    return this.forwardInfo_1;
  };
  protoOf(NavigationEventHandler).get_transitionState_6wuudv_k$ = function () {
    return this.transitionState_1;
  };
  protoOf(NavigationEventHandler).set_isBackEnabled_pzwsqm_k$ = function (value) {
    if (this.isBackEnabled_1 === value)
      return Unit_getInstance();
    this.isBackEnabled_1 = value;
    var tmp0_safe_receiver = this.dispatcher_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_sharedProcessor_x5iv80_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.refreshEnabledHandlers_uswlun_k$();
    }
  };
  protoOf(NavigationEventHandler).get_isBackEnabled_15t17d_k$ = function () {
    var tmp;
    var tmp0_safe_receiver = this.dispatcher_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isEnabled_roz1ma_k$()) === false) {
      tmp = false;
    } else {
      tmp = this.isBackEnabled_1;
    }
    return tmp;
  };
  protoOf(NavigationEventHandler).set_isForwardEnabled_fh9xf6_k$ = function (value) {
    if (this.isForwardEnabled_1 === value)
      return Unit_getInstance();
    this.isForwardEnabled_1 = value;
    var tmp0_safe_receiver = this.dispatcher_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_sharedProcessor_x5iv80_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.refreshEnabledHandlers_uswlun_k$();
    }
  };
  protoOf(NavigationEventHandler).get_isForwardEnabled_fm7uxb_k$ = function () {
    var tmp;
    var tmp0_safe_receiver = this.dispatcher_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isEnabled_roz1ma_k$()) === false) {
      tmp = false;
    } else {
      tmp = this.isForwardEnabled_1;
    }
    return tmp;
  };
  protoOf(NavigationEventHandler).set_dispatcher_1dyizj_k$ = function (_set____db54di) {
    this.dispatcher_1 = _set____db54di;
  };
  protoOf(NavigationEventHandler).get_dispatcher_sve22s_k$ = function () {
    return this.dispatcher_1;
  };
  protoOf(NavigationEventHandler).remove_ldkf9o_k$ = function () {
    var tmp0_safe_receiver = this.dispatcher_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.removeHandler_5of7uf_k$(this);
    }
  };
  protoOf(NavigationEventHandler).setInfo_q3wyh0_k$ = function (currentInfo, backInfo, forwardInfo) {
    this.currentInfo_1 = currentInfo;
    this.backInfo_1 = backInfo;
    this.forwardInfo_1 = forwardInfo;
    var tmp0_safe_receiver = this.dispatcher_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_sharedProcessor_x5iv80_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateEnabledHandlerInfo_2qrhuq_k$(this);
    }
  };
  protoOf(NavigationEventHandler).setInfo$default_shfhwx_k$ = function (currentInfo, backInfo, forwardInfo, $super) {
    backInfo = backInfo === VOID ? emptyList() : backInfo;
    forwardInfo = forwardInfo === VOID ? emptyList() : forwardInfo;
    var tmp;
    if ($super === VOID) {
      this.setInfo_q3wyh0_k$(currentInfo, backInfo, forwardInfo);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.setInfo_q3wyh0_k$.call(this, currentInfo, backInfo, forwardInfo);
    }
    return tmp;
  };
  protoOf(NavigationEventHandler).doOnBackStarted_bvzcxl_k$ = function (event) {
    this.transitionState_1 = new InProgress(event, -1);
    this.onBackStarted_gcrpe0_k$(event);
  };
  protoOf(NavigationEventHandler).onBackStarted_gcrpe0_k$ = function (event) {
  };
  protoOf(NavigationEventHandler).doOnBackProgressed_r10jpi_k$ = function (event) {
    this.transitionState_1 = new InProgress(event, -1);
    this.onBackProgressed_lt3ibz_k$(event);
  };
  protoOf(NavigationEventHandler).onBackProgressed_lt3ibz_k$ = function (event) {
  };
  protoOf(NavigationEventHandler).doOnBackCompleted_bff8ja_k$ = function () {
    this.transitionState_1 = Idle_getInstance();
    this.onBackCompleted_3hgd6d_k$();
  };
  protoOf(NavigationEventHandler).onBackCompleted_3hgd6d_k$ = function () {
    throw UnsupportedOperationException_init_$Create$("A handler that receives a 'backCompleted' event must override 'onBackCompleted()' to handle the callback.");
  };
  protoOf(NavigationEventHandler).doOnBackCancelled_yhtpj8_k$ = function () {
    this.transitionState_1 = Idle_getInstance();
    this.onBackCancelled_kh4fy3_k$();
  };
  protoOf(NavigationEventHandler).onBackCancelled_kh4fy3_k$ = function () {
  };
  protoOf(NavigationEventHandler).doOnForwardStarted_8bavkh_k$ = function (event) {
    this.transitionState_1 = new InProgress(event, 1);
    this.onForwardStarted_6baqx4_k$(event);
  };
  protoOf(NavigationEventHandler).onForwardStarted_6baqx4_k$ = function (event) {
  };
  protoOf(NavigationEventHandler).doOnForwardProgressed_nwo70w_k$ = function (event) {
    this.transitionState_1 = new InProgress(event, 1);
    this.onForwardProgressed_x1jfn5_k$(event);
  };
  protoOf(NavigationEventHandler).onForwardProgressed_x1jfn5_k$ = function (event) {
  };
  protoOf(NavigationEventHandler).doOnForwardCompleted_unlujw_k$ = function () {
    this.transitionState_1 = Idle_getInstance();
    this.onForwardCompleted_isj4cr_k$();
  };
  protoOf(NavigationEventHandler).onForwardCompleted_isj4cr_k$ = function () {
    throw UnsupportedOperationException_init_$Create$("A handler that receives a 'forwardCompleted' event must override 'onForwardCompleted()' to handle the callback.");
  };
  protoOf(NavigationEventHandler).doOnForwardCancelled_f9n3im_k$ = function () {
    this.transitionState_1 = Idle_getInstance();
    this.onForwardCancelled_1sv1l1_k$();
  };
  protoOf(NavigationEventHandler).onForwardCancelled_1sv1l1_k$ = function () {
  };
  function NavigationEventHistory_init_$Init$($this) {
    NavigationEventHistory.call($this, emptyList(), -1);
    return $this;
  }
  function NavigationEventHistory_init_$Create$() {
    return NavigationEventHistory_init_$Init$(objectCreate(protoOf(NavigationEventHistory)));
  }
  function NavigationEventHistory_init_$Init$_0(currentInfo, backInfo, forwardInfo, $this) {
    backInfo = backInfo === VOID ? emptyList() : backInfo;
    forwardInfo = forwardInfo === VOID ? emptyList() : forwardInfo;
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.plusAssign' call
    addAll(this_0, backInfo);
    // Inline function 'kotlin.collections.plusAssign' call
    this_0.add_utx5q5_k$(currentInfo);
    // Inline function 'kotlin.collections.plusAssign' call
    addAll(this_0, forwardInfo);
    var tmp$ret$6 = this_0.build_nmwvly_k$();
    NavigationEventHistory.call($this, tmp$ret$6, backInfo.get_size_woubt6_k$());
    return $this;
  }
  function NavigationEventHistory_init_$Create$_0(currentInfo, backInfo, forwardInfo) {
    return NavigationEventHistory_init_$Init$_0(currentInfo, backInfo, forwardInfo, objectCreate(protoOf(NavigationEventHistory)));
  }
  function NavigationEventHistory(mergedHistory, currentIndex) {
    this.mergedHistory_1 = mergedHistory;
    this.currentIndex_1 = currentIndex;
    var tmp;
    if (this.mergedHistory_1.isEmpty_y1axqb_k$() && this.currentIndex_1 === -1) {
      tmp = true;
    } else {
      var tmp_0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.mergedHistory_1.isEmpty_y1axqb_k$()) {
        var containsUpper = this.mergedHistory_1.get_size_woubt6_k$() - 1 | 0;
        var containsArg = this.currentIndex_1;
        tmp_0 = 0 <= containsArg ? containsArg <= containsUpper : false;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = "Invalid 'NavigationEventHistory' state:  'currentIndex' must be within the bounds of 'mergedHistory' (or -1 if empty)." + (" Received: currentIndex = '" + this.currentIndex_1 + "', bounds = '" + get_indices(this.mergedHistory_1).toString() + "'.");
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(NavigationEventHistory).get_mergedHistory_badwtd_k$ = function () {
    return this.mergedHistory_1;
  };
  protoOf(NavigationEventHistory).get_currentIndex_shwroi_k$ = function () {
    return this.currentIndex_1;
  };
  protoOf(NavigationEventHistory).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NavigationEventHistory))
      THROW_CCE();
    if (!(this.currentIndex_1 === other.currentIndex_1))
      return false;
    if (!equals(this.mergedHistory_1, other.mergedHistory_1))
      return false;
    return true;
  };
  protoOf(NavigationEventHistory).hashCode = function () {
    var result = this.currentIndex_1;
    result = imul(31, result) + hashCode(this.mergedHistory_1) | 0;
    return result;
  };
  protoOf(NavigationEventHistory).toString = function () {
    return 'NavigationEventHistory(currentIndex=' + this.currentIndex_1 + ', mergedHistory=' + toString(this.mergedHistory_1) + ')';
  };
  function None() {
    None_instance = this;
    NavigationEventInfo.call(this);
  }
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function NavigationEventInfo() {
  }
  function _set_isPredictiveBackInProgress__5ng38r($this, _set____db54di) {
    $this.isPredictiveBackInProgress_1 = _set____db54di;
  }
  function _get_isPredictiveBackInProgress__48mctz($this) {
    return $this.isPredictiveBackInProgress_1;
  }
  function _set_isPredictiveForwardInProgress__5433tj($this, _set____db54di) {
    $this.isPredictiveForwardInProgress_1 = _set____db54di;
  }
  function _get_isPredictiveForwardInProgress__eot1gj($this) {
    return $this.isPredictiveForwardInProgress_1;
  }
  function NavigationEventInput() {
    this.dispatcher_1 = null;
    this.isPredictiveBackInProgress_1 = false;
    this.isPredictiveForwardInProgress_1 = false;
  }
  protoOf(NavigationEventInput).set_dispatcher_1dyizj_k$ = function (_set____db54di) {
    this.dispatcher_1 = _set____db54di;
  };
  protoOf(NavigationEventInput).get_dispatcher_sve22s_k$ = function () {
    return this.dispatcher_1;
  };
  protoOf(NavigationEventInput).doOnAdded_fx20o_k$ = function (dispatcher) {
    this.onAdded_hno6bt_k$(dispatcher);
  };
  protoOf(NavigationEventInput).onAdded_hno6bt_k$ = function (dispatcher) {
  };
  protoOf(NavigationEventInput).doOnRemoved_f3ly2a_k$ = function () {
    this.onRemoved_lwxsun_k$();
  };
  protoOf(NavigationEventInput).onRemoved_lwxsun_k$ = function () {
  };
  protoOf(NavigationEventInput).doOnHasEnabledHandlersChanged_qofpap_k$ = function (hasEnabledHandlers) {
    this.onHasEnabledHandlersChanged_zigu9c_k$(hasEnabledHandlers);
  };
  protoOf(NavigationEventInput).onHasEnabledHandlersChanged_zigu9c_k$ = function (hasEnabledHandlers) {
  };
  protoOf(NavigationEventInput).doOnHistoryChanged_yqgh8f_k$ = function (history) {
    this.onHistoryChanged_p0v79y_k$(history);
  };
  protoOf(NavigationEventInput).onHistoryChanged_p0v79y_k$ = function (history) {
  };
  protoOf(NavigationEventInput).dispatchOnBackStarted_hf33vi_k$ = function (event) {
    var tmp0 = this.dispatcher_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'This input is not added to any dispatcher.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var dispatcher = tmp$ret$1;
    if (!this.isPredictiveBackInProgress_1) {
      dispatcher.dispatchOnStarted_c2etar_k$(this, -1, event);
      this.isPredictiveBackInProgress_1 = true;
    }
  };
  protoOf(NavigationEventInput).dispatchOnBackProgressed_nk4yll_k$ = function (event) {
    var tmp0 = this.dispatcher_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'This input is not added to any dispatcher.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var dispatcher = tmp$ret$1;
    if (this.isPredictiveBackInProgress_1) {
      dispatcher.dispatchOnProgressed_cjkiax_k$(this, -1, event);
    }
  };
  protoOf(NavigationEventInput).dispatchOnBackCancelled_wca76p_k$ = function () {
    var tmp0 = this.dispatcher_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'This input is not added to any dispatcher.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var dispatcher = tmp$ret$1;
    if (!this.isPredictiveBackInProgress_1) {
      dispatcher.dispatchOnStarted_c2etar_k$(this, -1, null);
    }
    dispatcher.dispatchOnCancelled_z6x9vh_k$(this, -1);
    this.isPredictiveBackInProgress_1 = false;
  };
  protoOf(NavigationEventInput).dispatchOnBackCompleted_fcm4ez_k$ = function () {
    var tmp0 = this.dispatcher_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'This input is not added to any dispatcher.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var dispatcher = tmp$ret$1;
    if (!this.isPredictiveBackInProgress_1) {
      dispatcher.dispatchOnStarted_c2etar_k$(this, -1, null);
    }
    dispatcher.dispatchOnCompleted_itxgeh_k$(this, -1);
    this.isPredictiveBackInProgress_1 = false;
  };
  protoOf(NavigationEventInput).dispatchOnForwardStarted_4k9ani_k$ = function (event) {
    var tmp0 = this.dispatcher_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'This input is not added to any dispatcher.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var dispatcher = tmp$ret$1;
    if (!this.isPredictiveForwardInProgress_1) {
      dispatcher.dispatchOnStarted_c2etar_k$(this, 1, event);
      this.isPredictiveForwardInProgress_1 = true;
    }
  };
  protoOf(NavigationEventInput).dispatchOnForwardProgressed_23rc23_k$ = function (event) {
    var tmp0 = this.dispatcher_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'This input is not added to any dispatcher.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var dispatcher = tmp$ret$1;
    if (this.isPredictiveForwardInProgress_1) {
      dispatcher.dispatchOnProgressed_cjkiax_k$(this, 1, event);
    }
  };
  protoOf(NavigationEventInput).dispatchOnForwardCancelled_z3g47p_k$ = function () {
    var tmp0 = this.dispatcher_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'This input is not added to any dispatcher.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var dispatcher = tmp$ret$1;
    if (!this.isPredictiveForwardInProgress_1) {
      dispatcher.dispatchOnStarted_c2etar_k$(this, 1, null);
    }
    dispatcher.dispatchOnCancelled_z6x9vh_k$(this, 1);
    this.isPredictiveForwardInProgress_1 = false;
  };
  protoOf(NavigationEventInput).dispatchOnForwardCompleted_i3s1fz_k$ = function () {
    var tmp0 = this.dispatcher_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'This input is not added to any dispatcher.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var dispatcher = tmp$ret$1;
    if (!this.isPredictiveForwardInProgress_1) {
      dispatcher.dispatchOnStarted_c2etar_k$(this, 1, null);
    }
    dispatcher.dispatchOnCompleted_itxgeh_k$(this, 1);
    this.isPredictiveForwardInProgress_1 = false;
  };
  function _get__transitionState__nzqh66($this) {
    return $this._transitionState_1;
  }
  function _get__history__40ehau($this) {
    return $this._history_1;
  }
  function _get_overlayHandlers__lnhz8o($this) {
    return $this.overlayHandlers_1;
  }
  function _get_defaultHandlers__1ons6x($this) {
    return $this.defaultHandlers_1;
  }
  function _set_inProgressHandler__85egr1($this, _set____db54di) {
    $this.inProgressHandler_1 = _set____db54di;
  }
  function _get_inProgressHandler__dkefjb($this) {
    return $this.inProgressHandler_1;
  }
  function _set_inProgressDirection__adfb0o($this, _set____db54di) {
    $this.inProgressDirection_1 = _set____db54di;
  }
  function _get_inProgressDirection__2xaxvo($this) {
    return $this.inProgressDirection_1;
  }
  function _set_inProgressInput__fcva43($this, _set____db54di) {
    $this.inProgressInput_1 = _set____db54di;
  }
  function _get_inProgressInput__5952lj($this) {
    return $this.inProgressInput_1;
  }
  function _get_unspecifiedInputs__myvhkf($this) {
    return $this.unspecifiedInputs_1;
  }
  function _get_defaultInputs__34pnd3($this) {
    return $this.defaultInputs_1;
  }
  function _get_overlayInputs__yfrl2g($this) {
    return $this.overlayInputs_1;
  }
  function _set_hasEnabledDefaultHandlers__3vm17m($this, _set____db54di) {
    $this.hasEnabledDefaultHandlers_1 = _set____db54di;
  }
  function _get_hasEnabledDefaultHandlers__1mri9a($this) {
    return $this.hasEnabledDefaultHandlers_1;
  }
  function _set_hasEnabledOverlayHandlers__g385u5($this, _set____db54di) {
    $this.hasEnabledOverlayHandlers_1 = _set____db54di;
  }
  function _get_hasEnabledOverlayHandlers__ic2osh($this) {
    return $this.hasEnabledOverlayHandlers_1;
  }
  function _set_hasEnabledAnyHandlers__52onr($this, _set____db54di) {
    $this.hasEnabledAnyHandlers_1 = _set____db54di;
  }
  function _get_hasEnabledAnyHandlers__60jnrx($this) {
    return $this.hasEnabledAnyHandlers_1;
  }
  function resolveEnabledHandler($this, direction) {
    var tmp;
    switch (direction) {
      case 0:
        // Inline function 'androidx.navigationevent.NavigationEventProcessor.findHandler' call

        var tmp0 = $this.overlayHandlers_1;
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
          while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
            var element = _iterator__ex2g4s.next_20eer_k$();
            if (element.get_isBackEnabled_15t17d_k$() || element.get_isForwardEnabled_fm7uxb_k$()) {
              tmp$ret$1 = element;
              break $l$block;
            }
          }
          tmp$ret$1 = null;
        }

        var tmp0_elvis_lhs = tmp$ret$1;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          var tmp0_0 = $this.defaultHandlers_1;
          var tmp$ret$3;
          $l$block_0: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var _iterator__ex2g4s_0 = tmp0_0.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
              var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
              if (element_0.get_isBackEnabled_15t17d_k$() || element_0.get_isForwardEnabled_fm7uxb_k$()) {
                tmp$ret$3 = element_0;
                break $l$block_0;
              }
            }
            tmp$ret$3 = null;
          }
          tmp_0 = tmp$ret$3;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }

        tmp = tmp_0;
        break;
      case -1:
        // Inline function 'androidx.navigationevent.NavigationEventProcessor.findHandler' call

        var tmp0_1 = $this.overlayHandlers_1;
        var tmp$ret$6;
        $l$block_1: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var _iterator__ex2g4s_1 = tmp0_1.iterator_jk1svi_k$();
          while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
            var element_1 = _iterator__ex2g4s_1.next_20eer_k$();
            if (element_1.get_isBackEnabled_15t17d_k$()) {
              tmp$ret$6 = element_1;
              break $l$block_1;
            }
          }
          tmp$ret$6 = null;
        }

        var tmp0_elvis_lhs_0 = tmp$ret$6;
        var tmp_1;
        if (tmp0_elvis_lhs_0 == null) {
          var tmp0_2 = $this.defaultHandlers_1;
          var tmp$ret$8;
          $l$block_2: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var _iterator__ex2g4s_2 = tmp0_2.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
              var element_2 = _iterator__ex2g4s_2.next_20eer_k$();
              if (element_2.get_isBackEnabled_15t17d_k$()) {
                tmp$ret$8 = element_2;
                break $l$block_2;
              }
            }
            tmp$ret$8 = null;
          }
          tmp_1 = tmp$ret$8;
        } else {
          tmp_1 = tmp0_elvis_lhs_0;
        }

        tmp = tmp_1;
        break;
      case 1:
        // Inline function 'androidx.navigationevent.NavigationEventProcessor.findHandler' call

        var tmp0_3 = $this.overlayHandlers_1;
        var tmp$ret$11;
        $l$block_3: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var _iterator__ex2g4s_3 = tmp0_3.iterator_jk1svi_k$();
          while (_iterator__ex2g4s_3.hasNext_bitz1p_k$()) {
            var element_3 = _iterator__ex2g4s_3.next_20eer_k$();
            if (element_3.get_isForwardEnabled_fm7uxb_k$()) {
              tmp$ret$11 = element_3;
              break $l$block_3;
            }
          }
          tmp$ret$11 = null;
        }

        var tmp0_elvis_lhs_1 = tmp$ret$11;
        var tmp_2;
        if (tmp0_elvis_lhs_1 == null) {
          var tmp0_4 = $this.defaultHandlers_1;
          var tmp$ret$13;
          $l$block_4: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var _iterator__ex2g4s_4 = tmp0_4.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_4.hasNext_bitz1p_k$()) {
              var element_4 = _iterator__ex2g4s_4.next_20eer_k$();
              if (element_4.get_isForwardEnabled_fm7uxb_k$()) {
                tmp$ret$13 = element_4;
                break $l$block_4;
              }
            }
            tmp$ret$13 = null;
          }
          tmp_2 = tmp$ret$13;
        } else {
          tmp_2 = tmp0_elvis_lhs_1;
        }

        tmp = tmp_2;
        break;
      default:
        var message = "Unsupported direction: '" + direction + "'.";
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function resolveEnabledHandler$default($this, direction, $super) {
    direction = direction === VOID ? 0 : direction;
    return resolveEnabledHandler($this, direction);
  }
  function findHandler($this, predicate) {
    var tmp0 = $this.overlayHandlers_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (predicate(element)) {
          tmp$ret$0 = element;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_0 = $this.defaultHandlers_1;
      var tmp$ret$1;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = tmp0_0.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
          var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
          if (predicate(element_0)) {
            tmp$ret$1 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$1 = null;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function resolveCombinedBackInfo($this) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var combinedBackInfo = ArrayList_init_$Create$();
    var _iterator__ex2g4s = $this.overlayHandlers_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var handler = _iterator__ex2g4s.next_20eer_k$();
      var tmp;
      if (handler.get_isBackEnabled_15t17d_k$()) {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp = !handler.get_backInfo_39mh32_k$().isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        combinedBackInfo.addAll_4lagoh_k$(handler.get_backInfo_39mh32_k$());
      }
    }
    var _iterator__ex2g4s_0 = $this.defaultHandlers_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var handler_0 = _iterator__ex2g4s_0.next_20eer_k$();
      var tmp_0;
      if (handler_0.get_isBackEnabled_15t17d_k$()) {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_0 = !handler_0.get_backInfo_39mh32_k$().isEmpty_y1axqb_k$();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        combinedBackInfo.addAll_4lagoh_k$(handler_0.get_backInfo_39mh32_k$());
      }
    }
    return combinedBackInfo;
  }
  function NavigationEventProcessor() {
    this._transitionState_1 = MutableStateFlow(Idle_getInstance());
    this.transitionState_1 = asStateFlow(this._transitionState_1);
    this._history_1 = MutableStateFlow(NavigationEventHistory_init_$Create$());
    this.history_1 = asStateFlow(this._history_1);
    this.overlayHandlers_1 = ArrayDeque_init_$Create$();
    this.defaultHandlers_1 = ArrayDeque_init_$Create$();
    this.inProgressHandler_1 = null;
    this.inProgressDirection_1 = 0;
    this.inProgressInput_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.unspecifiedInputs_1 = LinkedHashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.defaultInputs_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.overlayInputs_1 = LinkedHashSet_init_$Create$();
    this.hasEnabledDefaultHandlers_1 = false;
    this.hasEnabledOverlayHandlers_1 = false;
    this.hasEnabledAnyHandlers_1 = false;
  }
  protoOf(NavigationEventProcessor).get_transitionState_6wuudv_k$ = function () {
    return this.transitionState_1;
  };
  protoOf(NavigationEventProcessor).get_history_glfd0r_k$ = function () {
    return this.history_1;
  };
  protoOf(NavigationEventProcessor).refreshEnabledHandlers_uswlun_k$ = function () {
    var tmp0 = this.overlayHandlers_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (element.get_isBackEnabled_15t17d_k$() || element.get_isForwardEnabled_fm7uxb_k$()) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    var newOverlayEnabled = tmp$ret$0;
    var tmp0_0 = this.defaultHandlers_1;
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(tmp0_0, Collection)) {
        tmp_0 = tmp0_0.isEmpty_y1axqb_k$();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$2 = false;
        break $l$block_2;
      }
      var _iterator__ex2g4s_0 = tmp0_0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
        if (element_0.get_isBackEnabled_15t17d_k$() || element_0.get_isForwardEnabled_fm7uxb_k$()) {
          tmp$ret$2 = true;
          break $l$block_2;
        }
      }
      tmp$ret$2 = false;
    }
    var newDefaultEnabled = tmp$ret$2;
    var newAnyEnabled = newOverlayEnabled || newDefaultEnabled;
    var overlayEnabledChanged = !(this.hasEnabledOverlayHandlers_1 === newOverlayEnabled);
    var defaultEnabledChanged = !(this.hasEnabledDefaultHandlers_1 === newDefaultEnabled);
    var anyEnabledChanged = !(this.hasEnabledAnyHandlers_1 === newAnyEnabled);
    if (overlayEnabledChanged) {
      var _iterator__ex2g4s_1 = this.overlayInputs_1.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
        var input = _iterator__ex2g4s_1.next_20eer_k$();
        input.doOnHasEnabledHandlersChanged_qofpap_k$(newOverlayEnabled);
      }
    }
    if (defaultEnabledChanged) {
      var _iterator__ex2g4s_2 = this.defaultInputs_1.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
        var input_0 = _iterator__ex2g4s_2.next_20eer_k$();
        input_0.doOnHasEnabledHandlersChanged_qofpap_k$(newDefaultEnabled);
      }
    }
    if (anyEnabledChanged) {
      var _iterator__ex2g4s_3 = this.unspecifiedInputs_1.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_3.hasNext_bitz1p_k$()) {
        var input_1 = _iterator__ex2g4s_3.next_20eer_k$();
        input_1.doOnHasEnabledHandlersChanged_qofpap_k$(newAnyEnabled);
      }
    }
    this.hasEnabledOverlayHandlers_1 = newOverlayEnabled;
    this.hasEnabledDefaultHandlers_1 = newDefaultEnabled;
    this.hasEnabledAnyHandlers_1 = newAnyEnabled;
    var tmp0_elvis_lhs = this.inProgressHandler_1;
    this.updateEnabledHandlerInfo_2qrhuq_k$(tmp0_elvis_lhs == null ? resolveEnabledHandler$default(this) : tmp0_elvis_lhs);
  };
  protoOf(NavigationEventProcessor).updateEnabledHandlerInfo_2qrhuq_k$ = function (handler) {
    var tmp0_elvis_lhs = this.inProgressHandler_1;
    var activeHandler = tmp0_elvis_lhs == null ? resolveEnabledHandler$default(this) : tmp0_elvis_lhs;
    if (!equals(activeHandler, handler)) {
      return Unit_getInstance();
    }
    var tmp;
    if (activeHandler == null) {
      tmp = NavigationEventHistory_init_$Create$();
    } else {
      var tmp1_backInfo = resolveCombinedBackInfo(this);
      var tmp2_currentInfo = activeHandler.get_currentInfo_ntyvry_k$();
      var tmp3_forwardInfo = activeHandler.get_forwardInfo_tst2l2_k$();
      tmp = NavigationEventHistory_init_$Create$_0(tmp2_currentInfo, tmp1_backInfo, tmp3_forwardInfo);
    }
    var newHistory = tmp;
    var oldHistory = this._history_1.get_value_j01efc_k$();
    if (oldHistory.equals(newHistory)) {
      return Unit_getInstance();
    }
    this._history_1.set_value_v1vabv_k$(newHistory);
    var _iterator__ex2g4s = this.overlayInputs_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var input = _iterator__ex2g4s.next_20eer_k$();
      input.doOnHistoryChanged_yqgh8f_k$(newHistory);
    }
    var _iterator__ex2g4s_0 = this.defaultInputs_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var input_0 = _iterator__ex2g4s_0.next_20eer_k$();
      input_0.doOnHistoryChanged_yqgh8f_k$(newHistory);
    }
    var _iterator__ex2g4s_1 = this.unspecifiedInputs_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
      var input_1 = _iterator__ex2g4s_1.next_20eer_k$();
      input_1.doOnHistoryChanged_yqgh8f_k$(newHistory);
    }
  };
  protoOf(NavigationEventProcessor).addHandler_bbxz2q_k$ = function (dispatcher, handler, priority) {
    // Inline function 'kotlin.require' call
    if (!(handler.get_dispatcher_sve22s_k$() == null)) {
      var message = "Handler '" + toString(handler) + "' is already registered with a dispatcher";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    switch (priority) {
      case 0:
        this.overlayHandlers_1.addFirst_7io6zl_k$(handler);
        break;
      case 1:
        this.defaultHandlers_1.addFirst_7io6zl_k$(handler);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('Unsupported priority value: ' + priority);
    }
    handler.set_dispatcher_1dyizj_k$(dispatcher);
    this.refreshEnabledHandlers_uswlun_k$();
  };
  protoOf(NavigationEventProcessor).addHandler$default_eetq6i_k$ = function (dispatcher, handler, priority, $super) {
    priority = priority === VOID ? 1 : priority;
    var tmp;
    if ($super === VOID) {
      this.addHandler_bbxz2q_k$(dispatcher, handler, priority);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.addHandler_bbxz2q_k$.call(this, dispatcher, handler, priority);
    }
    return tmp;
  };
  protoOf(NavigationEventProcessor).removeHandler_u1kuv1_k$ = function (handler) {
    if (equals(handler, this.inProgressHandler_1)) {
      var tmp0_subject = this.inProgressDirection_1;
      if (tmp0_subject === -1) {
        handler.doOnBackCancelled_yhtpj8_k$();
      } else if (tmp0_subject === 1) {
        handler.doOnForwardCancelled_f9n3im_k$();
      }
      this.inProgressHandler_1 = null;
      this.inProgressDirection_1 = 0;
      this.inProgressInput_1 = null;
    }
    this.overlayHandlers_1.remove_cedx0m_k$(handler);
    this.defaultHandlers_1.remove_cedx0m_k$(handler);
    handler.set_dispatcher_1dyizj_k$(null);
    this.refreshEnabledHandlers_uswlun_k$();
  };
  protoOf(NavigationEventProcessor).addInput_sdd6i0_k$ = function (dispatcher, input, priority) {
    // Inline function 'kotlin.require' call
    if (!(input.get_dispatcher_sve22s_k$() == null)) {
      var message = "Input '" + toString(input) + "' is already added to dispatcher " + toString_0(input.get_dispatcher_sve22s_k$()) + '.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inputs;
    switch (priority) {
      case 0:
        inputs = this.overlayInputs_1;
        break;
      case 1:
        inputs = this.defaultInputs_1;
        break;
      default:
        inputs = this.unspecifiedInputs_1;
        break;
    }
    // Inline function 'kotlin.collections.plusAssign' call
    inputs.add_utx5q5_k$(input);
    input.set_dispatcher_1dyizj_k$(dispatcher);
    input.doOnAdded_fx20o_k$(dispatcher);
    input.doOnHistoryChanged_yqgh8f_k$(this.history_1.get_value_j01efc_k$());
    var hasEnabledHandlers;
    switch (priority) {
      case 0:
        hasEnabledHandlers = this.hasEnabledOverlayHandlers_1;
        break;
      case 1:
        hasEnabledHandlers = this.hasEnabledDefaultHandlers_1;
        break;
      default:
        hasEnabledHandlers = this.hasEnabledAnyHandlers_1;
        break;
    }
    input.doOnHasEnabledHandlersChanged_qofpap_k$(hasEnabledHandlers);
  };
  protoOf(NavigationEventProcessor).removeInput_k4fy93_k$ = function (input) {
    this.overlayInputs_1.remove_cedx0m_k$(input);
    this.defaultInputs_1.remove_cedx0m_k$(input);
    this.unspecifiedInputs_1.remove_cedx0m_k$(input);
    input.set_dispatcher_1dyizj_k$(null);
    input.doOnRemoved_f3ly2a_k$();
  };
  protoOf(NavigationEventProcessor).dispatchOnStarted_w5ulxj_k$ = function (input, direction, event) {
    if (!(this.inProgressDirection_1 === 0)) {
      return Unit_getInstance();
    }
    var handler = resolveEnabledHandler(this, direction);
    this.inProgressHandler_1 = handler;
    this.inProgressDirection_1 = direction;
    this.inProgressInput_1 = input;
    if (!(event == null)) {
      switch (direction) {
        case -1:
          if (handler == null)
            null;
          else {
            handler.doOnBackStarted_bvzcxl_k$(event);
          }

          break;
        case 1:
          if (handler == null)
            null;
          else {
            handler.doOnForwardStarted_8bavkh_k$(event);
          }

          break;
        case 0:
          break;
      }
      this._transitionState_1.set_value_v1vabv_k$(new InProgress(event, direction));
    }
  };
  protoOf(NavigationEventProcessor).dispatchOnStarted$default_ias8al_k$ = function (input, direction, event, $super) {
    event = event === VOID ? null : event;
    var tmp;
    if ($super === VOID) {
      this.dispatchOnStarted_w5ulxj_k$(input, direction, event);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.dispatchOnStarted_w5ulxj_k$.call(this, input, direction, event);
    }
    return tmp;
  };
  protoOf(NavigationEventProcessor).dispatchOnProgressed_auc81h_k$ = function (input, direction, event) {
    if (!equals(input, this.inProgressInput_1) || !(direction === this.inProgressDirection_1)) {
      return Unit_getInstance();
    }
    var tmp0_elvis_lhs = this.inProgressHandler_1;
    var handler = tmp0_elvis_lhs == null ? resolveEnabledHandler(this, direction) : tmp0_elvis_lhs;
    switch (direction) {
      case -1:
        if (handler == null)
          null;
        else {
          handler.doOnBackProgressed_r10jpi_k$(event);
        }

        break;
      case 1:
        if (handler == null)
          null;
        else {
          handler.doOnForwardProgressed_nwo70w_k$(event);
        }

        break;
      case 0:
        break;
    }
    this._transitionState_1.set_value_v1vabv_k$(new InProgress(event, direction));
  };
  protoOf(NavigationEventProcessor).dispatchOnCompleted_uaxmpc_k$ = function (input, direction, onBackCompletedFallback) {
    if (!equals(input, this.inProgressInput_1) || !(direction === this.inProgressDirection_1)) {
      return Unit_getInstance();
    }
    var tmp0_elvis_lhs = this.inProgressHandler_1;
    var handler = tmp0_elvis_lhs == null ? resolveEnabledHandler(this, direction) : tmp0_elvis_lhs;
    this.inProgressHandler_1 = null;
    this.inProgressDirection_1 = 0;
    this.inProgressInput_1 = null;
    switch (direction) {
      case -1:
        if (handler == null) {
          if (onBackCompletedFallback == null)
            null;
          else {
            onBackCompletedFallback.onBackCompletedFallback_qvvoon_k$();
          }
        } else {
          handler.doOnBackCompleted_bff8ja_k$();
        }

        break;
      case 1:
        if (handler == null)
          null;
        else {
          handler.doOnForwardCompleted_unlujw_k$();
        }

        break;
      case 0:
        break;
    }
    this._transitionState_1.set_value_v1vabv_k$(Idle_getInstance());
  };
  protoOf(NavigationEventProcessor).dispatchOnCancelled_3j9j75_k$ = function (input, direction) {
    if (!equals(input, this.inProgressInput_1) || !(direction === this.inProgressDirection_1)) {
      return Unit_getInstance();
    }
    var tmp0_elvis_lhs = this.inProgressHandler_1;
    var handler = tmp0_elvis_lhs == null ? resolveEnabledHandler(this, direction) : tmp0_elvis_lhs;
    this.inProgressHandler_1 = null;
    this.inProgressDirection_1 = 0;
    this.inProgressInput_1 = null;
    switch (direction) {
      case -1:
        if (handler == null)
          null;
        else {
          handler.doOnBackCancelled_yhtpj8_k$();
        }

        break;
      case 1:
        if (handler == null)
          null;
        else {
          handler.doOnForwardCancelled_f9n3im_k$();
        }

        break;
      case 0:
        break;
    }
    this._transitionState_1.set_value_v1vabv_k$(Idle_getInstance());
  };
  function Idle() {
    Idle_instance = this;
    NavigationEventTransitionState.call(this);
  }
  protoOf(Idle).toString = function () {
    return 'Idle()';
  };
  var Idle_instance;
  function Idle_getInstance() {
    if (Idle_instance == null)
      new Idle();
    return Idle_instance;
  }
  function InProgress(latestEvent, direction) {
    NavigationEventTransitionState.call(this);
    this.latestEvent_1 = latestEvent;
    this.direction_1 = direction;
  }
  protoOf(InProgress).get_latestEvent_kpc4q2_k$ = function () {
    return this.latestEvent_1;
  };
  protoOf(InProgress).get_direction_7ekune_k$ = function () {
    return this.direction_1;
  };
  protoOf(InProgress).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof InProgress))
      THROW_CCE();
    if (!(this.direction_1 === other.direction_1))
      return false;
    if (!this.latestEvent_1.equals(other.latestEvent_1))
      return false;
    return true;
  };
  protoOf(InProgress).hashCode = function () {
    var result = this.direction_1;
    result = imul(31, result) + this.latestEvent_1.hashCode() | 0;
    return result;
  };
  protoOf(InProgress).toString = function () {
    return 'InProgress(latestEvent=' + this.latestEvent_1.toString() + ', direction=' + this.direction_1 + ')';
  };
  function Direction() {
  }
  protoOf(Direction).equals = function (other) {
    if (!(other instanceof Direction))
      return false;
    other instanceof Direction || THROW_CCE();
    return true;
  };
  protoOf(Direction).hashCode = function () {
    return 0;
  };
  protoOf(Direction).toString = function () {
    return '@androidx.navigationevent.NavigationEventTransitionState.Direction(' + ')';
  };
  function Companion_1() {
    Companion_instance_1 = this;
    this.TRANSITIONING_UNKNOWN_1 = 0;
    this.TRANSITIONING_FORWARD_1 = 1;
    this.TRANSITIONING_BACK_1 = -1;
  }
  protoOf(Companion_1).get_TRANSITIONING_UNKNOWN_8qg1i3_k$ = function () {
    return this.TRANSITIONING_UNKNOWN_1;
  };
  protoOf(Companion_1).get_TRANSITIONING_FORWARD_xjuqve_k$ = function () {
    return this.TRANSITIONING_FORWARD_1;
  };
  protoOf(Companion_1).get_TRANSITIONING_BACK_r794pu_k$ = function () {
    return this.TRANSITIONING_BACK_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function NavigationEventTransitionState() {
    Companion_getInstance_1();
  }
  function OnBackCompletedFallback() {
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = NavigationEventDispatcherOwner;
  _.$_$.b = NavigationEventHandler;
  _.$_$.c = NavigationEventInput;
  _.$_$.d = NavigationEventDispatcher_init_$Create$;
  _.$_$.e = NavigationEventHandler_init_$Init$;
  _.$_$.f = None_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-navigationevent-navigationevent.js.map
