(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-collection-collection.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-graphics-graphics-shapes'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-graphics-graphics-shapes'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'androidx-graphics-graphics-shapes'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'androidx-graphics-graphics-shapes'.");
    }
    globalThis['androidx-graphics-graphics-shapes'] = factory(typeof globalThis['androidx-graphics-graphics-shapes'] === 'undefined' ? {} : globalThis['androidx-graphics-graphics-shapes'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-collection-collection']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_collection_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ah;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zf;
  var VOID = kotlin_kotlin.$_$.e;
  var initMetadataForClass = kotlin_kotlin.$_$.yf;
  var initMetadataForInterface = kotlin_kotlin.$_$.cg;
  var objectCreate = kotlin_kotlin.$_$.zg;
  var toString = kotlin_kotlin.$_$.dh;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var Unit_getInstance = kotlin_kotlin.$_$.l5;
  var _FloatFloatPair___init__impl__2q1dd3 = kotlin_androidx_collection_collection.$_$.o1;
  var to = kotlin_kotlin.$_$.in;
  var contentEquals = kotlin_kotlin.$_$.x7;
  var arrayCopy = kotlin_kotlin.$_$.y6;
  var contentHashCode = kotlin_kotlin.$_$.l8;
  var _FloatFloatPair___get_packedValue__impl__5lczxp = kotlin_androidx_collection_collection.$_$.p1;
  var shiftRight = kotlin_kotlin.$_$.ye;
  var convertToInt = kotlin_kotlin.$_$.ke;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.u4;
  var floatFromBits = kotlin_kotlin.$_$.rf;
  var Long = kotlin_kotlin.$_$.nl;
  var bitwiseAnd = kotlin_kotlin.$_$.ge;
  var listOf = kotlin_kotlin.$_$.ua;
  var first = kotlin_kotlin.$_$.t9;
  var get_lastIndex = kotlin_kotlin.$_$.ka;
  var listOf_0 = kotlin_kotlin.$_$.ta;
  var initMetadataForObject = kotlin_kotlin.$_$.eg;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var joinToString = kotlin_kotlin.$_$.fa;
  var FloatFloatPair = kotlin_androidx_collection_collection.$_$.b;
  var equals = kotlin_kotlin.$_$.qf;
  var FunctionAdapter = kotlin_kotlin.$_$.bf;
  var isInterface = kotlin_kotlin.$_$.ng;
  var hashCode = kotlin_kotlin.$_$.xf;
  var mutableListOf = kotlin_kotlin.$_$.cb;
  var println = kotlin_kotlin.$_$.de;
  var until = kotlin_kotlin.$_$.di;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var MutableFloatList = kotlin_androidx_collection_collection.$_$.f;
  var last = kotlin_kotlin.$_$.qa;
  var toFloatArray = kotlin_kotlin.$_$.lc;
  var isNaN_0 = kotlin_kotlin.$_$.rm;
  var addAll = kotlin_kotlin.$_$.x6;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(CornerRounding, 'CornerRounding', CornerRounding);
  initMetadataForInterface(PointTransformer, 'PointTransformer');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(Cubic, 'Cubic');
  initMetadataForClass(MutableCubic, 'MutableCubic', MutableCubic, Cubic);
  initMetadataForObject(Factory, 'Factory');
  initMetadataForClass(Feature, 'Feature');
  initMetadataForClass(Edge, 'Edge', VOID, Feature);
  initMetadataForClass(Corner, 'Corner', VOID, Feature);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(sam$androidx_graphics_shapes_PointTransformer$0, 'sam$androidx_graphics_shapes_PointTransformer$0', VOID, VOID, [PointTransformer, FunctionAdapter]);
  initMetadataForClass(RoundedPolygon, 'RoundedPolygon');
  initMetadataForClass(RoundedCorner, 'RoundedCorner');
  //endregion
  function Companion() {
    Companion_instance = this;
    this.Unrounded_1 = new CornerRounding();
  }
  protoOf(Companion).get_Unrounded_lujzfv_k$ = function () {
    return this.Unrounded_1;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CornerRounding(radius, smoothing) {
    Companion_getInstance();
    radius = radius === VOID ? 0.0 : radius;
    smoothing = smoothing === VOID ? 0.0 : smoothing;
    this.radius_1 = radius;
    this.smoothing_1 = smoothing;
  }
  protoOf(CornerRounding).get_radius_ivz5i3_k$ = function () {
    return this.radius_1;
  };
  protoOf(CornerRounding).get_smoothing_odssvp_k$ = function () {
    return this.smoothing_1;
  };
  function PointTransformer() {
  }
  function Cubic_init_$Init$(anchor0, control0, control1, anchor1, $this) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([get_x(anchor0), get_y(anchor0), get_x(control0), get_y(control0), get_x(control1), get_y(control1), get_x(anchor1), get_y(anchor1)]);
    Cubic.call($this, tmp$ret$0);
    return $this;
  }
  function Cubic_init_$Create$(anchor0, control0, control1, anchor1) {
    return Cubic_init_$Init$(anchor0, control0, control1, anchor1, objectCreate(protoOf(Cubic)));
  }
  function zeroIsh($this, value) {
    // Inline function 'kotlin.math.abs' call
    return Math.abs(value) < 1.0E-4;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).straightLine_8gqrri_k$ = function (x0, y0, x1, y1) {
    return Cubic_0(x0, y0, interpolate_0(x0, x1, 1.0 / 3.0), interpolate_0(y0, y1, 1.0 / 3.0), interpolate_0(x0, x1, 2.0 / 3.0), interpolate_0(y0, y1, 2.0 / 3.0), x1, y1);
  };
  protoOf(Companion_0).circularArc_dohtv7_k$ = function (centerX, centerY, x0, y0, x1, y1) {
    var p0d = directionVector(x0 - centerX, y0 - centerY);
    var p1d = directionVector(x1 - centerX, y1 - centerY);
    var rotatedP0 = rotate90(p0d);
    var rotatedP1 = rotate90(p1d);
    var clockwise = dotProduct_0(rotatedP0, x1 - centerX, y1 - centerY) >= 0;
    var cosa = dotProduct(p0d, p1d);
    if (cosa > 0.999)
      return this.straightLine_8gqrri_k$(x0, y0, x1, y1);
    var tmp = distance(x0 - centerX, y0 - centerY) * 4.0 / 3.0;
    // Inline function 'kotlin.math.sqrt' call
    var x = 2 * (1 - cosa);
    var tmp_0 = Math.sqrt(x);
    // Inline function 'kotlin.math.sqrt' call
    var x_0 = 1 - cosa * cosa;
    var k = tmp * (tmp_0 - Math.sqrt(x_0)) / (1 - cosa) * (clockwise ? 1.0 : -1.0);
    return Cubic_0(x0, y0, x0 + get_x(rotatedP0) * k, y0 + get_y(rotatedP0) * k, x1 - get_x(rotatedP1) * k, y1 - get_y(rotatedP1) * k, x1, y1);
  };
  protoOf(Companion_0).empty_m3rib8_k$ = function (x0, y0) {
    return Cubic_0(x0, y0, x0, y0, x0, y0, x0, y0);
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Cubic(points) {
    Companion_getInstance_0();
    points = points === VOID ? new Float32Array(8) : points;
    this.points_1 = points;
    // Inline function 'kotlin.require' call
    if (!(this.points_1.length === 8)) {
      var message = 'Points array size should be 8';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(Cubic).get_points_pladxp_k$ = function () {
    return this.points_1;
  };
  protoOf(Cubic).get_anchor0X_n5yicm_k$ = function () {
    return this.points_1[0];
  };
  protoOf(Cubic).get_anchor0Y_n5yicn_k$ = function () {
    return this.points_1[1];
  };
  protoOf(Cubic).get_control0X_1zau8s_k$ = function () {
    return this.points_1[2];
  };
  protoOf(Cubic).get_control0Y_1zau8t_k$ = function () {
    return this.points_1[3];
  };
  protoOf(Cubic).get_control1X_1zau9n_k$ = function () {
    return this.points_1[4];
  };
  protoOf(Cubic).get_control1Y_1zau9o_k$ = function () {
    return this.points_1[5];
  };
  protoOf(Cubic).get_anchor1X_n5yidh_k$ = function () {
    return this.points_1[6];
  };
  protoOf(Cubic).get_anchor1Y_n5yidi_k$ = function () {
    return this.points_1[7];
  };
  protoOf(Cubic).pointOnCurve_ryqohk_k$ = function (t) {
    var u = 1 - t;
    return _FloatFloatPair___init__impl__2q1dd3(this.get_anchor0X_n5yicm_k$() * (u * u * u) + this.get_control0X_1zau8s_k$() * (3 * t * u * u) + this.get_control1X_1zau9n_k$() * (3 * t * t * u) + this.get_anchor1X_n5yidh_k$() * (t * t * t), this.get_anchor0Y_n5yicn_k$() * (u * u * u) + this.get_control0Y_1zau8t_k$() * (3 * t * u * u) + this.get_control1Y_1zau9o_k$() * (3 * t * t * u) + this.get_anchor1Y_n5yidi_k$() * (t * t * t));
  };
  protoOf(Cubic).zeroLength_cayfpn_k$ = function () {
    var tmp;
    // Inline function 'kotlin.math.abs' call
    var x = this.get_anchor0X_n5yicm_k$() - this.get_anchor1X_n5yidh_k$();
    if (Math.abs(x) < 1.0E-4) {
      // Inline function 'kotlin.math.abs' call
      var x_0 = this.get_anchor0Y_n5yicn_k$() - this.get_anchor1Y_n5yidi_k$();
      tmp = Math.abs(x_0) < 1.0E-4;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Cubic).convexTo_b8pmxc_k$ = function (next) {
    var prevVertex = _FloatFloatPair___init__impl__2q1dd3(this.get_anchor0X_n5yicm_k$(), this.get_anchor0Y_n5yicn_k$());
    var currVertex = _FloatFloatPair___init__impl__2q1dd3(this.get_anchor1X_n5yidh_k$(), this.get_anchor1Y_n5yidi_k$());
    var nextVertex = _FloatFloatPair___init__impl__2q1dd3(next.get_anchor1X_n5yidh_k$(), next.get_anchor1Y_n5yidi_k$());
    return convex(prevVertex, currVertex, nextVertex);
  };
  protoOf(Cubic).calculateBounds_8euaxx_k$ = function (bounds, approximate) {
    if (this.zeroLength_cayfpn_k$()) {
      bounds[0] = this.get_anchor0X_n5yicm_k$();
      bounds[1] = this.get_anchor0Y_n5yicn_k$();
      bounds[2] = this.get_anchor0X_n5yicm_k$();
      bounds[3] = this.get_anchor0Y_n5yicn_k$();
      return Unit_getInstance();
    }
    var tmp0 = this.get_anchor0X_n5yicm_k$();
    // Inline function 'kotlin.math.min' call
    var b = this.get_anchor1X_n5yidh_k$();
    var minX = Math.min(tmp0, b);
    var tmp0_0 = this.get_anchor0Y_n5yicn_k$();
    // Inline function 'kotlin.math.min' call
    var b_0 = this.get_anchor1Y_n5yidi_k$();
    var minY = Math.min(tmp0_0, b_0);
    var tmp0_1 = this.get_anchor0X_n5yicm_k$();
    // Inline function 'kotlin.math.max' call
    var b_1 = this.get_anchor1X_n5yidh_k$();
    var maxX = Math.max(tmp0_1, b_1);
    var tmp0_2 = this.get_anchor0Y_n5yicn_k$();
    // Inline function 'kotlin.math.max' call
    var b_2 = this.get_anchor1Y_n5yidi_k$();
    var maxY = Math.max(tmp0_2, b_2);
    if (approximate) {
      var tmp0_3 = minX;
      var tmp0_4 = this.get_control0X_1zau8s_k$();
      // Inline function 'kotlin.math.min' call
      var b_3 = this.get_control1X_1zau9n_k$();
      // Inline function 'kotlin.math.min' call
      var b_4 = Math.min(tmp0_4, b_3);
      bounds[0] = Math.min(tmp0_3, b_4);
      var tmp0_5 = minY;
      var tmp0_6 = this.get_control0Y_1zau8t_k$();
      // Inline function 'kotlin.math.min' call
      var b_5 = this.get_control1Y_1zau9o_k$();
      // Inline function 'kotlin.math.min' call
      var b_6 = Math.min(tmp0_6, b_5);
      bounds[1] = Math.min(tmp0_5, b_6);
      var tmp0_7 = maxX;
      var tmp0_8 = this.get_control0X_1zau8s_k$();
      // Inline function 'kotlin.math.max' call
      var b_7 = this.get_control1X_1zau9n_k$();
      // Inline function 'kotlin.math.max' call
      var b_8 = Math.max(tmp0_8, b_7);
      bounds[2] = Math.max(tmp0_7, b_8);
      var tmp0_9 = maxY;
      var tmp0_10 = this.get_control0Y_1zau8t_k$();
      // Inline function 'kotlin.math.max' call
      var b_9 = this.get_control1Y_1zau9o_k$();
      // Inline function 'kotlin.math.max' call
      var b_10 = Math.max(tmp0_10, b_9);
      bounds[3] = Math.max(tmp0_9, b_10);
      return Unit_getInstance();
    }
    var xa = -this.get_anchor0X_n5yicm_k$() + 3 * this.get_control0X_1zau8s_k$() - 3 * this.get_control1X_1zau9n_k$() + this.get_anchor1X_n5yidh_k$();
    var xb = 2 * this.get_anchor0X_n5yicm_k$() - 4 * this.get_control0X_1zau8s_k$() + 2 * this.get_control1X_1zau9n_k$();
    var xc = -this.get_anchor0X_n5yicm_k$() + this.get_control0X_1zau8s_k$();
    if (zeroIsh(this, xa)) {
      if (!(xb === 0.0)) {
        var t = 2 * xc / (-2 * xb);
        if (0.0 <= t ? t <= 1.0 : false) {
          // Inline function 'kotlin.let' call
          var it = get_x(this.pointOnCurve_ryqohk_k$(t));
          if (it < minX)
            minX = it;
          if (it > maxX)
            maxX = it;
        }
      }
    } else {
      var xs = xb * xb - 4 * xa * xc;
      if (xs >= 0) {
        var tmp = -xb;
        // Inline function 'kotlin.math.sqrt' call
        var t1 = (tmp + Math.sqrt(xs)) / (2 * xa);
        if (0.0 <= t1 ? t1 <= 1.0 : false) {
          // Inline function 'kotlin.let' call
          var it_0 = get_x(this.pointOnCurve_ryqohk_k$(t1));
          if (it_0 < minX)
            minX = it_0;
          if (it_0 > maxX)
            maxX = it_0;
        }
        var tmp_0 = -xb;
        // Inline function 'kotlin.math.sqrt' call
        var t2 = (tmp_0 - Math.sqrt(xs)) / (2 * xa);
        if (0.0 <= t2 ? t2 <= 1.0 : false) {
          // Inline function 'kotlin.let' call
          var it_1 = get_x(this.pointOnCurve_ryqohk_k$(t2));
          if (it_1 < minX)
            minX = it_1;
          if (it_1 > maxX)
            maxX = it_1;
        }
      }
    }
    var ya = -this.get_anchor0Y_n5yicn_k$() + 3 * this.get_control0Y_1zau8t_k$() - 3 * this.get_control1Y_1zau9o_k$() + this.get_anchor1Y_n5yidi_k$();
    var yb = 2 * this.get_anchor0Y_n5yicn_k$() - 4 * this.get_control0Y_1zau8t_k$() + 2 * this.get_control1Y_1zau9o_k$();
    var yc = -this.get_anchor0Y_n5yicn_k$() + this.get_control0Y_1zau8t_k$();
    if (zeroIsh(this, ya)) {
      if (!(yb === 0.0)) {
        var t_0 = 2 * yc / (-2 * yb);
        if (0.0 <= t_0 ? t_0 <= 1.0 : false) {
          // Inline function 'kotlin.let' call
          var it_2 = get_y(this.pointOnCurve_ryqohk_k$(t_0));
          if (it_2 < minY)
            minY = it_2;
          if (it_2 > maxY)
            maxY = it_2;
        }
      }
    } else {
      var ys = yb * yb - 4 * ya * yc;
      if (ys >= 0) {
        var tmp_1 = -yb;
        // Inline function 'kotlin.math.sqrt' call
        var t1_0 = (tmp_1 + Math.sqrt(ys)) / (2 * ya);
        if (0.0 <= t1_0 ? t1_0 <= 1.0 : false) {
          // Inline function 'kotlin.let' call
          var it_3 = get_y(this.pointOnCurve_ryqohk_k$(t1_0));
          if (it_3 < minY)
            minY = it_3;
          if (it_3 > maxY)
            maxY = it_3;
        }
        var tmp_2 = -yb;
        // Inline function 'kotlin.math.sqrt' call
        var t2_0 = (tmp_2 - Math.sqrt(ys)) / (2 * ya);
        if (0.0 <= t2_0 ? t2_0 <= 1.0 : false) {
          // Inline function 'kotlin.let' call
          var it_4 = get_y(this.pointOnCurve_ryqohk_k$(t2_0));
          if (it_4 < minY)
            minY = it_4;
          if (it_4 > maxY)
            maxY = it_4;
        }
      }
    }
    bounds[0] = minX;
    bounds[1] = minY;
    bounds[2] = maxX;
    bounds[3] = maxY;
  };
  protoOf(Cubic).calculateBounds$default_ynqdi4_k$ = function (bounds, approximate, $super) {
    bounds = bounds === VOID ? new Float32Array(4) : bounds;
    approximate = approximate === VOID ? false : approximate;
    var tmp;
    if ($super === VOID) {
      this.calculateBounds_8euaxx_k$(bounds, approximate);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.calculateBounds_8euaxx_k$.call(this, bounds, approximate);
    }
    return tmp;
  };
  protoOf(Cubic).split_tr05pe_k$ = function (t) {
    var u = 1 - t;
    var pointOnCurve = this.pointOnCurve_ryqohk_k$(t);
    return to(Cubic_0(this.get_anchor0X_n5yicm_k$(), this.get_anchor0Y_n5yicn_k$(), this.get_anchor0X_n5yicm_k$() * u + this.get_control0X_1zau8s_k$() * t, this.get_anchor0Y_n5yicn_k$() * u + this.get_control0Y_1zau8t_k$() * t, this.get_anchor0X_n5yicm_k$() * (u * u) + this.get_control0X_1zau8s_k$() * (2 * u * t) + this.get_control1X_1zau9n_k$() * (t * t), this.get_anchor0Y_n5yicn_k$() * (u * u) + this.get_control0Y_1zau8t_k$() * (2 * u * t) + this.get_control1Y_1zau9o_k$() * (t * t), get_x(pointOnCurve), get_y(pointOnCurve)), Cubic_0(get_x(pointOnCurve), get_y(pointOnCurve), this.get_control0X_1zau8s_k$() * (u * u) + this.get_control1X_1zau9n_k$() * (2 * u * t) + this.get_anchor1X_n5yidh_k$() * (t * t), this.get_control0Y_1zau8t_k$() * (u * u) + this.get_control1Y_1zau9o_k$() * (2 * u * t) + this.get_anchor1Y_n5yidi_k$() * (t * t), this.get_control1X_1zau9n_k$() * u + this.get_anchor1X_n5yidh_k$() * t, this.get_control1Y_1zau9o_k$() * u + this.get_anchor1Y_n5yidi_k$() * t, this.get_anchor1X_n5yidh_k$(), this.get_anchor1Y_n5yidi_k$()));
  };
  protoOf(Cubic).reverse_i6tiw2_k$ = function () {
    return Cubic_0(this.get_anchor1X_n5yidh_k$(), this.get_anchor1Y_n5yidi_k$(), this.get_control1X_1zau9n_k$(), this.get_control1Y_1zau9o_k$(), this.get_control0X_1zau8s_k$(), this.get_control0Y_1zau8t_k$(), this.get_anchor0X_n5yicm_k$(), this.get_anchor0Y_n5yicn_k$());
  };
  protoOf(Cubic).plus_dq4xsj_k$ = function (o) {
    var tmp = 0;
    var tmp_0 = new Float32Array(8);
    while (tmp < 8) {
      var tmp_1 = tmp;
      tmp_0[tmp_1] = this.points_1[tmp_1] + o.points_1[tmp_1];
      tmp = tmp + 1 | 0;
    }
    return new Cubic(tmp_0);
  };
  protoOf(Cubic).times_422v76_k$ = function (x) {
    var tmp = 0;
    var tmp_0 = new Float32Array(8);
    while (tmp < 8) {
      var tmp_1 = tmp;
      tmp_0[tmp_1] = this.points_1[tmp_1] * x;
      tmp = tmp + 1 | 0;
    }
    return new Cubic(tmp_0);
  };
  protoOf(Cubic).times_kr2a3y_k$ = function (x) {
    return this.times_422v76_k$(x);
  };
  protoOf(Cubic).div_nq5qk9_k$ = function (x) {
    return this.times_422v76_k$(1.0 / x);
  };
  protoOf(Cubic).div_fxyyjd_k$ = function (x) {
    return this.div_nq5qk9_k$(x);
  };
  protoOf(Cubic).toString = function () {
    return 'anchor0: (' + this.get_anchor0X_n5yicm_k$() + ', ' + this.get_anchor0Y_n5yicn_k$() + ') control0: (' + this.get_control0X_1zau8s_k$() + ', ' + this.get_control0Y_1zau8t_k$() + '), ' + ('control1: (' + this.get_control1X_1zau9n_k$() + ', ' + this.get_control1Y_1zau9o_k$() + '), anchor1: (' + this.get_anchor1X_n5yidh_k$() + ', ' + this.get_anchor1Y_n5yidi_k$() + ')');
  };
  protoOf(Cubic).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Cubic)) {
      return false;
    }
    return contentEquals(this.points_1, other.points_1);
  };
  protoOf(Cubic).transformed_7qm8j5_k$ = function (f) {
    var newCubic = new MutableCubic();
    var tmp0 = this.points_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destination = newCubic.points_1;
    var endIndex = tmp0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination, 0, 0, endIndex);
    newCubic.transform_6ptfsy_k$(f);
    return newCubic;
  };
  protoOf(Cubic).hashCode = function () {
    return contentHashCode(this.points_1);
  };
  function Cubic_0(anchor0X, anchor0Y, control0X, control0Y, control1X, control1Y, anchor1X, anchor1Y) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([anchor0X, anchor0Y, control0X, control0Y, control1X, control1Y, anchor1X, anchor1Y]);
    return new Cubic(tmp$ret$0);
  }
  function transformOnePoint($this, f, ix) {
    var result = f.transform_rlvnut_k$($this.points_1[ix], $this.points_1[ix + 1 | 0]);
    // Inline function 'androidx.collection.FloatFloatPair.first' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    var bits = convertToInt(shiftRight(_FloatFloatPair___get_packedValue__impl__5lczxp(result), 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$2 = floatFromBits(bits);
    $this.points_1[ix] = tmp$ret$2;
    var tmp = ix + 1 | 0;
    // Inline function 'androidx.collection.FloatFloatPair.second' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(_FloatFloatPair___get_packedValue__impl__5lczxp(result), new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$5 = floatFromBits(bits_0);
    $this.points_1[tmp] = tmp$ret$5;
  }
  function MutableCubic() {
    Cubic.call(this);
  }
  protoOf(MutableCubic).transform_6ptfsy_k$ = function (f) {
    transformOnePoint(this, f, 0);
    transformOnePoint(this, f, 2);
    transformOnePoint(this, f, 4);
    transformOnePoint(this, f, 6);
  };
  protoOf(MutableCubic).interpolate_5g34b9_k$ = function (c1, c2, progress) {
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < 8)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.points_1[index] = interpolate_0(c1.points_1[index], c2.points_1[index], progress);
      }
       while (inductionVariable < 8);
  };
  function get_IdentityMapping() {
    _init_properties_FeatureMapping_kt__7xdtig();
    return IdentityMapping;
  }
  var IdentityMapping;
  function get_LOG_TAG() {
    _init_properties_FeatureMapping_kt__7xdtig();
    return LOG_TAG;
  }
  var LOG_TAG;
  var properties_initialized_FeatureMapping_kt_vb9nd2;
  function _init_properties_FeatureMapping_kt__7xdtig() {
    if (!properties_initialized_FeatureMapping_kt_vb9nd2) {
      properties_initialized_FeatureMapping_kt_vb9nd2 = true;
      IdentityMapping = listOf([to(0.0, 0.0), to(0.5, 0.5)]);
      LOG_TAG = 'FeatureMapping';
    }
  }
  function validated($this, feature) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!feature.cubics_1.isEmpty_y1axqb_k$()) {
      var message = 'Features need at least one cubic.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!isContinuous($this, feature)) {
      var message_0 = 'Feature must be continuous, with the anchor points of all cubics matching the anchor points of the preceding and succeeding cubics';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return feature;
  }
  function isContinuous($this, feature) {
    var prevCubic = first(feature.cubics_1);
    var inductionVariable = 1;
    var last = get_lastIndex(feature.cubics_1);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var cubic = feature.cubics_1.get_c1px32_k$(index);
        var tmp;
        // Inline function 'kotlin.math.abs' call
        var x = cubic.get_anchor0X_n5yicm_k$() - prevCubic.get_anchor1X_n5yidh_k$();
        if (Math.abs(x) > 1.0E-4) {
          tmp = true;
        } else {
          // Inline function 'kotlin.math.abs' call
          var x_0 = cubic.get_anchor0Y_n5yicn_k$() - prevCubic.get_anchor1Y_n5yidi_k$();
          tmp = Math.abs(x_0) > 1.0E-4;
        }
        if (tmp) {
          return false;
        }
        prevCubic = cubic;
      }
       while (!(index === last));
    return true;
  }
  function Feature$Corner$toString$lambda(it) {
    return '[' + it.toString() + ']';
  }
  function Factory() {
    Factory_instance = this;
  }
  protoOf(Factory).buildIgnorableFeature_wq9z4y_k$ = function (cubics) {
    return validated(this, new Edge(cubics));
  };
  protoOf(Factory).buildEdge_s3pu9w_k$ = function (cubic) {
    return new Edge(listOf_0(cubic));
  };
  protoOf(Factory).buildConvexCorner_clo9dh_k$ = function (cubics) {
    return validated(this, new Corner(cubics, true));
  };
  protoOf(Factory).buildConcaveCorner_mxfnen_k$ = function (cubics) {
    return validated(this, new Corner(cubics, false));
  };
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Edge(cubics) {
    Feature.call(this, cubics);
    this.isIgnorableFeature_1 = true;
    this.isEdge_1 = true;
    this.isConvexCorner_1 = false;
    this.isConcaveCorner_1 = false;
  }
  protoOf(Edge).transformed_7qm8j5_k$ = function (f) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = this.cubics_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this_0.add_utx5q5_k$(this.cubics_1.get_c1px32_k$(i).transformed_7qm8j5_k$(f));
      }
       while (inductionVariable <= last);
    var tmp$ret$3 = this_0.build_nmwvly_k$();
    return new Edge(tmp$ret$3);
  };
  protoOf(Edge).reversed_4dh64e_k$ = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var reversedCubics = ArrayList_init_$Create$();
    var inductionVariable = get_lastIndex(this.cubics_1);
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        reversedCubics.add_utx5q5_k$(this.cubics_1.get_c1px32_k$(i).reverse_i6tiw2_k$());
      }
       while (0 <= inductionVariable);
    return new Edge(reversedCubics);
  };
  protoOf(Edge).toString = function () {
    return 'Edge';
  };
  protoOf(Edge).get_isIgnorableFeature_gg6058_k$ = function () {
    return this.isIgnorableFeature_1;
  };
  protoOf(Edge).get_isEdge_evwxzk_k$ = function () {
    return this.isEdge_1;
  };
  protoOf(Edge).get_isConvexCorner_rj4ne7_k$ = function () {
    return this.isConvexCorner_1;
  };
  protoOf(Edge).get_isConcaveCorner_yov6mp_k$ = function () {
    return this.isConcaveCorner_1;
  };
  function Corner(cubics, convex) {
    convex = convex === VOID ? true : convex;
    Feature.call(this, cubics);
    this.convex_1 = convex;
    this.isIgnorableFeature_1 = false;
    this.isEdge_1 = false;
    this.isConvexCorner_1 = this.convex_1;
    this.isConcaveCorner_1 = !this.convex_1;
  }
  protoOf(Corner).get_convex_c06l0w_k$ = function () {
    return this.convex_1;
  };
  protoOf(Corner).transformed_7qm8j5_k$ = function (f) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = this.cubics_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this_0.add_utx5q5_k$(this.cubics_1.get_c1px32_k$(i).transformed_7qm8j5_k$(f));
      }
       while (inductionVariable <= last);
    var tmp$ret$3 = this_0.build_nmwvly_k$();
    return new Corner(tmp$ret$3, this.convex_1);
  };
  protoOf(Corner).reversed_4dh64e_k$ = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var reversedCubics = ArrayList_init_$Create$();
    var inductionVariable = get_lastIndex(this.cubics_1);
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        reversedCubics.add_utx5q5_k$(this.cubics_1.get_c1px32_k$(i).reverse_i6tiw2_k$());
      }
       while (0 <= inductionVariable);
    return new Corner(reversedCubics, !this.convex_1);
  };
  protoOf(Corner).toString = function () {
    return 'Corner: cubics=' + joinToString(this.cubics_1, ', ', VOID, VOID, VOID, VOID, Feature$Corner$toString$lambda) + ' convex=' + this.convex_1;
  };
  protoOf(Corner).get_isIgnorableFeature_gg6058_k$ = function () {
    return this.isIgnorableFeature_1;
  };
  protoOf(Corner).get_isEdge_evwxzk_k$ = function () {
    return this.isEdge_1;
  };
  protoOf(Corner).get_isConvexCorner_rj4ne7_k$ = function () {
    return this.isConvexCorner_1;
  };
  protoOf(Corner).get_isConcaveCorner_yov6mp_k$ = function () {
    return this.isConcaveCorner_1;
  };
  function Feature(cubics) {
    Factory_getInstance();
    this.cubics_1 = cubics;
  }
  protoOf(Feature).get_cubics_c39f1u_k$ = function () {
    return this.cubics_1;
  };
  function get_LOG_TAG_0() {
    return LOG_TAG_0;
  }
  var LOG_TAG_0;
  function get_x(_this__u8e3s4) {
    // Inline function 'androidx.collection.FloatFloatPair.first' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    var bits = convertToInt(shiftRight(_FloatFloatPair___get_packedValue__impl__5lczxp(_this__u8e3s4), 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function get_y(_this__u8e3s4) {
    // Inline function 'androidx.collection.FloatFloatPair.second' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    var bits = convertToInt(bitwiseAnd(_FloatFloatPair___get_packedValue__impl__5lczxp(_this__u8e3s4), new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function transformed(_this__u8e3s4, f) {
    var result = f.transform_rlvnut_k$(get_x(_this__u8e3s4), get_y(_this__u8e3s4));
    // Inline function 'androidx.collection.FloatFloatPair.first' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    var bits = convertToInt(shiftRight(_FloatFloatPair___get_packedValue__impl__5lczxp(result), 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.collection.FloatFloatPair.second' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(_FloatFloatPair___get_packedValue__impl__5lczxp(result), new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$5 = floatFromBits(bits_0);
    return _FloatFloatPair___init__impl__2q1dd3(tmp, tmp$ret$5);
  }
  function plus(_this__u8e3s4, other) {
    return _FloatFloatPair___init__impl__2q1dd3(get_x(_this__u8e3s4) + get_x(other), get_y(_this__u8e3s4) + get_y(other));
  }
  function minus(_this__u8e3s4, other) {
    return _FloatFloatPair___init__impl__2q1dd3(get_x(_this__u8e3s4) - get_x(other), get_y(_this__u8e3s4) - get_y(other));
  }
  function getDistance(_this__u8e3s4) {
    // Inline function 'kotlin.math.sqrt' call
    var x = get_x(_this__u8e3s4) * get_x(_this__u8e3s4) + get_y(_this__u8e3s4) * get_y(_this__u8e3s4);
    return Math.sqrt(x);
  }
  function div(_this__u8e3s4, operand) {
    return _FloatFloatPair___init__impl__2q1dd3(get_x(_this__u8e3s4) / operand, get_y(_this__u8e3s4) / operand);
  }
  function dotProduct(_this__u8e3s4, other) {
    return get_x(_this__u8e3s4) * get_x(other) + get_y(_this__u8e3s4) * get_y(other);
  }
  function times(_this__u8e3s4, operand) {
    return _FloatFloatPair___init__impl__2q1dd3(get_x(_this__u8e3s4) * operand, get_y(_this__u8e3s4) * operand);
  }
  function getDirection(_this__u8e3s4) {
    // Inline function 'kotlin.run' call
    var d = getDistance(_this__u8e3s4);
    // Inline function 'kotlin.require' call
    if (!(d > 0.0)) {
      var message = "Can't get the direction of a 0-length vector";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return div(_this__u8e3s4, d);
  }
  function interpolate(start, stop, fraction) {
    return _FloatFloatPair___init__impl__2q1dd3(interpolate_0(get_x(start), get_x(stop), fraction), interpolate_0(get_y(start), get_y(stop), fraction));
  }
  function clockwise(_this__u8e3s4, other) {
    return get_x(_this__u8e3s4) * get_y(other) - get_y(_this__u8e3s4) * get_x(other) > 0;
  }
  function dotProduct_0(_this__u8e3s4, otherX, otherY) {
    return get_x(_this__u8e3s4) * otherX + get_y(_this__u8e3s4) * otherY;
  }
  function get_LOG_TAG_1() {
    return LOG_TAG_1;
  }
  var LOG_TAG_1;
  function Companion_1() {
    Companion_instance_1 = this;
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function sam$androidx_graphics_shapes_PointTransformer$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_graphics_shapes_PointTransformer$0).transform_rlvnut_k$ = function (x, y) {
    return this.function_1(x, y).packedValue_1;
  };
  protoOf(sam$androidx_graphics_shapes_PointTransformer$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_graphics_shapes_PointTransformer$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, PointTransformer) : false) {
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
  protoOf(sam$androidx_graphics_shapes_PointTransformer$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function RoundedPolygon$normalized$lambda($offsetX, $side, $offsetY) {
    return function (x, y) {
      return new FloatFloatPair(_FloatFloatPair___init__impl__2q1dd3((x + $offsetX) / $side, (y + $offsetY) / $side));
    };
  }
  function RoundedPolygon(features, center) {
    Companion_getInstance_1();
    this.features_1 = features;
    this.center_1 = center;
    var tmp = this;
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    var firstCubic = null;
    var lastCubic = null;
    var firstFeatureSplitStart = null;
    var firstFeatureSplitEnd = null;
    if (this.features_1.get_size_woubt6_k$() > 0 && this.features_1.get_c1px32_k$(0).get_cubics_c39f1u_k$().get_size_woubt6_k$() === 3) {
      var centerCubic = this.features_1.get_c1px32_k$(0).get_cubics_c39f1u_k$().get_c1px32_k$(1);
      var _destruct__k2r9zo = centerCubic.split_tr05pe_k$(0.5);
      var start = _destruct__k2r9zo.component1_7eebsc_k$();
      var end = _destruct__k2r9zo.component2_7eebsb_k$();
      firstFeatureSplitStart = mutableListOf([this.features_1.get_c1px32_k$(0).get_cubics_c39f1u_k$().get_c1px32_k$(0), start]);
      firstFeatureSplitEnd = mutableListOf([end, this.features_1.get_c1px32_k$(0).get_cubics_c39f1u_k$().get_c1px32_k$(2)]);
    }
    var inductionVariable = 0;
    var last = this.features_1.get_size_woubt6_k$();
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp_0;
        if (i === 0 && !(firstFeatureSplitEnd == null)) {
          tmp_0 = firstFeatureSplitEnd;
        } else if (i === this.features_1.get_size_woubt6_k$()) {
          var tmp_1;
          if (!(firstFeatureSplitStart == null)) {
            tmp_1 = firstFeatureSplitStart;
          } else {
            break $l$loop;
          }
          tmp_0 = tmp_1;
        } else {
          tmp_0 = this.features_1.get_c1px32_k$(i).get_cubics_c39f1u_k$();
        }
        var featureCubics = tmp_0;
        var inductionVariable_0 = 0;
        var last_0 = featureCubics.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable_0 <= last_0)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var cubic = featureCubics.get_c1px32_k$(j);
            if (!cubic.zeroLength_cayfpn_k$()) {
              if (!(lastCubic == null)) {
                this_0.add_utx5q5_k$(lastCubic);
              }
              lastCubic = cubic;
              if (firstCubic == null)
                firstCubic = cubic;
            } else {
              if (!(lastCubic == null)) {
                // Inline function 'kotlin.collections.copyOf' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp$ret$1 = lastCubic.get_points_pladxp_k$().slice();
                lastCubic = new Cubic(tmp$ret$1);
                lastCubic.get_points_pladxp_k$()[6] = cubic.get_anchor1X_n5yidh_k$();
                lastCubic.get_points_pladxp_k$()[7] = cubic.get_anchor1Y_n5yidi_k$();
              }
            }
          }
           while (inductionVariable_0 <= last_0);
      }
       while (!(i === last));
    if (!(lastCubic == null) && !(firstCubic == null)) {
      this_0.add_utx5q5_k$(Cubic_0(lastCubic.get_anchor0X_n5yicm_k$(), lastCubic.get_anchor0Y_n5yicn_k$(), lastCubic.get_control0X_1zau8s_k$(), lastCubic.get_control0Y_1zau8t_k$(), lastCubic.get_control1X_1zau9n_k$(), lastCubic.get_control1Y_1zau9o_k$(), firstCubic.get_anchor0X_n5yicm_k$(), firstCubic.get_anchor0Y_n5yicn_k$()));
    } else {
      this_0.add_utx5q5_k$(Cubic_0(this.get_centerX_c9mbwa_k$(), this.get_centerY_c9mbwb_k$(), this.get_centerX_c9mbwa_k$(), this.get_centerY_c9mbwb_k$(), this.get_centerX_c9mbwa_k$(), this.get_centerY_c9mbwb_k$(), this.get_centerX_c9mbwa_k$(), this.get_centerY_c9mbwb_k$()));
    }
    tmp.cubics_1 = this_0.build_nmwvly_k$();
    var prevCubic = this.cubics_1.get_c1px32_k$(this.cubics_1.get_size_woubt6_k$() - 1 | 0);
    // Inline function 'androidx.graphics.shapes.debugLog' call
    var tag = 'RoundedPolygon';
    if (false) {
      var tmp$ret$6 = 'Cubic-1 = ' + prevCubic.toString();
      println(tag + ': ' + tmp$ret$6);
    }
    var inductionVariable_1 = 0;
    var last_1 = this.cubics_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_1 <= last_1)
      do {
        var index = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var cubic_0 = this.cubics_1.get_c1px32_k$(index);
        // Inline function 'androidx.graphics.shapes.debugLog' call
        var tag_0 = 'RoundedPolygon';
        if (false) {
          var tmp$ret$8 = 'Cubic = ' + cubic_0.toString();
          println(tag_0 + ': ' + tmp$ret$8);
        }
        var tmp_2;
        // Inline function 'kotlin.math.abs' call
        var x = cubic_0.get_anchor0X_n5yicm_k$() - prevCubic.get_anchor1X_n5yidh_k$();
        if (Math.abs(x) > 1.0E-4) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.math.abs' call
          var x_0 = cubic_0.get_anchor0Y_n5yicn_k$() - prevCubic.get_anchor1Y_n5yidi_k$();
          tmp_2 = Math.abs(x_0) > 1.0E-4;
        }
        if (tmp_2) {
          // Inline function 'androidx.graphics.shapes.debugLog' call
          var tag_1 = 'RoundedPolygon';
          if (false) {
            var tmp$ret$12 = 'Ix: ' + index + ' | (' + cubic_0.get_anchor0X_n5yicm_k$() + ',' + cubic_0.get_anchor0Y_n5yicn_k$() + ') vs ' + prevCubic.toString();
            println(tag_1 + ': ' + tmp$ret$12);
          }
          throw IllegalArgumentException_init_$Create$('RoundedPolygon must be contiguous, with the anchor points of all curves matching the anchor points of the preceding and succeeding cubics');
        }
        prevCubic = cubic_0;
      }
       while (inductionVariable_1 <= last_1);
  }
  protoOf(RoundedPolygon).get_features_yf4h6u_k$ = function () {
    return this.features_1;
  };
  protoOf(RoundedPolygon).get_center_tvh4r8_k$ = function () {
    return this.center_1;
  };
  protoOf(RoundedPolygon).get_centerX_c9mbwa_k$ = function () {
    return get_x(this.center_1);
  };
  protoOf(RoundedPolygon).get_centerY_c9mbwb_k$ = function () {
    return get_y(this.center_1);
  };
  protoOf(RoundedPolygon).get_cubics_c39f1u_k$ = function () {
    return this.cubics_1;
  };
  protoOf(RoundedPolygon).transformed_7qm8j5_k$ = function (f) {
    var center = transformed(this.center_1, f);
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = this.features_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this_0.add_utx5q5_k$(this.features_1.get_c1px32_k$(i).transformed_7qm8j5_k$(f));
      }
       while (inductionVariable <= last);
    var tmp$ret$3 = this_0.build_nmwvly_k$();
    return new RoundedPolygon(tmp$ret$3, center);
  };
  protoOf(RoundedPolygon).normalized_kr8009_k$ = function () {
    var bounds = this.calculateBounds$default_3yufca_k$();
    var width = bounds[2] - bounds[0];
    var height = bounds[3] - bounds[1];
    // Inline function 'kotlin.math.max' call
    var side = Math.max(width, height);
    var offsetX = (side - width) / 2 - bounds[0];
    var offsetY = (side - height) / 2 - bounds[1];
    var tmp = RoundedPolygon$normalized$lambda(offsetX, side, offsetY);
    return this.transformed_7qm8j5_k$(new sam$androidx_graphics_shapes_PointTransformer$0(tmp));
  };
  protoOf(RoundedPolygon).toString = function () {
    return '[RoundedPolygon. Cubics = ' + joinToString(this.cubics_1) + ' || Features = ' + joinToString(this.features_1) + (' || Center = (' + this.get_centerX_c9mbwa_k$() + ', ' + this.get_centerY_c9mbwb_k$() + ')]');
  };
  protoOf(RoundedPolygon).calculateMaxBounds_vdhm9n_k$ = function (bounds) {
    // Inline function 'kotlin.require' call
    if (!(bounds.length >= 4)) {
      var message = 'Required bounds size of 4';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var maxDistSquared = 0.0;
    var inductionVariable = 0;
    var last = this.cubics_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var cubic = this.cubics_1.get_c1px32_k$(i);
        var anchorDistance = distanceSquared(cubic.get_anchor0X_n5yicm_k$() - this.get_centerX_c9mbwa_k$(), cubic.get_anchor0Y_n5yicn_k$() - this.get_centerY_c9mbwb_k$());
        var middlePoint = cubic.pointOnCurve_ryqohk_k$(0.5);
        var middleDistance = distanceSquared(get_x(middlePoint) - this.get_centerX_c9mbwa_k$(), get_y(middlePoint) - this.get_centerY_c9mbwb_k$());
        var tmp0 = maxDistSquared;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var b = Math.max(anchorDistance, middleDistance);
        maxDistSquared = Math.max(tmp0, b);
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.math.sqrt' call
    var x = maxDistSquared;
    var distance = Math.sqrt(x);
    bounds[0] = this.get_centerX_c9mbwa_k$() - distance;
    bounds[1] = this.get_centerY_c9mbwb_k$() - distance;
    bounds[2] = this.get_centerX_c9mbwa_k$() + distance;
    bounds[3] = this.get_centerY_c9mbwb_k$() + distance;
    return bounds;
  };
  protoOf(RoundedPolygon).calculateMaxBounds$default_4r7ct4_k$ = function (bounds, $super) {
    bounds = bounds === VOID ? new Float32Array(4) : bounds;
    return $super === VOID ? this.calculateMaxBounds_vdhm9n_k$(bounds) : $super.calculateMaxBounds_vdhm9n_k$.call(this, bounds);
  };
  protoOf(RoundedPolygon).calculateBounds_vv4e48_k$ = function (bounds, approximate) {
    // Inline function 'kotlin.require' call
    if (!(bounds.length >= 4)) {
      var message = 'Required bounds size of 4';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var minX = 3.4028235E38;
    var minY = 3.4028235E38;
    var maxX = 1.4E-45;
    var maxY = 1.4E-45;
    var inductionVariable = 0;
    var last = this.cubics_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var cubic = this.cubics_1.get_c1px32_k$(i);
        cubic.calculateBounds_8euaxx_k$(bounds, approximate);
        var tmp0 = minX;
        // Inline function 'kotlin.math.min' call
        var b = bounds[0];
        minX = Math.min(tmp0, b);
        var tmp0_0 = minY;
        // Inline function 'kotlin.math.min' call
        var b_0 = bounds[1];
        minY = Math.min(tmp0_0, b_0);
        var tmp0_1 = maxX;
        // Inline function 'kotlin.math.max' call
        var b_1 = bounds[2];
        maxX = Math.max(tmp0_1, b_1);
        var tmp0_2 = maxY;
        // Inline function 'kotlin.math.max' call
        var b_2 = bounds[3];
        maxY = Math.max(tmp0_2, b_2);
      }
       while (inductionVariable <= last);
    bounds[0] = minX;
    bounds[1] = minY;
    bounds[2] = maxX;
    bounds[3] = maxY;
    return bounds;
  };
  protoOf(RoundedPolygon).calculateBounds$default_3yufca_k$ = function (bounds, approximate, $super) {
    bounds = bounds === VOID ? new Float32Array(4) : bounds;
    approximate = approximate === VOID ? true : approximate;
    return $super === VOID ? this.calculateBounds_vv4e48_k$(bounds, approximate) : $super.calculateBounds_vv4e48_k$.call(this, bounds, approximate);
  };
  protoOf(RoundedPolygon).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundedPolygon))
      return false;
    return equals(this.features_1, other.features_1);
  };
  protoOf(RoundedPolygon).hashCode = function () {
    return hashCode(this.features_1);
  };
  function RoundedPolygon_0(numVertices, radius, centerX, centerY, rounding, perVertexRounding) {
    radius = radius === VOID ? 1.0 : radius;
    centerX = centerX === VOID ? 0.0 : centerX;
    centerY = centerY === VOID ? 0.0 : centerY;
    rounding = rounding === VOID ? Companion_getInstance().get_Unrounded_lujzfv_k$() : rounding;
    perVertexRounding = perVertexRounding === VOID ? null : perVertexRounding;
    return RoundedPolygon_1(verticesFromNumVerts(numVertices, radius, centerX, centerY), rounding, perVertexRounding, centerX, centerY);
  }
  function RoundedPolygon_1(vertices, rounding, perVertexRounding, centerX, centerY) {
    rounding = rounding === VOID ? Companion_getInstance().get_Unrounded_lujzfv_k$() : rounding;
    perVertexRounding = perVertexRounding === VOID ? null : perVertexRounding;
    centerX = centerX === VOID ? 1.4E-45 : centerX;
    centerY = centerY === VOID ? 1.4E-45 : centerY;
    if (vertices.length < 6) {
      throw IllegalArgumentException_init_$Create$('Polygons must have at least 3 vertices');
    }
    if ((vertices.length % 2 | 0) === 1) {
      throw IllegalArgumentException_init_$Create$('The vertices array should have even size');
    }
    if (!(perVertexRounding == null) && !(imul(perVertexRounding.get_size_woubt6_k$(), 2) === vertices.length)) {
      throw IllegalArgumentException_init_$Create$('perVertexRounding list should be either null or the same size as the number of vertices (vertices.size / 2)');
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var corners = ArrayList_init_$Create$();
    var n = vertices.length / 2 | 0;
    // Inline function 'kotlin.collections.mutableListOf' call
    var roundedCorners = ArrayList_init_$Create$();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_elvis_lhs = perVertexRounding == null ? null : perVertexRounding.get_c1px32_k$(i);
        var vtxRounding = tmp1_elvis_lhs == null ? rounding : tmp1_elvis_lhs;
        var prevIndex = imul(((i + n | 0) - 1 | 0) % n | 0, 2);
        var nextIndex = imul((i + 1 | 0) % n | 0, 2);
        roundedCorners.add_utx5q5_k$(new RoundedCorner(_FloatFloatPair___init__impl__2q1dd3(vertices[prevIndex], vertices[prevIndex + 1 | 0]), _FloatFloatPair___init__impl__2q1dd3(vertices[imul(i, 2)], vertices[imul(i, 2) + 1 | 0]), _FloatFloatPair___init__impl__2q1dd3(vertices[nextIndex], vertices[nextIndex + 1 | 0]), vtxRounding));
      }
       while (inductionVariable < n);
    // Inline function 'kotlin.collections.map' call
    var this_0 = until(0, n);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var inductionVariable_0 = this_0.get_first_irdx8n_k$();
    var last_0 = this_0.get_last_wopotb_k$();
    if (inductionVariable_0 <= last_0)
      do {
        var item = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var ix = item;
        var expectedRoundCut = roundedCorners.get_c1px32_k$(ix).expectedRoundCut_1 + roundedCorners.get_c1px32_k$((ix + 1 | 0) % n | 0).expectedRoundCut_1;
        var expectedCut = roundedCorners.get_c1px32_k$(ix).get_expectedCut_vue1vj_k$() + roundedCorners.get_c1px32_k$((ix + 1 | 0) % n | 0).get_expectedCut_vue1vj_k$();
        var vtxX = vertices[imul(ix, 2)];
        var vtxY = vertices[imul(ix, 2) + 1 | 0];
        var nextVtxX = vertices[imul((ix + 1 | 0) % n | 0, 2)];
        var nextVtxY = vertices[imul((ix + 1 | 0) % n | 0, 2) + 1 | 0];
        var sideSize = distance(vtxX - nextVtxX, vtxY - nextVtxY);
        var tmp;
        if (expectedRoundCut > sideSize) {
          tmp = to(sideSize / expectedRoundCut, 0.0);
        } else if (expectedCut > sideSize) {
          tmp = to(1.0, (sideSize - expectedRoundCut) / (expectedCut - expectedRoundCut));
        } else {
          tmp = to(1.0, 1.0);
        }
        var tmp$ret$2 = tmp;
        destination.add_utx5q5_k$(tmp$ret$2);
      }
       while (!(item === last_0));
    var cutAdjusts = destination;
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < n)
      do {
        var i_0 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var allowedCuts = new MutableFloatList(2);
        var inductionVariable_2 = 0;
        if (inductionVariable_2 <= 1)
          do {
            var delta = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var _destruct__k2r9zo = cutAdjusts.get_c1px32_k$((((i_0 + n | 0) - 1 | 0) + delta | 0) % n | 0);
            var roundCutRatio = _destruct__k2r9zo.component1_7eebsc_k$();
            var cutRatio = _destruct__k2r9zo.component2_7eebsb_k$();
            allowedCuts.add_9nou6h_k$(roundedCorners.get_c1px32_k$(i_0).expectedRoundCut_1 * roundCutRatio + (roundedCorners.get_c1px32_k$(i_0).get_expectedCut_vue1vj_k$() - roundedCorners.get_c1px32_k$(i_0).expectedRoundCut_1) * cutRatio);
          }
           while (inductionVariable_2 <= 1);
        corners.add_utx5q5_k$(roundedCorners.get_c1px32_k$(i_0).getCubics_nwegwv_k$(allowedCuts.get_c1px32_k$(0), allowedCuts.get_c1px32_k$(1)));
      }
       while (inductionVariable_1 < n);
    // Inline function 'kotlin.collections.mutableListOf' call
    var tempFeatures = ArrayList_init_$Create$();
    var inductionVariable_3 = 0;
    if (inductionVariable_3 < n)
      do {
        var i_1 = inductionVariable_3;
        inductionVariable_3 = inductionVariable_3 + 1 | 0;
        var prevVtxIndex = ((i_1 + n | 0) - 1 | 0) % n | 0;
        var nextVtxIndex = (i_1 + 1 | 0) % n | 0;
        var currVertex = _FloatFloatPair___init__impl__2q1dd3(vertices[imul(i_1, 2)], vertices[imul(i_1, 2) + 1 | 0]);
        var prevVertex = _FloatFloatPair___init__impl__2q1dd3(vertices[imul(prevVtxIndex, 2)], vertices[imul(prevVtxIndex, 2) + 1 | 0]);
        var nextVertex = _FloatFloatPair___init__impl__2q1dd3(vertices[imul(nextVtxIndex, 2)], vertices[imul(nextVtxIndex, 2) + 1 | 0]);
        var convex_0 = convex(prevVertex, currVertex, nextVertex);
        tempFeatures.add_utx5q5_k$(new Corner(corners.get_c1px32_k$(i_1), convex_0));
        tempFeatures.add_utx5q5_k$(new Edge(listOf_0(Companion_getInstance_0().straightLine_8gqrri_k$(last(corners.get_c1px32_k$(i_1)).get_anchor1X_n5yidh_k$(), last(corners.get_c1px32_k$(i_1)).get_anchor1Y_n5yidi_k$(), first(corners.get_c1px32_k$((i_1 + 1 | 0) % n | 0)).get_anchor0X_n5yicm_k$(), first(corners.get_c1px32_k$((i_1 + 1 | 0) % n | 0)).get_anchor0Y_n5yicn_k$()))));
      }
       while (inductionVariable_3 < n);
    var tmp_0;
    if (centerX === 1.4E-45 || centerY === 1.4E-45) {
      tmp_0 = calculateCenter(vertices);
    } else {
      tmp_0 = _FloatFloatPair___init__impl__2q1dd3(centerX, centerY);
    }
    var _destruct__k2r9zo_0 = tmp_0;
    // Inline function 'androidx.collection.FloatFloatPair.component1' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    var bits = convertToInt(shiftRight(_FloatFloatPair___get_packedValue__impl__5lczxp(_destruct__k2r9zo_0), 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var cx = floatFromBits(bits);
    // Inline function 'androidx.collection.FloatFloatPair.component2' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(_FloatFloatPair___get_packedValue__impl__5lczxp(_destruct__k2r9zo_0), new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var cy = floatFromBits(bits_0);
    return RoundedPolygon_2(tempFeatures, cx, cy);
  }
  function verticesFromNumVerts(numVertices, radius, centerX, centerY) {
    var result = new Float32Array(imul(numVertices, 2));
    var arrayIndex = 0;
    var inductionVariable = 0;
    if (inductionVariable < numVertices)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var vertex = plus(radialToCartesian(radius, get_FloatPi() / numVertices * 2 * i), _FloatFloatPair___init__impl__2q1dd3(centerX, centerY));
        var _unary__edvuaz = arrayIndex;
        arrayIndex = _unary__edvuaz + 1 | 0;
        result[_unary__edvuaz] = get_x(vertex);
        var _unary__edvuaz_0 = arrayIndex;
        arrayIndex = _unary__edvuaz_0 + 1 | 0;
        result[_unary__edvuaz_0] = get_y(vertex);
      }
       while (inductionVariable < numVertices);
    return result;
  }
  function calculateActualSmoothingValue($this, allowedCut) {
    var tmp;
    if (allowedCut > $this.get_expectedCut_vue1vj_k$()) {
      tmp = $this.smoothing_1;
    } else if (allowedCut > $this.expectedRoundCut_1) {
      tmp = $this.smoothing_1 * (allowedCut - $this.expectedRoundCut_1) / ($this.get_expectedCut_vue1vj_k$() - $this.expectedRoundCut_1);
    } else {
      tmp = 0.0;
    }
    return tmp;
  }
  function computeFlankingCurve($this, actualRoundCut, actualSmoothingValues, corner, sideStart, circleSegmentIntersection, otherCircleSegmentIntersection, circleCenter, actualR) {
    var sideDirection = getDirection(minus(sideStart, corner));
    var curveStart = plus(corner, times(times(sideDirection, actualRoundCut), 1 + actualSmoothingValues));
    var p = interpolate(circleSegmentIntersection, div(plus(circleSegmentIntersection, otherCircleSegmentIntersection), 2.0), actualSmoothingValues);
    var curveEnd = plus(circleCenter, times(directionVector(get_x(p) - get_x(circleCenter), get_y(p) - get_y(circleCenter)), actualR));
    var circleTangent = rotate90(minus(curveEnd, circleCenter));
    var tmp0_elvis_lhs = lineIntersection($this, sideStart, sideDirection, curveEnd, circleTangent);
    var tmp;
    var tmp_0 = tmp0_elvis_lhs;
    if ((tmp_0 == null ? null : new FloatFloatPair(tmp_0)) == null) {
      tmp = circleSegmentIntersection;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchorEnd = tmp;
    var anchorStart = div(plus(curveStart, times(anchorEnd, 2.0)), 3.0);
    return Cubic_init_$Create$(curveStart, anchorStart, anchorEnd, curveEnd);
  }
  function lineIntersection($this, p0, d0, p1, d1) {
    var rotatedD1 = rotate90(d1);
    var den = dotProduct(d0, rotatedD1);
    // Inline function 'kotlin.math.abs' call
    if (Math.abs(den) < 1.0E-4)
      return null;
    var num = dotProduct(minus(p1, p0), rotatedD1);
    // Inline function 'kotlin.math.abs' call
    var tmp = Math.abs(den);
    // Inline function 'kotlin.math.abs' call
    if (tmp < 1.0E-4 * Math.abs(num))
      return null;
    var k = num / den;
    return plus(p0, times(d0, k));
  }
  function RoundedCorner(p0, p1, p2, rounding) {
    rounding = rounding === VOID ? null : rounding;
    this.p0__1 = p0;
    this.p1__1 = p1;
    this.p2__1 = p2;
    this.rounding_1 = rounding;
    var v01 = minus(this.p0__1, this.p1__1);
    var v21 = minus(this.p2__1, this.p1__1);
    var d01 = getDistance(v01);
    var d21 = getDistance(v21);
    if (d01 > 0.0 && d21 > 0.0) {
      this.d1__1 = div(v01, d01);
      this.d2__1 = div(v21, d21);
      var tmp = this;
      var tmp0_safe_receiver = this.rounding_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_radius_ivz5i3_k$();
      tmp.cornerRadius_1 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
      var tmp_0 = this;
      var tmp2_safe_receiver = this.rounding_1;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_smoothing_odssvp_k$();
      tmp_0.smoothing_1 = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
      this.cosAngle_1 = dotProduct(this.d1__1, this.d2__1);
      var tmp_1 = this;
      // Inline function 'kotlin.math.sqrt' call
      var x = 1 - square(this.cosAngle_1);
      tmp_1.sinAngle_1 = Math.sqrt(x);
      var tmp_2 = this;
      var tmp_3;
      if (this.sinAngle_1 > 0.001) {
        tmp_3 = this.cornerRadius_1 * (this.cosAngle_1 + 1) / this.sinAngle_1;
      } else {
        tmp_3 = 0.0;
      }
      tmp_2.expectedRoundCut_1 = tmp_3;
    } else {
      this.d1__1 = _FloatFloatPair___init__impl__2q1dd3(0.0, 0.0);
      this.d2__1 = _FloatFloatPair___init__impl__2q1dd3(0.0, 0.0);
      this.cornerRadius_1 = 0.0;
      this.smoothing_1 = 0.0;
      this.cosAngle_1 = 0.0;
      this.sinAngle_1 = 0.0;
      this.expectedRoundCut_1 = 0.0;
    }
    this.center_1 = _FloatFloatPair___init__impl__2q1dd3(0.0, 0.0);
  }
  protoOf(RoundedCorner).get_p0_mlwef6_k$ = function () {
    return this.p0__1;
  };
  protoOf(RoundedCorner).get_p1_1kabx9_k$ = function () {
    return this.p1__1;
  };
  protoOf(RoundedCorner).get_p2_pqh29o_k$ = function () {
    return this.p2__1;
  };
  protoOf(RoundedCorner).get_rounding_vt0skj_k$ = function () {
    return this.rounding_1;
  };
  protoOf(RoundedCorner).get_d1_uk12hd_k$ = function () {
    return this.d1__1;
  };
  protoOf(RoundedCorner).get_d2_gaw95c_k$ = function () {
    return this.d2__1;
  };
  protoOf(RoundedCorner).get_cornerRadius_e70s5s_k$ = function () {
    return this.cornerRadius_1;
  };
  protoOf(RoundedCorner).get_smoothing_odssvp_k$ = function () {
    return this.smoothing_1;
  };
  protoOf(RoundedCorner).get_cosAngle_vfqu6t_k$ = function () {
    return this.cosAngle_1;
  };
  protoOf(RoundedCorner).get_sinAngle_o0jpzw_k$ = function () {
    return this.sinAngle_1;
  };
  protoOf(RoundedCorner).get_expectedRoundCut_90ewz9_k$ = function () {
    return this.expectedRoundCut_1;
  };
  protoOf(RoundedCorner).get_expectedCut_vue1vj_k$ = function () {
    return (1 + this.smoothing_1) * this.expectedRoundCut_1;
  };
  protoOf(RoundedCorner).set_center_gaul4v_k$ = function (_set____db54di) {
    this.center_1 = _set____db54di;
  };
  protoOf(RoundedCorner).get_center_t8gybb_k$ = function () {
    return this.center_1;
  };
  protoOf(RoundedCorner).getCubics_nwegwv_k$ = function (allowedCut0, allowedCut1) {
    // Inline function 'kotlin.math.min' call
    var allowedCut = Math.min(allowedCut0, allowedCut1);
    if (this.expectedRoundCut_1 < 1.0E-4 || allowedCut < 1.0E-4 || this.cornerRadius_1 < 1.0E-4) {
      this.center_1 = this.p1__1;
      return listOf_0(Companion_getInstance_0().straightLine_8gqrri_k$(get_x(this.p1__1), get_y(this.p1__1), get_x(this.p1__1), get_y(this.p1__1)));
    }
    // Inline function 'kotlin.math.min' call
    var b = this.expectedRoundCut_1;
    var actualRoundCut = Math.min(allowedCut, b);
    var actualSmoothing0 = calculateActualSmoothingValue(this, allowedCut0);
    var actualSmoothing1 = calculateActualSmoothingValue(this, allowedCut1);
    var actualR = this.cornerRadius_1 * actualRoundCut / this.expectedRoundCut_1;
    // Inline function 'kotlin.math.sqrt' call
    var x = square(actualR) + square(actualRoundCut);
    var centerDistance = Math.sqrt(x);
    this.center_1 = plus(this.p1__1, times(getDirection(div(plus(this.d1__1, this.d2__1), 2.0)), centerDistance));
    var circleIntersection0 = plus(this.p1__1, times(this.d1__1, actualRoundCut));
    var circleIntersection2 = plus(this.p1__1, times(this.d2__1, actualRoundCut));
    var flanking0 = computeFlankingCurve(this, actualRoundCut, actualSmoothing0, this.p1__1, this.p0__1, circleIntersection0, circleIntersection2, this.center_1, actualR);
    var flanking2 = computeFlankingCurve(this, actualRoundCut, actualSmoothing1, this.p1__1, this.p2__1, circleIntersection2, circleIntersection0, this.center_1, actualR).reverse_i6tiw2_k$();
    return listOf([flanking0, Companion_getInstance_0().circularArc_dohtv7_k$(get_x(this.center_1), get_y(this.center_1), flanking0.get_anchor1X_n5yidh_k$(), flanking0.get_anchor1Y_n5yidi_k$(), flanking2.get_anchor0X_n5yicm_k$(), flanking2.get_anchor0Y_n5yicn_k$()), flanking2]);
  };
  protoOf(RoundedCorner).getCubics$default_umfkpv_k$ = function (allowedCut0, allowedCut1, $super) {
    allowedCut1 = allowedCut1 === VOID ? allowedCut0 : allowedCut1;
    return $super === VOID ? this.getCubics_nwegwv_k$(allowedCut0, allowedCut1) : $super.getCubics_nwegwv_k$.call(this, allowedCut0, allowedCut1);
  };
  function calculateCenter(vertices) {
    var cumulativeX = 0.0;
    var cumulativeY = 0.0;
    var index = 0;
    while (index < vertices.length) {
      var tmp = cumulativeX;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      cumulativeX = tmp + vertices[_unary__edvuaz];
      var tmp_0 = cumulativeY;
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      cumulativeY = tmp_0 + vertices[_unary__edvuaz_0];
    }
    return _FloatFloatPair___init__impl__2q1dd3(cumulativeX / (vertices.length / 2 | 0), cumulativeY / (vertices.length / 2 | 0));
  }
  function RoundedPolygon_2(features, centerX, centerY) {
    centerX = centerX === VOID ? NaN : centerX;
    centerY = centerY === VOID ? NaN : centerY;
    // Inline function 'kotlin.require' call
    if (!(features.get_size_woubt6_k$() >= 2)) {
      var message = 'Polygons must have at least 2 features';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s = features.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var feature = _iterator__ex2g4s.next_20eer_k$();
      var _iterator__ex2g4s_0 = feature.get_cubics_c39f1u_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var cubic = _iterator__ex2g4s_0.next_20eer_k$();
        this_0.add_utx5q5_k$(cubic.get_anchor0X_n5yicm_k$());
        this_0.add_utx5q5_k$(cubic.get_anchor0Y_n5yicn_k$());
      }
    }
    var tmp$ret$5 = this_0.build_nmwvly_k$();
    var vertices = toFloatArray(tmp$ret$5);
    var tmp;
    if (isNaN_0(centerX)) {
      // Inline function 'androidx.collection.FloatFloatPair.first' call
      var this_1 = calculateCenter(vertices);
      // Inline function 'androidx.collection.internal.floatFromBits' call
      var bits = convertToInt(shiftRight(_FloatFloatPair___get_packedValue__impl__5lczxp(this_1), 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp = floatFromBits(bits);
    } else {
      tmp = centerX;
    }
    var cX = tmp;
    var tmp_0;
    if (isNaN_0(centerY)) {
      // Inline function 'androidx.collection.FloatFloatPair.second' call
      var this_2 = calculateCenter(vertices);
      // Inline function 'androidx.collection.internal.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(_FloatFloatPair___get_packedValue__impl__5lczxp(this_2), new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp_0 = floatFromBits(bits_0);
    } else {
      tmp_0 = centerY;
    }
    var cY = tmp_0;
    return new RoundedPolygon(features, _FloatFloatPair___init__impl__2q1dd3(cX, cY));
  }
  function circle(_this__u8e3s4, numVertices, radius, centerX, centerY) {
    numVertices = numVertices === VOID ? 8 : numVertices;
    radius = radius === VOID ? 1.0 : radius;
    centerX = centerX === VOID ? 0.0 : centerX;
    centerY = centerY === VOID ? 0.0 : centerY;
    if (numVertices < 3)
      throw IllegalArgumentException_init_$Create$('Circle must have at least three vertices');
    var theta = get_FloatPi() / numVertices;
    // Inline function 'kotlin.math.cos' call
    var polygonRadius = radius / Math.cos(theta);
    var tmp0_rounding = new CornerRounding(radius);
    return RoundedPolygon_0(numVertices, polygonRadius, centerX, centerY, tmp0_rounding);
  }
  function rectangle(_this__u8e3s4, width, height, rounding, perVertexRounding, centerX, centerY) {
    width = width === VOID ? 2.0 : width;
    height = height === VOID ? 2.0 : height;
    rounding = rounding === VOID ? Companion_getInstance().get_Unrounded_lujzfv_k$() : rounding;
    perVertexRounding = perVertexRounding === VOID ? null : perVertexRounding;
    centerX = centerX === VOID ? 0.0 : centerX;
    centerY = centerY === VOID ? 0.0 : centerY;
    var left = centerX - width / 2;
    var top = centerY - height / 2;
    var right = centerX + width / 2;
    var bottom = centerY + height / 2;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([right, bottom, left, bottom, left, top, right, top]);
    return RoundedPolygon_1(tmp$ret$0, rounding, perVertexRounding, centerX, centerY);
  }
  function star(_this__u8e3s4, numVerticesPerRadius, radius, innerRadius, rounding, innerRounding, perVertexRounding, centerX, centerY) {
    radius = radius === VOID ? 1.0 : radius;
    innerRadius = innerRadius === VOID ? 0.5 : innerRadius;
    rounding = rounding === VOID ? Companion_getInstance().get_Unrounded_lujzfv_k$() : rounding;
    innerRounding = innerRounding === VOID ? null : innerRounding;
    perVertexRounding = perVertexRounding === VOID ? null : perVertexRounding;
    centerX = centerX === VOID ? 0.0 : centerX;
    centerY = centerY === VOID ? 0.0 : centerY;
    if (radius <= 0.0 || innerRadius <= 0.0) {
      throw IllegalArgumentException_init_$Create$('Star radii must both be greater than 0');
    }
    if (innerRadius >= radius) {
      throw IllegalArgumentException_init_$Create$('innerRadius must be less than radius');
    }
    var pvRounding = perVertexRounding;
    if (pvRounding == null && !(innerRounding == null)) {
      // Inline function 'kotlin.collections.flatMap' call
      var tmp0 = until(0, numVerticesPerRadius);
      // Inline function 'kotlin.collections.flatMapTo' call
      var destination = ArrayList_init_$Create$();
      var inductionVariable = tmp0.get_first_irdx8n_k$();
      var last = tmp0.get_last_wopotb_k$();
      if (inductionVariable <= last)
        do {
          var element = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var list = listOf([rounding, innerRounding]);
          addAll(destination, list);
        }
         while (!(element === last));
      pvRounding = destination;
    }
    return RoundedPolygon_1(starVerticesFromNumVerts(numVerticesPerRadius, radius, innerRadius, centerX, centerY), rounding, pvRounding, centerX, centerY);
  }
  function starVerticesFromNumVerts(numVerticesPerRadius, radius, innerRadius, centerX, centerY) {
    var result = new Float32Array(imul(numVerticesPerRadius, 4));
    var arrayIndex = 0;
    var inductionVariable = 0;
    if (inductionVariable < numVerticesPerRadius)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var vertex = radialToCartesian(radius, get_FloatPi() / numVerticesPerRadius * 2 * i);
        var _unary__edvuaz = arrayIndex;
        arrayIndex = _unary__edvuaz + 1 | 0;
        result[_unary__edvuaz] = get_x(vertex) + centerX;
        var _unary__edvuaz_0 = arrayIndex;
        arrayIndex = _unary__edvuaz_0 + 1 | 0;
        result[_unary__edvuaz_0] = get_y(vertex) + centerY;
        vertex = radialToCartesian(innerRadius, get_FloatPi() / numVerticesPerRadius * (imul(2, i) + 1 | 0));
        var _unary__edvuaz_1 = arrayIndex;
        arrayIndex = _unary__edvuaz_1 + 1 | 0;
        result[_unary__edvuaz_1] = get_x(vertex) + centerX;
        var _unary__edvuaz_2 = arrayIndex;
        arrayIndex = _unary__edvuaz_2 + 1 | 0;
        result[_unary__edvuaz_2] = get_y(vertex) + centerY;
      }
       while (inductionVariable < numVerticesPerRadius);
    return result;
  }
  function get_Zero() {
    _init_properties_Utils_kt__jo07cx();
    return Zero;
  }
  var Zero;
  function get_FloatPi() {
    _init_properties_Utils_kt__jo07cx();
    return FloatPi;
  }
  var FloatPi;
  function get_TwoPi() {
    _init_properties_Utils_kt__jo07cx();
    return TwoPi;
  }
  var TwoPi;
  function debugLog(tag, messageFactory) {
    _init_properties_Utils_kt__jo07cx();
    if (false) {
      println(tag + ': ' + messageFactory());
    }
  }
  function distanceSquared(x, y) {
    _init_properties_Utils_kt__jo07cx();
    return x * x + y * y;
  }
  function distance(x, y) {
    _init_properties_Utils_kt__jo07cx();
    // Inline function 'kotlin.math.sqrt' call
    var x_0 = x * x + y * y;
    return Math.sqrt(x_0);
  }
  function convex(previous, current, next) {
    _init_properties_Utils_kt__jo07cx();
    return clockwise(minus(current, previous), minus(next, current));
  }
  function radialToCartesian(radius, angleRadians, center) {
    center = center === VOID ? get_Zero() : center;
    _init_properties_Utils_kt__jo07cx();
    return plus(times(directionVector_0(angleRadians), radius), center);
  }
  function square(x) {
    _init_properties_Utils_kt__jo07cx();
    return x * x;
  }
  function directionVector(x, y) {
    _init_properties_Utils_kt__jo07cx();
    var d = distance(x, y);
    // Inline function 'kotlin.require' call
    if (!(d > 0.0)) {
      var message = 'Required distance greater than zero';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return _FloatFloatPair___init__impl__2q1dd3(x / d, y / d);
  }
  function rotate90(_this__u8e3s4) {
    _init_properties_Utils_kt__jo07cx();
    return _FloatFloatPair___init__impl__2q1dd3(-get_y(_this__u8e3s4), get_x(_this__u8e3s4));
  }
  function directionVector_0(angleRadians) {
    _init_properties_Utils_kt__jo07cx();
    // Inline function 'kotlin.math.cos' call
    var tmp = Math.cos(angleRadians);
    // Inline function 'kotlin.math.sin' call
    var tmp$ret$1 = Math.sin(angleRadians);
    return _FloatFloatPair___init__impl__2q1dd3(tmp, tmp$ret$1);
  }
  function interpolate_0(start, stop, fraction) {
    _init_properties_Utils_kt__jo07cx();
    return (1 - fraction) * start + fraction * stop;
  }
  var properties_initialized_Utils_kt_xvi83j;
  function _init_properties_Utils_kt__jo07cx() {
    if (!properties_initialized_Utils_kt_xvi83j) {
      properties_initialized_Utils_kt_xvi83j = true;
      Zero = _FloatFloatPair___init__impl__2q1dd3(0.0, 0.0);
      FloatPi = 3.141592653589793;
      TwoPi = 2 * 3.141592653589793;
    }
  }
  //region block: init
  LOG_TAG_0 = 'Morph';
  LOG_TAG_1 = 'PolygonMeasure';
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CornerRounding;
  _.$_$.b = PointTransformer;
  _.$_$.c = RoundedPolygon_1;
  _.$_$.d = RoundedPolygon_0;
  _.$_$.e = circle;
  _.$_$.f = rectangle;
  _.$_$.g = star;
  _.$_$.h = Companion_getInstance;
  _.$_$.i = Companion_getInstance_1;
  //endregion
  return _;
}));
