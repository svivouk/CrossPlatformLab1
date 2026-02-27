(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './components-resources-library.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-material3-material3.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-animation-animation.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./components-resources-library.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-material3-material3.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-animation-animation.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'MyApplication:composeApp'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'MyApplication:composeApp'.");
    }
    if (typeof globalThis['components-resources-library'] === 'undefined') {
      throw new Error("Error loading module 'MyApplication:composeApp'. Its dependency 'components-resources-library' was not found. Please, check whether 'components-resources-library' is loaded prior to 'MyApplication:composeApp'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'MyApplication:composeApp'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'MyApplication:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-material3-material3'] === 'undefined') {
      throw new Error("Error loading module 'MyApplication:composeApp'. Its dependency 'compose-multiplatform-core-compose-material3-material3' was not found. Please, check whether 'compose-multiplatform-core-compose-material3-material3' is loaded prior to 'MyApplication:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'MyApplication:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'MyApplication:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'MyApplication:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'MyApplication:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'MyApplication:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'MyApplication:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'MyApplication:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'MyApplication:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'MyApplication:composeApp'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'MyApplication:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'MyApplication:composeApp'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'MyApplication:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined') {
      throw new Error("Error loading module 'MyApplication:composeApp'. Its dependency 'compose-multiplatform-core-compose-animation-animation' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation' is loaded prior to 'MyApplication:composeApp'.");
    }
    globalThis['MyApplication:composeApp'] = factory(typeof globalThis['MyApplication:composeApp'] === 'undefined' ? {} : globalThis['MyApplication:composeApp'], globalThis['kotlin-kotlin-stdlib'], globalThis['components-resources-library'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-animation-animation']);
  }
}(function (_, kotlin_kotlin, kotlin_components_resources_library, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_animation_animation) {
  'use strict';
  //region block: imports
  var KProperty1 = kotlin_kotlin.$_$.li;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vf;
  var emptySet = kotlin_kotlin.$_$.l9;
  var Long = kotlin_kotlin.$_$.nl;
  var ResourceItem = kotlin_components_resources_library.$_$.c;
  var setOf = kotlin_kotlin.$_$.sb;
  var DrawableResource = kotlin_components_resources_library.$_$.b;
  var lazy = kotlin_kotlin.$_$.um;
  var protoOf = kotlin_kotlin.$_$.ah;
  var initMetadataForObject = kotlin_kotlin.$_$.eg;
  var readResourceBytes = kotlin_components_resources_library.$_$.a;
  var getResourceUri = kotlin_components_resources_library.$_$.d;
  var VOID = kotlin_kotlin.$_$.e;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.n2;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.r2;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var MaterialTheme = kotlin_org_jetbrains_compose_material3_material3.$_$.b;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.q2;
  var Unit_getInstance = kotlin_kotlin.$_$.l5;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.y3;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g3;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t3;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.n2;
  var Text = kotlin_org_jetbrains_compose_material3_material3.$_$.c;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.m2;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.b3;
  var THROW_CCE = kotlin_kotlin.$_$.ul;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.l2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.ac;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.zb;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j1;
  var columnMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h;
  var get_currentCompositeKeyHashCode = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.da;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.vb;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.p;
  var isInterface = kotlin_kotlin.$_$.ng;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.w2;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.z2;
  var Updater__init_impl_uaeges = kotlin_androidx_compose_runtime_runtime.$_$.x2;
  var Updater__reconcile_impl_1mfi6g = kotlin_androidx_compose_runtime_runtime.$_$.y2;
  var ColumnScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l1;
  var painterResource = kotlin_components_resources_library.$_$.e;
  var Image = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k1;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.e2;
  var MaterialTheme_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var androidx_compose_material3_MaterialTheme$stableprop_getter = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.o1;
  var safeContentPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.x;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k;
  var Button = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var AnimatedVisibility = kotlin_org_jetbrains_compose_animation_animation.$_$.b;
  var KMutableProperty0 = kotlin_kotlin.$_$.ii;
  var getLocalDelegateReference = kotlin_kotlin.$_$.tf;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.c;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.s2;
  var initMetadataForClass = kotlin_kotlin.$_$.yf;
  var initMetadataForInterface = kotlin_kotlin.$_$.cg;
  var ComposeViewport = kotlin_org_jetbrains_compose_ui_ui.$_$.l9;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(drawable, 'drawable');
  initMetadataForObject(string, 'string');
  initMetadataForObject(array, 'array');
  initMetadataForObject(plurals, 'plurals');
  initMetadataForObject(font, 'font');
  initMetadataForObject(Res, 'Res', VOID, VOID, VOID, [1]);
  initMetadataForObject(ComposableSingletons$AppKt, 'ComposableSingletons$AppKt');
  initMetadataForClass(Greeting, 'Greeting', Greeting);
  initMetadataForInterface(Platform, 'Platform');
  initMetadataForClass(JsPlatform, 'JsPlatform', JsPlatform, VOID, [Platform]);
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  //endregion
  function get_compose_multiplatform(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = compose_multiplatform$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('compose_multiplatform', 1, tmp, _get_compose_multiplatform_$ref_ota19d(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var compose_multiplatform$delegate;
  function get_MD() {
    return MD;
  }
  var MD;
  function _collectCommonMainDrawable0Resources(map) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    map.put_4fpzoq_k$('compose_multiplatform', get_compose_multiplatform(drawable_getInstance()));
  }
  function compose_multiplatform$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:compose_multiplatform', setOf(new ResourceItem(tmp$ret$0, 'composeResources/myapplication.composeapp.generated.resources/drawable/compose-multiplatform.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_compose_multiplatform_$ref_ota19d() {
    return function (p0) {
      return get_compose_multiplatform(p0);
    };
  }
  var properties_initialized_Drawable0_commonMain_kt_e3wo9q;
  function _init_properties_Drawable0_commonMain_kt__plv2f4() {
    if (!properties_initialized_Drawable0_commonMain_kt_e3wo9q) {
      properties_initialized_Drawable0_commonMain_kt_e3wo9q = true;
      compose_multiplatform$delegate = lazy(compose_multiplatform$delegate$lambda);
    }
  }
  var myapplication_composeapp_generated_resources_Res_drawable$stable;
  var myapplication_composeapp_generated_resources_Res_string$stable;
  var myapplication_composeapp_generated_resources_Res_array$stable;
  var myapplication_composeapp_generated_resources_Res_plurals$stable;
  var myapplication_composeapp_generated_resources_Res_font$stable;
  var myapplication_composeapp_generated_resources_Res$stable;
  function drawable() {
    drawable_instance = this;
  }
  var drawable_instance;
  function drawable_getInstance() {
    if (drawable_instance == null)
      new drawable();
    return drawable_instance;
  }
  function string() {
    string_instance = this;
  }
  var string_instance;
  function string_getInstance() {
    if (string_instance == null)
      new string();
    return string_instance;
  }
  function array() {
    array_instance = this;
  }
  var array_instance;
  function array_getInstance() {
    if (array_instance == null)
      new array();
    return array_instance;
  }
  function plurals() {
    plurals_instance = this;
  }
  var plurals_instance;
  function plurals_getInstance() {
    if (plurals_instance == null)
      new plurals();
    return plurals_instance;
  }
  function font() {
    font_instance = this;
  }
  var font_instance;
  function font_getInstance() {
    if (font_instance == null)
      new font();
    return font_instance;
  }
  function Res() {
    Res_instance = this;
  }
  protoOf(Res).readBytes_74yvde_k$ = function (path, $completion) {
    return readResourceBytes('composeResources/myapplication.composeapp.generated.resources/' + path, $completion);
  };
  protoOf(Res).getUri_3gtoqs_k$ = function (path) {
    return getResourceUri('composeResources/myapplication.composeapp.generated.resources/' + path);
  };
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  function myapplication_composeapp_generated_resources_Res_drawable$stableprop_getter() {
    return myapplication_composeapp_generated_resources_Res_drawable$stable;
  }
  function myapplication_composeapp_generated_resources_Res_string$stableprop_getter() {
    return myapplication_composeapp_generated_resources_Res_string$stable;
  }
  function myapplication_composeapp_generated_resources_Res_array$stableprop_getter() {
    return myapplication_composeapp_generated_resources_Res_array$stable;
  }
  function myapplication_composeapp_generated_resources_Res_plurals$stableprop_getter() {
    return myapplication_composeapp_generated_resources_Res_plurals$stable;
  }
  function myapplication_composeapp_generated_resources_Res_font$stableprop_getter() {
    return myapplication_composeapp_generated_resources_Res_font$stable;
  }
  function myapplication_composeapp_generated_resources_Res$stableprop_getter() {
    return myapplication_composeapp_generated_resources_Res$stable;
  }
  function get_allDrawableResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    var tmp0 = allDrawableResources$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('allDrawableResources', 1, tmp, _get_allDrawableResources_$ref_ur5d6c(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var allDrawableResources$delegate;
  function get_allStringResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    var tmp0 = allStringResources$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('allStringResources', 1, tmp, _get_allStringResources_$ref_vnst3t(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var allStringResources$delegate;
  function get_allStringArrayResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    var tmp0 = allStringArrayResources$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('allStringArrayResources', 1, tmp, _get_allStringArrayResources_$ref_h1tkxq(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var allStringArrayResources$delegate;
  function get_allPluralStringResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    var tmp0 = allPluralStringResources$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('allPluralStringResources', 1, tmp, _get_allPluralStringResources_$ref_zbk6r9(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var allPluralStringResources$delegate;
  function get_allFontResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    var tmp0 = allFontResources$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('allFontResources', 1, tmp, _get_allFontResources_$ref_7qqkuz(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var allFontResources$delegate;
  function allDrawableResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    _collectCommonMainDrawable0Resources(map);
    return map;
  }
  function _get_allDrawableResources_$ref_ur5d6c() {
    return function (p0) {
      return get_allDrawableResources(p0);
    };
  }
  function allStringResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function _get_allStringResources_$ref_vnst3t() {
    return function (p0) {
      return get_allStringResources(p0);
    };
  }
  function allStringArrayResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function _get_allStringArrayResources_$ref_h1tkxq() {
    return function (p0) {
      return get_allStringArrayResources(p0);
    };
  }
  function allPluralStringResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function _get_allPluralStringResources_$ref_zbk6r9() {
    return function (p0) {
      return get_allPluralStringResources(p0);
    };
  }
  function allFontResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function _get_allFontResources_$ref_7qqkuz() {
    return function (p0) {
      return get_allFontResources(p0);
    };
  }
  var properties_initialized_ActualResourceCollectors_kt_vf8u04;
  function _init_properties_ActualResourceCollectors_kt__u9rwji() {
    if (!properties_initialized_ActualResourceCollectors_kt_vf8u04) {
      properties_initialized_ActualResourceCollectors_kt_vf8u04 = true;
      allDrawableResources$delegate = lazy(allDrawableResources$delegate$lambda);
      allStringResources$delegate = lazy(allStringResources$delegate$lambda);
      allStringArrayResources$delegate = lazy(allStringArrayResources$delegate$lambda);
      allPluralStringResources$delegate = lazy(allPluralStringResources$delegate$lambda);
      allFontResources$delegate = lazy(allFontResources$delegate$lambda);
    }
  }
  function App($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1588958180);
    sourceInformation($composer_0, 'C(App)24@902L915:App.kt#dhl3lo');
    if ($composer_0.shouldExecute_4fplh_k$(!($changed === 0), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1588958180, $changed, -1, 'ua.melnyk.myapplication.App (App.kt:23)');
      }
      MaterialTheme(null, null, null, ComposableSingletons$AppKt_getInstance().lambda$791990968__1, $composer_0, 3072, 7);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(App$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$2025594258$lambda($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C34@1325L17:App.kt#dhl3lo');
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(2025594258, $changed, -1, 'ua.melnyk.myapplication.ComposableSingletons$AppKt.lambda$2025594258.<anonymous> (App.kt:34)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('Click me!', null, tmp, null, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 262142);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$802474922$lambda($this$AnimatedVisibility, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C37@1434L31,38@1482L305:App.kt#dhl3lo');
    if (isTraceInProgress()) {
      traceEventStart(802474922, $changed, -1, 'ua.melnyk.myapplication.ComposableSingletons$AppKt.lambda$802474922.<anonymous> (App.kt:37)');
    }
    sourceInformationMarkerStart($composer_0, -1915712151, 'CC(remember):App.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var value = (new Greeting()).greet_1mpr0p_k$();
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var greeting = tmp0_group;
    // Inline function 'androidx.compose.foundation.layout.Column' call
    var modifier = fillMaxWidth(Companion_getInstance_0());
    var verticalArrangement = null;
    var horizontalAlignment = Companion_getInstance_1().get_CenterHorizontally_97ab0v_k$();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 1341605231, 'CC(Column)P(2,3,1)87@4443L61,88@4509L134:Column.kt#2w3rfo');
    if (!((2 & 1) === 0))
      modifier = Companion_getInstance_0();
    if (!((2 & 2) === 0))
      verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
    if (!((2 & 4) === 0))
      horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
    var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 390 >> 3 | 112 & 390 >> 3);
    // Inline function 'androidx.compose.ui.layout.Layout' call
    var modifier_0 = modifier;
    var $composer_2 = $composer_1;
    sourceInformationMarkerStart($composer_2, -1159599143, 'CC(Layout)P(!1,2)81@3355L27,84@3521L416:Layout.kt#80mrfh');
    if (!((0 & 2) === 0))
      modifier_0 = Companion_getInstance_0();
    var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
    var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
    var materialized = materialize($composer_2, modifier_0);
    var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
    var $composer_3 = $composer_2;
    sourceInformationMarkerStart($composer_3, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
    var tmp_1 = $composer_3.get_applier_bupu8u_k$();
    if (!isInterface(tmp_1, Applier)) {
      invalidApplier();
    }
    $composer_3.startReusableNode_jjgeyp_k$();
    if ($composer_3.get_inserting_25mlsw_k$()) {
      $composer_3.createNode_ahrd54_k$(tmp0);
    } else {
      $composer_3.useNode_io5s9l_k$();
    }
    var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
    Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
    Updater__init_impl_uaeges($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
    Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
    Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
    var $composer_4 = $composer_3;
    sourceInformationMarkerStart($composer_4, 2093002350, 'C89@4557L9:Column.kt#2w3rfo');
    ColumnScopeInstance_getInstance();
    var $composer_5 = $composer_4;
    sourceInformationMarkerStart($composer_5, -221748800, 'C42@1664L51,42@1658L64,43@1743L26:App.kt#dhl3lo');
    var tmp_2 = painterResource(get_compose_multiplatform(drawable_getInstance()), $composer_5, 0);
    Image(tmp_2, null, null, null, null, 0.0, null, $composer_5, 48, 124);
    var tmp_3 = 'Compose: ' + greeting;
    var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
    var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
    var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
    var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
    var tmp_8 = _TextOverflow___init__impl__obguoe(0);
    Text(tmp_3, null, tmp_4, null, tmp_5, null, null, null, tmp_6, null, null, tmp_7, tmp_8, false, 0, 0, null, null, $composer_5, 0, 0, 262142);
    sourceInformationMarkerEnd($composer_5);
    sourceInformationMarkerEnd($composer_4);
    $composer_3.endNode_3m0yfn_k$();
    sourceInformationMarkerEnd($composer_3);
    sourceInformationMarkerEnd($composer_2);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda$791990968$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C25@945L34,28@1070L11,26@988L823:App.kt#dhl3lo');
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(791990968, $changed, -1, 'ua.melnyk.myapplication.ComposableSingletons$AppKt.lambda$791990968.<anonymous> (App.kt:25)');
      }
      sourceInformationMarkerStart($composer_0, 894109818, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = mutableStateOf(false);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var showContent$delegate = tmp0_group;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = fillMaxSize(safeContentPadding(background(Companion_getInstance_0(), MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_0, androidx_compose_material3_MaterialTheme$stableprop_getter()).get_primaryContainer_7luo29_k$())));
      var verticalArrangement = null;
      var horizontalAlignment = Companion_getInstance_1().get_CenterHorizontally_97ab0v_k$();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1341605231, 'CC(Column)P(2,3,1)87@4443L61,88@4509L134:Column.kt#2w3rfo');
      if (!((2 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((2 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((2 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 384 >> 3 | 112 & 384 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1159599143, 'CC(Layout)P(!1,2)81@3355L27,84@3521L416:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
      var tmp_1 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__init_impl_uaeges($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, 2093002350, 'C89@4557L9:Column.kt#2w3rfo');
      var tmp0_0 = ColumnScopeInstance_getInstance();
      var $changed_0 = 6 | 112 & 384 >> 6;
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 1866648898, 'C33@1275L30,33@1258L98,36@1369L432:App.kt#dhl3lo');
      sourceInformationMarkerStart($composer_5, 614403840, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableSingletons$AppKt$lambda$791990968$lambda$lambda(showContent$delegate);
        $composer_5.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_5);
      Button(tmp0_group_0, null, false, null, null, null, null, null, null, ComposableSingletons$AppKt_getInstance().lambda$2025594258__1, $composer_5, 805306374, 510);
      var tmp_4 = invoke$lambda(showContent$delegate);
      AnimatedVisibility(tmp0_0, tmp_4, null, null, null, null, ComposableSingletons$AppKt_getInstance().lambda$802474922__1, $composer_5, 1572864 | 14 & $changed_0, 30);
      sourceInformationMarkerEnd($composer_5);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function invoke$lambda($showContent$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('showContent', KMutableProperty0, true);
    return $showContent$delegate.get_value_j01efc_k$();
  }
  function invoke$lambda_0($showContent$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('showContent', KMutableProperty0, true);
    $showContent$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ComposableSingletons$AppKt$lambda$791990968$lambda$lambda($showContent$delegate) {
    return function () {
      invoke$lambda_0($showContent$delegate, !invoke$lambda($showContent$delegate));
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt() {
    ComposableSingletons$AppKt_instance = this;
    var tmp = this;
    tmp.lambda$2025594258__1 = ComposableLambda$invoke$ref(composableLambdaInstance(2025594258, false, ComposableSingletons$AppKt$lambda$2025594258$lambda));
    var tmp_0 = this;
    tmp_0.lambda$802474922__1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(802474922, false, ComposableSingletons$AppKt$lambda$802474922$lambda));
    var tmp_1 = this;
    tmp_1.lambda$791990968__1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(791990968, false, ComposableSingletons$AppKt$lambda$791990968$lambda));
  }
  protoOf(ComposableSingletons$AppKt).get_lambda$2025594258_hmnutu_k$ = function () {
    return this.lambda$2025594258__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$802474922_eui4hq_k$ = function () {
    return this.lambda$802474922__1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda$791990968_67i73u_k$ = function () {
    return this.lambda$791990968__1;
  };
  var ComposableSingletons$AppKt_instance;
  function ComposableSingletons$AppKt_getInstance() {
    if (ComposableSingletons$AppKt_instance == null)
      new ComposableSingletons$AppKt();
    return ComposableSingletons$AppKt_instance;
  }
  function App$lambda($$changed) {
    return function ($composer, $force) {
      App($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var ua_melnyk_myapplication_Greeting$stable;
  function _get_platform__8t1e14($this) {
    return $this.platform_1;
  }
  function Greeting() {
    this.platform_1 = getPlatform();
  }
  protoOf(Greeting).greet_1mpr0p_k$ = function () {
    return 'Hello, ' + this.platform_1.get_name_woqyms_k$() + '!';
  };
  function ua_melnyk_myapplication_Greeting$stableprop_getter() {
    return ua_melnyk_myapplication_Greeting$stable;
  }
  function Platform() {
  }
  var ua_melnyk_myapplication_JsPlatform$stable;
  function JsPlatform() {
    this.name_1 = 'Web with Kotlin/JS';
  }
  protoOf(JsPlatform).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  function getPlatform() {
    return new JsPlatform();
  }
  function ua_melnyk_myapplication_JsPlatform$stableprop_getter() {
    return ua_melnyk_myapplication_JsPlatform$stable;
  }
  function main() {
    ComposeViewport(VOID, VOID, ComposableSingletons$MainKt_getInstance().lambda$_265842073_rzie9j_1);
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$MainKt$lambda$_265842073$lambda_uu9gav($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C8@219L5:main.kt#dhl3lo');
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-265842073, $changed, -1, 'ua.melnyk.myapplication.ComposableSingletons$MainKt.lambda$-265842073.<anonymous> (main.kt:8)');
      }
      App($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda$_265842073_rzie9j_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-265842073, false, ComposableSingletons$MainKt$lambda$_265842073$lambda_uu9gav));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda$_265842073_m1ayzi_k$ = function () {
    return this.lambda$_265842073_rzie9j_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function mainWrapper() {
    main();
  }
  //region block: init
  MD = 'composeResources/myapplication.composeapp.generated.resources/';
  myapplication_composeapp_generated_resources_Res_drawable$stable = 0;
  myapplication_composeapp_generated_resources_Res_string$stable = 0;
  myapplication_composeapp_generated_resources_Res_array$stable = 0;
  myapplication_composeapp_generated_resources_Res_plurals$stable = 0;
  myapplication_composeapp_generated_resources_Res_font$stable = 0;
  myapplication_composeapp_generated_resources_Res$stable = 0;
  ua_melnyk_myapplication_Greeting$stable = 8;
  ua_melnyk_myapplication_JsPlatform$stable = 0;
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=MyApplication-composeApp.js.map
