(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './androidx-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./androidx-collection-collection.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    globalThis['compose-multiplatform-core-compose-animation-animation'] = factory(typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-animation-animation'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['androidx-collection-collection']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_androidx_collection_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var protoOf = kotlin_kotlin.$_$.ah;
  var equals = kotlin_kotlin.$_$.qf;
  var FunctionAdapter = kotlin_kotlin.$_$.bf;
  var isInterface = kotlin_kotlin.$_$.ng;
  var hashCode = kotlin_kotlin.$_$.xf;
  var initMetadataForClass = kotlin_kotlin.$_$.yf;
  var VOID = kotlin_kotlin.$_$.e;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var get_VisibilityThreshold = kotlin_org_jetbrains_compose_animation_animation_core.$_$.z;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.p1;
  var fromInt = kotlin_kotlin.$_$.oe;
  var shiftLeft = kotlin_kotlin.$_$.we;
  var Long = kotlin_kotlin.$_$.nl;
  var bitwiseAnd = kotlin_kotlin.$_$.ge;
  var bitwiseOr = kotlin_kotlin.$_$.he;
  var _IntSize___init__impl__emcjft = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p3;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.n2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.ac;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.r2;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var updateTransition = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r1;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.m2;
  var Companion_getInstance_1 = kotlin_androidx_compose_runtime_runtime.$_$.b3;
  var THROW_CCE = kotlin_kotlin.$_$.ul;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.l2;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.q2;
  var Unit_getInstance = kotlin_kotlin.$_$.l5;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.e7;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.m7;
  var composed = kotlin_org_jetbrains_compose_ui_ui.$_$.ca;
  var initMetadataForInterface = kotlin_kotlin.$_$.cg;
  var layout = kotlin_org_jetbrains_compose_ui_ui.$_$.f4;
  var THROW_IAE = kotlin_kotlin.$_$.vl;
  var enumEntries = kotlin_kotlin.$_$.be;
  var Enum = kotlin_kotlin.$_$.hl;
  var createChildTransitionInternal = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j1;
  var rememberUpdatedState = kotlin_androidx_compose_runtime_runtime.$_$.j2;
  var produceState = kotlin_androidx_compose_runtime_runtime.$_$.g2;
  var get_currentCompositeKeyHashCode = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.da;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.vb;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.p;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.w2;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.z2;
  var Updater__init_impl_uaeges = kotlin_androidx_compose_runtime_runtime.$_$.x2;
  var Updater__reconcile_impl_1mfi6g = kotlin_androidx_compose_runtime_runtime.$_$.y2;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.e2;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r4;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var get_lastIndex = kotlin_kotlin.$_$.ka;
  var compareTo = kotlin_kotlin.$_$.mf;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.r3;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.s2;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r3;
  var shiftRight = kotlin_kotlin.$_$.ye;
  var convertToInt = kotlin_kotlin.$_$.ke;
  var KProperty0 = kotlin_kotlin.$_$.ki;
  var getLocalDelegateReference = kotlin_kotlin.$_$.tf;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var CoroutineImpl = kotlin_kotlin.$_$.ud;
  var initMetadataForLambda = kotlin_kotlin.$_$.dg;
  var ProduceStateScope = kotlin_androidx_compose_runtime_runtime.$_$.d1;
  var snapshotFlow = kotlin_androidx_compose_runtime_runtime.$_$.k2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ed;
  var SuspendFunction1 = kotlin_kotlin.$_$.wd;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.x9;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.i5;
  var androidx_compose_ui_Modifier_Node$stableprop_getter = kotlin_org_jetbrains_compose_ui_ui.$_$.ba;
  var KMutableProperty1 = kotlin_kotlin.$_$.ji;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vf;
  var ensureNotNull = kotlin_kotlin.$_$.om;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.s;
  var ColorSpaces_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h4;
  var Color__convert_impl_so5m8t = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k3;
  var _Color___get_red__impl__cwrsk6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n3;
  var _Color___get_green__impl__bta9rs = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l3;
  var _Color___get_blue__impl__xwez13 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i3;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h3;
  var AnimationVector4D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zf;
  var plus = kotlin_kotlin.$_$.fb;
  var get_VisibilityThreshold_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.c1;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui.$_$.zb;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p4;
  var get_VectorConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.t;
  var createDeferredAnimation = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k1;
  var get_VectorConverter_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.x;
  var _Color___get_colorSpace__impl__jqqozk = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j3;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o4;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.d1;
  var Annotation = kotlin_kotlin.$_$.zk;
  var emptyMap = kotlin_kotlin.$_$.k9;
  var toString = kotlin_kotlin.$_$.hn;
  var toString_0 = kotlin_kotlin.$_$.dh;
  var getBooleanHashCode = kotlin_kotlin.$_$.sf;
  var getNumberHashCode = kotlin_kotlin.$_$.uf;
  var TransformOrigin = kotlin_org_jetbrains_compose_ui_ui.$_$.c1;
  var TransformOrigin__toString_impl_nn7ftd = kotlin_org_jetbrains_compose_ui_ui.$_$.ya;
  var TransformOrigin__hashCode_impl_pmqpcw = kotlin_org_jetbrains_compose_ui_ui.$_$.va;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o3;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.j5;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.u4;
  var get_VectorConverter_1 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.y;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.vm;
  var requireLayoutCoordinates = kotlin_org_jetbrains_compose_ui_ui.$_$.k6;
  var toRawBits = kotlin_kotlin.$_$.fn;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var positionInParent = kotlin_org_jetbrains_compose_ui_ui.$_$.i4;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var bitwiseXor = kotlin_kotlin.$_$.ie;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.y4;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.z4;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n3;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o3;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var IntOffset__minus_impl_4m69hb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j3;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k1;
  var IntOffset__plus_impl_nqoa9b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l3;
  var _TransformOrigin___get_pivotFractionX__impl__a9pmci = kotlin_org_jetbrains_compose_ui_ui.$_$.wa;
  var _TransformOrigin___get_pivotFractionY__impl__ijwupp = kotlin_org_jetbrains_compose_ui_ui.$_$.xa;
  var AnimationVector2D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g;
  var TransformOrigin_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.b1;
  var KMutableProperty0 = kotlin_kotlin.$_$.ii;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui.$_$.kb;
  var get_VisibilityThreshold_1 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b1;
  var toNumber = kotlin_kotlin.$_$.af;
  var compare = kotlin_kotlin.$_$.je;
  var equalsLong = kotlin_kotlin.$_$.ne;
  var numberToLong = kotlin_kotlin.$_$.ve;
  var invalidateDraw = kotlin_org_jetbrains_compose_ui_ui.$_$.b6;
  var floatFromBits = kotlin_kotlin.$_$.rf;
  var drawLayer = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e;
  var mutableFloatStateOf = kotlin_androidx_compose_runtime_runtime.$_$.z1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var requireGraphicsContext = kotlin_org_jetbrains_compose_ui_ui.$_$.j6;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.h5;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.g5;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.f5;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.e5;
  var get_providedValues = kotlin_org_jetbrains_compose_ui_ui.$_$.p4;
  var provide = kotlin_org_jetbrains_compose_ui_ui.$_$.q4;
  var get_current = kotlin_org_jetbrains_compose_ui_ui.$_$.o4;
  var ModifierLocalModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.r4;
  var Offset__minus_impl_hoj2c0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x;
  var round = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var println = kotlin_kotlin.$_$.de;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d;
  var to = kotlin_kotlin.$_$.in;
  var modifierLocalMapOf = kotlin_org_jetbrains_compose_ui_ui.$_$.t4;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var observeReads = kotlin_org_jetbrains_compose_ui_ui.$_$.g6;
  var positionInRoot = kotlin_org_jetbrains_compose_ui_ui.$_$.j4;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c;
  var IntSize__toString_impl_54w9zl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s3;
  var roundToInt = kotlin_kotlin.$_$.gh;
  var isNaN_0 = kotlin_kotlin.$_$.rm;
  var roundToIntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l4;
  var coerceAtLeast = kotlin_kotlin.$_$.ph;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var Constraints__toString_impl_37yskr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var requireDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.i6;
  var isPlacementApproachInProgress = kotlin_org_jetbrains_compose_ui_ui.$_$.w2;
  var minApproachIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var minApproachIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.z2;
  var maxApproachIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.y2;
  var maxApproachIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.x2;
  var ApproachLayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.b3;
  var ObserverModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.k5;
  var modifierLocalOf = kotlin_org_jetbrains_compose_ui_ui.$_$.u4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var get_VisibilityThreshold_2 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p2;
  var SpringSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.q;
  var get_VectorConverter_2 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.w;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b;
  var mutableStateListOf = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var removeAll = kotlin_kotlin.$_$.lb;
  var _Velocity___get_x__impl__qqcikv = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g4;
  var _Velocity___get_y__impl__239yhc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h4;
  var Size__toString_impl_o87ni8 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n4;
  var RememberObserver = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui.$_$.ub;
  var approachLayout = kotlin_org_jetbrains_compose_ui_ui.$_$.z3;
  var LookaheadScope = kotlin_org_jetbrains_compose_ui_ui.$_$.m3;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f1;
  var addOutline = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p1;
  var Comparator = kotlin_kotlin.$_$.gl;
  var MutableTransitionState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o;
  var androidx_compose_animation_core_MutableTransitionState$stableprop_getter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e1;
  var rememberTransition = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n1;
  var get_VectorConverter_3 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.v;
  var compareValues = kotlin_kotlin.$_$.bd;
  var mutableStateMapOf = kotlin_androidx_compose_runtime_runtime.$_$.d2;
  var sortWith = kotlin_kotlin.$_$.bc;
  var localLookaheadPositionOf$default = kotlin_org_jetbrains_compose_ui_ui.$_$.pa;
  var initMetadataForObject = kotlin_kotlin.$_$.eg;
  var MutableScatterMap = kotlin_androidx_collection_collection.$_$.p;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var mutableIntStateOf = kotlin_androidx_compose_runtime_runtime.$_$.a2;
  var Offset__plus_impl_c78cg0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.z;
  var animateValueAsState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h1;
  var _ScaleFactor___get_packedValue__impl__x2069g = kotlin_org_jetbrains_compose_ui_ui.$_$.cb;
  var _ScaleFactor___init__impl__ttdtvk = kotlin_org_jetbrains_compose_ui_ui.$_$.bb;
  var generateDecayAnimationSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.m1;
  var coerceIn = kotlin_kotlin.$_$.vh;
  var numberToInt = kotlin_kotlin.$_$.yg;
  var divide = kotlin_kotlin.$_$.me;
  var multiply = kotlin_kotlin.$_$.te;
  var FloatDecayAnimationSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.m;
  var Companion_getInstance_13 = kotlin_androidx_compose_runtime_runtime.$_$.a3;
  var derivedStateOf = kotlin_androidx_compose_runtime_runtime.$_$.v1;
  var createTransitionAnimation = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l1;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.t6;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(BoundsTransform, 'BoundsTransform');
  initMetadataForClass(sam$androidx_compose_animation_BoundsTransform$0, 'sam$androidx_compose_animation_BoundsTransform$0', VOID, VOID, [BoundsTransform, FunctionAdapter]);
  function animateEnterExit(_this__u8e3s4, enter, exit, label) {
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = AnimatedVisibilityScope$animateEnterExit$lambda(enter, exit, label);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp_0 = tmp;
    return composed(_this__u8e3s4, tmp_0, AnimatedVisibilityScope$animateEnterExit$lambda_0(this, enter, exit, label));
  }
  function animateEnterExit$default(_this__u8e3s4, enter, exit, label, $super) {
    enter = enter === VOID ? fadeIn() : enter;
    exit = exit === VOID ? fadeOut() : exit;
    label = label === VOID ? 'animateEnterExit' : label;
    return $super === VOID ? this.animateEnterExit_z97dqu_k$(_this__u8e3s4, enter, exit, label) : animateEnterExit(_this__u8e3s4, enter, exit, label);
  }
  initMetadataForInterface(AnimatedVisibilityScope, 'AnimatedVisibilityScope');
  initMetadataForClass(EnterExitState, 'EnterExitState', VOID, Enum);
  initMetadataForInterface(OnLookaheadMeasured, 'OnLookaheadMeasured');
  initMetadataForClass(AnimatedVisibilityScopeImpl, 'AnimatedVisibilityScopeImpl', VOID, VOID, [AnimatedVisibilityScope]);
  initMetadataForClass(AnimatedEnterExitMeasurePolicy, 'AnimatedEnterExitMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(AnimatedEnterExitImpl$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(AnimatedEnterExitImpl$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(LayoutModifierNodeWithPassThroughIntrinsics, 'LayoutModifierNodeWithPassThroughIntrinsics', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(BoundsAnimation, 'BoundsAnimation');
  initMetadataForCompanion(Companion);
  initMetadataForClass(EnterTransition, 'EnterTransition');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ExitTransition, 'ExitTransition');
  initMetadataForClass(ExperimentalAnimationApi, 'ExperimentalAnimationApi', VOID, VOID, [Annotation]);
  initMetadataForClass(TransitionData, 'TransitionData', TransitionData);
  initMetadataForClass(EnterTransitionImpl, 'EnterTransitionImpl', VOID, EnterTransition);
  initMetadataForClass(Fade, 'Fade');
  initMetadataForClass(Slide, 'Slide');
  initMetadataForClass(ChangeSize, 'ChangeSize');
  initMetadataForClass(Scale, 'Scale');
  initMetadataForClass(Veil, 'Veil');
  initMetadataForInterface(TransitionEffectKey, 'TransitionEffectKey');
  initMetadataForClass(TransitionEffect, 'TransitionEffect');
  initMetadataForClass(ExitTransitionImpl, 'ExitTransitionImpl', VOID, ExitTransition);
  initMetadataForClass(VeilModifierElement, 'VeilModifierElement', VOID, ModifierNodeElement);
  initMetadataForInterface(GraphicsLayerBlockForEnterExit, 'GraphicsLayerBlockForEnterExit');
  initMetadataForClass(EnterExitTransitionElement, 'EnterExitTransitionElement', VOID, ModifierNodeElement);
  initMetadataForClass(VeilModifierNode, 'VeilModifierNode', VOID, Node, [Node, DrawModifierNode]);
  initMetadataForClass(EnterExitTransitionModifierNode, 'EnterExitTransitionModifierNode', VOID, LayoutModifierNodeWithPassThroughIntrinsics);
  initMetadataForClass(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0, 'sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0', VOID, VOID, [GraphicsLayerBlockForEnterExit, FunctionAdapter]);
  initMetadataForClass(FlingInfo, 'FlingInfo');
  initMetadataForClass(FlingCalculator, 'FlingCalculator');
  initMetadataForClass(RenderInTransitionOverlayNodeElement, 'RenderInTransitionOverlayNodeElement', VOID, ModifierNodeElement);
  initMetadataForInterface(LayerRenderer, 'LayerRenderer');
  initMetadataForClass(LayerWithRenderer, 'LayerWithRenderer', VOID, VOID, [LayerRenderer]);
  initMetadataForClass(RenderInTransitionOverlayNode, 'RenderInTransitionOverlayNode', VOID, Node, [Node, LayoutModifierNode, DrawModifierNode, ModifierLocalModifierNode]);
  initMetadataForClass(SharedBoundsNodeElement, 'SharedBoundsNodeElement', VOID, ModifierNodeElement);
  initMetadataForClass(sam$androidx_compose_animation_BoundsTransform$0_0, 'sam$androidx_compose_animation_BoundsTransform$0', VOID, VOID, [BoundsTransform, FunctionAdapter]);
  initMetadataForInterface(BoundsProvider, 'BoundsProvider');
  initMetadataForClass(SharedBoundsNode, 'SharedBoundsNode', VOID, Node, [ApproachLayoutModifierNode, Node, DrawModifierNode, ModifierLocalModifierNode, ObserverModifierNode, BoundsProvider]);
  initMetadataForLambda(SharedElement$updateExitVelocity$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(SharedElement$momentumAnimationOffset$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(SharedElement, 'SharedElement');
  initMetadataForClass(SharedElementEntry, 'SharedElementEntry', VOID, VOID, [LayerRenderer, RememberObserver]);
  initMetadataForInterface(PlaceholderSize, 'PlaceholderSize');
  initMetadataForClass(sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0, 'sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0', VOID, VOID, [PlaceholderSize, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0_0, 'sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0', VOID, VOID, [PlaceholderSize, FunctionAdapter]);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForInterface(ResizeMode, 'ResizeMode');
  initMetadataForInterface(OverlayClip, 'OverlayClip');
  initMetadataForClass(SharedContentState, 'SharedContentState');
  function get_isEnabled(_this__u8e3s4) {
    return true;
  }
  function get_shouldKeepEnabledForOngoingAnimation() {
    return true;
  }
  function alternativeTargetBoundsInTransitionScopeAfterRemoval(_this__u8e3s4, targetBoundsBeforeRemoval, sharedTransitionLayoutSize) {
    return null;
  }
  initMetadataForInterface(SharedContentConfig, 'SharedContentConfig');
  function skipToLookaheadSize$default(_this__u8e3s4, enabled, $super) {
    var tmp;
    if (enabled === VOID) {
      tmp = SharedTransitionScope$skipToLookaheadSize$lambda(this);
    } else {
      tmp = enabled;
    }
    enabled = tmp;
    return $super === VOID ? this.skipToLookaheadSize_fy7u2l_k$(_this__u8e3s4, enabled) : $super.skipToLookaheadSize_fy7u2l_k$.call(this, _this__u8e3s4, enabled);
  }
  function skipToLookaheadPosition(_this__u8e3s4, enabled) {
    var tmp = SharedTransitionScope$skipToLookaheadPosition$lambda_0;
    var tmp_0 = SharedTransitionScope$skipToLookaheadPosition$lambda_1(enabled);
    return approachLayout(_this__u8e3s4, tmp, tmp_0, SharedTransitionScope$skipToLookaheadPosition$lambda_2(enabled, this));
  }
  function skipToLookaheadPosition$default(_this__u8e3s4, enabled, $super) {
    var tmp;
    if (enabled === VOID) {
      tmp = SharedTransitionScope$skipToLookaheadPosition$lambda(this);
    } else {
      tmp = enabled;
    }
    enabled = tmp;
    return $super === VOID ? this.skipToLookaheadPosition_gd5pgr_k$(_this__u8e3s4, enabled) : skipToLookaheadPosition(_this__u8e3s4, enabled);
  }
  function renderInSharedTransitionScopeOverlay$default(_this__u8e3s4, zIndexInOverlay, renderInOverlay, $super) {
    zIndexInOverlay = zIndexInOverlay === VOID ? 0.0 : zIndexInOverlay;
    var tmp;
    if (renderInOverlay === VOID) {
      tmp = SharedTransitionScope$renderInSharedTransitionScopeOverlay$lambda(this);
    } else {
      tmp = renderInOverlay;
    }
    renderInOverlay = tmp;
    return $super === VOID ? this.renderInSharedTransitionScopeOverlay_x89i4l_k$(_this__u8e3s4, zIndexInOverlay, renderInOverlay) : $super.renderInSharedTransitionScopeOverlay_x89i4l_k$.call(this, _this__u8e3s4, zIndexInOverlay, renderInOverlay);
  }
  function sharedElement$default(_this__u8e3s4, sharedContentState, animatedVisibilityScope, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    boundsTransform = boundsTransform === VOID ? SharedTransitionDefaults_getInstance().BoundsTransform_1 : boundsTransform;
    placeholderSize = placeholderSize === VOID ? Companion_getInstance_16().ContentSize_1 : placeholderSize;
    renderInOverlayDuringTransition = renderInOverlayDuringTransition === VOID ? true : renderInOverlayDuringTransition;
    zIndexInOverlay = zIndexInOverlay === VOID ? 0.0 : zIndexInOverlay;
    clipInOverlayDuringTransition = clipInOverlayDuringTransition === VOID ? get_ParentClip() : clipInOverlayDuringTransition;
    return $super === VOID ? this.sharedElement_swjtlq_k$(_this__u8e3s4, sharedContentState, animatedVisibilityScope, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) : $super.sharedElement_swjtlq_k$.call(this, _this__u8e3s4, sharedContentState, animatedVisibilityScope, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  }
  function sharedBounds$default(_this__u8e3s4, sharedContentState, animatedVisibilityScope, enter, exit, boundsTransform, resizeMode, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    enter = enter === VOID ? fadeIn() : enter;
    exit = exit === VOID ? fadeOut() : exit;
    boundsTransform = boundsTransform === VOID ? SharedTransitionDefaults_getInstance().BoundsTransform_1 : boundsTransform;
    resizeMode = resizeMode === VOID ? Companion_getInstance_17().scaleToBounds_38olcd_k$(Companion_getInstance_12().get_FillWidth_n2o75m_k$(), Companion_getInstance_5().get_Center_3arb0i_k$()) : resizeMode;
    placeholderSize = placeholderSize === VOID ? Companion_getInstance_16().ContentSize_1 : placeholderSize;
    renderInOverlayDuringTransition = renderInOverlayDuringTransition === VOID ? true : renderInOverlayDuringTransition;
    zIndexInOverlay = zIndexInOverlay === VOID ? 0.0 : zIndexInOverlay;
    clipInOverlayDuringTransition = clipInOverlayDuringTransition === VOID ? get_ParentClip() : clipInOverlayDuringTransition;
    return $super === VOID ? this.sharedBounds_39r956_k$(_this__u8e3s4, sharedContentState, animatedVisibilityScope, enter, exit, boundsTransform, resizeMode, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) : $super.sharedBounds_39r956_k$.call(this, _this__u8e3s4, sharedContentState, animatedVisibilityScope, enter, exit, boundsTransform, resizeMode, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  }
  function sharedElementWithCallerManagedVisibility$default(_this__u8e3s4, sharedContentState, visible, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    boundsTransform = boundsTransform === VOID ? SharedTransitionDefaults_getInstance().BoundsTransform_1 : boundsTransform;
    placeholderSize = placeholderSize === VOID ? Companion_getInstance_16().ContentSize_1 : placeholderSize;
    renderInOverlayDuringTransition = renderInOverlayDuringTransition === VOID ? true : renderInOverlayDuringTransition;
    zIndexInOverlay = zIndexInOverlay === VOID ? 0.0 : zIndexInOverlay;
    clipInOverlayDuringTransition = clipInOverlayDuringTransition === VOID ? get_ParentClip() : clipInOverlayDuringTransition;
    return $super === VOID ? this.sharedElementWithCallerManagedVisibility_lqpqms_k$(_this__u8e3s4, sharedContentState, visible, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) : $super.sharedElementWithCallerManagedVisibility_lqpqms_k$.call(this, _this__u8e3s4, sharedContentState, visible, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  }
  function rememberSharedContentState(key, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(800730162);
    sourceInformation($composer_0, 'C(rememberSharedContentState)797@45482L77:SharedTransitionScope.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(800730162, $changed, -1, 'androidx.compose.animation.SharedTransitionScope.rememberSharedContentState (SharedTransitionScope.kt:797)');
    }
    var tmp0 = this.rememberSharedContentState_z7zs23_k$(key, SharedContentConfig_getInstance(), $composer_0, 48 | 14 & $changed | 896 & $changed << 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function rememberSharedContentState_0(key, config, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-148945892);
    sourceInformation($composer_0, 'C(rememberSharedContentState)P(1)821@46729L49:SharedTransitionScope.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(-148945892, $changed, -1, 'androidx.compose.animation.SharedTransitionScope.rememberSharedContentState (SharedTransitionScope.kt:819)');
    }
    sourceInformationMarkerStart($composer_0, -1403074483, 'CC(remember):SharedTransitionScope.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changed_ga7h3f_k$(key);
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value = new SharedContentState(key, config);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    // Inline function 'kotlin.also' call
    tmp1_group.set_config_r265w_k$(config);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp1_group;
  }
  function makeSharedContentConfig() {
    return CachedSharedContentConfig_getInstance();
  }
  initMetadataForInterface(SharedTransitionScope, 'SharedTransitionScope', VOID, VOID, [LookaheadScope]);
  initMetadataForClass(ShapeBasedClip, 'ShapeBasedClip', VOID, VOID, [OverlayClip]);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForLambda(SharedTransitionScopeImpl$onEntryRemoved$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(SharedTransitionScopeImpl, 'SharedTransitionScopeImpl', VOID, VOID, [SharedTransitionScope, LookaheadScope]);
  initMetadataForClass(ScaleToBoundsImpl, 'ScaleToBoundsImpl', VOID, VOID, [ResizeMode]);
  initMetadataForObject(RemeasureImpl, 'RemeasureImpl', VOID, VOID, [ResizeMode]);
  initMetadataForObject(SharedContentConfig_0, 'SharedContentConfig', VOID, VOID, [SharedContentConfig]);
  initMetadataForClass(sam$androidx_compose_animation_BoundsTransform$0_1, 'sam$androidx_compose_animation_BoundsTransform$0', VOID, VOID, [BoundsTransform, FunctionAdapter]);
  initMetadataForObject(SharedTransitionDefaults, 'SharedTransitionDefaults');
  initMetadataForObject(CachedSharedContentConfig, 'CachedSharedContentConfig', VOID, VOID, [SharedContentConfig]);
  initMetadataForClass(ParentClip$1, VOID, VOID, VOID, [OverlayClip]);
  initMetadataForClass(State, 'State');
  initMetadataForClass(SharedTransitionStateMachine, 'SharedTransitionStateMachine');
  initMetadataForClass(TargetData, 'TargetData');
  initMetadataForClass(StateChangeRequest, 'StateChangeRequest', VOID, Enum);
  initMetadataForObject(NoMatchFound, 'NoMatchFound', VOID, State);
  initMetadataForClass(ActiveMatchFoundConfigPending, 'ActiveMatchFoundConfigPending', VOID, State);
  initMetadataForClass(MatchIsOrHasBeenConfigured, 'MatchIsOrHasBeenConfigured', VOID, State);
  initMetadataForClass(ActiveMatchConfigured, 'ActiveMatchConfigured', VOID, MatchIsOrHasBeenConfigured);
  initMetadataForClass(ActiveMatchRemovedDuringTransition, 'ActiveMatchRemovedDuringTransition', VOID, MatchIsOrHasBeenConfigured);
  initMetadataForClass(SkipToLookaheadSizeElement, 'SkipToLookaheadSizeElement', SkipToLookaheadSizeElement, ModifierNodeElement);
  initMetadataForClass(SkipToLookaheadSizeNode, 'SkipToLookaheadSizeNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(FlingResult, 'FlingResult');
  initMetadataForObject(AndroidFlingSpline, 'AndroidFlingSpline');
  initMetadataForClass(SplineBasedFloatDecayAnimationSpec, 'SplineBasedFloatDecayAnimationSpec', VOID, VOID, [FloatDecayAnimationSpec]);
  initMetadataForClass(NoOp, 'NoOp', VOID, VOID, [Annotation]);
  //endregion
  function get_DefaultBoundsTransform() {
    _init_properties_AnimateBoundsModifier_kt__rz48or();
    return DefaultBoundsTransform;
  }
  var DefaultBoundsTransform;
  var androidx_compose_animation_BoundsAnimationElement$stable;
  var androidx_compose_animation_BoundsAnimationModifierNode$stable;
  var androidx_compose_animation_BoundsTransformDeferredAnimation$stable;
  function sam$androidx_compose_animation_BoundsTransform$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_BoundsTransform$0).createAnimationSpec_whg8mb_k$ = function (initialBounds, targetBounds) {
    return this.function_1(initialBounds, targetBounds);
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, BoundsTransform) : false) {
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
  protoOf(sam$androidx_compose_animation_BoundsTransform$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function DefaultBoundsTransform$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0) {
    _init_properties_AnimateBoundsModifier_kt__rz48or();
    return spring(1.0, 400.0, get_VisibilityThreshold(Companion_getInstance()));
  }
  var properties_initialized_AnimateBoundsModifier_kt_8xxu7x;
  function _init_properties_AnimateBoundsModifier_kt__rz48or() {
    if (!properties_initialized_AnimateBoundsModifier_kt_8xxu7x) {
      properties_initialized_AnimateBoundsModifier_kt_8xxu7x = true;
      var tmp = DefaultBoundsTransform$lambda;
      DefaultBoundsTransform = new sam$androidx_compose_animation_BoundsTransform$0(tmp);
      androidx_compose_animation_BoundsAnimationElement$stable = 0;
      androidx_compose_animation_BoundsAnimationModifierNode$stable = 8;
      androidx_compose_animation_BoundsTransformDeferredAnimation$stable = 8;
    }
  }
  function get_UnspecifiedSize() {
    _init_properties_AnimatedContent_kt__n7dixw();
    return UnspecifiedSize;
  }
  var UnspecifiedSize;
  var androidx_compose_animation_ContentTransform$stable;
  var androidx_compose_animation_AnimatedContentTransitionScopeImpl_ChildData$stable;
  var androidx_compose_animation_AnimatedContentTransitionScopeImpl$stable;
  var properties_initialized_AnimatedContent_kt_39yooq;
  function _init_properties_AnimatedContent_kt__n7dixw() {
    if (!properties_initialized_AnimatedContent_kt_39yooq) {
      properties_initialized_AnimatedContent_kt_39yooq = true;
      var tmp0 = -2147483648;
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = -2147483648;
      var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      UnspecifiedSize = _IntSize___init__impl__emcjft(tmp$ret$0);
      androidx_compose_animation_ContentTransform$stable = 8;
      androidx_compose_animation_AnimatedContentTransitionScopeImpl_ChildData$stable = 0;
      androidx_compose_animation_AnimatedContentTransitionScopeImpl$stable = 8;
    }
  }
  var androidx_compose_animation_AnimatedVisibilityScopeImpl$stable;
  function AnimatedVisibility(_this__u8e3s4, visible, modifier, enter, exit, label, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enter_0 = {_v: enter};
    var exit_0 = {_v: exit};
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(234057107);
    sourceInformation($composer_0, 'C(AnimatedVisibility)P(5,4,1,2,3)205@11418L32,206@11490L6,206@11455L84:AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(visible) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(enter_0._v) ? 2048 : 1024);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(exit_0._v) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(label_0._v) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 1048576 : 524288);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 599185) === 599184), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (!(($default & 4) === 0)) {
        enter_0._v = fadeIn().plus_w36lq9_k$(expandHorizontally());
      }
      if (!(($default & 8) === 0)) {
        exit_0._v = fadeOut().plus_buzi7t_k$(shrinkHorizontally());
      }
      if (!(($default & 16) === 0)) {
        label_0._v = 'AnimatedVisibility';
      }
      if (isTraceInProgress()) {
        traceEventStart(234057107, $dirty, -1, 'androidx.compose.animation.AnimatedVisibility (AnimatedVisibility.kt:204)');
      }
      var transition = updateTransition(visible, label_0._v, $composer_0, 14 & $dirty >> 3 | 112 & $dirty >> 12, 0);
      sourceInformationMarkerStart($composer_0, 1590593721, 'CC(remember):AnimatedVisibility.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value = AnimatedVisibility$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      AnimatedVisibilityImpl(transition, tmp0_group, modifier_0._v, enter_0._v, exit_0._v, content, $composer_0, 48 | 896 & $dirty | 7168 & $dirty | 57344 & $dirty | 458752 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(AnimatedVisibility$lambda_0(_this__u8e3s4, visible, modifier_0, enter_0, exit_0, label_0, content, $changed, $default));
    }
  }
  function AnimatedVisibilityScope$animateEnterExit$lambda($enter, $exit, $label) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.set_name_wkmnld_k$('animateEnterExit');
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('enter', $enter);
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('exit', $exit);
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('label', $label);
      return Unit_getInstance();
    };
  }
  function AnimatedVisibilityScope$animateEnterExit$lambda_0(this$0, $enter, $exit, $label) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceGroup_5hh8aj_k$(1840112047);
      sourceInformation($composer_0, 'C654@37833L42:AnimatedVisibility.kt#xbi5r1');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1840112047, $changed, -1, 'androidx.compose.animation.AnimatedVisibilityScope.animateEnterExit.<anonymous> (AnimatedVisibility.kt:654)');
        tmp = Unit_getInstance();
      }
      var tmp_0 = this$0.get_transition_mcca1q_k$();
      var tmp0 = $this$composed.then_g5qrxq_k$(createModifier(tmp_0, $enter, $exit, null, $label, $composer_0, 0, 4));
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      return tmp0;
    };
  }
  function AnimatedVisibilityScope() {
  }
  function AnimatedVisibility_0(_this__u8e3s4, visible, modifier, enter, exit, label, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enter_0 = {_v: enter};
    var exit_0 = {_v: exit};
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1799879339);
    sourceInformation($composer_0, 'C(AnimatedVisibility)P(5,4,1,2,3)278@15785L32,279@15857L6,279@15822L84:AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(visible) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(enter_0._v) ? 2048 : 1024);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(exit_0._v) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(label_0._v) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 1048576 : 524288);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 599185) === 599184), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (!(($default & 4) === 0)) {
        enter_0._v = fadeIn().plus_w36lq9_k$(expandVertically());
      }
      if (!(($default & 8) === 0)) {
        exit_0._v = fadeOut().plus_buzi7t_k$(shrinkVertically());
      }
      if (!(($default & 16) === 0)) {
        label_0._v = 'AnimatedVisibility';
      }
      if (isTraceInProgress()) {
        traceEventStart(1799879339, $dirty, -1, 'androidx.compose.animation.AnimatedVisibility (AnimatedVisibility.kt:277)');
      }
      var transition = updateTransition(visible, label_0._v, $composer_0, 14 & $dirty >> 3 | 112 & $dirty >> 12, 0);
      sourceInformationMarkerStart($composer_0, -1187762319, 'CC(remember):AnimatedVisibility.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value = AnimatedVisibility$lambda_1;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      AnimatedVisibilityImpl(transition, tmp0_group, modifier_0._v, enter_0._v, exit_0._v, content, $composer_0, 48 | 896 & $dirty | 7168 & $dirty | 57344 & $dirty | 458752 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(AnimatedVisibility$lambda_2(_this__u8e3s4, visible, modifier_0, enter_0, exit_0, label_0, content, $changed, $default));
    }
  }
  function AnimatedVisibilityImpl(transition, visible, modifier, enter, exit, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1706321816);
    sourceInformation($composer_0, 'C(AnimatedVisibilityImpl)P(4,5,3,1,2)682@38821L423,694@39319L62,678@38691L724:AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(transition) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(visible) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(enter) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(exit) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 131072 : 65536);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 74899) === 74898), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1706321816, $dirty, -1, 'androidx.compose.animation.AnimatedVisibilityImpl (AnimatedVisibility.kt:677)');
      }
      sourceInformationMarkerStart($composer_0, -902229601, 'CC(remember):AnimatedVisibility.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 112) === 32 | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value = AnimatedVisibilityImpl$lambda(visible, transition);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_1 = layout(modifier, tmp0_group);
      sourceInformationMarkerStart($composer_0, -902214026, 'CC(remember):AnimatedVisibility.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value_0 = AnimatedVisibilityImpl$lambda_0;
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      AnimatedEnterExitImpl(transition, visible, tmp_1, enter, exit, tmp1_group, null, content, $composer_0, 196608 | 14 & $dirty | 112 & $dirty | 7168 & $dirty | 57344 & $dirty | 29360128 & $dirty << 6, 64);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(AnimatedVisibilityImpl$lambda_1(transition, visible, modifier, enter, exit, content, $changed));
    }
  }
  var EnterExitState_PreEnter_instance;
  var EnterExitState_Visible_instance;
  var EnterExitState_PostExit_instance;
  function values() {
    return [EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'PreEnter':
        return EnterExitState_PreEnter_getInstance();
      case 'Visible':
        return EnterExitState_Visible_getInstance();
      case 'PostExit':
        return EnterExitState_PostExit_getInstance();
      default:
        EnterExitState_initEntries();
        THROW_IAE('No enum constant androidx.compose.animation.EnterExitState.' + value);
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var EnterExitState_entriesInitialized;
  function EnterExitState_initEntries() {
    if (EnterExitState_entriesInitialized)
      return Unit_getInstance();
    EnterExitState_entriesInitialized = true;
    EnterExitState_PreEnter_instance = new EnterExitState('PreEnter', 0);
    EnterExitState_Visible_instance = new EnterExitState('Visible', 1);
    EnterExitState_PostExit_instance = new EnterExitState('PostExit', 2);
  }
  var $ENTRIES;
  function EnterExitState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimatedEnterExitImpl(transition, visible, modifier, enter, exit, shouldDisposeBlock, onLookaheadMeasured, content, $composer, $changed, $default) {
    var onLookaheadMeasured_0 = {_v: onLookaheadMeasured};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1912839215);
    sourceInformation($composer_0, 'C(AnimatedEnterExitImpl)P(6,7,3,1,2,5,4):AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(transition) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(visible) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(enter) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(exit) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(shouldDisposeBlock) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ((($changed & 2097152) === 0 ? $composer_0.changed_ga7h3f_k$(onLookaheadMeasured_0._v) : $composer_0.changedInstance_s1wkiy_k$(onLookaheadMeasured_0._v)) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 8388608 : 4194304);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 4793491) === 4793490), $dirty & 1)) {
      if (!(($default & 64) === 0)) {
        onLookaheadMeasured_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1912839215, $dirty, -1, 'androidx.compose.animation.AnimatedEnterExitImpl (AnimatedVisibility.kt:715)');
      }
      if (visible(transition.get_targetState_kri3mx_k$()) || visible(transition.get_currentState_snihnl_k$()) || transition.get_isSeeking_vjb393_k$() || transition.get_hasInitialValueAnimations_mdjdrh_k$()) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-232413539);
        sourceInformation($composer_0, '723@40225L124,727@40392L40,733@40641L529,730@40484L686');
        // Inline function 'androidx.compose.animation.core.createChildTransition' call
        var $changed_0 = 48 | 14 & $dirty;
        var label = 'EnterExitTransition';
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, -539313577, 'CC(createChildTransition)1768@75281L36,1769@75341L74,1770@75438L39,1771@75489L63:Transition.kt#pdpnli');
        if (!((0 & 1) === 0))
          label = 'ChildTransition';
        sourceInformationMarkerStart($composer_1, 1410701659, 'CC(remember):Transition.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = ($changed_0 & 14 ^ 6) > 4 && $composer_1.changed_ga7h3f_k$(transition) || ($changed_0 & 6) === 4;
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp;
        if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var value = transition.get_currentState_snihnl_k$();
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        var initialParentState = tmp1_group;
        var tmp0 = transition.get_isSeeking_vjb393_k$() ? transition.get_currentState_snihnl_k$() : initialParentState;
        var $changed_1 = 112 & $changed_0 >> 3;
        var $composer_2 = $composer_1;
        $composer_2.startReplaceGroup_5hh8aj_k$(1844425648);
        sourceInformation($composer_2, 'C724@40307L28:AnimatedVisibility.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(1844425648, $changed_1, -1, 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous> (AnimatedVisibility.kt:724)');
        }
        var tmp0_0 = targetEnterExit(transition, visible, tmp0, $composer_2, 14 & $dirty | 112 & $dirty | 896 & $changed_1 << 6);
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_2.endReplaceGroup_ek144q_k$();
        var initialState = tmp0_0;
        var tmp0_1 = transition.get_targetState_kri3mx_k$();
        var $changed_2 = 112 & $changed_0 >> 3;
        var $composer_3 = $composer_1;
        $composer_3.startReplaceGroup_5hh8aj_k$(1844425648);
        sourceInformation($composer_3, 'C724@40307L28:AnimatedVisibility.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(1844425648, $changed_2, -1, 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous> (AnimatedVisibility.kt:724)');
        }
        var tmp0_2 = targetEnterExit(transition, visible, tmp0_1, $composer_3, 14 & $dirty | 112 & $dirty | 896 & $changed_2 << 6);
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_3.endReplaceGroup_ek144q_k$();
        var targetState = tmp0_2;
        var tmp0_3 = createChildTransitionInternal(transition, initialState, targetState, label, $composer_1, 14 & $changed_0 | 7168 & $changed_0 << 6);
        sourceInformationMarkerEnd($composer_1);
        var childTransition = tmp0_3;
        var shouldDisposeBlockUpdated$delegate = rememberUpdatedState(shouldDisposeBlock, $composer_0, 14 & $dirty >> 15);
        var tmp_1 = shouldDisposeBlock(childTransition.get_currentState_snihnl_k$(), childTransition.get_targetState_kri3mx_k$());
        sourceInformationMarkerStart($composer_0, -7483872, 'CC(remember):AnimatedVisibility.kt#9igjgp');
        var tmp0_4 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!($composer_0.changed_ga7h3f_k$(childTransition) | $composer_0.changed_ga7h3f_k$(shouldDisposeBlockUpdated$delegate));
        // Inline function 'kotlin.let' call
        var it_0 = tmp0_4.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid_0 || it_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var value_0 = AnimatedEnterExitImpl$slambda_0(childTransition, shouldDisposeBlockUpdated$delegate, null);
          tmp0_4.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var shouldDisposeAfterExit$delegate = produceState(tmp_1, tmp0_group, $composer_0, 0);
        if (!get_exitFinished(childTransition) || !AnimatedEnterExitImpl$lambda_0(shouldDisposeAfterExit$delegate)) {
          $composer_0.startReplaceGroup_5hh8aj_k$(-231383533);
          sourceInformation($composer_0, '749@41268L69,755@41536L47,769@42351L50,750@41350L1066');
          sourceInformationMarkerStart($composer_0, -7464268, 'CC(remember):AnimatedVisibility.kt#9igjgp');
          var tmp0_5 = $composer_0;
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_1 = ($dirty & 14) === 4;
          // Inline function 'kotlin.let' call
          var it_1 = tmp0_5.rememberedValue_4dg93v_k$();
          var tmp_4;
          if (invalid_1 || it_1 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
            var value_1 = new AnimatedVisibilityScopeImpl(childTransition);
            tmp0_5.updateRememberedValue_l1wh71_k$(value_1);
            tmp_4 = value_1;
          } else {
            tmp_4 = it_1;
          }
          var tmp_5 = tmp_4;
          var tmp1_group_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          var scope = tmp1_group_0;
          var tmp_6 = createModifier(childTransition, enter, exit, null, 'Built-in', $composer_0, 24576 | 112 & $dirty >> 6 | 896 & $dirty >> 6, 4);
          var tmp_7;
          if (!(onLookaheadMeasured_0._v == null)) {
            $composer_0.startReplaceGroup_5hh8aj_k$(-230964196);
            sourceInformation($composer_0, '758@41738L479');
            var tmp_8 = Companion_getInstance_0();
            sourceInformationMarkerStart($composer_0, -7448818, 'CC(remember):AnimatedVisibility.kt#9igjgp');
            var tmp0_6 = $composer_0;
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid_2 = ($dirty & 3670016) === 1048576 || (!(($dirty & 2097152) === 0) && $composer_0.changedInstance_s1wkiy_k$(onLookaheadMeasured_0._v));
            // Inline function 'kotlin.let' call
            var it_2 = tmp0_6.rememberedValue_4dg93v_k$();
            var tmp_9;
            if (invalid_2 || it_2 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
              var value_2 = AnimatedEnterExitImpl$lambda_1(onLookaheadMeasured_0);
              tmp0_6.updateRememberedValue_l1wh71_k$(value_2);
              tmp_9 = value_2;
            } else {
              tmp_9 = it_2;
            }
            var tmp_10 = tmp_9;
            var tmp2_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
            sourceInformationMarkerEnd($composer_0);
            var tmp3_group = layout(tmp_8, tmp2_group);
            $composer_0.endReplaceGroup_ek144q_k$();
            tmp_7 = tmp3_group;
          } else {
            $composer_0.startReplaceGroup_5hh8aj_k$(-7432681);
            $composer_0.endReplaceGroup_ek144q_k$();
            tmp_7 = Companion_getInstance_0();
          }
          var tmp0_7 = modifier.then_g5qrxq_k$(tmp_6.then_g5qrxq_k$(tmp_7));
          sourceInformationMarkerStart($composer_0, -7429631, 'CC(remember):AnimatedVisibility.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var this_0 = $composer_0;
          // Inline function 'kotlin.let' call
          var it_3 = this_0.rememberedValue_4dg93v_k$();
          var tmp_11;
          if (false || it_3 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
            var value_3 = new AnimatedEnterExitMeasurePolicy(scope);
            this_0.updateRememberedValue_l1wh71_k$(value_3);
            tmp_11 = value_3;
          } else {
            tmp_11 = it_3;
          }
          var tmp_12 = tmp_11;
          var tmp4_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          // Inline function 'androidx.compose.ui.layout.Layout' call
          var modifier_0 = tmp0_7;
          var $composer_4 = $composer_0;
          sourceInformationMarkerStart($composer_4, -1159599143, 'CC(Layout)P(!1,2)81@3355L27,84@3521L416:Layout.kt#80mrfh');
          if (!((0 & 2) === 0))
            modifier_0 = Companion_getInstance_0();
          var compositeKeyHash = get_currentCompositeKeyHashCode($composer_4, 0).hashCode();
          var localMap = $composer_4.get_currentCompositionLocalMap_fmcf79_k$();
          var materialized = materialize($composer_4, modifier_0);
          var tmp0_8 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
          // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
          var $composer_5 = $composer_4;
          sourceInformationMarkerStart($composer_5, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
          var tmp_13 = $composer_5.get_applier_bupu8u_k$();
          if (!isInterface(tmp_13, Applier)) {
            invalidApplier();
          }
          $composer_5.startReusableNode_jjgeyp_k$();
          if ($composer_5.get_inserting_25mlsw_k$()) {
            $composer_5.createNode_ahrd54_k$(tmp0_8);
          } else {
            $composer_5.useNode_io5s9l_k$();
          }
          var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_5);
          Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp4_group, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
          Updater__init_impl_uaeges($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
          Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
          var $composer_6 = $composer_5;
          sourceInformationMarkerStart($composer_6, -1766274760, 'C751@41392L9:AnimatedVisibility.kt#xbi5r1');
          content(scope, $composer_6, 112 & $dirty >> 18);
          sourceInformationMarkerEnd($composer_6);
          $composer_5.endNode_3m0yfn_k$();
          sourceInformationMarkerEnd($composer_5);
          sourceInformationMarkerEnd($composer_4);
          $composer_0.endReplaceGroup_ek144q_k$();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(-272333293);
          $composer_0.endReplaceGroup_ek144q_k$();
        }
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(-272333293);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp5_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp5_safe_receiver == null)
      null;
    else {
      tmp5_safe_receiver.updateScope_t8jcf_k$(AnimatedEnterExitImpl$lambda_2(transition, visible, modifier, enter, exit, shouldDisposeBlock, onLookaheadMeasured_0, content, $changed, $default));
    }
  }
  function OnLookaheadMeasured() {
  }
  function targetEnterExit(_this__u8e3s4, visible, targetState, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 361571134, 'C(targetEnterExit)P(1):AnimatedVisibility.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(361571134, $changed, -1, 'androidx.compose.animation.targetEnterExit (AnimatedVisibility.kt:833)');
    }
    $composer_0.startMovableGroup_clfloq_k$(-422486745, _this__u8e3s4);
    sourceInformation($composer_0, '');
    var tmp;
    if (_this__u8e3s4.get_isSeeking_vjb393_k$()) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-212166497);
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_0;
      if (visible(targetState)) {
        tmp_0 = EnterExitState_Visible_getInstance();
      } else {
        var tmp_1;
        if (visible(_this__u8e3s4.get_currentState_snihnl_k$())) {
          tmp_1 = EnterExitState_PostExit_getInstance();
        } else {
          tmp_1 = EnterExitState_PreEnter_getInstance();
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(-211892364);
      sourceInformation($composer_0, '845@44894L34');
      sourceInformationMarkerStart($composer_0, -422476640, 'CC(remember):AnimatedVisibility.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value = mutableStateOf(false);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp2_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var hasBeenVisible = tmp2_group;
      if (visible(_this__u8e3s4.get_currentState_snihnl_k$())) {
        hasBeenVisible.set_value_v1vabv_k$(true);
      }
      var tmp_4;
      if (visible(targetState)) {
        tmp_4 = EnterExitState_Visible_getInstance();
      } else {
        var tmp_5;
        if (hasBeenVisible.get_value_j01efc_k$()) {
          tmp_5 = EnterExitState_PostExit_getInstance();
        } else {
          tmp_5 = EnterExitState_PreEnter_getInstance();
        }
        tmp_4 = tmp_5;
      }
      var tmp3_group = tmp_4;
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp = tmp3_group;
    }
    var tmp1 = tmp;
    $composer_0.endMovableGroup_kd2hcs_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1;
  }
  function get_exitFinished(_this__u8e3s4) {
    return _this__u8e3s4.get_currentState_snihnl_k$().equals(EnterExitState_PostExit_getInstance()) && _this__u8e3s4.get_targetState_kri3mx_k$().equals(EnterExitState_PostExit_getInstance());
  }
  function AnimatedVisibilityScopeImpl(transition) {
    this.transition_1 = transition;
    this.targetSize_1 = mutableStateOf(new IntSize(Companion_getInstance_3().get_Zero_9we0a6_k$()));
  }
  protoOf(AnimatedVisibilityScopeImpl).set_transition_3a2emy_k$ = function (_set____db54di) {
    this.transition_1 = _set____db54di;
  };
  protoOf(AnimatedVisibilityScopeImpl).get_transition_mcca1q_k$ = function () {
    return this.transition_1;
  };
  protoOf(AnimatedVisibilityScopeImpl).get_targetSize_7bn39k_k$ = function () {
    return this.targetSize_1;
  };
  function AnimatedEnterExitMeasurePolicy$measure$lambda($placeables) {
    return function ($this$layout) {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = $placeables;
      var inductionVariable = 0;
      var last = this_0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.get_c1px32_k$(index);
          $this$layout.place$default_61faqz_k$(item, 0, 0);
        }
         while (inductionVariable <= last);
      return Unit_getInstance();
    };
  }
  function AnimatedEnterExitMeasurePolicy(scope) {
    this.scope_1 = scope;
    this.hasLookaheadOccurred_1 = false;
  }
  protoOf(AnimatedEnterExitMeasurePolicy).get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).set_hasLookaheadOccurred_d76kgb_k$ = function (_set____db54di) {
    this.hasLookaheadOccurred_1 = _set____db54di;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).get_hasLookaheadOccurred_nov622_k$ = function () {
    return this.hasLookaheadOccurred_1;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).measure_xg9b01_k$ = function (_this__u8e3s4, measurables, constraints) {
    var maxWidth = 0;
    var maxHeight = 0;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var target = ArrayList_init_$Create$(measurables.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = measurables.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.get_c1px32_k$(index);
        // Inline function 'kotlin.apply' call
        var this_0 = item.measure_4dmfk1_k$(constraints);
        var tmp0 = maxWidth;
        // Inline function 'kotlin.math.max' call
        var b = this_0.get_width_j0q4yl_k$();
        maxWidth = Math.max(tmp0, b);
        var tmp0_0 = maxHeight;
        // Inline function 'kotlin.math.max' call
        var b_0 = this_0.get_height_e7t92o_k$();
        maxHeight = Math.max(tmp0_0, b_0);
        // Inline function 'kotlin.collections.plusAssign' call
        target.add_utx5q5_k$(this_0);
      }
       while (inductionVariable <= last);
    var placeables = target;
    if (_this__u8e3s4.get_isLookingAhead_2057g1_k$()) {
      this.hasLookaheadOccurred_1 = true;
      var tmp0_1 = maxWidth;
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = maxHeight;
      var tmp$ret$9 = bitwiseOr(shiftLeft(fromInt(tmp0_1), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$10 = _IntSize___init__impl__emcjft(tmp$ret$9);
      this.scope_1.targetSize_1.set_value_v1vabv_k$(new IntSize(tmp$ret$10));
    } else if (!this.hasLookaheadOccurred_1) {
      var tmp0_2 = maxWidth;
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2_0 = maxHeight;
      var tmp$ret$11 = bitwiseOr(shiftLeft(fromInt(tmp0_2), 32), bitwiseAnd(fromInt(val2_0), new Long(-1, 0)));
      var tmp$ret$12 = _IntSize___init__impl__emcjft(tmp$ret$11);
      this.scope_1.targetSize_1.set_value_v1vabv_k$(new IntSize(tmp$ret$12));
    }
    var tmp = maxWidth;
    var tmp_0 = maxHeight;
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, AnimatedEnterExitMeasurePolicy$measure$lambda(placeables));
  };
  protoOf(AnimatedEnterExitMeasurePolicy).minIntrinsicWidth_dwfcse_k$ = function (_this__u8e3s4, measurables, height) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrDefault' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var maxValue = measurables.get_c1px32_k$(0).minIntrinsicWidth_jyhjuj_k$(height);
      var inductionVariable = 1;
      var last = get_lastIndex(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var v = measurables.get_c1px32_k$(i).minIntrinsicWidth_jyhjuj_k$(height);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    return tmp$ret$0;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).minIntrinsicHeight_xlhgwn_k$ = function (_this__u8e3s4, measurables, width) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrDefault' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var maxValue = measurables.get_c1px32_k$(0).minIntrinsicHeight_p2a4ou_k$(width);
      var inductionVariable = 1;
      var last = get_lastIndex(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var v = measurables.get_c1px32_k$(i).minIntrinsicHeight_p2a4ou_k$(width);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    return tmp$ret$0;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).maxIntrinsicWidth_cx7ze4_k$ = function (_this__u8e3s4, measurables, height) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrDefault' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var maxValue = measurables.get_c1px32_k$(0).maxIntrinsicWidth_b8umbx_k$(height);
      var inductionVariable = 1;
      var last = get_lastIndex(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var v = measurables.get_c1px32_k$(i).maxIntrinsicWidth_b8umbx_k$(height);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    return tmp$ret$0;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).maxIntrinsicHeight_3a4xm1_k$ = function (_this__u8e3s4, measurables, width) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrDefault' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var maxValue = measurables.get_c1px32_k$(0).maxIntrinsicHeight_b0krtc_k$(width);
      var inductionVariable = 1;
      var last = get_lastIndex(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var v = measurables.get_c1px32_k$(i).maxIntrinsicHeight_b0krtc_k$(width);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    return tmp$ret$0;
  };
  function AnimatedVisibility$lambda(it) {
    return it;
  }
  function AnimatedVisibility$lambda_0($this_AnimatedVisibility, $visible, $modifier, $enter, $exit, $label, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedVisibility($this_AnimatedVisibility, $visible, $modifier._v, $enter._v, $exit._v, $label._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function AnimatedVisibility$lambda_1(it) {
    return it;
  }
  function AnimatedVisibility$lambda_2($this_AnimatedVisibility, $visible, $modifier, $enter, $exit, $label, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedVisibility_0($this_AnimatedVisibility, $visible, $modifier._v, $enter._v, $exit._v, $label._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function AnimatedVisibilityImpl$lambda$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.place$default_61faqz_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function AnimatedVisibilityImpl$lambda($visible, $transition) {
    return function ($this$layout, measurable, constraints) {
      var placeable = measurable.measure_4dmfk1_k$(constraints.value_1);
      var tmp;
      if ($this$layout.get_isLookingAhead_2057g1_k$() && !$visible($transition.get_targetState_kri3mx_k$())) {
        tmp = Companion_getInstance_3().get_Zero_9we0a6_k$();
      } else {
        var tmp0 = placeable.get_width_j0q4yl_k$();
        // Inline function 'androidx.compose.ui.unit.IntSize' call
        // Inline function 'androidx.compose.ui.util.packInts' call
        var val2 = placeable.get_height_e7t92o_k$();
        var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
        tmp = _IntSize___init__impl__emcjft(tmp$ret$0);
      }
      var _destruct__k2r9zo = tmp;
      // Inline function 'androidx.compose.ui.unit.IntSize.component1' call
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(_destruct__k2r9zo);
      var w = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.component2' call
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(_destruct__k2r9zo);
      var h = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      return $this$layout.layout$default_n19e5l_k$(w, h, VOID, AnimatedVisibilityImpl$lambda$lambda(placeable));
    };
  }
  function AnimatedVisibilityImpl$lambda_0(current, target) {
    return current.equals(target) && target.equals(EnterExitState_PostExit_getInstance());
  }
  function AnimatedVisibilityImpl$lambda_1($transition, $visible, $modifier, $enter, $exit, $content, $$changed) {
    return function ($composer, $force) {
      AnimatedVisibilityImpl($transition, $visible, $modifier, $enter, $exit, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AnimatedEnterExitImpl$lambda($shouldDisposeBlockUpdated$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldDisposeBlockUpdated', KProperty0, false);
    return $shouldDisposeBlockUpdated$delegate.get_value_j01efc_k$();
  }
  function AnimatedEnterExitImpl$lambda_0($shouldDisposeAfterExit$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldDisposeAfterExit', KProperty0, false);
    return $shouldDisposeAfterExit$delegate.get_value_j01efc_k$();
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function AnimatedEnterExitImpl$slambda$lambda($childTransition) {
    return function () {
      return get_exitFinished($childTransition);
    };
  }
  function AnimatedEnterExitImpl$slambda$slambda($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    this.$this_produceState_1 = $this_produceState;
    this.$childTransition_1 = $childTransition;
    this.$shouldDisposeBlockUpdated$delegate_1 = $shouldDisposeBlockUpdated$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedEnterExitImpl$slambda$slambda).invoke_f29lti_k$ = function (it, $completion) {
    var tmp = this.create_vh5neu_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AnimatedEnterExitImpl$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_f29lti_k$((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedEnterExitImpl$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp_0;
          if (this.it_1) {
            tmp_0 = AnimatedEnterExitImpl$lambda(this.$shouldDisposeBlockUpdated$delegate_1)(this.$childTransition_1.get_currentState_snihnl_k$(), this.$childTransition_1.get_targetState_kri3mx_k$());
          } else {
            tmp_0 = false;
          }
          this.$this_produceState_1.set_value_v1vabv_k$(tmp_0);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(AnimatedEnterExitImpl$slambda$slambda).create_vh5neu_k$ = function (it, completion) {
    var i = new AnimatedEnterExitImpl$slambda$slambda(this.$this_produceState_1, this.$childTransition_1, this.$shouldDisposeBlockUpdated$delegate_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(AnimatedEnterExitImpl$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_vh5neu_k$((!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE(), completion);
  };
  function AnimatedEnterExitImpl$slambda$slambda_0($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    var i = new AnimatedEnterExitImpl$slambda$slambda($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_f29lti_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedEnterExitImpl$slambda($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    this.$childTransition_1 = $childTransition;
    this.$shouldDisposeBlockUpdated$delegate_1 = $shouldDisposeBlockUpdated$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedEnterExitImpl$slambda).invoke_2og0l1_k$ = function ($this$produceState, $completion) {
    var tmp = this.create_i0ekpj_k$($this$produceState, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AnimatedEnterExitImpl$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_2og0l1_k$((!(p1 == null) ? isInterface(p1, ProduceStateScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedEnterExitImpl$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = snapshotFlow(AnimatedEnterExitImpl$slambda$lambda(this.$childTransition_1));
            var tmp_1 = AnimatedEnterExitImpl$slambda$slambda_0(this.$this$produceState_1, this.$childTransition_1, this.$shouldDisposeBlockUpdated$delegate_1, null);
            suspendResult = tmp_0.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(AnimatedEnterExitImpl$slambda).create_i0ekpj_k$ = function ($this$produceState, completion) {
    var i = new AnimatedEnterExitImpl$slambda(this.$childTransition_1, this.$shouldDisposeBlockUpdated$delegate_1, completion);
    i.$this$produceState_1 = $this$produceState;
    return i;
  };
  protoOf(AnimatedEnterExitImpl$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_i0ekpj_k$((!(value == null) ? isInterface(value, ProduceStateScope) : false) ? value : THROW_CCE(), completion);
  };
  function AnimatedEnterExitImpl$slambda_0($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    var i = new AnimatedEnterExitImpl$slambda($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation);
    var l = function ($this$produceState, $completion) {
      return i.invoke_2og0l1_k$($this$produceState, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedEnterExitImpl$lambda$lambda($$this$run) {
    return function ($this$layout) {
      $this$layout.place$default_61faqz_k$($$this$run, 0, 0);
      return Unit_getInstance();
    };
  }
  function AnimatedEnterExitImpl$lambda_1($onLookaheadMeasured) {
    return function ($this$layout, measurable, constraints) {
      // Inline function 'kotlin.run' call
      var $this$run = measurable.measure_4dmfk1_k$(constraints.value_1);
      if ($this$layout.get_isLookingAhead_2057g1_k$()) {
        var tmp = $onLookaheadMeasured._v;
        var tmp0 = $this$run.get_width_j0q4yl_k$();
        // Inline function 'androidx.compose.ui.unit.IntSize' call
        // Inline function 'androidx.compose.ui.util.packInts' call
        var val2 = $this$run.get_height_e7t92o_k$();
        var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
        var tmp$ret$1 = _IntSize___init__impl__emcjft(tmp$ret$0);
        tmp.invoke_53rnn3_k$(tmp$ret$1);
      }
      var tmp_0 = $this$run.get_width_j0q4yl_k$();
      var tmp_1 = $this$run.get_height_e7t92o_k$();
      return $this$layout.layout$default_n19e5l_k$(tmp_0, tmp_1, VOID, AnimatedEnterExitImpl$lambda$lambda($this$run));
    };
  }
  function AnimatedEnterExitImpl$lambda_2($transition, $visible, $modifier, $enter, $exit, $shouldDisposeBlock, $onLookaheadMeasured, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedEnterExitImpl($transition, $visible, $modifier, $enter, $exit, $shouldDisposeBlock, $onLookaheadMeasured._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function EnterExitState_PreEnter_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_PreEnter_instance;
  }
  function EnterExitState_Visible_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_Visible_instance;
  }
  function EnterExitState_PostExit_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_PostExit_instance;
  }
  function get_InvalidSize() {
    _init_properties_AnimationModifier_kt__u6vzef();
    return InvalidSize;
  }
  var InvalidSize;
  var androidx_compose_animation_SizeAnimationModifierNode_AnimData$stable;
  var androidx_compose_animation_LayoutModifierNodeWithPassThroughIntrinsics$stable;
  function LayoutModifierNodeWithPassThroughIntrinsics() {
    Node.call(this);
  }
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).minIntrinsicWidth_nsvhwg_k$ = function (_this__u8e3s4, measurable, height) {
    return measurable.minIntrinsicWidth_jyhjuj_k$(height);
  };
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).minIntrinsicHeight_xt6ly1_k$ = function (_this__u8e3s4, measurable, width) {
    return measurable.minIntrinsicHeight_p2a4ou_k$(width);
  };
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).maxIntrinsicWidth_epsb1u_k$ = function (_this__u8e3s4, measurable, height) {
    return measurable.maxIntrinsicWidth_b8umbx_k$(height);
  };
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).maxIntrinsicHeight_nrifyt_k$ = function (_this__u8e3s4, measurable, width) {
    return measurable.maxIntrinsicHeight_b0krtc_k$(width);
  };
  function get_isValid(_this__u8e3s4) {
    _init_properties_AnimationModifier_kt__u6vzef();
    return !equals(_this__u8e3s4, get_InvalidSize());
  }
  var properties_initialized_AnimationModifier_kt_fvv7xx;
  function _init_properties_AnimationModifier_kt__u6vzef() {
    if (!properties_initialized_AnimationModifier_kt_fvv7xx) {
      properties_initialized_AnimationModifier_kt_fvv7xx = true;
      var tmp0 = -2147483648;
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = -2147483648;
      var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      InvalidSize = _IntSize___init__impl__emcjft(tmp$ret$0);
      androidx_compose_animation_SizeAnimationModifierNode_AnimData$stable = 8;
      androidx_compose_animation_LayoutModifierNodeWithPassThroughIntrinsics$stable = androidx_compose_ui_Modifier_Node$stableprop_getter();
    }
  }
  function get_DefaultBoundsAnimation() {
    _init_properties_BoundsAnimation_kt__z215v();
    return DefaultBoundsAnimation;
  }
  var DefaultBoundsAnimation;
  var androidx_compose_animation_BoundsAnimation$stable;
  function _set_animation__pan2kh($this, _set____db54di) {
    var tmp0 = $this.animation$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = BoundsAnimation$_get_animation_$ref_tlzlmh_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('animation', 1, tmp, tmp_0, BoundsAnimation$_set_animation_$ref_ee8345_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_boundsTransform__qqq4ha($this, _set____db54di) {
    var tmp0 = $this.boundsTransform$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = BoundsAnimation$_get_boundsTransform_$ref_5heh6c_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('boundsTransform', 1, tmp, tmp_0, BoundsAnimation$_set_boundsTransform_$ref_7tbrq0_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_boundsTransform__y6npza($this) {
    var tmp0 = $this.boundsTransform$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = BoundsAnimation$_get_boundsTransform_$ref_5heh6c();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('boundsTransform', 1, tmp, tmp_0, BoundsAnimation$_set_boundsTransform_$ref_7tbrq0());
    return tmp0.get_value_j01efc_k$();
  }
  function BoundsAnimation$_get_animation_$ref_tlzlmh() {
    return function (p0) {
      return p0.get_animation_r0gd0b_k$();
    };
  }
  function BoundsAnimation$_set_animation_$ref_ee8345() {
    return function (p0, p1) {
      _set_animation__pan2kh(p0, p1);
      return Unit_getInstance();
    };
  }
  function BoundsAnimation$_get_animation_$ref_tlzlmh_0() {
    return function (p0) {
      return p0.get_animation_r0gd0b_k$();
    };
  }
  function BoundsAnimation$_set_animation_$ref_ee8345_0() {
    return function (p0, p1) {
      _set_animation__pan2kh(p0, p1);
      return Unit_getInstance();
    };
  }
  function BoundsAnimation$_get_boundsTransform_$ref_5heh6c() {
    return function (p0) {
      return _get_boundsTransform__y6npza(p0);
    };
  }
  function BoundsAnimation$_set_boundsTransform_$ref_7tbrq0() {
    return function (p0, p1) {
      _set_boundsTransform__qqq4ha(p0, p1);
      return Unit_getInstance();
    };
  }
  function BoundsAnimation$_get_boundsTransform_$ref_5heh6c_0() {
    return function (p0) {
      return _get_boundsTransform__y6npza(p0);
    };
  }
  function BoundsAnimation$_set_boundsTransform_$ref_7tbrq0_0() {
    return function (p0, p1) {
      _set_boundsTransform__qqq4ha(p0, p1);
      return Unit_getInstance();
    };
  }
  function BoundsAnimation$_get_animationState_$ref_pbhvr6() {
    return function (p0) {
      return p0.get_animationState_98s4ty_k$();
    };
  }
  function BoundsAnimation$_set_animationState_$ref_brqv3m() {
    return function (p0, p1) {
      p0.set_animationState_b8sgwb_k$(p1);
      return Unit_getInstance();
    };
  }
  function BoundsAnimation$_get_animationState_$ref_pbhvr6_0() {
    return function (p0) {
      return p0.get_animationState_98s4ty_k$();
    };
  }
  function BoundsAnimation$_set_animationState_$ref_brqv3m_0() {
    return function (p0, p1) {
      p0.set_animationState_b8sgwb_k$(p1);
      return Unit_getInstance();
    };
  }
  function BoundsAnimation$animate$lambda(this$0) {
    return function ($this$animate) {
      return this$0.animationSpec_1;
    };
  }
  function BoundsAnimation$animate$lambda_0(this$0, $targetBounds, $currentBounds) {
    return function (it) {
      var tmp;
      if (it === this$0.transition_1.get_targetState_kri3mx_k$()) {
        tmp = $targetBounds;
      } else {
        tmp = $currentBounds;
      }
      return tmp;
    };
  }
  function BoundsAnimation(transitionScope, transition, animation, boundsTransform, momentumOffset) {
    this.transitionScope_1 = transitionScope;
    this.transition_1 = transition;
    this.momentumOffset_1 = momentumOffset;
    this.animation$delegate_1 = mutableStateOf(animation);
    this.boundsTransform$delegate_1 = mutableStateOf(boundsTransform);
    this.animationSpec_1 = get_DefaultBoundsAnimation();
    this.animationState$delegate_1 = mutableStateOf(null);
  }
  protoOf(BoundsAnimation).get_transitionScope_6wk9w6_k$ = function () {
    return this.transitionScope_1;
  };
  protoOf(BoundsAnimation).get_transition_mcca1q_k$ = function () {
    return this.transition_1;
  };
  protoOf(BoundsAnimation).get_momentumOffset_fyqkks_k$ = function () {
    return this.momentumOffset_1;
  };
  protoOf(BoundsAnimation).get_animation_r0gd0b_k$ = function () {
    var tmp0 = this.animation$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = BoundsAnimation$_get_animation_$ref_tlzlmh();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('animation', 1, tmp, tmp_0, BoundsAnimation$_set_animation_$ref_ee8345());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(BoundsAnimation).updateAnimation_opighb_k$ = function (animation, boundsTransform) {
    if (!equals(this.get_animation_r0gd0b_k$(), animation)) {
      _set_animation__pan2kh(this, animation);
      this.set_animationState_b8sgwb_k$(null);
      this.animationSpec_1 = get_DefaultBoundsAnimation();
    }
    _set_boundsTransform__qqq4ha(this, boundsTransform);
  };
  protoOf(BoundsAnimation).get_isRunning_okmtn0_k$ = function () {
    var parent = this.transition_1;
    while (!(parent.get_parentTransition_svtbx4_k$() == null)) {
      parent = ensureNotNull(parent.get_parentTransition_svtbx4_k$());
    }
    return !equals(parent.get_currentState_snihnl_k$(), parent.get_targetState_kri3mx_k$());
  };
  protoOf(BoundsAnimation).set_animationSpec_fee48z_k$ = function (_set____db54di) {
    this.animationSpec_1 = _set____db54di;
  };
  protoOf(BoundsAnimation).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(BoundsAnimation).set_animationState_b8sgwb_k$ = function (_set____db54di) {
    var tmp0 = this.animationState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = BoundsAnimation$_get_animationState_$ref_pbhvr6_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('animationState', 1, tmp, tmp_0, BoundsAnimation$_set_animationState_$ref_brqv3m_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(BoundsAnimation).get_animationState_98s4ty_k$ = function () {
    var tmp0 = this.animationState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = BoundsAnimation$_get_animationState_$ref_pbhvr6();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('animationState', 1, tmp, tmp_0, BoundsAnimation$_set_animationState_$ref_brqv3m());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(BoundsAnimation).get_value_j01efc_k$ = function () {
    var tmp;
    if (this.transitionScope_1.get_isTransitionActive_t69j02_k$()) {
      var tmp0_safe_receiver = this.get_animationState_98s4ty_k$();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_value_j01efc_k$();
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        var offset = this.momentumOffset_1().packedValue_1;
        var tmp_1;
        if (!equals(offset, Companion_getInstance_4().get_Zero_k6n73t_k$())) {
          tmp_1 = tmp1_safe_receiver.translate_e972jg_k$(offset);
        } else {
          tmp_1 = tmp1_safe_receiver;
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(BoundsAnimation).animate_t7ajgl_k$ = function (currentBounds, targetBounds, forcedBoundsTransform) {
    if (this.transitionScope_1.get_isTransitionActive_t69j02_k$()) {
      if (this.get_animationState_98s4ty_k$() == null) {
        var tmp = this;
        tmp.animationSpec_1 = (forcedBoundsTransform == null ? _get_boundsTransform__y6npza(this) : forcedBoundsTransform).createAnimationSpec_whg8mb_k$(currentBounds, targetBounds);
      }
      var tmp_0 = this.get_animation_r0gd0b_k$();
      var tmp_1 = BoundsAnimation$animate$lambda(this);
      this.set_animationState_b8sgwb_k$(tmp_0.animate_lt3uhv_k$(tmp_1, BoundsAnimation$animate$lambda_0(this, targetBounds, currentBounds)));
    }
  };
  protoOf(BoundsAnimation).animate$default_69jodf_k$ = function (currentBounds, targetBounds, forcedBoundsTransform, $super) {
    forcedBoundsTransform = forcedBoundsTransform === VOID ? null : forcedBoundsTransform;
    var tmp;
    if ($super === VOID) {
      this.animate_t7ajgl_k$(currentBounds, targetBounds, forcedBoundsTransform);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.animate_t7ajgl_k$.call(this, currentBounds, targetBounds, forcedBoundsTransform);
    }
    return tmp;
  };
  protoOf(BoundsAnimation).get_target_juba8q_k$ = function () {
    return this.transition_1.get_targetState_kri3mx_k$();
  };
  var properties_initialized_BoundsAnimation_kt_perd29;
  function _init_properties_BoundsAnimation_kt__z215v() {
    if (!properties_initialized_BoundsAnimation_kt_perd29) {
      properties_initialized_BoundsAnimation_kt_perd29 = true;
      DefaultBoundsAnimation = spring(VOID, 400.0, get_VisibilityThreshold(Companion_getInstance()));
      androidx_compose_animation_BoundsAnimation$stable = 8;
    }
  }
  function get_ColorToVector() {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return ColorToVector;
  }
  var ColorToVector;
  function get_VectorConverter_4(_this__u8e3s4) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return get_ColorToVector();
  }
  function ColorToVector$lambda(colorSpace) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var tmp = ColorToVector$lambda$lambda;
    return TwoWayConverter(tmp, ColorToVector$lambda$lambda_0(colorSpace));
  }
  function ColorToVector$lambda$lambda(color) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var _destruct__k2r9zo = Color__convert_impl_so5m8t(color.value_1, ColorSpaces_getInstance().get_Oklab_ierso8_k$());
    // Inline function 'androidx.compose.ui.graphics.Color.component1' call
    var l = _Color___get_red__impl__cwrsk6(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.graphics.Color.component2' call
    var a = _Color___get_green__impl__bta9rs(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.graphics.Color.component3' call
    var b = _Color___get_blue__impl__xwez13(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.graphics.Color.component4' call
    var alpha = _Color___get_alpha__impl__wcfyv1(_destruct__k2r9zo);
    return new AnimationVector4D(alpha, l, a, b);
  }
  function ColorToVector$lambda$lambda_0($colorSpace) {
    return function (vector) {
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_0 = vector.get_v2_kntnnf_k$();
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_1 = this_0 < 0.0 ? 0.0 : this_0;
      var tmp = this_1 > 1.0 ? 1.0 : this_1;
      var tmp0 = vector.get_v3_kntnne_k$();
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var minimumValue = -0.5;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_2 = tmp0 < minimumValue ? minimumValue : tmp0;
      var tmp_0 = this_2 > 0.5 ? 0.5 : this_2;
      var tmp0_0 = vector.get_v4_kntnnd_k$();
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var minimumValue_0 = -0.5;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_3 = tmp0_0 < minimumValue_0 ? minimumValue_0 : tmp0_0;
      var tmp_1 = this_3 > 0.5 ? 0.5 : this_3;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_4 = vector.get_v1_kntnng_k$();
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_5 = this_4 < 0.0 ? 0.0 : this_4;
      var tmp$ret$11 = this_5 > 1.0 ? 1.0 : this_5;
      return new Color_0(Color__convert_impl_so5m8t(Color(tmp, tmp_0, tmp_1, tmp$ret$11, ColorSpaces_getInstance().get_Oklab_ierso8_k$()), $colorSpace));
    };
  }
  var properties_initialized_ColorVectorConverter_kt_jaoojo;
  function _init_properties_ColorVectorConverter_kt__qncuxy() {
    if (!properties_initialized_ColorVectorConverter_kt_jaoojo) {
      properties_initialized_ColorVectorConverter_kt_jaoojo = true;
      ColorToVector = ColorToVector$lambda;
    }
  }
  function get_TransformOriginVectorConverter() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return TransformOriginVectorConverter;
  }
  var TransformOriginVectorConverter;
  function get_DefaultAlphaAndScaleSpring() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultAlphaAndScaleSpring;
  }
  var DefaultAlphaAndScaleSpring;
  function get_DefaultColorAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultColorAnimationSpec;
  }
  var DefaultColorAnimationSpec;
  function get_DefaultOffsetAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultOffsetAnimationSpec;
  }
  var DefaultOffsetAnimationSpec;
  function get_DefaultSizeAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultSizeAnimationSpec;
  }
  var DefaultSizeAnimationSpec;
  var androidx_compose_animation_EnterTransition$stable;
  var androidx_compose_animation_ExitTransition$stable;
  var androidx_compose_animation_TransitionEffect$stable;
  var androidx_compose_animation_ContentScaleTransitionEffect$stable;
  var androidx_compose_animation_Fade$stable;
  var androidx_compose_animation_Slide$stable;
  var androidx_compose_animation_ChangeSize$stable;
  var androidx_compose_animation_Scale$stable;
  var androidx_compose_animation_Veil$stable;
  var androidx_compose_animation_TransitionData$stable;
  function Companion() {
    Companion_instance = this;
    this.None_1 = new EnterTransitionImpl(new TransitionData());
  }
  protoOf(Companion).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance;
  function Companion_getInstance_14() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function EnterTransition() {
    Companion_getInstance_14();
  }
  protoOf(EnterTransition).plus_w36lq9_k$ = function (enter) {
    var tmp0_elvis_lhs = enter.get_data_jntocg_k$().fade_1;
    var tmp = tmp0_elvis_lhs == null ? this.get_data_jntocg_k$().fade_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = enter.get_data_jntocg_k$().slide_1;
    var tmp_0 = tmp1_elvis_lhs == null ? this.get_data_jntocg_k$().slide_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = enter.get_data_jntocg_k$().changeSize_1;
    var tmp_1 = tmp2_elvis_lhs == null ? this.get_data_jntocg_k$().changeSize_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = enter.get_data_jntocg_k$().scale_1;
    var tmp_2 = tmp3_elvis_lhs == null ? this.get_data_jntocg_k$().scale_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = enter.get_data_jntocg_k$().veil_1;
    return new EnterTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp_2, tmp4_elvis_lhs == null ? this.get_data_jntocg_k$().veil_1 : tmp4_elvis_lhs, VOID, plus(this.get_data_jntocg_k$().effectsMap_1, enter.get_data_jntocg_k$().effectsMap_1)));
  };
  protoOf(EnterTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_14().None_1)) {
      tmp = 'EnterTransition.None';
    } else {
      // Inline function 'kotlin.run' call
      var $this$run = this.get_data_jntocg_k$();
      var tmp0_safe_receiver = $this$run.fade_1;
      var tmp_0 = 'EnterTransition: \nFade - ' + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString()) + ',\nSlide - ';
      var tmp1_safe_receiver = $this$run.slide_1;
      var tmp_1 = tmp_0 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nShrink - ';
      var tmp2_safe_receiver = $this$run.changeSize_1;
      var tmp_2 = tmp_1 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nScale - ';
      var tmp3_safe_receiver = $this$run.scale_1;
      tmp = tmp_2 + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString());
    }
    return tmp;
  };
  protoOf(EnterTransition).equals = function (other) {
    var tmp;
    if (other instanceof EnterTransition) {
      tmp = other.get_data_jntocg_k$().equals(this.get_data_jntocg_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EnterTransition).hashCode = function () {
    return this.get_data_jntocg_k$().hashCode();
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.None_1 = new ExitTransitionImpl(new TransitionData());
    this.KeepUntilTransitionsFinished_1 = new ExitTransitionImpl(new TransitionData(VOID, VOID, VOID, VOID, VOID, true));
  }
  protoOf(Companion_0).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_0).get_KeepUntilTransitionsFinished_bul00d_k$ = function () {
    return this.KeepUntilTransitionsFinished_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_15() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ExitTransition() {
    Companion_getInstance_15();
  }
  protoOf(ExitTransition).plus_buzi7t_k$ = function (exit) {
    var tmp0_elvis_lhs = exit.get_data_jntocg_k$().fade_1;
    var tmp = tmp0_elvis_lhs == null ? this.get_data_jntocg_k$().fade_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = exit.get_data_jntocg_k$().slide_1;
    var tmp_0 = tmp1_elvis_lhs == null ? this.get_data_jntocg_k$().slide_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = exit.get_data_jntocg_k$().changeSize_1;
    var tmp_1 = tmp2_elvis_lhs == null ? this.get_data_jntocg_k$().changeSize_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = exit.get_data_jntocg_k$().scale_1;
    var tmp_2 = tmp3_elvis_lhs == null ? this.get_data_jntocg_k$().scale_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = exit.get_data_jntocg_k$().veil_1;
    return new ExitTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp_2, tmp4_elvis_lhs == null ? this.get_data_jntocg_k$().veil_1 : tmp4_elvis_lhs, exit.get_data_jntocg_k$().hold_1 || this.get_data_jntocg_k$().hold_1, plus(this.get_data_jntocg_k$().effectsMap_1, exit.get_data_jntocg_k$().effectsMap_1)));
  };
  protoOf(ExitTransition).equals = function (other) {
    var tmp;
    if (other instanceof ExitTransition) {
      tmp = other.get_data_jntocg_k$().equals(this.get_data_jntocg_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ExitTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_15().None_1)) {
      tmp = 'ExitTransition.None';
    } else if (this.equals(Companion_getInstance_15().KeepUntilTransitionsFinished_1)) {
      tmp = 'ExitTransition.KeepUntilTransitionsFinished';
    } else {
      // Inline function 'kotlin.run' call
      var $this$run = this.get_data_jntocg_k$();
      var tmp0_safe_receiver = $this$run.fade_1;
      var tmp_0 = 'ExitTransition: \nFade - ' + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString()) + ',\nSlide - ';
      var tmp1_safe_receiver = $this$run.slide_1;
      var tmp_1 = tmp_0 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nShrink - ';
      var tmp2_safe_receiver = $this$run.changeSize_1;
      var tmp_2 = tmp_1 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nScale - ';
      var tmp3_safe_receiver = $this$run.scale_1;
      tmp = tmp_2 + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nKeepUntilTransitionsFinished - ' + $this$run.hold_1;
    }
    return tmp;
  };
  protoOf(ExitTransition).hashCode = function () {
    return this.get_data_jntocg_k$().hashCode();
  };
  function expandHorizontally(animationSpec, expandFrom, clip, initialWidth) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0, new IntSize(get_VisibilityThreshold_0(Companion_getInstance_3()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_5().get_End_18ju7i_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialWidth === VOID) {
      tmp = expandHorizontally$lambda;
    } else {
      tmp = initialWidth;
    }
    initialWidth = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment(expandFrom);
    return expandIn(animationSpec, tmp_0, clip, expandHorizontally$lambda_0(initialWidth));
  }
  function expandVertically(animationSpec, expandFrom, clip, initialHeight) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0, new IntSize(get_VisibilityThreshold_0(Companion_getInstance_3()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_5().get_Bottom_3m75bg_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialHeight === VOID) {
      tmp = expandVertically$lambda;
    } else {
      tmp = initialHeight;
    }
    initialHeight = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment_0(expandFrom);
    return expandIn(animationSpec, tmp_0, clip, expandVertically$lambda_0(initialHeight));
  }
  function shrinkHorizontally(animationSpec, shrinkTowards, clip, targetWidth) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0, new IntSize(get_VisibilityThreshold_0(Companion_getInstance_3()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_5().get_End_18ju7i_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetWidth === VOID) {
      tmp = shrinkHorizontally$lambda;
    } else {
      tmp = targetWidth;
    }
    targetWidth = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment(shrinkTowards);
    return shrinkOut(animationSpec, tmp_0, clip, shrinkHorizontally$lambda_0(targetWidth));
  }
  function shrinkVertically(animationSpec, shrinkTowards, clip, targetHeight) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0, new IntSize(get_VisibilityThreshold_0(Companion_getInstance_3()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_5().get_Bottom_3m75bg_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetHeight === VOID) {
      tmp = shrinkVertically$lambda;
    } else {
      tmp = targetHeight;
    }
    targetHeight = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment_0(shrinkTowards);
    return shrinkOut(animationSpec, tmp_0, clip, shrinkVertically$lambda_0(targetHeight));
  }
  function fadeIn(animationSpec, initialAlpha) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0) : animationSpec;
    initialAlpha = initialAlpha === VOID ? 0.0 : initialAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(new Fade(initialAlpha, animationSpec)));
  }
  function fadeOut(animationSpec, targetAlpha) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0) : animationSpec;
    targetAlpha = targetAlpha === VOID ? 0.0 : targetAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(new Fade(targetAlpha, animationSpec)));
  }
  function createModifier(_this__u8e3s4, enter, exit, isEnabled, label, $composer, $changed, $default) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var isEnabled_0 = {_v: isEnabled};
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 28261782, 'C(createModifier)931@41585L8,934@41650L31,935@41703L28,985@43657L56,987@43829L38:EnterExitTransition.kt#xbi5r1');
    if (!(($default & 4) === 0)) {
      sourceInformationMarkerStart($composer_0, 1389772958, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value = createModifier$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      isEnabled_0._v = tmp0_group;
    }
    if (isTraceInProgress()) {
      traceEventStart(28261782, $changed, -1, 'androidx.compose.animation.createModifier (EnterExitTransition.kt:933)');
    }
    var activeEnter = trackActiveEnter(_this__u8e3s4, enter, $composer_0, 14 & $changed | 112 & $changed);
    var activeExit = trackActiveExit(_this__u8e3s4, exit, $composer_0, 14 & $changed | 112 & $changed >> 3);
    var shouldAnimateVeil = !(activeEnter.get_data_jntocg_k$().veil_1 == null) || !(activeExit.get_data_jntocg_k$().veil_1 == null);
    var shouldAnimateSlide = !(activeEnter.get_data_jntocg_k$().slide_1 == null) || !(activeExit.get_data_jntocg_k$().slide_1 == null);
    var shouldAnimateSizeChange = !(activeEnter.get_data_jntocg_k$().changeSize_1 == null) || !(activeExit.get_data_jntocg_k$().changeSize_1 == null);
    var tmp_1;
    if (shouldAnimateSlide) {
      $composer_0.startReplaceGroup_5hh8aj_k$(133792645);
      sourceInformation($composer_0, '944@42155L27,944@42104L79');
      var tmp_2 = get_VectorConverter(Companion_getInstance_6());
      sourceInformationMarkerStart($composer_0, 1389791217, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value_0 = label + ' slide';
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp3_group = createDeferredAnimation(_this__u8e3s4, tmp_2, tmp2_group, $composer_0, 384 | 14 & $changed, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_1 = tmp3_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(133898448);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_1 = null;
    }
    var slideAnimation = tmp_1;
    var tmp_5;
    if (shouldAnimateSizeChange) {
      $composer_0.startReplaceGroup_5hh8aj_k$(133990239);
      sourceInformation($composer_0, '950@42352L35,950@42303L85');
      var tmp_6 = get_VectorConverter_0(Companion_getInstance_3());
      sourceInformationMarkerStart($composer_0, 1389797529, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (false || it_1 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value_1 = label + ' shrink/expand';
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp5_group = createDeferredAnimation(_this__u8e3s4, tmp_6, tmp4_group, $composer_0, 384 | 14 & $changed, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_5 = tmp5_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(134101063);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_5 = null;
    }
    var sizeAnimation = tmp_5;
    var tmp_9;
    if (shouldAnimateSizeChange) {
      $composer_0.startReplaceGroup_5hh8aj_k$(134174689);
      sourceInformation($composer_0, '957@42571L48,955@42487L147');
      var tmp_10 = get_VectorConverter(Companion_getInstance_6());
      sourceInformationMarkerStart($composer_0, 1389804550, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_2 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_11;
      if (false || it_2 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value_2 = label + ' InterruptionHandlingOffset';
        $composer_0.updateRememberedValue_l1wh71_k$(value_2);
        tmp_11 = value_2;
      } else {
        tmp_11 = it_2;
      }
      var tmp_12 = tmp_11;
      var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp7_group = createDeferredAnimation(_this__u8e3s4, tmp_10, tmp6_group, $composer_0, 384 | 14 & $changed, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_9 = tmp7_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(134345095);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_9 = null;
    }
    var offsetAnimation = tmp_9;
    var tmp_13;
    var tmp_14;
    var tmp0_safe_receiver = activeEnter.get_data_jntocg_k$().changeSize_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.clip_1) === false) {
      tmp_14 = true;
    } else {
      var tmp1_safe_receiver = activeExit.get_data_jntocg_k$().changeSize_1;
      tmp_14 = (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.clip_1) === false;
    }
    if (tmp_14) {
      tmp_13 = true;
    } else {
      tmp_13 = !shouldAnimateSizeChange;
    }
    var disableClip = tmp_13;
    var tmp2_safe_receiver = activeEnter.get_data_jntocg_k$().veil_1;
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.initialColor_1;
    var tmp_15;
    var tmp_16 = tmp3_safe_receiver;
    if ((tmp_16 == null ? null : new Color_0(tmp_16)) == null) {
      tmp_15 = null;
    } else {
      tmp_15 = _Color___get_colorSpace__impl__jqqozk(tmp3_safe_receiver);
    }
    var tmp4_elvis_lhs = tmp_15;
    var tmp_17;
    if (tmp4_elvis_lhs == null) {
      var tmp5_safe_receiver = activeEnter.get_data_jntocg_k$().veil_1;
      var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.targetColor_1;
      var tmp_18;
      var tmp_19 = tmp6_safe_receiver;
      if ((tmp_19 == null ? null : new Color_0(tmp_19)) == null) {
        tmp_18 = null;
      } else {
        tmp_18 = _Color___get_colorSpace__impl__jqqozk(tmp6_safe_receiver);
      }
      tmp_17 = tmp_18;
    } else {
      tmp_17 = tmp4_elvis_lhs;
    }
    var tmp7_elvis_lhs = tmp_17;
    var tmp_20;
    if (tmp7_elvis_lhs == null) {
      var tmp8_safe_receiver = activeExit.get_data_jntocg_k$().veil_1;
      var tmp9_safe_receiver = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.initialColor_1;
      var tmp_21;
      var tmp_22 = tmp9_safe_receiver;
      if ((tmp_22 == null ? null : new Color_0(tmp_22)) == null) {
        tmp_21 = null;
      } else {
        tmp_21 = _Color___get_colorSpace__impl__jqqozk(tmp9_safe_receiver);
      }
      tmp_20 = tmp_21;
    } else {
      tmp_20 = tmp7_elvis_lhs;
    }
    var tmp10_elvis_lhs = tmp_20;
    var tmp_23;
    if (tmp10_elvis_lhs == null) {
      var tmp11_safe_receiver = activeExit.get_data_jntocg_k$().veil_1;
      var tmp12_safe_receiver = tmp11_safe_receiver == null ? null : tmp11_safe_receiver.targetColor_1;
      var tmp_24;
      var tmp_25 = tmp12_safe_receiver;
      if ((tmp_25 == null ? null : new Color_0(tmp_25)) == null) {
        tmp_24 = null;
      } else {
        tmp_24 = _Color___get_colorSpace__impl__jqqozk(tmp12_safe_receiver);
      }
      tmp_23 = tmp_24;
    } else {
      tmp_23 = tmp10_elvis_lhs;
    }
    var tmp13_elvis_lhs = tmp_23;
    var colorSpace = tmp13_elvis_lhs == null ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : tmp13_elvis_lhs;
    var tmp_26;
    if (shouldAnimateVeil) {
      $composer_0.startReplaceGroup_5hh8aj_k$(134871569);
      sourceInformation($composer_0, '976@43322L26,974@43222L145');
      var tmp_27 = get_VectorConverter_4(Companion_getInstance_7())(colorSpace);
      sourceInformationMarkerStart($composer_0, 1389828560, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_3 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_28;
      if (false || it_3 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value_3 = label + ' veil';
        $composer_0.updateRememberedValue_l1wh71_k$(value_3);
        tmp_28 = value_3;
      } else {
        tmp_28 = it_3;
      }
      var tmp_29 = tmp_28;
      var tmp8_group = (tmp_29 == null ? true : !(tmp_29 == null)) ? tmp_29 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var veilAnimation = createDeferredAnimation(_this__u8e3s4, tmp_27, tmp8_group, $composer_0, 384 | 14 & $changed, 0);
      var tmp9_group = new VeilModifierElement(_this__u8e3s4, veilAnimation, activeEnter, activeExit);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_26 = tmp9_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(135150476);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_26 = Companion_getInstance_0();
    }
    var veilModifierElement = tmp_26;
    var tmp14_safe_receiver = activeEnter.get_data_jntocg_k$().veil_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.matchParentSize_1;
    var tmp_30;
    if (tmp15_elvis_lhs == null) {
      var tmp16_safe_receiver = activeExit.get_data_jntocg_k$().veil_1;
      tmp_30 = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.matchParentSize_1;
    } else {
      tmp_30 = tmp15_elvis_lhs;
    }
    var tmp17_elvis_lhs = tmp_30;
    var shouldVeilMatchParentSize = tmp17_elvis_lhs == null ? false : tmp17_elvis_lhs;
    var graphicsLayerBlock = createGraphicsLayerBlock(_this__u8e3s4, activeEnter, activeExit, label, $composer_0, 14 & $changed | 7168 & $changed >> 3);
    var tmp_31 = shouldVeilMatchParentSize ? veilModifierElement : Companion_getInstance_0();
    var tmp_32 = Companion_getInstance_0();
    sourceInformationMarkerStart($composer_0, 1389844796, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.changed_jpyyrz_k$(disableClip) | (($changed & 7168 ^ 3072) > 2048 && $composer_0.changed_ga7h3f_k$(isEnabled_0._v) || ($changed & 3072) === 2048));
    // Inline function 'kotlin.let' call
    var it_4 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_33;
    if (invalid || it_4 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value_4 = createModifier$lambda_0(disableClip, isEnabled_0);
      $composer_0.updateRememberedValue_l1wh71_k$(value_4);
      tmp_33 = value_4;
    } else {
      tmp_33 = it_4;
    }
    var tmp_34 = tmp_33;
    var tmp10_group = (tmp_34 == null ? true : !(tmp_34 == null)) ? tmp_34 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var tmp1 = tmp_31.then_g5qrxq_k$(graphicsLayer(tmp_32, tmp10_group)).then_g5qrxq_k$(new EnterExitTransitionElement(_this__u8e3s4, sizeAnimation, offsetAnimation, slideAnimation, activeEnter, activeExit, isEnabled_0._v, graphicsLayerBlock)).then_g5qrxq_k$(!shouldVeilMatchParentSize ? veilModifierElement : Companion_getInstance_0());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1;
  }
  function ExperimentalAnimationApi() {
  }
  protoOf(ExperimentalAnimationApi).equals = function (other) {
    if (!(other instanceof ExperimentalAnimationApi))
      return false;
    other instanceof ExperimentalAnimationApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalAnimationApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalAnimationApi).toString = function () {
    return '@androidx.compose.animation.ExperimentalAnimationApi(' + ')';
  };
  function TransitionData(fade, slide, changeSize, scale, veil, hold, effectsMap) {
    fade = fade === VOID ? null : fade;
    slide = slide === VOID ? null : slide;
    changeSize = changeSize === VOID ? null : changeSize;
    scale = scale === VOID ? null : scale;
    veil = veil === VOID ? null : veil;
    hold = hold === VOID ? false : hold;
    effectsMap = effectsMap === VOID ? emptyMap() : effectsMap;
    this.fade_1 = fade;
    this.slide_1 = slide;
    this.changeSize_1 = changeSize;
    this.scale_1 = scale;
    this.veil_1 = veil;
    this.hold_1 = hold;
    this.effectsMap_1 = effectsMap;
  }
  protoOf(TransitionData).get_fade_woluit_k$ = function () {
    return this.fade_1;
  };
  protoOf(TransitionData).get_slide_iykyvc_k$ = function () {
    return this.slide_1;
  };
  protoOf(TransitionData).get_changeSize_fljy3e_k$ = function () {
    return this.changeSize_1;
  };
  protoOf(TransitionData).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(TransitionData).get_veil_wow5ej_k$ = function () {
    return this.veil_1;
  };
  protoOf(TransitionData).get_hold_wonf2g_k$ = function () {
    return this.hold_1;
  };
  protoOf(TransitionData).get_effectsMap_87u2yr_k$ = function () {
    return this.effectsMap_1;
  };
  protoOf(TransitionData).component1_7eebsc_k$ = function () {
    return this.fade_1;
  };
  protoOf(TransitionData).component2_7eebsb_k$ = function () {
    return this.slide_1;
  };
  protoOf(TransitionData).component3_7eebsa_k$ = function () {
    return this.changeSize_1;
  };
  protoOf(TransitionData).component4_7eebs9_k$ = function () {
    return this.scale_1;
  };
  protoOf(TransitionData).component5_7eebs8_k$ = function () {
    return this.veil_1;
  };
  protoOf(TransitionData).component6_7eebs7_k$ = function () {
    return this.hold_1;
  };
  protoOf(TransitionData).component7_7eebs6_k$ = function () {
    return this.effectsMap_1;
  };
  protoOf(TransitionData).copy_rq0ada_k$ = function (fade, slide, changeSize, scale, veil, hold, effectsMap) {
    return new TransitionData(fade, slide, changeSize, scale, veil, hold, effectsMap);
  };
  protoOf(TransitionData).copy$default_7nww7c_k$ = function (fade, slide, changeSize, scale, veil, hold, effectsMap, $super) {
    fade = fade === VOID ? this.fade_1 : fade;
    slide = slide === VOID ? this.slide_1 : slide;
    changeSize = changeSize === VOID ? this.changeSize_1 : changeSize;
    scale = scale === VOID ? this.scale_1 : scale;
    veil = veil === VOID ? this.veil_1 : veil;
    hold = hold === VOID ? this.hold_1 : hold;
    effectsMap = effectsMap === VOID ? this.effectsMap_1 : effectsMap;
    return $super === VOID ? this.copy_rq0ada_k$(fade, slide, changeSize, scale, veil, hold, effectsMap) : $super.copy_rq0ada_k$.call(this, fade, slide, changeSize, scale, veil, hold, effectsMap);
  };
  protoOf(TransitionData).toString = function () {
    return 'TransitionData(fade=' + toString(this.fade_1) + ', slide=' + toString(this.slide_1) + ', changeSize=' + toString(this.changeSize_1) + ', scale=' + toString(this.scale_1) + ', veil=' + toString(this.veil_1) + ', hold=' + this.hold_1 + ', effectsMap=' + toString_0(this.effectsMap_1) + ')';
  };
  protoOf(TransitionData).hashCode = function () {
    var result = this.fade_1 == null ? 0 : this.fade_1.hashCode();
    result = imul(result, 31) + (this.slide_1 == null ? 0 : this.slide_1.hashCode()) | 0;
    result = imul(result, 31) + (this.changeSize_1 == null ? 0 : this.changeSize_1.hashCode()) | 0;
    result = imul(result, 31) + (this.scale_1 == null ? 0 : this.scale_1.hashCode()) | 0;
    result = imul(result, 31) + (this.veil_1 == null ? 0 : this.veil_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.hold_1) | 0;
    result = imul(result, 31) + hashCode(this.effectsMap_1) | 0;
    return result;
  };
  protoOf(TransitionData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransitionData))
      return false;
    if (!equals(this.fade_1, other.fade_1))
      return false;
    if (!equals(this.slide_1, other.slide_1))
      return false;
    if (!equals(this.changeSize_1, other.changeSize_1))
      return false;
    if (!equals(this.scale_1, other.scale_1))
      return false;
    if (!equals(this.veil_1, other.veil_1))
      return false;
    if (!(this.hold_1 === other.hold_1))
      return false;
    if (!equals(this.effectsMap_1, other.effectsMap_1))
      return false;
    return true;
  };
  function EnterTransitionImpl(data) {
    EnterTransition.call(this);
    this.data_1 = data;
  }
  protoOf(EnterTransitionImpl).get_data_jntocg_k$ = function () {
    return this.data_1;
  };
  function Fade(alpha, animationSpec) {
    this.alpha_1 = alpha;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Fade).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Fade).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Fade).component1_7eebsc_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Fade).component2_7eebsb_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Fade).copy_z8z8aw_k$ = function (alpha, animationSpec) {
    return new Fade(alpha, animationSpec);
  };
  protoOf(Fade).copy$default_ma0w9o_k$ = function (alpha, animationSpec, $super) {
    alpha = alpha === VOID ? this.alpha_1 : alpha;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_z8z8aw_k$(alpha, animationSpec) : $super.copy_z8z8aw_k$.call(this, alpha, animationSpec);
  };
  protoOf(Fade).toString = function () {
    return 'Fade(alpha=' + this.alpha_1 + ', animationSpec=' + toString_0(this.animationSpec_1) + ')';
  };
  protoOf(Fade).hashCode = function () {
    var result = getNumberHashCode(this.alpha_1);
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Fade).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Fade))
      return false;
    if (!equals(this.alpha_1, other.alpha_1))
      return false;
    if (!equals(this.animationSpec_1, other.animationSpec_1))
      return false;
    return true;
  };
  function Slide(slideOffset, animationSpec) {
    this.slideOffset_1 = slideOffset;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Slide).get_slideOffset_3j6nyd_k$ = function () {
    return this.slideOffset_1;
  };
  protoOf(Slide).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Slide).component1_7eebsc_k$ = function () {
    return this.slideOffset_1;
  };
  protoOf(Slide).component2_7eebsb_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Slide).copy_rxbt3p_k$ = function (slideOffset, animationSpec) {
    return new Slide(slideOffset, animationSpec);
  };
  protoOf(Slide).copy$default_redmhi_k$ = function (slideOffset, animationSpec, $super) {
    slideOffset = slideOffset === VOID ? this.slideOffset_1 : slideOffset;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_rxbt3p_k$(slideOffset, animationSpec) : $super.copy_rxbt3p_k$.call(this, slideOffset, animationSpec);
  };
  protoOf(Slide).toString = function () {
    return 'Slide(slideOffset=' + toString_0(this.slideOffset_1) + ', animationSpec=' + toString_0(this.animationSpec_1) + ')';
  };
  protoOf(Slide).hashCode = function () {
    var result = hashCode(this.slideOffset_1);
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Slide).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Slide))
      return false;
    if (!equals(this.slideOffset_1, other.slideOffset_1))
      return false;
    if (!equals(this.animationSpec_1, other.animationSpec_1))
      return false;
    return true;
  };
  function ChangeSize$_init_$lambda_705jnq(it) {
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(0), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
    var tmp$ret$1 = _IntSize___init__impl__emcjft(tmp$ret$0);
    return new IntSize(tmp$ret$1);
  }
  function ChangeSize(alignment, size, animationSpec, clip) {
    var tmp;
    if (size === VOID) {
      tmp = ChangeSize$_init_$lambda_705jnq;
    } else {
      tmp = size;
    }
    size = tmp;
    clip = clip === VOID ? true : clip;
    this.alignment_1 = alignment;
    this.size_1 = size;
    this.animationSpec_1 = animationSpec;
    this.clip_1 = clip;
  }
  protoOf(ChangeSize).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ChangeSize).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(ChangeSize).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(ChangeSize).get_clip_wok5uh_k$ = function () {
    return this.clip_1;
  };
  protoOf(ChangeSize).component1_7eebsc_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ChangeSize).component2_7eebsb_k$ = function () {
    return this.size_1;
  };
  protoOf(ChangeSize).component3_7eebsa_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(ChangeSize).component4_7eebs9_k$ = function () {
    return this.clip_1;
  };
  protoOf(ChangeSize).copy_v6ndrn_k$ = function (alignment, size, animationSpec, clip) {
    return new ChangeSize(alignment, size, animationSpec, clip);
  };
  protoOf(ChangeSize).copy$default_lm9k9y_k$ = function (alignment, size, animationSpec, clip, $super) {
    alignment = alignment === VOID ? this.alignment_1 : alignment;
    size = size === VOID ? this.size_1 : size;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    clip = clip === VOID ? this.clip_1 : clip;
    return $super === VOID ? this.copy_v6ndrn_k$(alignment, size, animationSpec, clip) : $super.copy_v6ndrn_k$.call(this, alignment, size, animationSpec, clip);
  };
  protoOf(ChangeSize).toString = function () {
    return 'ChangeSize(alignment=' + toString_0(this.alignment_1) + ', size=' + toString_0(this.size_1) + ', animationSpec=' + toString_0(this.animationSpec_1) + ', clip=' + this.clip_1 + ')';
  };
  protoOf(ChangeSize).hashCode = function () {
    var result = hashCode(this.alignment_1);
    result = imul(result, 31) + hashCode(this.size_1) | 0;
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.clip_1) | 0;
    return result;
  };
  protoOf(ChangeSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChangeSize))
      return false;
    if (!equals(this.alignment_1, other.alignment_1))
      return false;
    if (!equals(this.size_1, other.size_1))
      return false;
    if (!equals(this.animationSpec_1, other.animationSpec_1))
      return false;
    if (!(this.clip_1 === other.clip_1))
      return false;
    return true;
  };
  function Scale(scale, transformOrigin, animationSpec) {
    this.scale_1 = scale;
    this.transformOrigin_1 = transformOrigin;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Scale).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(Scale).get_transformOrigin_bc7467_k$ = function () {
    return this.transformOrigin_1;
  };
  protoOf(Scale).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Scale).component1_7eebsc_k$ = function () {
    return this.scale_1;
  };
  protoOf(Scale).component2_vce5p_k$ = function () {
    return this.transformOrigin_1;
  };
  protoOf(Scale).component3_7eebsa_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Scale).copy_yexmra_k$ = function (scale, transformOrigin, animationSpec) {
    return new Scale(scale, transformOrigin, animationSpec);
  };
  protoOf(Scale).copy$default_nonyxv_k$ = function (scale, transformOrigin, animationSpec, $super) {
    scale = scale === VOID ? this.scale_1 : scale;
    transformOrigin = transformOrigin === VOID ? this.transformOrigin_1 : transformOrigin;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_yexmra_k$(scale, transformOrigin, animationSpec) : $super.copy_yexmra_k$.call(this, scale, new TransformOrigin(transformOrigin), animationSpec);
  };
  protoOf(Scale).toString = function () {
    return 'Scale(scale=' + this.scale_1 + ', transformOrigin=' + TransformOrigin__toString_impl_nn7ftd(this.transformOrigin_1) + ', animationSpec=' + toString_0(this.animationSpec_1) + ')';
  };
  protoOf(Scale).hashCode = function () {
    var result = getNumberHashCode(this.scale_1);
    result = imul(result, 31) + TransformOrigin__hashCode_impl_pmqpcw(this.transformOrigin_1) | 0;
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Scale).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Scale))
      return false;
    if (!equals(this.scale_1, other.scale_1))
      return false;
    if (!equals(this.transformOrigin_1, other.transformOrigin_1))
      return false;
    if (!equals(this.animationSpec_1, other.animationSpec_1))
      return false;
    return true;
  };
  function Veil(initialColor, targetColor, animationSpec, matchParentSize) {
    this.initialColor_1 = initialColor;
    this.targetColor_1 = targetColor;
    this.animationSpec_1 = animationSpec;
    this.matchParentSize_1 = matchParentSize;
  }
  protoOf(Veil).get_initialColor_xuw9v5_k$ = function () {
    return this.initialColor_1;
  };
  protoOf(Veil).get_targetColor_4dgeog_k$ = function () {
    return this.targetColor_1;
  };
  protoOf(Veil).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Veil).get_matchParentSize_onsyh3_k$ = function () {
    return this.matchParentSize_1;
  };
  protoOf(Veil).component1_9lkot7_k$ = function () {
    return this.initialColor_1;
  };
  protoOf(Veil).component2_ekm1j8_k$ = function () {
    return this.targetColor_1;
  };
  protoOf(Veil).component3_7eebsa_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Veil).component4_7eebs9_k$ = function () {
    return this.matchParentSize_1;
  };
  protoOf(Veil).copy_ym4std_k$ = function (initialColor, targetColor, animationSpec, matchParentSize) {
    return new Veil(initialColor, targetColor, animationSpec, matchParentSize);
  };
  protoOf(Veil).copy$default_kff6mb_k$ = function (initialColor, targetColor, animationSpec, matchParentSize, $super) {
    initialColor = initialColor === VOID ? this.initialColor_1 : initialColor;
    targetColor = targetColor === VOID ? this.targetColor_1 : targetColor;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    matchParentSize = matchParentSize === VOID ? this.matchParentSize_1 : matchParentSize;
    return $super === VOID ? this.copy_ym4std_k$(initialColor, targetColor, animationSpec, matchParentSize) : $super.copy_ym4std_k$.call(this, new Color_0(initialColor), new Color_0(targetColor), animationSpec, matchParentSize);
  };
  protoOf(Veil).toString = function () {
    return 'Veil(initialColor=' + Color__toString_impl_hpzmaq(this.initialColor_1) + ', targetColor=' + Color__toString_impl_hpzmaq(this.targetColor_1) + ', animationSpec=' + toString_0(this.animationSpec_1) + ', matchParentSize=' + this.matchParentSize_1 + ')';
  };
  protoOf(Veil).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.initialColor_1);
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.targetColor_1) | 0;
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.matchParentSize_1) | 0;
    return result;
  };
  protoOf(Veil).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Veil))
      return false;
    if (!equals(this.initialColor_1, other.initialColor_1))
      return false;
    if (!equals(this.targetColor_1, other.targetColor_1))
      return false;
    if (!equals(this.animationSpec_1, other.animationSpec_1))
      return false;
    if (!(this.matchParentSize_1 === other.matchParentSize_1))
      return false;
    return true;
  };
  function TransitionEffectKey() {
  }
  function TransitionEffect() {
  }
  function ExitTransitionImpl(data) {
    ExitTransition.call(this);
    this.data_1 = data;
  }
  protoOf(ExitTransitionImpl).get_data_jntocg_k$ = function () {
    return this.data_1;
  };
  function expandIn(animationSpec, expandFrom, clip, initialSize) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0, new IntSize(get_VisibilityThreshold_0(Companion_getInstance_3()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_5().get_BottomEnd_ayz0tj_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialSize === VOID) {
      tmp = expandIn$lambda;
    } else {
      tmp = initialSize;
    }
    initialSize = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(expandFrom, initialSize, animationSpec, clip)));
  }
  function toAlignment(_this__u8e3s4) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return equals(_this__u8e3s4, Companion_getInstance_5().get_Start_ih4i6x_k$()) ? Companion_getInstance_5().get_CenterStart_2305fg_k$() : equals(_this__u8e3s4, Companion_getInstance_5().get_End_18ju7i_k$()) ? Companion_getInstance_5().get_CenterEnd_uti4xp_k$() : Companion_getInstance_5().get_Center_3arb0i_k$();
  }
  function toAlignment_0(_this__u8e3s4) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return equals(_this__u8e3s4, Companion_getInstance_5().get_Top_18jj1w_k$()) ? Companion_getInstance_5().get_TopCenter_u4q5vl_k$() : equals(_this__u8e3s4, Companion_getInstance_5().get_Bottom_3m75bg_k$()) ? Companion_getInstance_5().get_BottomCenter_yatb1z_k$() : Companion_getInstance_5().get_Center_3arb0i_k$();
  }
  function shrinkOut(animationSpec, shrinkTowards, clip, targetSize) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0, new IntSize(get_VisibilityThreshold_0(Companion_getInstance_3()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_5().get_BottomEnd_ayz0tj_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetSize === VOID) {
      tmp = shrinkOut$lambda;
    } else {
      tmp = targetSize;
    }
    targetSize = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(shrinkTowards, targetSize, animationSpec, clip)));
  }
  function trackActiveEnter(_this__u8e3s4, enter, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 21614502, 'C(trackActiveEnter)1009@44788L40:EnterExitTransition.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(21614502, $changed, -1, 'androidx.compose.animation.trackActiveEnter (EnterExitTransition.kt:1004)');
    }
    sourceInformationMarkerStart($composer_0, -703284114, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value = mutableStateOf(enter);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var activeEnter$delegate = tmp1_group;
    if (_this__u8e3s4.get_currentState_snihnl_k$().equals(_this__u8e3s4.get_targetState_kri3mx_k$()) && _this__u8e3s4.get_currentState_snihnl_k$().equals(EnterExitState_Visible_getInstance())) {
      if (_this__u8e3s4.get_isSeeking_vjb393_k$()) {
        trackActiveEnter$lambda_0(activeEnter$delegate, enter);
      } else {
        trackActiveEnter$lambda_0(activeEnter$delegate, Companion_getInstance_14().None_1);
      }
    } else if (_this__u8e3s4.get_targetState_kri3mx_k$().equals(EnterExitState_Visible_getInstance())) {
      trackActiveEnter$lambda_0(activeEnter$delegate, trackActiveEnter$lambda(activeEnter$delegate).plus_w36lq9_k$(enter));
    }
    var tmp0 = trackActiveEnter$lambda(activeEnter$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function trackActiveExit(_this__u8e3s4, exit, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1363864804, 'C(trackActiveExit)1029@45769L39:EnterExitTransition.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(-1363864804, $changed, -1, 'androidx.compose.animation.trackActiveExit (EnterExitTransition.kt:1024)');
    }
    sourceInformationMarkerStart($composer_0, -709035581, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value = mutableStateOf(exit);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var activeExit$delegate = tmp1_group;
    if (_this__u8e3s4.get_currentState_snihnl_k$().equals(_this__u8e3s4.get_targetState_kri3mx_k$()) && _this__u8e3s4.get_currentState_snihnl_k$().equals(EnterExitState_Visible_getInstance())) {
      if (_this__u8e3s4.get_isSeeking_vjb393_k$()) {
        trackActiveExit$lambda_0(activeExit$delegate, exit);
      } else {
        trackActiveExit$lambda_0(activeExit$delegate, Companion_getInstance_15().None_1);
      }
    } else if (!_this__u8e3s4.get_targetState_kri3mx_k$().equals(EnterExitState_Visible_getInstance())) {
      trackActiveExit$lambda_0(activeExit$delegate, trackActiveExit$lambda(activeExit$delegate).plus_buzi7t_k$(exit));
    }
    var tmp0 = trackActiveExit$lambda(activeExit$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function VeilModifierElement(transition, veilAnimation, enter, exit) {
    ModifierNodeElement.call(this);
    this.transition_1 = transition;
    this.veilAnimation_1 = veilAnimation;
    this.enter_1 = enter;
    this.exit_1 = exit;
  }
  protoOf(VeilModifierElement).get_transition_mcca1q_k$ = function () {
    return this.transition_1;
  };
  protoOf(VeilModifierElement).get_veilAnimation_dbg1av_k$ = function () {
    return this.veilAnimation_1;
  };
  protoOf(VeilModifierElement).get_enter_iqxcq7_k$ = function () {
    return this.enter_1;
  };
  protoOf(VeilModifierElement).get_exit_wolopz_k$ = function () {
    return this.exit_1;
  };
  protoOf(VeilModifierElement).create_md4cuc_k$ = function () {
    return new VeilModifierNode(this.transition_1, this.veilAnimation_1, this.enter_1, this.exit_1);
  };
  protoOf(VeilModifierElement).update_cq57z6_k$ = function (node) {
    node.transition_1 = this.transition_1;
    node.veilAnimation_1 = this.veilAnimation_1;
    node.enter_1 = this.enter_1;
    node.exit_1 = this.exit_1;
  };
  protoOf(VeilModifierElement).update_9wd57p_k$ = function (node) {
    return this.update_cq57z6_k$(node instanceof VeilModifierNode ? node : THROW_CCE());
  };
  protoOf(VeilModifierElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('veil');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('transition', this.transition_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('veilAnimation', this.veilAnimation_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('enter', this.enter_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('exit', this.exit_1);
  };
  protoOf(VeilModifierElement).component1_7eebsc_k$ = function () {
    return this.transition_1;
  };
  protoOf(VeilModifierElement).component2_7eebsb_k$ = function () {
    return this.veilAnimation_1;
  };
  protoOf(VeilModifierElement).component3_7eebsa_k$ = function () {
    return this.enter_1;
  };
  protoOf(VeilModifierElement).component4_7eebs9_k$ = function () {
    return this.exit_1;
  };
  protoOf(VeilModifierElement).copy_yh4j54_k$ = function (transition, veilAnimation, enter, exit) {
    return new VeilModifierElement(transition, veilAnimation, enter, exit);
  };
  protoOf(VeilModifierElement).copy$default_c93j7_k$ = function (transition, veilAnimation, enter, exit, $super) {
    transition = transition === VOID ? this.transition_1 : transition;
    veilAnimation = veilAnimation === VOID ? this.veilAnimation_1 : veilAnimation;
    enter = enter === VOID ? this.enter_1 : enter;
    exit = exit === VOID ? this.exit_1 : exit;
    return $super === VOID ? this.copy_yh4j54_k$(transition, veilAnimation, enter, exit) : $super.copy_yh4j54_k$.call(this, transition, veilAnimation, enter, exit);
  };
  protoOf(VeilModifierElement).toString = function () {
    return 'VeilModifierElement(transition=' + this.transition_1.toString() + ', veilAnimation=' + toString_0(this.veilAnimation_1) + ', enter=' + this.enter_1.toString() + ', exit=' + this.exit_1.toString() + ')';
  };
  protoOf(VeilModifierElement).hashCode = function () {
    var result = hashCode(this.transition_1);
    result = imul(result, 31) + hashCode(this.veilAnimation_1) | 0;
    result = imul(result, 31) + this.enter_1.hashCode() | 0;
    result = imul(result, 31) + this.exit_1.hashCode() | 0;
    return result;
  };
  protoOf(VeilModifierElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VeilModifierElement))
      return false;
    if (!equals(this.transition_1, other.transition_1))
      return false;
    if (!equals(this.veilAnimation_1, other.veilAnimation_1))
      return false;
    if (!this.enter_1.equals(other.enter_1))
      return false;
    if (!this.exit_1.equals(other.exit_1))
      return false;
    return true;
  };
  function GraphicsLayerBlockForEnterExit() {
  }
  function createGraphicsLayerBlock(_this__u8e3s4, enter, exit, label, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 642253525, 'C(createGraphicsLayerBlock)1084@47699L3043:EnterExitTransition.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(642253525, $changed, -1, 'androidx.compose.animation.createGraphicsLayerBlock (EnterExitTransition.kt:1052)');
    }
    var shouldAnimateAlpha = !(enter.get_data_jntocg_k$().fade_1 == null) || !(exit.get_data_jntocg_k$().fade_1 == null);
    var shouldAnimateScale = !(enter.get_data_jntocg_k$().scale_1 == null) || !(exit.get_data_jntocg_k$().scale_1 == null);
    var tmp;
    if (shouldAnimateAlpha) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-703879421);
      sourceInformation($composer_0, '1064@47133L27,1062@47029L146');
      var tmp_0 = get_VectorConverter_1(FloatCompanionObject_getInstance());
      sourceInformationMarkerStart($composer_0, -1269628144, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value = label + ' alpha';
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp2_group = createDeferredAnimation(_this__u8e3s4, tmp_0, tmp1_group, $composer_0, 384 | 14 & $changed, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp = tmp2_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(-703709976);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp = null;
    }
    var alphaAnimation = tmp;
    var tmp_3;
    if (shouldAnimateScale) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-703642333);
      sourceInformation($composer_0, '1072@47372L27,1070@47268L146');
      var tmp_4 = get_VectorConverter_1(FloatCompanionObject_getInstance());
      sourceInformationMarkerStart($composer_0, -1269620496, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false || it_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value_0 = label + ' scale';
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp4_group = createDeferredAnimation(_this__u8e3s4, tmp_4, tmp3_group, $composer_0, 384 | 14 & $changed, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_3 = tmp4_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(-703472888);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_3 = null;
    }
    var scaleAnimation = tmp_3;
    var tmp_7;
    if (shouldAnimateScale) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-703395232);
      sourceInformation($composer_0, '1078@47517L149');
      var tmp5_group = createDeferredAnimation(_this__u8e3s4, get_TransformOriginVectorConverter(), 'TransformOriginInterruptionHandling', $composer_0, 384 | 14 & $changed, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_7 = tmp5_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(-703222904);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_7 = null;
    }
    var transformOriginAnimation = tmp_7;
    sourceInformationMarkerStart($composer_0, -1269607016, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!(!!(!!(!!($composer_0.changedInstance_s1wkiy_k$(alphaAnimation) | (($changed & 112 ^ 48) > 32 && $composer_0.changed_ga7h3f_k$(enter) || ($changed & 48) === 32)) | (($changed & 896 ^ 384) > 256 && $composer_0.changed_ga7h3f_k$(exit) || ($changed & 384) === 256)) | $composer_0.changedInstance_s1wkiy_k$(scaleAnimation)) | (($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4)) | $composer_0.changedInstance_s1wkiy_k$(transformOriginAnimation));
    // Inline function 'kotlin.let' call
    var it_1 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_8;
    if (invalid || it_1 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var tmp_9 = createGraphicsLayerBlock$lambda(alphaAnimation, scaleAnimation, _this__u8e3s4, enter, exit, transformOriginAnimation);
      var value_1 = new sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0(tmp_9);
      $composer_0.updateRememberedValue_l1wh71_k$(value_1);
      tmp_8 = value_1;
    } else {
      tmp_8 = it_1;
    }
    var tmp_10 = tmp_8;
    var tmp6_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp6_group;
  }
  function EnterExitTransitionElement(transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock) {
    ModifierNodeElement.call(this);
    this.transition_1 = transition;
    this.sizeAnimation_1 = sizeAnimation;
    this.offsetAnimation_1 = offsetAnimation;
    this.slideAnimation_1 = slideAnimation;
    this.enter_1 = enter;
    this.exit_1 = exit;
    this.isEnabled_1 = isEnabled;
    this.graphicsLayerBlock_1 = graphicsLayerBlock;
  }
  protoOf(EnterExitTransitionElement).get_transition_mcca1q_k$ = function () {
    return this.transition_1;
  };
  protoOf(EnterExitTransitionElement).set_sizeAnimation_d1qqsi_k$ = function (_set____db54di) {
    this.sizeAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_sizeAnimation_oj7fx6_k$ = function () {
    return this.sizeAnimation_1;
  };
  protoOf(EnterExitTransitionElement).set_offsetAnimation_sbtt4u_k$ = function (_set____db54di) {
    this.offsetAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_offsetAnimation_bqy8g8_k$ = function () {
    return this.offsetAnimation_1;
  };
  protoOf(EnterExitTransitionElement).set_slideAnimation_8zf29m_k$ = function (_set____db54di) {
    this.slideAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_slideAnimation_1jny1w_k$ = function () {
    return this.slideAnimation_1;
  };
  protoOf(EnterExitTransitionElement).set_enter_kk8oi8_k$ = function (_set____db54di) {
    this.enter_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_enter_iqxcq7_k$ = function () {
    return this.enter_1;
  };
  protoOf(EnterExitTransitionElement).set_exit_jz1ms6_k$ = function (_set____db54di) {
    this.exit_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_exit_wolopz_k$ = function () {
    return this.exit_1;
  };
  protoOf(EnterExitTransitionElement).set_isEnabled_9kb97j_k$ = function (_set____db54di) {
    this.isEnabled_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_isEnabled_roz1ma_k$ = function () {
    return this.isEnabled_1;
  };
  protoOf(EnterExitTransitionElement).set_graphicsLayerBlock_3ehvm4_k$ = function (_set____db54di) {
    this.graphicsLayerBlock_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_graphicsLayerBlock_45d73k_k$ = function () {
    return this.graphicsLayerBlock_1;
  };
  protoOf(EnterExitTransitionElement).create_md4cuc_k$ = function () {
    return new EnterExitTransitionModifierNode(this.transition_1, this.sizeAnimation_1, this.offsetAnimation_1, this.slideAnimation_1, this.enter_1, this.exit_1, this.isEnabled_1, this.graphicsLayerBlock_1);
  };
  protoOf(EnterExitTransitionElement).update_sx3szx_k$ = function (node) {
    node.transition_1 = this.transition_1;
    node.sizeAnimation_1 = this.sizeAnimation_1;
    node.offsetAnimation_1 = this.offsetAnimation_1;
    node.slideAnimation_1 = this.slideAnimation_1;
    node.enter_1 = this.enter_1;
    node.exit_1 = this.exit_1;
    node.isEnabled_1 = this.isEnabled_1;
    node.graphicsLayerBlock_1 = this.graphicsLayerBlock_1;
  };
  protoOf(EnterExitTransitionElement).update_9wd57p_k$ = function (node) {
    return this.update_sx3szx_k$(node instanceof EnterExitTransitionModifierNode ? node : THROW_CCE());
  };
  protoOf(EnterExitTransitionElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('enterExitTransition');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('transition', this.transition_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('sizeAnimation', this.sizeAnimation_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('offsetAnimation', this.offsetAnimation_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('slideAnimation', this.slideAnimation_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('enter', this.enter_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('exit', this.exit_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('graphicsLayerBlock', this.graphicsLayerBlock_1);
  };
  protoOf(EnterExitTransitionElement).hashCode = function () {
    var tmp = imul(hashCode(this.transition_1), 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.sizeAnimation_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp_0 = imul(tmp + tmp$ret$0 | 0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.offsetAnimation_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    var tmp_1 = imul(tmp_0 + tmp$ret$1 | 0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.slideAnimation_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp$ret$2 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
    return imul(imul(imul(imul(tmp_1 + tmp$ret$2 | 0, 31) + this.enter_1.hashCode() | 0, 31) + this.exit_1.hashCode() | 0, 31) + hashCode(this.isEnabled_1) | 0, 31) + hashCode(this.graphicsLayerBlock_1) | 0;
  };
  protoOf(EnterExitTransitionElement).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    if (other instanceof EnterExitTransitionElement) {
      tmp_6 = equals(other.transition_1, this.transition_1);
    } else {
      tmp_6 = false;
    }
    if (tmp_6) {
      tmp_5 = equals(other.sizeAnimation_1, this.sizeAnimation_1);
    } else {
      tmp_5 = false;
    }
    if (tmp_5) {
      tmp_4 = equals(other.offsetAnimation_1, this.offsetAnimation_1);
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = equals(other.slideAnimation_1, this.slideAnimation_1);
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = other.enter_1.equals(this.enter_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.exit_1.equals(this.exit_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.isEnabled_1 === this.isEnabled_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.graphicsLayerBlock_1, this.graphicsLayerBlock_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  function VeilModifierNode$draw$lambda(this$0) {
    return function ($this$animate) {
      var tmp;
      if ($this$animate.isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.enter_1.get_data_jntocg_k$().veil_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animationSpec_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultColorAnimationSpec() : tmp1_elvis_lhs;
      } else if ($this$animate.isTransitioningTo_mjamuk_k$(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = this$0.exit_1.get_data_jntocg_k$().veil_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.animationSpec_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultColorAnimationSpec() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultColorAnimationSpec();
      }
      return tmp;
    };
  }
  function VeilModifierNode$draw$lambda_0(this$0) {
    return function (it) {
      var tmp;
      switch (it.get_ordinal_ip24qg_k$()) {
        case 1:
          var tmp1_safe_receiver = this$0.enter_1.get_data_jntocg_k$().veil_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.targetColor_1;
          var tmp_0;
          var tmp_1 = tmp2_elvis_lhs;
          if ((tmp_1 == null ? null : new Color_0(tmp_1)) == null) {
            var tmp3_safe_receiver = this$0.exit_1.get_data_jntocg_k$().veil_1;
            tmp_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.initialColor_1;
          } else {
            tmp_0 = tmp2_elvis_lhs;
          }

          var tmp4_elvis_lhs = tmp_0;
          var tmp_2;
          var tmp_3 = tmp4_elvis_lhs;
          if ((tmp_3 == null ? null : new Color_0(tmp_3)) == null) {
            tmp_2 = Companion_getInstance_7().get_Transparent_if5ln4_k$();
          } else {
            tmp_2 = tmp4_elvis_lhs;
          }

          tmp = tmp_2;
          break;
        case 0:
          var tmp5_safe_receiver = this$0.enter_1.get_data_jntocg_k$().veil_1;
          var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.initialColor_1;
          var tmp_4;
          var tmp_5 = tmp6_elvis_lhs;
          if ((tmp_5 == null ? null : new Color_0(tmp_5)) == null) {
            tmp_4 = Companion_getInstance_7().get_Transparent_if5ln4_k$();
          } else {
            tmp_4 = tmp6_elvis_lhs;
          }

          tmp = tmp_4;
          break;
        case 2:
          var tmp7_safe_receiver = this$0.exit_1.get_data_jntocg_k$().veil_1;
          var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.targetColor_1;
          var tmp_6;
          var tmp_7 = tmp8_elvis_lhs;
          if ((tmp_7 == null ? null : new Color_0(tmp_7)) == null) {
            tmp_6 = Companion_getInstance_7().get_Transparent_if5ln4_k$();
          } else {
            tmp_6 = tmp8_elvis_lhs;
          }

          tmp = tmp_6;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return new Color_0(tmp);
    };
  }
  function VeilModifierNode(transition, veilAnimation, enter, exit) {
    Node.call(this);
    this.transition_1 = transition;
    this.veilAnimation_1 = veilAnimation;
    this.enter_1 = enter;
    this.exit_1 = exit;
  }
  protoOf(VeilModifierNode).set_transition_3a2emy_k$ = function (_set____db54di) {
    this.transition_1 = _set____db54di;
  };
  protoOf(VeilModifierNode).get_transition_mcca1q_k$ = function () {
    return this.transition_1;
  };
  protoOf(VeilModifierNode).set_veilAnimation_qmjfzq_k$ = function (_set____db54di) {
    this.veilAnimation_1 = _set____db54di;
  };
  protoOf(VeilModifierNode).get_veilAnimation_dbg1av_k$ = function () {
    return this.veilAnimation_1;
  };
  protoOf(VeilModifierNode).set_enter_kk8oi8_k$ = function (_set____db54di) {
    this.enter_1 = _set____db54di;
  };
  protoOf(VeilModifierNode).get_enter_iqxcq7_k$ = function () {
    return this.enter_1;
  };
  protoOf(VeilModifierNode).set_exit_jz1ms6_k$ = function (_set____db54di) {
    this.exit_1 = _set____db54di;
  };
  protoOf(VeilModifierNode).get_exit_wolopz_k$ = function () {
    return this.exit_1;
  };
  protoOf(VeilModifierNode).draw_2h95cs_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.drawContent_m0wwjp_k$();
    var tmp = this.veilAnimation_1;
    var tmp_0 = VeilModifierNode$draw$lambda(this);
    var veilColor = tmp.animate_lt3uhv_k$(tmp_0, VeilModifierNode$draw$lambda_0(this));
    if (!(_Color___get_alpha__impl__wcfyv1(veilColor.get_value_j01efc_k$().value_1) === 0.0)) {
      var tmp0_elvis_lhs = this.enter_1.get_data_jntocg_k$().veil_1;
      var veil = tmp0_elvis_lhs == null ? this.exit_1.get_data_jntocg_k$().veil_1 : tmp0_elvis_lhs;
      if ((veil == null ? null : veil.matchParentSize_1) === true) {
        var layoutCoordinates = requireLayoutCoordinates(this);
        var tmp1_safe_receiver = layoutCoordinates.get_parentLayoutCoordinates_fdh4ou_k$();
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_size_kd98kr_k$();
        var tmp_1;
        var tmp_2 = tmp2_safe_receiver;
        if ((tmp_2 == null ? null : new IntSize(tmp_2)) == null) {
          tmp_1 = null;
        } else {
          var tmp_3 = tmp2_safe_receiver;
          // Inline function 'kotlin.let' call
          var it = (tmp_3 == null ? null : new IntSize(tmp_3)).packedValue_1;
          // Inline function 'androidx.compose.ui.unit.IntSize.width' call
          // Inline function 'androidx.compose.ui.util.unpackInt1' call
          var value = _IntSize___get_packedValue__impl__uho7jf(it);
          var tmp0 = convertToInt(shiftRight(value, 32));
          // Inline function 'androidx.compose.ui.unit.IntSize.height' call
          // Inline function 'androidx.compose.ui.util.unpackInt2' call
          var value_0 = _IntSize___get_packedValue__impl__uho7jf(it);
          // Inline function 'androidx.compose.ui.geometry.Size' call
          // Inline function 'androidx.compose.ui.util.packFloats' call
          var val2 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
          var v1 = fromInt(toRawBits(tmp0));
          var v2 = fromInt(toRawBits(val2));
          var tmp$ret$4 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
          tmp_1 = _Size___init__impl__aywn0g(tmp$ret$4);
        }
        var tmp3_elvis_lhs = tmp_1;
        var tmp_4;
        var tmp_5 = tmp3_elvis_lhs;
        if ((tmp_5 == null ? null : new Size(tmp_5)) == null) {
          tmp_4 = Companion_getInstance_8().get_Zero_rugywl_k$();
        } else {
          tmp_4 = tmp3_elvis_lhs;
        }
        var parentSize = tmp_4;
        var offsetInParent = positionInParent(layoutCoordinates);
        var tmp4_color = veilColor.get_value_j01efc_k$().value_1;
        // Inline function 'androidx.compose.ui.geometry.Offset.unaryMinus' call
        var tmp5_topLeft = _Offset___init__impl__c168vi(bitwiseXor(_Offset___get_packedValue__impl__xh2k8q(offsetInParent), new Long(-2147483648, -2147483648)));
        _this__u8e3s4.drawRect$default_5x4e2k_k$(tmp4_color, tmp5_topLeft, parentSize);
      } else {
        _this__u8e3s4.drawRect$default_5x4e2k_k$(veilColor.get_value_j01efc_k$().value_1);
      }
    }
  };
  function _set_lookaheadConstraintsAvailable__g4tuk0($this, _set____db54di) {
    $this.lookaheadConstraintsAvailable_1 = _set____db54di;
  }
  function _get_lookaheadConstraintsAvailable__6k3wx0($this) {
    return $this.lookaheadConstraintsAvailable_1;
  }
  function _set_lookaheadSize__8e6fb6($this, _set____db54di) {
    $this.lookaheadSize_1 = _set____db54di;
  }
  function _get_lookaheadSize__6tl376($this) {
    return $this.lookaheadSize_1;
  }
  function _set_lookaheadConstraints__uusx37($this, value) {
    $this.lookaheadConstraintsAvailable_1 = true;
    $this.lookaheadConstraints_1 = value;
  }
  function _get_lookaheadConstraints__gwq92v($this) {
    return $this.lookaheadConstraints_1;
  }
  function EnterExitTransitionModifierNode$sizeTransitionSpec$lambda(this$0) {
    return function (_this__u8e3s4) {
      var tmp;
      if (_this__u8e3s4.isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.enter_1.get_data_jntocg_k$().changeSize_1;
        tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animationSpec_1;
      } else if (_this__u8e3s4.isTransitioningTo_mjamuk_k$(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp1_safe_receiver = this$0.exit_1.get_data_jntocg_k$().changeSize_1;
        tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.animationSpec_1;
      } else {
        tmp = get_DefaultSizeAnimationSpec();
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? get_DefaultSizeAnimationSpec() : tmp2_elvis_lhs;
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.place$default_61faqz_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_0(this$0, $target) {
    return function (it) {
      return new IntSize(this$0.sizeByState_uhydwr_k$(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_1($this$animate) {
    return get_DefaultOffsetAnimationSpec();
  }
  function EnterExitTransitionModifierNode$measure$lambda_2(this$0, $target) {
    return function (it) {
      return new IntOffset(this$0.targetOffsetByState_8xbww4_k$(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_3(this$0, $target) {
    return function (it) {
      return new IntOffset(this$0.slideTargetValueByState_dfs3rb_k$(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_4($placeable, $offset, $offsetDelta, $layerBlock) {
    return function ($this$layout) {
      $this$layout.placeWithLayer_c7y141_k$($placeable, _IntOffset___get_x__impl__qiqr5o($offset) + _IntOffset___get_x__impl__qiqr5o($offsetDelta) | 0, _IntOffset___get_y__impl__2avpwj($offset) + _IntOffset___get_y__impl__2avpwj($offsetDelta) | 0, 0.0, $layerBlock);
      return Unit_getInstance();
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_5($$this$run) {
    return function ($this$layout) {
      $this$layout.place$default_61faqz_k$($$this$run, 0, 0);
      return Unit_getInstance();
    };
  }
  function EnterExitTransitionModifierNode$slideSpec$lambda(this$0) {
    return function (_this__u8e3s4) {
      var tmp;
      if (_this__u8e3s4.isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.enter_1.get_data_jntocg_k$().slide_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animationSpec_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultOffsetAnimationSpec() : tmp1_elvis_lhs;
      } else if (_this__u8e3s4.isTransitioningTo_mjamuk_k$(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = this$0.exit_1.get_data_jntocg_k$().slide_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.animationSpec_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultOffsetAnimationSpec() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultOffsetAnimationSpec();
      }
      return tmp;
    };
  }
  function EnterExitTransitionModifierNode(transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock) {
    LayoutModifierNodeWithPassThroughIntrinsics.call(this);
    this.transition_1 = transition;
    this.sizeAnimation_1 = sizeAnimation;
    this.offsetAnimation_1 = offsetAnimation;
    this.slideAnimation_1 = slideAnimation;
    this.enter_1 = enter;
    this.exit_1 = exit;
    this.isEnabled_1 = isEnabled;
    this.graphicsLayerBlock_1 = graphicsLayerBlock;
    this.lookaheadConstraintsAvailable_1 = false;
    this.lookaheadSize_1 = get_InvalidSize();
    this.lookaheadConstraints_1 = Constraints();
    this.currentAlignment_1 = null;
    var tmp = this;
    tmp.sizeTransitionSpec_1 = EnterExitTransitionModifierNode$sizeTransitionSpec$lambda(this);
    var tmp_0 = this;
    tmp_0.slideSpec_1 = EnterExitTransitionModifierNode$slideSpec$lambda(this);
  }
  protoOf(EnterExitTransitionModifierNode).set_transition_3a2emy_k$ = function (_set____db54di) {
    this.transition_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_transition_mcca1q_k$ = function () {
    return this.transition_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_sizeAnimation_d1qqsi_k$ = function (_set____db54di) {
    this.sizeAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_sizeAnimation_oj7fx6_k$ = function () {
    return this.sizeAnimation_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_offsetAnimation_sbtt4u_k$ = function (_set____db54di) {
    this.offsetAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_offsetAnimation_bqy8g8_k$ = function () {
    return this.offsetAnimation_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_slideAnimation_8zf29m_k$ = function (_set____db54di) {
    this.slideAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_slideAnimation_1jny1w_k$ = function () {
    return this.slideAnimation_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_enter_kk8oi8_k$ = function (_set____db54di) {
    this.enter_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_enter_iqxcq7_k$ = function () {
    return this.enter_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_exit_jz1ms6_k$ = function (_set____db54di) {
    this.exit_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_exit_wolopz_k$ = function () {
    return this.exit_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_isEnabled_9kb97j_k$ = function (_set____db54di) {
    this.isEnabled_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_isEnabled_roz1ma_k$ = function () {
    return this.isEnabled_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_graphicsLayerBlock_3ehvm4_k$ = function (_set____db54di) {
    this.graphicsLayerBlock_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_graphicsLayerBlock_45d73k_k$ = function () {
    return this.graphicsLayerBlock_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_currentAlignment_hwjxzb_k$ = function (_set____db54di) {
    this.currentAlignment_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_currentAlignment_1b8qb7_k$ = function () {
    return this.currentAlignment_1;
  };
  protoOf(EnterExitTransitionModifierNode).get_alignment_xa1jnq_k$ = function () {
    // Inline function 'kotlin.with' call
    var tmp;
    if (this.transition_1.get_segment_xwnoei_k$().isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
      var tmp0_safe_receiver = this.enter_1.get_data_jntocg_k$().changeSize_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.alignment_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp2_safe_receiver = this.exit_1.get_data_jntocg_k$().changeSize_1;
        tmp_0 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.alignment_1;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      var tmp3_safe_receiver = this.exit_1.get_data_jntocg_k$().changeSize_1;
      var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.alignment_1;
      var tmp_1;
      if (tmp4_elvis_lhs == null) {
        var tmp5_safe_receiver = this.enter_1.get_data_jntocg_k$().changeSize_1;
        tmp_1 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.alignment_1;
      } else {
        tmp_1 = tmp4_elvis_lhs;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).get_sizeTransitionSpec_sffkq_k$ = function () {
    return this.sizeTransitionSpec_1;
  };
  protoOf(EnterExitTransitionModifierNode).sizeByState_uhydwr_k$ = function (targetState, fullSize) {
    var tmp;
    switch (targetState.get_ordinal_ip24qg_k$()) {
      case 1:
        tmp = fullSize;
        break;
      case 0:
        var tmp1_safe_receiver = this.enter_1.get_data_jntocg_k$().changeSize_1;
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.size_1;
        var tmp_0;
        if (tmp2_safe_receiver == null) {
          tmp_0 = null;
        } else {
          var tmp_1 = tmp2_safe_receiver(new IntSize(fullSize));
          tmp_0 = tmp_1 == null ? null : tmp_1.packedValue_1;
        }

        var tmp3_elvis_lhs = tmp_0;
        var tmp_2;
        var tmp_3 = tmp3_elvis_lhs;
        if ((tmp_3 == null ? null : new IntSize(tmp_3)) == null) {
          tmp_2 = fullSize;
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }

        tmp = tmp_2;
        break;
      case 2:
        var tmp4_safe_receiver = this.exit_1.get_data_jntocg_k$().changeSize_1;
        var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.size_1;
        var tmp_4;
        if (tmp5_safe_receiver == null) {
          tmp_4 = null;
        } else {
          var tmp_5 = tmp5_safe_receiver(new IntSize(fullSize));
          tmp_4 = tmp_5 == null ? null : tmp_5.packedValue_1;
        }

        var tmp6_elvis_lhs = tmp_4;
        var tmp_6;
        var tmp_7 = tmp6_elvis_lhs;
        if ((tmp_7 == null ? null : new IntSize(tmp_7)) == null) {
          tmp_6 = fullSize;
        } else {
          tmp_6 = tmp6_elvis_lhs;
        }

        tmp = tmp_6;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).onAttach_juzy2c_k$ = function () {
    protoOf(LayoutModifierNodeWithPassThroughIntrinsics).onAttach_juzy2c_k$.call(this);
    this.lookaheadConstraintsAvailable_1 = false;
    this.lookaheadSize_1 = get_InvalidSize();
  };
  protoOf(EnterExitTransitionModifierNode).targetOffsetByState_8xbww4_k$ = function (targetState, fullSize) {
    var tmp;
    if (this.currentAlignment_1 == null) {
      tmp = Companion_getInstance_6().get_Zero_6hc3i8_k$();
    } else if (this.get_alignment_xa1jnq_k$() == null) {
      tmp = Companion_getInstance_6().get_Zero_6hc3i8_k$();
    } else if (equals(this.currentAlignment_1, this.get_alignment_xa1jnq_k$())) {
      tmp = Companion_getInstance_6().get_Zero_6hc3i8_k$();
    } else {
      var tmp_0;
      switch (targetState.get_ordinal_ip24qg_k$()) {
        case 1:
          tmp_0 = Companion_getInstance_6().get_Zero_6hc3i8_k$();
          break;
        case 0:
          tmp_0 = Companion_getInstance_6().get_Zero_6hc3i8_k$();
          break;
        case 2:
          var tmp1_safe_receiver = this.exit_1.get_data_jntocg_k$().changeSize_1;
          var tmp_1;
          if (tmp1_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            var endSize = tmp1_safe_receiver.size_1(new IntSize(fullSize)).packedValue_1;
            var targetOffset = ensureNotNull(this.get_alignment_xa1jnq_k$()).align_mb8mzc_k$(fullSize, endSize, LayoutDirection_Ltr_getInstance());
            var currentOffset = ensureNotNull(this.currentAlignment_1).align_mb8mzc_k$(fullSize, endSize, LayoutDirection_Ltr_getInstance());
            tmp_1 = IntOffset__minus_impl_4m69hb(targetOffset, currentOffset);
          }

          var tmp2_elvis_lhs = tmp_1;
          var tmp_2;
          var tmp_3 = tmp2_elvis_lhs;
          if ((tmp_3 == null ? null : new IntOffset(tmp_3)) == null) {
            tmp_2 = Companion_getInstance_6().get_Zero_6hc3i8_k$();
          } else {
            tmp_2 = tmp2_elvis_lhs;
          }

          tmp_0 = tmp_2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    if (this.transition_1.get_currentState_snihnl_k$().equals(this.transition_1.get_targetState_kri3mx_k$())) {
      this.currentAlignment_1 = null;
    } else if (this.currentAlignment_1 == null) {
      var tmp = this;
      var tmp0_elvis_lhs = this.get_alignment_xa1jnq_k$();
      tmp.currentAlignment_1 = tmp0_elvis_lhs == null ? Companion_getInstance_5().get_TopStart_o4x792_k$() : tmp0_elvis_lhs;
    }
    if (_this__u8e3s4.get_isLookingAhead_2057g1_k$()) {
      var placeable = measurable.measure_4dmfk1_k$(constraints);
      var tmp0 = placeable.get_width_j0q4yl_k$();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = placeable.get_height_e7t92o_k$();
      var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var measuredSize = _IntSize___init__impl__emcjft(tmp$ret$0);
      this.lookaheadSize_1 = measuredSize;
      _set_lookaheadConstraints__uusx37(this, constraints);
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(measuredSize);
      var tmp_0 = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(measuredSize);
      var tmp_1 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      return _this__u8e3s4.layout$default_n19e5l_k$(tmp_0, tmp_1, VOID, EnterExitTransitionModifierNode$measure$lambda(placeable));
    } else if (this.isEnabled_1()) {
      var layerBlock = this.graphicsLayerBlock_1.init_1xdsg_k$();
      var placeable_0 = measurable.measure_4dmfk1_k$(constraints);
      var tmp0_0 = placeable_0.get_width_j0q4yl_k$();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2_0 = placeable_0.get_height_e7t92o_k$();
      var tmp$ret$6 = bitwiseOr(shiftLeft(fromInt(tmp0_0), 32), bitwiseAnd(fromInt(val2_0), new Long(-1, 0)));
      var measuredSize_0 = _IntSize___init__impl__emcjft(tmp$ret$6);
      var target = get_isValid(this.lookaheadSize_1) ? this.lookaheadSize_1 : measuredSize_0;
      var tmp1_safe_receiver = this.sizeAnimation_1;
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        tmp_2 = tmp1_safe_receiver.animate_lt3uhv_k$(this.sizeTransitionSpec_1, EnterExitTransitionModifierNode$measure$lambda_0(this, target));
      }
      var animSize = tmp_2;
      var tmp_3;
      if (animSize == null) {
        tmp_3 = null;
      } else {
        var tmp_4 = animSize.get_value_j01efc_k$();
        tmp_3 = tmp_4 == null ? null : tmp_4.packedValue_1;
      }
      var tmp3_elvis_lhs = tmp_3;
      var tmp_5;
      var tmp_6 = tmp3_elvis_lhs;
      if ((tmp_6 == null ? null : new IntSize(tmp_6)) == null) {
        tmp_5 = measuredSize_0;
      } else {
        tmp_5 = tmp3_elvis_lhs;
      }
      var currentSize = constrain(constraints, tmp_5);
      var tmp4_safe_receiver = this.offsetAnimation_1;
      var tmp_7;
      if (tmp4_safe_receiver == null) {
        tmp_7 = null;
      } else {
        var tmp_8 = EnterExitTransitionModifierNode$measure$lambda_1;
        tmp_7 = tmp4_safe_receiver.animate_lt3uhv_k$(tmp_8, EnterExitTransitionModifierNode$measure$lambda_2(this, target));
      }
      var tmp5_safe_receiver = tmp_7;
      var tmp_9;
      if (tmp5_safe_receiver == null) {
        tmp_9 = null;
      } else {
        var tmp_10 = tmp5_safe_receiver.get_value_j01efc_k$();
        tmp_9 = tmp_10 == null ? null : tmp_10.packedValue_1;
      }
      var tmp6_elvis_lhs = tmp_9;
      var tmp_11;
      var tmp_12 = tmp6_elvis_lhs;
      if ((tmp_12 == null ? null : new IntOffset(tmp_12)) == null) {
        tmp_11 = Companion_getInstance_6().get_Zero_6hc3i8_k$();
      } else {
        tmp_11 = tmp6_elvis_lhs;
      }
      var offsetDelta = tmp_11;
      var tmp7_safe_receiver = this.slideAnimation_1;
      var tmp_13;
      if (tmp7_safe_receiver == null) {
        tmp_13 = null;
      } else {
        tmp_13 = tmp7_safe_receiver.animate_lt3uhv_k$(this.slideSpec_1, EnterExitTransitionModifierNode$measure$lambda_3(this, target));
      }
      var tmp8_safe_receiver = tmp_13;
      var tmp_14;
      if (tmp8_safe_receiver == null) {
        tmp_14 = null;
      } else {
        var tmp_15 = tmp8_safe_receiver.get_value_j01efc_k$();
        tmp_14 = tmp_15 == null ? null : tmp_15.packedValue_1;
      }
      var tmp9_elvis_lhs = tmp_14;
      var tmp_16;
      var tmp_17 = tmp9_elvis_lhs;
      if ((tmp_17 == null ? null : new IntOffset(tmp_17)) == null) {
        tmp_16 = Companion_getInstance_6().get_Zero_6hc3i8_k$();
      } else {
        tmp_16 = tmp9_elvis_lhs;
      }
      var slideOffset = tmp_16;
      var tmp10_safe_receiver = this.currentAlignment_1;
      var tmp11_elvis_lhs = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.align_mb8mzc_k$(target, currentSize, LayoutDirection_Ltr_getInstance());
      var tmp_18;
      var tmp_19 = tmp11_elvis_lhs;
      if ((tmp_19 == null ? null : new IntOffset(tmp_19)) == null) {
        tmp_18 = Companion_getInstance_6().get_Zero_6hc3i8_k$();
      } else {
        tmp_18 = tmp11_elvis_lhs;
      }
      var offset = IntOffset__plus_impl_nqoa9b(tmp_18, slideOffset);
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value_1 = _IntSize___get_packedValue__impl__uho7jf(currentSize);
      var tmp_20 = convertToInt(shiftRight(value_1, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_2 = _IntSize___get_packedValue__impl__uho7jf(currentSize);
      var tmp_21 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      return _this__u8e3s4.layout$default_n19e5l_k$(tmp_20, tmp_21, VOID, EnterExitTransitionModifierNode$measure$lambda_4(placeable_0, offset, offsetDelta, layerBlock));
    } else {
      // Inline function 'kotlin.run' call
      var $this$run = measurable.measure_4dmfk1_k$(constraints);
      var tmp_22 = $this$run.get_width_j0q4yl_k$();
      var tmp_23 = $this$run.get_height_e7t92o_k$();
      return _this__u8e3s4.layout$default_n19e5l_k$(tmp_22, tmp_23, VOID, EnterExitTransitionModifierNode$measure$lambda_5($this$run));
    }
  };
  protoOf(EnterExitTransitionModifierNode).get_slideSpec_4nowbh_k$ = function () {
    return this.slideSpec_1;
  };
  protoOf(EnterExitTransitionModifierNode).slideTargetValueByState_dfs3rb_k$ = function (targetState, fullSize) {
    var tmp0_safe_receiver = this.enter_1.get_data_jntocg_k$().slide_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.slideOffset_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp_0 = tmp1_safe_receiver(new IntSize(fullSize));
      tmp = tmp_0 == null ? null : tmp_0.packedValue_1;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_1;
    var tmp_2 = tmp2_elvis_lhs;
    if ((tmp_2 == null ? null : new IntOffset(tmp_2)) == null) {
      tmp_1 = Companion_getInstance_6().get_Zero_6hc3i8_k$();
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var preEnter = tmp_1;
    var tmp3_safe_receiver = this.exit_1.get_data_jntocg_k$().slide_1;
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.slideOffset_1;
    var tmp_3;
    if (tmp4_safe_receiver == null) {
      tmp_3 = null;
    } else {
      var tmp_4 = tmp4_safe_receiver(new IntSize(fullSize));
      tmp_3 = tmp_4 == null ? null : tmp_4.packedValue_1;
    }
    var tmp5_elvis_lhs = tmp_3;
    var tmp_5;
    var tmp_6 = tmp5_elvis_lhs;
    if ((tmp_6 == null ? null : new IntOffset(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_6().get_Zero_6hc3i8_k$();
    } else {
      tmp_5 = tmp5_elvis_lhs;
    }
    var postExit = tmp_5;
    var tmp_7;
    switch (targetState.get_ordinal_ip24qg_k$()) {
      case 1:
        tmp_7 = Companion_getInstance_6().get_Zero_6hc3i8_k$();
        break;
      case 0:
        tmp_7 = preEnter;
        break;
      case 2:
        tmp_7 = postExit;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_7;
  };
  function sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).init_1xdsg_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, GraphicsLayerBlockForEnterExit) : false) {
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
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function TransformOriginVectorConverter$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new AnimationVector2D(_TransformOrigin___get_pivotFractionX__impl__a9pmci(it.packedValue_1), _TransformOrigin___get_pivotFractionY__impl__ijwupp(it.packedValue_1));
  }
  function TransformOriginVectorConverter$lambda_0(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new TransformOrigin(TransformOrigin_0(it.get_v1_kntnng_k$(), it.get_v2_kntnnf_k$()));
  }
  function expandHorizontally$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function expandHorizontally$lambda_0($initialWidth) {
    return function (it) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var tmp$ret$1 = convertToInt(shiftRight(value, 32));
      var tmp0 = $initialWidth(tmp$ret$1);
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_1 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var tmp$ret$4 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$5 = _IntSize___init__impl__emcjft(tmp$ret$4);
      return new IntSize(tmp$ret$5);
    };
  }
  function expandVertically$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function expandVertically$lambda_0($initialHeight) {
    return function (it) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var tmp0 = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_1 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
      var tmp$ret$3 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = $initialHeight(tmp$ret$3);
      var tmp$ret$4 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$5 = _IntSize___init__impl__emcjft(tmp$ret$4);
      return new IntSize(tmp$ret$5);
    };
  }
  function shrinkHorizontally$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function shrinkHorizontally$lambda_0($targetWidth) {
    return function (it) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var tmp$ret$1 = convertToInt(shiftRight(value, 32));
      var tmp0 = $targetWidth(tmp$ret$1);
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_1 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var tmp$ret$4 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$5 = _IntSize___init__impl__emcjft(tmp$ret$4);
      return new IntSize(tmp$ret$5);
    };
  }
  function shrinkVertically$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function shrinkVertically$lambda_0($targetHeight) {
    return function (it) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var tmp0 = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_1 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
      var tmp$ret$3 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = $targetHeight(tmp$ret$3);
      var tmp$ret$4 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$5 = _IntSize___init__impl__emcjft(tmp$ret$4);
      return new IntSize(tmp$ret$5);
    };
  }
  function createModifier$lambda() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return true;
  }
  function createModifier$lambda_0($disableClip, $isEnabled) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.set_clip_a88iug_k$(!$disableClip && $isEnabled._v());
      return Unit_getInstance();
    };
  }
  function expandIn$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(0), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
    var tmp$ret$1 = _IntSize___init__impl__emcjft(tmp$ret$0);
    return new IntSize(tmp$ret$1);
  }
  function shrinkOut$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(0), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
    var tmp$ret$1 = _IntSize___init__impl__emcjft(tmp$ret$0);
    return new IntSize(tmp$ret$1);
  }
  function trackActiveEnter$lambda($activeEnter$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('activeEnter', KMutableProperty0, true);
    return $activeEnter$delegate.get_value_j01efc_k$();
  }
  function trackActiveEnter$lambda_0($activeEnter$delegate, _set____db54di) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('activeEnter', KMutableProperty0, true);
    $activeEnter$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function trackActiveExit$lambda($activeExit$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('activeExit', KMutableProperty0, true);
    return $activeExit$delegate.get_value_j01efc_k$();
  }
  function trackActiveExit$lambda_0($activeExit$delegate, _set____db54di) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('activeExit', KMutableProperty0, true);
    $activeExit$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function createGraphicsLayerBlock$lambda$lambda($enter, $exit) {
    return function ($this$animate) {
      var tmp;
      if ($this$animate.isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = $enter.get_data_jntocg_k$().fade_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animationSpec_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp1_elvis_lhs;
      } else if ($this$animate.isTransitioningTo_mjamuk_k$(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = $exit.get_data_jntocg_k$().fade_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.animationSpec_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultAlphaAndScaleSpring();
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_0($enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.get_ordinal_ip24qg_k$()) {
        case 1:
          tmp = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.get_data_jntocg_k$().fade_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.alpha_1;
          tmp = tmp2_elvis_lhs == null ? 1.0 : tmp2_elvis_lhs;
          break;
        case 2:
          var tmp3_safe_receiver = $exit.get_data_jntocg_k$().fade_1;
          var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.alpha_1;
          tmp = tmp4_elvis_lhs == null ? 1.0 : tmp4_elvis_lhs;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_1($enter, $exit) {
    return function ($this$animate) {
      var tmp;
      if ($this$animate.isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animationSpec_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp1_elvis_lhs;
      } else if ($this$animate.isTransitioningTo_mjamuk_k$(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.animationSpec_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultAlphaAndScaleSpring();
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_2($enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.get_ordinal_ip24qg_k$()) {
        case 1:
          tmp = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.scale_1;
          tmp = tmp2_elvis_lhs == null ? 1.0 : tmp2_elvis_lhs;
          break;
        case 2:
          var tmp3_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
          var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.scale_1;
          tmp = tmp4_elvis_lhs == null ? 1.0 : tmp4_elvis_lhs;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_3($this$animate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return spring();
  }
  function createGraphicsLayerBlock$lambda$lambda_4($transformOriginWhenVisible, $enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.get_ordinal_ip24qg_k$()) {
        case 1:
          tmp = $transformOriginWhenVisible;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.transformOrigin_1;
          var tmp_0;
          var tmp_1 = tmp2_elvis_lhs;
          if ((tmp_1 == null ? null : new TransformOrigin(tmp_1)) == null) {
            var tmp3_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
            tmp_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.transformOrigin_1;
          } else {
            tmp_0 = tmp2_elvis_lhs;
          }

          tmp = tmp_0;
          break;
        case 2:
          var tmp4_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
          var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.transformOrigin_1;
          var tmp_2;
          var tmp_3 = tmp5_elvis_lhs;
          if ((tmp_3 == null ? null : new TransformOrigin(tmp_3)) == null) {
            var tmp6_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
            tmp_2 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.transformOrigin_1;
          } else {
            tmp_2 = tmp5_elvis_lhs;
          }

          tmp = tmp_2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp7_elvis_lhs = tmp;
      var tmp_4;
      var tmp_5 = tmp7_elvis_lhs;
      if ((tmp_5 == null ? null : new TransformOrigin(tmp_5)) == null) {
        tmp_4 = Companion_getInstance_9().get_Center_bvqaiy_k$();
      } else {
        tmp_4 = tmp7_elvis_lhs;
      }
      return new TransformOrigin(tmp_4);
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_5($alpha, $scale, $transformOrigin) {
    return function (_this__u8e3s4) {
      var tmp0_safe_receiver = $alpha;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_value_j01efc_k$();
      _this__u8e3s4.set_alpha_tvzcqh_k$(tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs);
      var tmp2_safe_receiver = $scale;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_value_j01efc_k$();
      _this__u8e3s4.set_scaleX_ykjjzx_k$(tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs);
      var tmp4_safe_receiver = $scale;
      var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.get_value_j01efc_k$();
      _this__u8e3s4.set_scaleY_i4eqp0_k$(tmp5_elvis_lhs == null ? 1.0 : tmp5_elvis_lhs);
      var tmp6_safe_receiver = $transformOrigin;
      var tmp;
      if (tmp6_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = tmp6_safe_receiver.get_value_j01efc_k$();
        tmp = tmp_0 == null ? null : tmp_0.packedValue_1;
      }
      var tmp7_elvis_lhs = tmp;
      var tmp_1;
      var tmp_2 = tmp7_elvis_lhs;
      if ((tmp_2 == null ? null : new TransformOrigin(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_9().get_Center_bvqaiy_k$();
      } else {
        tmp_1 = tmp7_elvis_lhs;
      }
      _this__u8e3s4.set_transformOrigin_wfji5_k$(tmp_1);
      return Unit_getInstance();
    };
  }
  function createGraphicsLayerBlock$lambda($alphaAnimation, $scaleAnimation, $this_createGraphicsLayerBlock, $enter, $exit, $transformOriginAnimation) {
    return function () {
      var tmp0_safe_receiver = $alphaAnimation;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = createGraphicsLayerBlock$lambda$lambda($enter, $exit);
        tmp = tmp0_safe_receiver.animate_lt3uhv_k$(tmp_0, createGraphicsLayerBlock$lambda$lambda_0($enter, $exit));
      }
      var alpha = tmp;
      var tmp1_safe_receiver = $scaleAnimation;
      var tmp_1;
      if (tmp1_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp_2 = createGraphicsLayerBlock$lambda$lambda_1($enter, $exit);
        tmp_1 = tmp1_safe_receiver.animate_lt3uhv_k$(tmp_2, createGraphicsLayerBlock$lambda$lambda_2($enter, $exit));
      }
      var scale = tmp_1;
      var tmp_3;
      if ($this_createGraphicsLayerBlock.get_currentState_snihnl_k$().equals(EnterExitState_PreEnter_getInstance())) {
        var tmp2_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.transformOrigin_1;
        var tmp_4;
        var tmp_5 = tmp3_elvis_lhs;
        if ((tmp_5 == null ? null : new TransformOrigin(tmp_5)) == null) {
          var tmp4_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
          tmp_4 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.transformOrigin_1;
        } else {
          tmp_4 = tmp3_elvis_lhs;
        }
        tmp_3 = tmp_4;
      } else {
        var tmp5_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
        var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.transformOrigin_1;
        var tmp_6;
        var tmp_7 = tmp6_elvis_lhs;
        if ((tmp_7 == null ? null : new TransformOrigin(tmp_7)) == null) {
          var tmp7_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
          tmp_6 = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.transformOrigin_1;
        } else {
          tmp_6 = tmp6_elvis_lhs;
        }
        tmp_3 = tmp_6;
      }
      var transformOriginWhenVisible = tmp_3;
      var tmp8_safe_receiver = $transformOriginAnimation;
      var tmp_8;
      if (tmp8_safe_receiver == null) {
        tmp_8 = null;
      } else {
        var tmp_9 = createGraphicsLayerBlock$lambda$lambda_3;
        tmp_8 = tmp8_safe_receiver.animate_lt3uhv_k$(tmp_9, createGraphicsLayerBlock$lambda$lambda_4(transformOriginWhenVisible, $enter, $exit));
      }
      var transformOrigin = tmp_8;
      var block = createGraphicsLayerBlock$lambda$lambda_5(alpha, scale, transformOrigin);
      return block;
    };
  }
  var properties_initialized_EnterExitTransition_kt_te1nvp;
  function _init_properties_EnterExitTransition_kt__2obrqf() {
    if (!properties_initialized_EnterExitTransition_kt_te1nvp) {
      properties_initialized_EnterExitTransition_kt_te1nvp = true;
      var tmp = TransformOriginVectorConverter$lambda;
      TransformOriginVectorConverter = TwoWayConverter(tmp, TransformOriginVectorConverter$lambda_0);
      DefaultAlphaAndScaleSpring = spring(VOID, 400.0);
      DefaultColorAnimationSpec = spring(VOID, 400.0);
      DefaultOffsetAnimationSpec = spring(VOID, 400.0, new IntOffset(get_VisibilityThreshold_1(Companion_getInstance_6())));
      DefaultSizeAnimationSpec = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold_0(Companion_getInstance_3())));
      androidx_compose_animation_EnterTransition$stable = 0;
      androidx_compose_animation_ExitTransition$stable = 0;
      androidx_compose_animation_TransitionEffect$stable = 0;
      androidx_compose_animation_ContentScaleTransitionEffect$stable = 0;
      androidx_compose_animation_Fade$stable = 0;
      androidx_compose_animation_Slide$stable = 0;
      androidx_compose_animation_ChangeSize$stable = 0;
      androidx_compose_animation_Scale$stable = 0;
      androidx_compose_animation_Veil$stable = 0;
      androidx_compose_animation_TransitionData$stable = 0;
    }
  }
  function get_DecelerationRate() {
    _init_properties_FlingCalculator_kt__ornu7o();
    return DecelerationRate;
  }
  var DecelerationRate;
  var androidx_compose_animation_FlingCalculator_FlingInfo$stable;
  var androidx_compose_animation_FlingCalculator$stable;
  function _get_friction__4dx5ox($this) {
    return $this.friction_1;
  }
  function _get_magicPhysicalCoefficient__7ixkai($this) {
    return $this.magicPhysicalCoefficient_1;
  }
  function computeDeceleration($this, density) {
    return computeDeceleration_0(0.84, density.get_density_qy0267_k$());
  }
  function getSplineDeceleration($this, velocity) {
    return AndroidFlingSpline_getInstance().deceleration_7lhbmp_k$(velocity, $this.friction_1 * $this.magicPhysicalCoefficient_1);
  }
  function FlingInfo(initialVelocity, distance, duration) {
    this.initialVelocity_1 = initialVelocity;
    this.distance_1 = distance;
    this.duration_1 = duration;
  }
  protoOf(FlingInfo).get_initialVelocity_xnobx4_k$ = function () {
    return this.initialVelocity_1;
  };
  protoOf(FlingInfo).get_distance_r171oi_k$ = function () {
    return this.distance_1;
  };
  protoOf(FlingInfo).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(FlingInfo).position_oaxlut_k$ = function (time) {
    var tmp;
    if (compare(this.duration_1, new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.div' call
      var other = toNumber(this.duration_1);
      tmp = toNumber(time) / other;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    // Inline function 'kotlin.math.sign' call
    var x = this.initialVelocity_1;
    var tmp$ret$1 = sign(x);
    return this.distance_1 * tmp$ret$1 * AndroidFlingSpline_getInstance().flingPosition_kqyylv_k$(splinePos).get_distanceCoefficient_3vhbop_k$();
  };
  protoOf(FlingInfo).velocity_2zfv01_k$ = function (time) {
    var tmp;
    if (compare(this.duration_1, new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.div' call
      var other = toNumber(this.duration_1);
      tmp = toNumber(time) / other;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    var tmp_0 = AndroidFlingSpline_getInstance().flingPosition_kqyylv_k$(splinePos).get_velocityCoefficient_w8qjlb_k$();
    // Inline function 'kotlin.math.sign' call
    var x = this.initialVelocity_1;
    return tmp_0 * sign(x) * this.distance_1 / toNumber(this.duration_1) * 1000.0;
  };
  protoOf(FlingInfo).component1_7eebsc_k$ = function () {
    return this.initialVelocity_1;
  };
  protoOf(FlingInfo).component2_7eebsb_k$ = function () {
    return this.distance_1;
  };
  protoOf(FlingInfo).component3_7eebsa_k$ = function () {
    return this.duration_1;
  };
  protoOf(FlingInfo).copy_g5ll21_k$ = function (initialVelocity, distance, duration) {
    return new FlingInfo(initialVelocity, distance, duration);
  };
  protoOf(FlingInfo).copy$default_w0uq4e_k$ = function (initialVelocity, distance, duration, $super) {
    initialVelocity = initialVelocity === VOID ? this.initialVelocity_1 : initialVelocity;
    distance = distance === VOID ? this.distance_1 : distance;
    duration = duration === VOID ? this.duration_1 : duration;
    return $super === VOID ? this.copy_g5ll21_k$(initialVelocity, distance, duration) : $super.copy_g5ll21_k$.call(this, initialVelocity, distance, duration);
  };
  protoOf(FlingInfo).toString = function () {
    return 'FlingInfo(initialVelocity=' + this.initialVelocity_1 + ', distance=' + this.distance_1 + ', duration=' + this.duration_1.toString() + ')';
  };
  protoOf(FlingInfo).hashCode = function () {
    var result = getNumberHashCode(this.initialVelocity_1);
    result = imul(result, 31) + getNumberHashCode(this.distance_1) | 0;
    result = imul(result, 31) + this.duration_1.hashCode() | 0;
    return result;
  };
  protoOf(FlingInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingInfo))
      return false;
    if (!equals(this.initialVelocity_1, other.initialVelocity_1))
      return false;
    if (!equals(this.distance_1, other.distance_1))
      return false;
    if (!equalsLong(this.duration_1, other.duration_1))
      return false;
    return true;
  };
  function FlingCalculator(friction, density) {
    this.friction_1 = friction;
    this.density_1 = density;
    this.magicPhysicalCoefficient_1 = computeDeceleration(this, this.density_1);
  }
  protoOf(FlingCalculator).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(FlingCalculator).flingDuration_g3t3l4_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    // Inline function 'kotlin.math.exp' call
    var x = l / decelMinusOne;
    var tmp$ret$0 = Math.exp(x);
    return numberToLong(1000.0 * tmp$ret$0);
  };
  protoOf(FlingCalculator).flingDistance_e8js0p_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.friction_1 * this.magicPhysicalCoefficient_1;
    // Inline function 'kotlin.math.exp' call
    var x = get_DecelerationRate() / decelMinusOne * l;
    return tmp * Math.exp(x);
  };
  protoOf(FlingCalculator).flingInfo_sr0d1q_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.friction_1 * this.magicPhysicalCoefficient_1;
    // Inline function 'kotlin.math.exp' call
    var x = get_DecelerationRate() / decelMinusOne * l;
    var tmp_0 = tmp * Math.exp(x);
    // Inline function 'kotlin.math.exp' call
    var x_0 = l / decelMinusOne;
    var tmp$ret$1 = Math.exp(x_0);
    return new FlingInfo(velocity, tmp_0, numberToLong(1000.0 * tmp$ret$1));
  };
  function computeDeceleration_0(friction, density) {
    _init_properties_FlingCalculator_kt__ornu7o();
    return 9.80665 * 39.37 * density * 160.0 * friction;
  }
  var properties_initialized_FlingCalculator_kt_aw7aky;
  function _init_properties_FlingCalculator_kt__ornu7o() {
    if (!properties_initialized_FlingCalculator_kt_aw7aky) {
      properties_initialized_FlingCalculator_kt_aw7aky = true;
      // Inline function 'kotlin.math.ln' call
      var tmp = Math.log(0.78);
      // Inline function 'kotlin.math.ln' call
      DecelerationRate = tmp / Math.log(0.9);
      androidx_compose_animation_FlingCalculator_FlingInfo$stable = 0;
      androidx_compose_animation_FlingCalculator$stable = 0;
    }
  }
  var androidx_compose_animation_RenderInTransitionOverlayNodeElement$stable;
  var androidx_compose_animation_RenderInTransitionOverlayNode$stable;
  function RenderInTransitionOverlayNodeElement(sharedTransitionScope, renderInOverlay, zIndexInOverlay) {
    ModifierNodeElement.call(this);
    this.sharedTransitionScope_1 = sharedTransitionScope;
    this.renderInOverlay_1 = renderInOverlay;
    this.zIndexInOverlay_1 = zIndexInOverlay;
  }
  protoOf(RenderInTransitionOverlayNodeElement).set_sharedTransitionScope_jrj0tv_k$ = function (_set____db54di) {
    this.sharedTransitionScope_1 = _set____db54di;
  };
  protoOf(RenderInTransitionOverlayNodeElement).get_sharedTransitionScope_rd4vgv_k$ = function () {
    return this.sharedTransitionScope_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).set_renderInOverlay_apxsrl_k$ = function (_set____db54di) {
    this.renderInOverlay_1 = _set____db54di;
  };
  protoOf(RenderInTransitionOverlayNodeElement).get_renderInOverlay_hmdu9g_k$ = function () {
    return this.renderInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).get_zIndexInOverlay_tqowly_k$ = function () {
    return this.zIndexInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).create_md4cuc_k$ = function () {
    return new RenderInTransitionOverlayNode(this.sharedTransitionScope_1, this.renderInOverlay_1, this.zIndexInOverlay_1);
  };
  protoOf(RenderInTransitionOverlayNodeElement).update_v1wnug_k$ = function (node) {
    node.sharedScope_1 = this.sharedTransitionScope_1;
    node.renderInOverlay_1 = this.renderInOverlay_1;
    node.set_zIndexInOverlay_d3b21a_k$(this.zIndexInOverlay_1);
  };
  protoOf(RenderInTransitionOverlayNodeElement).update_9wd57p_k$ = function (node) {
    return this.update_v1wnug_k$(node instanceof RenderInTransitionOverlayNode ? node : THROW_CCE());
  };
  protoOf(RenderInTransitionOverlayNodeElement).hashCode = function () {
    return imul(imul(hashCode(this.sharedTransitionScope_1), 31) + hashCode(this.renderInOverlay_1) | 0, 31) + getNumberHashCode(this.zIndexInOverlay_1) | 0;
  };
  protoOf(RenderInTransitionOverlayNodeElement).equals = function (other) {
    if (other instanceof RenderInTransitionOverlayNodeElement) {
      return equals(this.sharedTransitionScope_1, other.sharedTransitionScope_1) && this.renderInOverlay_1 === other.renderInOverlay_1 && this.zIndexInOverlay_1 === other.zIndexInOverlay_1;
    }
    return false;
  };
  protoOf(RenderInTransitionOverlayNodeElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('renderInSharedTransitionOverlay');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('sharedTransitionScope', this.sharedTransitionScope_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('renderInOverlay', this.renderInOverlay_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('zIndexInOverlay', this.zIndexInOverlay_1);
  };
  function _set_enabled__gwlwmc($this, value) {
    if (!(value === $this.enabled_1)) {
      var tmp0_safe_receiver = $this.sharedScope_1.get_invalidateOverlay_sqmoz0_k$();
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver();
      invalidateDraw($this);
      $this.enabled_1 = value;
    }
  }
  function _get_enabled__8pmdqo($this) {
    return $this.enabled_1;
  }
  function _set_positionInOverlay__3s8f5v($this, value) {
    if (!equals(value, $this.positionInOverlay_1)) {
      var tmp0_safe_receiver = $this.sharedScope_1.get_invalidateOverlay_sqmoz0_k$();
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver();
      invalidateDraw($this);
      $this.positionInOverlay_1 = value;
    }
  }
  function _get_positionInOverlay__hxkh4h($this) {
    return $this.positionInOverlay_1;
  }
  function LayerWithRenderer($outer, layer) {
    this.$this_1 = $outer;
    this.layer_1 = layer;
  }
  protoOf(LayerWithRenderer).get_layer_iujprc_k$ = function () {
    return this.layer_1;
  };
  protoOf(LayerWithRenderer).get_parentState_ui10gu_k$ = function () {
    return this.$this_1.get_parentState_ui10gu_k$();
  };
  protoOf(LayerWithRenderer).get_zIndex_mbbc75_k$ = function () {
    return this.$this_1.get_zIndexInOverlay_tqowly_k$();
  };
  protoOf(LayerWithRenderer).drawInOverlay_ircoes_k$ = function (drawScope) {
    if (this.$this_1.enabled_1) {
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_0 = this.$this_1.positionInOverlay_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp2 = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_1 = this.$this_1.positionInOverlay_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
      var top = floatFromBits(bits_0);
      drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(tmp2, top);
      try {
        drawLayer(drawScope, this.layer_1);
      }finally {
        drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-tmp2, -top);
      }
    }
  };
  function _set_layerWithRenderer__a4xuol($this, _set____db54di) {
    $this.layerWithRenderer_1 = _set____db54di;
  }
  function _get_layerWithRenderer__vuqqyx($this) {
    return $this.layerWithRenderer_1;
  }
  function RenderInTransitionOverlayNode$_get_zIndexInOverlay_$ref_26fn2j() {
    return function (p0) {
      return p0.get_zIndexInOverlay_tqowly_k$();
    };
  }
  function RenderInTransitionOverlayNode$_set_zIndexInOverlay_$ref_b4altt() {
    return function (p0, p1) {
      p0.set_zIndexInOverlay_d3b21a_k$(p1);
      return Unit_getInstance();
    };
  }
  function RenderInTransitionOverlayNode$_get_zIndexInOverlay_$ref_26fn2j_0() {
    return function (p0) {
      return p0.get_zIndexInOverlay_tqowly_k$();
    };
  }
  function RenderInTransitionOverlayNode$_set_zIndexInOverlay_$ref_b4altt_0() {
    return function (p0, p1) {
      p0.set_zIndexInOverlay_d3b21a_k$(p1);
      return Unit_getInstance();
    };
  }
  function RenderInTransitionOverlayNode$measure$lambda($this_measure, this$0, $$this$run) {
    return function ($this$layout) {
      var tmp;
      if (!$this_measure.get_isLookingAhead_2057g1_k$()) {
        if (this$0.renderInOverlay_1()) {
          if ($this$layout.get_coordinates_q6f2pa_k$() == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            _set_enabled__gwlwmc(this$0, true);
            _set_positionInOverlay__3s8f5v(this$0, this$0.sharedScope_1.get_root_4w1woo_k$().localPositionOf_hrey0l_k$(requireLayoutCoordinates(this$0), Companion_getInstance_4().get_Zero_k6n73t_k$()));
          }
        } else {
          _set_enabled__gwlwmc(this$0, false);
        }
        tmp = Unit_getInstance();
      }
      $this$layout.place$default_61faqz_k$($$this$run, 0, 0);
      return Unit_getInstance();
    };
  }
  function RenderInTransitionOverlayNode$draw$lambda($this_draw) {
    return function ($this$record) {
      $this_draw.drawContent_m0wwjp_k$();
      return Unit_getInstance();
    };
  }
  function RenderInTransitionOverlayNode(sharedScope, renderInOverlay, zIndexInOverlay) {
    Node.call(this);
    this.sharedScope_1 = sharedScope;
    this.renderInOverlay_1 = renderInOverlay;
    this.zIndexInOverlay$delegate_1 = mutableFloatStateOf(zIndexInOverlay);
    this.enabled_1 = false;
    this.positionInOverlay_1 = Companion_getInstance_4().get_Zero_k6n73t_k$();
    this.layerWithRenderer_1 = null;
  }
  protoOf(RenderInTransitionOverlayNode).set_sharedScope_5efco2_k$ = function (_set____db54di) {
    this.sharedScope_1 = _set____db54di;
  };
  protoOf(RenderInTransitionOverlayNode).get_sharedScope_mhvhxi_k$ = function () {
    return this.sharedScope_1;
  };
  protoOf(RenderInTransitionOverlayNode).set_renderInOverlay_apxsrl_k$ = function (_set____db54di) {
    this.renderInOverlay_1 = _set____db54di;
  };
  protoOf(RenderInTransitionOverlayNode).get_renderInOverlay_hmdu9g_k$ = function () {
    return this.renderInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNode).set_zIndexInOverlay_d3b21a_k$ = function (_set____db54di) {
    var tmp0 = this.zIndexInOverlay$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = RenderInTransitionOverlayNode$_get_zIndexInOverlay_$ref_26fn2j_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('zIndexInOverlay', 1, tmp, tmp_0, RenderInTransitionOverlayNode$_set_zIndexInOverlay_$ref_b4altt_0());
    tmp0.set_floatValue_qaujgq_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(RenderInTransitionOverlayNode).get_zIndexInOverlay_tqowly_k$ = function () {
    var tmp0 = this.zIndexInOverlay$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = RenderInTransitionOverlayNode$_get_zIndexInOverlay_$ref_26fn2j();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('zIndexInOverlay', 1, tmp, tmp_0, RenderInTransitionOverlayNode$_set_zIndexInOverlay_$ref_b4altt());
    return tmp0.get_floatValue_xw60ou_k$();
  };
  protoOf(RenderInTransitionOverlayNode).get_parentState_ui10gu_k$ = function () {
    return this.get_current_2exe6q_k$(get_ModifierLocalSharedElementInternalState());
  };
  protoOf(RenderInTransitionOverlayNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.run' call
    var $this$run = measurable.measure_4dmfk1_k$(constraints);
    var tmp = $this$run.get_width_j0q4yl_k$();
    var tmp_0 = $this$run.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, RenderInTransitionOverlayNode$measure$lambda(_this__u8e3s4, this, $this$run));
  };
  protoOf(RenderInTransitionOverlayNode).draw_2h95cs_k$ = function (_this__u8e3s4) {
    var tmp0 = this.get_layer_iujprc_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Error: layer never initialized';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var layer = tmp$ret$1;
    _this__u8e3s4.record$default_m64s38_k$(layer, VOID, RenderInTransitionOverlayNode$draw$lambda(_this__u8e3s4));
    if (!this.enabled_1) {
      drawLayer(_this__u8e3s4, layer);
    }
  };
  protoOf(RenderInTransitionOverlayNode).get_layer_iujprc_k$ = function () {
    var tmp0_safe_receiver = this.layerWithRenderer_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.layer_1;
  };
  protoOf(RenderInTransitionOverlayNode).onAttach_juzy2c_k$ = function () {
    // Inline function 'kotlin.let' call
    var it = new LayerWithRenderer(this, requireGraphicsContext(this).createGraphicsLayer_a0ja3u_k$());
    this.sharedScope_1.onLayerRendererCreated_lwx1jm_k$(it);
    this.layerWithRenderer_1 = it;
  };
  protoOf(RenderInTransitionOverlayNode).onDetach_8dig02_k$ = function () {
    var tmp0_safe_receiver = this.layerWithRenderer_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.sharedScope_1.onLayerRendererRemoved_bn3slm_k$(tmp0_safe_receiver);
      requireGraphicsContext(this).releaseGraphicsLayer_8n1d07_k$(tmp0_safe_receiver.layer_1);
    }
  };
  function get_ModifierLocalSharedElementInternalState() {
    _init_properties_SharedContentNode_kt__22dkzo();
    return ModifierLocalSharedElementInternalState;
  }
  var ModifierLocalSharedElementInternalState;
  var androidx_compose_animation_SharedBoundsNodeElement$stable;
  var androidx_compose_animation_SharedBoundsNode$stable;
  function SharedBoundsNodeElement(sharedElementState) {
    ModifierNodeElement.call(this);
    this.sharedElementState_1 = sharedElementState;
  }
  protoOf(SharedBoundsNodeElement).get_sharedElementState_80iykj_k$ = function () {
    return this.sharedElementState_1;
  };
  protoOf(SharedBoundsNodeElement).create_md4cuc_k$ = function () {
    return new SharedBoundsNode(this.sharedElementState_1);
  };
  protoOf(SharedBoundsNodeElement).update_yw65pe_k$ = function (node) {
    node.set_sharedElementEntry_fu5d2q_k$(this.sharedElementState_1);
  };
  protoOf(SharedBoundsNodeElement).update_9wd57p_k$ = function (node) {
    return this.update_yw65pe_k$(node instanceof SharedBoundsNode ? node : THROW_CCE());
  };
  protoOf(SharedBoundsNodeElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('sharedBounds');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('sharedElementState', this.sharedElementState_1);
  };
  protoOf(SharedBoundsNodeElement).component1_7eebsc_k$ = function () {
    return this.sharedElementState_1;
  };
  protoOf(SharedBoundsNodeElement).copy_hith5w_k$ = function (sharedElementState) {
    return new SharedBoundsNodeElement(sharedElementState);
  };
  protoOf(SharedBoundsNodeElement).copy$default_i6lb18_k$ = function (sharedElementState, $super) {
    sharedElementState = sharedElementState === VOID ? this.sharedElementState_1 : sharedElementState;
    return $super === VOID ? this.copy_hith5w_k$(sharedElementState) : $super.copy_hith5w_k$.call(this, sharedElementState);
  };
  protoOf(SharedBoundsNodeElement).toString = function () {
    return 'SharedBoundsNodeElement(sharedElementState=' + toString_0(this.sharedElementState_1) + ')';
  };
  protoOf(SharedBoundsNodeElement).hashCode = function () {
    return hashCode(this.sharedElementState_1);
  };
  protoOf(SharedBoundsNodeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SharedBoundsNodeElement))
      return false;
    if (!equals(this.sharedElementState_1, other.sharedElementState_1))
      return false;
    return true;
  };
  function _set_boundsBeforeDetached__s0znqp($this, _set____db54di) {
    $this.boundsBeforeDetached_1 = _set____db54di;
  }
  function _get_boundsBeforeDetached__e2wzqd($this) {
    return $this.boundsBeforeDetached_1;
  }
  function _get_approachCoordinates__8yzp32($this) {
    return requireLayoutCoordinates($this);
  }
  function _set_isPlaced__jjpkts($this, _set____db54di) {
    $this.isPlaced_1 = _set____db54di;
  }
  function _get_isPlaced__6qt9d0($this) {
    return $this.isPlaced_1;
  }
  function _get_rootCoords__hhtj4l($this) {
    return _get_sharedElement__nuo62($this).get_scope_iyfcq3_k$().get_root_4w1woo_k$();
  }
  function requireLookaheadLayoutCoordinates($this) {
    // Inline function 'kotlin.with' call
    return $this.sharedElementEntry_1.get_sharedElement_xjw30y_k$().get_scope_iyfcq3_k$().toLookaheadCoordinates_1gvv32_k$(requireLayoutCoordinates($this));
  }
  function _get_boundsAnimation__ff0bi($this) {
    return $this.sharedElementEntry_1.get_boundsAnimation_bx9g2i_k$();
  }
  function _set_layer__h6sopg($this, value) {
    if (value == null) {
      var tmp0_safe_receiver = $this.layer_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        requireGraphicsContext($this).releaseGraphicsLayer_8n1d07_k$(tmp0_safe_receiver);
      }
    } else {
      $this.sharedElementEntry_1.set_layer_t4w1t1_k$(value);
    }
    $this.layer_1 = value;
  }
  function _get_layer__eubrs0($this) {
    return $this.layer_1;
  }
  function _get_sharedElement__nuo62($this) {
    return $this.sharedElementEntry_1.get_sharedElement_xjw30y_k$();
  }
  function setup($this) {
    $this.provide_fhfib2_k$(get_ModifierLocalSharedElementInternalState(), $this.sharedElementEntry_1);
    $this.sharedElementEntry_1.set_parentState_qcv6mg_k$($this.get_current_2exe6q_k$(get_ModifierLocalSharedElementInternalState()));
    _set_layer__h6sopg($this, requireGraphicsContext($this).createGraphicsLayer_a0ja3u_k$());
    $this.isPlaced_1 = false;
    $this.sharedElementEntry_1.set_boundsProvider_6jjacs_k$($this);
  }
  function approachPlaceMatchBeyondTransition($this, _this__u8e3s4, placeable, currentBounds) {
    if (!_get_boundsAnimation__ff0bi($this).get_target_juba8q_k$()) {
      var bounds = currentBounds;
      var tmp0_safe_receiver = _this__u8e3s4.get_coordinates_q6f2pa_k$();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        var positionInScope = _get_rootCoords__hhtj4l($this).localPositionOf_hrey0l_k$(tmp0_safe_receiver, Companion_getInstance_4().get_Zero_k6n73t_k$());
        tmp = round(Offset__minus_impl_hoj2c0(bounds.get_topLeft_ypvrd5_k$(), positionInScope));
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0;
      var tmp_1 = tmp1_elvis_lhs;
      if ((tmp_1 == null ? null : new IntOffset(tmp_1)) == null) {
        tmp_0 = Companion_getInstance_6().get_Zero_6hc3i8_k$();
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var _destruct__k2r9zo = tmp_0;
      // Inline function 'androidx.compose.ui.unit.IntOffset.component1' call
      var x = _IntOffset___get_x__impl__qiqr5o(_destruct__k2r9zo);
      // Inline function 'androidx.compose.ui.unit.IntOffset.component2' call
      var y = _IntOffset___get_y__impl__2avpwj(_destruct__k2r9zo);
      _this__u8e3s4.place$default_61faqz_k$(placeable, x, y);
    } else {
      _this__u8e3s4.place$default_61faqz_k$(placeable, 0, 0);
    }
  }
  function approachPlace($this, _this__u8e3s4, placeable) {
    var tmp;
    if (_get_sharedElement__nuo62($this).get_state_wrioid_k$().get_matchIsOrHasBeenConfigured_wqv4it_k$()) {
      var tmp_0 = $this.sharedElementEntry_1.get_placeholderSize_2cay1h_k$();
      var tmp_1 = requireLookaheadLayoutCoordinates($this).get_size_kd98kr_k$();
      var tmp0 = placeable.get_width_j0q4yl_k$();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = placeable.get_height_e7t92o_k$();
      var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$1 = _IntSize___init__impl__emcjft(tmp$ret$0);
      tmp = tmp_0.calculateSize_sx87iu_k$(tmp_1, tmp$ret$1);
    } else {
      var tmp0_0 = placeable.get_width_j0q4yl_k$();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2_0 = placeable.get_height_e7t92o_k$();
      var tmp$ret$2 = bitwiseOr(shiftLeft(fromInt(tmp0_0), 32), bitwiseAnd(fromInt(val2_0), new Long(-1, 0)));
      tmp = _IntSize___init__impl__emcjft(tmp$ret$2);
    }
    var _destruct__k2r9zo = tmp;
    // Inline function 'androidx.compose.ui.unit.IntSize.component1' call
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(_destruct__k2r9zo);
    var w = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.component2' call
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf(_destruct__k2r9zo);
    var h = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    return _this__u8e3s4.layout$default_n19e5l_k$(w, h, VOID, SharedBoundsNode$approachPlace$lambda($this, placeable));
  }
  function sam$androidx_compose_animation_BoundsTransform$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_BoundsTransform$0_0).createAnimationSpec_whg8mb_k$ = function (initialBounds, targetBounds) {
    return this.function_1(initialBounds, targetBounds);
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, BoundsTransform) : false) {
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
  protoOf(sam$androidx_compose_animation_BoundsTransform$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function SharedBoundsNode$measure$lambda($placeable, this$0) {
    return function ($this$layout) {
      $this$layout.place$default_61faqz_k$($placeable, 0, 0);
      _get_sharedElement__nuo62(this$0).onLookaheadPlaced_1dsesa_k$($this$layout, this$0.sharedElementEntry_1);
      return Unit_getInstance();
    };
  }
  function SharedBoundsNode$approachPlaceMatchInTransition$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0) {
    return spring(VOID, VOID, get_VisibilityThreshold(Companion_getInstance()));
  }
  function SharedBoundsNode$approachPlace$lambda(this$0, $placeable) {
    return function ($this$layout) {
      this$0.isPlaced_1 = true;
      this$0.boundsBeforeDetached_1 = null;
      var matchState = _get_sharedElement__nuo62(this$0).get_state_wrioid_k$();
      var tmp;
      if (!this$0.sharedElementEntry_1.get_isEnabled_roz1ma_k$()) {
        $this$layout.place$default_61faqz_k$($placeable, 0, 0);
        tmp = Unit_getInstance();
      } else if (matchState.get_matchIsOrHasBeenConfigured_wqv4it_k$()) {
        var tmp0 = matchState.get_targetData_c4trx8_k$();
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.requireNotNull' call
          if (tmp0 == null) {
            var message = 'Match State is configured, but target data is null. State = ' + toString_0(matchState);
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          } else {
            tmp$ret$1 = tmp0;
            break $l$block;
          }
        }
        var targetData = tmp$ret$1;
        var tmp0_0 = matchState.get_currentBounds_rrenad_k$();
        var tmp$ret$3;
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (tmp0_0 == null) {
            var message_0 = 'Match State is configured, but current bounds is null. State = ' + toString_0(matchState);
            throw IllegalArgumentException_init_$Create$(toString_0(message_0));
          } else {
            tmp$ret$3 = tmp0_0;
            break $l$block_0;
          }
        }
        var currentBounds = tmp$ret$3;
        var tmp_0;
        if (_get_sharedElement__nuo62(this$0).get_scope_iyfcq3_k$().get_isTransitionActive_t69j02_k$()) {
          this$0.approachPlaceMatchInTransition_snbq9w_k$($this$layout, $placeable, targetData, currentBounds);
          tmp_0 = Unit_getInstance();
        } else {
          approachPlaceMatchBeyondTransition(this$0, $this$layout, $placeable, currentBounds);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $this$layout.place$default_61faqz_k$($placeable, 0, 0);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SharedBoundsNode$draw$lambda($bounds, this$0, $this_draw) {
    return function ($this$record) {
      var tmp;
      if (false) {
        var tmp0_safe_receiver = $bounds;
        var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_size_cxx1ym_k$();
        println('SharedTransition, record layer at size: ' + toString(tmp_0 == null ? null : new Size(tmp_0)) + ' for' + (' key = ' + toString_0(_get_sharedElement__nuo62(this$0).get_key_18j28a_k$())));
        tmp = Unit_getInstance();
      }
      $this_draw.drawContent_m0wwjp_k$();
      var tmp_1;
      if (false && _get_sharedElement__nuo62(this$0).get_boundsTransformIsActive_so0kla_k$() && this$0.sharedElementEntry_1.get_isEnabled_roz1ma_k$()) {
        $this$record.drawRect$default_5x4e2k_k$(Companion_getInstance_7().get_Green_dkzwf_k$(), VOID, VOID, VOID, new Stroke(3.0));
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SharedBoundsNode(state) {
    Node.call(this);
    this.boundsBeforeDetached_1 = null;
    this.isPlaced_1 = false;
    this.sharedElementEntry_1 = state;
    this.layer_1 = state.get_layer_iujprc_k$();
    this.providedValues_1 = modifierLocalMapOf(to(get_ModifierLocalSharedElementInternalState(), state));
  }
  protoOf(SharedBoundsNode).get_lastBoundsInSharedTransitionScope_e0le3l_k$ = function () {
    if (!this.get_isAttached_odsl1l_k$())
      return null;
    if (!this.isPlaced_1)
      return this.boundsBeforeDetached_1;
    return Rect(_get_rootCoords__hhtj4l(this).localPositionOf$default_f8vt4q_k$(_get_approachCoordinates__8yzp32(this)), toSize(_get_approachCoordinates__8yzp32(this).get_size_kd98kr_k$()));
  };
  protoOf(SharedBoundsNode).calculateAlternativeTargetBounds_c8liz8_k$ = function (targetBoundsBeforeDisposed) {
    return this.sharedElementEntry_1.calculateTargetBounds_gkv33n_k$(targetBoundsBeforeDisposed);
  };
  protoOf(SharedBoundsNode).set_sharedElementEntry_fu5d2q_k$ = function (value) {
    if (!equals(value, this.sharedElementEntry_1)) {
      this.sharedElementEntry_1.set_isAttached_wr99di_k$(false);
      this.sharedElementEntry_1 = value;
      value.set_isAttached_wr99di_k$(this.get_isAttached_odsl1l_k$());
      if (this.get_isAttached_odsl1l_k$()) {
        setup(this);
      }
    }
  };
  protoOf(SharedBoundsNode).get_sharedElementEntry_7sqeec_k$ = function () {
    return this.sharedElementEntry_1;
  };
  protoOf(SharedBoundsNode).get_providedValues_crrbpu_k$ = function () {
    return this.providedValues_1;
  };
  protoOf(SharedBoundsNode).onAttach_juzy2c_k$ = function () {
    protoOf(Node).onAttach_juzy2c_k$.call(this);
    observeReads(this, _get_sharedElement__nuo62(this).get_observingVisibilityChange_3rwt7l_k$());
    setup(this);
    this.sharedElementEntry_1.set_isAttached_wr99di_k$(true);
  };
  protoOf(SharedBoundsNode).onDetach_8dig02_k$ = function () {
    protoOf(Node).onDetach_8dig02_k$.call(this);
    this.boundsBeforeDetached_1 = Rect(Offset__minus_impl_hoj2c0(positionInRoot(_get_approachCoordinates__8yzp32(this)), positionInRoot(_get_rootCoords__hhtj4l(this))), toSize(_get_approachCoordinates__8yzp32(this).get_size_kd98kr_k$()));
    _set_layer__h6sopg(this, null);
    this.sharedElementEntry_1.set_parentState_qcv6mg_k$(null);
    this.sharedElementEntry_1.set_boundsProvider_6jjacs_k$(null);
    this.sharedElementEntry_1.set_isAttached_wr99di_k$(false);
    this.isPlaced_1 = false;
  };
  protoOf(SharedBoundsNode).onReset_y3iodc_k$ = function () {
    protoOf(Node).onReset_y3iodc_k$.call(this);
    this.boundsBeforeDetached_1 = null;
    var tmp0_safe_receiver = this.layer_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      requireGraphicsContext(this).releaseGraphicsLayer_8n1d07_k$(tmp0_safe_receiver);
    }
    _set_layer__h6sopg(this, requireGraphicsContext(this).createGraphicsLayer_a0ja3u_k$());
  };
  protoOf(SharedBoundsNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.measure_4dmfk1_k$(constraints);
    var tmp = placeable.get_width_j0q4yl_k$();
    var tmp_0 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, SharedBoundsNode$measure$lambda(placeable, this));
  };
  protoOf(SharedBoundsNode).approachPlaceMatchInTransition_snbq9w_k$ = function (_this__u8e3s4, placeable, targetData, currentBounds) {
    var coordinates = _this__u8e3s4.get_coordinates_q6f2pa_k$();
    if (coordinates == null) {
      _this__u8e3s4.place$default_61faqz_k$(placeable, 0, 0);
      return Unit_getInstance();
    }
    var activeMatchRemoved = !_get_sharedElement__nuo62(this).get_state_wrioid_k$().get_activeMatchFound_5y5djo_k$();
    var positionInScope = _get_rootCoords__hhtj4l(this).localPositionOf_hrey0l_k$(coordinates, Companion_getInstance_4().get_Zero_k6n73t_k$());
    if (activeMatchRemoved) {
      var tmp = _get_boundsAnimation__ff0bi(this);
      var tmp_0 = get_targetBounds(targetData);
      var tmp_1 = SharedBoundsNode$approachPlaceMatchInTransition$lambda;
      tmp.animate_t7ajgl_k$(currentBounds, tmp_0, new sam$androidx_compose_animation_BoundsTransform$0_0(tmp_1));
    } else {
      _get_boundsAnimation__ff0bi(this).animate$default_69jodf_k$(currentBounds, get_targetBounds(targetData));
    }
    var animatedBounds = _get_boundsAnimation__ff0bi(this).get_value_j01efc_k$();
    var topLeft;
    var tmp_2;
    if (animatedBounds == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_2 = calculateOffsetFromDirectManipulation(targetData, animatedBounds);
    }
    var animatedTopLeft = tmp_2;
    if (_get_boundsAnimation__ff0bi(this).get_target_juba8q_k$() || activeMatchRemoved) {
      var tmp_3;
      var tmp_4 = animatedTopLeft;
      if ((tmp_4 == null ? null : new Offset(tmp_4)) == null) {
        tmp_3 = positionInScope;
      } else {
        tmp_3 = animatedTopLeft;
      }
      topLeft = tmp_3;
      var tmp_5;
      var tmp_6 = animatedTopLeft;
      if ((tmp_6 == null ? null : new Offset(tmp_6)) == null) {
        tmp_5 = Rect(positionInScope, toSize(coordinates.get_size_kd98kr_k$()));
      } else {
        tmp_5 = Rect(animatedTopLeft, animatedBounds.get_size_cxx1ym_k$());
      }
      var bounds = tmp_5;
      _get_sharedElement__nuo62(this).get_state_wrioid_k$().updateBounds_rr2frf_k$(bounds);
      if (false) {
        println('SharedTransition, animated bounds: ' + bounds.toString() + ',' + (' target: ' + get_targetBounds(targetData).toString() + ',') + (' scope size: ' + IntSize__toString_impl_54w9zl(_get_sharedElement__nuo62(this).get_scope_iyfcq3_k$().get_lookaheadRoot_u3i6mw_k$().get_size_kd98kr_k$()) + ',') + (' ' + toString_0(_get_sharedElement__nuo62(this).get_state_wrioid_k$())));
      }
    } else {
      var tmp_7;
      var tmp_8 = animatedTopLeft;
      if ((tmp_8 == null ? null : new Offset(tmp_8)) == null) {
        tmp_7 = currentBounds.get_topLeft_ypvrd5_k$();
      } else {
        tmp_7 = animatedTopLeft;
      }
      topLeft = tmp_7;
    }
    // Inline function 'kotlin.let' call
    var _destruct__k2r9zo = Offset__minus_impl_hoj2c0(topLeft, positionInScope);
    // Inline function 'androidx.compose.ui.geometry.Offset.component1' call
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.component2' call
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var y = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var tmp_9;
    if (isNaN_0(x)) {
      tmp_9 = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp_9 = roundToInt(x);
    }
    var tmp_10 = tmp_9;
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var tmp_11;
    if (isNaN_0(y)) {
      tmp_11 = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp_11 = roundToInt(y);
    }
    var tmp$ret$17 = tmp_11;
    _this__u8e3s4.place$default_61faqz_k$(placeable, tmp_10, tmp$ret$17);
  };
  protoOf(SharedBoundsNode).isMeasurementApproachInProgress_fyhlil_k$ = function (lookaheadSize) {
    return this.sharedElementEntry_1.get_isEnabled_roz1ma_k$() && _get_sharedElement__nuo62(this).get_foundMatch_g4mbjg_k$() && _get_sharedElement__nuo62(this).get_scope_iyfcq3_k$().get_isTransitionActive_t69j02_k$();
  };
  protoOf(SharedBoundsNode).approachMeasure_xs6k22_k$ = function (_this__u8e3s4, measurable, constraints) {
    var tmp0_elvis_lhs = _get_boundsAnimation__ff0bi(this).get_value_j01efc_k$();
    var tmp1_safe_receiver = tmp0_elvis_lhs == null ? _get_sharedElement__nuo62(this).tryInitializingCurrentBounds_hhp1hi_k$() : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var _destruct__k2r9zo = roundToIntSize(tmp1_safe_receiver.get_size_cxx1ym_k$());
      // Inline function 'androidx.compose.ui.unit.IntSize.component1' call
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(_destruct__k2r9zo);
      var width = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.component2' call
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(_destruct__k2r9zo);
      var height = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.require' call
      if (!(!(width === 2147483647) && !(height === 2147483647))) {
        var message = 'Error: Infinite width/height is invalid. ' + ('animated bounds: ' + toString(_get_boundsAnimation__ff0bi(this).get_value_j01efc_k$()) + ',') + (' current bounds: ' + toString(_get_sharedElement__nuo62(this).get_state_wrioid_k$().get_currentBounds_rrenad_k$()));
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
      tmp = Companion_getInstance_10().fixed_rd8fwx_k$(coerceAtLeast(width, 0), coerceAtLeast(height, 0));
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_0;
    var tmp_1 = tmp2_elvis_lhs;
    if ((tmp_1 == null ? null : new Constraints_0(tmp_1)) == null) {
      tmp_0 = constraints;
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var resolvedConstraints = tmp_0;
    if (false) {
      println('SharedTransition, approach measure constraints: ' + Constraints__toString_impl_37yskr(resolvedConstraints) + ',' + (' key = ' + toString_0(_get_sharedElement__nuo62(this).get_key_18j28a_k$()) + ', state: ' + toString_0(_get_sharedElement__nuo62(this).get_state_wrioid_k$())));
    }
    var placeable = measurable.measure_4dmfk1_k$(resolvedConstraints);
    return approachPlace(this, _this__u8e3s4, placeable);
  };
  protoOf(SharedBoundsNode).draw_2h95cs_k$ = function (_this__u8e3s4) {
    var matchState = _get_sharedElement__nuo62(this).get_state_wrioid_k$();
    var bounds = matchState.get_currentBounds_rrenad_k$();
    if (false) {
      var tmp = bounds == null ? null : bounds.get_size_cxx1ym_k$();
      println('SharedTransition, ContentDrawScope.draw() invoked. Bounds size: ' + toString(tmp == null ? null : new Size(tmp)) + (' for key = ' + toString_0(_get_sharedElement__nuo62(this).get_key_18j28a_k$())));
    }
    var tmp_0 = this.sharedElementEntry_1;
    var tmp_1;
    if (this.sharedElementEntry_1.get_shouldRenderInOverlay_7o8ntm_k$() && !(bounds == null)) {
      tmp_1 = this.sharedElementEntry_1.get_overlayClip_75q8uv_k$().getClipPath_nnv5ej_k$(this.sharedElementEntry_1.get_userState_dy2db1_k$(), bounds, _this__u8e3s4.get_layoutDirection_7e37v0_k$(), requireDensity(this));
    } else {
      tmp_1 = null;
    }
    tmp_0.set_clipPathInOverlay_uhdx0g_k$(tmp_1);
    var tmp0 = this.sharedElementEntry_1.get_layer_iujprc_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Error: Layer is null when accessed for shared bounds/element : ' + toString_0(_get_sharedElement__nuo62(this).get_key_18j28a_k$()) + ',' + ('target: ' + this.sharedElementEntry_1.get_boundsAnimation_bx9g2i_k$().get_target_juba8q_k$() + ', is attached: ' + this.get_isAttached_odsl1l_k$());
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var layer = tmp$ret$1;
    _this__u8e3s4.record$default_m64s38_k$(layer, VOID, SharedBoundsNode$draw$lambda(bounds, this, _this__u8e3s4));
    if (this.sharedElementEntry_1.get_shouldRenderInPlace_x76dxs_k$()) {
      if (false) {
        println('SharedTransition, drawing in place. key = ' + toString_0(_get_sharedElement__nuo62(this).get_key_18j28a_k$()));
      }
      drawLayer(_this__u8e3s4, layer);
    }
  };
  protoOf(SharedBoundsNode).onObservedReadsChanged_hqt4ia_k$ = function () {
    _get_sharedElement__nuo62(this).updateMatch_oeh0qv_k$();
    observeReads(this, _get_sharedElement__nuo62(this).get_observingVisibilityChange_3rwt7l_k$());
  };
  function ModifierLocalSharedElementInternalState$lambda() {
    _init_properties_SharedContentNode_kt__22dkzo();
    return null;
  }
  var properties_initialized_SharedContentNode_kt_1ekm3q;
  function _init_properties_SharedContentNode_kt__22dkzo() {
    if (!properties_initialized_SharedContentNode_kt_1ekm3q) {
      properties_initialized_SharedContentNode_kt_1ekm3q = true;
      ModifierLocalSharedElementInternalState = modifierLocalOf(ModifierLocalSharedElementInternalState$lambda);
      androidx_compose_animation_SharedBoundsNodeElement$stable = 0;
      androidx_compose_animation_SharedBoundsNode$stable = 8;
    }
  }
  function get_DefaultMomentumSpring() {
    _init_properties_SharedElement_kt__1lnsv9();
    return DefaultMomentumSpring;
  }
  var DefaultMomentumSpring;
  var androidx_compose_animation_SharedElement$stable;
  function _get_stateMachine__afkxhx($this) {
    return $this.stateMachine_1;
  }
  function _get_momentumAnimation__nxs7ph($this) {
    return $this.momentumAnimation_1;
  }
  function _set_animationSpecFinalized__w40oz4($this, _set____db54di) {
    $this.animationSpecFinalized_1 = _set____db54di;
  }
  function _get_animationSpecFinalized__9ux8jg($this) {
    return $this.animationSpecFinalized_1;
  }
  function _get__allEntries__eos9a5($this) {
    return $this._allEntries_1;
  }
  function _get__enabledEntries__kszfq5($this) {
    return $this._enabledEntries_1;
  }
  function SharedElement$updateMatch$lambda(this$0) {
    return function (it) {
      return !this$0.get_allEntries_nhmbbc_k$().contains_aljjnj_k$(it) || !it.get_isEnabled_roz1ma_k$();
    };
  }
  function SharedElement$updateExitVelocity$slambda(this$0, $velocity, resultContinuation) {
    this.this$0__1 = this$0;
    this.$velocity_1 = $velocity;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SharedElement$updateExitVelocity$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SharedElement$updateExitVelocity$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SharedElement$updateExitVelocity$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.momentumAnimation_1.animateTo$default_71hueo_k$(new Offset(Companion_getInstance_4().get_Zero_k6n73t_k$()), get_DefaultMomentumSpring(), new Offset(toOffset(this.$velocity_1)), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.this$0__1.animationSpecFinalized_1 = true;
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(SharedElement$updateExitVelocity$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new SharedElement$updateExitVelocity$slambda(this.this$0__1, this.$velocity_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(SharedElement$updateExitVelocity$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function SharedElement$updateExitVelocity$slambda_0(this$0, $velocity, resultContinuation) {
    var i = new SharedElement$updateExitVelocity$slambda(this$0, $velocity, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SharedElement$momentumAnimationOffset$lambda$slambda(this$0, $spring, resultContinuation) {
    this.this$0__1 = this$0;
    this.$spring_1 = $spring;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SharedElement$momentumAnimationOffset$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SharedElement$momentumAnimationOffset$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SharedElement$momentumAnimationOffset$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.momentumAnimation_1.animateTo$default_71hueo_k$(new Offset(Companion_getInstance_4().get_Zero_k6n73t_k$()), this.$spring_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(SharedElement$momentumAnimationOffset$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new SharedElement$momentumAnimationOffset$lambda$slambda(this.this$0__1, this.$spring_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(SharedElement$momentumAnimationOffset$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function SharedElement$momentumAnimationOffset$lambda$slambda_0(this$0, $spring, resultContinuation) {
    var i = new SharedElement$momentumAnimationOffset$lambda$slambda(this$0, $spring, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SharedElement$momentumAnimationOffset$lambda(this$0) {
    return function () {
      var tmp;
      if (!this$0.animationSpecFinalized_1 && this$0.scope_1.get_isTransitionActive_t69j02_k$() && this$0.momentumAnimation_1.get_isRunning_okmtn0_k$()) {
        var tmp0 = this$0.get_enabledEntries_97jleg_k$();
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
          // Inline function 'androidx.compose.ui.util.fastForEach' call
          var inductionVariable = 0;
          var last = tmp0.get_size_woubt6_k$() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0.get_c1px32_k$(index);
              if (item.get_target_juba8q_k$()) {
                tmp$ret$1 = item;
                break $l$block;
              }
            }
             while (inductionVariable <= last);
          tmp$ret$1 = null;
        }
        var tmp0_safe_receiver = tmp$ret$1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          var targetSpec = tmp0_safe_receiver.get_boundsAnimation_bx9g2i_k$().get_animationSpec_wdk2t2_k$();
          if (targetSpec instanceof SpringSpec) {
            var spring_0 = spring(targetSpec.get_dampingRatio_syjss2_k$(), targetSpec.get_stiffness_dt2sgm_k$(), new Offset(get_VisibilityThreshold_2(Companion_getInstance_4())));
            var tmp_0 = this$0.scope_1.get_coroutineScope_5k7h45_k$();
            launch(tmp_0, VOID, VOID, SharedElement$momentumAnimationOffset$lambda$slambda_0(this$0, spring_0, null));
          }
          this$0.animationSpecFinalized_1 = true;
        }
        tmp = Unit_getInstance();
      }
      return this$0.momentumAnimation_1.get_value_j01efc_k$();
    };
  }
  function SharedElement$observingVisibilityChange$lambda(this$0) {
    return function () {
      var tmp0 = this$0.get_allEntries_nhmbbc_k$();
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastAny' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable = 0;
        var last = tmp0.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0.get_c1px32_k$(index);
            if (item.get_target_juba8q_k$() && item.get_isEnabled_roz1ma_k$()) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      return Unit_getInstance();
    };
  }
  function SharedElement(key, scope) {
    this.key_1 = key;
    this.scope_1 = scope;
    this.stateMachine_1 = new SharedTransitionStateMachine(this);
    this.momentumAnimation_1 = new Animatable(new Offset(Companion_getInstance_4().get_Zero_k6n73t_k$()), get_VectorConverter_2(Companion_getInstance_4()));
    this.animationSpecFinalized_1 = false;
    var tmp = this;
    tmp.momentumAnimationOffset_1 = SharedElement$momentumAnimationOffset$lambda(this);
    this._allEntries_1 = mutableStateListOf();
    this._enabledEntries_1 = mutableStateListOf();
    var tmp_0 = this;
    tmp_0.observingVisibilityChange_1 = SharedElement$observingVisibilityChange$lambda(this);
  }
  protoOf(SharedElement).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(SharedElement).get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  protoOf(SharedElement).get_state_wrioid_k$ = function () {
    return this.stateMachine_1.get_state_iypx7s_k$();
  };
  protoOf(SharedElement).get_enabledEntries_97jleg_k$ = function () {
    return this._enabledEntries_1;
  };
  protoOf(SharedElement).get_allEntries_nhmbbc_k$ = function () {
    return this._allEntries_1;
  };
  protoOf(SharedElement).isAnimating_x1kvqk_k$ = function () {
    var tmp0 = this.get_enabledEntries_97jleg_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0.get_c1px32_k$(index);
          if (item.get_boundsAnimation_bx9g2i_k$().get_isRunning_okmtn0_k$()) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  };
  protoOf(SharedElement).updateMatch_oeh0qv_k$ = function () {
    var tmp0_safe_receiver = this.scope_1.get_testBlockToRun_sdf6ma_k$();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    removeAll(this._enabledEntries_1, SharedElement$updateMatch$lambda(this));
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.get_allEntries_nhmbbc_k$();
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        if (item.get_isEnabled_roz1ma_k$() && !this.get_enabledEntries_97jleg_k$().contains_aljjnj_k$(item)) {
          this._enabledEntries_1.add_wl2rvy_k$(item);
        }
      }
       while (inductionVariable <= last);
    var hasVisibleContent_0 = hasVisibleContent(this._enabledEntries_1);
    this.stateMachine_1.checkForAndDeferStateUpdates_dprwzk_k$(hasVisibleContent_0);
  };
  protoOf(SharedElement).updateExitVelocity_u2vwtv_k$ = function (velocity) {
    var tmp = this.scope_1.get_coroutineScope_5k7h45_k$();
    launch(tmp, VOID, VOID, SharedElement$updateExitVelocity$slambda_0(this, velocity, null));
  };
  protoOf(SharedElement).get_momentumAnimationOffset_v7y4ra_k$ = function () {
    return this.momentumAnimationOffset_1;
  };
  protoOf(SharedElement).invalidateTargetBoundsProvider_wcz26a_k$ = function () {
    return this.stateMachine_1.invalidateTargetBoundsProvider_wcz26a_k$();
  };
  protoOf(SharedElement).tryInitializingCurrentBounds_hhp1hi_k$ = function () {
    return this.stateMachine_1.tryInitializingCurrentBounds_hhp1hi_k$();
  };
  protoOf(SharedElement).onSharedTransitionFinished_4wcl9h_k$ = function () {
    if (this.get_enabledEntries_97jleg_k$().get_size_woubt6_k$() <= 1 || !hasVisibleContent(this.get_enabledEntries_97jleg_k$())) {
      this.stateMachine_1.resetState_9cgocu_k$();
    }
  };
  protoOf(SharedElement).get_foundMatch_g4mbjg_k$ = function () {
    return this.get_state_wrioid_k$().get_activeMatchFound_5y5djo_k$() || this.get_state_wrioid_k$().get_matchIsOrHasBeenConfigured_wqv4it_k$() || this.stateMachine_1.get_activeMatchDeferred_90t7ud_k$();
  };
  protoOf(SharedElement).get_boundsTransformIsActive_so0kla_k$ = function () {
    return this.get_state_wrioid_k$().get_matchIsOrHasBeenConfigured_wqv4it_k$();
  };
  protoOf(SharedElement).onLookaheadPlaced_1dsesa_k$ = function (placementScope, state) {
    this.stateMachine_1.processPendingRequest_ehf2h_k$();
    if (equals(this.get_state_wrioid_k$(), NoMatchFound_getInstance()) || !state.get_isEnabled_roz1ma_k$())
      return Unit_getInstance();
    var matchState = this.get_state_wrioid_k$();
    if (state.get_boundsAnimation_bx9g2i_k$().get_target_juba8q_k$() && matchState.get_activeMatchFound_5y5djo_k$()) {
      // Inline function 'kotlin.with' call
      var tmp0_safe_receiver = placementScope.get_coordinates_q6f2pa_k$();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        var lookaheadSize = toSize(tmp0_safe_receiver.get_size_kd98kr_k$());
        // Inline function 'kotlin.with' call
        var topLeft = state.get_sharedElement_xjw30y_k$().scope_1.localLookaheadPositionOf$default_10xwp7_k$(state.get_sharedElement_xjw30y_k$().scope_1.get_lookaheadRoot_u3i6mw_k$(), tmp0_safe_receiver);
        // Inline function 'kotlin.with' call
        state.get_sharedElement_xjw30y_k$().scope_1;
        var structuralOffset = state.get_sharedElement_xjw30y_k$().scope_1.get_lookaheadRoot_u3i6mw_k$().localPositionOf$default_f8vt4q_k$(tmp0_safe_receiver, VOID, false);
        this.stateMachine_1.configureActiveMatch_bn4iml_k$(lookaheadSize, topLeft, structuralOffset);
        tmp = Unit_getInstance();
      }
    }
  };
  protoOf(SharedElement).get_observingVisibilityChange_3rwt7l_k$ = function () {
    return this.observingVisibilityChange_1;
  };
  protoOf(SharedElement).addEntry_5r9v5k_k$ = function (sharedElementState) {
    this._allEntries_1.add_wl2rvy_k$(sharedElementState);
    this.updateMatch_oeh0qv_k$();
  };
  protoOf(SharedElement).removeEntry_rdoucb_k$ = function (sharedElementState) {
    this._allEntries_1.remove_an8aut_k$(sharedElementState);
    this._enabledEntries_1.remove_an8aut_k$(sharedElementState);
    this.updateMatch_oeh0qv_k$();
  };
  function hasVisibleContent(_this__u8e3s4) {
    _init_properties_SharedElement_kt__1lnsv9();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = _this__u8e3s4.get_c1px32_k$(index);
          if (item.get_boundsAnimation_bx9g2i_k$().get_target_juba8q_k$()) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function toOffset(_this__u8e3s4) {
    _init_properties_SharedElement_kt__1lnsv9();
    var tmp0 = _Velocity___get_x__impl__qqcikv(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _Velocity___get_y__impl__239yhc(_this__u8e3s4);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  }
  var properties_initialized_SharedElement_kt_8z8h3t;
  function _init_properties_SharedElement_kt__1lnsv9() {
    if (!properties_initialized_SharedElement_kt_8z8h3t) {
      properties_initialized_SharedElement_kt_8z8h3t = true;
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var v1 = fromInt(toRawBits(3.0));
      var v2 = fromInt(toRawBits(3.0));
      var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      var tmp$ret$1 = _Offset___init__impl__c168vi(tmp$ret$0);
      DefaultMomentumSpring = spring(VOID, 400.0, new Offset(tmp$ret$1));
      androidx_compose_animation_SharedElement$stable = 8;
    }
  }
  var androidx_compose_animation_SharedElementEntry$stable;
  function _get_shouldRenderAtAll__64ljqk($this) {
    return $this.get_boundsAnimation_bx9g2i_k$().get_target_juba8q_k$() || ($this.get_sharedElement_xjw30y_k$().get_state_wrioid_k$().get_matchIsOrHasBeenConfigured_wqv4it_k$() && !$this.get_sharedElement_xjw30y_k$().get_state_wrioid_k$().get_activeMatchFound_5y5djo_k$()) || !$this.get_renderOnlyWhenVisible_62mrql_k$();
  }
  function SharedElementEntry$_get_isAttached_$ref_d8klhx() {
    return function (p0) {
      return p0.get_isAttached_odsl1l_k$();
    };
  }
  function SharedElementEntry$_set_isAttached_$ref_caiujj() {
    return function (p0, p1) {
      p0.set_isAttached_wr99di_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementEntry$_get_isAttached_$ref_d8klhx_0() {
    return function (p0) {
      return p0.get_isAttached_odsl1l_k$();
    };
  }
  function SharedElementEntry$_set_isAttached_$ref_caiujj_0() {
    return function (p0, p1) {
      p0.set_isAttached_wr99di_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementEntry$_get_zIndex_$ref_csi8ol() {
    return function (p0) {
      return p0.get_zIndex_mbbc75_k$();
    };
  }
  function SharedElementEntry$_set_zIndex_$ref_29qcgn() {
    return function (p0, p1) {
      p0.set_zIndex_58jhbh_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementEntry$_get_zIndex_$ref_csi8ol_0() {
    return function (p0) {
      return p0.get_zIndex_mbbc75_k$();
    };
  }
  function SharedElementEntry$_set_zIndex_$ref_29qcgn_0() {
    return function (p0, p1) {
      p0.set_zIndex_58jhbh_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementEntry$_get_renderInOverlayDuringTransition_$ref_a85ws() {
    return function (p0) {
      return p0.get_renderInOverlayDuringTransition_4yqpjy_k$();
    };
  }
  function SharedElementEntry$_set_renderInOverlayDuringTransition_$ref_680q5c() {
    return function (p0, p1) {
      p0.set_renderInOverlayDuringTransition_bhc293_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementEntry$_get_renderInOverlayDuringTransition_$ref_a85ws_0() {
    return function (p0) {
      return p0.get_renderInOverlayDuringTransition_4yqpjy_k$();
    };
  }
  function SharedElementEntry$_set_renderInOverlayDuringTransition_$ref_680q5c_0() {
    return function (p0, p1) {
      p0.set_renderInOverlayDuringTransition_bhc293_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementEntry$_get_sharedElement_$ref_exlt7k() {
    return function (p0) {
      return p0.get_sharedElement_xjw30y_k$();
    };
  }
  function SharedElementEntry$_set_sharedElement_$ref_ydpch8() {
    return function (p0, p1) {
      p0.set_sharedElement_2xbsqt_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementEntry$_get_sharedElement_$ref_exlt7k_0() {
    return function (p0) {
      return p0.get_sharedElement_xjw30y_k$();
    };
  }
  function SharedElementEntry$_set_sharedElement_$ref_ydpch8_0() {
    return function (p0, p1) {
      p0.set_sharedElement_2xbsqt_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementEntry$_get_boundsAnimation_$ref_1as560() {
    return function (p0) {
      return p0.get_boundsAnimation_bx9g2i_k$();
    };
  }
  function SharedElementEntry$_set_boundsAnimation_$ref_bzy3qc() {
    return function (p0, p1) {
      p0.set_boundsAnimation_mkzem3_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementEntry$_get_boundsAnimation_$ref_1as560_0() {
    return function (p0) {
      return p0.get_boundsAnimation_bx9g2i_k$();
    };
  }
  function SharedElementEntry$_set_boundsAnimation_$ref_bzy3qc_0() {
    return function (p0, p1) {
      p0.set_boundsAnimation_mkzem3_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementEntry$_get_placeholderSize_$ref_kbbfct() {
    return function (p0) {
      return p0.get_placeholderSize_2cay1h_k$();
    };
  }
  function SharedElementEntry$_set_placeholderSize_$ref_xm1o95() {
    return function (p0, p1) {
      p0.set_placeholderSize_w5vr6v_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementEntry$_get_placeholderSize_$ref_kbbfct_0() {
    return function (p0) {
      return p0.get_placeholderSize_2cay1h_k$();
    };
  }
  function SharedElementEntry$_set_placeholderSize_$ref_xm1o95_0() {
    return function (p0, p1) {
      p0.set_placeholderSize_w5vr6v_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementEntry$_get_renderOnlyWhenVisible_$ref_gbzem7() {
    return function (p0) {
      return p0.get_renderOnlyWhenVisible_62mrql_k$();
    };
  }
  function SharedElementEntry$_set_renderOnlyWhenVisible_$ref_e34vnv() {
    return function (p0, p1) {
      p0.set_renderOnlyWhenVisible_f63i0s_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementEntry$_get_renderOnlyWhenVisible_$ref_gbzem7_0() {
    return function (p0) {
      return p0.get_renderOnlyWhenVisible_62mrql_k$();
    };
  }
  function SharedElementEntry$_set_renderOnlyWhenVisible_$ref_e34vnv_0() {
    return function (p0, p1) {
      p0.set_renderOnlyWhenVisible_f63i0s_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementEntry$_get_overlayClip_$ref_vtctd5() {
    return function (p0) {
      return p0.get_overlayClip_75q8uv_k$();
    };
  }
  function SharedElementEntry$_set_overlayClip_$ref_t4113f() {
    return function (p0, p1) {
      p0.set_overlayClip_a8g9zt_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementEntry$_get_overlayClip_$ref_vtctd5_0() {
    return function (p0) {
      return p0.get_overlayClip_75q8uv_k$();
    };
  }
  function SharedElementEntry$_set_overlayClip_$ref_t4113f_0() {
    return function (p0, p1) {
      p0.set_overlayClip_a8g9zt_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementEntry$_get_userState_$ref_k06vqn() {
    return function (p0) {
      return p0.get_userState_dy2db1_k$();
    };
  }
  function SharedElementEntry$_set_userState_$ref_4sfd8b() {
    return function (p0, p1) {
      p0.set_userState_zl3ka_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementEntry$_get_userState_$ref_k06vqn_0() {
    return function (p0) {
      return p0.get_userState_dy2db1_k$();
    };
  }
  function SharedElementEntry$_set_userState_$ref_4sfd8b_0() {
    return function (p0, p1) {
      p0.set_userState_zl3ka_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementEntry$_get_layer_$ref_ejr8re() {
    return function (p0) {
      return p0.get_layer_iujprc_k$();
    };
  }
  function SharedElementEntry$_set_layer_$ref_r6ict6() {
    return function (p0, p1) {
      p0.set_layer_t4w1t1_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementEntry$_get_layer_$ref_ejr8re_0() {
    return function (p0) {
      return p0.get_layer_iujprc_k$();
    };
  }
  function SharedElementEntry$_set_layer_$ref_r6ict6_0() {
    return function (p0, p1) {
      p0.set_layer_t4w1t1_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementEntry(sharedElement, boundsAnimation, placeholderSize, renderOnlyWhenVisible, overlayClip, renderInOverlayDuringTransition, userState, zIndex) {
    this.isAttached$delegate_1 = mutableStateOf(false);
    this.zIndex$delegate_1 = mutableFloatStateOf(zIndex);
    this.renderInOverlayDuringTransition$delegate_1 = mutableStateOf(renderInOverlayDuringTransition);
    this.sharedElement$delegate_1 = mutableStateOf(sharedElement);
    this.boundsAnimation$delegate_1 = mutableStateOf(boundsAnimation);
    this.placeholderSize$delegate_1 = mutableStateOf(placeholderSize);
    this.renderOnlyWhenVisible$delegate_1 = mutableStateOf(renderOnlyWhenVisible);
    this.overlayClip$delegate_1 = mutableStateOf(overlayClip);
    this.userState$delegate_1 = mutableStateOf(userState);
    this.clipPathInOverlay_1 = null;
    this.parentState_1 = null;
    this.boundsProvider_1 = null;
    this.layer$delegate_1 = mutableStateOf(null);
  }
  protoOf(SharedElementEntry).set_isAttached_wr99di_k$ = function (_set____db54di) {
    var tmp0 = this.isAttached$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_isAttached_$ref_d8klhx_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isAttached', 1, tmp, tmp_0, SharedElementEntry$_set_isAttached_$ref_caiujj_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementEntry).get_isAttached_odsl1l_k$ = function () {
    var tmp0 = this.isAttached$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_isAttached_$ref_d8klhx();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isAttached', 1, tmp, tmp_0, SharedElementEntry$_set_isAttached_$ref_caiujj());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementEntry).set_zIndex_58jhbh_k$ = function (_set____db54di) {
    var tmp0 = this.zIndex$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_zIndex_$ref_csi8ol_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('zIndex', 1, tmp, tmp_0, SharedElementEntry$_set_zIndex_$ref_29qcgn_0());
    tmp0.set_floatValue_qaujgq_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementEntry).get_zIndex_mbbc75_k$ = function () {
    var tmp0 = this.zIndex$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_zIndex_$ref_csi8ol();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('zIndex', 1, tmp, tmp_0, SharedElementEntry$_set_zIndex_$ref_29qcgn());
    return tmp0.get_floatValue_xw60ou_k$();
  };
  protoOf(SharedElementEntry).set_renderInOverlayDuringTransition_bhc293_k$ = function (_set____db54di) {
    var tmp0 = this.renderInOverlayDuringTransition$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_renderInOverlayDuringTransition_$ref_a85ws_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('renderInOverlayDuringTransition', 1, tmp, tmp_0, SharedElementEntry$_set_renderInOverlayDuringTransition_$ref_680q5c_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementEntry).get_renderInOverlayDuringTransition_4yqpjy_k$ = function () {
    var tmp0 = this.renderInOverlayDuringTransition$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_renderInOverlayDuringTransition_$ref_a85ws();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('renderInOverlayDuringTransition', 1, tmp, tmp_0, SharedElementEntry$_set_renderInOverlayDuringTransition_$ref_680q5c());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementEntry).set_sharedElement_2xbsqt_k$ = function (_set____db54di) {
    var tmp0 = this.sharedElement$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_sharedElement_$ref_exlt7k_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('sharedElement', 1, tmp, tmp_0, SharedElementEntry$_set_sharedElement_$ref_ydpch8_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementEntry).get_sharedElement_xjw30y_k$ = function () {
    var tmp0 = this.sharedElement$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_sharedElement_$ref_exlt7k();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('sharedElement', 1, tmp, tmp_0, SharedElementEntry$_set_sharedElement_$ref_ydpch8());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementEntry).set_boundsAnimation_mkzem3_k$ = function (_set____db54di) {
    var tmp0 = this.boundsAnimation$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_boundsAnimation_$ref_1as560_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('boundsAnimation', 1, tmp, tmp_0, SharedElementEntry$_set_boundsAnimation_$ref_bzy3qc_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementEntry).get_boundsAnimation_bx9g2i_k$ = function () {
    var tmp0 = this.boundsAnimation$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_boundsAnimation_$ref_1as560();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('boundsAnimation', 1, tmp, tmp_0, SharedElementEntry$_set_boundsAnimation_$ref_bzy3qc());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementEntry).set_placeholderSize_w5vr6v_k$ = function (_set____db54di) {
    var tmp0 = this.placeholderSize$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_placeholderSize_$ref_kbbfct_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('placeholderSize', 1, tmp, tmp_0, SharedElementEntry$_set_placeholderSize_$ref_xm1o95_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementEntry).get_placeholderSize_2cay1h_k$ = function () {
    var tmp0 = this.placeholderSize$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_placeholderSize_$ref_kbbfct();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('placeholderSize', 1, tmp, tmp_0, SharedElementEntry$_set_placeholderSize_$ref_xm1o95());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementEntry).set_renderOnlyWhenVisible_f63i0s_k$ = function (_set____db54di) {
    var tmp0 = this.renderOnlyWhenVisible$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_renderOnlyWhenVisible_$ref_gbzem7_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('renderOnlyWhenVisible', 1, tmp, tmp_0, SharedElementEntry$_set_renderOnlyWhenVisible_$ref_e34vnv_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementEntry).get_renderOnlyWhenVisible_62mrql_k$ = function () {
    var tmp0 = this.renderOnlyWhenVisible$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_renderOnlyWhenVisible_$ref_gbzem7();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('renderOnlyWhenVisible', 1, tmp, tmp_0, SharedElementEntry$_set_renderOnlyWhenVisible_$ref_e34vnv());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementEntry).set_overlayClip_a8g9zt_k$ = function (_set____db54di) {
    var tmp0 = this.overlayClip$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_overlayClip_$ref_vtctd5_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('overlayClip', 1, tmp, tmp_0, SharedElementEntry$_set_overlayClip_$ref_t4113f_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementEntry).get_overlayClip_75q8uv_k$ = function () {
    var tmp0 = this.overlayClip$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_overlayClip_$ref_vtctd5();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('overlayClip', 1, tmp, tmp_0, SharedElementEntry$_set_overlayClip_$ref_t4113f());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementEntry).set_userState_zl3ka_k$ = function (_set____db54di) {
    var tmp0 = this.userState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_userState_$ref_k06vqn_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('userState', 1, tmp, tmp_0, SharedElementEntry$_set_userState_$ref_4sfd8b_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementEntry).get_userState_dy2db1_k$ = function () {
    var tmp0 = this.userState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_userState_$ref_k06vqn();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('userState', 1, tmp, tmp_0, SharedElementEntry$_set_userState_$ref_4sfd8b());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementEntry).get_isEnabled_roz1ma_k$ = function () {
    // Inline function 'kotlin.with' call
    var $this$with = this.get_userState_dy2db1_k$();
    return this.get_isAttached_odsl1l_k$() && $this$with.get_isEnabledByUser_1o81i5_k$();
  };
  protoOf(SharedElementEntry).calculateTargetBounds_gkv33n_k$ = function (previousTargetBoundsBeforeLosingTarget) {
    // Inline function 'kotlin.with' call
    return this.get_userState_dy2db1_k$().get_config_1xuuqw_k$().alternativeTargetBoundsInTransitionScopeAfterRemoval_b74dnl_k$(this.get_userState_dy2db1_k$(), previousTargetBoundsBeforeLosingTarget, toSize(this.get_sharedElement_xjw30y_k$().get_scope_iyfcq3_k$().get_lookaheadRoot_u3i6mw_k$().get_size_kd98kr_k$()));
  };
  protoOf(SharedElementEntry).set_clipPathInOverlay_uhdx0g_k$ = function (_set____db54di) {
    this.clipPathInOverlay_1 = _set____db54di;
  };
  protoOf(SharedElementEntry).get_clipPathInOverlay_rtg516_k$ = function () {
    return this.clipPathInOverlay_1;
  };
  protoOf(SharedElementEntry).drawInOverlay_ircoes_k$ = function (drawScope) {
    var tmp0_elvis_lhs = this.get_layer_iujprc_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var layer = tmp;
    var matchState = this.get_sharedElement_xjw30y_k$().get_state_wrioid_k$();
    var tmp1_elvis_lhs = matchState.get_currentBounds_rrenad_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var currentBounds = tmp_0;
    if (this.get_shouldRenderInOverlay_7o8ntm_k$()) {
      // Inline function 'kotlin.with' call
      var _destruct__k2r9zo = currentBounds.get_topLeft_ypvrd5_k$();
      // Inline function 'androidx.compose.ui.geometry.Offset.component1' call
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(_destruct__k2r9zo);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var x = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Offset.component2' call
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(_destruct__k2r9zo);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var y = floatFromBits(bits_0);
      if (false) {
        println('SharedTransition, drawing in overlay. key = ' + toString_0(this.get_sharedElement_xjw30y_k$().get_key_18j28a_k$()) + ',' + (' at ' + x + ', ' + y + ' current size: ' + Size__toString_impl_o87ni8(currentBounds.get_size_cxx1ym_k$()) + ' ') + ('state: ' + toString_0(matchState)));
      }
      var tmp0_safe_receiver = this.clipPathInOverlay_1;
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipPath' call
        var clipOp = Companion_getInstance_11().get_Intersect_gpxc6n_k$();
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        var $this$with = drawScope.get_drawContext_ffwztu_k$();
        var previousSize = $this$with.get_size_cxx1ym_k$();
        $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
        try {
          $this$with.get_transform_px941v_k$().clipPath_tlqunt_k$(tmp0_safe_receiver, clipOp);
          // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
          drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(x, y);
          try {
            drawLayer(drawScope, layer);
          }finally {
            drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-x, -y);
          }
        }finally {
          $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
          $this$with.set_size_6a0e6q_k$(previousSize);
        }
        tmp_1 = Unit_getInstance();
      }
      if (tmp_1 == null) {
        // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
        drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(x, y);
        try {
          drawLayer(drawScope, layer);
        }finally {
          drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-x, -y);
        }
      }
    }
  };
  protoOf(SharedElementEntry).set_parentState_qcv6mg_k$ = function (_set____db54di) {
    this.parentState_1 = _set____db54di;
  };
  protoOf(SharedElementEntry).get_parentState_ui10gu_k$ = function () {
    return this.parentState_1;
  };
  protoOf(SharedElementEntry).get_target_juba8q_k$ = function () {
    return this.get_boundsAnimation_bx9g2i_k$().get_target_juba8q_k$();
  };
  protoOf(SharedElementEntry).set_boundsProvider_6jjacs_k$ = function (_set____db54di) {
    this.boundsProvider_1 = _set____db54di;
  };
  protoOf(SharedElementEntry).get_boundsProvider_o6pxkh_k$ = function () {
    return this.boundsProvider_1;
  };
  protoOf(SharedElementEntry).set_layer_t4w1t1_k$ = function (_set____db54di) {
    var tmp0 = this.layer$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_layer_$ref_ejr8re_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('layer', 1, tmp, tmp_0, SharedElementEntry$_set_layer_$ref_r6ict6_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementEntry).get_layer_iujprc_k$ = function () {
    var tmp0 = this.layer$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_layer_$ref_ejr8re();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('layer', 1, tmp, tmp_0, SharedElementEntry$_set_layer_$ref_r6ict6());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementEntry).get_shouldRenderInOverlay_7o8ntm_k$ = function () {
    return _get_shouldRenderAtAll__64ljqk(this) && this.get_sharedElement_xjw30y_k$().get_boundsTransformIsActive_so0kla_k$() && this.get_isEnabled_roz1ma_k$() && this.get_renderInOverlayDuringTransition_4yqpjy_k$() && this.get_sharedElement_xjw30y_k$().get_scope_iyfcq3_k$().get_isTransitionActive_t69j02_k$();
  };
  protoOf(SharedElementEntry).get_shouldRenderInPlace_x76dxs_k$ = function () {
    return !this.get_sharedElement_xjw30y_k$().get_boundsTransformIsActive_so0kla_k$() || (!this.get_shouldRenderInOverlay_7o8ntm_k$() && _get_shouldRenderAtAll__64ljqk(this));
  };
  protoOf(SharedElementEntry).onRemembered_68t2e3_k$ = function () {
    this.get_sharedElement_xjw30y_k$().get_scope_iyfcq3_k$().onEntryAdded_8atu1p_k$(this);
    this.get_sharedElement_xjw30y_k$().invalidateTargetBoundsProvider_wcz26a_k$();
  };
  protoOf(SharedElementEntry).onForgotten_pbqifp_k$ = function () {
    this.get_sharedElement_xjw30y_k$().get_scope_iyfcq3_k$().onEntryRemoved_ijc9q5_k$(this);
    this.get_sharedElement_xjw30y_k$().invalidateTargetBoundsProvider_wcz26a_k$();
  };
  protoOf(SharedElementEntry).onAbandoned_1gx7a3_k$ = function () {
  };
  function BoundsProvider() {
  }
  function get_DefaultSpring() {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return DefaultSpring;
  }
  var DefaultSpring;
  function get_ParentClip() {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return ParentClip;
  }
  var ParentClip;
  function get_cachedScaleToBoundsImplMap() {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return cachedScaleToBoundsImplMap;
  }
  var cachedScaleToBoundsImplMap;
  var androidx_compose_animation_SharedTransitionScope_SharedContentState$stable;
  var androidx_compose_animation_SharedTransitionScopeImpl$stable;
  var androidx_compose_animation_ScaleToBoundsImpl$stable;
  var androidx_compose_animation_SharedTransitionDefaults_SharedContentConfig$stable;
  var androidx_compose_animation_SharedTransitionDefaults$stable;
  function BoundsTransform() {
  }
  function LayerRenderer() {
  }
  function sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0).calculateSize_sx87iu_k$ = function (contentSize, animatedSize) {
    return this.function_1(new IntSize(contentSize), new IntSize(animatedSize)).packedValue_1;
  };
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, PlaceholderSize) : false) {
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
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0_0).calculateSize_sx87iu_k$ = function (contentSize, animatedSize) {
    return this.function_1(new IntSize(contentSize), new IntSize(animatedSize)).packedValue_1;
  };
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, PlaceholderSize) : false) {
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
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function SharedTransitionScope$PlaceholderSize$Companion$AnimatedSize$lambda(_unused_var__etf5q3, animatedSize) {
    return animatedSize;
  }
  function SharedTransitionScope$PlaceholderSize$Companion$ContentSize$lambda(contentSize, _unused_var__etf5q3) {
    return contentSize;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp_0 = SharedTransitionScope$PlaceholderSize$Companion$AnimatedSize$lambda;
    tmp.AnimatedSize_1 = new sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0(tmp_0);
    var tmp_1 = this;
    var tmp_2 = SharedTransitionScope$PlaceholderSize$Companion$ContentSize$lambda;
    tmp_1.ContentSize_1 = new sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0_0(tmp_2);
  }
  protoOf(Companion_1).get_AnimatedSize_olm019_k$ = function () {
    return this.AnimatedSize_1;
  };
  protoOf(Companion_1).get_ContentSize_z1i26p_k$ = function () {
    return this.ContentSize_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_16() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.RemeasureToBounds_1 = RemeasureImpl_getInstance();
  }
  protoOf(Companion_2).get_RemeasureToBounds_vc94xe_k$ = function () {
    return this.RemeasureToBounds_1;
  };
  protoOf(Companion_2).scaleToBounds_38olcd_k$ = function (contentScale, alignment) {
    return ScaleToBoundsCached(contentScale, alignment);
  };
  protoOf(Companion_2).scaleToBounds$default_s9ktl6_k$ = function (contentScale, alignment, $super) {
    contentScale = contentScale === VOID ? Companion_getInstance_12().get_FillWidth_n2o75m_k$() : contentScale;
    alignment = alignment === VOID ? Companion_getInstance_5().get_Center_3arb0i_k$() : alignment;
    return $super === VOID ? this.scaleToBounds_38olcd_k$(contentScale, alignment) : $super.scaleToBounds_38olcd_k$.call(this, contentScale, alignment);
  };
  var Companion_instance_2;
  function Companion_getInstance_17() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function _get_nonNullInternalState__g66s5n($this) {
    var tmp0 = $this.get_internalState_d3bhs8_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Error: SharedContentState has not been added to a sharedElement/sharedBoundsmodifier yet. Therefore the internal state has not been initialized.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  }
  function SharedTransitionScope$SharedContentState$_get_config_$ref_65x4et() {
    return function (p0) {
      return p0.get_config_1xuuqw_k$();
    };
  }
  function SharedTransitionScope$SharedContentState$_set_config_$ref_l85pk1() {
    return function (p0, p1) {
      p0.set_config_r265w_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedTransitionScope$SharedContentState$_get_config_$ref_65x4et_0() {
    return function (p0) {
      return p0.get_config_1xuuqw_k$();
    };
  }
  function SharedTransitionScope$SharedContentState$_set_config_$ref_l85pk1_0() {
    return function (p0, p1) {
      p0.set_config_r265w_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedTransitionScope$SharedContentState$_get_internalState_$ref_b9767j() {
    return function (p0) {
      return p0.get_internalState_d3bhs8_k$();
    };
  }
  function SharedTransitionScope$SharedContentState$_set_internalState_$ref_wz02hv() {
    return function (p0, p1) {
      p0.set_internalState_a6ckva_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedTransitionScope$SharedContentState$_get_internalState_$ref_b9767j_0() {
    return function (p0) {
      return p0.get_internalState_d3bhs8_k$();
    };
  }
  function SharedTransitionScope$SharedContentState$_set_internalState_$ref_wz02hv_0() {
    return function (p0, p1) {
      p0.set_internalState_a6ckva_k$(p1);
      return Unit_getInstance();
    };
  }
  function PlaceholderSize() {
  }
  function ResizeMode() {
  }
  function OverlayClip() {
  }
  function SharedContentState(key, config) {
    config = config === VOID ? SharedContentConfig_getInstance() : config;
    this.key_1 = key;
    this.config$delegate_1 = mutableStateOf(config);
    this.internalState$delegate_1 = mutableStateOf(null);
  }
  protoOf(SharedContentState).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(SharedContentState).get_isAnimating_1l8qrs_k$ = function () {
    var tmp0_safe_receiver = this.get_internalState_d3bhs8_k$();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_boundsAnimation_bx9g2i_k$();
    return !((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_animationState_98s4ty_k$()) == null);
  };
  protoOf(SharedContentState).set_config_r265w_k$ = function (_set____db54di) {
    var tmp0 = this.config$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionScope$SharedContentState$_get_config_$ref_65x4et_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('config', 1, tmp, tmp_0, SharedTransitionScope$SharedContentState$_set_config_$ref_l85pk1_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedContentState).get_config_1xuuqw_k$ = function () {
    var tmp0 = this.config$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionScope$SharedContentState$_get_config_$ref_65x4et();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('config', 1, tmp, tmp_0, SharedTransitionScope$SharedContentState$_set_config_$ref_l85pk1());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedContentState).get_isEnabledByUser_1o81i5_k$ = function () {
    // Inline function 'kotlin.with' call
    var $this$with = this.get_config_1xuuqw_k$();
    return $this$with.get_isEnabled_6836ux_k$(this) || (this.get_isAnimating_1l8qrs_k$() && $this$with.get_shouldKeepEnabledForOngoingAnimation_t2umwi_k$());
  };
  protoOf(SharedContentState).get_isMatchFound_44sa8_k$ = function () {
    var tmp0_safe_receiver = this.get_internalState_d3bhs8_k$();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_sharedElement_xjw30y_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_foundMatch_g4mbjg_k$();
    return tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
  };
  protoOf(SharedContentState).prepareTransitionWithInitialVelocity_k2t7cz_k$ = function (initialVelocity) {
    // Inline function 'kotlin.let' call
    var it = _get_nonNullInternalState__g66s5n(this);
    // Inline function 'kotlin.with' call
    if (!this.get_config_1xuuqw_k$().get_isEnabled_6836ux_k$(this))
      return Unit_getInstance();
    it.get_sharedElement_xjw30y_k$().updateExitVelocity_u2vwtv_k$(initialVelocity);
  };
  protoOf(SharedContentState).get_clipPathInOverlay_c5z0b7_k$ = function () {
    return _get_nonNullInternalState__g66s5n(this).get_clipPathInOverlay_rtg516_k$();
  };
  protoOf(SharedContentState).get_parentSharedContentState_agqmhc_k$ = function () {
    var tmp0_safe_receiver = _get_nonNullInternalState__g66s5n(this).get_parentState_ui10gu_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_userState_dy2db1_k$();
  };
  protoOf(SharedContentState).set_internalState_a6ckva_k$ = function (_set____db54di) {
    var tmp0 = this.internalState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionScope$SharedContentState$_get_internalState_$ref_b9767j_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('internalState', 1, tmp, tmp_0, SharedTransitionScope$SharedContentState$_set_internalState_$ref_wz02hv_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedContentState).get_internalState_d3bhs8_k$ = function () {
    var tmp0 = this.internalState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionScope$SharedContentState$_get_internalState_$ref_b9767j();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('internalState', 1, tmp, tmp_0, SharedTransitionScope$SharedContentState$_set_internalState_$ref_wz02hv());
    return tmp0.get_value_j01efc_k$();
  };
  function SharedContentConfig() {
  }
  function SharedTransitionScope$skipToLookaheadSize$lambda(this$0) {
    return function () {
      return this$0.get_isTransitionActive_t69j02_k$();
    };
  }
  function SharedTransitionScope$skipToLookaheadPosition$lambda(this$0) {
    return function () {
      return this$0.get_isTransitionActive_t69j02_k$();
    };
  }
  function SharedTransitionScope$skipToLookaheadPosition$lambda_0(it) {
    return false;
  }
  function SharedTransitionScope$skipToLookaheadPosition$lambda_1($enabled) {
    return function ($this$approachLayout, it) {
      return $enabled();
    };
  }
  function SharedTransitionScope$skipToLookaheadPosition$lambda$lambda($enabled, this$0, $$this$run) {
    return function ($this$layout) {
      var tmp;
      if ($enabled()) {
        var tmp0_safe_receiver = $this$layout.get_coordinates_q6f2pa_k$();
        var tmp_0;
        if (tmp0_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          var target = this$0.localLookaheadPositionOf$default_10xwp7_k$(this$0.get_lookaheadScopeCoordinates_sb7bj3_k$($this$layout), tmp0_safe_receiver);
          var actual = this$0.get_lookaheadScopeCoordinates_sb7bj3_k$($this$layout).localPositionOf$default_f8vt4q_k$(tmp0_safe_receiver);
          var delta = Offset__minus_impl_hoj2c0(target, actual);
          var offset = Offset__minus_impl_hoj2c0(tmp0_safe_receiver.localPositionOf_hrey0l_k$(this$0.get_lookaheadScopeCoordinates_sb7bj3_k$($this$layout), delta), tmp0_safe_receiver.localPositionOf$default_f8vt4q_k$(this$0.get_lookaheadScopeCoordinates_sb7bj3_k$($this$layout)));
          $this$layout.place$default_dbzi3k_k$($$this$run, round(offset));
          tmp_0 = Unit_getInstance();
        }
        var tmp1_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          $this$layout.place$default_61faqz_k$($$this$run, 0, 0);
          tmp_1 = Unit_getInstance();
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      } else {
        $this$layout.place$default_61faqz_k$($$this$run, 0, 0);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SharedTransitionScope$skipToLookaheadPosition$lambda_2($enabled, this$0) {
    return function ($this$approachLayout, m, c) {
      // Inline function 'kotlin.run' call
      var $this$run = m.measure_4dmfk1_k$(c.value_1);
      var tmp = $this$run.get_width_j0q4yl_k$();
      var tmp_0 = $this$run.get_height_e7t92o_k$();
      return $this$approachLayout.layout$default_n19e5l_k$(tmp, tmp_0, VOID, SharedTransitionScope$skipToLookaheadPosition$lambda$lambda($enabled, this$0, $this$run));
    };
  }
  function SharedTransitionScope$renderInSharedTransitionScopeOverlay$lambda(this$0) {
    return function () {
      return this$0.get_isTransitionActive_t69j02_k$();
    };
  }
  function SharedTransitionScope() {
  }
  function _get_path__dbvv7q($this) {
    return $this.path_1;
  }
  function _set_isTransitionActive__umwr0u($this, _set____db54di) {
    var tmp0 = $this.isTransitionActive$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionScopeImpl$_get_isTransitionActive_$ref_59dojl_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isTransitionActive', 1, tmp, tmp_0, SharedTransitionScopeImpl$_set_isTransitionActive_$ref_rih4z9_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function sharedBoundsImpl($this, _this__u8e3s4, sharedContentState, parentTransition, visible, boundsTransform, placeholderSize, renderOnlyWhenVisible, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) {
    return composed(_this__u8e3s4, VOID, SharedTransitionScopeImpl$sharedBoundsImpl$lambda(sharedContentState, $this, parentTransition, visible, boundsTransform, placeholderSize, renderOnlyWhenVisible, clipInOverlayDuringTransition, zIndexInOverlay, renderInOverlayDuringTransition));
  }
  function sharedBoundsImpl$default($this, _this__u8e3s4, sharedContentState, parentTransition, visible, boundsTransform, placeholderSize, renderOnlyWhenVisible, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    placeholderSize = placeholderSize === VOID ? Companion_getInstance_16().ContentSize_1 : placeholderSize;
    return sharedBoundsImpl($this, _this__u8e3s4, sharedContentState, parentTransition, visible, boundsTransform, placeholderSize, renderOnlyWhenVisible, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  }
  function rememberSharedElementState($this, sharedElement, boundsAnimation, placeholderSize, renderOnlyWhenVisible, sharedContentState, clipInOverlayDuringTransition, zIndexInOverlay, renderInOverlayDuringTransition, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 864401334, 'C(rememberSharedElementState)P(6!1,2,4,5!1,7)1313@72577L504:SharedTransitionScope.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(864401334, $changed, -1, 'androidx.compose.animation.SharedTransitionScopeImpl.rememberSharedElementState (SharedTransitionScope.kt:1313)');
    }
    sourceInformationMarkerStart($composer_0, 1761007534, 'CC(remember):SharedTransitionScope.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value = new SharedElementEntry(sharedElement, boundsAnimation, placeholderSize, renderOnlyWhenVisible, clipInOverlayDuringTransition, renderInOverlayDuringTransition, sharedContentState, zIndexInOverlay);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    // Inline function 'kotlin.also' call
    sharedContentState.set_internalState_a6ckva_k$(tmp1_group);
    tmp1_group.set_sharedElement_2xbsqt_k$(sharedElement);
    tmp1_group.set_renderOnlyWhenVisible_f63i0s_k$(renderOnlyWhenVisible);
    tmp1_group.set_boundsAnimation_mkzem3_k$(boundsAnimation);
    tmp1_group.set_placeholderSize_w5vr6v_k$(placeholderSize);
    tmp1_group.set_overlayClip_a8g9zt_k$(clipInOverlayDuringTransition);
    tmp1_group.set_zIndex_58jhbh_k$(zIndexInOverlay);
    tmp1_group.set_renderInOverlayDuringTransition_bhc293_k$(renderInOverlayDuringTransition);
    tmp1_group.set_userState_zl3ka_k$(sharedContentState);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function _set__nullableRoot__16lwsd($this, _set____db54di) {
    $this._nullableRoot_1 = _set____db54di;
  }
  function _get__nullableRoot__gedfap($this) {
    return $this._nullableRoot_1;
  }
  function _set__nullableLookaheadRoot__f966sz($this, _set____db54di) {
    $this._nullableLookaheadRoot_1 = _set____db54di;
  }
  function _get__nullableLookaheadRoot__xiueqh($this) {
    return $this._nullableLookaheadRoot_1;
  }
  function _get_renderers__1vdp6n($this) {
    return $this.renderers_1;
  }
  function _get_sharedElements__kjeuj3($this) {
    return $this.sharedElements_1;
  }
  function sharedElementsFor($this, key) {
    var tmp0_elvis_lhs = $this.sharedElements_1.get_wei43m_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new SharedElement(key, $this);
      // Inline function 'kotlin.collections.set' call
      $this.sharedElements_1.put_4fpzoq_k$(key, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function ShapeBasedClip(clipShape) {
    this.clipShape_1 = clipShape;
    this.path_1 = Path();
  }
  protoOf(ShapeBasedClip).get_clipShape_i6onlk_k$ = function () {
    return this.clipShape_1;
  };
  protoOf(ShapeBasedClip).getClipPath_nnv5ej_k$ = function (sharedContentState, bounds, layoutDirection, density) {
    this.path_1.reset_5u6xz3_k$();
    addOutline(this.path_1, this.clipShape_1.createOutline_nnkieo_k$(bounds.get_size_cxx1ym_k$(), layoutDirection, density));
    this.path_1.translate_nzlwb0_k$(bounds.get_topLeft_ypvrd5_k$());
    return this.path_1;
  };
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function SharedTransitionScopeImpl$_get_isTransitionActive_$ref_59dojl() {
    return function (p0) {
      return p0.get_isTransitionActive_t69j02_k$();
    };
  }
  function SharedTransitionScopeImpl$_set_isTransitionActive_$ref_rih4z9() {
    return function (p0, p1) {
      _set_isTransitionActive__umwr0u(p0, p1);
      return Unit_getInstance();
    };
  }
  function SharedTransitionScopeImpl$_get_isTransitionActive_$ref_59dojl_0() {
    return function (p0) {
      return p0.get_isTransitionActive_t69j02_k$();
    };
  }
  function SharedTransitionScopeImpl$_set_isTransitionActive_$ref_rih4z9_0() {
    return function (p0, p1) {
      _set_isTransitionActive__umwr0u(p0, p1);
      return Unit_getInstance();
    };
  }
  function SharedTransitionScopeImpl$sharedElement$lambda(it) {
    return it.equals(EnterExitState_Visible_getInstance());
  }
  function SharedTransitionScopeImpl$sharedBounds$lambda(it) {
    return it.equals(EnterExitState_Visible_getInstance());
  }
  function SharedTransitionScopeImpl$sharedBounds$lambda$lambda($sharedContentState) {
    return function () {
      return $sharedContentState.get_isMatchFound_44sa8_k$();
    };
  }
  function SharedTransitionScopeImpl$sharedBounds$lambda$lambda_0($sharedContentState) {
    return function () {
      return $sharedContentState.get_isMatchFound_44sa8_k$();
    };
  }
  function SharedTransitionScopeImpl$sharedBounds$lambda_0($animatedVisibilityScope, $enter, $exit, $sharedContentState, $resizeMode) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceGroup_5hh8aj_k$(-233734437);
      sourceInformation($composer_0, 'C1064@58844L35,1056@58321L657:SharedTransitionScope.kt#xbi5r1');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-233734437, $changed, -1, 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBounds.<anonymous> (SharedTransitionScope.kt:1055)');
        tmp = Unit_getInstance();
      }
      var tmp_0 = $animatedVisibilityScope.get_transition_mcca1q_k$();
      sourceInformationMarkerStart($composer_0, -1280475426, 'CC(remember):SharedTransitionScope.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$($sharedContentState);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value = SharedTransitionScopeImpl$sharedBounds$lambda$lambda($sharedContentState);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_3 = createModifier(tmp_0, $enter, $exit, tmp1_group, 'enter/exit for ' + toString_0($sharedContentState.key_1), $composer_0, 0, 0);
      var tmp_4;
      if ($resizeMode instanceof ScaleToBoundsImpl) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-1039792755);
        sourceInformation($composer_0, '1069@59145L530');
        var tmp_5 = Companion_getInstance_0();
        sourceInformationMarkerStart($composer_0, -1280465299, 'CC(remember):SharedTransitionScope.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_0.changedInstance_s1wkiy_k$($sharedContentState);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var value_0 = SharedTransitionScopeImpl$sharedBounds$lambda$lambda_0($sharedContentState);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var tmp3_group = createContentScaleModifier(tmp_5, $resizeMode, tmp2_group);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_4 = tmp3_group;
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(-1039175545);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_4 = Companion_getInstance_0();
      }
      var tmp0 = tmp_3.then_g5qrxq_k$(tmp_4);
      var tmp_8;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_8 = Unit_getInstance();
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      return tmp0;
    };
  }
  function SharedTransitionScopeImpl$sharedElementWithCallerManagedVisibility$lambda($visible) {
    return function (it) {
      return $visible;
    };
  }
  function SharedTransitionScopeImpl$sharedBoundsWithCallerManagedVisibility$lambda($visible) {
    return function (it) {
      return $visible;
    };
  }
  function SharedTransitionScopeImpl$observeAnimatingBlock$lambda(this$0) {
    return function () {
      var tmp0 = this$0.sharedElements_1;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        if (tmp0.isEmpty_y1axqb_k$()) {
          break $l$block_0;
        }
        // Inline function 'kotlin.collections.iterator' call
        var _iterator__ex2g4s = tmp0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'kotlin.collections.component2' call
          var element_0 = element.get_value_j01efc_k$();
          if (element_0.isAnimating_x1kvqk_k$()) {
            break $l$block_0;
          }
        }
      }
      return Unit_getInstance();
    };
  }
  function SharedTransitionScopeImpl$sharedBoundsImpl$lambda($sharedContentState, this$0, $parentTransition, $visible, $boundsTransform, $placeholderSize, $renderOnlyWhenVisible, $clipInOverlayDuringTransition, $zIndexInOverlay, $renderInOverlayDuringTransition) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceGroup_5hh8aj_k$(-1539505585);
      sourceInformation($composer_0, 'C:SharedTransitionScope.kt#xbi5r1');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1539505585, $changed, -1, 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBoundsImpl.<anonymous> (SharedTransitionScope.kt:1227)');
        tmp = Unit_getInstance();
      }
      var key = $sharedContentState.key_1;
      $composer_0.startMovableGroup_clfloq_k$(-1996110529, key);
      sourceInformation($composer_0, '1230@68097L35,1287@71493L559');
      sourceInformationMarkerStart($composer_0, -1996113006, 'CC(remember):SharedTransitionScope.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value = sharedElementsFor(this$0, key);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp2_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var sharedElement = tmp2_group;
      $composer_0.startMovableGroup_clfloq_k$(-1996106748, $parentTransition);
      sourceInformation($composer_0, '1267@70446L438');
      var tmp_2;
      if (!($parentTransition == null)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-1749734647);
        sourceInformation($composer_0, '1235@68371L121');
        var tmp0 = $parentTransition;
        // Inline function 'androidx.compose.animation.core.createChildTransition' call
        var label = toString_0(key);
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, -539313577, 'CC(createChildTransition)1768@75281L36,1769@75341L74,1770@75438L39,1771@75489L63:Transition.kt#pdpnli');
        if (!((0 & 1) === 0))
          label = 'ChildTransition';
        sourceInformationMarkerStart($composer_1, 1410701659, 'CC(remember):Transition.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = (0 & 14 ^ 6) > 4 && $composer_1.changed_ga7h3f_k$(tmp0) || (0 & 6) === 4;
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var value_0 = tmp0.get_currentState_snihnl_k$();
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        var initialParentState = tmp1_group;
        var tmp0_0 = tmp0.get_isSeeking_vjb393_k$() ? tmp0.get_currentState_snihnl_k$() : initialParentState;
        var $changed_0 = 112 & 0 >> 3;
        var $composer_2 = $composer_1;
        $composer_0.startReplaceGroup_5hh8aj_k$(1498260051);
        sourceInformation($composer_0, 'C:SharedTransitionScope.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(1498260051, $changed_0, -1, 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBoundsImpl.<anonymous>.<anonymous>.<anonymous>.<anonymous> (SharedTransitionScope.kt:1236)');
        }
        var tmp0_1 = $visible(tmp0_0);
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_0.endReplaceGroup_ek144q_k$();
        var initialState = tmp0_1;
        var tmp0_2 = tmp0.get_targetState_kri3mx_k$();
        var $changed_1 = 112 & 0 >> 3;
        var $composer_3 = $composer_1;
        $composer_0.startReplaceGroup_5hh8aj_k$(1498260051);
        sourceInformation($composer_0, 'C:SharedTransitionScope.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(1498260051, $changed_1, -1, 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBoundsImpl.<anonymous>.<anonymous>.<anonymous>.<anonymous> (SharedTransitionScope.kt:1236)');
        }
        var tmp0_3 = $visible(tmp0_2);
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_0.endReplaceGroup_ek144q_k$();
        var targetState = tmp0_3;
        var tmp0_4 = createChildTransitionInternal(tmp0, initialState, targetState, label, $composer_1, 14 & 0 | 7168 & 0 << 6);
        sourceInformationMarkerEnd($composer_1);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_2 = tmp0_4;
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(-1749482679);
        sourceInformation($composer_0, '1242@68774L1251,1261@70137L35');
        var targetState_0 = (typeof $visible === 'function' ? $visible : THROW_CCE())(Unit_getInstance());
        sourceInformationMarkerStart($composer_0, -1996090126, 'CC(remember):SharedTransitionScope.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (false || it_1 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var tmp_6;
          if (sharedElement.get_enabledEntries_97jleg_k$().isEmpty_y1axqb_k$()) {
            tmp_6 = targetState_0;
          } else {
            tmp_6 = !targetState_0;
          }
          var initialState_0 = tmp_6;
          var value_1 = new MutableTransitionState(initialState_0);
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_7 = tmp_5;
        var tmp4_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.also' call
        tmp4_group.set_targetState_1ag6bn_k$(targetState_0);
        var transitionState = tmp4_group;
        var tmp6_group = rememberTransition(transitionState, null, $composer_0, androidx_compose_animation_core_MutableTransitionState$stableprop_getter(), 2);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_2 = tmp6_group;
      }
      var boundsTransition = tmp_2;
      $composer_0.startMovableGroup_clfloq_k$(-1996043323, this$0.get_isTransitionActive_t69j02_k$());
      sourceInformation($composer_0, '1265@70346L45');
      var tmp_8 = get_VectorConverter_3(Companion_getInstance());
      var tmp7 = createDeferredAnimation(boundsTransition, tmp_8, null, $composer_0, 0, 2);
      $composer_0.endMovableGroup_kd2hcs_k$();
      var animation = tmp7;
      sourceInformationMarkerStart($composer_0, -1996037435, 'CC(remember):SharedTransitionScope.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.changed_ga7h3f_k$(boundsTransition);
      // Inline function 'kotlin.let' call
      var it_2 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid_0 || it_2 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value_2 = new BoundsAnimation(this$0, boundsTransition, animation, $boundsTransform, sharedElement.get_momentumAnimationOffset_v7y4ra_k$());
        $composer_0.updateRememberedValue_l1wh71_k$(value_2);
        tmp_9 = value_2;
      } else {
        tmp_9 = it_2;
      }
      var tmp_10 = tmp_9;
      var tmp8_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.also' call
      tmp8_group.updateAnimation_opighb_k$(animation, $boundsTransform);
      if (false) {
        println('SharedTransition, current state:' + (' ' + boundsTransition.get_currentState_snihnl_k$()) + (', target: ' + boundsTransition.get_targetState_kri3mx_k$()));
      }
      $composer_0.endMovableGroup_kd2hcs_k$();
      var boundsAnimation = tmp8_group;
      var tmp1 = rememberSharedElementState(this$0, sharedElement, boundsAnimation, $placeholderSize, $renderOnlyWhenVisible, $sharedContentState, $clipInOverlayDuringTransition, $zIndexInOverlay, $renderInOverlayDuringTransition, $composer_0, 0);
      $composer_0.endMovableGroup_kd2hcs_k$();
      var sharedElementState = tmp1;
      var tmp0_5 = $this$composed.then_g5qrxq_k$(new SharedBoundsNodeElement(sharedElementState));
      var tmp_11;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_11 = Unit_getInstance();
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      return tmp0_5;
    };
  }
  function SharedTransitionScopeImpl$drawInOverlay$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp;
    var tmp_0;
    var tmp_1;
    if (a.get_zIndex_mbbc75_k$() === 0.0) {
      tmp_1 = a instanceof SharedElementEntry;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = a.get_parentState_ui10gu_k$() == null;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = -1.0;
    } else {
      tmp = a.get_zIndex_mbbc75_k$();
    }
    var tmp_2 = tmp;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    if (b.get_zIndex_mbbc75_k$() === 0.0) {
      tmp_5 = b instanceof SharedElementEntry;
    } else {
      tmp_5 = false;
    }
    if (tmp_5) {
      tmp_4 = b.get_parentState_ui10gu_k$() == null;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = -1.0;
    } else {
      tmp_3 = b.get_zIndex_mbbc75_k$();
    }
    var tmp$ret$1 = tmp_3;
    return compareValues(tmp_2, tmp$ret$1);
  }
  function SharedTransitionScopeImpl$onEntryRemoved$slambda($$this$with, $sharedElementState, resultContinuation) {
    this.$$this$with_1 = $$this$with;
    this.$sharedElementState_1 = $sharedElementState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SharedTransitionScopeImpl$onEntryRemoved$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SharedTransitionScopeImpl$onEntryRemoved$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SharedTransitionScopeImpl$onEntryRemoved$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          if (this.$$this$with_1.get_allEntries_nhmbbc_k$().isEmpty_y1axqb_k$()) {
            if (false) {
              println('SharedTransition, key removed. key =' + (' ' + toString_0(this.$sharedElementState_1.get_sharedElement_xjw30y_k$().get_key_18j28a_k$()) + ',') + (' state: ' + toString_0(this.$sharedElementState_1.get_sharedElement_xjw30y_k$().get_state_wrioid_k$())));
            }
            this.$$this$with_1.get_scope_iyfcq3_k$().sharedElements_1.remove_gppy8k_k$(this.$$this$with_1.get_key_18j28a_k$());
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(SharedTransitionScopeImpl$onEntryRemoved$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new SharedTransitionScopeImpl$onEntryRemoved$slambda(this.$$this$with_1, this.$sharedElementState_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(SharedTransitionScopeImpl$onEntryRemoved$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function SharedTransitionScopeImpl$onEntryRemoved$slambda_0($$this$with, $sharedElementState, resultContinuation) {
    var i = new SharedTransitionScopeImpl$onEntryRemoved$slambda($$this$with, $sharedElementState, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SharedTransitionScopeImpl(lookaheadScope, coroutineScope) {
    this.$$delegate_0__1 = lookaheadScope;
    this.coroutineScope_1 = coroutineScope;
    this.invalidateOverlay_1 = null;
    this.isTransitionActive$delegate_1 = mutableStateOf(false);
    this.testBlockToRun_1 = null;
    var tmp = this;
    tmp.observeAnimatingBlock_1 = SharedTransitionScopeImpl$observeAnimatingBlock$lambda(this);
    this._nullableRoot_1 = null;
    this._nullableLookaheadRoot_1 = null;
    this.renderers_1 = mutableStateListOf();
    this.sharedElements_1 = mutableStateMapOf();
  }
  protoOf(SharedTransitionScopeImpl).get_coroutineScope_5k7h45_k$ = function () {
    return this.coroutineScope_1;
  };
  protoOf(SharedTransitionScopeImpl).set_invalidateOverlay_6lw7a5_k$ = function (_set____db54di) {
    this.invalidateOverlay_1 = _set____db54di;
  };
  protoOf(SharedTransitionScopeImpl).get_invalidateOverlay_sqmoz0_k$ = function () {
    return this.invalidateOverlay_1;
  };
  protoOf(SharedTransitionScopeImpl).get_isTransitionActive_t69j02_k$ = function () {
    var tmp0 = this.isTransitionActive$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionScopeImpl$_get_isTransitionActive_$ref_59dojl();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isTransitionActive', 1, tmp, tmp_0, SharedTransitionScopeImpl$_set_isTransitionActive_$ref_rih4z9());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedTransitionScopeImpl).set_testBlockToRun_hi61k9_k$ = function (_set____db54di) {
    this.testBlockToRun_1 = _set____db54di;
  };
  protoOf(SharedTransitionScopeImpl).get_testBlockToRun_sdf6ma_k$ = function () {
    return this.testBlockToRun_1;
  };
  protoOf(SharedTransitionScopeImpl).skipToLookaheadSize_fy7u2l_k$ = function (_this__u8e3s4, enabled) {
    return _this__u8e3s4.then_g5qrxq_k$(new SkipToLookaheadSizeElement(VOID, enabled));
  };
  protoOf(SharedTransitionScopeImpl).renderInSharedTransitionScopeOverlay_x89i4l_k$ = function (_this__u8e3s4, zIndexInOverlay, renderInOverlay) {
    return _this__u8e3s4.then_g5qrxq_k$(new RenderInTransitionOverlayNodeElement(this, renderInOverlay, zIndexInOverlay));
  };
  protoOf(SharedTransitionScopeImpl).sharedElement_swjtlq_k$ = function (_this__u8e3s4, sharedContentState, animatedVisibilityScope, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) {
    var tmp = animatedVisibilityScope.get_transition_mcca1q_k$();
    return sharedBoundsImpl(this, _this__u8e3s4, sharedContentState, tmp, SharedTransitionScopeImpl$sharedElement$lambda, boundsTransform, placeholderSize, true, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  };
  protoOf(SharedTransitionScopeImpl).sharedBounds_39r956_k$ = function (_this__u8e3s4, sharedContentState, animatedVisibilityScope, enter, exit, boundsTransform, resizeMode, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) {
    var tmp0_parentTransition = animatedVisibilityScope.get_transition_mcca1q_k$();
    var tmp = sharedBoundsImpl(this, _this__u8e3s4, sharedContentState, tmp0_parentTransition, SharedTransitionScopeImpl$sharedBounds$lambda, boundsTransform, placeholderSize, false, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
    return composed(tmp, VOID, SharedTransitionScopeImpl$sharedBounds$lambda_0(animatedVisibilityScope, enter, exit, sharedContentState, resizeMode));
  };
  protoOf(SharedTransitionScopeImpl).sharedElementWithCallerManagedVisibility_lqpqms_k$ = function (_this__u8e3s4, sharedContentState, visible, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) {
    return sharedBoundsImpl(this, _this__u8e3s4, sharedContentState, null, SharedTransitionScopeImpl$sharedElementWithCallerManagedVisibility$lambda(visible), boundsTransform, placeholderSize, true, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  };
  protoOf(SharedTransitionScopeImpl).sharedBoundsWithCallerManagedVisibility_rguvx4_k$ = function (_this__u8e3s4, sharedContentState, visible, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) {
    return sharedBoundsImpl(this, _this__u8e3s4, sharedContentState, null, SharedTransitionScopeImpl$sharedBoundsWithCallerManagedVisibility$lambda(visible), boundsTransform, placeholderSize, false, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  };
  protoOf(SharedTransitionScopeImpl).sharedBoundsWithCallerManagedVisibility$default_megph9_k$ = function (_this__u8e3s4, sharedContentState, visible, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    boundsTransform = boundsTransform === VOID ? SharedTransitionDefaults_getInstance().BoundsTransform_1 : boundsTransform;
    placeholderSize = placeholderSize === VOID ? Companion_getInstance_16().ContentSize_1 : placeholderSize;
    renderInOverlayDuringTransition = renderInOverlayDuringTransition === VOID ? true : renderInOverlayDuringTransition;
    zIndexInOverlay = zIndexInOverlay === VOID ? 0.0 : zIndexInOverlay;
    clipInOverlayDuringTransition = clipInOverlayDuringTransition === VOID ? get_ParentClip() : clipInOverlayDuringTransition;
    return $super === VOID ? this.sharedBoundsWithCallerManagedVisibility_rguvx4_k$(_this__u8e3s4, sharedContentState, visible, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) : $super.sharedBoundsWithCallerManagedVisibility_rguvx4_k$.call(this, _this__u8e3s4, sharedContentState, visible, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  };
  protoOf(SharedTransitionScopeImpl).OverlayClip_rtukmp_k$ = function (clipShape) {
    return new ShapeBasedClip(clipShape);
  };
  protoOf(SharedTransitionScopeImpl).get_observeAnimatingBlock_yc7cr3_k$ = function () {
    return this.observeAnimatingBlock_1;
  };
  protoOf(SharedTransitionScopeImpl).updateTransitionActiveness_isl67c_k$ = function () {
    var tmp0 = this.sharedElements_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      if (tmp0.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = tmp0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlin.collections.component2' call
        var element_0 = element.get_value_j01efc_k$();
        if (element_0.isAnimating_x1kvqk_k$()) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    var isActive = tmp$ret$0;
    if (!(isActive === this.get_isTransitionActive_t69j02_k$())) {
      _set_isTransitionActive__umwr0u(this, isActive);
      if (!isActive) {
        // Inline function 'kotlin.collections.forEach' call
        // Inline function 'kotlin.collections.iterator' call
        var _iterator__ex2g4s_0 = this.sharedElements_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
        while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
          var element_1 = _iterator__ex2g4s_0.next_20eer_k$();
          // Inline function 'kotlin.collections.component2' call
          var element_2 = element_1.get_value_j01efc_k$();
          element_2.onSharedTransitionFinished_4wcl9h_k$();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_1 = this.sharedElements_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
      var element_3 = _iterator__ex2g4s_1.next_20eer_k$();
      // Inline function 'kotlin.collections.component2' call
      var element_4 = element_3.get_value_j01efc_k$();
      element_4.updateMatch_oeh0qv_k$();
    }
  };
  protoOf(SharedTransitionScopeImpl).set_root_rgs4c_k$ = function (value) {
    this._nullableRoot_1 = value;
  };
  protoOf(SharedTransitionScopeImpl).get_root_4w1woo_k$ = function () {
    var tmp0 = this._nullableRoot_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Error: Uninitialized LayoutCoordinates. Please make sure when using the SharedTransitionScope composable function, the modifier passed to the child content is being used, or use SharedTransitionLayout instead.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  };
  protoOf(SharedTransitionScopeImpl).set_lookaheadRoot_54xy3g_k$ = function (value) {
    this._nullableLookaheadRoot_1 = value;
  };
  protoOf(SharedTransitionScopeImpl).get_lookaheadRoot_u3i6mw_k$ = function () {
    var tmp0 = this._nullableLookaheadRoot_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Error: Uninitialized LayoutCoordinates. Please make sure when using the SharedTransitionScope composable function, the modifier passed to the child content is being used, or use SharedTransitionLayout instead.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  };
  protoOf(SharedTransitionScopeImpl).drawInOverlay_27qf1y_k$ = function (scope) {
    // Inline function 'kotlin.collections.sortBy' call
    var this_0 = this.renderers_1;
    if (this_0.get_size_woubt6_k$() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = SharedTransitionScopeImpl$drawInOverlay$lambda;
      var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
      sortWith(this_0, tmp$ret$0);
    }
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.renderers_1;
    var inductionVariable = 0;
    var last = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_1.get_c1px32_k$(index);
        item.drawInOverlay_ircoes_k$(scope);
      }
       while (inductionVariable <= last);
  };
  protoOf(SharedTransitionScopeImpl).onEntryRemoved_ijc9q5_k$ = function (sharedElementState) {
    if (false) {
      println('SharedTransition, entry removed, key: ' + toString_0(sharedElementState.get_sharedElement_xjw30y_k$().get_key_18j28a_k$()) + ',' + (' state: ' + toString_0(sharedElementState.get_sharedElement_xjw30y_k$().get_state_wrioid_k$())));
    }
    // Inline function 'kotlin.with' call
    var $this$with = sharedElementState.get_sharedElement_xjw30y_k$();
    $this$with.removeEntry_rdoucb_k$(sharedElementState);
    this.updateTransitionActiveness_isl67c_k$();
    this.renderers_1.remove_an8aut_k$(sharedElementState);
    if ($this$with.get_allEntries_nhmbbc_k$().isEmpty_y1axqb_k$()) {
      var tmp = $this$with.get_scope_iyfcq3_k$().coroutineScope_1;
      launch(tmp, VOID, VOID, SharedTransitionScopeImpl$onEntryRemoved$slambda_0($this$with, sharedElementState, null));
    }
  };
  protoOf(SharedTransitionScopeImpl).onEntryAdded_8atu1p_k$ = function (sharedElementState) {
    // Inline function 'kotlin.with' call
    sharedElementState.get_sharedElement_xjw30y_k$().addEntry_5r9v5k_k$(sharedElementState);
    this.updateTransitionActiveness_isl67c_k$();
    var tmp0 = this.renderers_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var index = 0;
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        var tmp0_safe_receiver = item instanceof SharedElementEntry ? item : null;
        if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_sharedElement_xjw30y_k$(), sharedElementState.get_sharedElement_xjw30y_k$())) {
          tmp$ret$1 = index;
          break $l$block;
        }
        index = index + 1 | 0;
      }
      tmp$ret$1 = -1;
    }
    var id = tmp$ret$1;
    var tmp;
    if (id === (this.renderers_1.get_size_woubt6_k$() - 1 | 0) || id === -1) {
      tmp = this.renderers_1.add_wl2rvy_k$(sharedElementState);
    } else {
      this.renderers_1.add_gaf1mg_k$(id + 1 | 0, sharedElementState);
      tmp = Unit_getInstance();
    }
  };
  protoOf(SharedTransitionScopeImpl).onLayerRendererCreated_lwx1jm_k$ = function (renderer) {
    this.renderers_1.add_wl2rvy_k$(renderer);
  };
  protoOf(SharedTransitionScopeImpl).onLayerRendererRemoved_bn3slm_k$ = function (renderer) {
    this.renderers_1.remove_an8aut_k$(renderer);
  };
  protoOf(SharedTransitionScopeImpl).toLookaheadCoordinates_1gvv32_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.toLookaheadCoordinates_1gvv32_k$(_this__u8e3s4);
  };
  protoOf(SharedTransitionScopeImpl).localLookaheadPositionOf_b7sqvq_k$ = function (_this__u8e3s4, sourceCoordinates, relativeToSource, includeMotionFrameOfReference) {
    return this.$$delegate_0__1.localLookaheadPositionOf_b7sqvq_k$(_this__u8e3s4, sourceCoordinates, relativeToSource, includeMotionFrameOfReference);
  };
  protoOf(SharedTransitionScopeImpl).get_lookaheadScopeCoordinates_sb7bj3_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.get_lookaheadScopeCoordinates_sb7bj3_k$(_this__u8e3s4);
  };
  function ScaleToBoundsImpl(contentScale, alignment) {
    this.contentScale_1 = contentScale;
    this.alignment_1 = alignment;
  }
  protoOf(ScaleToBoundsImpl).get_contentScale_i3wrkq_k$ = function () {
    return this.contentScale_1;
  };
  protoOf(ScaleToBoundsImpl).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  function RemeasureImpl() {
    RemeasureImpl_instance = this;
  }
  var RemeasureImpl_instance;
  function RemeasureImpl_getInstance() {
    if (RemeasureImpl_instance == null)
      new RemeasureImpl();
    return RemeasureImpl_instance;
  }
  function ScaleToBoundsCached(contentScale, alignment) {
    _init_properties_SharedTransitionScope_kt__irnofc();
    if (get_shouldCache(contentScale) && get_shouldCache_0(alignment)) {
      // Inline function 'androidx.collection.MutableScatterMap.getOrPut' call
      var this_0 = get_cachedScaleToBoundsImplMap();
      var tmp0_elvis_lhs = this_0.get_wei43m_k$(contentScale);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_1 = new MutableScatterMap();
        this_0.set_b9w55f_k$(contentScale, this_1);
        tmp = this_1;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var map = tmp;
      // Inline function 'androidx.collection.MutableScatterMap.getOrPut' call
      var tmp0_elvis_lhs_0 = map.get_wei43m_k$(alignment);
      var tmp_0;
      if (tmp0_elvis_lhs_0 == null) {
        // Inline function 'kotlin.also' call
        var this_2 = new ScaleToBoundsImpl(contentScale, alignment);
        map.set_b9w55f_k$(alignment, this_2);
        tmp_0 = this_2;
      } else {
        tmp_0 = tmp0_elvis_lhs_0;
      }
      return tmp_0;
    } else {
      return new ScaleToBoundsImpl(contentScale, alignment);
    }
  }
  function SharedContentConfig_0() {
    SharedContentConfig_instance = this;
  }
  var SharedContentConfig_instance;
  function SharedContentConfig_getInstance() {
    if (SharedContentConfig_instance == null)
      new SharedContentConfig_0();
    return SharedContentConfig_instance;
  }
  function sam$androidx_compose_animation_BoundsTransform$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_BoundsTransform$0_1).createAnimationSpec_whg8mb_k$ = function (initialBounds, targetBounds) {
    return this.function_1(initialBounds, targetBounds);
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0_1).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, BoundsTransform) : false) {
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
  protoOf(sam$androidx_compose_animation_BoundsTransform$0_1).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function SharedTransitionDefaults$BoundsTransform$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0) {
    return get_DefaultSpring();
  }
  function SharedTransitionDefaults() {
    SharedTransitionDefaults_instance = this;
    var tmp = this;
    var tmp_0 = SharedTransitionDefaults$BoundsTransform$lambda;
    tmp.BoundsTransform_1 = new sam$androidx_compose_animation_BoundsTransform$0_1(tmp_0);
  }
  protoOf(SharedTransitionDefaults).get_BoundsTransform_ti28r6_k$ = function () {
    return this.BoundsTransform_1;
  };
  var SharedTransitionDefaults_instance;
  function SharedTransitionDefaults_getInstance() {
    if (SharedTransitionDefaults_instance == null)
      new SharedTransitionDefaults();
    return SharedTransitionDefaults_instance;
  }
  function CachedSharedContentConfig() {
    CachedSharedContentConfig_instance = this;
  }
  var CachedSharedContentConfig_instance;
  function CachedSharedContentConfig_getInstance() {
    if (CachedSharedContentConfig_instance == null)
      new CachedSharedContentConfig();
    return CachedSharedContentConfig_instance;
  }
  function get_shouldCache(_this__u8e3s4) {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return _this__u8e3s4 === Companion_getInstance_12().get_FillWidth_n2o75m_k$() || _this__u8e3s4 === Companion_getInstance_12().get_FillHeight_262ytp_k$() || _this__u8e3s4 === Companion_getInstance_12().get_FillBounds_4umybj_k$() || _this__u8e3s4 === Companion_getInstance_12().get_Fit_18jtko_k$() || _this__u8e3s4 === Companion_getInstance_12().get_Crop_wnzuux_k$() || _this__u8e3s4 === Companion_getInstance_12().get_None_wo6tgh_k$() || _this__u8e3s4 === Companion_getInstance_12().get_Inside_bggkb_k$();
  }
  function get_shouldCache_0(_this__u8e3s4) {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return _this__u8e3s4 === Companion_getInstance_5().get_TopStart_o4x792_k$() || _this__u8e3s4 === Companion_getInstance_5().get_TopCenter_u4q5vl_k$() || _this__u8e3s4 === Companion_getInstance_5().get_TopEnd_4wiiy7_k$() || _this__u8e3s4 === Companion_getInstance_5().get_CenterStart_2305fg_k$() || _this__u8e3s4 === Companion_getInstance_5().get_Center_3arb0i_k$() || _this__u8e3s4 === Companion_getInstance_5().get_CenterEnd_uti4xp_k$() || _this__u8e3s4 === Companion_getInstance_5().get_BottomStart_v81qpa_k$() || _this__u8e3s4 === Companion_getInstance_5().get_BottomCenter_yatb1z_k$() || _this__u8e3s4 === Companion_getInstance_5().get_BottomEnd_ayz0tj_k$();
  }
  function ParentClip$1() {
  }
  protoOf(ParentClip$1).getClipPath_nnv5ej_k$ = function (sharedContentState, bounds, layoutDirection, density) {
    var tmp0_safe_receiver = sharedContentState.get_parentSharedContentState_agqmhc_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_clipPathInOverlay_c5z0b7_k$();
  };
  var properties_initialized_SharedTransitionScope_kt_rkj5u2;
  function _init_properties_SharedTransitionScope_kt__irnofc() {
    if (!properties_initialized_SharedTransitionScope_kt_rkj5u2) {
      properties_initialized_SharedTransitionScope_kt_rkj5u2 = true;
      DefaultSpring = spring(VOID, 400.0, get_VisibilityThreshold(Companion_getInstance()));
      ParentClip = new ParentClip$1();
      cachedScaleToBoundsImplMap = new MutableScatterMap();
      androidx_compose_animation_SharedTransitionScope_SharedContentState$stable = 8;
      androidx_compose_animation_SharedTransitionScopeImpl$stable = 0;
      androidx_compose_animation_ScaleToBoundsImpl$stable = 0;
      androidx_compose_animation_SharedTransitionDefaults_SharedContentConfig$stable = 0;
      androidx_compose_animation_SharedTransitionDefaults$stable = 8;
    }
  }
  var androidx_compose_animation_SharedTransitionStateMachine_State$stable;
  var androidx_compose_animation_SharedTransitionStateMachine$stable;
  var androidx_compose_animation_NoMatchFound$stable;
  var androidx_compose_animation_ActiveMatchFoundConfigPending$stable;
  var androidx_compose_animation_MatchIsOrHasBeenConfigured$stable;
  var androidx_compose_animation_ActiveMatchConfigured$stable;
  var androidx_compose_animation_ActiveMatchRemovedDuringTransition$stable;
  var androidx_compose_animation_TargetData$stable;
  function State() {
  }
  protoOf(State).get_targetData_c4trx8_k$ = function () {
    return null;
  };
  protoOf(State).get_currentBounds_rrenad_k$ = function () {
    return null;
  };
  protoOf(State).get_activeMatchFound_5y5djo_k$ = function () {
    return false;
  };
  protoOf(State).get_matchIsOrHasBeenConfigured_wqv4it_k$ = function () {
    return false;
  };
  protoOf(State).updateBounds_rr2frf_k$ = function (bounds) {
  };
  protoOf(State).initializeCurrentBounds_wgn9af_k$ = function (sharedElement) {
    return this.get_currentBounds_rrenad_k$();
  };
  protoOf(State).configureActiveMatch_22bsda_k$ = function (sharedElement, targetBoundsProvider, lookaheadSize, topLeft, structuralOffset) {
    // Inline function 'kotlin.error' call
    var message = 'Active match can only be configured in ActiveMatchFoundConfigPending or' + (' ActiveMatchConfigured state. Current state: ' + toString_0(this));
    throw IllegalStateException_init_$Create$(toString_0(message));
  };
  function _set_state__ks53v8($this, _set____db54di) {
    var tmp0 = $this.state$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionStateMachine$_get_state_$ref_lkxq0r_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('state', 1, tmp, tmp_0, SharedTransitionStateMachine$_set_state_$ref_7pwqdt_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_lastHandledRequestId__np5iib($this, _set____db54di) {
    $this.lastHandledRequestId_1 = _set____db54di;
  }
  function _get_lastHandledRequestId__9r2uhz($this) {
    return $this.lastHandledRequestId_1;
  }
  function _set_requestId__kpqe4b($this, _set____db54di) {
    var tmp0 = $this.requestId$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionStateMachine$_get_requestId_$ref_t7ssbi_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('requestId', 1, tmp, tmp_0, SharedTransitionStateMachine$_set_requestId_$ref_e019t6_0());
    tmp0.set_intValue_s3g6dz_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_requestId__l0j7g9($this) {
    var tmp0 = $this.requestId$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionStateMachine$_get_requestId_$ref_t7ssbi();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('requestId', 1, tmp, tmp_0, SharedTransitionStateMachine$_set_requestId_$ref_e019t6());
    return tmp0.get_intValue_mlvnn9_k$();
  }
  function _set_requestToBeHandled__kuu5hk($this, _set____db54di) {
    $this.requestToBeHandled_1 = _set____db54di;
  }
  function _get_requestToBeHandled__d315ms($this) {
    return $this.requestToBeHandled_1;
  }
  function _get_allEntries__82rm4c($this) {
    return $this.sharedElement_1.get_allEntries_nhmbbc_k$();
  }
  function _get_enabledEntries__hv5uqk($this) {
    return $this.sharedElement_1.get_enabledEntries_97jleg_k$();
  }
  function _set_targetBoundsProvider__ob9lds($this, _set____db54di) {
    $this.targetBoundsProvider_1 = _set____db54di;
  }
  function _get_targetBoundsProvider__ad6xdg($this) {
    return $this.targetBoundsProvider_1;
  }
  function _set_targetBoundsProviderUpdateRequestId__f69jd1($this, _set____db54di) {
    var tmp0 = $this.targetBoundsProviderUpdateRequestId$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionStateMachine$_get_targetBoundsProviderUpdateRequestId_$ref_6cqxr6_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('targetBoundsProviderUpdateRequestId', 1, tmp, tmp_0, SharedTransitionStateMachine$_set_targetBoundsProviderUpdateRequestId_$ref_g36506_0());
    tmp0.set_intValue_s3g6dz_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_targetBoundsProviderUpdateRequestId__l423ll($this) {
    var tmp0 = $this.targetBoundsProviderUpdateRequestId$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionStateMachine$_get_targetBoundsProviderUpdateRequestId_$ref_6cqxr6();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetBoundsProviderUpdateRequestId', 1, tmp, tmp_0, SharedTransitionStateMachine$_set_targetBoundsProviderUpdateRequestId_$ref_g36506());
    return tmp0.get_intValue_mlvnn9_k$();
  }
  function _set_lastHandledTargetProviderUpdateRequestId__uvzmqm($this, _set____db54di) {
    $this.lastHandledTargetProviderUpdateRequestId_1 = _set____db54di;
  }
  function _get_lastHandledTargetProviderUpdateRequestId__d9clw2($this) {
    return $this.lastHandledTargetProviderUpdateRequestId_1;
  }
  function SharedTransitionStateMachine$_get_state_$ref_lkxq0r() {
    return function (p0) {
      return p0.get_state_iypx7s_k$();
    };
  }
  function SharedTransitionStateMachine$_set_state_$ref_7pwqdt() {
    return function (p0, p1) {
      _set_state__ks53v8(p0, p1);
      return Unit_getInstance();
    };
  }
  function SharedTransitionStateMachine$_get_state_$ref_lkxq0r_0() {
    return function (p0) {
      return p0.get_state_iypx7s_k$();
    };
  }
  function SharedTransitionStateMachine$_set_state_$ref_7pwqdt_0() {
    return function (p0, p1) {
      _set_state__ks53v8(p0, p1);
      return Unit_getInstance();
    };
  }
  function SharedTransitionStateMachine$_get_requestId_$ref_t7ssbi() {
    return function (p0) {
      return _get_requestId__l0j7g9(p0);
    };
  }
  function SharedTransitionStateMachine$_set_requestId_$ref_e019t6() {
    return function (p0, p1) {
      _set_requestId__kpqe4b(p0, p1);
      return Unit_getInstance();
    };
  }
  function SharedTransitionStateMachine$_get_requestId_$ref_t7ssbi_0() {
    return function (p0) {
      return _get_requestId__l0j7g9(p0);
    };
  }
  function SharedTransitionStateMachine$_set_requestId_$ref_e019t6_0() {
    return function (p0, p1) {
      _set_requestId__kpqe4b(p0, p1);
      return Unit_getInstance();
    };
  }
  function SharedTransitionStateMachine$_get_targetBoundsProviderUpdateRequestId_$ref_6cqxr6() {
    return function (p0) {
      return _get_targetBoundsProviderUpdateRequestId__l423ll(p0);
    };
  }
  function SharedTransitionStateMachine$_set_targetBoundsProviderUpdateRequestId_$ref_g36506() {
    return function (p0, p1) {
      _set_targetBoundsProviderUpdateRequestId__f69jd1(p0, p1);
      return Unit_getInstance();
    };
  }
  function SharedTransitionStateMachine$_get_targetBoundsProviderUpdateRequestId_$ref_6cqxr6_0() {
    return function (p0) {
      return _get_targetBoundsProviderUpdateRequestId__l423ll(p0);
    };
  }
  function SharedTransitionStateMachine$_set_targetBoundsProviderUpdateRequestId_$ref_g36506_0() {
    return function (p0, p1) {
      _set_targetBoundsProviderUpdateRequestId__f69jd1(p0, p1);
      return Unit_getInstance();
    };
  }
  function SharedTransitionStateMachine(sharedElement) {
    this.sharedElement_1 = sharedElement;
    this.state$delegate_1 = mutableStateOf(NoMatchFound_getInstance());
    this.lastHandledRequestId_1 = 0;
    this.requestId$delegate_1 = mutableIntStateOf(0);
    this.requestToBeHandled_1 = StateChangeRequest_NoRequest_getInstance();
    this.targetBoundsProvider_1 = null;
    this.targetBoundsProviderUpdateRequestId$delegate_1 = mutableIntStateOf(0);
    this.lastHandledTargetProviderUpdateRequestId_1 = 0;
  }
  protoOf(SharedTransitionStateMachine).get_sharedElement_xjw30y_k$ = function () {
    return this.sharedElement_1;
  };
  protoOf(SharedTransitionStateMachine).get_activeMatchDeferred_90t7ud_k$ = function () {
    return this.requestToBeHandled_1.equals(StateChangeRequest_MatchFound_getInstance());
  };
  protoOf(SharedTransitionStateMachine).get_state_iypx7s_k$ = function () {
    var tmp0 = this.state$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionStateMachine$_get_state_$ref_lkxq0r();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('state', 1, tmp, tmp_0, SharedTransitionStateMachine$_set_state_$ref_7pwqdt());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedTransitionStateMachine).resetState_9cgocu_k$ = function () {
    if (false) {
      println('SharedTransition StateMachine, reset state machine to NoMatchFound');
    }
    this.requestToBeHandled_1 = StateChangeRequest_NoRequest_getInstance();
    this.lastHandledRequestId_1 = _get_requestId__l0j7g9(this);
    _set_state__ks53v8(this, NoMatchFound_getInstance());
  };
  protoOf(SharedTransitionStateMachine).deferRequest_mlopmx_k$ = function (request) {
    if (false) {
      println('SharedTransition StateMachine: new request posted: ' + request.toString() + ' for current state: ' + toString_0(this.get_state_iypx7s_k$()));
    }
    this.requestToBeHandled_1 = request;
    _set_requestId__kpqe4b(this, this.lastHandledRequestId_1 + 1 | 0);
  };
  protoOf(SharedTransitionStateMachine).processPendingRequest_ehf2h_k$ = function () {
    if (!(_get_requestId__l0j7g9(this) === this.lastHandledRequestId_1)) {
      if (false) {
        println('SharedTransition StateMachine: handle request: ' + this.requestToBeHandled_1.toString());
      }
      this.lastHandledRequestId_1 = _get_requestId__l0j7g9(this);
      var tmp;
      switch (this.requestToBeHandled_1.get_ordinal_ip24qg_k$()) {
        case 3:
          tmp = NoMatchFound_getInstance();
          break;
        case 0:
          tmp = this.get_state_iypx7s_k$();
          break;
        case 1:
          tmp = this.get_state_iypx7s_k$().onMatchFound_dz6d1_k$(this.targetBoundsProvider_1);
          break;
        case 2:
          var tmp_0;
          var tmp0 = _get_enabledEntries__hv5uqk(this);
          var tmp$ret$1;
          $l$block: {
            // Inline function 'androidx.compose.ui.util.fastAny' call
            // Inline function 'androidx.compose.ui.util.fastForEach' call
            var inductionVariable = 0;
            var last = tmp0.get_size_woubt6_k$() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = tmp0.get_c1px32_k$(index);
                if (equals(item.get_boundsProvider_o6pxkh_k$(), this.targetBoundsProvider_1)) {
                  tmp$ret$1 = true;
                  break $l$block;
                }
              }
               while (inductionVariable <= last);
            tmp$ret$1 = false;
          }

          if (tmp$ret$1) {
            tmp_0 = NoMatchFound_getInstance();
          } else {
            tmp_0 = this.get_state_iypx7s_k$().onVisibleContentRemovedDuringTransition_ceetlc_k$();
          }

          tmp = tmp_0;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      _set_state__ks53v8(this, tmp);
      this.requestToBeHandled_1 = StateChangeRequest_NoRequest_getInstance();
    }
    this.updateTargetBoundsProvider_2flfc3_k$();
  };
  protoOf(SharedTransitionStateMachine).checkForAndDeferStateUpdates_dprwzk_k$ = function (hasVisibleContent) {
    if (_get_enabledEntries__hv5uqk(this).get_size_woubt6_k$() > 1 && hasVisibleContent) {
      this.deferRequest_mlopmx_k$(StateChangeRequest_MatchFound_getInstance());
    } else if (this.sharedElement_1.get_scope_iyfcq3_k$().get_isTransitionActive_t69j02_k$()) {
      if (!hasVisibleContent) {
        this.deferRequest_mlopmx_k$(StateChangeRequest_VisibleContentAbsentDuringTransition_getInstance());
      }
    } else {
      this.resetState_9cgocu_k$();
    }
    this.invalidateTargetBoundsProvider_wcz26a_k$();
  };
  protoOf(SharedTransitionStateMachine).invalidateTargetBoundsProvider_wcz26a_k$ = function () {
    var tmp0 = _get_enabledEntries__hv5uqk(this);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0.get_c1px32_k$(index);
          if (item.get_target_juba8q_k$()) {
            tmp$ret$1 = item;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = null;
    }
    var target = tmp$ret$1;
    if (target == null && this.targetBoundsProvider_1 == null)
      return Unit_getInstance();
    if (equals(target == null ? null : target.get_boundsProvider_o6pxkh_k$(), this.targetBoundsProvider_1))
      return Unit_getInstance();
    _set_targetBoundsProviderUpdateRequestId__f69jd1(this, this.lastHandledTargetProviderUpdateRequestId_1 + 1 | 0);
  };
  protoOf(SharedTransitionStateMachine).updateTargetBoundsProvider_2flfc3_k$ = function () {
    if (!(_get_targetBoundsProviderUpdateRequestId__l423ll(this) === this.lastHandledTargetProviderUpdateRequestId_1)) {
      var tmp;
      if (this.sharedElement_1.get_scope_iyfcq3_k$().get_isTransitionActive_t69j02_k$()) {
        var tmp0 = _get_enabledEntries__hv5uqk(this);
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
          // Inline function 'androidx.compose.ui.util.fastForEach' call
          var inductionVariable = 0;
          var last = tmp0.get_size_woubt6_k$() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0.get_c1px32_k$(index);
              if (item.get_target_juba8q_k$()) {
                tmp$ret$1 = item;
                break $l$block;
              }
            }
             while (inductionVariable <= last);
          tmp$ret$1 = null;
        }
        var tmp0_safe_receiver = tmp$ret$1;
        tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_boundsProvider_o6pxkh_k$();
      } else {
        var tmp0_0 = _get_allEntries__82rm4c(this);
        var tmp$ret$5;
        $l$block_0: {
          // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
          // Inline function 'androidx.compose.ui.util.fastForEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp0_0.get_size_woubt6_k$() - 1 | 0;
          if (inductionVariable_0 <= last_0)
            do {
              var index_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item_0 = tmp0_0.get_c1px32_k$(index_0);
              if (item_0.get_target_juba8q_k$()) {
                tmp$ret$5 = item_0;
                break $l$block_0;
              }
            }
             while (inductionVariable_0 <= last_0);
          tmp$ret$5 = null;
        }
        var tmp1_safe_receiver = tmp$ret$5;
        tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_boundsProvider_o6pxkh_k$();
      }
      var newTargetBoundsProvider = tmp;
      if (!equals(newTargetBoundsProvider, this.targetBoundsProvider_1)) {
        this.targetBoundsProvider_1 = newTargetBoundsProvider;
      }
      this.lastHandledTargetProviderUpdateRequestId_1 = _get_targetBoundsProviderUpdateRequestId__l423ll(this);
    }
  };
  protoOf(SharedTransitionStateMachine).tryInitializingCurrentBounds_hhp1hi_k$ = function () {
    this.processPendingRequest_ehf2h_k$();
    // Inline function 'kotlin.also' call
    var this_0 = this.get_state_iypx7s_k$().initializeCurrentBounds_wgn9af_k$(this.sharedElement_1);
    if (false) {
      println('SharedTransition, try initializing current bounds. state = ' + toString_0(this.get_state_iypx7s_k$()) + ', key =' + (' ' + toString_0(this.sharedElement_1.get_key_18j28a_k$()) + '. Current bounds: ' + toString(this_0)));
    }
    return this_0;
  };
  protoOf(SharedTransitionStateMachine).configureActiveMatch_bn4iml_k$ = function (lookaheadSize, topLeft, structuralOffset) {
    _set_state__ks53v8(this, this.get_state_iypx7s_k$().configureActiveMatch_22bsda_k$(this.sharedElement_1, ensureNotNull(this.targetBoundsProvider_1), lookaheadSize, topLeft, structuralOffset));
  };
  function TargetData$_get_size_$ref_cdnorm() {
    return function (p0) {
      return new Size(p0.get_size_cxx1ym_k$());
    };
  }
  function TargetData$_set_size_$ref_p6k08e() {
    return function (p0, p1) {
      p0.set_size_6a0e6q_k$(p1.packedValue_1);
      return Unit_getInstance();
    };
  }
  function TargetData$_get_size_$ref_cdnorm_0() {
    return function (p0) {
      return new Size(p0.get_size_cxx1ym_k$());
    };
  }
  function TargetData$_set_size_$ref_p6k08e_0() {
    return function (p0, p1) {
      p0.set_size_6a0e6q_k$(p1.packedValue_1);
      return Unit_getInstance();
    };
  }
  function TargetData$_get_initialMfrOffset_$ref_3i9w1n() {
    return function (p0) {
      return new Offset(p0.get_initialMfrOffset_6o7ny1_k$());
    };
  }
  function TargetData$_set_initialMfrOffset_$ref_hgck1z() {
    return function (p0, p1) {
      p0.set_initialMfrOffset_zdul1n_k$(p1.packedValue_1);
      return Unit_getInstance();
    };
  }
  function TargetData$_get_initialMfrOffset_$ref_3i9w1n_0() {
    return function (p0) {
      return new Offset(p0.get_initialMfrOffset_6o7ny1_k$());
    };
  }
  function TargetData$_set_initialMfrOffset_$ref_hgck1z_0() {
    return function (p0, p1) {
      p0.set_initialMfrOffset_zdul1n_k$(p1.packedValue_1);
      return Unit_getInstance();
    };
  }
  function TargetData$_get_targetStructuralOffset_$ref_w67msi() {
    return function (p0) {
      return new Offset(p0.get_targetStructuralOffset_diba68_k$());
    };
  }
  function TargetData$_set_targetStructuralOffset_$ref_urdwdq() {
    return function (p0, p1) {
      p0.set_targetStructuralOffset_prn3mk_k$(p1.packedValue_1);
      return Unit_getInstance();
    };
  }
  function TargetData$_get_targetStructuralOffset_$ref_w67msi_0() {
    return function (p0) {
      return new Offset(p0.get_targetStructuralOffset_diba68_k$());
    };
  }
  function TargetData$_set_targetStructuralOffset_$ref_urdwdq_0() {
    return function (p0, p1) {
      p0.set_targetStructuralOffset_prn3mk_k$(p1.packedValue_1);
      return Unit_getInstance();
    };
  }
  function TargetData$_get_currentMfrOffset_$ref_f9yhhs() {
    return function (p0) {
      return new Offset(p0.get_currentMfrOffset_68hisy_k$());
    };
  }
  function TargetData$_set_currentMfrOffset_$ref_1bvthg() {
    return function (p0, p1) {
      p0.set_currentMfrOffset_k9brqi_k$(p1.packedValue_1);
      return Unit_getInstance();
    };
  }
  function TargetData$_get_currentMfrOffset_$ref_f9yhhs_0() {
    return function (p0) {
      return new Offset(p0.get_currentMfrOffset_68hisy_k$());
    };
  }
  function TargetData$_set_currentMfrOffset_$ref_1bvthg_0() {
    return function (p0, p1) {
      p0.set_currentMfrOffset_k9brqi_k$(p1.packedValue_1);
      return Unit_getInstance();
    };
  }
  function TargetData(size, initialMfrOffset, targetStructuralOffset) {
    this.size$delegate_1 = mutableStateOf(new Size(size));
    this.initialMfrOffset$delegate_1 = mutableStateOf(new Offset(initialMfrOffset));
    this.targetStructuralOffset$delegate_1 = mutableStateOf(new Offset(targetStructuralOffset));
    this.currentMfrOffset$delegate_1 = mutableStateOf(new Offset(initialMfrOffset));
  }
  protoOf(TargetData).set_size_6a0e6q_k$ = function (_set____db54di) {
    var tmp0 = this.size$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_size_$ref_cdnorm_0();
    getPropertyCallableRef('size', 1, tmp, tmp_0, TargetData$_set_size_$ref_p6k08e_0());
    // Inline function 'androidx.compose.runtime.setValue' call
    var value = new Size(_set____db54di);
    tmp0.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  };
  protoOf(TargetData).get_size_cxx1ym_k$ = function () {
    var tmp0 = this.size$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_size_$ref_cdnorm();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('size', 1, tmp, tmp_0, TargetData$_set_size_$ref_p6k08e());
    return tmp0.get_value_j01efc_k$().packedValue_1;
  };
  protoOf(TargetData).set_initialMfrOffset_zdul1n_k$ = function (_set____db54di) {
    var tmp0 = this.initialMfrOffset$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_initialMfrOffset_$ref_3i9w1n_0();
    getPropertyCallableRef('initialMfrOffset', 1, tmp, tmp_0, TargetData$_set_initialMfrOffset_$ref_hgck1z_0());
    // Inline function 'androidx.compose.runtime.setValue' call
    var value = new Offset(_set____db54di);
    tmp0.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  };
  protoOf(TargetData).get_initialMfrOffset_6o7ny1_k$ = function () {
    var tmp0 = this.initialMfrOffset$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_initialMfrOffset_$ref_3i9w1n();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('initialMfrOffset', 1, tmp, tmp_0, TargetData$_set_initialMfrOffset_$ref_hgck1z());
    return tmp0.get_value_j01efc_k$().packedValue_1;
  };
  protoOf(TargetData).set_targetStructuralOffset_prn3mk_k$ = function (_set____db54di) {
    var tmp0 = this.targetStructuralOffset$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_targetStructuralOffset_$ref_w67msi_0();
    getPropertyCallableRef('targetStructuralOffset', 1, tmp, tmp_0, TargetData$_set_targetStructuralOffset_$ref_urdwdq_0());
    // Inline function 'androidx.compose.runtime.setValue' call
    var value = new Offset(_set____db54di);
    tmp0.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  };
  protoOf(TargetData).get_targetStructuralOffset_diba68_k$ = function () {
    var tmp0 = this.targetStructuralOffset$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_targetStructuralOffset_$ref_w67msi();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetStructuralOffset', 1, tmp, tmp_0, TargetData$_set_targetStructuralOffset_$ref_urdwdq());
    return tmp0.get_value_j01efc_k$().packedValue_1;
  };
  protoOf(TargetData).set_currentMfrOffset_k9brqi_k$ = function (_set____db54di) {
    var tmp0 = this.currentMfrOffset$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_currentMfrOffset_$ref_f9yhhs_0();
    getPropertyCallableRef('currentMfrOffset', 1, tmp, tmp_0, TargetData$_set_currentMfrOffset_$ref_1bvthg_0());
    // Inline function 'androidx.compose.runtime.setValue' call
    var value = new Offset(_set____db54di);
    tmp0.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  };
  protoOf(TargetData).get_currentMfrOffset_68hisy_k$ = function () {
    var tmp0 = this.currentMfrOffset$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_currentMfrOffset_$ref_f9yhhs();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('currentMfrOffset', 1, tmp, tmp_0, TargetData$_set_currentMfrOffset_$ref_1bvthg());
    return tmp0.get_value_j01efc_k$().packedValue_1;
  };
  var StateChangeRequest_NoRequest_instance;
  var StateChangeRequest_MatchFound_instance;
  var StateChangeRequest_VisibleContentAbsentDuringTransition_instance;
  var StateChangeRequest_NoMatchFound_instance;
  function values_0() {
    return [StateChangeRequest_NoRequest_getInstance(), StateChangeRequest_MatchFound_getInstance(), StateChangeRequest_VisibleContentAbsentDuringTransition_getInstance(), StateChangeRequest_NoMatchFound_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'NoRequest':
        return StateChangeRequest_NoRequest_getInstance();
      case 'MatchFound':
        return StateChangeRequest_MatchFound_getInstance();
      case 'VisibleContentAbsentDuringTransition':
        return StateChangeRequest_VisibleContentAbsentDuringTransition_getInstance();
      case 'NoMatchFound':
        return StateChangeRequest_NoMatchFound_getInstance();
      default:
        StateChangeRequest_initEntries();
        THROW_IAE('No enum constant androidx.compose.animation.StateChangeRequest.' + value);
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var StateChangeRequest_entriesInitialized;
  function StateChangeRequest_initEntries() {
    if (StateChangeRequest_entriesInitialized)
      return Unit_getInstance();
    StateChangeRequest_entriesInitialized = true;
    StateChangeRequest_NoRequest_instance = new StateChangeRequest('NoRequest', 0);
    StateChangeRequest_MatchFound_instance = new StateChangeRequest('MatchFound', 1);
    StateChangeRequest_VisibleContentAbsentDuringTransition_instance = new StateChangeRequest('VisibleContentAbsentDuringTransition', 2);
    StateChangeRequest_NoMatchFound_instance = new StateChangeRequest('NoMatchFound', 3);
  }
  var $ENTRIES_0;
  function StateChangeRequest(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function NoMatchFound() {
    NoMatchFound_instance = this;
    State.call(this);
  }
  protoOf(NoMatchFound).onMatchFound_dz6d1_k$ = function (previousTargetBoundsProvider) {
    if (false) {
      println('SharedTransition StateMachine: Transitioning from NoMatch to ActiveMatchPending,' + (' previous target bounds provider: ' + toString(previousTargetBoundsProvider)));
    }
    return new ActiveMatchFoundConfigPending(previousTargetBoundsProvider);
  };
  protoOf(NoMatchFound).onVisibleContentRemovedDuringTransition_ceetlc_k$ = function () {
    return this;
  };
  var NoMatchFound_instance;
  function NoMatchFound_getInstance() {
    if (NoMatchFound_instance == null)
      new NoMatchFound();
    return NoMatchFound_instance;
  }
  function _set_currentBounds__186mx5($this, _set____db54di) {
    var tmp0 = $this.currentBounds$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = ActiveMatchFoundConfigPending$_get_currentBounds_$ref_ygzd34_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('currentBounds', 1, tmp, tmp_0, ActiveMatchFoundConfigPending$_set_currentBounds_$ref_cr6gss_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ActiveMatchFoundConfigPending$_get_currentBounds_$ref_ygzd34() {
    return function (p0) {
      return p0.get_currentBounds_rrenad_k$();
    };
  }
  function ActiveMatchFoundConfigPending$_set_currentBounds_$ref_cr6gss() {
    return function (p0, p1) {
      _set_currentBounds__186mx5(p0, p1);
      return Unit_getInstance();
    };
  }
  function ActiveMatchFoundConfigPending$_get_currentBounds_$ref_ygzd34_0() {
    return function (p0) {
      return p0.get_currentBounds_rrenad_k$();
    };
  }
  function ActiveMatchFoundConfigPending$_set_currentBounds_$ref_cr6gss_0() {
    return function (p0, p1) {
      _set_currentBounds__186mx5(p0, p1);
      return Unit_getInstance();
    };
  }
  function ActiveMatchFoundConfigPending(targetBoundsProviderBeforeConfig, targetData, currentBounds) {
    targetData = targetData === VOID ? null : targetData;
    currentBounds = currentBounds === VOID ? null : currentBounds;
    State.call(this);
    this.targetBoundsProviderBeforeConfig_1 = targetBoundsProviderBeforeConfig;
    this.targetData_1 = targetData;
    this.currentBounds$delegate_1 = mutableStateOf(currentBounds);
  }
  protoOf(ActiveMatchFoundConfigPending).set_targetBoundsProviderBeforeConfig_7jrq8u_k$ = function (_set____db54di) {
    this.targetBoundsProviderBeforeConfig_1 = _set____db54di;
  };
  protoOf(ActiveMatchFoundConfigPending).get_targetBoundsProviderBeforeConfig_rtdkqn_k$ = function () {
    return this.targetBoundsProviderBeforeConfig_1;
  };
  protoOf(ActiveMatchFoundConfigPending).get_targetData_c4trx8_k$ = function () {
    return this.targetData_1;
  };
  protoOf(ActiveMatchFoundConfigPending).get_activeMatchFound_5y5djo_k$ = function () {
    return true;
  };
  protoOf(ActiveMatchFoundConfigPending).get_currentBounds_rrenad_k$ = function () {
    var tmp0 = this.currentBounds$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = ActiveMatchFoundConfigPending$_get_currentBounds_$ref_ygzd34();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('currentBounds', 1, tmp, tmp_0, ActiveMatchFoundConfigPending$_set_currentBounds_$ref_cr6gss());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(ActiveMatchFoundConfigPending).initializeCurrentBounds_wgn9af_k$ = function (sharedElement) {
    var bounds = this.get_currentBounds_rrenad_k$();
    if (!(bounds == null))
      return bounds;
    if (this.get_currentBounds_rrenad_k$() == null) {
      var tmp0_elvis_lhs = this.targetBoundsProviderBeforeConfig_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp0 = sharedElement.get_allEntries_nhmbbc_k$();
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
          // Inline function 'androidx.compose.ui.util.fastForEach' call
          var inductionVariable = 0;
          var last = tmp0.get_size_woubt6_k$() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0.get_c1px32_k$(index);
              if (sharedElement.get_enabledEntries_97jleg_k$().contains_aljjnj_k$(item)) {
                tmp$ret$1 = item;
                break $l$block;
              }
            }
             while (inductionVariable <= last);
          tmp$ret$1 = null;
        }
        var tmp1_safe_receiver = tmp$ret$1;
        tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_boundsProvider_o6pxkh_k$();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var lastTarget = tmp;
      var tmp2_safe_receiver = obtainBoundsFromLastTarget(sharedElement, lastTarget);
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        _set_currentBounds__186mx5(this, tmp2_safe_receiver);
      }
    }
    return this.get_currentBounds_rrenad_k$();
  };
  protoOf(ActiveMatchFoundConfigPending).configureActiveMatch_22bsda_k$ = function (sharedElement, targetBoundsProvider, lookaheadSize, topLeft, structuralOffset) {
    var tmp0_elvis_lhs = this.targetData_1;
    var targetData = tmp0_elvis_lhs == null ? new TargetData(lookaheadSize, Offset__minus_impl_hoj2c0(topLeft, structuralOffset), structuralOffset) : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = this.get_currentBounds_rrenad_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp2_elvis_lhs = this.targetBoundsProviderBeforeConfig_1;
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        var tmp0 = sharedElement.get_allEntries_nhmbbc_k$();
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
          // Inline function 'androidx.compose.ui.util.fastForEach' call
          var inductionVariable = 0;
          var last = tmp0.get_size_woubt6_k$() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0.get_c1px32_k$(index);
              if (sharedElement.get_enabledEntries_97jleg_k$().contains_aljjnj_k$(item)) {
                tmp$ret$1 = item;
                break $l$block;
              }
            }
             while (inductionVariable <= last);
          tmp$ret$1 = null;
        }
        var tmp3_safe_receiver = tmp$ret$1;
        tmp_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.get_boundsProvider_o6pxkh_k$();
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }
      tmp = obtainBoundsFromLastTarget(sharedElement, tmp_0);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var tmp4_elvis_lhs = tmp;
    var currentBounds = tmp4_elvis_lhs == null ? Rect(topLeft, lookaheadSize) : tmp4_elvis_lhs;
    updateTargetData(targetData, lookaheadSize, topLeft, structuralOffset, true);
    return new ActiveMatchConfigured(targetData, targetBoundsProvider, currentBounds);
  };
  protoOf(ActiveMatchFoundConfigPending).onMatchFound_dz6d1_k$ = function (previousTargetBoundsProvider) {
    if (this.targetBoundsProviderBeforeConfig_1 == null) {
      this.targetBoundsProviderBeforeConfig_1 = previousTargetBoundsProvider;
    }
    return this;
  };
  protoOf(ActiveMatchFoundConfigPending).updateBounds_rr2frf_k$ = function (bounds) {
    if (false) {
      println('SharedTransition, updating currentBounds to ' + bounds.toString() + ' for state ' + toString_0(this));
    }
    _set_currentBounds__186mx5(this, bounds);
  };
  protoOf(ActiveMatchFoundConfigPending).onVisibleContentRemovedDuringTransition_ceetlc_k$ = function () {
    if (false) {
      println('SharedTransition StateMachine: Transitioning from ActiveMatchPending to NoMatch');
    }
    return NoMatchFound_getInstance();
  };
  function obtainBoundsFromLastTarget(_this__u8e3s4, lastTargetBoundsProvider) {
    var tmp;
    var tmp_0;
    if (!(lastTargetBoundsProvider == null)) {
      var tmp0 = _this__u8e3s4.get_allEntries_nhmbbc_k$();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastAny' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable = 0;
        var last = tmp0.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0.get_c1px32_k$(index);
            if (equals(item.get_boundsProvider_o6pxkh_k$(), lastTargetBoundsProvider)) {
              tmp$ret$1 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = false;
      }
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = lastTargetBoundsProvider.get_lastBoundsInSharedTransitionScope_e0le3l_k$();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function updateTargetData(targetData, lookaheadSize, topLeft, structuralOffset, targetBoundsProviderChanged) {
    if (!equals(targetData.get_targetStructuralOffset_diba68_k$(), structuralOffset) || !equals(targetData.get_size_cxx1ym_k$(), lookaheadSize) || targetBoundsProviderChanged) {
      targetData.set_size_6a0e6q_k$(lookaheadSize);
      targetData.set_targetStructuralOffset_prn3mk_k$(structuralOffset);
      if (targetBoundsProviderChanged) {
        targetData.set_initialMfrOffset_zdul1n_k$(Offset__minus_impl_hoj2c0(Offset__minus_impl_hoj2c0(topLeft, structuralOffset), Offset__minus_impl_hoj2c0(targetData.get_currentMfrOffset_68hisy_k$(), targetData.get_initialMfrOffset_6o7ny1_k$())));
      }
    }
    targetData.set_currentMfrOffset_k9brqi_k$(Offset__minus_impl_hoj2c0(topLeft, structuralOffset));
  }
  function _set_currentBounds__186mx5_0($this, _set____db54di) {
    var tmp0 = $this.currentBounds$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = ActiveMatchConfigured$_get_currentBounds_$ref_sppd91_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('currentBounds', 1, tmp, tmp_0, ActiveMatchConfigured$_set_currentBounds_$ref_6zwgyp_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ActiveMatchConfigured$_get_targetBoundsProvider_$ref_mkpukq() {
    return function (p0) {
      return p0.get_targetBoundsProvider_bhjtvk_k$();
    };
  }
  function ActiveMatchConfigured$_set_targetBoundsProvider_$ref_i2cmxi() {
    return function (p0, p1) {
      p0.set_targetBoundsProvider_od7uve_k$(p1);
      return Unit_getInstance();
    };
  }
  function ActiveMatchConfigured$_get_targetBoundsProvider_$ref_mkpukq_0() {
    return function (p0) {
      return p0.get_targetBoundsProvider_bhjtvk_k$();
    };
  }
  function ActiveMatchConfigured$_set_targetBoundsProvider_$ref_i2cmxi_0() {
    return function (p0, p1) {
      p0.set_targetBoundsProvider_od7uve_k$(p1);
      return Unit_getInstance();
    };
  }
  function ActiveMatchConfigured$_get_currentBounds_$ref_sppd91() {
    return function (p0) {
      return p0.get_currentBounds_rrenad_k$();
    };
  }
  function ActiveMatchConfigured$_set_currentBounds_$ref_6zwgyp() {
    return function (p0, p1) {
      _set_currentBounds__186mx5_0(p0, p1);
      return Unit_getInstance();
    };
  }
  function ActiveMatchConfigured$_get_currentBounds_$ref_sppd91_0() {
    return function (p0) {
      return p0.get_currentBounds_rrenad_k$();
    };
  }
  function ActiveMatchConfigured$_set_currentBounds_$ref_6zwgyp_0() {
    return function (p0, p1) {
      _set_currentBounds__186mx5_0(p0, p1);
      return Unit_getInstance();
    };
  }
  function ActiveMatchConfigured(targetData, targetBoundsProvider, currentBounds) {
    MatchIsOrHasBeenConfigured.call(this);
    this.targetData_1 = targetData;
    this.targetBoundsProvider$delegate_1 = mutableStateOf(targetBoundsProvider);
    this.currentBounds$delegate_1 = mutableStateOf(currentBounds);
  }
  protoOf(ActiveMatchConfigured).get_targetData_c4trx8_k$ = function () {
    return this.targetData_1;
  };
  protoOf(ActiveMatchConfigured).get_activeMatchFound_5y5djo_k$ = function () {
    return true;
  };
  protoOf(ActiveMatchConfigured).set_targetBoundsProvider_od7uve_k$ = function (_set____db54di) {
    var tmp0 = this.targetBoundsProvider$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = ActiveMatchConfigured$_get_targetBoundsProvider_$ref_mkpukq_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('targetBoundsProvider', 1, tmp, tmp_0, ActiveMatchConfigured$_set_targetBoundsProvider_$ref_i2cmxi_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(ActiveMatchConfigured).get_targetBoundsProvider_bhjtvk_k$ = function () {
    var tmp0 = this.targetBoundsProvider$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = ActiveMatchConfigured$_get_targetBoundsProvider_$ref_mkpukq();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetBoundsProvider', 1, tmp, tmp_0, ActiveMatchConfigured$_set_targetBoundsProvider_$ref_i2cmxi());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(ActiveMatchConfigured).get_currentBounds_rrenad_k$ = function () {
    var tmp0 = this.currentBounds$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = ActiveMatchConfigured$_get_currentBounds_$ref_sppd91();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('currentBounds', 1, tmp, tmp_0, ActiveMatchConfigured$_set_currentBounds_$ref_6zwgyp());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(ActiveMatchConfigured).onMatchFound_dz6d1_k$ = function (previousTargetBoundsProvider) {
    return this;
  };
  protoOf(ActiveMatchConfigured).configureActiveMatch_22bsda_k$ = function (sharedElement, targetBoundsProvider, lookaheadSize, topLeft, structuralOffset) {
    var targetBoundsProviderChanged = !equals(this.get_targetBoundsProvider_bhjtvk_k$(), targetBoundsProvider);
    updateTargetData(this.targetData_1, lookaheadSize, topLeft, structuralOffset, targetBoundsProviderChanged);
    this.set_targetBoundsProvider_od7uve_k$(targetBoundsProvider);
    return this;
  };
  protoOf(ActiveMatchConfigured).onVisibleContentRemovedDuringTransition_ceetlc_k$ = function () {
    if (false) {
      println('SharedTransition StateMachine: Transitioning from ActiveMatchConfigured to ActiveMatchRemovedDuringTransition');
    }
    var lastTarget = Rect(Offset__plus_impl_c78cg0(this.targetData_1.get_currentMfrOffset_68hisy_k$(), this.targetData_1.get_targetStructuralOffset_diba68_k$()), this.targetData_1.get_size_cxx1ym_k$());
    var newTarget = this.get_targetBoundsProvider_bhjtvk_k$().calculateAlternativeTargetBounds_c8liz8_k$(lastTarget);
    if (newTarget == null) {
      return NoMatchFound_getInstance();
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = new TargetData(newTarget.get_size_cxx1ym_k$(), this.targetData_1.get_initialMfrOffset_6o7ny1_k$(), Offset__minus_impl_hoj2c0(newTarget.get_topLeft_ypvrd5_k$(), this.targetData_1.get_currentMfrOffset_68hisy_k$()));
      this_0.set_currentMfrOffset_k9brqi_k$(this.targetData_1.get_currentMfrOffset_68hisy_k$());
      var updatedTargetData = this_0;
      return new ActiveMatchRemovedDuringTransition(updatedTargetData, this.get_currentBounds_rrenad_k$());
    }
  };
  protoOf(ActiveMatchConfigured).updateBounds_rr2frf_k$ = function (bounds) {
    if (false) {
      println('SharedTransition, updating currentBounds to ' + bounds.toString() + ' for state ' + toString_0(this));
    }
    _set_currentBounds__186mx5_0(this, bounds);
  };
  function MatchIsOrHasBeenConfigured() {
    State.call(this);
  }
  protoOf(MatchIsOrHasBeenConfigured).get_matchIsOrHasBeenConfigured_wqv4it_k$ = function () {
    return true;
  };
  function _set_currentBounds__186mx5_1($this, _set____db54di) {
    var tmp0 = $this.currentBounds$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = ActiveMatchRemovedDuringTransition$_get_currentBounds_$ref_46pta3_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('currentBounds', 1, tmp, tmp_0, ActiveMatchRemovedDuringTransition$_set_currentBounds_$ref_hj3309_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ActiveMatchRemovedDuringTransition$_get_currentBounds_$ref_46pta3() {
    return function (p0) {
      return p0.get_currentBounds_rrenad_k$();
    };
  }
  function ActiveMatchRemovedDuringTransition$_set_currentBounds_$ref_hj3309() {
    return function (p0, p1) {
      _set_currentBounds__186mx5_1(p0, p1);
      return Unit_getInstance();
    };
  }
  function ActiveMatchRemovedDuringTransition$_get_currentBounds_$ref_46pta3_0() {
    return function (p0) {
      return p0.get_currentBounds_rrenad_k$();
    };
  }
  function ActiveMatchRemovedDuringTransition$_set_currentBounds_$ref_hj3309_0() {
    return function (p0, p1) {
      _set_currentBounds__186mx5_1(p0, p1);
      return Unit_getInstance();
    };
  }
  function ActiveMatchRemovedDuringTransition(targetData, currentBounds) {
    MatchIsOrHasBeenConfigured.call(this);
    this.targetData_1 = targetData;
    this.currentBounds$delegate_1 = mutableStateOf(currentBounds);
    this.alternativeTargetConfigured_1 = false;
  }
  protoOf(ActiveMatchRemovedDuringTransition).get_targetData_c4trx8_k$ = function () {
    return this.targetData_1;
  };
  protoOf(ActiveMatchRemovedDuringTransition).get_currentBounds_rrenad_k$ = function () {
    var tmp0 = this.currentBounds$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = ActiveMatchRemovedDuringTransition$_get_currentBounds_$ref_46pta3();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('currentBounds', 1, tmp, tmp_0, ActiveMatchRemovedDuringTransition$_set_currentBounds_$ref_hj3309());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(ActiveMatchRemovedDuringTransition).set_alternativeTargetConfigured_7d67x2_k$ = function (_set____db54di) {
    this.alternativeTargetConfigured_1 = _set____db54di;
  };
  protoOf(ActiveMatchRemovedDuringTransition).get_alternativeTargetConfigured_kievhp_k$ = function () {
    return this.alternativeTargetConfigured_1;
  };
  protoOf(ActiveMatchRemovedDuringTransition).onMatchFound_dz6d1_k$ = function (previousTargetBoundsProvider) {
    if (false) {
      println('SharedTransition StateMachine: Transitioning from ActiveMatchRemovedDuringTransition to ActiveMatchPending');
    }
    return new ActiveMatchFoundConfigPending(previousTargetBoundsProvider, this.targetData_1, this.get_currentBounds_rrenad_k$());
  };
  protoOf(ActiveMatchRemovedDuringTransition).updateBounds_rr2frf_k$ = function (bounds) {
    if (false) {
      println('SharedTransition, updating currentBounds to ' + bounds.toString() + ' for state ' + toString_0(this));
    }
    _set_currentBounds__186mx5_1(this, bounds);
  };
  protoOf(ActiveMatchRemovedDuringTransition).onVisibleContentRemovedDuringTransition_ceetlc_k$ = function () {
    return this;
  };
  function get_targetBounds(_this__u8e3s4) {
    return Rect(Offset__plus_impl_c78cg0(_this__u8e3s4.get_initialMfrOffset_6o7ny1_k$(), _this__u8e3s4.get_targetStructuralOffset_diba68_k$()), _this__u8e3s4.get_size_cxx1ym_k$());
  }
  function calculateOffsetFromDirectManipulation(_this__u8e3s4, animatedBounds) {
    return Offset__plus_impl_c78cg0(Offset__minus_impl_hoj2c0(animatedBounds.get_topLeft_ypvrd5_k$(), _this__u8e3s4.get_initialMfrOffset_6o7ny1_k$()), _this__u8e3s4.get_currentMfrOffset_68hisy_k$());
  }
  function StateChangeRequest_NoRequest_getInstance() {
    StateChangeRequest_initEntries();
    return StateChangeRequest_NoRequest_instance;
  }
  function StateChangeRequest_MatchFound_getInstance() {
    StateChangeRequest_initEntries();
    return StateChangeRequest_MatchFound_instance;
  }
  function StateChangeRequest_VisibleContentAbsentDuringTransition_getInstance() {
    StateChangeRequest_initEntries();
    return StateChangeRequest_VisibleContentAbsentDuringTransition_instance;
  }
  function StateChangeRequest_NoMatchFound_getInstance() {
    StateChangeRequest_initEntries();
    return StateChangeRequest_NoMatchFound_instance;
  }
  function get_colorDefaultSpring() {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    return colorDefaultSpring;
  }
  var colorDefaultSpring;
  function animateColorAsState(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -451899108, 'C(animateColorAsState)P(3:c#ui.graphics.Color!1,2)63@2906L84,64@3002L157:SingleValueAnimation.kt#xbi5r1');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_colorDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'ColorAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-451899108, $changed, -1, 'androidx.compose.animation.animateColorAsState (SingleValueAnimation.kt:61)');
    }
    var tmp1_remember$arg$0 = _Color___get_colorSpace__impl__jqqozk(targetValue);
    sourceInformationMarkerStart($composer_0, -483338000, 'CC(remember):SingleValueAnimation.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changed_ga7h3f_k$(tmp1_remember$arg$0);
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value = get_VectorConverter_4(Companion_getInstance_7())(_Color___get_colorSpace__impl__jqqozk(targetValue));
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp2_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var converter = tmp2_group;
    var tmp_1 = animationSpec_0;
    var tmp0 = animateValueAsState(new Color_0(targetValue), converter, tmp_1, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  var properties_initialized_SingleValueAnimation_kt_kqgwkj;
  function _init_properties_SingleValueAnimation_kt__hxy1sr() {
    if (!properties_initialized_SingleValueAnimation_kt_kqgwkj) {
      properties_initialized_SingleValueAnimation_kt_kqgwkj = true;
      colorDefaultSpring = spring();
    }
  }
  function get_DefaultEnabled() {
    _init_properties_SkipToLookaheadSizeNode_kt__v47psp();
    return DefaultEnabled;
  }
  var DefaultEnabled;
  var androidx_compose_animation_SkipToLookaheadSizeNode$stable;
  var androidx_compose_animation_SkipToLookaheadSizeElement$stable;
  function SkipToLookaheadSizeElement(scaleToBounds, isEnabled) {
    scaleToBounds = scaleToBounds === VOID ? null : scaleToBounds;
    isEnabled = isEnabled === VOID ? get_DefaultEnabled() : isEnabled;
    ModifierNodeElement.call(this);
    this.scaleToBounds_1 = scaleToBounds;
    this.isEnabled_1 = isEnabled;
  }
  protoOf(SkipToLookaheadSizeElement).get_scaleToBounds_v7yegf_k$ = function () {
    return this.scaleToBounds_1;
  };
  protoOf(SkipToLookaheadSizeElement).get_isEnabled_roz1ma_k$ = function () {
    return this.isEnabled_1;
  };
  protoOf(SkipToLookaheadSizeElement).create_md4cuc_k$ = function () {
    return new SkipToLookaheadSizeNode(this.scaleToBounds_1, this.isEnabled_1);
  };
  protoOf(SkipToLookaheadSizeElement).update_1px3qs_k$ = function (node) {
    node.set_scaleToBounds_7de1qi_k$(this.scaleToBounds_1);
    node.set_isEnabled_9kb97j_k$(this.isEnabled_1);
  };
  protoOf(SkipToLookaheadSizeElement).update_9wd57p_k$ = function (node) {
    return this.update_1px3qs_k$(node instanceof SkipToLookaheadSizeNode ? node : THROW_CCE());
  };
  protoOf(SkipToLookaheadSizeElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('skipToLookahead');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('scaleToBounds', this.scaleToBounds_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('isEnabled', this.isEnabled_1);
  };
  protoOf(SkipToLookaheadSizeElement).hashCode = function () {
    var tmp = imul(hashCode(this.isEnabled_1), 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.scaleToBounds_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  protoOf(SkipToLookaheadSizeElement).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof SkipToLookaheadSizeElement) {
      tmp_0 = other.isEnabled_1 === this.isEnabled_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.scaleToBounds_1, this.scaleToBounds_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  function createContentScaleModifier(_this__u8e3s4, scaleToBounds, isEnabled) {
    _init_properties_SkipToLookaheadSizeNode_kt__v47psp();
    var tmp;
    if (equals(scaleToBounds.get_contentScale_i3wrkq_k$(), Companion_getInstance_12().get_Crop_wnzuux_k$())) {
      var tmp_0 = Companion_getInstance_0();
      tmp = graphicsLayer(tmp_0, createContentScaleModifier$lambda(isEnabled));
    } else {
      tmp = Companion_getInstance_0();
    }
    return _this__u8e3s4.then_g5qrxq_k$(tmp).then_g5qrxq_k$(new SkipToLookaheadSizeElement(scaleToBounds, isEnabled));
  }
  function _set_lookaheadConstraints__uusx37_0($this, _set____db54di) {
    $this.lookaheadConstraints_1 = _set____db54di;
  }
  function _get_lookaheadConstraints__gwq92v_0($this) {
    return $this.lookaheadConstraints_1;
  }
  function _set_lookaheadSize__8e6fb6_0($this, _set____db54di) {
    $this.lookaheadSize_1 = _set____db54di;
  }
  function _get_lookaheadSize__6tl376_0($this) {
    return $this.lookaheadSize_1;
  }
  function SkipToLookaheadSizeNode$_get_scaleToBounds_$ref_8macab() {
    return function (p0) {
      return p0.get_scaleToBounds_v7yegf_k$();
    };
  }
  function SkipToLookaheadSizeNode$_set_scaleToBounds_$ref_d3ik01() {
    return function (p0, p1) {
      p0.set_scaleToBounds_7de1qi_k$(p1);
      return Unit_getInstance();
    };
  }
  function SkipToLookaheadSizeNode$_get_scaleToBounds_$ref_8macab_0() {
    return function (p0) {
      return p0.get_scaleToBounds_v7yegf_k$();
    };
  }
  function SkipToLookaheadSizeNode$_set_scaleToBounds_$ref_d3ik01_0() {
    return function (p0, p1) {
      p0.set_scaleToBounds_7de1qi_k$(p1);
      return Unit_getInstance();
    };
  }
  function SkipToLookaheadSizeNode$_get_isEnabled_$ref_k97xe8() {
    return function (p0) {
      return p0.get_isEnabled_roz1ma_k$();
    };
  }
  function SkipToLookaheadSizeNode$_set_isEnabled_$ref_51gevw() {
    return function (p0, p1) {
      p0.set_isEnabled_9kb97j_k$(p1);
      return Unit_getInstance();
    };
  }
  function SkipToLookaheadSizeNode$_get_isEnabled_$ref_k97xe8_0() {
    return function (p0) {
      return p0.get_isEnabled_roz1ma_k$();
    };
  }
  function SkipToLookaheadSizeNode$_set_isEnabled_$ref_51gevw_0() {
    return function (p0, p1) {
      p0.set_isEnabled_9kb97j_k$(p1);
      return Unit_getInstance();
    };
  }
  function SkipToLookaheadSizeNode$measure$lambda($$this$run) {
    return function ($this$layout) {
      $this$layout.place$default_61faqz_k$($$this$run, 0, 0);
      return Unit_getInstance();
    };
  }
  function SkipToLookaheadSizeNode$measure$lambda$lambda($resolvedScale) {
    return function ($this$placeWithLayer) {
      // Inline function 'androidx.compose.ui.layout.ScaleFactor.scaleX' call
      var this_0 = $resolvedScale;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _ScaleFactor___get_packedValue__impl__x2069g(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$3 = floatFromBits(bits);
      $this$placeWithLayer.set_scaleX_ykjjzx_k$(tmp$ret$3);
      // Inline function 'androidx.compose.ui.layout.ScaleFactor.scaleY' call
      var this_1 = $resolvedScale;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _ScaleFactor___get_packedValue__impl__x2069g(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$7 = floatFromBits(bits_0);
      $this$placeWithLayer.set_scaleY_i4eqp0_k$(tmp$ret$7);
      $this$placeWithLayer.set_transformOrigin_wfji5_k$(TransformOrigin_0(0.0, 0.0));
      return Unit_getInstance();
    };
  }
  function SkipToLookaheadSizeNode$measure$lambda_0(this$0, $p, $constrainedSize, $this_measure) {
    return function ($this$layout) {
      var scaleToBounds = this$0.get_scaleToBounds_v7yegf_k$();
      var tmp;
      if (scaleToBounds == null) {
        $this$layout.place$default_61faqz_k$($p, 0, 0);
        tmp = Unit_getInstance();
      } else {
        var contentScale = scaleToBounds.get_contentScale_i3wrkq_k$();
        var tmp_0;
        var tmp_1;
        // Inline function 'androidx.compose.ui.unit.IntSize.width' call
        var this_0 = this$0.lookaheadSize_1;
        // Inline function 'androidx.compose.ui.util.unpackInt1' call
        var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
        if (convertToInt(shiftRight(value, 32)) === 0) {
          tmp_1 = true;
        } else {
          // Inline function 'androidx.compose.ui.unit.IntSize.height' call
          var this_1 = this$0.lookaheadSize_1;
          // Inline function 'androidx.compose.ui.util.unpackInt2' call
          var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
          tmp_1 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0))) === 0;
        }
        if (tmp_1) {
          // Inline function 'androidx.compose.ui.layout.ScaleFactor' call
          // Inline function 'androidx.compose.ui.util.packFloats' call
          var v1 = fromInt(toRawBits(1.0));
          var v2 = fromInt(toRawBits(1.0));
          var tmp$ret$4 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
          tmp_0 = _ScaleFactor___init__impl__ttdtvk(tmp$ret$4);
        } else {
          tmp_0 = contentScale.computeScaleFactor_swd2p8_k$(toSize(this$0.lookaheadSize_1), toSize($constrainedSize));
        }
        var resolvedScale = tmp_0;
        var tmp_2 = scaleToBounds.get_alignment_xa1jnq_k$();
        // Inline function 'androidx.compose.ui.unit.IntSize.width' call
        var this_2 = this$0.lookaheadSize_1;
        // Inline function 'androidx.compose.ui.util.unpackInt1' call
        var value_1 = _IntSize___get_packedValue__impl__uho7jf(this_2);
        var tmp_3 = convertToInt(shiftRight(value_1, 32));
        // Inline function 'androidx.compose.ui.layout.ScaleFactor.scaleX' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_2 = _ScaleFactor___get_packedValue__impl__x2069g(resolvedScale);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits = convertToInt(shiftRight(value_2, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        // Inline function 'kotlin.math.roundToInt' call
        var this_3 = tmp_3 * floatFromBits(bits);
        var tmp0 = roundToInt(this_3);
        // Inline function 'androidx.compose.ui.unit.IntSize.height' call
        var this_4 = this$0.lookaheadSize_1;
        // Inline function 'androidx.compose.ui.util.unpackInt2' call
        var value_3 = _IntSize___get_packedValue__impl__uho7jf(this_4);
        var tmp_4 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
        // Inline function 'androidx.compose.ui.layout.ScaleFactor.scaleY' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_4 = _ScaleFactor___get_packedValue__impl__x2069g(resolvedScale);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_0 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        // Inline function 'kotlin.math.roundToInt' call
        var this_5 = tmp_4 * floatFromBits(bits_0);
        // Inline function 'androidx.compose.ui.unit.IntSize' call
        // Inline function 'androidx.compose.ui.util.packInts' call
        var val2 = roundToInt(this_5);
        var tmp$ret$20 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
        var tmp$ret$21 = _IntSize___init__impl__emcjft(tmp$ret$20);
        var _destruct__k2r9zo = tmp_2.align_mb8mzc_k$(tmp$ret$21, $constrainedSize, $this_measure.get_layoutDirection_7e37v0_k$());
        // Inline function 'androidx.compose.ui.unit.IntOffset.component1' call
        var x = _IntOffset___get_x__impl__qiqr5o(_destruct__k2r9zo);
        // Inline function 'androidx.compose.ui.unit.IntOffset.component2' call
        var y = _IntOffset___get_y__impl__2avpwj(_destruct__k2r9zo);
        $this$layout.placeWithLayer$default_kqry46_k$($p, x, y, VOID, SkipToLookaheadSizeNode$measure$lambda$lambda(resolvedScale));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SkipToLookaheadSizeNode(scaleToBounds, isEnabled) {
    Node.call(this);
    this.scaleToBounds$delegate_1 = mutableStateOf(scaleToBounds);
    this.isEnabled$delegate_1 = mutableStateOf(isEnabled);
    this.lookaheadConstraints_1 = null;
    this.lookaheadSize_1 = get_InvalidSize();
  }
  protoOf(SkipToLookaheadSizeNode).set_scaleToBounds_7de1qi_k$ = function (_set____db54di) {
    var tmp0 = this.scaleToBounds$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SkipToLookaheadSizeNode$_get_scaleToBounds_$ref_8macab_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('scaleToBounds', 1, tmp, tmp_0, SkipToLookaheadSizeNode$_set_scaleToBounds_$ref_d3ik01_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SkipToLookaheadSizeNode).get_scaleToBounds_v7yegf_k$ = function () {
    var tmp0 = this.scaleToBounds$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SkipToLookaheadSizeNode$_get_scaleToBounds_$ref_8macab();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('scaleToBounds', 1, tmp, tmp_0, SkipToLookaheadSizeNode$_set_scaleToBounds_$ref_d3ik01());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SkipToLookaheadSizeNode).set_isEnabled_9kb97j_k$ = function (_set____db54di) {
    var tmp0 = this.isEnabled$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SkipToLookaheadSizeNode$_get_isEnabled_$ref_k97xe8_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isEnabled', 1, tmp, tmp_0, SkipToLookaheadSizeNode$_set_isEnabled_$ref_51gevw_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SkipToLookaheadSizeNode).get_isEnabled_roz1ma_k$ = function () {
    var tmp0 = this.isEnabled$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SkipToLookaheadSizeNode$_get_isEnabled_$ref_k97xe8();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isEnabled', 1, tmp, tmp_0, SkipToLookaheadSizeNode$_set_isEnabled_$ref_51gevw());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SkipToLookaheadSizeNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    if (_this__u8e3s4.get_isLookingAhead_2057g1_k$()) {
      this.lookaheadConstraints_1 = constraints;
    }
    if (!this.get_isEnabled_roz1ma_k$()()) {
      // Inline function 'kotlin.run' call
      var $this$run = measurable.measure_4dmfk1_k$(constraints);
      var tmp = $this$run.get_width_j0q4yl_k$();
      var tmp_0 = $this$run.get_height_e7t92o_k$();
      return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, SkipToLookaheadSizeNode$measure$lambda($this$run));
    }
    var tmp_1;
    if (_this__u8e3s4.get_isLookingAhead_2057g1_k$()) {
      // Inline function 'kotlin.also' call
      var this_0 = measurable.measure_4dmfk1_k$(constraints);
      var tmp_2 = this;
      var tmp0 = this_0.get_width_j0q4yl_k$();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = this_0.get_height_e7t92o_k$();
      var tmp$ret$2 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      tmp_2.lookaheadSize_1 = _IntSize___init__impl__emcjft(tmp$ret$2);
      tmp_1 = this_0;
    } else {
      var tmp_3 = this.lookaheadConstraints_1;
      tmp_1 = measurable.measure_4dmfk1_k$(ensureNotNull(tmp_3 == null ? null : new Constraints_0(tmp_3)).value_1);
    }
    var p = tmp_1;
    var constrainedSize = constrain(constraints, this.lookaheadSize_1);
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(constrainedSize);
    var tmp_4 = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf(constrainedSize);
    var tmp_5 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp_4, tmp_5, VOID, SkipToLookaheadSizeNode$measure$lambda_0(this, p, constrainedSize, _this__u8e3s4));
  };
  protoOf(SkipToLookaheadSizeNode).maxIntrinsicWidth_epsb1u_k$ = function (_this__u8e3s4, measurable, height) {
    var tmp;
    if (!_this__u8e3s4.get_isLookingAhead_2057g1_k$() && get_isValid(this.lookaheadSize_1)) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = this.lookaheadSize_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      tmp = convertToInt(shiftRight(value, 32));
    } else {
      tmp = measurable.maxIntrinsicWidth_b8umbx_k$(height);
    }
    return tmp;
  };
  protoOf(SkipToLookaheadSizeNode).minIntrinsicWidth_nsvhwg_k$ = function (_this__u8e3s4, measurable, height) {
    var tmp;
    if (!_this__u8e3s4.get_isLookingAhead_2057g1_k$() && get_isValid(this.lookaheadSize_1)) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = this.lookaheadSize_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      tmp = convertToInt(shiftRight(value, 32));
    } else {
      tmp = measurable.minIntrinsicWidth_jyhjuj_k$(height);
    }
    return tmp;
  };
  protoOf(SkipToLookaheadSizeNode).maxIntrinsicHeight_nrifyt_k$ = function (_this__u8e3s4, measurable, width) {
    var tmp;
    if (!_this__u8e3s4.get_isLookingAhead_2057g1_k$() && get_isValid(this.lookaheadSize_1)) {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_0 = this.lookaheadSize_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      tmp = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    } else {
      tmp = measurable.maxIntrinsicHeight_b0krtc_k$(width);
    }
    return tmp;
  };
  protoOf(SkipToLookaheadSizeNode).minIntrinsicHeight_xt6ly1_k$ = function (_this__u8e3s4, measurable, width) {
    var tmp;
    if (!_this__u8e3s4.get_isLookingAhead_2057g1_k$() && get_isValid(this.lookaheadSize_1)) {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_0 = this.lookaheadSize_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      tmp = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    } else {
      tmp = measurable.minIntrinsicHeight_p2a4ou_k$(width);
    }
    return tmp;
  };
  function DefaultEnabled$lambda() {
    _init_properties_SkipToLookaheadSizeNode_kt__v47psp();
    return true;
  }
  function createContentScaleModifier$lambda($isEnabled) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.set_clip_a88iug_k$($isEnabled());
      return Unit_getInstance();
    };
  }
  var properties_initialized_SkipToLookaheadSizeNode_kt_1of78b;
  function _init_properties_SkipToLookaheadSizeNode_kt__v47psp() {
    if (!properties_initialized_SkipToLookaheadSizeNode_kt_1of78b) {
      properties_initialized_SkipToLookaheadSizeNode_kt_1of78b = true;
      DefaultEnabled = DefaultEnabled$lambda;
      androidx_compose_animation_SkipToLookaheadSizeNode$stable = 8;
      androidx_compose_animation_SkipToLookaheadSizeElement$stable = 0;
    }
  }
  var androidx_compose_animation_AndroidFlingSpline_FlingResult$stable;
  var androidx_compose_animation_AndroidFlingSpline$stable;
  function splineBasedDecay(density) {
    return generateDecayAnimationSpec(new SplineBasedFloatDecayAnimationSpec(density));
  }
  function _get_NbSamples__pl9lcs($this) {
    return $this.NbSamples_1;
  }
  function _get_SplinePositions__4lf5u0($this) {
    return $this.SplinePositions_1;
  }
  function _get_SplineTimes__1bv5pg($this) {
    return $this.SplineTimes_1;
  }
  function FlingResult(distanceCoefficient, velocityCoefficient) {
    this.distanceCoefficient_1 = distanceCoefficient;
    this.velocityCoefficient_1 = velocityCoefficient;
  }
  protoOf(FlingResult).get_distanceCoefficient_3vhbop_k$ = function () {
    return this.distanceCoefficient_1;
  };
  protoOf(FlingResult).get_velocityCoefficient_w8qjlb_k$ = function () {
    return this.velocityCoefficient_1;
  };
  protoOf(FlingResult).component1_7eebsc_k$ = function () {
    return this.distanceCoefficient_1;
  };
  protoOf(FlingResult).component2_7eebsb_k$ = function () {
    return this.velocityCoefficient_1;
  };
  protoOf(FlingResult).copy_4tzoad_k$ = function (distanceCoefficient, velocityCoefficient) {
    return new FlingResult(distanceCoefficient, velocityCoefficient);
  };
  protoOf(FlingResult).copy$default_ujshx8_k$ = function (distanceCoefficient, velocityCoefficient, $super) {
    distanceCoefficient = distanceCoefficient === VOID ? this.distanceCoefficient_1 : distanceCoefficient;
    velocityCoefficient = velocityCoefficient === VOID ? this.velocityCoefficient_1 : velocityCoefficient;
    return $super === VOID ? this.copy_4tzoad_k$(distanceCoefficient, velocityCoefficient) : $super.copy_4tzoad_k$.call(this, distanceCoefficient, velocityCoefficient);
  };
  protoOf(FlingResult).toString = function () {
    return 'FlingResult(distanceCoefficient=' + this.distanceCoefficient_1 + ', velocityCoefficient=' + this.velocityCoefficient_1 + ')';
  };
  protoOf(FlingResult).hashCode = function () {
    var result = getNumberHashCode(this.distanceCoefficient_1);
    result = imul(result, 31) + getNumberHashCode(this.velocityCoefficient_1) | 0;
    return result;
  };
  protoOf(FlingResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingResult))
      return false;
    if (!equals(this.distanceCoefficient_1, other.distanceCoefficient_1))
      return false;
    if (!equals(this.velocityCoefficient_1, other.velocityCoefficient_1))
      return false;
    return true;
  };
  function AndroidFlingSpline() {
    AndroidFlingSpline_instance = this;
    this.NbSamples_1 = 100;
    this.SplinePositions_1 = new Float32Array(101);
    this.SplineTimes_1 = new Float32Array(101);
    computeSplineInfo(this.SplinePositions_1, this.SplineTimes_1, 100);
  }
  protoOf(AndroidFlingSpline).flingPosition_kqyylv_k$ = function (time) {
    var clampedTime = coerceIn(time, 0.0, 1.0);
    var index = numberToInt(100 * clampedTime);
    var distanceCoef = 1.0;
    var velocityCoef = 0.0;
    if (index < 100) {
      var tInf = index / 100;
      var tSup = (index + 1 | 0) / 100;
      var dInf = this.SplinePositions_1[index];
      var dSup = this.SplinePositions_1[index + 1 | 0];
      velocityCoef = (dSup - dInf) / (tSup - tInf);
      distanceCoef = dInf + (clampedTime - tInf) * velocityCoef;
    }
    return new FlingResult(distanceCoef, velocityCoef);
  };
  protoOf(AndroidFlingSpline).deceleration_7lhbmp_k$ = function (velocity, friction) {
    // Inline function 'kotlin.math.abs' call
    // Inline function 'kotlin.math.ln' call
    var x = 0.35 * Math.abs(velocity) / friction;
    return Math.log(x);
  };
  var AndroidFlingSpline_instance;
  function AndroidFlingSpline_getInstance() {
    if (AndroidFlingSpline_instance == null)
      new AndroidFlingSpline();
    return AndroidFlingSpline_instance;
  }
  function computeSplineInfo(splinePositions, splineTimes, nbSamples) {
    var xMin = 0.0;
    var yMin = 0.0;
    var inductionVariable = 0;
    if (inductionVariable < nbSamples)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var alpha = i / nbSamples;
        var xMax = 1.0;
        var x;
        var tx;
        var coef;
        $l$loop: while (true) {
          x = xMin + (xMax - xMin) / 2.0;
          coef = 3.0 * x * (1.0 - x);
          tx = coef * ((1.0 - x) * 0.175 + x * 0.35000002) + x * x * x;
          // Inline function 'kotlin.math.abs' call
          var x_0 = tx - alpha;
          if (Math.abs(x_0) < 1.0E-5)
            break $l$loop;
          if (tx > alpha)
            xMax = x;
          else
            xMin = x;
        }
        splinePositions[i] = coef * ((1.0 - x) * 0.5 + x) + x * x * x;
        var yMax = 1.0;
        var y;
        var dy;
        $l$loop_0: while (true) {
          y = yMin + (yMax - yMin) / 2.0;
          coef = 3.0 * y * (1.0 - y);
          dy = coef * ((1.0 - y) * 0.5 + y) + y * y * y;
          // Inline function 'kotlin.math.abs' call
          var x_1 = dy - alpha;
          if (Math.abs(x_1) < 1.0E-5)
            break $l$loop_0;
          if (dy > alpha)
            yMax = y;
          else
            yMin = y;
        }
        splineTimes[i] = coef * ((1.0 - y) * 0.175 + y * 0.35000002) + y * y * y;
      }
       while (inductionVariable < nbSamples);
    splineTimes[nbSamples] = 1.0;
    splinePositions[nbSamples] = splineTimes[nbSamples];
  }
  var androidx_compose_animation_SplineBasedFloatDecayAnimationSpec$stable;
  function _get_flingCalculator__k6f165($this) {
    return $this.flingCalculator_1;
  }
  function flingDistance($this, startVelocity) {
    var tmp = $this.flingCalculator_1.flingDistance_e8js0p_k$(startVelocity);
    // Inline function 'kotlin.math.sign' call
    return tmp * sign(startVelocity);
  }
  function SplineBasedFloatDecayAnimationSpec(density) {
    this.flingCalculator_1 = new FlingCalculator(get_platformFlingScrollFriction(), density);
  }
  protoOf(SplineBasedFloatDecayAnimationSpec).get_absVelocityThreshold_wsgqo5_k$ = function () {
    return 0.0;
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getTargetValue_k8zsye_k$ = function (initialValue, initialVelocity) {
    return initialValue + flingDistance(this, initialVelocity);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getValueFromNanos_vizg24_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    return initialValue + this.flingCalculator_1.flingInfo_sr0d1q_k$(initialVelocity).position_oaxlut_k$(playTimeMillis);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getDurationNanos_dl2v11_k$ = function (initialValue, initialVelocity) {
    return multiply(this.flingCalculator_1.flingDuration_g3t3l4_k$(initialVelocity), new Long(1000000, 0));
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getVelocityFromNanos_eyb6gk_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    return this.flingCalculator_1.flingInfo_sr0d1q_k$(initialVelocity).velocity_2zfv01_k$(playTimeMillis);
  };
  function animateColor(_this__u8e3s4, transitionSpec, label, targetValueByState, $composer, $changed, $default) {
    var transitionSpec_0 = transitionSpec;
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -64433887, 'CC(animateColor)P(2)67@3230L31,68@3297L58,70@3368L70:Transition.kt#xbi5r1');
    if (!(($default & 1) === 0)) {
      transitionSpec_0 = animateColor$lambda;
    }
    if (!(($default & 2) === 0))
      label_0 = 'ColorAnimation';
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(targetValueByState(_this__u8e3s4.get_targetState_kri3mx_k$(), $composer_0, 112 & $changed >> 6).value_1);
    sourceInformationMarkerStart($composer_0, -1791411589, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changed_ga7h3f_k$(colorSpace);
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value = get_VectorConverter_4(Companion_getInstance_7())(colorSpace);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var typeConverter = tmp1_group;
    // Inline function 'androidx.compose.animation.core.animateValue' call
    var $changed_0 = 14 & $changed | 896 & $changed << 3 | 7168 & $changed << 3 | 57344 & $changed << 3;
    var transitionSpec_1 = transitionSpec_0;
    var label_1 = label_0;
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 1143035377, 'CC(animateValue)P(3,2)1848@78638L32,1855@79111L49,1855@79092L75,1856@79207L45,1856@79192L67,1858@79272L89:Transition.kt#pdpnli');
    if (!((0 & 2) === 0)) {
      transitionSpec_1 = animateColor$lambda_0;
    }
    if (!((0 & 4) === 0))
      label_1 = 'ValueAnimation';
    var tmp_1;
    if (!_this__u8e3s4.get_isSeeking_vjb393_k$()) {
      $composer_1.startReplaceGroup_5hh8aj_k$(1666573488);
      sourceInformation($composer_1, '1844@78495L67');
      sourceInformationMarkerStart($composer_1, -1054612652, 'CC(remember):Transition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($changed_0 & 14 ^ 6) > 4 && $composer_1.changed_ga7h3f_k$(_this__u8e3s4) || ($changed_0 & 6) === 4;
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var tmp0 = Companion_getInstance_13();
        var tmp$ret$5;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Companion.withoutReadObservation' call
          var previousSnapshot = tmp0.get_currentThreadSnapshot_y07jj6_k$();
          var observer = previousSnapshot == null ? null : previousSnapshot.get_readObserver_t4nv53_k$();
          var newSnapshot = tmp0.makeCurrentNonObservable_yxji5w_k$(previousSnapshot);
          try {
            tmp$ret$5 = _this__u8e3s4.get_currentState_snihnl_k$();
            break $l$block;
          }finally {
            tmp0.restoreNonObservable_baklka_k$(previousSnapshot, newSnapshot, observer);
          }
        }
        var value_0 = tmp$ret$5;
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      $composer_1.endReplaceGroup_ek144q_k$();
      tmp_1 = tmp1_group_0;
    } else {
      $composer_1.startReplaceGroup_5hh8aj_k$(1666827533);
      $composer_1.endReplaceGroup_ek144q_k$();
      tmp_1 = _this__u8e3s4.get_currentState_snihnl_k$();
    }
    var initialState = tmp_1;
    var initialValue = targetValueByState(initialState, $composer_1, 112 & $changed_0 >> 9);
    sourceInformationMarkerStart($composer_1, -1054592958, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_1 = ($changed_0 & 14 ^ 6) > 4 && $composer_1.changed_ga7h3f_k$(_this__u8e3s4) || ($changed_0 & 6) === 4;
    // Inline function 'kotlin.let' call
    var it_1 = $composer_1.rememberedValue_4dg93v_k$();
    var tmp_4;
    if (invalid_1 || it_1 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value_1 = derivedStateOf(animateColor$lambda_1(_this__u8e3s4));
      $composer_1.updateRememberedValue_l1wh71_k$(value_1);
      tmp_4 = value_1;
    } else {
      tmp_4 = it_1;
    }
    var tmp_5 = tmp_4;
    var tmp3_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
    sourceInformationMarkerEnd($composer_1);
    var targetValue = targetValueByState(tmp3_group.get_value_j01efc_k$(), $composer_1, 112 & $changed_0 >> 9);
    var tmp_6 = transitionSpec_1;
    sourceInformationMarkerStart($composer_1, -1054589890, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_2 = ($changed_0 & 14 ^ 6) > 4 && $composer_1.changed_ga7h3f_k$(_this__u8e3s4) || ($changed_0 & 6) === 4;
    // Inline function 'kotlin.let' call
    var it_2 = $composer_1.rememberedValue_4dg93v_k$();
    var tmp_7;
    if (invalid_2 || it_2 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value_2 = derivedStateOf(animateColor$lambda_2(_this__u8e3s4));
      $composer_1.updateRememberedValue_l1wh71_k$(value_2);
      tmp_7 = value_2;
    } else {
      tmp_7 = it_2;
    }
    var tmp_8 = tmp_7;
    var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
    sourceInformationMarkerEnd($composer_1);
    var animationSpec = tmp_6(tmp4_group.get_value_j01efc_k$(), $composer_1, 112 & $changed_0 >> 3);
    var tmp0_0 = createTransitionAnimation(_this__u8e3s4, initialValue, targetValue, animationSpec, typeConverter, label_1, $composer_1, 14 & $changed_0 | 57344 & $changed_0 << 9 | 458752 & $changed_0 << 6);
    sourceInformationMarkerEnd($composer_1);
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  }
  function animateColor$lambda(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-781456724);
    if (isTraceInProgress()) {
      traceEventStart(-781456724, $changed, -1, 'androidx.compose.animation.animateColor.<anonymous> (Transition.kt:62)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function animateColor$lambda_0(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-2137771706);
    if (isTraceInProgress()) {
      traceEventStart(-2137771706, $changed, -1, 'androidx.compose.animation.core.animateValue.<anonymous> (Transition.kt:1834)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function animateColor$lambda_1($this) {
    return function () {
      return $this.get_targetState_kri3mx_k$();
    };
  }
  function animateColor$lambda_2($this) {
    return function () {
      return $this.get_segment_xwnoei_k$();
    };
  }
  function get_platformFlingScrollFriction() {
    return platformFlingScrollFriction;
  }
  var platformFlingScrollFriction;
  function rememberSplineBasedDecay($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1838429038, 'C(rememberSplineBasedDecay)33@1347L7,34@1366L114:SplineBasedDecayAnimationSpec.nonAndroid.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(-1838429038, $changed, -1, 'androidx.compose.animation.rememberSplineBasedDecay (SplineBasedDecayAnimationSpec.nonAndroid.kt:30)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var density = tmp0;
    var tmp1_remember$arg$0 = density.get_density_qy0267_k$();
    sourceInformationMarkerStart($composer_0, -1498737564, 'CC(remember):SplineBasedDecayAnimationSpec.nonAndroid.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changed_i8bvic_k$(tmp1_remember$arg$0);
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value = generateDecayAnimationSpec(new SplineBasedFloatDecayAnimationSpec(density));
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp2_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp2_group;
  }
  function NoOp() {
  }
  protoOf(NoOp).equals = function (other) {
    if (!(other instanceof NoOp))
      return false;
    other instanceof NoOp || THROW_CCE();
    return true;
  };
  protoOf(NoOp).hashCode = function () {
    return 0;
  };
  protoOf(NoOp).toString = function () {
    return '@androidx.compose.animation.internal.NoOp(' + ')';
  };
  //region block: post-declaration
  protoOf(AnimatedVisibilityScopeImpl).animateEnterExit_z97dqu_k$ = animateEnterExit;
  protoOf(AnimatedVisibilityScopeImpl).animateEnterExit$default_4f8dik_k$ = animateEnterExit$default;
  protoOf(VeilModifierNode).onMeasureResultChanged_ipbzyg_k$ = onMeasureResultChanged;
  protoOf(RenderInTransitionOverlayNode).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth;
  protoOf(RenderInTransitionOverlayNode).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight;
  protoOf(RenderInTransitionOverlayNode).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth;
  protoOf(RenderInTransitionOverlayNode).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight;
  protoOf(RenderInTransitionOverlayNode).onMeasureResultChanged_ipbzyg_k$ = onMeasureResultChanged;
  protoOf(RenderInTransitionOverlayNode).get_providedValues_crrbpu_k$ = get_providedValues;
  protoOf(RenderInTransitionOverlayNode).provide_fhfib2_k$ = provide;
  protoOf(RenderInTransitionOverlayNode).get_current_2exe6q_k$ = get_current;
  protoOf(SharedBoundsNode).isPlacementApproachInProgress_3haoks_k$ = isPlacementApproachInProgress;
  protoOf(SharedBoundsNode).minApproachIntrinsicWidth_kl18vr_k$ = minApproachIntrinsicWidth;
  protoOf(SharedBoundsNode).minApproachIntrinsicHeight_ophp8g_k$ = minApproachIntrinsicHeight;
  protoOf(SharedBoundsNode).maxApproachIntrinsicWidth_haaviz_k$ = maxApproachIntrinsicWidth;
  protoOf(SharedBoundsNode).maxApproachIntrinsicHeight_cs57u6_k$ = maxApproachIntrinsicHeight;
  protoOf(SharedBoundsNode).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth;
  protoOf(SharedBoundsNode).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight;
  protoOf(SharedBoundsNode).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth;
  protoOf(SharedBoundsNode).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight;
  protoOf(SharedBoundsNode).onMeasureResultChanged_ipbzyg_k$ = onMeasureResultChanged;
  protoOf(SharedBoundsNode).provide_fhfib2_k$ = provide;
  protoOf(SharedBoundsNode).get_current_2exe6q_k$ = get_current;
  protoOf(SharedTransitionScopeImpl).skipToLookaheadSize$default_xnca0i_k$ = skipToLookaheadSize$default;
  protoOf(SharedTransitionScopeImpl).renderInSharedTransitionScopeOverlay$default_29ersv_k$ = renderInSharedTransitionScopeOverlay$default;
  protoOf(SharedTransitionScopeImpl).sharedElement$default_ilu2lb_k$ = sharedElement$default;
  protoOf(SharedTransitionScopeImpl).sharedBounds$default_jahwwo_k$ = sharedBounds$default;
  protoOf(SharedTransitionScopeImpl).sharedElementWithCallerManagedVisibility$default_50uk43_k$ = sharedElementWithCallerManagedVisibility$default;
  protoOf(SharedTransitionScopeImpl).localLookaheadPositionOf$default_10xwp7_k$ = localLookaheadPositionOf$default;
  protoOf(SharedTransitionScopeImpl).skipToLookaheadPosition_gd5pgr_k$ = skipToLookaheadPosition;
  protoOf(SharedTransitionScopeImpl).skipToLookaheadPosition$default_v1ktei_k$ = skipToLookaheadPosition$default;
  protoOf(SharedTransitionScopeImpl).rememberSharedContentState_92w4g5_k$ = rememberSharedContentState;
  protoOf(SharedTransitionScopeImpl).rememberSharedContentState_z7zs23_k$ = rememberSharedContentState_0;
  protoOf(SharedTransitionScopeImpl).makeSharedContentConfig = makeSharedContentConfig;
  protoOf(SharedContentConfig_0).get_isEnabled_6836ux_k$ = get_isEnabled;
  protoOf(SharedContentConfig_0).get_shouldKeepEnabledForOngoingAnimation_t2umwi_k$ = get_shouldKeepEnabledForOngoingAnimation;
  protoOf(SharedContentConfig_0).alternativeTargetBoundsInTransitionScopeAfterRemoval_b74dnl_k$ = alternativeTargetBoundsInTransitionScopeAfterRemoval;
  protoOf(CachedSharedContentConfig).get_isEnabled_6836ux_k$ = get_isEnabled;
  protoOf(CachedSharedContentConfig).get_shouldKeepEnabledForOngoingAnimation_t2umwi_k$ = get_shouldKeepEnabledForOngoingAnimation;
  protoOf(CachedSharedContentConfig).alternativeTargetBoundsInTransitionScopeAfterRemoval_b74dnl_k$ = alternativeTargetBoundsInTransitionScopeAfterRemoval;
  //endregion
  //region block: init
  androidx_compose_animation_AnimatedVisibilityScopeImpl$stable = 8;
  androidx_compose_animation_RenderInTransitionOverlayNodeElement$stable = 0;
  androidx_compose_animation_RenderInTransitionOverlayNode$stable = 8;
  androidx_compose_animation_SharedElementEntry$stable = 8;
  androidx_compose_animation_SharedTransitionStateMachine_State$stable = 0;
  androidx_compose_animation_SharedTransitionStateMachine$stable = 8;
  androidx_compose_animation_NoMatchFound$stable = 0;
  androidx_compose_animation_ActiveMatchFoundConfigPending$stable = 8;
  androidx_compose_animation_MatchIsOrHasBeenConfigured$stable = 0;
  androidx_compose_animation_ActiveMatchConfigured$stable = 0;
  androidx_compose_animation_ActiveMatchRemovedDuringTransition$stable = 8;
  androidx_compose_animation_TargetData$stable = 0;
  androidx_compose_animation_AndroidFlingSpline_FlingResult$stable = 0;
  androidx_compose_animation_AndroidFlingSpline$stable = 8;
  androidx_compose_animation_SplineBasedFloatDecayAnimationSpec$stable = 0;
  platformFlingScrollFriction = 0.015;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AnimatedVisibility;
  _.$_$.b = AnimatedVisibility_0;
  _.$_$.c = SplineBasedFloatDecayAnimationSpec;
  _.$_$.d = get_VectorConverter_4;
  _.$_$.e = animateColorAsState;
  _.$_$.f = expandHorizontally;
  _.$_$.g = expandVertically;
  _.$_$.h = fadeIn;
  _.$_$.i = fadeOut;
  _.$_$.j = rememberSplineBasedDecay;
  _.$_$.k = shrinkHorizontally;
  _.$_$.l = shrinkVertically;
  _.$_$.m = splineBasedDecay;
  //endregion
  return _;
}));
