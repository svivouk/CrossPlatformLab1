(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-tooling-preview'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-tooling-preview'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-tooling-preview'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-tooling-preview'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-tooling-preview'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$_$.ul;
  var protoOf = kotlin_kotlin.$_$.ah;
  var Annotation = kotlin_kotlin.$_$.zk;
  var initMetadataForClass = kotlin_kotlin.$_$.yf;
  var VOID = kotlin_kotlin.$_$.e;
  var Long = kotlin_kotlin.$_$.nl;
  var equals = kotlin_kotlin.$_$.qf;
  var equalsLong = kotlin_kotlin.$_$.ne;
  var getStringHashCode = kotlin_kotlin.$_$.wf;
  var getNumberHashCode = kotlin_kotlin.$_$.uf;
  var getBooleanHashCode = kotlin_kotlin.$_$.sf;
  var isCharSequence = kotlin_kotlin.$_$.jg;
  var trim = kotlin_kotlin.$_$.uk;
  var toString = kotlin_kotlin.$_$.dh;
  var split = kotlin_kotlin.$_$.dk;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(AndroidUiMode, 'AndroidUiMode', VOID, VOID, [Annotation]);
  initMetadataForClass(Device, 'Device', VOID, VOID, [Annotation]);
  initMetadataForClass(Preview, 'Preview', VOID, VOID, [Annotation]);
  initMetadataForClass(Wallpaper, 'Wallpaper', VOID, VOID, [Annotation]);
  //endregion
  var androidx_compose_ui_tooling_preview_AndroidUiModes$stable;
  function AndroidUiMode() {
  }
  protoOf(AndroidUiMode).equals = function (other) {
    if (!(other instanceof AndroidUiMode))
      return false;
    other instanceof AndroidUiMode || THROW_CCE();
    return true;
  };
  protoOf(AndroidUiMode).hashCode = function () {
    return 0;
  };
  protoOf(AndroidUiMode).toString = function () {
    return '@androidx.compose.ui.tooling.preview.AndroidUiMode(' + ')';
  };
  var androidx_compose_ui_tooling_preview_Devices$stable;
  function Device() {
  }
  protoOf(Device).equals = function (other) {
    if (!(other instanceof Device))
      return false;
    other instanceof Device || THROW_CCE();
    return true;
  };
  protoOf(Device).hashCode = function () {
    return 0;
  };
  protoOf(Device).toString = function () {
    return '@androidx.compose.ui.tooling.preview.Device(' + ')';
  };
  function Preview(name, group, apiLevel, widthDp, heightDp, locale, fontScale, showSystemUi, showBackground, backgroundColor, uiMode, device, wallpaper) {
    name = name === VOID ? '' : name;
    group = group === VOID ? '' : group;
    apiLevel = apiLevel === VOID ? -1 : apiLevel;
    widthDp = widthDp === VOID ? -1 : widthDp;
    heightDp = heightDp === VOID ? -1 : heightDp;
    locale = locale === VOID ? '' : locale;
    fontScale = fontScale === VOID ? 1.0 : fontScale;
    showSystemUi = showSystemUi === VOID ? false : showSystemUi;
    showBackground = showBackground === VOID ? false : showBackground;
    backgroundColor = backgroundColor === VOID ? new Long(0, 0) : backgroundColor;
    uiMode = uiMode === VOID ? 0 : uiMode;
    device = device === VOID ? '' : device;
    wallpaper = wallpaper === VOID ? -1 : wallpaper;
    this.name_1 = name;
    this.group_1 = group;
    this.apiLevel_1 = apiLevel;
    this.widthDp_1 = widthDp;
    this.heightDp_1 = heightDp;
    this.locale_1 = locale;
    this.fontScale_1 = fontScale;
    this.showSystemUi_1 = showSystemUi;
    this.showBackground_1 = showBackground;
    this.backgroundColor_1 = backgroundColor;
    this.uiMode_1 = uiMode;
    this.device_1 = device;
    this.wallpaper_1 = wallpaper;
  }
  protoOf(Preview).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Preview).get_group_is3eja_k$ = function () {
    return this.group_1;
  };
  protoOf(Preview).get_apiLevel_g3nr1p_k$ = function () {
    return this.apiLevel_1;
  };
  protoOf(Preview).get_widthDp_nfsd8p_k$ = function () {
    return this.widthDp_1;
  };
  protoOf(Preview).get_heightDp_om8qn0_k$ = function () {
    return this.heightDp_1;
  };
  protoOf(Preview).get_locale_g9dqar_k$ = function () {
    return this.locale_1;
  };
  protoOf(Preview).get_fontScale_h56n3i_k$ = function () {
    return this.fontScale_1;
  };
  protoOf(Preview).get_showSystemUi_n4tytl_k$ = function () {
    return this.showSystemUi_1;
  };
  protoOf(Preview).get_showBackground_xc7u24_k$ = function () {
    return this.showBackground_1;
  };
  protoOf(Preview).get_backgroundColor_a0bggk_k$ = function () {
    return this.backgroundColor_1;
  };
  protoOf(Preview).get_uiMode_kf3srk_k$ = function () {
    return this.uiMode_1;
  };
  protoOf(Preview).get_device_cbv3of_k$ = function () {
    return this.device_1;
  };
  protoOf(Preview).get_wallpaper_wwimvt_k$ = function () {
    return this.wallpaper_1;
  };
  protoOf(Preview).equals = function (other) {
    if (!(other instanceof Preview))
      return false;
    var tmp0_other_with_cast = other instanceof Preview ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!(this.group_1 === tmp0_other_with_cast.group_1))
      return false;
    if (!(this.apiLevel_1 === tmp0_other_with_cast.apiLevel_1))
      return false;
    if (!(this.widthDp_1 === tmp0_other_with_cast.widthDp_1))
      return false;
    if (!(this.heightDp_1 === tmp0_other_with_cast.heightDp_1))
      return false;
    if (!(this.locale_1 === tmp0_other_with_cast.locale_1))
      return false;
    if (!equals(this.fontScale_1, tmp0_other_with_cast.fontScale_1))
      return false;
    if (!(this.showSystemUi_1 === tmp0_other_with_cast.showSystemUi_1))
      return false;
    if (!(this.showBackground_1 === tmp0_other_with_cast.showBackground_1))
      return false;
    if (!equalsLong(this.backgroundColor_1, tmp0_other_with_cast.backgroundColor_1))
      return false;
    if (!(this.uiMode_1 === tmp0_other_with_cast.uiMode_1))
      return false;
    if (!(this.device_1 === tmp0_other_with_cast.device_1))
      return false;
    if (!(this.wallpaper_1 === tmp0_other_with_cast.wallpaper_1))
      return false;
    return true;
  };
  protoOf(Preview).hashCode = function () {
    var result = imul(getStringHashCode('name'), 127) ^ getStringHashCode(this.name_1);
    result = result + (imul(getStringHashCode('group'), 127) ^ getStringHashCode(this.group_1)) | 0;
    result = result + (imul(getStringHashCode('apiLevel'), 127) ^ this.apiLevel_1) | 0;
    result = result + (imul(getStringHashCode('widthDp'), 127) ^ this.widthDp_1) | 0;
    result = result + (imul(getStringHashCode('heightDp'), 127) ^ this.heightDp_1) | 0;
    result = result + (imul(getStringHashCode('locale'), 127) ^ getStringHashCode(this.locale_1)) | 0;
    result = result + (imul(getStringHashCode('fontScale'), 127) ^ getNumberHashCode(this.fontScale_1)) | 0;
    result = result + (imul(getStringHashCode('showSystemUi'), 127) ^ getBooleanHashCode(this.showSystemUi_1)) | 0;
    result = result + (imul(getStringHashCode('showBackground'), 127) ^ getBooleanHashCode(this.showBackground_1)) | 0;
    result = result + (imul(getStringHashCode('backgroundColor'), 127) ^ this.backgroundColor_1.hashCode()) | 0;
    result = result + (imul(getStringHashCode('uiMode'), 127) ^ this.uiMode_1) | 0;
    result = result + (imul(getStringHashCode('device'), 127) ^ getStringHashCode(this.device_1)) | 0;
    result = result + (imul(getStringHashCode('wallpaper'), 127) ^ this.wallpaper_1) | 0;
    return result;
  };
  protoOf(Preview).toString = function () {
    return '@androidx.compose.ui.tooling.preview.Preview(' + 'name=' + this.name_1 + ', ' + 'group=' + this.group_1 + ', ' + 'apiLevel=' + this.apiLevel_1 + ', ' + 'widthDp=' + this.widthDp_1 + ', ' + 'heightDp=' + this.heightDp_1 + ', ' + 'locale=' + this.locale_1 + ', ' + 'fontScale=' + this.fontScale_1 + ', ' + 'showSystemUi=' + this.showSystemUi_1 + ', ' + 'showBackground=' + this.showBackground_1 + ', ' + 'backgroundColor=' + this.backgroundColor_1.toString() + ', ' + 'uiMode=' + this.uiMode_1 + ', ' + 'device=' + this.device_1 + ', ' + 'wallpaper=' + this.wallpaper_1 + ')';
  };
  var androidx_compose_ui_tooling_preview_Wallpapers$stable;
  function Wallpaper() {
  }
  protoOf(Wallpaper).equals = function (other) {
    if (!(other instanceof Wallpaper))
      return false;
    other instanceof Wallpaper || THROW_CCE();
    return true;
  };
  protoOf(Wallpaper).hashCode = function () {
    return 0;
  };
  protoOf(Wallpaper).toString = function () {
    return '@androidx.compose.ui.tooling.preview.Wallpaper(' + ')';
  };
  var androidx_compose_ui_tooling_preview_datasource_CollectionPreviewParameterProvider$stable;
  function get_LOREM_IPSUM_SOURCE() {
    _init_properties_LoremIpsum_kt__hrvh2l();
    return LOREM_IPSUM_SOURCE;
  }
  var LOREM_IPSUM_SOURCE;
  var androidx_compose_ui_tooling_preview_datasource_LoremIpsum$stable;
  var properties_initialized_LoremIpsum_kt_kuq5r;
  function _init_properties_LoremIpsum_kt__hrvh2l() {
    if (!properties_initialized_LoremIpsum_kt_kuq5r) {
      properties_initialized_LoremIpsum_kt_kuq5r = true;
      // Inline function 'kotlin.text.trim' call
      var this_0 = '\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales\nlaoreet commodo. Phasellus a purus eu risus elementum consequat. Aenean eu\nelit ut nunc convallis laoreet non ut libero. Suspendisse interdum placerat\nrisus vel ornare. Donec vehicula, turpis sed consectetur ullamcorper, ante\nnunc egestas quam, ultricies adipiscing velit enim at nunc. Aenean id diam\nneque. Praesent ut lacus sed justo viverra fermentum et ut sem. Fusce\nconvallis gravida lacinia. Integer semper dolor ut elit sagittis lacinia.\nPraesent sodales scelerisque eros at rhoncus. Duis posuere sapien vel ipsum\nornare interdum at eu quam. Vestibulum vel massa erat. Aenean quis sagittis\npurus. Phasellus arcu purus, rutrum id consectetur non, bibendum at nibh.\n\nDuis nec erat dolor. Nulla vitae consectetur ligula. Quisque nec mi est. Ut\nquam ante, rutrum at pellentesque gravida, pretium in dui. Cras eget sapien\nvelit. Suspendisse ut sem nec tellus vehicula eleifend sit amet quis velit.\nPhasellus quis suscipit nisi. Nam elementum malesuada tincidunt. Curabitur\niaculis pretium eros, malesuada faucibus leo eleifend a. Curabitur congue\norci in neque euismod a blandit libero vehicula.\n';
      var tmp$ret$0 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      LOREM_IPSUM_SOURCE = split(tmp$ret$0, [' ']);
      androidx_compose_ui_tooling_preview_datasource_LoremIpsum$stable = 0;
    }
  }
  //region block: init
  androidx_compose_ui_tooling_preview_AndroidUiModes$stable = 0;
  androidx_compose_ui_tooling_preview_Devices$stable = 0;
  androidx_compose_ui_tooling_preview_Wallpapers$stable = 0;
  androidx_compose_ui_tooling_preview_datasource_CollectionPreviewParameterProvider$stable = 8;
  //endregion
  return _;
}));
