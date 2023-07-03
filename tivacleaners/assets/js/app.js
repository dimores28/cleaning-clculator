(() => {
    var __webpack_modules__ = {
        211: function(__unused_webpack_module, exports) {
            (function(global, factory) {
                true ? factory(exports) : 0;
            })(0, (function(exports) {
                "use strict";
                exports.PipsMode = void 0;
                (function(PipsMode) {
                    PipsMode["Range"] = "range";
                    PipsMode["Steps"] = "steps";
                    PipsMode["Positions"] = "positions";
                    PipsMode["Count"] = "count";
                    PipsMode["Values"] = "values";
                })(exports.PipsMode || (exports.PipsMode = {}));
                exports.PipsType = void 0;
                (function(PipsType) {
                    PipsType[PipsType["None"] = -1] = "None";
                    PipsType[PipsType["NoValue"] = 0] = "NoValue";
                    PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
                    PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
                })(exports.PipsType || (exports.PipsType = {}));
                function isValidFormatter(entry) {
                    return isValidPartialFormatter(entry) && typeof entry.from === "function";
                }
                function isValidPartialFormatter(entry) {
                    return typeof entry === "object" && typeof entry.to === "function";
                }
                function removeElement(el) {
                    el.parentElement.removeChild(el);
                }
                function isSet(value) {
                    return value !== null && value !== void 0;
                }
                function preventDefault(e) {
                    e.preventDefault();
                }
                function unique(array) {
                    return array.filter((function(a) {
                        return !this[a] ? this[a] = true : false;
                    }), {});
                }
                function closest(value, to) {
                    return Math.round(value / to) * to;
                }
                function offset(elem, orientation) {
                    var rect = elem.getBoundingClientRect();
                    var doc = elem.ownerDocument;
                    var docElem = doc.documentElement;
                    var pageOffset = getPageOffset(doc);
                    if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) pageOffset.x = 0;
                    return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
                }
                function isNumeric(a) {
                    return typeof a === "number" && !isNaN(a) && isFinite(a);
                }
                function addClassFor(element, className, duration) {
                    if (duration > 0) {
                        addClass(element, className);
                        setTimeout((function() {
                            removeClass(element, className);
                        }), duration);
                    }
                }
                function limit(a) {
                    return Math.max(Math.min(a, 100), 0);
                }
                function asArray(a) {
                    return Array.isArray(a) ? a : [ a ];
                }
                function countDecimals(numStr) {
                    numStr = String(numStr);
                    var pieces = numStr.split(".");
                    return pieces.length > 1 ? pieces[1].length : 0;
                }
                function addClass(el, className) {
                    if (el.classList && !/\s/.test(className)) el.classList.add(className); else el.className += " " + className;
                }
                function removeClass(el, className) {
                    if (el.classList && !/\s/.test(className)) el.classList.remove(className); else el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
                }
                function hasClass(el, className) {
                    return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
                }
                function getPageOffset(doc) {
                    var supportPageOffset = window.pageXOffset !== void 0;
                    var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
                    var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
                    var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
                    return {
                        x,
                        y
                    };
                }
                function getActions() {
                    return window.navigator.pointerEnabled ? {
                        start: "pointerdown",
                        move: "pointermove",
                        end: "pointerup"
                    } : window.navigator.msPointerEnabled ? {
                        start: "MSPointerDown",
                        move: "MSPointerMove",
                        end: "MSPointerUp"
                    } : {
                        start: "mousedown touchstart",
                        move: "mousemove touchmove",
                        end: "mouseup touchend"
                    };
                }
                function getSupportsPassive() {
                    var supportsPassive = false;
                    try {
                        var opts = Object.defineProperty({}, "passive", {
                            get: function() {
                                supportsPassive = true;
                            }
                        });
                        window.addEventListener("test", null, opts);
                    } catch (e) {}
                    return supportsPassive;
                }
                function getSupportsTouchActionNone() {
                    return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
                }
                function subRangeRatio(pa, pb) {
                    return 100 / (pb - pa);
                }
                function fromPercentage(range, value, startRange) {
                    return value * 100 / (range[startRange + 1] - range[startRange]);
                }
                function toPercentage(range, value) {
                    return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
                }
                function isPercentage(range, value) {
                    return value * (range[1] - range[0]) / 100 + range[0];
                }
                function getJ(value, arr) {
                    var j = 1;
                    while (value >= arr[j]) j += 1;
                    return j;
                }
                function toStepping(xVal, xPct, value) {
                    if (value >= xVal.slice(-1)[0]) return 100;
                    var j = getJ(value, xVal);
                    var va = xVal[j - 1];
                    var vb = xVal[j];
                    var pa = xPct[j - 1];
                    var pb = xPct[j];
                    return pa + toPercentage([ va, vb ], value) / subRangeRatio(pa, pb);
                }
                function fromStepping(xVal, xPct, value) {
                    if (value >= 100) return xVal.slice(-1)[0];
                    var j = getJ(value, xPct);
                    var va = xVal[j - 1];
                    var vb = xVal[j];
                    var pa = xPct[j - 1];
                    var pb = xPct[j];
                    return isPercentage([ va, vb ], (value - pa) * subRangeRatio(pa, pb));
                }
                function getStep(xPct, xSteps, snap, value) {
                    if (value === 100) return value;
                    var j = getJ(value, xPct);
                    var a = xPct[j - 1];
                    var b = xPct[j];
                    if (snap) {
                        if (value - a > (b - a) / 2) return b;
                        return a;
                    }
                    if (!xSteps[j - 1]) return value;
                    return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
                }
                var Spectrum = function() {
                    function Spectrum(entry, snap, singleStep) {
                        this.xPct = [];
                        this.xVal = [];
                        this.xSteps = [];
                        this.xNumSteps = [];
                        this.xHighestCompleteStep = [];
                        this.xSteps = [ singleStep || false ];
                        this.xNumSteps = [ false ];
                        this.snap = snap;
                        var index;
                        var ordered = [];
                        Object.keys(entry).forEach((function(index) {
                            ordered.push([ asArray(entry[index]), index ]);
                        }));
                        ordered.sort((function(a, b) {
                            return a[0][0] - b[0][0];
                        }));
                        for (index = 0; index < ordered.length; index++) this.handleEntryPoint(ordered[index][1], ordered[index][0]);
                        this.xNumSteps = this.xSteps.slice(0);
                        for (index = 0; index < this.xNumSteps.length; index++) this.handleStepPoint(index, this.xNumSteps[index]);
                    }
                    Spectrum.prototype.getDistance = function(value) {
                        var distances = [];
                        for (var index = 0; index < this.xNumSteps.length - 1; index++) distances[index] = fromPercentage(this.xVal, value, index);
                        return distances;
                    };
                    Spectrum.prototype.getAbsoluteDistance = function(value, distances, direction) {
                        var xPct_index = 0;
                        if (value < this.xPct[this.xPct.length - 1]) while (value > this.xPct[xPct_index + 1]) xPct_index++; else if (value === this.xPct[this.xPct.length - 1]) xPct_index = this.xPct.length - 2;
                        if (!direction && value === this.xPct[xPct_index + 1]) xPct_index++;
                        if (distances === null) distances = [];
                        var start_factor;
                        var rest_factor = 1;
                        var rest_rel_distance = distances[xPct_index];
                        var range_pct = 0;
                        var rel_range_distance = 0;
                        var abs_distance_counter = 0;
                        var range_counter = 0;
                        if (direction) start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]); else start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
                        while (rest_rel_distance > 0) {
                            range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                            if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                                rel_range_distance = range_pct * start_factor;
                                rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                                start_factor = 1;
                            } else {
                                rel_range_distance = distances[xPct_index + range_counter] * range_pct / 100 * rest_factor;
                                rest_factor = 0;
                            }
                            if (direction) {
                                abs_distance_counter -= rel_range_distance;
                                if (this.xPct.length + range_counter >= 1) range_counter--;
                            } else {
                                abs_distance_counter += rel_range_distance;
                                if (this.xPct.length - range_counter >= 1) range_counter++;
                            }
                            rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
                        }
                        return value + abs_distance_counter;
                    };
                    Spectrum.prototype.toStepping = function(value) {
                        value = toStepping(this.xVal, this.xPct, value);
                        return value;
                    };
                    Spectrum.prototype.fromStepping = function(value) {
                        return fromStepping(this.xVal, this.xPct, value);
                    };
                    Spectrum.prototype.getStep = function(value) {
                        value = getStep(this.xPct, this.xSteps, this.snap, value);
                        return value;
                    };
                    Spectrum.prototype.getDefaultStep = function(value, isDown, size) {
                        var j = getJ(value, this.xPct);
                        if (value === 100 || isDown && value === this.xPct[j - 1]) j = Math.max(j - 1, 1);
                        return (this.xVal[j] - this.xVal[j - 1]) / size;
                    };
                    Spectrum.prototype.getNearbySteps = function(value) {
                        var j = getJ(value, this.xPct);
                        return {
                            stepBefore: {
                                startValue: this.xVal[j - 2],
                                step: this.xNumSteps[j - 2],
                                highestStep: this.xHighestCompleteStep[j - 2]
                            },
                            thisStep: {
                                startValue: this.xVal[j - 1],
                                step: this.xNumSteps[j - 1],
                                highestStep: this.xHighestCompleteStep[j - 1]
                            },
                            stepAfter: {
                                startValue: this.xVal[j],
                                step: this.xNumSteps[j],
                                highestStep: this.xHighestCompleteStep[j]
                            }
                        };
                    };
                    Spectrum.prototype.countStepDecimals = function() {
                        var stepDecimals = this.xNumSteps.map(countDecimals);
                        return Math.max.apply(null, stepDecimals);
                    };
                    Spectrum.prototype.hasNoSize = function() {
                        return this.xVal[0] === this.xVal[this.xVal.length - 1];
                    };
                    Spectrum.prototype.convert = function(value) {
                        return this.getStep(this.toStepping(value));
                    };
                    Spectrum.prototype.handleEntryPoint = function(index, value) {
                        var percentage;
                        if (index === "min") percentage = 0; else if (index === "max") percentage = 100; else percentage = parseFloat(index);
                        if (!isNumeric(percentage) || !isNumeric(value[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
                        this.xPct.push(percentage);
                        this.xVal.push(value[0]);
                        var value1 = Number(value[1]);
                        if (!percentage) {
                            if (!isNaN(value1)) this.xSteps[0] = value1;
                        } else this.xSteps.push(isNaN(value1) ? false : value1);
                        this.xHighestCompleteStep.push(0);
                    };
                    Spectrum.prototype.handleStepPoint = function(i, n) {
                        if (!n) return;
                        if (this.xVal[i] === this.xVal[i + 1]) {
                            this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                            return;
                        }
                        this.xSteps[i] = fromPercentage([ this.xVal[i], this.xVal[i + 1] ], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
                        var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
                        var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
                        var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
                        this.xHighestCompleteStep[i] = step;
                    };
                    return Spectrum;
                }();
                var defaultFormatter = {
                    to: function(value) {
                        return value === void 0 ? "" : value.toFixed(2);
                    },
                    from: Number
                };
                var cssClasses = {
                    target: "target",
                    base: "base",
                    origin: "origin",
                    handle: "handle",
                    handleLower: "handle-lower",
                    handleUpper: "handle-upper",
                    touchArea: "touch-area",
                    horizontal: "horizontal",
                    vertical: "vertical",
                    background: "background",
                    connect: "connect",
                    connects: "connects",
                    ltr: "ltr",
                    rtl: "rtl",
                    textDirectionLtr: "txt-dir-ltr",
                    textDirectionRtl: "txt-dir-rtl",
                    draggable: "draggable",
                    drag: "state-drag",
                    tap: "state-tap",
                    active: "active",
                    tooltip: "tooltip",
                    pips: "pips",
                    pipsHorizontal: "pips-horizontal",
                    pipsVertical: "pips-vertical",
                    marker: "marker",
                    markerHorizontal: "marker-horizontal",
                    markerVertical: "marker-vertical",
                    markerNormal: "marker-normal",
                    markerLarge: "marker-large",
                    markerSub: "marker-sub",
                    value: "value",
                    valueHorizontal: "value-horizontal",
                    valueVertical: "value-vertical",
                    valueNormal: "value-normal",
                    valueLarge: "value-large",
                    valueSub: "value-sub"
                };
                var INTERNAL_EVENT_NS = {
                    tooltips: ".__tooltips",
                    aria: ".__aria"
                };
                function testStep(parsed, entry) {
                    if (!isNumeric(entry)) throw new Error("noUiSlider: 'step' is not numeric.");
                    parsed.singleStep = entry;
                }
                function testKeyboardPageMultiplier(parsed, entry) {
                    if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
                    parsed.keyboardPageMultiplier = entry;
                }
                function testKeyboardMultiplier(parsed, entry) {
                    if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
                    parsed.keyboardMultiplier = entry;
                }
                function testKeyboardDefaultStep(parsed, entry) {
                    if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
                    parsed.keyboardDefaultStep = entry;
                }
                function testRange(parsed, entry) {
                    if (typeof entry !== "object" || Array.isArray(entry)) throw new Error("noUiSlider: 'range' is not an object.");
                    if (entry.min === void 0 || entry.max === void 0) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
                    parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
                }
                function testStart(parsed, entry) {
                    entry = asArray(entry);
                    if (!Array.isArray(entry) || !entry.length) throw new Error("noUiSlider: 'start' option is incorrect.");
                    parsed.handles = entry.length;
                    parsed.start = entry;
                }
                function testSnap(parsed, entry) {
                    if (typeof entry !== "boolean") throw new Error("noUiSlider: 'snap' option must be a boolean.");
                    parsed.snap = entry;
                }
                function testAnimate(parsed, entry) {
                    if (typeof entry !== "boolean") throw new Error("noUiSlider: 'animate' option must be a boolean.");
                    parsed.animate = entry;
                }
                function testAnimationDuration(parsed, entry) {
                    if (typeof entry !== "number") throw new Error("noUiSlider: 'animationDuration' option must be a number.");
                    parsed.animationDuration = entry;
                }
                function testConnect(parsed, entry) {
                    var connect = [ false ];
                    var i;
                    if (entry === "lower") entry = [ true, false ]; else if (entry === "upper") entry = [ false, true ];
                    if (entry === true || entry === false) {
                        for (i = 1; i < parsed.handles; i++) connect.push(entry);
                        connect.push(false);
                    } else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count."); else connect = entry;
                    parsed.connect = connect;
                }
                function testOrientation(parsed, entry) {
                    switch (entry) {
                      case "horizontal":
                        parsed.ort = 0;
                        break;

                      case "vertical":
                        parsed.ort = 1;
                        break;

                      default:
                        throw new Error("noUiSlider: 'orientation' option is invalid.");
                    }
                }
                function testMargin(parsed, entry) {
                    if (!isNumeric(entry)) throw new Error("noUiSlider: 'margin' option must be numeric.");
                    if (entry === 0) return;
                    parsed.margin = parsed.spectrum.getDistance(entry);
                }
                function testLimit(parsed, entry) {
                    if (!isNumeric(entry)) throw new Error("noUiSlider: 'limit' option must be numeric.");
                    parsed.limit = parsed.spectrum.getDistance(entry);
                    if (!parsed.limit || parsed.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
                }
                function testPadding(parsed, entry) {
                    var index;
                    if (!isNumeric(entry) && !Array.isArray(entry)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
                    if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
                    if (entry === 0) return;
                    if (!Array.isArray(entry)) entry = [ entry, entry ];
                    parsed.padding = [ parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1]) ];
                    for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
                    var totalPadding = entry[0] + entry[1];
                    var firstValue = parsed.spectrum.xVal[0];
                    var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
                    if (totalPadding / (lastValue - firstValue) > 1) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
                }
                function testDirection(parsed, entry) {
                    switch (entry) {
                      case "ltr":
                        parsed.dir = 0;
                        break;

                      case "rtl":
                        parsed.dir = 1;
                        break;

                      default:
                        throw new Error("noUiSlider: 'direction' option was not recognized.");
                    }
                }
                function testBehaviour(parsed, entry) {
                    if (typeof entry !== "string") throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
                    var tap = entry.indexOf("tap") >= 0;
                    var drag = entry.indexOf("drag") >= 0;
                    var fixed = entry.indexOf("fixed") >= 0;
                    var snap = entry.indexOf("snap") >= 0;
                    var hover = entry.indexOf("hover") >= 0;
                    var unconstrained = entry.indexOf("unconstrained") >= 0;
                    var dragAll = entry.indexOf("drag-all") >= 0;
                    var smoothSteps = entry.indexOf("smooth-steps") >= 0;
                    if (fixed) {
                        if (parsed.handles !== 2) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
                        testMargin(parsed, parsed.start[1] - parsed.start[0]);
                    }
                    if (unconstrained && (parsed.margin || parsed.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
                    parsed.events = {
                        tap: tap || snap,
                        drag,
                        dragAll,
                        smoothSteps,
                        fixed,
                        snap,
                        hover,
                        unconstrained
                    };
                }
                function testTooltips(parsed, entry) {
                    if (entry === false) return;
                    if (entry === true || isValidPartialFormatter(entry)) {
                        parsed.tooltips = [];
                        for (var i = 0; i < parsed.handles; i++) parsed.tooltips.push(entry);
                    } else {
                        entry = asArray(entry);
                        if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
                        entry.forEach((function(formatter) {
                            if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                        }));
                        parsed.tooltips = entry;
                    }
                }
                function testHandleAttributes(parsed, entry) {
                    if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
                    parsed.handleAttributes = entry;
                }
                function testAriaFormat(parsed, entry) {
                    if (!isValidPartialFormatter(entry)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
                    parsed.ariaFormat = entry;
                }
                function testFormat(parsed, entry) {
                    if (!isValidFormatter(entry)) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
                    parsed.format = entry;
                }
                function testKeyboardSupport(parsed, entry) {
                    if (typeof entry !== "boolean") throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
                    parsed.keyboardSupport = entry;
                }
                function testDocumentElement(parsed, entry) {
                    parsed.documentElement = entry;
                }
                function testCssPrefix(parsed, entry) {
                    if (typeof entry !== "string" && entry !== false) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
                    parsed.cssPrefix = entry;
                }
                function testCssClasses(parsed, entry) {
                    if (typeof entry !== "object") throw new Error("noUiSlider: 'cssClasses' must be an object.");
                    if (typeof parsed.cssPrefix === "string") {
                        parsed.cssClasses = {};
                        Object.keys(entry).forEach((function(key) {
                            parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
                        }));
                    } else parsed.cssClasses = entry;
                }
                function testOptions(options) {
                    var parsed = {
                        margin: null,
                        limit: null,
                        padding: null,
                        animate: true,
                        animationDuration: 300,
                        ariaFormat: defaultFormatter,
                        format: defaultFormatter
                    };
                    var tests = {
                        step: {
                            r: false,
                            t: testStep
                        },
                        keyboardPageMultiplier: {
                            r: false,
                            t: testKeyboardPageMultiplier
                        },
                        keyboardMultiplier: {
                            r: false,
                            t: testKeyboardMultiplier
                        },
                        keyboardDefaultStep: {
                            r: false,
                            t: testKeyboardDefaultStep
                        },
                        start: {
                            r: true,
                            t: testStart
                        },
                        connect: {
                            r: true,
                            t: testConnect
                        },
                        direction: {
                            r: true,
                            t: testDirection
                        },
                        snap: {
                            r: false,
                            t: testSnap
                        },
                        animate: {
                            r: false,
                            t: testAnimate
                        },
                        animationDuration: {
                            r: false,
                            t: testAnimationDuration
                        },
                        range: {
                            r: true,
                            t: testRange
                        },
                        orientation: {
                            r: false,
                            t: testOrientation
                        },
                        margin: {
                            r: false,
                            t: testMargin
                        },
                        limit: {
                            r: false,
                            t: testLimit
                        },
                        padding: {
                            r: false,
                            t: testPadding
                        },
                        behaviour: {
                            r: true,
                            t: testBehaviour
                        },
                        ariaFormat: {
                            r: false,
                            t: testAriaFormat
                        },
                        format: {
                            r: false,
                            t: testFormat
                        },
                        tooltips: {
                            r: false,
                            t: testTooltips
                        },
                        keyboardSupport: {
                            r: true,
                            t: testKeyboardSupport
                        },
                        documentElement: {
                            r: false,
                            t: testDocumentElement
                        },
                        cssPrefix: {
                            r: true,
                            t: testCssPrefix
                        },
                        cssClasses: {
                            r: true,
                            t: testCssClasses
                        },
                        handleAttributes: {
                            r: false,
                            t: testHandleAttributes
                        }
                    };
                    var defaults = {
                        connect: false,
                        direction: "ltr",
                        behaviour: "tap",
                        orientation: "horizontal",
                        keyboardSupport: true,
                        cssPrefix: "noUi-",
                        cssClasses,
                        keyboardPageMultiplier: 5,
                        keyboardMultiplier: 1,
                        keyboardDefaultStep: 10
                    };
                    if (options.format && !options.ariaFormat) options.ariaFormat = options.format;
                    Object.keys(tests).forEach((function(name) {
                        if (!isSet(options[name]) && defaults[name] === void 0) {
                            if (tests[name].r) throw new Error("noUiSlider: '" + name + "' is required.");
                            return;
                        }
                        tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
                    }));
                    parsed.pips = options.pips;
                    var d = document.createElement("div");
                    var msPrefix = d.style.msTransform !== void 0;
                    var noPrefix = d.style.transform !== void 0;
                    parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
                    var styles = [ [ "left", "top" ], [ "right", "bottom" ] ];
                    parsed.style = styles[parsed.dir][parsed.ort];
                    return parsed;
                }
                function scope(target, options, originalOptions) {
                    var actions = getActions();
                    var supportsTouchActionNone = getSupportsTouchActionNone();
                    var supportsPassive = supportsTouchActionNone && getSupportsPassive();
                    var scope_Target = target;
                    var scope_Base;
                    var scope_Handles;
                    var scope_Connects;
                    var scope_Pips;
                    var scope_Tooltips;
                    var scope_Spectrum = options.spectrum;
                    var scope_Values = [];
                    var scope_Locations = [];
                    var scope_HandleNumbers = [];
                    var scope_ActiveHandlesCount = 0;
                    var scope_Events = {};
                    var scope_Document = target.ownerDocument;
                    var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
                    var scope_Body = scope_Document.body;
                    var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
                    function addNodeTo(addTarget, className) {
                        var div = scope_Document.createElement("div");
                        if (className) addClass(div, className);
                        addTarget.appendChild(div);
                        return div;
                    }
                    function addOrigin(base, handleNumber) {
                        var origin = addNodeTo(base, options.cssClasses.origin);
                        var handle = addNodeTo(origin, options.cssClasses.handle);
                        addNodeTo(handle, options.cssClasses.touchArea);
                        handle.setAttribute("data-handle", String(handleNumber));
                        if (options.keyboardSupport) {
                            handle.setAttribute("tabindex", "0");
                            handle.addEventListener("keydown", (function(event) {
                                return eventKeydown(event, handleNumber);
                            }));
                        }
                        if (options.handleAttributes !== void 0) {
                            var attributes_1 = options.handleAttributes[handleNumber];
                            Object.keys(attributes_1).forEach((function(attribute) {
                                handle.setAttribute(attribute, attributes_1[attribute]);
                            }));
                        }
                        handle.setAttribute("role", "slider");
                        handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
                        if (handleNumber === 0) addClass(handle, options.cssClasses.handleLower); else if (handleNumber === options.handles - 1) addClass(handle, options.cssClasses.handleUpper);
                        origin.handle = handle;
                        return origin;
                    }
                    function addConnect(base, add) {
                        if (!add) return false;
                        return addNodeTo(base, options.cssClasses.connect);
                    }
                    function addElements(connectOptions, base) {
                        var connectBase = addNodeTo(base, options.cssClasses.connects);
                        scope_Handles = [];
                        scope_Connects = [];
                        scope_Connects.push(addConnect(connectBase, connectOptions[0]));
                        for (var i = 0; i < options.handles; i++) {
                            scope_Handles.push(addOrigin(base, i));
                            scope_HandleNumbers[i] = i;
                            scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
                        }
                    }
                    function addSlider(addTarget) {
                        addClass(addTarget, options.cssClasses.target);
                        if (options.dir === 0) addClass(addTarget, options.cssClasses.ltr); else addClass(addTarget, options.cssClasses.rtl);
                        if (options.ort === 0) addClass(addTarget, options.cssClasses.horizontal); else addClass(addTarget, options.cssClasses.vertical);
                        var textDirection = getComputedStyle(addTarget).direction;
                        if (textDirection === "rtl") addClass(addTarget, options.cssClasses.textDirectionRtl); else addClass(addTarget, options.cssClasses.textDirectionLtr);
                        return addNodeTo(addTarget, options.cssClasses.base);
                    }
                    function addTooltip(handle, handleNumber) {
                        if (!options.tooltips || !options.tooltips[handleNumber]) return false;
                        return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
                    }
                    function isSliderDisabled() {
                        return scope_Target.hasAttribute("disabled");
                    }
                    function isHandleDisabled(handleNumber) {
                        var handleOrigin = scope_Handles[handleNumber];
                        return handleOrigin.hasAttribute("disabled");
                    }
                    function disable(handleNumber) {
                        if (handleNumber !== null && handleNumber !== void 0) {
                            scope_Handles[handleNumber].setAttribute("disabled", "");
                            scope_Handles[handleNumber].handle.removeAttribute("tabindex");
                        } else {
                            scope_Target.setAttribute("disabled", "");
                            scope_Handles.forEach((function(handle) {
                                handle.handle.removeAttribute("tabindex");
                            }));
                        }
                    }
                    function enable(handleNumber) {
                        if (handleNumber !== null && handleNumber !== void 0) {
                            scope_Handles[handleNumber].removeAttribute("disabled");
                            scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
                        } else {
                            scope_Target.removeAttribute("disabled");
                            scope_Handles.forEach((function(handle) {
                                handle.removeAttribute("disabled");
                                handle.handle.setAttribute("tabindex", "0");
                            }));
                        }
                    }
                    function removeTooltips() {
                        if (scope_Tooltips) {
                            removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                            scope_Tooltips.forEach((function(tooltip) {
                                if (tooltip) removeElement(tooltip);
                            }));
                            scope_Tooltips = null;
                        }
                    }
                    function tooltips() {
                        removeTooltips();
                        scope_Tooltips = scope_Handles.map(addTooltip);
                        bindEvent("update" + INTERNAL_EVENT_NS.tooltips, (function(values, handleNumber, unencoded) {
                            if (!scope_Tooltips || !options.tooltips) return;
                            if (scope_Tooltips[handleNumber] === false) return;
                            var formattedValue = values[handleNumber];
                            if (options.tooltips[handleNumber] !== true) formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                            scope_Tooltips[handleNumber].innerHTML = formattedValue;
                        }));
                    }
                    function aria() {
                        removeEvent("update" + INTERNAL_EVENT_NS.aria);
                        bindEvent("update" + INTERNAL_EVENT_NS.aria, (function(values, handleNumber, unencoded, tap, positions) {
                            scope_HandleNumbers.forEach((function(index) {
                                var handle = scope_Handles[index];
                                var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                                var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                                var now = positions[index];
                                var text = String(options.ariaFormat.to(unencoded[index]));
                                min = scope_Spectrum.fromStepping(min).toFixed(1);
                                max = scope_Spectrum.fromStepping(max).toFixed(1);
                                now = scope_Spectrum.fromStepping(now).toFixed(1);
                                handle.children[0].setAttribute("aria-valuemin", min);
                                handle.children[0].setAttribute("aria-valuemax", max);
                                handle.children[0].setAttribute("aria-valuenow", now);
                                handle.children[0].setAttribute("aria-valuetext", text);
                            }));
                        }));
                    }
                    function getGroup(pips) {
                        if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) return scope_Spectrum.xVal;
                        if (pips.mode === exports.PipsMode.Count) {
                            if (pips.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                            var interval = pips.values - 1;
                            var spread = 100 / interval;
                            var values = [];
                            while (interval--) values[interval] = interval * spread;
                            values.push(100);
                            return mapToRange(values, pips.stepped);
                        }
                        if (pips.mode === exports.PipsMode.Positions) return mapToRange(pips.values, pips.stepped);
                        if (pips.mode === exports.PipsMode.Values) {
                            if (pips.stepped) return pips.values.map((function(value) {
                                return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                            }));
                            return pips.values;
                        }
                        return [];
                    }
                    function mapToRange(values, stepped) {
                        return values.map((function(value) {
                            return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
                        }));
                    }
                    function generateSpread(pips) {
                        function safeIncrement(value, increment) {
                            return Number((value + increment).toFixed(7));
                        }
                        var group = getGroup(pips);
                        var indexes = {};
                        var firstInRange = scope_Spectrum.xVal[0];
                        var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
                        var ignoreFirst = false;
                        var ignoreLast = false;
                        var prevPct = 0;
                        group = unique(group.slice().sort((function(a, b) {
                            return a - b;
                        })));
                        if (group[0] !== firstInRange) {
                            group.unshift(firstInRange);
                            ignoreFirst = true;
                        }
                        if (group[group.length - 1] !== lastInRange) {
                            group.push(lastInRange);
                            ignoreLast = true;
                        }
                        group.forEach((function(current, index) {
                            var step;
                            var i;
                            var q;
                            var low = current;
                            var high = group[index + 1];
                            var newPct;
                            var pctDifference;
                            var pctPos;
                            var type;
                            var steps;
                            var realSteps;
                            var stepSize;
                            var isSteps = pips.mode === exports.PipsMode.Steps;
                            if (isSteps) step = scope_Spectrum.xNumSteps[index];
                            if (!step) step = high - low;
                            if (high === void 0) high = low;
                            step = Math.max(step, 1e-7);
                            for (i = low; i <= high; i = safeIncrement(i, step)) {
                                newPct = scope_Spectrum.toStepping(i);
                                pctDifference = newPct - prevPct;
                                steps = pctDifference / (pips.density || 1);
                                realSteps = Math.round(steps);
                                stepSize = pctDifference / realSteps;
                                for (q = 1; q <= realSteps; q += 1) {
                                    pctPos = prevPct + q * stepSize;
                                    indexes[pctPos.toFixed(5)] = [ scope_Spectrum.fromStepping(pctPos), 0 ];
                                }
                                type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue;
                                if (!index && ignoreFirst && i !== high) type = 0;
                                if (!(i === high && ignoreLast)) indexes[newPct.toFixed(5)] = [ i, type ];
                                prevPct = newPct;
                            }
                        }));
                        return indexes;
                    }
                    function addMarking(spread, filterFunc, formatter) {
                        var _a, _b;
                        var element = scope_Document.createElement("div");
                        var valueSizeClasses = (_a = {}, _a[exports.PipsType.None] = "", _a[exports.PipsType.NoValue] = options.cssClasses.valueNormal, 
                        _a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge, _a[exports.PipsType.SmallValue] = options.cssClasses.valueSub, 
                        _a);
                        var markerSizeClasses = (_b = {}, _b[exports.PipsType.None] = "", _b[exports.PipsType.NoValue] = options.cssClasses.markerNormal, 
                        _b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge, _b[exports.PipsType.SmallValue] = options.cssClasses.markerSub, 
                        _b);
                        var valueOrientationClasses = [ options.cssClasses.valueHorizontal, options.cssClasses.valueVertical ];
                        var markerOrientationClasses = [ options.cssClasses.markerHorizontal, options.cssClasses.markerVertical ];
                        addClass(element, options.cssClasses.pips);
                        addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
                        function getClasses(type, source) {
                            var a = source === options.cssClasses.value;
                            var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                            var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                            return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
                        }
                        function addSpread(offset, value, type) {
                            type = filterFunc ? filterFunc(value, type) : type;
                            if (type === exports.PipsType.None) return;
                            var node = addNodeTo(element, false);
                            node.className = getClasses(type, options.cssClasses.marker);
                            node.style[options.style] = offset + "%";
                            if (type > exports.PipsType.NoValue) {
                                node = addNodeTo(element, false);
                                node.className = getClasses(type, options.cssClasses.value);
                                node.setAttribute("data-value", String(value));
                                node.style[options.style] = offset + "%";
                                node.innerHTML = String(formatter.to(value));
                            }
                        }
                        Object.keys(spread).forEach((function(offset) {
                            addSpread(offset, spread[offset][0], spread[offset][1]);
                        }));
                        return element;
                    }
                    function removePips() {
                        if (scope_Pips) {
                            removeElement(scope_Pips);
                            scope_Pips = null;
                        }
                    }
                    function pips(pips) {
                        removePips();
                        var spread = generateSpread(pips);
                        var filter = pips.filter;
                        var format = pips.format || {
                            to: function(value) {
                                return String(Math.round(value));
                            }
                        };
                        scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
                        return scope_Pips;
                    }
                    function baseSize() {
                        var rect = scope_Base.getBoundingClientRect();
                        var alt = "offset" + [ "Width", "Height" ][options.ort];
                        return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
                    }
                    function attachEvent(events, element, callback, data) {
                        var method = function(event) {
                            var e = fixEvent(event, data.pageOffset, data.target || element);
                            if (!e) return false;
                            if (isSliderDisabled() && !data.doNotReject) return false;
                            if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) return false;
                            if (events === actions.start && e.buttons !== void 0 && e.buttons > 1) return false;
                            if (data.hover && e.buttons) return false;
                            if (!supportsPassive) e.preventDefault();
                            e.calcPoint = e.points[options.ort];
                            callback(e, data);
                            return;
                        };
                        var methods = [];
                        events.split(" ").forEach((function(eventName) {
                            element.addEventListener(eventName, method, supportsPassive ? {
                                passive: true
                            } : false);
                            methods.push([ eventName, method ]);
                        }));
                        return methods;
                    }
                    function fixEvent(e, pageOffset, eventTarget) {
                        var touch = e.type.indexOf("touch") === 0;
                        var mouse = e.type.indexOf("mouse") === 0;
                        var pointer = e.type.indexOf("pointer") === 0;
                        var x = 0;
                        var y = 0;
                        if (e.type.indexOf("MSPointer") === 0) pointer = true;
                        if (e.type === "mousedown" && !e.buttons && !e.touches) return false;
                        if (touch) {
                            var isTouchOnTarget = function(checkTouch) {
                                var target = checkTouch.target;
                                return target === eventTarget || eventTarget.contains(target) || e.composed && e.composedPath().shift() === eventTarget;
                            };
                            if (e.type === "touchstart") {
                                var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                                if (targetTouches.length > 1) return false;
                                x = targetTouches[0].pageX;
                                y = targetTouches[0].pageY;
                            } else {
                                var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                                if (!targetTouch) return false;
                                x = targetTouch.pageX;
                                y = targetTouch.pageY;
                            }
                        }
                        pageOffset = pageOffset || getPageOffset(scope_Document);
                        if (mouse || pointer) {
                            x = e.clientX + pageOffset.x;
                            y = e.clientY + pageOffset.y;
                        }
                        e.pageOffset = pageOffset;
                        e.points = [ x, y ];
                        e.cursor = mouse || pointer;
                        return e;
                    }
                    function calcPointToPercentage(calcPoint) {
                        var location = calcPoint - offset(scope_Base, options.ort);
                        var proposal = location * 100 / baseSize();
                        proposal = limit(proposal);
                        return options.dir ? 100 - proposal : proposal;
                    }
                    function getClosestHandle(clickedPosition) {
                        var smallestDifference = 100;
                        var handleNumber = false;
                        scope_Handles.forEach((function(handle, index) {
                            if (isHandleDisabled(index)) return;
                            var handlePosition = scope_Locations[index];
                            var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                            var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                            var isCloser = differenceWithThisHandle < smallestDifference;
                            var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                            if (isCloser || isCloserAfter || clickAtEdge) {
                                handleNumber = index;
                                smallestDifference = differenceWithThisHandle;
                            }
                        }));
                        return handleNumber;
                    }
                    function documentLeave(event, data) {
                        if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) eventEnd(event, data);
                    }
                    function eventMove(event, data) {
                        if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) return eventEnd(event, data);
                        var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
                        var proposal = movement * 100 / data.baseSize;
                        moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
                    }
                    function eventEnd(event, data) {
                        if (data.handle) {
                            removeClass(data.handle, options.cssClasses.active);
                            scope_ActiveHandlesCount -= 1;
                        }
                        data.listeners.forEach((function(c) {
                            scope_DocumentElement.removeEventListener(c[0], c[1]);
                        }));
                        if (scope_ActiveHandlesCount === 0) {
                            removeClass(scope_Target, options.cssClasses.drag);
                            setZindex();
                            if (event.cursor) {
                                scope_Body.style.cursor = "";
                                scope_Body.removeEventListener("selectstart", preventDefault);
                            }
                        }
                        if (options.events.smoothSteps) {
                            data.handleNumbers.forEach((function(handleNumber) {
                                setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
                            }));
                            data.handleNumbers.forEach((function(handleNumber) {
                                fireEvent("update", handleNumber);
                            }));
                        }
                        data.handleNumbers.forEach((function(handleNumber) {
                            fireEvent("change", handleNumber);
                            fireEvent("set", handleNumber);
                            fireEvent("end", handleNumber);
                        }));
                    }
                    function eventStart(event, data) {
                        if (data.handleNumbers.some(isHandleDisabled)) return;
                        var handle;
                        if (data.handleNumbers.length === 1) {
                            var handleOrigin = scope_Handles[data.handleNumbers[0]];
                            handle = handleOrigin.children[0];
                            scope_ActiveHandlesCount += 1;
                            addClass(handle, options.cssClasses.active);
                        }
                        event.stopPropagation();
                        var listeners = [];
                        var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                            target: event.target,
                            handle,
                            connect: data.connect,
                            listeners,
                            startCalcPoint: event.calcPoint,
                            baseSize: baseSize(),
                            pageOffset: event.pageOffset,
                            handleNumbers: data.handleNumbers,
                            buttonsProperty: event.buttons,
                            locations: scope_Locations.slice()
                        });
                        var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                            target: event.target,
                            handle,
                            listeners,
                            doNotReject: true,
                            handleNumbers: data.handleNumbers
                        });
                        var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                            target: event.target,
                            handle,
                            listeners,
                            doNotReject: true,
                            handleNumbers: data.handleNumbers
                        });
                        listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
                        if (event.cursor) {
                            scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                            if (scope_Handles.length > 1) addClass(scope_Target, options.cssClasses.drag);
                            scope_Body.addEventListener("selectstart", preventDefault, false);
                        }
                        data.handleNumbers.forEach((function(handleNumber) {
                            fireEvent("start", handleNumber);
                        }));
                    }
                    function eventTap(event) {
                        event.stopPropagation();
                        var proposal = calcPointToPercentage(event.calcPoint);
                        var handleNumber = getClosestHandle(proposal);
                        if (handleNumber === false) return;
                        if (!options.events.snap) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
                        setHandle(handleNumber, proposal, true, true);
                        setZindex();
                        fireEvent("slide", handleNumber, true);
                        fireEvent("update", handleNumber, true);
                        if (!options.events.snap) {
                            fireEvent("change", handleNumber, true);
                            fireEvent("set", handleNumber, true);
                        } else eventStart(event, {
                            handleNumbers: [ handleNumber ]
                        });
                    }
                    function eventHover(event) {
                        var proposal = calcPointToPercentage(event.calcPoint);
                        var to = scope_Spectrum.getStep(proposal);
                        var value = scope_Spectrum.fromStepping(to);
                        Object.keys(scope_Events).forEach((function(targetEvent) {
                            if ("hover" === targetEvent.split(".")[0]) scope_Events[targetEvent].forEach((function(callback) {
                                callback.call(scope_Self, value);
                            }));
                        }));
                    }
                    function eventKeydown(event, handleNumber) {
                        if (isSliderDisabled() || isHandleDisabled(handleNumber)) return false;
                        var horizontalKeys = [ "Left", "Right" ];
                        var verticalKeys = [ "Down", "Up" ];
                        var largeStepKeys = [ "PageDown", "PageUp" ];
                        var edgeKeys = [ "Home", "End" ];
                        if (options.dir && !options.ort) horizontalKeys.reverse(); else if (options.ort && !options.dir) {
                            verticalKeys.reverse();
                            largeStepKeys.reverse();
                        }
                        var key = event.key.replace("Arrow", "");
                        var isLargeDown = key === largeStepKeys[0];
                        var isLargeUp = key === largeStepKeys[1];
                        var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
                        var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
                        var isMin = key === edgeKeys[0];
                        var isMax = key === edgeKeys[1];
                        if (!isDown && !isUp && !isMin && !isMax) return true;
                        event.preventDefault();
                        var to;
                        if (isUp || isDown) {
                            var direction = isDown ? 0 : 1;
                            var steps = getNextStepsForHandle(handleNumber);
                            var step = steps[direction];
                            if (step === null) return false;
                            if (step === false) step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                            if (isLargeUp || isLargeDown) step *= options.keyboardPageMultiplier; else step *= options.keyboardMultiplier;
                            step = Math.max(step, 1e-7);
                            step *= isDown ? -1 : 1;
                            to = scope_Values[handleNumber] + step;
                        } else if (isMax) to = options.spectrum.xVal[options.spectrum.xVal.length - 1]; else to = options.spectrum.xVal[0];
                        setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
                        fireEvent("slide", handleNumber);
                        fireEvent("update", handleNumber);
                        fireEvent("change", handleNumber);
                        fireEvent("set", handleNumber);
                        return false;
                    }
                    function bindSliderEvents(behaviour) {
                        if (!behaviour.fixed) scope_Handles.forEach((function(handle, index) {
                            attachEvent(actions.start, handle.children[0], eventStart, {
                                handleNumbers: [ index ]
                            });
                        }));
                        if (behaviour.tap) attachEvent(actions.start, scope_Base, eventTap, {});
                        if (behaviour.hover) attachEvent(actions.move, scope_Base, eventHover, {
                            hover: true
                        });
                        if (behaviour.drag) scope_Connects.forEach((function(connect, index) {
                            if (connect === false || index === 0 || index === scope_Connects.length - 1) return;
                            var handleBefore = scope_Handles[index - 1];
                            var handleAfter = scope_Handles[index];
                            var eventHolders = [ connect ];
                            var handlesToDrag = [ handleBefore, handleAfter ];
                            var handleNumbersToDrag = [ index - 1, index ];
                            addClass(connect, options.cssClasses.draggable);
                            if (behaviour.fixed) {
                                eventHolders.push(handleBefore.children[0]);
                                eventHolders.push(handleAfter.children[0]);
                            }
                            if (behaviour.dragAll) {
                                handlesToDrag = scope_Handles;
                                handleNumbersToDrag = scope_HandleNumbers;
                            }
                            eventHolders.forEach((function(eventHolder) {
                                attachEvent(actions.start, eventHolder, eventStart, {
                                    handles: handlesToDrag,
                                    handleNumbers: handleNumbersToDrag,
                                    connect
                                });
                            }));
                        }));
                    }
                    function bindEvent(namespacedEvent, callback) {
                        scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
                        scope_Events[namespacedEvent].push(callback);
                        if (namespacedEvent.split(".")[0] === "update") scope_Handles.forEach((function(a, index) {
                            fireEvent("update", index);
                        }));
                    }
                    function isInternalNamespace(namespace) {
                        return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
                    }
                    function removeEvent(namespacedEvent) {
                        var event = namespacedEvent && namespacedEvent.split(".")[0];
                        var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
                        Object.keys(scope_Events).forEach((function(bind) {
                            var tEvent = bind.split(".")[0];
                            var tNamespace = bind.substring(tEvent.length);
                            if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) if (!isInternalNamespace(tNamespace) || namespace === tNamespace) delete scope_Events[bind];
                        }));
                    }
                    function fireEvent(eventName, handleNumber, tap) {
                        Object.keys(scope_Events).forEach((function(targetEvent) {
                            var eventType = targetEvent.split(".")[0];
                            if (eventName === eventType) scope_Events[targetEvent].forEach((function(callback) {
                                callback.call(scope_Self, scope_Values.map(options.format.to), handleNumber, scope_Values.slice(), tap || false, scope_Locations.slice(), scope_Self);
                            }));
                        }));
                    }
                    function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
                        var distance;
                        if (scope_Handles.length > 1 && !options.events.unconstrained) {
                            if (lookBackward && handleNumber > 0) {
                                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                                to = Math.max(to, distance);
                            }
                            if (lookForward && handleNumber < scope_Handles.length - 1) {
                                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                                to = Math.min(to, distance);
                            }
                        }
                        if (scope_Handles.length > 1 && options.limit) {
                            if (lookBackward && handleNumber > 0) {
                                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                                to = Math.min(to, distance);
                            }
                            if (lookForward && handleNumber < scope_Handles.length - 1) {
                                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                                to = Math.max(to, distance);
                            }
                        }
                        if (options.padding) {
                            if (handleNumber === 0) {
                                distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                                to = Math.max(to, distance);
                            }
                            if (handleNumber === scope_Handles.length - 1) {
                                distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                                to = Math.min(to, distance);
                            }
                        }
                        if (!smoothSteps) to = scope_Spectrum.getStep(to);
                        to = limit(to);
                        if (to === reference[handleNumber] && !getValue) return false;
                        return to;
                    }
                    function inRuleOrder(v, a) {
                        var o = options.ort;
                        return (o ? a : v) + ", " + (o ? v : a);
                    }
                    function moveHandles(upward, proposal, locations, handleNumbers, connect) {
                        var proposals = locations.slice();
                        var firstHandle = handleNumbers[0];
                        var smoothSteps = options.events.smoothSteps;
                        var b = [ !upward, upward ];
                        var f = [ upward, !upward ];
                        handleNumbers = handleNumbers.slice();
                        if (upward) handleNumbers.reverse();
                        if (handleNumbers.length > 1) handleNumbers.forEach((function(handleNumber, o) {
                            var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                            if (to === false) proposal = 0; else {
                                proposal = to - proposals[handleNumber];
                                proposals[handleNumber] = to;
                            }
                        })); else b = f = [ true ];
                        var state = false;
                        handleNumbers.forEach((function(handleNumber, o) {
                            state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
                        }));
                        if (state) {
                            handleNumbers.forEach((function(handleNumber) {
                                fireEvent("update", handleNumber);
                                fireEvent("slide", handleNumber);
                            }));
                            if (connect != void 0) fireEvent("drag", firstHandle);
                        }
                    }
                    function transformDirection(a, b) {
                        return options.dir ? 100 - a - b : a;
                    }
                    function updateHandlePosition(handleNumber, to) {
                        scope_Locations[handleNumber] = to;
                        scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
                        var translation = transformDirection(to, 0) - scope_DirOffset;
                        var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
                        scope_Handles[handleNumber].style[options.transformRule] = translateRule;
                        updateConnect(handleNumber);
                        updateConnect(handleNumber + 1);
                    }
                    function setZindex() {
                        scope_HandleNumbers.forEach((function(handleNumber) {
                            var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                            var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                            scope_Handles[handleNumber].style.zIndex = String(zIndex);
                        }));
                    }
                    function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
                        if (!exactInput) to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
                        if (to === false) return false;
                        updateHandlePosition(handleNumber, to);
                        return true;
                    }
                    function updateConnect(index) {
                        if (!scope_Connects[index]) return;
                        var l = 0;
                        var h = 100;
                        if (index !== 0) l = scope_Locations[index - 1];
                        if (index !== scope_Connects.length - 1) h = scope_Locations[index];
                        var connectWidth = h - l;
                        var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
                        var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
                        scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
                    }
                    function resolveToValue(to, handleNumber) {
                        if (to === null || to === false || to === void 0) return scope_Locations[handleNumber];
                        if (typeof to === "number") to = String(to);
                        to = options.format.from(to);
                        if (to !== false) to = scope_Spectrum.toStepping(to);
                        if (to === false || isNaN(to)) return scope_Locations[handleNumber];
                        return to;
                    }
                    function valueSet(input, fireSetEvent, exactInput) {
                        var values = asArray(input);
                        var isInit = scope_Locations[0] === void 0;
                        fireSetEvent = fireSetEvent === void 0 ? true : fireSetEvent;
                        if (options.animate && !isInit) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
                        scope_HandleNumbers.forEach((function(handleNumber) {
                            setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
                        }));
                        var i = scope_HandleNumbers.length === 1 ? 0 : 1;
                        if (isInit && scope_Spectrum.hasNoSize()) {
                            exactInput = true;
                            scope_Locations[0] = 0;
                            if (scope_HandleNumbers.length > 1) {
                                var space_1 = 100 / (scope_HandleNumbers.length - 1);
                                scope_HandleNumbers.forEach((function(handleNumber) {
                                    scope_Locations[handleNumber] = handleNumber * space_1;
                                }));
                            }
                        }
                        for (;i < scope_HandleNumbers.length; ++i) scope_HandleNumbers.forEach((function(handleNumber) {
                            setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                        }));
                        setZindex();
                        scope_HandleNumbers.forEach((function(handleNumber) {
                            fireEvent("update", handleNumber);
                            if (values[handleNumber] !== null && fireSetEvent) fireEvent("set", handleNumber);
                        }));
                    }
                    function valueReset(fireSetEvent) {
                        valueSet(options.start, fireSetEvent);
                    }
                    function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
                        handleNumber = Number(handleNumber);
                        if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
                        setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
                        fireEvent("update", handleNumber);
                        if (fireSetEvent) fireEvent("set", handleNumber);
                    }
                    function valueGet(unencoded) {
                        if (unencoded === void 0) unencoded = false;
                        if (unencoded) return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
                        var values = scope_Values.map(options.format.to);
                        if (values.length === 1) return values[0];
                        return values;
                    }
                    function destroy() {
                        removeEvent(INTERNAL_EVENT_NS.aria);
                        removeEvent(INTERNAL_EVENT_NS.tooltips);
                        Object.keys(options.cssClasses).forEach((function(key) {
                            removeClass(scope_Target, options.cssClasses[key]);
                        }));
                        while (scope_Target.firstChild) scope_Target.removeChild(scope_Target.firstChild);
                        delete scope_Target.noUiSlider;
                    }
                    function getNextStepsForHandle(handleNumber) {
                        var location = scope_Locations[handleNumber];
                        var nearbySteps = scope_Spectrum.getNearbySteps(location);
                        var value = scope_Values[handleNumber];
                        var increment = nearbySteps.thisStep.step;
                        var decrement = null;
                        if (options.snap) return [ value - nearbySteps.stepBefore.startValue || null, nearbySteps.stepAfter.startValue - value || null ];
                        if (increment !== false) if (value + increment > nearbySteps.stepAfter.startValue) increment = nearbySteps.stepAfter.startValue - value;
                        if (value > nearbySteps.thisStep.startValue) decrement = nearbySteps.thisStep.step; else if (nearbySteps.stepBefore.step === false) decrement = false; else decrement = value - nearbySteps.stepBefore.highestStep;
                        if (location === 100) increment = null; else if (location === 0) decrement = null;
                        var stepDecimals = scope_Spectrum.countStepDecimals();
                        if (increment !== null && increment !== false) increment = Number(increment.toFixed(stepDecimals));
                        if (decrement !== null && decrement !== false) decrement = Number(decrement.toFixed(stepDecimals));
                        return [ decrement, increment ];
                    }
                    function getNextSteps() {
                        return scope_HandleNumbers.map(getNextStepsForHandle);
                    }
                    function updateOptions(optionsToUpdate, fireSetEvent) {
                        var v = valueGet();
                        var updateAble = [ "margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips" ];
                        updateAble.forEach((function(name) {
                            if (optionsToUpdate[name] !== void 0) originalOptions[name] = optionsToUpdate[name];
                        }));
                        var newOptions = testOptions(originalOptions);
                        updateAble.forEach((function(name) {
                            if (optionsToUpdate[name] !== void 0) options[name] = newOptions[name];
                        }));
                        scope_Spectrum = newOptions.spectrum;
                        options.margin = newOptions.margin;
                        options.limit = newOptions.limit;
                        options.padding = newOptions.padding;
                        if (options.pips) pips(options.pips); else removePips();
                        if (options.tooltips) tooltips(); else removeTooltips();
                        scope_Locations = [];
                        valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
                    }
                    function setupSlider() {
                        scope_Base = addSlider(scope_Target);
                        addElements(options.connect, scope_Base);
                        bindSliderEvents(options.events);
                        valueSet(options.start);
                        if (options.pips) pips(options.pips);
                        if (options.tooltips) tooltips();
                        aria();
                    }
                    setupSlider();
                    var scope_Self = {
                        destroy,
                        steps: getNextSteps,
                        on: bindEvent,
                        off: removeEvent,
                        get: valueGet,
                        set: valueSet,
                        setHandle: valueSetHandle,
                        reset: valueReset,
                        disable,
                        enable,
                        __moveHandles: function(upward, proposal, handleNumbers) {
                            moveHandles(upward, proposal, scope_Locations, handleNumbers);
                        },
                        options: originalOptions,
                        updateOptions,
                        target: scope_Target,
                        removePips,
                        removeTooltips,
                        getPositions: function() {
                            return scope_Locations.slice();
                        },
                        getTooltips: function() {
                            return scope_Tooltips;
                        },
                        getOrigins: function() {
                            return scope_Handles;
                        },
                        pips
                    };
                    return scope_Self;
                }
                function initialize(target, originalOptions) {
                    if (!target || !target.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + target);
                    if (target.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
                    var options = testOptions(originalOptions);
                    var api = scope(target, options, originalOptions);
                    target.noUiSlider = api;
                    return api;
                }
                var nouislider = {
                    __spectrum: Spectrum,
                    cssClasses,
                    create: initialize
                };
                exports.create = initialize;
                exports.cssClasses = cssClasses;
                exports["default"] = nouislider;
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            }));
        },
        2: function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
 /*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */            window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
                var t, n = (this.document || this.ownerDocument).querySelectorAll(e), o = this;
                do {
                    for (t = n.length; 0 <= --t && n.item(t) !== o; ) ;
                } while (t < 0 && (o = o.parentElement));
                return o;
            }), function() {
                if ("function" == typeof window.CustomEvent) return;
                function e(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                }
                e.prototype = window.Event.prototype, window.CustomEvent = e;
            }(), function() {
                for (var r = 0, e = [ "ms", "moz", "webkit", "o" ], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], 
                window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
                    var n = (new Date).getTime(), o = Math.max(0, 16 - (n - r)), a = window.setTimeout((function() {
                        e(n + o);
                    }), o);
                    return r = n + o, a;
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                    clearTimeout(e);
                });
            }(), function(e, t) {
                true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return t(e);
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
            }("undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof window ? window : this, (function(M) {
                "use strict";
                var q = {
                    ignore: "[data-scroll-ignore]",
                    header: null,
                    topOnEmptyHash: !0,
                    speed: 500,
                    speedAsDuration: !1,
                    durationMax: null,
                    durationMin: null,
                    clip: !0,
                    offset: 0,
                    easing: "easeInOutCubic",
                    customEasing: null,
                    updateURL: !0,
                    popstate: !0,
                    emitEvents: !0
                }, I = function() {
                    var n = {};
                    return Array.prototype.forEach.call(arguments, (function(e) {
                        for (var t in e) {
                            if (!e.hasOwnProperty(t)) return;
                            n[t] = e[t];
                        }
                    })), n;
                }, r = function(e) {
                    "#" === e.charAt(0) && (e = e.substr(1));
                    for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o; ) {
                        if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                        1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? r += "\\" + t.toString(16) + " " : r += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a);
                    }
                    return "#" + r;
                }, F = function() {
                    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                }, L = function(e) {
                    return e ? (t = e, parseInt(M.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
                    var t;
                }, x = function(e, t, n) {
                    0 === e && document.body.focus(), n || (e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), 
                    e.focus(), e.style.outline = "none"), M.scrollTo(0, t));
                }, H = function(e, t, n, o) {
                    if (t.emitEvents && "function" == typeof M.CustomEvent) {
                        var a = new CustomEvent(e, {
                            bubbles: !0,
                            detail: {
                                anchor: n,
                                toggle: o
                            }
                        });
                        document.dispatchEvent(a);
                    }
                };
                return function(o, e) {
                    var b, a, A, O, C = {};
                    C.cancelScroll = function(e) {
                        cancelAnimationFrame(O), O = null, e || H("scrollCancel", b);
                    }, C.animateScroll = function(a, r, e) {
                        C.cancelScroll();
                        var i = I(b || q, e || {}), c = "[object Number]" === Object.prototype.toString.call(a), t = c || !a.tagName ? null : a;
                        if (c || t) {
                            var s = M.pageYOffset;
                            i.header && !A && (A = document.querySelector(i.header));
                            var n, o, u, l, m, d, f, h, p = L(A), g = c ? a : function(e, t, n, o) {
                                var a = 0;
                                if (e.offsetParent) for (;a += e.offsetTop, e = e.offsetParent; ) ;
                                return a = Math.max(a - t - n, 0), o && (a = Math.min(a, F() - M.innerHeight)), 
                                a;
                            }(t, p, parseInt("function" == typeof i.offset ? i.offset(a, r) : i.offset, 10), i.clip), y = g - s, v = F(), w = 0, S = (n = y, 
                            u = (o = i).speedAsDuration ? o.speed : Math.abs(n / 1e3 * o.speed), o.durationMax && u > o.durationMax ? o.durationMax : o.durationMin && u < o.durationMin ? o.durationMin : parseInt(u, 10)), E = function(e) {
                                var t, n, o;
                                l || (l = e), w += e - l, d = s + y * (n = m = 1 < (m = 0 === S ? 0 : w / S) ? 1 : m, 
                                "easeInQuad" === (t = i).easing && (o = n * n), "easeOutQuad" === t.easing && (o = n * (2 - n)), 
                                "easeInOutQuad" === t.easing && (o = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), 
                                "easeInCubic" === t.easing && (o = n * n * n), "easeOutCubic" === t.easing && (o = --n * n * n + 1), 
                                "easeInOutCubic" === t.easing && (o = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), 
                                "easeInQuart" === t.easing && (o = n * n * n * n), "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n), 
                                "easeInOutQuart" === t.easing && (o = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), 
                                "easeInQuint" === t.easing && (o = n * n * n * n * n), "easeOutQuint" === t.easing && (o = 1 + --n * n * n * n * n), 
                                "easeInOutQuint" === t.easing && (o = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), 
                                t.customEasing && (o = t.customEasing(n)), o || n), M.scrollTo(0, Math.floor(d)), 
                                function(e, t) {
                                    var n = M.pageYOffset;
                                    if (e == t || n == t || (s < t && M.innerHeight + n) >= v) return C.cancelScroll(!0), 
                                    x(a, t, c), H("scrollStop", i, a, r), !(O = l = null);
                                }(d, g) || (O = M.requestAnimationFrame(E), l = e);
                            };
                            0 === M.pageYOffset && M.scrollTo(0, 0), f = a, h = i, c || history.pushState && h.updateURL && history.pushState({
                                smoothScroll: JSON.stringify(h),
                                anchor: f.id
                            }, document.title, f === document.documentElement ? "#top" : "#" + f.id), "matchMedia" in M && M.matchMedia("(prefers-reduced-motion)").matches ? x(a, Math.floor(g), !1) : (H("scrollStart", i, a, r), 
                            C.cancelScroll(!0), M.requestAnimationFrame(E));
                        }
                    };
                    var t = function(e) {
                        if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (a = e.target.closest(o)) && "a" === a.tagName.toLowerCase() && !e.target.closest(b.ignore) && a.hostname === M.location.hostname && a.pathname === M.location.pathname && /#/.test(a.href)) {
                            var t, n;
                            try {
                                t = r(decodeURIComponent(a.hash));
                            } catch (e) {
                                t = r(a.hash);
                            }
                            if ("#" === t) {
                                if (!b.topOnEmptyHash) return;
                                n = document.documentElement;
                            } else n = document.querySelector(t);
                            (n = n || "#top" !== t ? n : document.documentElement) && (e.preventDefault(), function(e) {
                                if (history.replaceState && e.updateURL && !history.state) {
                                    var t = M.location.hash;
                                    t = t || "", history.replaceState({
                                        smoothScroll: JSON.stringify(e),
                                        anchor: t || M.pageYOffset
                                    }, document.title, t || M.location.href);
                                }
                            }(b), C.animateScroll(n, a));
                        }
                    }, n = function(e) {
                        if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(b)) {
                            var t = history.state.anchor;
                            "string" == typeof t && t && !(t = document.querySelector(r(history.state.anchor))) || C.animateScroll(t, null, {
                                updateURL: !1
                            });
                        }
                    };
                    C.destroy = function() {
                        b && (document.removeEventListener("click", t, !1), M.removeEventListener("popstate", n, !1), 
                        C.cancelScroll(), O = A = a = b = null);
                    };
                    return function() {
                        if (!("querySelector" in document && "addEventListener" in M && "requestAnimationFrame" in M && "closest" in M.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                        C.destroy(), b = I(q, e || {}), A = b.header ? document.querySelector(b.header) : null, 
                        document.addEventListener("click", t, !1), b.updateURL && b.popstate && M.addEventListener("popstate", n, !1);
                    }(), C;
                };
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.g = function() {
            if (typeof globalThis === "object") return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if (typeof window === "object") return window;
            }
        }();
    })();
    (() => {
        "use strict";
        const flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function fullVHfix() {
            const fullScreens = document.querySelectorAll("[data-fullscreen]");
            if (fullScreens.length && isMobile.any()) {
                window.addEventListener("resize", fixHeight);
                function fixHeight() {
                    let vh = window.innerHeight * .01;
                    document.documentElement.style.setProperty("--vh", `${vh}px`);
                }
                fixHeight();
            }
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerTitles.forEach((spollerTitle => {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("[data-spoller]")) {
                        const spollerTitle = el.closest("[data-spoller]");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                            spollerTitle.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                }
                const spollersClose = document.querySelectorAll("[data-spoller-close]");
                if (spollersClose.length) document.addEventListener("click", (function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) spollersClose.forEach((spollerClose => {
                        const spollersBlock = spollerClose.closest("[data-spollers]");
                        if (spollersBlock.classList.contains("_spoller-init")) {
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            spollerClose.classList.remove("_spoller-active");
                            _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                        }
                    }));
                }));
            }
        }
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Прокинувся`);
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if (this._dataValue !== "error") {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Йой, не заповнено атрибут у ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this?._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this?._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Відкрив попап`);
                    } else this.popupLogging(`Йой, такого попапу немає. Перевірте коректність введення. `);
                }
            }
            close(selectorValue) {
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                this.popupLogging(`Закрив попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                this.youTubeCode = buttons?.getAttribute(this.options.youtubeAttribute) ? buttons.getAttribute(this.options.youtubeAttribute) : null;
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? FLS(`[Попапос]: ${message}`) : null;
            }
        }
        flsModules.popup = new Popup({});
        var nouislider = __webpack_require__(211);
        !function(e) {
            "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : window.wNumb = e();
        }((function() {
            "use strict";
            var o = [ "decimals", "thousand", "mark", "prefix", "suffix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo" ];
            function w(e) {
                return e.split("").reverse().join("");
            }
            function h(e, t) {
                return e.substring(0, t.length) === t;
            }
            function f(e, t, n) {
                if ((e[t] || e[n]) && e[t] === e[n]) throw new Error(t);
            }
            function x(e) {
                return "number" == typeof e && isFinite(e);
            }
            function n(e, t, n, r, i, o, f, u, s, c, a, p) {
                var d, l, h, g = p, v = "", m = "";
                return o && (p = o(p)), !!x(p) && (!1 !== e && 0 === parseFloat(p.toFixed(e)) && (p = 0), 
                p < 0 && (d = !0, p = Math.abs(p)), !1 !== e && (p = function(e, t) {
                    return e = e.toString().split("e"), (+((e = (e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] + t : t)))).toString().split("e"))[0] + "e" + (e[1] ? e[1] - t : -t))).toFixed(t);
                }(p, e)), -1 !== (p = p.toString()).indexOf(".") ? (h = (l = p.split("."))[0], n && (v = n + l[1])) : h = p, 
                t && (h = w((h = w(h).match(/.{1,3}/g)).join(w(t)))), d && u && (m += u), r && (m += r), 
                d && s && (m += s), m += h, m += v, i && (m += i), c && (m = c(m, g)), m);
            }
            function r(e, t, n, r, i, o, f, u, s, c, a, p) {
                var d, l = "";
                return a && (p = a(p)), !(!p || "string" != typeof p) && (u && h(p, u) && (p = p.replace(u, ""), 
                d = !0), r && h(p, r) && (p = p.replace(r, "")), s && h(p, s) && (p = p.replace(s, ""), 
                d = !0), i && function(e, t) {
                    return e.slice(-1 * t.length) === t;
                }(p, i) && (p = p.slice(0, -1 * i.length)), t && (p = p.split(t).join("")), n && (p = p.replace(n, ".")), 
                d && (l += "-"), "" !== (l = (l += p).replace(/[^0-9\.\-.]/g, "")) && (l = Number(l), 
                f && (l = f(l)), !!x(l) && l));
            }
            function i(e, t, n) {
                var r, i = [];
                for (r = 0; r < o.length; r += 1) i.push(e[o[r]]);
                return i.push(n), t.apply("", i);
            }
            return function e(t) {
                if (!(this instanceof e)) return new e(t);
                "object" == typeof t && (t = function(e) {
                    var t, n, r, i = {};
                    for (void 0 === e.suffix && (e.suffix = e.postfix), t = 0; t < o.length; t += 1) if (void 0 === (r = e[n = o[t]])) "negative" !== n || i.negativeBefore ? "mark" === n && "." !== i.thousand ? i[n] = "." : i[n] = !1 : i[n] = "-"; else if ("decimals" === n) {
                        if (!(0 <= r && r < 8)) throw new Error(n);
                        i[n] = r;
                    } else if ("encoder" === n || "decoder" === n || "edit" === n || "undo" === n) {
                        if ("function" != typeof r) throw new Error(n);
                        i[n] = r;
                    } else {
                        if ("string" != typeof r) throw new Error(n);
                        i[n] = r;
                    }
                    return f(i, "mark", "thousand"), f(i, "prefix", "negative"), f(i, "prefix", "negativeBefore"), 
                    i;
                }(t), this.to = function(e) {
                    return i(t, n, e);
                }, this.from = function(e) {
                    return i(t, r, e);
                });
            };
        }));
        function rangeInit() {
            const rangeWindows = document.querySelector("#rangeWindows");
            const rangePipe = document.querySelector("#rangePipe");
            const numberWindows = document.querySelector("#numberWindows");
            if (rangeWindows) {
                let textFrom = rangeWindows.getAttribute("data-from");
                let textTo = rangeWindows.getAttribute("data-to");
                const range = [];
                range.push(parseInt(textFrom));
                range.push(parseInt(textTo));
                nouislider.create(rangeWindows, {
                    start: 0,
                    connect: [ true, false ],
                    step: 1,
                    tooltips: [ wNumb({
                        decimals: 0
                    }) ],
                    range: {
                        min: range[0],
                        max: range[1]
                    },
                    pips: {
                        mode: "values",
                        values: range
                    }
                });
            }
            flsModules.rangeWindows = rangeWindows;
            if (rangePipe) {
                let textFrom = rangePipe.getAttribute("data-from");
                let textTo = rangePipe.getAttribute("data-to");
                const range = [];
                range.push(parseInt(textFrom));
                range.push(parseInt(textTo));
                nouislider.create(rangePipe, {
                    start: 0,
                    connect: [ true, false ],
                    step: 1,
                    tooltips: [ wNumb({
                        decimals: 0
                    }) ],
                    range: {
                        min: range[0],
                        max: range[1]
                    },
                    pips: {
                        mode: "values",
                        values: range
                    }
                });
            }
            flsModules.rangePipe = rangePipe;
            if (numberWindows) {
                let textFrom = numberWindows.getAttribute("data-from");
                let textTo = numberWindows.getAttribute("data-to");
                const range = [];
                range.push(parseInt(textFrom));
                range.push(parseInt(textTo));
                nouislider.create(numberWindows, {
                    start: 0,
                    connect: [ true, false ],
                    step: 1,
                    tooltips: [ wNumb({
                        decimals: 0
                    }) ],
                    range: {
                        min: range[0],
                        max: range[1]
                    },
                    pips: {
                        mode: "values",
                        values: range
                    }
                });
            }
            flsModules.numberWindows = numberWindows;
        }
        rangeInit();
        function getWindow(node) {
            if (node == null) return window;
            if (node.toString() !== "[object Window]") {
                var ownerDocument = node.ownerDocument;
                return ownerDocument ? ownerDocument.defaultView || window : window;
            }
            return node;
        }
        function isElement(node) {
            var OwnElement = getWindow(node).Element;
            return node instanceof OwnElement || node instanceof Element;
        }
        function isHTMLElement(node) {
            var OwnElement = getWindow(node).HTMLElement;
            return node instanceof OwnElement || node instanceof HTMLElement;
        }
        function isShadowRoot(node) {
            if (typeof ShadowRoot === "undefined") return false;
            var OwnElement = getWindow(node).ShadowRoot;
            return node instanceof OwnElement || node instanceof ShadowRoot;
        }
        var math_max = Math.max;
        var math_min = Math.min;
        var round = Math.round;
        function getUAString() {
            var uaData = navigator.userAgentData;
            if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map((function(item) {
                return item.brand + "/" + item.version;
            })).join(" ");
            return navigator.userAgent;
        }
        function isLayoutViewport() {
            return !/^((?!chrome|android).)*safari/i.test(getUAString());
        }
        function getBoundingClientRect(element, includeScale, isFixedStrategy) {
            if (includeScale === void 0) includeScale = false;
            if (isFixedStrategy === void 0) isFixedStrategy = false;
            var clientRect = element.getBoundingClientRect();
            var scaleX = 1;
            var scaleY = 1;
            if (includeScale && isHTMLElement(element)) {
                scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
                scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
            }
            var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
            var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
            var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
            var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
            var width = clientRect.width / scaleX;
            var height = clientRect.height / scaleY;
            return {
                width,
                height,
                top: y,
                right: x + width,
                bottom: y + height,
                left: x,
                x,
                y
            };
        }
        function getWindowScroll(node) {
            var win = getWindow(node);
            var scrollLeft = win.pageXOffset;
            var scrollTop = win.pageYOffset;
            return {
                scrollLeft,
                scrollTop
            };
        }
        function getHTMLElementScroll(element) {
            return {
                scrollLeft: element.scrollLeft,
                scrollTop: element.scrollTop
            };
        }
        function getNodeScroll(node) {
            if (node === getWindow(node) || !isHTMLElement(node)) return getWindowScroll(node); else return getHTMLElementScroll(node);
        }
        function getNodeName(element) {
            return element ? (element.nodeName || "").toLowerCase() : null;
        }
        function getDocumentElement(element) {
            return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
        }
        function getWindowScrollBarX(element) {
            return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
        }
        function getComputedStyle(element) {
            return getWindow(element).getComputedStyle(element);
        }
        function isScrollParent(element) {
            var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
            return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
        }
        function isElementScaled(element) {
            var rect = element.getBoundingClientRect();
            var scaleX = round(rect.width) / element.offsetWidth || 1;
            var scaleY = round(rect.height) / element.offsetHeight || 1;
            return scaleX !== 1 || scaleY !== 1;
        }
        function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
            if (isFixed === void 0) isFixed = false;
            var isOffsetParentAnElement = isHTMLElement(offsetParent);
            var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
            var documentElement = getDocumentElement(offsetParent);
            var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
            var scroll = {
                scrollLeft: 0,
                scrollTop: 0
            };
            var offsets = {
                x: 0,
                y: 0
            };
            if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
                if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) scroll = getNodeScroll(offsetParent);
                if (isHTMLElement(offsetParent)) {
                    offsets = getBoundingClientRect(offsetParent, true);
                    offsets.x += offsetParent.clientLeft;
                    offsets.y += offsetParent.clientTop;
                } else if (documentElement) offsets.x = getWindowScrollBarX(documentElement);
            }
            return {
                x: rect.left + scroll.scrollLeft - offsets.x,
                y: rect.top + scroll.scrollTop - offsets.y,
                width: rect.width,
                height: rect.height
            };
        }
        function getLayoutRect(element) {
            var clientRect = getBoundingClientRect(element);
            var width = element.offsetWidth;
            var height = element.offsetHeight;
            if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
            if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
            return {
                x: element.offsetLeft,
                y: element.offsetTop,
                width,
                height
            };
        }
        function getParentNode(element) {
            if (getNodeName(element) === "html") return element;
            return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
        }
        function getScrollParent(node) {
            if ([ "html", "body", "#document" ].indexOf(getNodeName(node)) >= 0) return node.ownerDocument.body;
            if (isHTMLElement(node) && isScrollParent(node)) return node;
            return getScrollParent(getParentNode(node));
        }
        function listScrollParents(element, list) {
            var _element$ownerDocumen;
            if (list === void 0) list = [];
            var scrollParent = getScrollParent(element);
            var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
            var win = getWindow(scrollParent);
            var target = isBody ? [ win ].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
            var updatedList = list.concat(target);
            return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
        }
        function isTableElement(element) {
            return [ "table", "td", "th" ].indexOf(getNodeName(element)) >= 0;
        }
        function getTrueOffsetParent(element) {
            if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") return null;
            return element.offsetParent;
        }
        function getContainingBlock(element) {
            var isFirefox = /firefox/i.test(getUAString());
            var isIE = /Trident/i.test(getUAString());
            if (isIE && isHTMLElement(element)) {
                var elementCss = getComputedStyle(element);
                if (elementCss.position === "fixed") return null;
            }
            var currentNode = getParentNode(element);
            if (isShadowRoot(currentNode)) currentNode = currentNode.host;
            while (isHTMLElement(currentNode) && [ "html", "body" ].indexOf(getNodeName(currentNode)) < 0) {
                var css = getComputedStyle(currentNode);
                if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [ "transform", "perspective" ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode; else currentNode = currentNode.parentNode;
            }
            return null;
        }
        function getOffsetParent(element) {
            var window = getWindow(element);
            var offsetParent = getTrueOffsetParent(element);
            while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") offsetParent = getTrueOffsetParent(offsetParent);
            if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) return window;
            return offsetParent || getContainingBlock(element) || window;
        }
        var enums_top = "top";
        var bottom = "bottom";
        var right = "right";
        var left = "left";
        var auto = "auto";
        var basePlacements = [ enums_top, bottom, right, left ];
        var start = "start";
        var end = "end";
        var clippingParents = "clippingParents";
        var viewport = "viewport";
        var popper = "popper";
        var reference = "reference";
        var variationPlacements = basePlacements.reduce((function(acc, placement) {
            return acc.concat([ placement + "-" + start, placement + "-" + end ]);
        }), []);
        var enums_placements = [].concat(basePlacements, [ auto ]).reduce((function(acc, placement) {
            return acc.concat([ placement, placement + "-" + start, placement + "-" + end ]);
        }), []);
        var beforeRead = "beforeRead";
        var read = "read";
        var afterRead = "afterRead";
        var beforeMain = "beforeMain";
        var main = "main";
        var afterMain = "afterMain";
        var beforeWrite = "beforeWrite";
        var write = "write";
        var afterWrite = "afterWrite";
        var modifierPhases = [ beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite ];
        function order(modifiers) {
            var map = new Map;
            var visited = new Set;
            var result = [];
            modifiers.forEach((function(modifier) {
                map.set(modifier.name, modifier);
            }));
            function sort(modifier) {
                visited.add(modifier.name);
                var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
                requires.forEach((function(dep) {
                    if (!visited.has(dep)) {
                        var depModifier = map.get(dep);
                        if (depModifier) sort(depModifier);
                    }
                }));
                result.push(modifier);
            }
            modifiers.forEach((function(modifier) {
                if (!visited.has(modifier.name)) sort(modifier);
            }));
            return result;
        }
        function orderModifiers(modifiers) {
            var orderedModifiers = order(modifiers);
            return modifierPhases.reduce((function(acc, phase) {
                return acc.concat(orderedModifiers.filter((function(modifier) {
                    return modifier.phase === phase;
                })));
            }), []);
        }
        function debounce(fn) {
            var pending;
            return function() {
                if (!pending) pending = new Promise((function(resolve) {
                    Promise.resolve().then((function() {
                        pending = void 0;
                        resolve(fn());
                    }));
                }));
                return pending;
            };
        }
        function mergeByName(modifiers) {
            var merged = modifiers.reduce((function(merged, current) {
                var existing = merged[current.name];
                merged[current.name] = existing ? Object.assign({}, existing, current, {
                    options: Object.assign({}, existing.options, current.options),
                    data: Object.assign({}, existing.data, current.data)
                }) : current;
                return merged;
            }), {});
            return Object.keys(merged).map((function(key) {
                return merged[key];
            }));
        }
        var DEFAULT_OPTIONS = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };
        function areValidElements() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            return !args.some((function(element) {
                return !(element && typeof element.getBoundingClientRect === "function");
            }));
        }
        function popperGenerator(generatorOptions) {
            if (generatorOptions === void 0) generatorOptions = {};
            var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
            return function createPopper(reference, popper, options) {
                if (options === void 0) options = defaultOptions;
                var state = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
                    modifiersData: {},
                    elements: {
                        reference,
                        popper
                    },
                    attributes: {},
                    styles: {}
                };
                var effectCleanupFns = [];
                var isDestroyed = false;
                var instance = {
                    state,
                    setOptions: function setOptions(setOptionsAction) {
                        var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                        cleanupModifierEffects();
                        state.options = Object.assign({}, defaultOptions, state.options, options);
                        state.scrollParents = {
                            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
                            popper: listScrollParents(popper)
                        };
                        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers)));
                        state.orderedModifiers = orderedModifiers.filter((function(m) {
                            return m.enabled;
                        }));
                        runModifierEffects();
                        return instance.update();
                    },
                    forceUpdate: function forceUpdate() {
                        if (isDestroyed) return;
                        var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper;
                        if (!areValidElements(reference, popper)) return;
                        state.rects = {
                            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === "fixed"),
                            popper: getLayoutRect(popper)
                        };
                        state.reset = false;
                        state.placement = state.options.placement;
                        state.orderedModifiers.forEach((function(modifier) {
                            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                        }));
                        for (var index = 0; index < state.orderedModifiers.length; index++) {
                            if (state.reset === true) {
                                state.reset = false;
                                index = -1;
                                continue;
                            }
                            var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                            if (typeof fn === "function") state = fn({
                                state,
                                options: _options,
                                name,
                                instance
                            }) || state;
                        }
                    },
                    update: debounce((function() {
                        return new Promise((function(resolve) {
                            instance.forceUpdate();
                            resolve(state);
                        }));
                    })),
                    destroy: function destroy() {
                        cleanupModifierEffects();
                        isDestroyed = true;
                    }
                };
                if (!areValidElements(reference, popper)) return instance;
                instance.setOptions(options).then((function(state) {
                    if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
                }));
                function runModifierEffects() {
                    state.orderedModifiers.forEach((function(_ref) {
                        var name = _ref.name, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, effect = _ref.effect;
                        if (typeof effect === "function") {
                            var cleanupFn = effect({
                                state,
                                name,
                                instance,
                                options
                            });
                            var noopFn = function noopFn() {};
                            effectCleanupFns.push(cleanupFn || noopFn);
                        }
                    }));
                }
                function cleanupModifierEffects() {
                    effectCleanupFns.forEach((function(fn) {
                        return fn();
                    }));
                    effectCleanupFns = [];
                }
                return instance;
            };
        }
        null && popperGenerator();
        var passive = {
            passive: true
        };
        function effect(_ref) {
            var state = _ref.state, instance = _ref.instance, options = _ref.options;
            var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
            var window = getWindow(state.elements.popper);
            var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
            if (scroll) scrollParents.forEach((function(scrollParent) {
                scrollParent.addEventListener("scroll", instance.update, passive);
            }));
            if (resize) window.addEventListener("resize", instance.update, passive);
            return function() {
                if (scroll) scrollParents.forEach((function(scrollParent) {
                    scrollParent.removeEventListener("scroll", instance.update, passive);
                }));
                if (resize) window.removeEventListener("resize", instance.update, passive);
            };
        }
        const eventListeners = {
            name: "eventListeners",
            enabled: true,
            phase: "write",
            fn: function fn() {},
            effect,
            data: {}
        };
        function getBasePlacement(placement) {
            return placement.split("-")[0];
        }
        function getVariation(placement) {
            return placement.split("-")[1];
        }
        function getMainAxisFromPlacement(placement) {
            return [ "top", "bottom" ].indexOf(placement) >= 0 ? "x" : "y";
        }
        function computeOffsets(_ref) {
            var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
            var basePlacement = placement ? getBasePlacement(placement) : null;
            var variation = placement ? getVariation(placement) : null;
            var commonX = reference.x + reference.width / 2 - element.width / 2;
            var commonY = reference.y + reference.height / 2 - element.height / 2;
            var offsets;
            switch (basePlacement) {
              case enums_top:
                offsets = {
                    x: commonX,
                    y: reference.y - element.height
                };
                break;

              case bottom:
                offsets = {
                    x: commonX,
                    y: reference.y + reference.height
                };
                break;

              case right:
                offsets = {
                    x: reference.x + reference.width,
                    y: commonY
                };
                break;

              case left:
                offsets = {
                    x: reference.x - element.width,
                    y: commonY
                };
                break;

              default:
                offsets = {
                    x: reference.x,
                    y: reference.y
                };
            }
            var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
            if (mainAxis != null) {
                var len = mainAxis === "y" ? "height" : "width";
                switch (variation) {
                  case start:
                    offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                    break;

                  case end:
                    offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                    break;

                  default:
                }
            }
            return offsets;
        }
        function popperOffsets(_ref) {
            var state = _ref.state, name = _ref.name;
            state.modifiersData[name] = computeOffsets({
                reference: state.rects.reference,
                element: state.rects.popper,
                strategy: "absolute",
                placement: state.placement
            });
        }
        const modifiers_popperOffsets = {
            name: "popperOffsets",
            enabled: true,
            phase: "read",
            fn: popperOffsets,
            data: {}
        };
        var unsetSides = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };
        function roundOffsetsByDPR(_ref, win) {
            var x = _ref.x, y = _ref.y;
            var dpr = win.devicePixelRatio || 1;
            return {
                x: round(x * dpr) / dpr || 0,
                y: round(y * dpr) / dpr || 0
            };
        }
        function mapToStyles(_ref2) {
            var _Object$assign2;
            var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
            var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
            var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
                x,
                y
            }) : {
                x,
                y
            };
            x = _ref3.x;
            y = _ref3.y;
            var hasX = offsets.hasOwnProperty("x");
            var hasY = offsets.hasOwnProperty("y");
            var sideX = left;
            var sideY = enums_top;
            var win = window;
            if (adaptive) {
                var offsetParent = getOffsetParent(popper);
                var heightProp = "clientHeight";
                var widthProp = "clientWidth";
                if (offsetParent === getWindow(popper)) {
                    offsetParent = getDocumentElement(popper);
                    if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
                        heightProp = "scrollHeight";
                        widthProp = "scrollWidth";
                    }
                }
                offsetParent;
                if (placement === enums_top || (placement === left || placement === right) && variation === end) {
                    sideY = bottom;
                    var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
                    y -= offsetY - popperRect.height;
                    y *= gpuAcceleration ? 1 : -1;
                }
                if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
                    sideX = right;
                    var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
                    x -= offsetX - popperRect.width;
                    x *= gpuAcceleration ? 1 : -1;
                }
            }
            var commonStyles = Object.assign({
                position
            }, adaptive && unsetSides);
            var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
                x,
                y
            }, getWindow(popper)) : {
                x,
                y
            };
            x = _ref4.x;
            y = _ref4.y;
            if (gpuAcceleration) {
                var _Object$assign;
                return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", 
                _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", 
                _Object$assign));
            }
            return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", 
            _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
        }
        function computeStyles(_ref5) {
            var state = _ref5.state, options = _ref5.options;
            var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
            var commonStyles = {
                placement: getBasePlacement(state.placement),
                variation: getVariation(state.placement),
                popper: state.elements.popper,
                popperRect: state.rects.popper,
                gpuAcceleration,
                isFixed: state.options.strategy === "fixed"
            };
            if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
                offsets: state.modifiersData.popperOffsets,
                position: state.options.strategy,
                adaptive,
                roundOffsets
            })));
            if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
                offsets: state.modifiersData.arrow,
                position: "absolute",
                adaptive: false,
                roundOffsets
            })));
            state.attributes.popper = Object.assign({}, state.attributes.popper, {
                "data-popper-placement": state.placement
            });
        }
        const modifiers_computeStyles = {
            name: "computeStyles",
            enabled: true,
            phase: "beforeWrite",
            fn: computeStyles,
            data: {}
        };
        function applyStyles(_ref) {
            var state = _ref.state;
            Object.keys(state.elements).forEach((function(name) {
                var style = state.styles[name] || {};
                var attributes = state.attributes[name] || {};
                var element = state.elements[name];
                if (!isHTMLElement(element) || !getNodeName(element)) return;
                Object.assign(element.style, style);
                Object.keys(attributes).forEach((function(name) {
                    var value = attributes[name];
                    if (value === false) element.removeAttribute(name); else element.setAttribute(name, value === true ? "" : value);
                }));
            }));
        }
        function applyStyles_effect(_ref2) {
            var state = _ref2.state;
            var initialStyles = {
                popper: {
                    position: state.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            Object.assign(state.elements.popper.style, initialStyles.popper);
            state.styles = initialStyles;
            if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
            return function() {
                Object.keys(state.elements).forEach((function(name) {
                    var element = state.elements[name];
                    var attributes = state.attributes[name] || {};
                    var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
                    var style = styleProperties.reduce((function(style, property) {
                        style[property] = "";
                        return style;
                    }), {});
                    if (!isHTMLElement(element) || !getNodeName(element)) return;
                    Object.assign(element.style, style);
                    Object.keys(attributes).forEach((function(attribute) {
                        element.removeAttribute(attribute);
                    }));
                }));
            };
        }
        const modifiers_applyStyles = {
            name: "applyStyles",
            enabled: true,
            phase: "write",
            fn: applyStyles,
            effect: applyStyles_effect,
            requires: [ "computeStyles" ]
        };
        function distanceAndSkiddingToXY(placement, rects, offset) {
            var basePlacement = getBasePlacement(placement);
            var invertDistance = [ left, enums_top ].indexOf(basePlacement) >= 0 ? -1 : 1;
            var _ref = typeof offset === "function" ? offset(Object.assign({}, rects, {
                placement
            })) : offset, skidding = _ref[0], distance = _ref[1];
            skidding = skidding || 0;
            distance = (distance || 0) * invertDistance;
            return [ left, right ].indexOf(basePlacement) >= 0 ? {
                x: distance,
                y: skidding
            } : {
                x: skidding,
                y: distance
            };
        }
        function offset(_ref2) {
            var state = _ref2.state, options = _ref2.options, name = _ref2.name;
            var _options$offset = options.offset, offset = _options$offset === void 0 ? [ 0, 0 ] : _options$offset;
            var data = enums_placements.reduce((function(acc, placement) {
                acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
                return acc;
            }), {});
            var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
            if (state.modifiersData.popperOffsets != null) {
                state.modifiersData.popperOffsets.x += x;
                state.modifiersData.popperOffsets.y += y;
            }
            state.modifiersData[name] = data;
        }
        const modifiers_offset = {
            name: "offset",
            enabled: true,
            phase: "main",
            requires: [ "popperOffsets" ],
            fn: offset
        };
        var hash = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        function getOppositePlacement(placement) {
            return placement.replace(/left|right|bottom|top/g, (function(matched) {
                return hash[matched];
            }));
        }
        var getOppositeVariationPlacement_hash = {
            start: "end",
            end: "start"
        };
        function getOppositeVariationPlacement(placement) {
            return placement.replace(/start|end/g, (function(matched) {
                return getOppositeVariationPlacement_hash[matched];
            }));
        }
        function getViewportRect(element, strategy) {
            var win = getWindow(element);
            var html = getDocumentElement(element);
            var visualViewport = win.visualViewport;
            var width = html.clientWidth;
            var height = html.clientHeight;
            var x = 0;
            var y = 0;
            if (visualViewport) {
                width = visualViewport.width;
                height = visualViewport.height;
                var layoutViewport = isLayoutViewport();
                if (layoutViewport || !layoutViewport && strategy === "fixed") {
                    x = visualViewport.offsetLeft;
                    y = visualViewport.offsetTop;
                }
            }
            return {
                width,
                height,
                x: x + getWindowScrollBarX(element),
                y
            };
        }
        function getDocumentRect(element) {
            var _element$ownerDocumen;
            var html = getDocumentElement(element);
            var winScroll = getWindowScroll(element);
            var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
            var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
            var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
            var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
            var y = -winScroll.scrollTop;
            if (getComputedStyle(body || html).direction === "rtl") x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
            return {
                width,
                height,
                x,
                y
            };
        }
        function contains(parent, child) {
            var rootNode = child.getRootNode && child.getRootNode();
            if (parent.contains(child)) return true; else if (rootNode && isShadowRoot(rootNode)) {
                var next = child;
                do {
                    if (next && parent.isSameNode(next)) return true;
                    next = next.parentNode || next.host;
                } while (next);
            }
            return false;
        }
        function rectToClientRect(rect) {
            return Object.assign({}, rect, {
                left: rect.x,
                top: rect.y,
                right: rect.x + rect.width,
                bottom: rect.y + rect.height
            });
        }
        function getInnerBoundingClientRect(element, strategy) {
            var rect = getBoundingClientRect(element, false, strategy === "fixed");
            rect.top = rect.top + element.clientTop;
            rect.left = rect.left + element.clientLeft;
            rect.bottom = rect.top + element.clientHeight;
            rect.right = rect.left + element.clientWidth;
            rect.width = element.clientWidth;
            rect.height = element.clientHeight;
            rect.x = rect.left;
            rect.y = rect.top;
            return rect;
        }
        function getClientRectFromMixedType(element, clippingParent, strategy) {
            return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
        }
        function getClippingParents(element) {
            var clippingParents = listScrollParents(getParentNode(element));
            var canEscapeClipping = [ "absolute", "fixed" ].indexOf(getComputedStyle(element).position) >= 0;
            var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
            if (!isElement(clipperElement)) return [];
            return clippingParents.filter((function(clippingParent) {
                return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
            }));
        }
        function getClippingRect(element, boundary, rootBoundary, strategy) {
            var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
            var clippingParents = [].concat(mainClippingParents, [ rootBoundary ]);
            var firstClippingParent = clippingParents[0];
            var clippingRect = clippingParents.reduce((function(accRect, clippingParent) {
                var rect = getClientRectFromMixedType(element, clippingParent, strategy);
                accRect.top = math_max(rect.top, accRect.top);
                accRect.right = math_min(rect.right, accRect.right);
                accRect.bottom = math_min(rect.bottom, accRect.bottom);
                accRect.left = math_max(rect.left, accRect.left);
                return accRect;
            }), getClientRectFromMixedType(element, firstClippingParent, strategy));
            clippingRect.width = clippingRect.right - clippingRect.left;
            clippingRect.height = clippingRect.bottom - clippingRect.top;
            clippingRect.x = clippingRect.left;
            clippingRect.y = clippingRect.top;
            return clippingRect;
        }
        function getFreshSideObject() {
            return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            };
        }
        function mergePaddingObject(paddingObject) {
            return Object.assign({}, getFreshSideObject(), paddingObject);
        }
        function expandToHashMap(value, keys) {
            return keys.reduce((function(hashMap, key) {
                hashMap[key] = value;
                return hashMap;
            }), {});
        }
        function detectOverflow(state, options) {
            if (options === void 0) options = {};
            var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
            var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
            var altContext = elementContext === popper ? reference : popper;
            var popperRect = state.rects.popper;
            var element = state.elements[altBoundary ? altContext : elementContext];
            var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
            var referenceClientRect = getBoundingClientRect(state.elements.reference);
            var popperOffsets = computeOffsets({
                reference: referenceClientRect,
                element: popperRect,
                strategy: "absolute",
                placement
            });
            var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
            var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
            var overflowOffsets = {
                top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
                bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
                left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
                right: elementClientRect.right - clippingClientRect.right + paddingObject.right
            };
            var offsetData = state.modifiersData.offset;
            if (elementContext === popper && offsetData) {
                var offset = offsetData[placement];
                Object.keys(overflowOffsets).forEach((function(key) {
                    var multiply = [ right, bottom ].indexOf(key) >= 0 ? 1 : -1;
                    var axis = [ enums_top, bottom ].indexOf(key) >= 0 ? "y" : "x";
                    overflowOffsets[key] += offset[axis] * multiply;
                }));
            }
            return overflowOffsets;
        }
        function computeAutoPlacement(state, options) {
            if (options === void 0) options = {};
            var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
            var variation = getVariation(placement);
            var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter((function(placement) {
                return getVariation(placement) === variation;
            })) : basePlacements;
            var allowedPlacements = placements.filter((function(placement) {
                return allowedAutoPlacements.indexOf(placement) >= 0;
            }));
            if (allowedPlacements.length === 0) allowedPlacements = placements;
            var overflows = allowedPlacements.reduce((function(acc, placement) {
                acc[placement] = detectOverflow(state, {
                    placement,
                    boundary,
                    rootBoundary,
                    padding
                })[getBasePlacement(placement)];
                return acc;
            }), {});
            return Object.keys(overflows).sort((function(a, b) {
                return overflows[a] - overflows[b];
            }));
        }
        function getExpandedFallbackPlacements(placement) {
            if (getBasePlacement(placement) === auto) return [];
            var oppositePlacement = getOppositePlacement(placement);
            return [ getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement) ];
        }
        function flip(_ref) {
            var state = _ref.state, options = _ref.options, name = _ref.name;
            if (state.modifiersData[name]._skip) return;
            var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
            var preferredPlacement = state.options.placement;
            var basePlacement = getBasePlacement(preferredPlacement);
            var isBasePlacement = basePlacement === preferredPlacement;
            var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [ getOppositePlacement(preferredPlacement) ] : getExpandedFallbackPlacements(preferredPlacement));
            var placements = [ preferredPlacement ].concat(fallbackPlacements).reduce((function(acc, placement) {
                return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
                    placement,
                    boundary,
                    rootBoundary,
                    padding,
                    flipVariations,
                    allowedAutoPlacements
                }) : placement);
            }), []);
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var checksMap = new Map;
            var makeFallbackChecks = true;
            var firstFittingPlacement = placements[0];
            for (var i = 0; i < placements.length; i++) {
                var placement = placements[i];
                var _basePlacement = getBasePlacement(placement);
                var isStartVariation = getVariation(placement) === start;
                var isVertical = [ enums_top, bottom ].indexOf(_basePlacement) >= 0;
                var len = isVertical ? "width" : "height";
                var overflow = detectOverflow(state, {
                    placement,
                    boundary,
                    rootBoundary,
                    altBoundary,
                    padding
                });
                var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;
                if (referenceRect[len] > popperRect[len]) mainVariationSide = getOppositePlacement(mainVariationSide);
                var altVariationSide = getOppositePlacement(mainVariationSide);
                var checks = [];
                if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
                if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
                if (checks.every((function(check) {
                    return check;
                }))) {
                    firstFittingPlacement = placement;
                    makeFallbackChecks = false;
                    break;
                }
                checksMap.set(placement, checks);
            }
            if (makeFallbackChecks) {
                var numberOfChecks = flipVariations ? 3 : 1;
                var _loop = function _loop(_i) {
                    var fittingPlacement = placements.find((function(placement) {
                        var checks = checksMap.get(placement);
                        if (checks) return checks.slice(0, _i).every((function(check) {
                            return check;
                        }));
                    }));
                    if (fittingPlacement) {
                        firstFittingPlacement = fittingPlacement;
                        return "break";
                    }
                };
                for (var _i = numberOfChecks; _i > 0; _i--) {
                    var _ret = _loop(_i);
                    if (_ret === "break") break;
                }
            }
            if (state.placement !== firstFittingPlacement) {
                state.modifiersData[name]._skip = true;
                state.placement = firstFittingPlacement;
                state.reset = true;
            }
        }
        const modifiers_flip = {
            name: "flip",
            enabled: true,
            phase: "main",
            fn: flip,
            requiresIfExists: [ "offset" ],
            data: {
                _skip: false
            }
        };
        function getAltAxis(axis) {
            return axis === "x" ? "y" : "x";
        }
        function within(min, value, max) {
            return math_max(min, math_min(value, max));
        }
        function withinMaxClamp(min, value, max) {
            var v = within(min, value, max);
            return v > max ? max : v;
        }
        function preventOverflow(_ref) {
            var state = _ref.state, options = _ref.options, name = _ref.name;
            var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
            var overflow = detectOverflow(state, {
                boundary,
                rootBoundary,
                padding,
                altBoundary
            });
            var basePlacement = getBasePlacement(state.placement);
            var variation = getVariation(state.placement);
            var isBasePlacement = !variation;
            var mainAxis = getMainAxisFromPlacement(basePlacement);
            var altAxis = getAltAxis(mainAxis);
            var popperOffsets = state.modifiersData.popperOffsets;
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
                placement: state.placement
            })) : tetherOffset;
            var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
                mainAxis: tetherOffsetValue,
                altAxis: tetherOffsetValue
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, tetherOffsetValue);
            var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
            var data = {
                x: 0,
                y: 0
            };
            if (!popperOffsets) return;
            if (checkMainAxis) {
                var _offsetModifierState$;
                var mainSide = mainAxis === "y" ? enums_top : left;
                var altSide = mainAxis === "y" ? bottom : right;
                var len = mainAxis === "y" ? "height" : "width";
                var offset = popperOffsets[mainAxis];
                var min = offset + overflow[mainSide];
                var max = offset - overflow[altSide];
                var additive = tether ? -popperRect[len] / 2 : 0;
                var minLen = variation === start ? referenceRect[len] : popperRect[len];
                var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
                var arrowElement = state.elements.arrow;
                var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
                    width: 0,
                    height: 0
                };
                var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
                var arrowPaddingMin = arrowPaddingObject[mainSide];
                var arrowPaddingMax = arrowPaddingObject[altSide];
                var arrowLen = within(0, referenceRect[len], arrowRect[len]);
                var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
                var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
                var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
                var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
                var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
                var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
                var tetherMax = offset + maxOffset - offsetModifierValue;
                var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
                popperOffsets[mainAxis] = preventedOffset;
                data[mainAxis] = preventedOffset - offset;
            }
            if (checkAltAxis) {
                var _offsetModifierState$2;
                var _mainSide = mainAxis === "x" ? enums_top : left;
                var _altSide = mainAxis === "x" ? bottom : right;
                var _offset = popperOffsets[altAxis];
                var _len = altAxis === "y" ? "height" : "width";
                var _min = _offset + overflow[_mainSide];
                var _max = _offset - overflow[_altSide];
                var isOriginSide = [ enums_top, left ].indexOf(basePlacement) !== -1;
                var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
                var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
                var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
                var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
                popperOffsets[altAxis] = _preventedOffset;
                data[altAxis] = _preventedOffset - _offset;
            }
            state.modifiersData[name] = data;
        }
        const modifiers_preventOverflow = {
            name: "preventOverflow",
            enabled: true,
            phase: "main",
            fn: preventOverflow,
            requiresIfExists: [ "offset" ]
        };
        var toPaddingObject = function toPaddingObject(padding, state) {
            padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
                placement: state.placement
            })) : padding;
            return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
        };
        function arrow(_ref) {
            var _state$modifiersData$;
            var state = _ref.state, name = _ref.name, options = _ref.options;
            var arrowElement = state.elements.arrow;
            var popperOffsets = state.modifiersData.popperOffsets;
            var basePlacement = getBasePlacement(state.placement);
            var axis = getMainAxisFromPlacement(basePlacement);
            var isVertical = [ left, right ].indexOf(basePlacement) >= 0;
            var len = isVertical ? "height" : "width";
            if (!arrowElement || !popperOffsets) return;
            var paddingObject = toPaddingObject(options.padding, state);
            var arrowRect = getLayoutRect(arrowElement);
            var minProp = axis === "y" ? enums_top : left;
            var maxProp = axis === "y" ? bottom : right;
            var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
            var startDiff = popperOffsets[axis] - state.rects.reference[axis];
            var arrowOffsetParent = getOffsetParent(arrowElement);
            var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
            var centerToReference = endDiff / 2 - startDiff / 2;
            var min = paddingObject[minProp];
            var max = clientSize - arrowRect[len] - paddingObject[maxProp];
            var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
            var offset = within(min, center, max);
            var axisProp = axis;
            state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, 
            _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
        }
        function arrow_effect(_ref2) {
            var state = _ref2.state, options = _ref2.options;
            var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
            if (arrowElement == null) return;
            if (typeof arrowElement === "string") {
                arrowElement = state.elements.popper.querySelector(arrowElement);
                if (!arrowElement) return;
            }
            if (!contains(state.elements.popper, arrowElement)) return;
            state.elements.arrow = arrowElement;
        }
        const modifiers_arrow = {
            name: "arrow",
            enabled: true,
            phase: "main",
            fn: arrow,
            effect: arrow_effect,
            requires: [ "popperOffsets" ],
            requiresIfExists: [ "preventOverflow" ]
        };
        function getSideOffsets(overflow, rect, preventedOffsets) {
            if (preventedOffsets === void 0) preventedOffsets = {
                x: 0,
                y: 0
            };
            return {
                top: overflow.top - rect.height - preventedOffsets.y,
                right: overflow.right - rect.width + preventedOffsets.x,
                bottom: overflow.bottom - rect.height + preventedOffsets.y,
                left: overflow.left - rect.width - preventedOffsets.x
            };
        }
        function isAnySideFullyClipped(overflow) {
            return [ enums_top, right, bottom, left ].some((function(side) {
                return overflow[side] >= 0;
            }));
        }
        function hide(_ref) {
            var state = _ref.state, name = _ref.name;
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var preventedOffsets = state.modifiersData.preventOverflow;
            var referenceOverflow = detectOverflow(state, {
                elementContext: "reference"
            });
            var popperAltOverflow = detectOverflow(state, {
                altBoundary: true
            });
            var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
            var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
            var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
            var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
            state.modifiersData[name] = {
                referenceClippingOffsets,
                popperEscapeOffsets,
                isReferenceHidden,
                hasPopperEscaped
            };
            state.attributes.popper = Object.assign({}, state.attributes.popper, {
                "data-popper-reference-hidden": isReferenceHidden,
                "data-popper-escaped": hasPopperEscaped
            });
        }
        const modifiers_hide = {
            name: "hide",
            enabled: true,
            phase: "main",
            requiresIfExists: [ "preventOverflow" ],
            fn: hide
        };
        var defaultModifiers = [ eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide ];
        var popper_createPopper = popperGenerator({
            defaultModifiers
        });
        var BOX_CLASS = "tippy-box";
        var CONTENT_CLASS = "tippy-content";
        var BACKDROP_CLASS = "tippy-backdrop";
        var ARROW_CLASS = "tippy-arrow";
        var SVG_ARROW_CLASS = "tippy-svg-arrow";
        var TOUCH_OPTIONS = {
            passive: true,
            capture: true
        };
        var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
            return document.body;
        };
        function getValueAtIndexOrReturn(value, index, defaultValue) {
            if (Array.isArray(value)) {
                var v = value[index];
                return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
            }
            return value;
        }
        function isType(value, type) {
            var str = {}.toString.call(value);
            return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
        }
        function invokeWithArgsOrReturn(value, args) {
            return typeof value === "function" ? value.apply(void 0, args) : value;
        }
        function tippy_esm_debounce(fn, ms) {
            if (ms === 0) return fn;
            var timeout;
            return function(arg) {
                clearTimeout(timeout);
                timeout = setTimeout((function() {
                    fn(arg);
                }), ms);
            };
        }
        function splitBySpaces(value) {
            return value.split(/\s+/).filter(Boolean);
        }
        function normalizeToArray(value) {
            return [].concat(value);
        }
        function pushIfUnique(arr, value) {
            if (arr.indexOf(value) === -1) arr.push(value);
        }
        function unique(arr) {
            return arr.filter((function(item, index) {
                return arr.indexOf(item) === index;
            }));
        }
        function tippy_esm_getBasePlacement(placement) {
            return placement.split("-")[0];
        }
        function arrayFrom(value) {
            return [].slice.call(value);
        }
        function removeUndefinedProps(obj) {
            return Object.keys(obj).reduce((function(acc, key) {
                if (obj[key] !== void 0) acc[key] = obj[key];
                return acc;
            }), {});
        }
        function div() {
            return document.createElement("div");
        }
        function tippy_esm_isElement(value) {
            return [ "Element", "Fragment" ].some((function(type) {
                return isType(value, type);
            }));
        }
        function isNodeList(value) {
            return isType(value, "NodeList");
        }
        function isMouseEvent(value) {
            return isType(value, "MouseEvent");
        }
        function isReferenceElement(value) {
            return !!(value && value._tippy && value._tippy.reference === value);
        }
        function getArrayOfElements(value) {
            if (tippy_esm_isElement(value)) return [ value ];
            if (isNodeList(value)) return arrayFrom(value);
            if (Array.isArray(value)) return value;
            return arrayFrom(document.querySelectorAll(value));
        }
        function setTransitionDuration(els, value) {
            els.forEach((function(el) {
                if (el) el.style.transitionDuration = value + "ms";
            }));
        }
        function setVisibilityState(els, state) {
            els.forEach((function(el) {
                if (el) el.setAttribute("data-state", state);
            }));
        }
        function getOwnerDocument(elementOrElements) {
            var _element$ownerDocumen;
            var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
            return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
        }
        function isCursorOutsideInteractiveBorder(popperTreeData, event) {
            var clientX = event.clientX, clientY = event.clientY;
            return popperTreeData.every((function(_ref) {
                var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
                var interactiveBorder = props.interactiveBorder;
                var basePlacement = tippy_esm_getBasePlacement(popperState.placement);
                var offsetData = popperState.modifiersData.offset;
                if (!offsetData) return true;
                var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
                var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
                var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
                var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
                var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
                var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
                var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
                var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
                return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
            }));
        }
        function updateTransitionEndListener(box, action, listener) {
            var method = action + "EventListener";
            [ "transitionend", "webkitTransitionEnd" ].forEach((function(event) {
                box[method](event, listener);
            }));
        }
        function actualContains(parent, child) {
            var target = child;
            while (target) {
                var _target$getRootNode;
                if (parent.contains(target)) return true;
                target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
            }
            return false;
        }
        var currentInput = {
            isTouch: false
        };
        var lastMouseMoveTime = 0;
        function onDocumentTouchStart() {
            if (currentInput.isTouch) return;
            currentInput.isTouch = true;
            if (window.performance) document.addEventListener("mousemove", onDocumentMouseMove);
        }
        function onDocumentMouseMove() {
            var now = performance.now();
            if (now - lastMouseMoveTime < 20) {
                currentInput.isTouch = false;
                document.removeEventListener("mousemove", onDocumentMouseMove);
            }
            lastMouseMoveTime = now;
        }
        function onWindowBlur() {
            var activeElement = document.activeElement;
            if (isReferenceElement(activeElement)) {
                var instance = activeElement._tippy;
                if (activeElement.blur && !instance.state.isVisible) activeElement.blur();
            }
        }
        function bindGlobalEventListeners() {
            document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
            window.addEventListener("blur", onWindowBlur);
        }
        var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
        var isIE11 = isBrowser ? !!window.msCrypto : false;
        if (false) ;
        var pluginProps = {
            animateFill: false,
            followCursor: false,
            inlinePositioning: false,
            sticky: false
        };
        var renderProps = {
            allowHTML: false,
            animation: "fade",
            arrow: true,
            content: "",
            inertia: false,
            maxWidth: 350,
            role: "tooltip",
            theme: "",
            zIndex: 9999
        };
        var defaultProps = Object.assign({
            appendTo: TIPPY_DEFAULT_APPEND_TO,
            aria: {
                content: "auto",
                expanded: "auto"
            },
            delay: 0,
            duration: [ 300, 250 ],
            getReferenceClientRect: null,
            hideOnClick: true,
            ignoreAttributes: false,
            interactive: false,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [ 0, 10 ],
            onAfterUpdate: function onAfterUpdate() {},
            onBeforeUpdate: function onBeforeUpdate() {},
            onCreate: function onCreate() {},
            onDestroy: function onDestroy() {},
            onHidden: function onHidden() {},
            onHide: function onHide() {},
            onMount: function onMount() {},
            onShow: function onShow() {},
            onShown: function onShown() {},
            onTrigger: function onTrigger() {},
            onUntrigger: function onUntrigger() {},
            onClickOutside: function onClickOutside() {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: false,
            touch: true,
            trigger: "mouseenter focus",
            triggerTarget: null
        }, pluginProps, renderProps);
        var defaultKeys = Object.keys(defaultProps);
        var setDefaultProps = function setDefaultProps(partialProps) {
            if (false) ;
            var keys = Object.keys(partialProps);
            keys.forEach((function(key) {
                defaultProps[key] = partialProps[key];
            }));
        };
        function getExtendedPassedProps(passedProps) {
            var plugins = passedProps.plugins || [];
            var pluginProps = plugins.reduce((function(acc, plugin) {
                var name = plugin.name, defaultValue = plugin.defaultValue;
                if (name) {
                    var _name;
                    acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
                }
                return acc;
            }), {});
            return Object.assign({}, passedProps, pluginProps);
        }
        function getDataAttributeProps(reference, plugins) {
            var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
                plugins
            }))) : defaultKeys;
            var props = propKeys.reduce((function(acc, key) {
                var valueAsString = (reference.getAttribute("data-tippy-" + key) || "").trim();
                if (!valueAsString) return acc;
                if (key === "content") acc[key] = valueAsString; else try {
                    acc[key] = JSON.parse(valueAsString);
                } catch (e) {
                    acc[key] = valueAsString;
                }
                return acc;
            }), {});
            return props;
        }
        function evaluateProps(reference, props) {
            var out = Object.assign({}, props, {
                content: invokeWithArgsOrReturn(props.content, [ reference ])
            }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
            out.aria = Object.assign({}, defaultProps.aria, out.aria);
            out.aria = {
                expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
                content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
            };
            return out;
        }
        var innerHTML = function innerHTML() {
            return "innerHTML";
        };
        function dangerouslySetInnerHTML(element, html) {
            element[innerHTML()] = html;
        }
        function createArrowElement(value) {
            var arrow = div();
            if (value === true) arrow.className = ARROW_CLASS; else {
                arrow.className = SVG_ARROW_CLASS;
                if (tippy_esm_isElement(value)) arrow.appendChild(value); else dangerouslySetInnerHTML(arrow, value);
            }
            return arrow;
        }
        function setContent(content, props) {
            if (tippy_esm_isElement(props.content)) {
                dangerouslySetInnerHTML(content, "");
                content.appendChild(props.content);
            } else if (typeof props.content !== "function") if (props.allowHTML) dangerouslySetInnerHTML(content, props.content); else content.textContent = props.content;
        }
        function getChildren(popper) {
            var box = popper.firstElementChild;
            var boxChildren = arrayFrom(box.children);
            return {
                box,
                content: boxChildren.find((function(node) {
                    return node.classList.contains(CONTENT_CLASS);
                })),
                arrow: boxChildren.find((function(node) {
                    return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
                })),
                backdrop: boxChildren.find((function(node) {
                    return node.classList.contains(BACKDROP_CLASS);
                }))
            };
        }
        function render(instance) {
            var popper = div();
            var box = div();
            box.className = BOX_CLASS;
            box.setAttribute("data-state", "hidden");
            box.setAttribute("tabindex", "-1");
            var content = div();
            content.className = CONTENT_CLASS;
            content.setAttribute("data-state", "hidden");
            setContent(content, instance.props);
            popper.appendChild(box);
            box.appendChild(content);
            onUpdate(instance.props, instance.props);
            function onUpdate(prevProps, nextProps) {
                var _getChildren = getChildren(popper), box = _getChildren.box, content = _getChildren.content, arrow = _getChildren.arrow;
                if (nextProps.theme) box.setAttribute("data-theme", nextProps.theme); else box.removeAttribute("data-theme");
                if (typeof nextProps.animation === "string") box.setAttribute("data-animation", nextProps.animation); else box.removeAttribute("data-animation");
                if (nextProps.inertia) box.setAttribute("data-inertia", ""); else box.removeAttribute("data-inertia");
                box.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
                if (nextProps.role) box.setAttribute("role", nextProps.role); else box.removeAttribute("role");
                if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) setContent(content, instance.props);
                if (nextProps.arrow) {
                    if (!arrow) box.appendChild(createArrowElement(nextProps.arrow)); else if (prevProps.arrow !== nextProps.arrow) {
                        box.removeChild(arrow);
                        box.appendChild(createArrowElement(nextProps.arrow));
                    }
                } else if (arrow) box.removeChild(arrow);
            }
            return {
                popper,
                onUpdate
            };
        }
        render.$$tippy = true;
        var idCounter = 1;
        var mouseMoveListeners = [];
        var mountedInstances = [];
        function createTippy(reference, passedProps) {
            var props = evaluateProps(reference, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
            var showTimeout;
            var hideTimeout;
            var scheduleHideAnimationFrame;
            var isVisibleFromClick = false;
            var didHideDueToDocumentMouseDown = false;
            var didTouchMove = false;
            var ignoreOnFirstUpdate = false;
            var lastTriggerEvent;
            var currentTransitionEndListener;
            var onFirstUpdate;
            var listeners = [];
            var debouncedOnMouseMove = tippy_esm_debounce(onMouseMove, props.interactiveDebounce);
            var currentTarget;
            var id = idCounter++;
            var popperInstance = null;
            var plugins = unique(props.plugins);
            var state = {
                isEnabled: true,
                isVisible: false,
                isDestroyed: false,
                isMounted: false,
                isShown: false
            };
            var instance = {
                id,
                reference,
                popper: div(),
                popperInstance,
                props,
                state,
                plugins,
                clearDelayTimeouts,
                setProps,
                setContent,
                show,
                hide,
                hideWithInteractivity,
                enable,
                disable,
                unmount,
                destroy
            };
            if (!props.render) {
                if (false) ;
                return instance;
            }
            var _props$render = props.render(instance), popper = _props$render.popper, onUpdate = _props$render.onUpdate;
            popper.setAttribute("data-tippy-root", "");
            popper.id = "tippy-" + instance.id;
            instance.popper = popper;
            reference._tippy = instance;
            popper._tippy = instance;
            var pluginsHooks = plugins.map((function(plugin) {
                return plugin.fn(instance);
            }));
            var hasAriaExpanded = reference.hasAttribute("aria-expanded");
            addListeners();
            handleAriaExpandedAttribute();
            handleStyles();
            invokeHook("onCreate", [ instance ]);
            if (props.showOnCreate) scheduleShow();
            popper.addEventListener("mouseenter", (function() {
                if (instance.props.interactive && instance.state.isVisible) instance.clearDelayTimeouts();
            }));
            popper.addEventListener("mouseleave", (function() {
                if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) getDocument().addEventListener("mousemove", debouncedOnMouseMove);
            }));
            return instance;
            function getNormalizedTouchSettings() {
                var touch = instance.props.touch;
                return Array.isArray(touch) ? touch : [ touch, 0 ];
            }
            function getIsCustomTouchBehavior() {
                return getNormalizedTouchSettings()[0] === "hold";
            }
            function getIsDefaultRenderFn() {
                var _instance$props$rende;
                return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
            }
            function getCurrentTarget() {
                return currentTarget || reference;
            }
            function getDocument() {
                var parent = getCurrentTarget().parentNode;
                return parent ? getOwnerDocument(parent) : document;
            }
            function getDefaultTemplateChildren() {
                return getChildren(popper);
            }
            function getDelay(isShow) {
                if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") return 0;
                return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
            }
            function handleStyles(fromHide) {
                if (fromHide === void 0) fromHide = false;
                popper.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
                popper.style.zIndex = "" + instance.props.zIndex;
            }
            function invokeHook(hook, args, shouldInvokePropsHook) {
                if (shouldInvokePropsHook === void 0) shouldInvokePropsHook = true;
                pluginsHooks.forEach((function(pluginHooks) {
                    if (pluginHooks[hook]) pluginHooks[hook].apply(pluginHooks, args);
                }));
                if (shouldInvokePropsHook) {
                    var _instance$props;
                    (_instance$props = instance.props)[hook].apply(_instance$props, args);
                }
            }
            function handleAriaContentAttribute() {
                var aria = instance.props.aria;
                if (!aria.content) return;
                var attr = "aria-" + aria.content;
                var id = popper.id;
                var nodes = normalizeToArray(instance.props.triggerTarget || reference);
                nodes.forEach((function(node) {
                    var currentValue = node.getAttribute(attr);
                    if (instance.state.isVisible) node.setAttribute(attr, currentValue ? currentValue + " " + id : id); else {
                        var nextValue = currentValue && currentValue.replace(id, "").trim();
                        if (nextValue) node.setAttribute(attr, nextValue); else node.removeAttribute(attr);
                    }
                }));
            }
            function handleAriaExpandedAttribute() {
                if (hasAriaExpanded || !instance.props.aria.expanded) return;
                var nodes = normalizeToArray(instance.props.triggerTarget || reference);
                nodes.forEach((function(node) {
                    if (instance.props.interactive) node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false"); else node.removeAttribute("aria-expanded");
                }));
            }
            function cleanupInteractiveMouseListeners() {
                getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
                mouseMoveListeners = mouseMoveListeners.filter((function(listener) {
                    return listener !== debouncedOnMouseMove;
                }));
            }
            function onDocumentPress(event) {
                if (currentInput.isTouch) if (didTouchMove || event.type === "mousedown") return;
                var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
                if (instance.props.interactive && actualContains(popper, actualTarget)) return;
                if (normalizeToArray(instance.props.triggerTarget || reference).some((function(el) {
                    return actualContains(el, actualTarget);
                }))) {
                    if (currentInput.isTouch) return;
                    if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) return;
                } else invokeHook("onClickOutside", [ instance, event ]);
                if (instance.props.hideOnClick === true) {
                    instance.clearDelayTimeouts();
                    instance.hide();
                    didHideDueToDocumentMouseDown = true;
                    setTimeout((function() {
                        didHideDueToDocumentMouseDown = false;
                    }));
                    if (!instance.state.isMounted) removeDocumentPress();
                }
            }
            function onTouchMove() {
                didTouchMove = true;
            }
            function onTouchStart() {
                didTouchMove = false;
            }
            function addDocumentPress() {
                var doc = getDocument();
                doc.addEventListener("mousedown", onDocumentPress, true);
                doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
                doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
                doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
            }
            function removeDocumentPress() {
                var doc = getDocument();
                doc.removeEventListener("mousedown", onDocumentPress, true);
                doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
                doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
                doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
            }
            function onTransitionedOut(duration, callback) {
                onTransitionEnd(duration, (function() {
                    if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) callback();
                }));
            }
            function onTransitionedIn(duration, callback) {
                onTransitionEnd(duration, callback);
            }
            function onTransitionEnd(duration, callback) {
                var box = getDefaultTemplateChildren().box;
                function listener(event) {
                    if (event.target === box) {
                        updateTransitionEndListener(box, "remove", listener);
                        callback();
                    }
                }
                if (duration === 0) return callback();
                updateTransitionEndListener(box, "remove", currentTransitionEndListener);
                updateTransitionEndListener(box, "add", listener);
                currentTransitionEndListener = listener;
            }
            function on(eventType, handler, options) {
                if (options === void 0) options = false;
                var nodes = normalizeToArray(instance.props.triggerTarget || reference);
                nodes.forEach((function(node) {
                    node.addEventListener(eventType, handler, options);
                    listeners.push({
                        node,
                        eventType,
                        handler,
                        options
                    });
                }));
            }
            function addListeners() {
                if (getIsCustomTouchBehavior()) {
                    on("touchstart", onTrigger, {
                        passive: true
                    });
                    on("touchend", onMouseLeave, {
                        passive: true
                    });
                }
                splitBySpaces(instance.props.trigger).forEach((function(eventType) {
                    if (eventType === "manual") return;
                    on(eventType, onTrigger);
                    switch (eventType) {
                      case "mouseenter":
                        on("mouseleave", onMouseLeave);
                        break;

                      case "focus":
                        on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
                        break;

                      case "focusin":
                        on("focusout", onBlurOrFocusOut);
                        break;
                    }
                }));
            }
            function removeListeners() {
                listeners.forEach((function(_ref) {
                    var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
                    node.removeEventListener(eventType, handler, options);
                }));
                listeners = [];
            }
            function onTrigger(event) {
                var _lastTriggerEvent;
                var shouldScheduleClickHide = false;
                if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) return;
                var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
                lastTriggerEvent = event;
                currentTarget = event.currentTarget;
                handleAriaExpandedAttribute();
                if (!instance.state.isVisible && isMouseEvent(event)) mouseMoveListeners.forEach((function(listener) {
                    return listener(event);
                }));
                if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) shouldScheduleClickHide = true; else scheduleShow(event);
                if (event.type === "click") isVisibleFromClick = !shouldScheduleClickHide;
                if (shouldScheduleClickHide && !wasFocused) scheduleHide(event);
            }
            function onMouseMove(event) {
                var target = event.target;
                var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);
                if (event.type === "mousemove" && isCursorOverReferenceOrPopper) return;
                var popperTreeData = getNestedPopperTree().concat(popper).map((function(popper) {
                    var _instance$popperInsta;
                    var instance = popper._tippy;
                    var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;
                    if (state) return {
                        popperRect: popper.getBoundingClientRect(),
                        popperState: state,
                        props
                    };
                    return null;
                })).filter(Boolean);
                if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
                    cleanupInteractiveMouseListeners();
                    scheduleHide(event);
                }
            }
            function onMouseLeave(event) {
                var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
                if (shouldBail) return;
                if (instance.props.interactive) {
                    instance.hideWithInteractivity(event);
                    return;
                }
                scheduleHide(event);
            }
            function onBlurOrFocusOut(event) {
                if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) return;
                if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) return;
                scheduleHide(event);
            }
            function isEventListenerStopped(event) {
                return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
            }
            function createPopperInstance() {
                destroyPopperInstance();
                var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
                var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
                var computedReference = getReferenceClientRect ? {
                    getBoundingClientRect: getReferenceClientRect,
                    contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
                } : reference;
                var tippyModifier = {
                    name: "$$tippy",
                    enabled: true,
                    phase: "beforeWrite",
                    requires: [ "computeStyles" ],
                    fn: function fn(_ref2) {
                        var state = _ref2.state;
                        if (getIsDefaultRenderFn()) {
                            var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
                            [ "placement", "reference-hidden", "escaped" ].forEach((function(attr) {
                                if (attr === "placement") box.setAttribute("data-placement", state.placement); else if (state.attributes.popper["data-popper-" + attr]) box.setAttribute("data-" + attr, ""); else box.removeAttribute("data-" + attr);
                            }));
                            state.attributes.popper = {};
                        }
                    }
                };
                var modifiers = [ {
                    name: "offset",
                    options: {
                        offset
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        padding: {
                            top: 2,
                            bottom: 2,
                            left: 5,
                            right: 5
                        }
                    }
                }, {
                    name: "flip",
                    options: {
                        padding: 5
                    }
                }, {
                    name: "computeStyles",
                    options: {
                        adaptive: !moveTransition
                    }
                }, tippyModifier ];
                if (getIsDefaultRenderFn() && arrow) modifiers.push({
                    name: "arrow",
                    options: {
                        element: arrow,
                        padding: 3
                    }
                });
                modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
                instance.popperInstance = popper_createPopper(computedReference, popper, Object.assign({}, popperOptions, {
                    placement,
                    onFirstUpdate,
                    modifiers
                }));
            }
            function destroyPopperInstance() {
                if (instance.popperInstance) {
                    instance.popperInstance.destroy();
                    instance.popperInstance = null;
                }
            }
            function mount() {
                var appendTo = instance.props.appendTo;
                var parentNode;
                var node = getCurrentTarget();
                if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") parentNode = node.parentNode; else parentNode = invokeWithArgsOrReturn(appendTo, [ node ]);
                if (!parentNode.contains(popper)) parentNode.appendChild(popper);
                instance.state.isMounted = true;
                createPopperInstance();
                if (false) ;
            }
            function getNestedPopperTree() {
                return arrayFrom(popper.querySelectorAll("[data-tippy-root]"));
            }
            function scheduleShow(event) {
                instance.clearDelayTimeouts();
                if (event) invokeHook("onTrigger", [ instance, event ]);
                addDocumentPress();
                var delay = getDelay(true);
                var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
                if (currentInput.isTouch && touchValue === "hold" && touchDelay) delay = touchDelay;
                if (delay) showTimeout = setTimeout((function() {
                    instance.show();
                }), delay); else instance.show();
            }
            function scheduleHide(event) {
                instance.clearDelayTimeouts();
                invokeHook("onUntrigger", [ instance, event ]);
                if (!instance.state.isVisible) {
                    removeDocumentPress();
                    return;
                }
                if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && [ "mouseleave", "mousemove" ].indexOf(event.type) >= 0 && isVisibleFromClick) return;
                var delay = getDelay(false);
                if (delay) hideTimeout = setTimeout((function() {
                    if (instance.state.isVisible) instance.hide();
                }), delay); else scheduleHideAnimationFrame = requestAnimationFrame((function() {
                    instance.hide();
                }));
            }
            function enable() {
                instance.state.isEnabled = true;
            }
            function disable() {
                instance.hide();
                instance.state.isEnabled = false;
            }
            function clearDelayTimeouts() {
                clearTimeout(showTimeout);
                clearTimeout(hideTimeout);
                cancelAnimationFrame(scheduleHideAnimationFrame);
            }
            function setProps(partialProps) {
                if (false) ;
                if (instance.state.isDestroyed) return;
                invokeHook("onBeforeUpdate", [ instance, partialProps ]);
                removeListeners();
                var prevProps = instance.props;
                var nextProps = evaluateProps(reference, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
                    ignoreAttributes: true
                }));
                instance.props = nextProps;
                addListeners();
                if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
                    cleanupInteractiveMouseListeners();
                    debouncedOnMouseMove = tippy_esm_debounce(onMouseMove, nextProps.interactiveDebounce);
                }
                if (prevProps.triggerTarget && !nextProps.triggerTarget) normalizeToArray(prevProps.triggerTarget).forEach((function(node) {
                    node.removeAttribute("aria-expanded");
                })); else if (nextProps.triggerTarget) reference.removeAttribute("aria-expanded");
                handleAriaExpandedAttribute();
                handleStyles();
                if (onUpdate) onUpdate(prevProps, nextProps);
                if (instance.popperInstance) {
                    createPopperInstance();
                    getNestedPopperTree().forEach((function(nestedPopper) {
                        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
                    }));
                }
                invokeHook("onAfterUpdate", [ instance, partialProps ]);
            }
            function setContent(content) {
                instance.setProps({
                    content
                });
            }
            function show() {
                if (false) ;
                var isAlreadyVisible = instance.state.isVisible;
                var isDestroyed = instance.state.isDestroyed;
                var isDisabled = !instance.state.isEnabled;
                var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
                var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
                if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) return;
                if (getCurrentTarget().hasAttribute("disabled")) return;
                invokeHook("onShow", [ instance ], false);
                if (instance.props.onShow(instance) === false) return;
                instance.state.isVisible = true;
                if (getIsDefaultRenderFn()) popper.style.visibility = "visible";
                handleStyles();
                addDocumentPress();
                if (!instance.state.isMounted) popper.style.transition = "none";
                if (getIsDefaultRenderFn()) {
                    var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
                    setTransitionDuration([ box, content ], 0);
                }
                onFirstUpdate = function onFirstUpdate() {
                    var _instance$popperInsta2;
                    if (!instance.state.isVisible || ignoreOnFirstUpdate) return;
                    ignoreOnFirstUpdate = true;
                    void popper.offsetHeight;
                    popper.style.transition = instance.props.moveTransition;
                    if (getIsDefaultRenderFn() && instance.props.animation) {
                        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
                        setTransitionDuration([ _box, _content ], duration);
                        setVisibilityState([ _box, _content ], "visible");
                    }
                    handleAriaContentAttribute();
                    handleAriaExpandedAttribute();
                    pushIfUnique(mountedInstances, instance);
                    (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
                    invokeHook("onMount", [ instance ]);
                    if (instance.props.animation && getIsDefaultRenderFn()) onTransitionedIn(duration, (function() {
                        instance.state.isShown = true;
                        invokeHook("onShown", [ instance ]);
                    }));
                };
                mount();
            }
            function hide() {
                if (false) ;
                var isAlreadyHidden = !instance.state.isVisible;
                var isDestroyed = instance.state.isDestroyed;
                var isDisabled = !instance.state.isEnabled;
                var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
                if (isAlreadyHidden || isDestroyed || isDisabled) return;
                invokeHook("onHide", [ instance ], false);
                if (instance.props.onHide(instance) === false) return;
                instance.state.isVisible = false;
                instance.state.isShown = false;
                ignoreOnFirstUpdate = false;
                isVisibleFromClick = false;
                if (getIsDefaultRenderFn()) popper.style.visibility = "hidden";
                cleanupInteractiveMouseListeners();
                removeDocumentPress();
                handleStyles(true);
                if (getIsDefaultRenderFn()) {
                    var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
                    if (instance.props.animation) {
                        setTransitionDuration([ box, content ], duration);
                        setVisibilityState([ box, content ], "hidden");
                    }
                }
                handleAriaContentAttribute();
                handleAriaExpandedAttribute();
                if (instance.props.animation) {
                    if (getIsDefaultRenderFn()) onTransitionedOut(duration, instance.unmount);
                } else instance.unmount();
            }
            function hideWithInteractivity(event) {
                if (false) ;
                getDocument().addEventListener("mousemove", debouncedOnMouseMove);
                pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
                debouncedOnMouseMove(event);
            }
            function unmount() {
                if (false) ;
                if (instance.state.isVisible) instance.hide();
                if (!instance.state.isMounted) return;
                destroyPopperInstance();
                getNestedPopperTree().forEach((function(nestedPopper) {
                    nestedPopper._tippy.unmount();
                }));
                if (popper.parentNode) popper.parentNode.removeChild(popper);
                mountedInstances = mountedInstances.filter((function(i) {
                    return i !== instance;
                }));
                instance.state.isMounted = false;
                invokeHook("onHidden", [ instance ]);
            }
            function destroy() {
                if (false) ;
                if (instance.state.isDestroyed) return;
                instance.clearDelayTimeouts();
                instance.unmount();
                removeListeners();
                delete reference._tippy;
                instance.state.isDestroyed = true;
                invokeHook("onDestroy", [ instance ]);
            }
        }
        function tippy(targets, optionalProps) {
            if (optionalProps === void 0) optionalProps = {};
            var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
            if (false) ;
            bindGlobalEventListeners();
            var passedProps = Object.assign({}, optionalProps, {
                plugins
            });
            var elements = getArrayOfElements(targets);
            if (false) ;
            var instances = elements.reduce((function(acc, reference) {
                var instance = reference && createTippy(reference, passedProps);
                if (instance) acc.push(instance);
                return acc;
            }), []);
            return tippy_esm_isElement(targets) ? instances[0] : instances;
        }
        tippy.defaultProps = defaultProps;
        tippy.setDefaultProps = setDefaultProps;
        tippy.currentInput = currentInput;
        Object.assign({}, modifiers_applyStyles, {
            effect: function effect(_ref) {
                var state = _ref.state;
                var initialStyles = {
                    popper: {
                        position: state.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
                Object.assign(state.elements.popper.style, initialStyles.popper);
                state.styles = initialStyles;
                if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
            }
        });
        tippy.setDefaultProps({
            render
        });
        const tippy_esm = tippy;
        flsModules.tippy = tippy_esm("[data-tippy-content]", {});
        var smooth_scroll_polyfills_min = __webpack_require__(2);
        let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    const headerElement = document.querySelector(headerItem);
                    if (!headerElement.classList.contains("_header-scroll")) {
                        headerElement.style.cssText = `transition-duration: 0s;`;
                        headerElement.classList.add("_header-scroll");
                        headerItemHeight = headerElement.offsetHeight;
                        headerElement.classList.remove("_header-scroll");
                        setTimeout((() => {
                            headerElement.style.cssText = ``;
                        }), 0);
                    } else headerItemHeight = headerElement.offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if (typeof smooth_scroll_polyfills_min !== "undefined") (new smooth_scroll_polyfills_min).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...їдемо до ${targetBlock}`);
            } else FLS(`[gotoBlock]: Йой... Такого блоку немає на сторінці: ${targetBlock}`);
        };
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if (e.type === "click") {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        if (flsModules.fullpage) {
                            const fullpageSection = document.querySelector(`${gotoLinkSelector}`).closest("[data-fp-section]");
                            const fullpageSectionId = fullpageSection ? +fullpageSection.dataset.fpId : null;
                            if (fullpageSectionId !== null) {
                                flsModules.fullpage.switchingSection(fullpageSectionId);
                                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                            }
                        } else gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if (e.type === "watcherCallback" && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if (targetElement.dataset.watch === "navigator") {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        /* flatpickr v4.6.13,, @license MIT */
        !function(e, n) {
            "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (e = "undefined" != typeof globalThis ? globalThis : e || self).flatpickr = n();
        }(void 0, (function() {
            "use strict";
            var e = function() {
                return (e = Object.assign || function(e) {
                    for (var n, t = 1, a = arguments.length; t < a; t++) for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                    return e;
                }).apply(this, arguments);
            };
            function n() {
                for (var e = 0, n = 0, t = arguments.length; n < t; n++) e += arguments[n].length;
                var a = Array(e), i = 0;
                for (n = 0; n < t; n++) for (var o = arguments[n], r = 0, l = o.length; r < l; r++, 
                i++) a[i] = o[r];
                return a;
            }
            var t = [ "onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition" ], a = {
                _disable: [],
                allowInput: !1,
                allowInvalidPreload: !1,
                altFormat: "F j, Y",
                altInput: !1,
                altInputClass: "form-control input",
                animate: "object" == typeof window && -1 === window.navigator.userAgent.indexOf("MSIE"),
                ariaDateFormat: "F j, Y",
                autoFillDefaultTime: !0,
                clickOpens: !0,
                closeOnSelect: !0,
                conjunction: ", ",
                dateFormat: "Y-m-d",
                defaultHour: 12,
                defaultMinute: 0,
                defaultSeconds: 0,
                disable: [],
                disableMobile: !1,
                enableSeconds: !1,
                enableTime: !1,
                errorHandler: function(e) {
                    return "undefined" != typeof console && console.warn(e);
                },
                getWeek: function(e) {
                    var n = new Date(e.getTime());
                    n.setHours(0, 0, 0, 0), n.setDate(n.getDate() + 3 - (n.getDay() + 6) % 7);
                    var t = new Date(n.getFullYear(), 0, 4);
                    return 1 + Math.round(((n.getTime() - t.getTime()) / 864e5 - 3 + (t.getDay() + 6) % 7) / 7);
                },
                hourIncrement: 1,
                ignoredFocusElements: [],
                inline: !1,
                locale: "default",
                minuteIncrement: 5,
                mode: "single",
                monthSelectorType: "dropdown",
                nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
                noCalendar: !1,
                now: new Date,
                onChange: [],
                onClose: [],
                onDayCreate: [],
                onDestroy: [],
                onKeyDown: [],
                onMonthChange: [],
                onOpen: [],
                onParseConfig: [],
                onReady: [],
                onValueUpdate: [],
                onYearChange: [],
                onPreCalendarPosition: [],
                plugins: [],
                position: "auto",
                positionElement: void 0,
                prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
                shorthandCurrentMonth: !1,
                showMonths: 1,
                static: !1,
                time_24hr: !1,
                weekNumbers: !1,
                wrap: !1
            }, i = {
                weekdays: {
                    shorthand: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
                    longhand: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
                },
                months: {
                    shorthand: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
                    longhand: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
                },
                daysInMonth: [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ],
                firstDayOfWeek: 0,
                ordinal: function(e) {
                    var n = e % 100;
                    if (n > 3 && n < 21) return "th";
                    switch (n % 10) {
                      case 1:
                        return "st";

                      case 2:
                        return "nd";

                      case 3:
                        return "rd";

                      default:
                        return "th";
                    }
                },
                rangeSeparator: " to ",
                weekAbbreviation: "Wk",
                scrollTitle: "Scroll to increment",
                toggleTitle: "Click to toggle",
                amPM: [ "AM", "PM" ],
                yearAriaLabel: "Year",
                monthAriaLabel: "Month",
                hourAriaLabel: "Hour",
                minuteAriaLabel: "Minute",
                time_24hr: !1
            }, o = function(e, n) {
                return void 0 === n && (n = 2), ("000" + e).slice(-1 * n);
            }, r = function(e) {
                return !0 === e ? 1 : 0;
            };
            function l(e, n) {
                var t;
                return function() {
                    var a = this, i = arguments;
                    clearTimeout(t), t = setTimeout((function() {
                        return e.apply(a, i);
                    }), n);
                };
            }
            var c = function(e) {
                return e instanceof Array ? e : [ e ];
            };
            function s(e, n, t) {
                if (!0 === t) return e.classList.add(n);
                e.classList.remove(n);
            }
            function d(e, n, t) {
                var a = window.document.createElement(e);
                return n = n || "", t = t || "", a.className = n, void 0 !== t && (a.textContent = t), 
                a;
            }
            function u(e) {
                for (;e.firstChild; ) e.removeChild(e.firstChild);
            }
            function f(e, n) {
                return n(e) ? e : e.parentNode ? f(e.parentNode, n) : void 0;
            }
            function m(e, n) {
                var t = d("div", "numInputWrapper"), a = d("input", "numInput " + e), i = d("span", "arrowUp"), o = d("span", "arrowDown");
                if (-1 === navigator.userAgent.indexOf("MSIE 9.0") ? a.type = "number" : (a.type = "text", 
                a.pattern = "\\d*"), void 0 !== n) for (var r in n) a.setAttribute(r, n[r]);
                return t.appendChild(a), t.appendChild(i), t.appendChild(o), t;
            }
            function g(e) {
                try {
                    return "function" == typeof e.composedPath ? e.composedPath()[0] : e.target;
                } catch (n) {
                    return e.target;
                }
            }
            var p = function() {}, h = function(e, n, t) {
                return t.months[n ? "shorthand" : "longhand"][e];
            }, v = {
                D: p,
                F: function(e, n, t) {
                    e.setMonth(t.months.longhand.indexOf(n));
                },
                G: function(e, n) {
                    e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(n));
                },
                H: function(e, n) {
                    e.setHours(parseFloat(n));
                },
                J: function(e, n) {
                    e.setDate(parseFloat(n));
                },
                K: function(e, n, t) {
                    e.setHours(e.getHours() % 12 + 12 * r(new RegExp(t.amPM[1], "i").test(n)));
                },
                M: function(e, n, t) {
                    e.setMonth(t.months.shorthand.indexOf(n));
                },
                S: function(e, n) {
                    e.setSeconds(parseFloat(n));
                },
                U: function(e, n) {
                    return new Date(1e3 * parseFloat(n));
                },
                W: function(e, n, t) {
                    var a = parseInt(n), i = new Date(e.getFullYear(), 0, 2 + 7 * (a - 1), 0, 0, 0, 0);
                    return i.setDate(i.getDate() - i.getDay() + t.firstDayOfWeek), i;
                },
                Y: function(e, n) {
                    e.setFullYear(parseFloat(n));
                },
                Z: function(e, n) {
                    return new Date(n);
                },
                d: function(e, n) {
                    e.setDate(parseFloat(n));
                },
                h: function(e, n) {
                    e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(n));
                },
                i: function(e, n) {
                    e.setMinutes(parseFloat(n));
                },
                j: function(e, n) {
                    e.setDate(parseFloat(n));
                },
                l: p,
                m: function(e, n) {
                    e.setMonth(parseFloat(n) - 1);
                },
                n: function(e, n) {
                    e.setMonth(parseFloat(n) - 1);
                },
                s: function(e, n) {
                    e.setSeconds(parseFloat(n));
                },
                u: function(e, n) {
                    return new Date(parseFloat(n));
                },
                w: p,
                y: function(e, n) {
                    e.setFullYear(2e3 + parseFloat(n));
                }
            }, D = {
                D: "",
                F: "",
                G: "(\\d\\d|\\d)",
                H: "(\\d\\d|\\d)",
                J: "(\\d\\d|\\d)\\w+",
                K: "",
                M: "",
                S: "(\\d\\d|\\d)",
                U: "(.+)",
                W: "(\\d\\d|\\d)",
                Y: "(\\d{4})",
                Z: "(.+)",
                d: "(\\d\\d|\\d)",
                h: "(\\d\\d|\\d)",
                i: "(\\d\\d|\\d)",
                j: "(\\d\\d|\\d)",
                l: "",
                m: "(\\d\\d|\\d)",
                n: "(\\d\\d|\\d)",
                s: "(\\d\\d|\\d)",
                u: "(.+)",
                w: "(\\d\\d|\\d)",
                y: "(\\d{2})"
            }, w = {
                Z: function(e) {
                    return e.toISOString();
                },
                D: function(e, n, t) {
                    return n.weekdays.shorthand[w.w(e, n, t)];
                },
                F: function(e, n, t) {
                    return h(w.n(e, n, t) - 1, !1, n);
                },
                G: function(e, n, t) {
                    return o(w.h(e, n, t));
                },
                H: function(e) {
                    return o(e.getHours());
                },
                J: function(e, n) {
                    return void 0 !== n.ordinal ? e.getDate() + n.ordinal(e.getDate()) : e.getDate();
                },
                K: function(e, n) {
                    return n.amPM[r(e.getHours() > 11)];
                },
                M: function(e, n) {
                    return h(e.getMonth(), !0, n);
                },
                S: function(e) {
                    return o(e.getSeconds());
                },
                U: function(e) {
                    return e.getTime() / 1e3;
                },
                W: function(e, n, t) {
                    return t.getWeek(e);
                },
                Y: function(e) {
                    return o(e.getFullYear(), 4);
                },
                d: function(e) {
                    return o(e.getDate());
                },
                h: function(e) {
                    return e.getHours() % 12 ? e.getHours() % 12 : 12;
                },
                i: function(e) {
                    return o(e.getMinutes());
                },
                j: function(e) {
                    return e.getDate();
                },
                l: function(e, n) {
                    return n.weekdays.longhand[e.getDay()];
                },
                m: function(e) {
                    return o(e.getMonth() + 1);
                },
                n: function(e) {
                    return e.getMonth() + 1;
                },
                s: function(e) {
                    return e.getSeconds();
                },
                u: function(e) {
                    return e.getTime();
                },
                w: function(e) {
                    return e.getDay();
                },
                y: function(e) {
                    return String(e.getFullYear()).substring(2);
                }
            }, b = function(e) {
                var n = e.config, t = void 0 === n ? a : n, o = e.l10n, r = void 0 === o ? i : o, l = e.isMobile, c = void 0 !== l && l;
                return function(e, n, a) {
                    var i = a || r;
                    return void 0 === t.formatDate || c ? n.split("").map((function(n, a, o) {
                        return w[n] && "\\" !== o[a - 1] ? w[n](e, i, t) : "\\" !== n ? n : "";
                    })).join("") : t.formatDate(e, n, i);
                };
            }, C = function(e) {
                var n = e.config, t = void 0 === n ? a : n, o = e.l10n, r = void 0 === o ? i : o;
                return function(e, n, i, o) {
                    if (0 === e || e) {
                        var l, c = o || r, s = e;
                        if (e instanceof Date) l = new Date(e.getTime()); else if ("string" != typeof e && void 0 !== e.toFixed) l = new Date(e); else if ("string" == typeof e) {
                            var d = n || (t || a).dateFormat, u = String(e).trim();
                            if ("today" === u) l = new Date, i = !0; else if (t && t.parseDate) l = t.parseDate(e, d); else if (/Z$/.test(u) || /GMT$/.test(u)) l = new Date(e); else {
                                for (var f = void 0, m = [], g = 0, p = 0, h = ""; g < d.length; g++) {
                                    var w = d[g], b = "\\" === w, C = "\\" === d[g - 1] || b;
                                    if (D[w] && !C) {
                                        h += D[w];
                                        var M = new RegExp(h).exec(e);
                                        M && (f = !0) && m["Y" !== w ? "push" : "unshift"]({
                                            fn: v[w],
                                            val: M[++p]
                                        });
                                    } else b || (h += ".");
                                }
                                l = t && t.noCalendar ? new Date((new Date).setHours(0, 0, 0, 0)) : new Date((new Date).getFullYear(), 0, 1, 0, 0, 0, 0), 
                                m.forEach((function(e) {
                                    var n = e.fn, t = e.val;
                                    return l = n(l, t, c) || l;
                                })), l = f ? l : void 0;
                            }
                        }
                        if (l instanceof Date && !isNaN(l.getTime())) return !0 === i && l.setHours(0, 0, 0, 0), 
                        l;
                        t.errorHandler(new Error("Invalid date provided: " + s));
                    }
                };
            };
            function M(e, n, t) {
                return void 0 === t && (t = !0), !1 !== t ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(n.getTime()).setHours(0, 0, 0, 0) : e.getTime() - n.getTime();
            }
            var y = function(e, n, t) {
                return 3600 * e + 60 * n + t;
            }, x = 864e5;
            function E(e) {
                var n = e.defaultHour, t = e.defaultMinute, a = e.defaultSeconds;
                if (void 0 !== e.minDate) {
                    var i = e.minDate.getHours(), o = e.minDate.getMinutes(), r = e.minDate.getSeconds();
                    n < i && (n = i), n === i && t < o && (t = o), n === i && t === o && a < r && (a = e.minDate.getSeconds());
                }
                if (void 0 !== e.maxDate) {
                    var l = e.maxDate.getHours(), c = e.maxDate.getMinutes();
                    (n = Math.min(n, l)) === l && (t = Math.min(c, t)), n === l && t === c && (a = e.maxDate.getSeconds());
                }
                return {
                    hours: n,
                    minutes: t,
                    seconds: a
                };
            }
            "function" != typeof Object.assign && (Object.assign = function(e) {
                for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
                if (!e) throw TypeError("Cannot convert undefined or null to object");
                for (var a = function(n) {
                    n && Object.keys(n).forEach((function(t) {
                        return e[t] = n[t];
                    }));
                }, i = 0, o = n; i < o.length; i++) {
                    var r = o[i];
                    a(r);
                }
                return e;
            });
            function k(p, v) {
                var w = {
                    config: e(e({}, a), I.defaultConfig),
                    l10n: i
                };
                function k() {
                    var e;
                    return (null === (e = w.calendarContainer) || void 0 === e ? void 0 : e.getRootNode()).activeElement || document.activeElement;
                }
                function T(e) {
                    return e.bind(w);
                }
                function S() {
                    var e = w.config;
                    !1 === e.weekNumbers && 1 === e.showMonths || !0 !== e.noCalendar && window.requestAnimationFrame((function() {
                        if (void 0 !== w.calendarContainer && (w.calendarContainer.style.visibility = "hidden", 
                        w.calendarContainer.style.display = "block"), void 0 !== w.daysContainer) {
                            var n = (w.days.offsetWidth + 1) * e.showMonths;
                            w.daysContainer.style.width = n + "px", w.calendarContainer.style.width = n + (void 0 !== w.weekWrapper ? w.weekWrapper.offsetWidth : 0) + "px", 
                            w.calendarContainer.style.removeProperty("visibility"), w.calendarContainer.style.removeProperty("display");
                        }
                    }));
                }
                function _(e) {
                    if (0 === w.selectedDates.length) {
                        var n = void 0 === w.config.minDate || M(new Date, w.config.minDate) >= 0 ? new Date : new Date(w.config.minDate.getTime()), t = E(w.config);
                        n.setHours(t.hours, t.minutes, t.seconds, n.getMilliseconds()), w.selectedDates = [ n ], 
                        w.latestSelectedDateObj = n;
                    }
                    void 0 !== e && "blur" !== e.type && function(e) {
                        e.preventDefault();
                        var n = "keydown" === e.type, t = g(e), a = t;
                        void 0 !== w.amPM && t === w.amPM && (w.amPM.textContent = w.l10n.amPM[r(w.amPM.textContent === w.l10n.amPM[0])]);
                        var i = parseFloat(a.getAttribute("min")), l = parseFloat(a.getAttribute("max")), c = parseFloat(a.getAttribute("step")), s = parseInt(a.value, 10), d = e.delta || (n ? 38 === e.which ? 1 : -1 : 0), u = s + c * d;
                        if (void 0 !== a.value && 2 === a.value.length) {
                            var f = a === w.hourElement, m = a === w.minuteElement;
                            u < i ? (u = l + u + r(!f) + (r(f) && r(!w.amPM)), m && L(void 0, -1, w.hourElement)) : u > l && (u = a === w.hourElement ? u - l - r(!w.amPM) : i, 
                            m && L(void 0, 1, w.hourElement)), w.amPM && f && (1 === c ? u + s === 23 : Math.abs(u - s) > c) && (w.amPM.textContent = w.l10n.amPM[r(w.amPM.textContent === w.l10n.amPM[0])]), 
                            a.value = o(u);
                        }
                    }(e);
                    var a = w._input.value;
                    O(), ye(), w._input.value !== a && w._debouncedChange();
                }
                function O() {
                    if (void 0 !== w.hourElement && void 0 !== w.minuteElement) {
                        var e, n, t = (parseInt(w.hourElement.value.slice(-2), 10) || 0) % 24, a = (parseInt(w.minuteElement.value, 10) || 0) % 60, i = void 0 !== w.secondElement ? (parseInt(w.secondElement.value, 10) || 0) % 60 : 0;
                        void 0 !== w.amPM && (e = t, n = w.amPM.textContent, t = e % 12 + 12 * r(n === w.l10n.amPM[1]));
                        var o = void 0 !== w.config.minTime || w.config.minDate && w.minDateHasTime && w.latestSelectedDateObj && 0 === M(w.latestSelectedDateObj, w.config.minDate, !0), l = void 0 !== w.config.maxTime || w.config.maxDate && w.maxDateHasTime && w.latestSelectedDateObj && 0 === M(w.latestSelectedDateObj, w.config.maxDate, !0);
                        if (void 0 !== w.config.maxTime && void 0 !== w.config.minTime && w.config.minTime > w.config.maxTime) {
                            var c = y(w.config.minTime.getHours(), w.config.minTime.getMinutes(), w.config.minTime.getSeconds()), s = y(w.config.maxTime.getHours(), w.config.maxTime.getMinutes(), w.config.maxTime.getSeconds()), d = y(t, a, i);
                            if (d > s && d < c) {
                                var u = function(e) {
                                    var n = Math.floor(e / 3600), t = (e - 3600 * n) / 60;
                                    return [ n, t, e - 3600 * n - 60 * t ];
                                }(c);
                                t = u[0], a = u[1], i = u[2];
                            }
                        } else {
                            if (l) {
                                var f = void 0 !== w.config.maxTime ? w.config.maxTime : w.config.maxDate;
                                (t = Math.min(t, f.getHours())) === f.getHours() && (a = Math.min(a, f.getMinutes())), 
                                a === f.getMinutes() && (i = Math.min(i, f.getSeconds()));
                            }
                            if (o) {
                                var m = void 0 !== w.config.minTime ? w.config.minTime : w.config.minDate;
                                (t = Math.max(t, m.getHours())) === m.getHours() && a < m.getMinutes() && (a = m.getMinutes()), 
                                a === m.getMinutes() && (i = Math.max(i, m.getSeconds()));
                            }
                        }
                        A(t, a, i);
                    }
                }
                function F(e) {
                    var n = e || w.latestSelectedDateObj;
                    n && n instanceof Date && A(n.getHours(), n.getMinutes(), n.getSeconds());
                }
                function A(e, n, t) {
                    void 0 !== w.latestSelectedDateObj && w.latestSelectedDateObj.setHours(e % 24, n, t || 0, 0), 
                    w.hourElement && w.minuteElement && !w.isMobile && (w.hourElement.value = o(w.config.time_24hr ? e : (12 + e) % 12 + 12 * r(e % 12 == 0)), 
                    w.minuteElement.value = o(n), void 0 !== w.amPM && (w.amPM.textContent = w.l10n.amPM[r(e >= 12)]), 
                    void 0 !== w.secondElement && (w.secondElement.value = o(t)));
                }
                function N(e) {
                    var n = g(e), t = parseInt(n.value) + (e.delta || 0);
                    (t / 1e3 > 1 || "Enter" === e.key && !/[^\d]/.test(t.toString())) && ee(t);
                }
                function P(e, n, t, a) {
                    return n instanceof Array ? n.forEach((function(n) {
                        return P(e, n, t, a);
                    })) : e instanceof Array ? e.forEach((function(e) {
                        return P(e, n, t, a);
                    })) : (e.addEventListener(n, t, a), void w._handlers.push({
                        remove: function() {
                            return e.removeEventListener(n, t, a);
                        }
                    }));
                }
                function Y() {
                    De("onChange");
                }
                function j(e, n) {
                    var t = void 0 !== e ? w.parseDate(e) : w.latestSelectedDateObj || (w.config.minDate && w.config.minDate > w.now ? w.config.minDate : w.config.maxDate && w.config.maxDate < w.now ? w.config.maxDate : w.now), a = w.currentYear, i = w.currentMonth;
                    try {
                        void 0 !== t && (w.currentYear = t.getFullYear(), w.currentMonth = t.getMonth());
                    } catch (e) {
                        e.message = "Invalid date supplied: " + t, w.config.errorHandler(e);
                    }
                    n && w.currentYear !== a && (De("onYearChange"), q()), !n || w.currentYear === a && w.currentMonth === i || De("onMonthChange"), 
                    w.redraw();
                }
                function H(e) {
                    var n = g(e);
                    ~n.className.indexOf("arrow") && L(e, n.classList.contains("arrowUp") ? 1 : -1);
                }
                function L(e, n, t) {
                    var a = e && g(e), i = t || a && a.parentNode && a.parentNode.firstChild, o = we("increment");
                    o.delta = n, i && i.dispatchEvent(o);
                }
                function R(e, n, t, a) {
                    var i = ne(n, !0), o = d("span", e, n.getDate().toString());
                    return o.dateObj = n, o.$i = a, o.setAttribute("aria-label", w.formatDate(n, w.config.ariaDateFormat)), 
                    -1 === e.indexOf("hidden") && 0 === M(n, w.now) && (w.todayDateElem = o, o.classList.add("today"), 
                    o.setAttribute("aria-current", "date")), i ? (o.tabIndex = -1, be(n) && (o.classList.add("selected"), 
                    w.selectedDateElem = o, "range" === w.config.mode && (s(o, "startRange", w.selectedDates[0] && 0 === M(n, w.selectedDates[0], !0)), 
                    s(o, "endRange", w.selectedDates[1] && 0 === M(n, w.selectedDates[1], !0)), "nextMonthDay" === e && o.classList.add("inRange")))) : o.classList.add("flatpickr-disabled"), 
                    "range" === w.config.mode && function(e) {
                        return !("range" !== w.config.mode || w.selectedDates.length < 2) && M(e, w.selectedDates[0]) >= 0 && M(e, w.selectedDates[1]) <= 0;
                    }(n) && !be(n) && o.classList.add("inRange"), w.weekNumbers && 1 === w.config.showMonths && "prevMonthDay" !== e && a % 7 == 6 && w.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + w.config.getWeek(n) + "</span>"), 
                    De("onDayCreate", o), o;
                }
                function W(e) {
                    e.focus(), "range" === w.config.mode && oe(e);
                }
                function B(e) {
                    for (var n = e > 0 ? 0 : w.config.showMonths - 1, t = e > 0 ? w.config.showMonths : -1, a = n; a != t; a += e) for (var i = w.daysContainer.children[a], o = e > 0 ? 0 : i.children.length - 1, r = e > 0 ? i.children.length : -1, l = o; l != r; l += e) {
                        var c = i.children[l];
                        if (-1 === c.className.indexOf("hidden") && ne(c.dateObj)) return c;
                    }
                }
                function J(e, n) {
                    var t = k(), a = te(t || document.body), i = void 0 !== e ? e : a ? t : void 0 !== w.selectedDateElem && te(w.selectedDateElem) ? w.selectedDateElem : void 0 !== w.todayDateElem && te(w.todayDateElem) ? w.todayDateElem : B(n > 0 ? 1 : -1);
                    void 0 === i ? w._input.focus() : a ? function(e, n) {
                        for (var t = -1 === e.className.indexOf("Month") ? e.dateObj.getMonth() : w.currentMonth, a = n > 0 ? w.config.showMonths : -1, i = n > 0 ? 1 : -1, o = t - w.currentMonth; o != a; o += i) for (var r = w.daysContainer.children[o], l = t - w.currentMonth === o ? e.$i + n : n < 0 ? r.children.length - 1 : 0, c = r.children.length, s = l; s >= 0 && s < c && s != (n > 0 ? c : -1); s += i) {
                            var d = r.children[s];
                            if (-1 === d.className.indexOf("hidden") && ne(d.dateObj) && Math.abs(e.$i - s) >= Math.abs(n)) return W(d);
                        }
                        w.changeMonth(i), J(B(i), 0);
                    }(i, n) : W(i);
                }
                function K(e, n) {
                    for (var t = (new Date(e, n, 1).getDay() - w.l10n.firstDayOfWeek + 7) % 7, a = w.utils.getDaysInMonth((n - 1 + 12) % 12, e), i = w.utils.getDaysInMonth(n, e), o = window.document.createDocumentFragment(), r = w.config.showMonths > 1, l = r ? "prevMonthDay hidden" : "prevMonthDay", c = r ? "nextMonthDay hidden" : "nextMonthDay", s = a + 1 - t, u = 0; s <= a; s++, 
                    u++) o.appendChild(R("flatpickr-day " + l, new Date(e, n - 1, s), 0, u));
                    for (s = 1; s <= i; s++, u++) o.appendChild(R("flatpickr-day", new Date(e, n, s), 0, u));
                    for (var f = i + 1; f <= 42 - t && (1 === w.config.showMonths || u % 7 != 0); f++, 
                    u++) o.appendChild(R("flatpickr-day " + c, new Date(e, n + 1, f % i), 0, u));
                    var m = d("div", "dayContainer");
                    return m.appendChild(o), m;
                }
                function U() {
                    if (void 0 !== w.daysContainer) {
                        u(w.daysContainer), w.weekNumbers && u(w.weekNumbers);
                        for (var e = document.createDocumentFragment(), n = 0; n < w.config.showMonths; n++) {
                            var t = new Date(w.currentYear, w.currentMonth, 1);
                            t.setMonth(w.currentMonth + n), e.appendChild(K(t.getFullYear(), t.getMonth()));
                        }
                        w.daysContainer.appendChild(e), w.days = w.daysContainer.firstChild, "range" === w.config.mode && 1 === w.selectedDates.length && oe();
                    }
                }
                function q() {
                    if (!(w.config.showMonths > 1 || "dropdown" !== w.config.monthSelectorType)) {
                        var e = function(e) {
                            return !(void 0 !== w.config.minDate && w.currentYear === w.config.minDate.getFullYear() && e < w.config.minDate.getMonth()) && !(void 0 !== w.config.maxDate && w.currentYear === w.config.maxDate.getFullYear() && e > w.config.maxDate.getMonth());
                        };
                        w.monthsDropdownContainer.tabIndex = -1, w.monthsDropdownContainer.innerHTML = "";
                        for (var n = 0; n < 12; n++) if (e(n)) {
                            var t = d("option", "flatpickr-monthDropdown-month");
                            t.value = new Date(w.currentYear, n).getMonth().toString(), t.textContent = h(n, w.config.shorthandCurrentMonth, w.l10n), 
                            t.tabIndex = -1, w.currentMonth === n && (t.selected = !0), w.monthsDropdownContainer.appendChild(t);
                        }
                    }
                }
                function $() {
                    var e, n = d("div", "flatpickr-month"), t = window.document.createDocumentFragment();
                    w.config.showMonths > 1 || "static" === w.config.monthSelectorType ? e = d("span", "cur-month") : (w.monthsDropdownContainer = d("select", "flatpickr-monthDropdown-months"), 
                    w.monthsDropdownContainer.setAttribute("aria-label", w.l10n.monthAriaLabel), P(w.monthsDropdownContainer, "change", (function(e) {
                        var n = g(e), t = parseInt(n.value, 10);
                        w.changeMonth(t - w.currentMonth), De("onMonthChange");
                    })), q(), e = w.monthsDropdownContainer);
                    var a = m("cur-year", {
                        tabindex: "-1"
                    }), i = a.getElementsByTagName("input")[0];
                    i.setAttribute("aria-label", w.l10n.yearAriaLabel), w.config.minDate && i.setAttribute("min", w.config.minDate.getFullYear().toString()), 
                    w.config.maxDate && (i.setAttribute("max", w.config.maxDate.getFullYear().toString()), 
                    i.disabled = !!w.config.minDate && w.config.minDate.getFullYear() === w.config.maxDate.getFullYear());
                    var o = d("div", "flatpickr-current-month");
                    return o.appendChild(e), o.appendChild(a), t.appendChild(o), n.appendChild(t), {
                        container: n,
                        yearElement: i,
                        monthElement: e
                    };
                }
                function V() {
                    u(w.monthNav), w.monthNav.appendChild(w.prevMonthNav), w.config.showMonths && (w.yearElements = [], 
                    w.monthElements = []);
                    for (var e = w.config.showMonths; e--; ) {
                        var n = $();
                        w.yearElements.push(n.yearElement), w.monthElements.push(n.monthElement), w.monthNav.appendChild(n.container);
                    }
                    w.monthNav.appendChild(w.nextMonthNav);
                }
                function z() {
                    w.weekdayContainer ? u(w.weekdayContainer) : w.weekdayContainer = d("div", "flatpickr-weekdays");
                    for (var e = w.config.showMonths; e--; ) {
                        var n = d("div", "flatpickr-weekdaycontainer");
                        w.weekdayContainer.appendChild(n);
                    }
                    return G(), w.weekdayContainer;
                }
                function G() {
                    if (w.weekdayContainer) {
                        var e = w.l10n.firstDayOfWeek, t = n(w.l10n.weekdays.shorthand);
                        e > 0 && e < t.length && (t = n(t.splice(e, t.length), t.splice(0, e)));
                        for (var a = w.config.showMonths; a--; ) w.weekdayContainer.children[a].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + t.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
                    }
                }
                function Z(e, n) {
                    void 0 === n && (n = !0);
                    var t = n ? e : e - w.currentMonth;
                    t < 0 && !0 === w._hidePrevMonthArrow || t > 0 && !0 === w._hideNextMonthArrow || (w.currentMonth += t, 
                    (w.currentMonth < 0 || w.currentMonth > 11) && (w.currentYear += w.currentMonth > 11 ? 1 : -1, 
                    w.currentMonth = (w.currentMonth + 12) % 12, De("onYearChange"), q()), U(), De("onMonthChange"), 
                    Ce());
                }
                function Q(e) {
                    return w.calendarContainer.contains(e);
                }
                function X(e) {
                    if (w.isOpen && !w.config.inline) {
                        var n = g(e), t = Q(n), a = !(n === w.input || n === w.altInput || w.element.contains(n) || e.path && e.path.indexOf && (~e.path.indexOf(w.input) || ~e.path.indexOf(w.altInput))) && !t && !Q(e.relatedTarget), i = !w.config.ignoredFocusElements.some((function(e) {
                            return e.contains(n);
                        }));
                        a && i && (w.config.allowInput && w.setDate(w._input.value, !1, w.config.altInput ? w.config.altFormat : w.config.dateFormat), 
                        void 0 !== w.timeContainer && void 0 !== w.minuteElement && void 0 !== w.hourElement && "" !== w.input.value && void 0 !== w.input.value && _(), 
                        w.close(), w.config && "range" === w.config.mode && 1 === w.selectedDates.length && w.clear(!1));
                    }
                }
                function ee(e) {
                    if (!(!e || w.config.minDate && e < w.config.minDate.getFullYear() || w.config.maxDate && e > w.config.maxDate.getFullYear())) {
                        var n = e, t = w.currentYear !== n;
                        w.currentYear = n || w.currentYear, w.config.maxDate && w.currentYear === w.config.maxDate.getFullYear() ? w.currentMonth = Math.min(w.config.maxDate.getMonth(), w.currentMonth) : w.config.minDate && w.currentYear === w.config.minDate.getFullYear() && (w.currentMonth = Math.max(w.config.minDate.getMonth(), w.currentMonth)), 
                        t && (w.redraw(), De("onYearChange"), q());
                    }
                }
                function ne(e, n) {
                    var t;
                    void 0 === n && (n = !0);
                    var a = w.parseDate(e, void 0, n);
                    if (w.config.minDate && a && M(a, w.config.minDate, void 0 !== n ? n : !w.minDateHasTime) < 0 || w.config.maxDate && a && M(a, w.config.maxDate, void 0 !== n ? n : !w.maxDateHasTime) > 0) return !1;
                    if (!w.config.enable && 0 === w.config.disable.length) return !0;
                    if (void 0 === a) return !1;
                    for (var i = !!w.config.enable, o = null !== (t = w.config.enable) && void 0 !== t ? t : w.config.disable, r = 0, l = void 0; r < o.length; r++) {
                        if ("function" == typeof (l = o[r]) && l(a)) return i;
                        if (l instanceof Date && void 0 !== a && l.getTime() === a.getTime()) return i;
                        if ("string" == typeof l) {
                            var c = w.parseDate(l, void 0, !0);
                            return c && c.getTime() === a.getTime() ? i : !i;
                        }
                        if ("object" == typeof l && void 0 !== a && l.from && l.to && a.getTime() >= l.from.getTime() && a.getTime() <= l.to.getTime()) return i;
                    }
                    return !i;
                }
                function te(e) {
                    return void 0 !== w.daysContainer && -1 === e.className.indexOf("hidden") && -1 === e.className.indexOf("flatpickr-disabled") && w.daysContainer.contains(e);
                }
                function ae(e) {
                    var n = e.target === w._input, t = w._input.value.trimEnd() !== Me();
                    !n || !t || e.relatedTarget && Q(e.relatedTarget) || w.setDate(w._input.value, !0, e.target === w.altInput ? w.config.altFormat : w.config.dateFormat);
                }
                function ie(e) {
                    var n = g(e), t = w.config.wrap ? p.contains(n) : n === w._input, a = w.config.allowInput, i = w.isOpen && (!a || !t), o = w.config.inline && t && !a;
                    if (13 === e.keyCode && t) {
                        if (a) return w.setDate(w._input.value, !0, n === w.altInput ? w.config.altFormat : w.config.dateFormat), 
                        w.close(), n.blur();
                        w.open();
                    } else if (Q(n) || i || o) {
                        var r = !!w.timeContainer && w.timeContainer.contains(n);
                        switch (e.keyCode) {
                          case 13:
                            r ? (e.preventDefault(), _(), fe()) : me(e);
                            break;

                          case 27:
                            e.preventDefault(), fe();
                            break;

                          case 8:
                          case 46:
                            t && !w.config.allowInput && (e.preventDefault(), w.clear());
                            break;

                          case 37:
                          case 39:
                            if (r || t) w.hourElement && w.hourElement.focus(); else {
                                e.preventDefault();
                                var l = k();
                                if (void 0 !== w.daysContainer && (!1 === a || l && te(l))) {
                                    var c = 39 === e.keyCode ? 1 : -1;
                                    e.ctrlKey ? (e.stopPropagation(), Z(c), J(B(1), 0)) : J(void 0, c);
                                }
                            }
                            break;

                          case 38:
                          case 40:
                            e.preventDefault();
                            var s = 40 === e.keyCode ? 1 : -1;
                            w.daysContainer && void 0 !== n.$i || n === w.input || n === w.altInput ? e.ctrlKey ? (e.stopPropagation(), 
                            ee(w.currentYear - s), J(B(1), 0)) : r || J(void 0, 7 * s) : n === w.currentYearElement ? ee(w.currentYear - s) : w.config.enableTime && (!r && w.hourElement && w.hourElement.focus(), 
                            _(e), w._debouncedChange());
                            break;

                          case 9:
                            if (r) {
                                var d = [ w.hourElement, w.minuteElement, w.secondElement, w.amPM ].concat(w.pluginElements).filter((function(e) {
                                    return e;
                                })), u = d.indexOf(n);
                                if (-1 !== u) {
                                    var f = d[u + (e.shiftKey ? -1 : 1)];
                                    e.preventDefault(), (f || w._input).focus();
                                }
                            } else !w.config.noCalendar && w.daysContainer && w.daysContainer.contains(n) && e.shiftKey && (e.preventDefault(), 
                            w._input.focus());
                        }
                    }
                    if (void 0 !== w.amPM && n === w.amPM) switch (e.key) {
                      case w.l10n.amPM[0].charAt(0):
                      case w.l10n.amPM[0].charAt(0).toLowerCase():
                        w.amPM.textContent = w.l10n.amPM[0], O(), ye();
                        break;

                      case w.l10n.amPM[1].charAt(0):
                      case w.l10n.amPM[1].charAt(0).toLowerCase():
                        w.amPM.textContent = w.l10n.amPM[1], O(), ye();
                    }
                    (t || Q(n)) && De("onKeyDown", e);
                }
                function oe(e, n) {
                    if (void 0 === n && (n = "flatpickr-day"), 1 === w.selectedDates.length && (!e || e.classList.contains(n) && !e.classList.contains("flatpickr-disabled"))) {
                        for (var t = e ? e.dateObj.getTime() : w.days.firstElementChild.dateObj.getTime(), a = w.parseDate(w.selectedDates[0], void 0, !0).getTime(), i = Math.min(t, w.selectedDates[0].getTime()), o = Math.max(t, w.selectedDates[0].getTime()), r = !1, l = 0, c = 0, s = i; s < o; s += x) ne(new Date(s), !0) || (r = r || s > i && s < o, 
                        s < a && (!l || s > l) ? l = s : s > a && (!c || s < c) && (c = s));
                        Array.from(w.rContainer.querySelectorAll("*:nth-child(-n+" + w.config.showMonths + ") > ." + n)).forEach((function(n) {
                            var i, o, s, d = n.dateObj.getTime(), u = l > 0 && d < l || c > 0 && d > c;
                            if (u) return n.classList.add("notAllowed"), void [ "inRange", "startRange", "endRange" ].forEach((function(e) {
                                n.classList.remove(e);
                            }));
                            r && !u || ([ "startRange", "inRange", "endRange", "notAllowed" ].forEach((function(e) {
                                n.classList.remove(e);
                            })), void 0 !== e && (e.classList.add(t <= w.selectedDates[0].getTime() ? "startRange" : "endRange"), 
                            a < t && d === a ? n.classList.add("startRange") : a > t && d === a && n.classList.add("endRange"), 
                            d >= l && (0 === c || d <= c) && (o = a, s = t, (i = d) > Math.min(o, s) && i < Math.max(o, s)) && n.classList.add("inRange")));
                        }));
                    }
                }
                function re() {
                    !w.isOpen || w.config.static || w.config.inline || de();
                }
                function le(e) {
                    return function(n) {
                        var t = w.config["_" + e + "Date"] = w.parseDate(n, w.config.dateFormat), a = w.config["_" + ("min" === e ? "max" : "min") + "Date"];
                        void 0 !== t && (w["min" === e ? "minDateHasTime" : "maxDateHasTime"] = t.getHours() > 0 || t.getMinutes() > 0 || t.getSeconds() > 0), 
                        w.selectedDates && (w.selectedDates = w.selectedDates.filter((function(e) {
                            return ne(e);
                        })), w.selectedDates.length || "min" !== e || F(t), ye()), w.daysContainer && (ue(), 
                        void 0 !== t ? w.currentYearElement[e] = t.getFullYear().toString() : w.currentYearElement.removeAttribute(e), 
                        w.currentYearElement.disabled = !!a && void 0 !== t && a.getFullYear() === t.getFullYear());
                    };
                }
                function ce() {
                    return w.config.wrap ? p.querySelector("[data-input]") : p;
                }
                function se() {
                    "object" != typeof w.config.locale && void 0 === I.l10ns[w.config.locale] && w.config.errorHandler(new Error("flatpickr: invalid locale " + w.config.locale)), 
                    w.l10n = e(e({}, I.l10ns.default), "object" == typeof w.config.locale ? w.config.locale : "default" !== w.config.locale ? I.l10ns[w.config.locale] : void 0), 
                    D.D = "(" + w.l10n.weekdays.shorthand.join("|") + ")", D.l = "(" + w.l10n.weekdays.longhand.join("|") + ")", 
                    D.M = "(" + w.l10n.months.shorthand.join("|") + ")", D.F = "(" + w.l10n.months.longhand.join("|") + ")", 
                    D.K = "(" + w.l10n.amPM[0] + "|" + w.l10n.amPM[1] + "|" + w.l10n.amPM[0].toLowerCase() + "|" + w.l10n.amPM[1].toLowerCase() + ")", 
                    void 0 === e(e({}, v), JSON.parse(JSON.stringify(p.dataset || {}))).time_24hr && void 0 === I.defaultConfig.time_24hr && (w.config.time_24hr = w.l10n.time_24hr), 
                    w.formatDate = b(w), w.parseDate = C({
                        config: w.config,
                        l10n: w.l10n
                    });
                }
                function de(e) {
                    if ("function" != typeof w.config.position) {
                        if (void 0 !== w.calendarContainer) {
                            De("onPreCalendarPosition");
                            var n = e || w._positionElement, t = Array.prototype.reduce.call(w.calendarContainer.children, (function(e, n) {
                                return e + n.offsetHeight;
                            }), 0), a = w.calendarContainer.offsetWidth, i = w.config.position.split(" "), o = i[0], r = i.length > 1 ? i[1] : null, l = n.getBoundingClientRect(), c = window.innerHeight - l.bottom, d = "above" === o || "below" !== o && c < t && l.top > t, u = window.pageYOffset + l.top + (d ? -t - 2 : n.offsetHeight + 2);
                            if (s(w.calendarContainer, "arrowTop", !d), s(w.calendarContainer, "arrowBottom", d), 
                            !w.config.inline) {
                                var f = window.pageXOffset + l.left, m = !1, g = !1;
                                "center" === r ? (f -= (a - l.width) / 2, m = !0) : "right" === r && (f -= a - l.width, 
                                g = !0), s(w.calendarContainer, "arrowLeft", !m && !g), s(w.calendarContainer, "arrowCenter", m), 
                                s(w.calendarContainer, "arrowRight", g);
                                var p = window.document.body.offsetWidth - (window.pageXOffset + l.right), h = f + a > window.document.body.offsetWidth, v = p + a > window.document.body.offsetWidth;
                                if (s(w.calendarContainer, "rightMost", h), !w.config.static) if (w.calendarContainer.style.top = u + "px", 
                                h) if (v) {
                                    var D = function() {
                                        for (var e = null, n = 0; n < document.styleSheets.length; n++) {
                                            var t = document.styleSheets[n];
                                            if (t.cssRules) {
                                                try {
                                                    t.cssRules;
                                                } catch (e) {
                                                    continue;
                                                }
                                                e = t;
                                                break;
                                            }
                                        }
                                        return null != e ? e : (a = document.createElement("style"), document.head.appendChild(a), 
                                        a.sheet);
                                        var a;
                                    }();
                                    if (void 0 === D) return;
                                    var b = window.document.body.offsetWidth, C = Math.max(0, b / 2 - a / 2), M = D.cssRules.length, y = "{left:" + l.left + "px;right:auto;}";
                                    s(w.calendarContainer, "rightMost", !1), s(w.calendarContainer, "centerMost", !0), 
                                    D.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after" + y, M), 
                                    w.calendarContainer.style.left = C + "px", w.calendarContainer.style.right = "auto";
                                } else w.calendarContainer.style.left = "auto", w.calendarContainer.style.right = p + "px"; else w.calendarContainer.style.left = f + "px", 
                                w.calendarContainer.style.right = "auto";
                            }
                        }
                    } else w.config.position(w, e);
                }
                function ue() {
                    w.config.noCalendar || w.isMobile || (q(), Ce(), U());
                }
                function fe() {
                    w._input.focus(), -1 !== window.navigator.userAgent.indexOf("MSIE") || void 0 !== navigator.msMaxTouchPoints ? setTimeout(w.close, 0) : w.close();
                }
                function me(e) {
                    e.preventDefault(), e.stopPropagation();
                    var n = f(g(e), (function(e) {
                        return e.classList && e.classList.contains("flatpickr-day") && !e.classList.contains("flatpickr-disabled") && !e.classList.contains("notAllowed");
                    }));
                    if (void 0 !== n) {
                        var t = n, a = w.latestSelectedDateObj = new Date(t.dateObj.getTime()), i = (a.getMonth() < w.currentMonth || a.getMonth() > w.currentMonth + w.config.showMonths - 1) && "range" !== w.config.mode;
                        if (w.selectedDateElem = t, "single" === w.config.mode) w.selectedDates = [ a ]; else if ("multiple" === w.config.mode) {
                            var o = be(a);
                            o ? w.selectedDates.splice(parseInt(o), 1) : w.selectedDates.push(a);
                        } else "range" === w.config.mode && (2 === w.selectedDates.length && w.clear(!1, !1), 
                        w.latestSelectedDateObj = a, w.selectedDates.push(a), 0 !== M(a, w.selectedDates[0], !0) && w.selectedDates.sort((function(e, n) {
                            return e.getTime() - n.getTime();
                        })));
                        if (O(), i) {
                            var r = w.currentYear !== a.getFullYear();
                            w.currentYear = a.getFullYear(), w.currentMonth = a.getMonth(), r && (De("onYearChange"), 
                            q()), De("onMonthChange");
                        }
                        if (Ce(), U(), ye(), i || "range" === w.config.mode || 1 !== w.config.showMonths ? void 0 !== w.selectedDateElem && void 0 === w.hourElement && w.selectedDateElem && w.selectedDateElem.focus() : W(t), 
                        void 0 !== w.hourElement && void 0 !== w.hourElement && w.hourElement.focus(), w.config.closeOnSelect) {
                            var l = "single" === w.config.mode && !w.config.enableTime, c = "range" === w.config.mode && 2 === w.selectedDates.length && !w.config.enableTime;
                            (l || c) && fe();
                        }
                        Y();
                    }
                }
                w.parseDate = C({
                    config: w.config,
                    l10n: w.l10n
                }), w._handlers = [], w.pluginElements = [], w.loadedPlugins = [], w._bind = P, 
                w._setHoursFromDate = F, w._positionCalendar = de, w.changeMonth = Z, w.changeYear = ee, 
                w.clear = function(e, n) {
                    void 0 === e && (e = !0);
                    void 0 === n && (n = !0);
                    w.input.value = "", void 0 !== w.altInput && (w.altInput.value = "");
                    void 0 !== w.mobileInput && (w.mobileInput.value = "");
                    w.selectedDates = [], w.latestSelectedDateObj = void 0, !0 === n && (w.currentYear = w._initialDate.getFullYear(), 
                    w.currentMonth = w._initialDate.getMonth());
                    if (!0 === w.config.enableTime) {
                        var t = E(w.config), a = t.hours, i = t.minutes, o = t.seconds;
                        A(a, i, o);
                    }
                    w.redraw(), e && De("onChange");
                }, w.close = function() {
                    w.isOpen = !1, w.isMobile || (void 0 !== w.calendarContainer && w.calendarContainer.classList.remove("open"), 
                    void 0 !== w._input && w._input.classList.remove("active"));
                    De("onClose");
                }, w.onMouseOver = oe, w._createElement = d, w.createDay = R, w.destroy = function() {
                    void 0 !== w.config && De("onDestroy");
                    for (var e = w._handlers.length; e--; ) w._handlers[e].remove();
                    if (w._handlers = [], w.mobileInput) w.mobileInput.parentNode && w.mobileInput.parentNode.removeChild(w.mobileInput), 
                    w.mobileInput = void 0; else if (w.calendarContainer && w.calendarContainer.parentNode) if (w.config.static && w.calendarContainer.parentNode) {
                        var n = w.calendarContainer.parentNode;
                        if (n.lastChild && n.removeChild(n.lastChild), n.parentNode) {
                            for (;n.firstChild; ) n.parentNode.insertBefore(n.firstChild, n);
                            n.parentNode.removeChild(n);
                        }
                    } else w.calendarContainer.parentNode.removeChild(w.calendarContainer);
                    w.altInput && (w.input.type = "text", w.altInput.parentNode && w.altInput.parentNode.removeChild(w.altInput), 
                    delete w.altInput);
                    w.input && (w.input.type = w.input._type, w.input.classList.remove("flatpickr-input"), 
                    w.input.removeAttribute("readonly"));
                    [ "_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config" ].forEach((function(e) {
                        try {
                            delete w[e];
                        } catch (e) {}
                    }));
                }, w.isEnabled = ne, w.jumpToDate = j, w.updateValue = ye, w.open = function(e, n) {
                    void 0 === n && (n = w._positionElement);
                    if (!0 === w.isMobile) {
                        if (e) {
                            e.preventDefault();
                            var t = g(e);
                            t && t.blur();
                        }
                        return void 0 !== w.mobileInput && (w.mobileInput.focus(), w.mobileInput.click()), 
                        void De("onOpen");
                    }
                    if (w._input.disabled || w.config.inline) return;
                    var a = w.isOpen;
                    w.isOpen = !0, a || (w.calendarContainer.classList.add("open"), w._input.classList.add("active"), 
                    De("onOpen"), de(n));
                    !0 === w.config.enableTime && !0 === w.config.noCalendar && (!1 !== w.config.allowInput || void 0 !== e && w.timeContainer.contains(e.relatedTarget) || setTimeout((function() {
                        return w.hourElement.select();
                    }), 50));
                }, w.redraw = ue, w.set = function(e, n) {
                    if (null !== e && "object" == typeof e) for (var a in Object.assign(w.config, e), 
                    e) void 0 !== ge[a] && ge[a].forEach((function(e) {
                        return e();
                    })); else w.config[e] = n, void 0 !== ge[e] ? ge[e].forEach((function(e) {
                        return e();
                    })) : t.indexOf(e) > -1 && (w.config[e] = c(n));
                    w.redraw(), ye(!0);
                }, w.setDate = function(e, n, t) {
                    void 0 === n && (n = !1);
                    void 0 === t && (t = w.config.dateFormat);
                    if (0 !== e && !e || e instanceof Array && 0 === e.length) return w.clear(n);
                    pe(e, t), w.latestSelectedDateObj = w.selectedDates[w.selectedDates.length - 1], 
                    w.redraw(), j(void 0, n), F(), 0 === w.selectedDates.length && w.clear(!1);
                    ye(n), n && De("onChange");
                }, w.toggle = function(e) {
                    if (!0 === w.isOpen) return w.close();
                    w.open(e);
                };
                var ge = {
                    locale: [ se, G ],
                    showMonths: [ V, S, z ],
                    minDate: [ j ],
                    maxDate: [ j ],
                    positionElement: [ ve ],
                    clickOpens: [ function() {
                        !0 === w.config.clickOpens ? (P(w._input, "focus", w.open), P(w._input, "click", w.open)) : (w._input.removeEventListener("focus", w.open), 
                        w._input.removeEventListener("click", w.open));
                    } ]
                };
                function pe(e, n) {
                    var t = [];
                    if (e instanceof Array) t = e.map((function(e) {
                        return w.parseDate(e, n);
                    })); else if (e instanceof Date || "number" == typeof e) t = [ w.parseDate(e, n) ]; else if ("string" == typeof e) switch (w.config.mode) {
                      case "single":
                      case "time":
                        t = [ w.parseDate(e, n) ];
                        break;

                      case "multiple":
                        t = e.split(w.config.conjunction).map((function(e) {
                            return w.parseDate(e, n);
                        }));
                        break;

                      case "range":
                        t = e.split(w.l10n.rangeSeparator).map((function(e) {
                            return w.parseDate(e, n);
                        }));
                    } else w.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(e)));
                    w.selectedDates = w.config.allowInvalidPreload ? t : t.filter((function(e) {
                        return e instanceof Date && ne(e, !1);
                    })), "range" === w.config.mode && w.selectedDates.sort((function(e, n) {
                        return e.getTime() - n.getTime();
                    }));
                }
                function he(e) {
                    return e.slice().map((function(e) {
                        return "string" == typeof e || "number" == typeof e || e instanceof Date ? w.parseDate(e, void 0, !0) : e && "object" == typeof e && e.from && e.to ? {
                            from: w.parseDate(e.from, void 0),
                            to: w.parseDate(e.to, void 0)
                        } : e;
                    })).filter((function(e) {
                        return e;
                    }));
                }
                function ve() {
                    w._positionElement = w.config.positionElement || w._input;
                }
                function De(e, n) {
                    if (void 0 !== w.config) {
                        var t = w.config[e];
                        if (void 0 !== t && t.length > 0) for (var a = 0; t[a] && a < t.length; a++) t[a](w.selectedDates, w.input.value, w, n);
                        "onChange" === e && (w.input.dispatchEvent(we("change")), w.input.dispatchEvent(we("input")));
                    }
                }
                function we(e) {
                    var n = document.createEvent("Event");
                    return n.initEvent(e, !0, !0), n;
                }
                function be(e) {
                    for (var n = 0; n < w.selectedDates.length; n++) {
                        var t = w.selectedDates[n];
                        if (t instanceof Date && 0 === M(t, e)) return "" + n;
                    }
                    return !1;
                }
                function Ce() {
                    w.config.noCalendar || w.isMobile || !w.monthNav || (w.yearElements.forEach((function(e, n) {
                        var t = new Date(w.currentYear, w.currentMonth, 1);
                        t.setMonth(w.currentMonth + n), w.config.showMonths > 1 || "static" === w.config.monthSelectorType ? w.monthElements[n].textContent = h(t.getMonth(), w.config.shorthandCurrentMonth, w.l10n) + " " : w.monthsDropdownContainer.value = t.getMonth().toString(), 
                        e.value = t.getFullYear().toString();
                    })), w._hidePrevMonthArrow = void 0 !== w.config.minDate && (w.currentYear === w.config.minDate.getFullYear() ? w.currentMonth <= w.config.minDate.getMonth() : w.currentYear < w.config.minDate.getFullYear()), 
                    w._hideNextMonthArrow = void 0 !== w.config.maxDate && (w.currentYear === w.config.maxDate.getFullYear() ? w.currentMonth + 1 > w.config.maxDate.getMonth() : w.currentYear > w.config.maxDate.getFullYear()));
                }
                function Me(e) {
                    var n = e || (w.config.altInput ? w.config.altFormat : w.config.dateFormat);
                    return w.selectedDates.map((function(e) {
                        return w.formatDate(e, n);
                    })).filter((function(e, n, t) {
                        return "range" !== w.config.mode || w.config.enableTime || t.indexOf(e) === n;
                    })).join("range" !== w.config.mode ? w.config.conjunction : w.l10n.rangeSeparator);
                }
                function ye(e) {
                    void 0 === e && (e = !0), void 0 !== w.mobileInput && w.mobileFormatStr && (w.mobileInput.value = void 0 !== w.latestSelectedDateObj ? w.formatDate(w.latestSelectedDateObj, w.mobileFormatStr) : ""), 
                    w.input.value = Me(w.config.dateFormat), void 0 !== w.altInput && (w.altInput.value = Me(w.config.altFormat)), 
                    !1 !== e && De("onValueUpdate");
                }
                function xe(e) {
                    var n = g(e), t = w.prevMonthNav.contains(n), a = w.nextMonthNav.contains(n);
                    t || a ? Z(t ? -1 : 1) : w.yearElements.indexOf(n) >= 0 ? n.select() : n.classList.contains("arrowUp") ? w.changeYear(w.currentYear + 1) : n.classList.contains("arrowDown") && w.changeYear(w.currentYear - 1);
                }
                return function() {
                    w.element = w.input = p, w.isOpen = !1, function() {
                        var n = [ "wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile" ], i = e(e({}, JSON.parse(JSON.stringify(p.dataset || {}))), v), o = {};
                        w.config.parseDate = i.parseDate, w.config.formatDate = i.formatDate, Object.defineProperty(w.config, "enable", {
                            get: function() {
                                return w.config._enable;
                            },
                            set: function(e) {
                                w.config._enable = he(e);
                            }
                        }), Object.defineProperty(w.config, "disable", {
                            get: function() {
                                return w.config._disable;
                            },
                            set: function(e) {
                                w.config._disable = he(e);
                            }
                        });
                        var r = "time" === i.mode;
                        if (!i.dateFormat && (i.enableTime || r)) {
                            var l = I.defaultConfig.dateFormat || a.dateFormat;
                            o.dateFormat = i.noCalendar || r ? "H:i" + (i.enableSeconds ? ":S" : "") : l + " H:i" + (i.enableSeconds ? ":S" : "");
                        }
                        if (i.altInput && (i.enableTime || r) && !i.altFormat) {
                            var s = I.defaultConfig.altFormat || a.altFormat;
                            o.altFormat = i.noCalendar || r ? "h:i" + (i.enableSeconds ? ":S K" : " K") : s + " h:i" + (i.enableSeconds ? ":S" : "") + " K";
                        }
                        Object.defineProperty(w.config, "minDate", {
                            get: function() {
                                return w.config._minDate;
                            },
                            set: le("min")
                        }), Object.defineProperty(w.config, "maxDate", {
                            get: function() {
                                return w.config._maxDate;
                            },
                            set: le("max")
                        });
                        var d = function(e) {
                            return function(n) {
                                w.config["min" === e ? "_minTime" : "_maxTime"] = w.parseDate(n, "H:i:S");
                            };
                        };
                        Object.defineProperty(w.config, "minTime", {
                            get: function() {
                                return w.config._minTime;
                            },
                            set: d("min")
                        }), Object.defineProperty(w.config, "maxTime", {
                            get: function() {
                                return w.config._maxTime;
                            },
                            set: d("max")
                        }), "time" === i.mode && (w.config.noCalendar = !0, w.config.enableTime = !0);
                        Object.assign(w.config, o, i);
                        for (var u = 0; u < n.length; u++) w.config[n[u]] = !0 === w.config[n[u]] || "true" === w.config[n[u]];
                        t.filter((function(e) {
                            return void 0 !== w.config[e];
                        })).forEach((function(e) {
                            w.config[e] = c(w.config[e] || []).map(T);
                        })), w.isMobile = !w.config.disableMobile && !w.config.inline && "single" === w.config.mode && !w.config.disable.length && !w.config.enable && !w.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                        for (u = 0; u < w.config.plugins.length; u++) {
                            var f = w.config.plugins[u](w) || {};
                            for (var m in f) t.indexOf(m) > -1 ? w.config[m] = c(f[m]).map(T).concat(w.config[m]) : void 0 === i[m] && (w.config[m] = f[m]);
                        }
                        i.altInputClass || (w.config.altInputClass = ce().className + " " + w.config.altInputClass);
                        De("onParseConfig");
                    }(), se(), function() {
                        if (w.input = ce(), !w.input) return void w.config.errorHandler(new Error("Invalid input element specified"));
                        w.input._type = w.input.type, w.input.type = "text", w.input.classList.add("flatpickr-input"), 
                        w._input = w.input, w.config.altInput && (w.altInput = d(w.input.nodeName, w.config.altInputClass), 
                        w._input = w.altInput, w.altInput.placeholder = w.input.placeholder, w.altInput.disabled = w.input.disabled, 
                        w.altInput.required = w.input.required, w.altInput.tabIndex = w.input.tabIndex, 
                        w.altInput.type = "text", w.input.setAttribute("type", "hidden"), !w.config.static && w.input.parentNode && w.input.parentNode.insertBefore(w.altInput, w.input.nextSibling));
                        w.config.allowInput || w._input.setAttribute("readonly", "readonly");
                        ve();
                    }(), function() {
                        w.selectedDates = [], w.now = w.parseDate(w.config.now) || new Date;
                        var e = w.config.defaultDate || ("INPUT" !== w.input.nodeName && "TEXTAREA" !== w.input.nodeName || !w.input.placeholder || w.input.value !== w.input.placeholder ? w.input.value : null);
                        e && pe(e, w.config.dateFormat);
                        w._initialDate = w.selectedDates.length > 0 ? w.selectedDates[0] : w.config.minDate && w.config.minDate.getTime() > w.now.getTime() ? w.config.minDate : w.config.maxDate && w.config.maxDate.getTime() < w.now.getTime() ? w.config.maxDate : w.now, 
                        w.currentYear = w._initialDate.getFullYear(), w.currentMonth = w._initialDate.getMonth(), 
                        w.selectedDates.length > 0 && (w.latestSelectedDateObj = w.selectedDates[0]);
                        void 0 !== w.config.minTime && (w.config.minTime = w.parseDate(w.config.minTime, "H:i"));
                        void 0 !== w.config.maxTime && (w.config.maxTime = w.parseDate(w.config.maxTime, "H:i"));
                        w.minDateHasTime = !!w.config.minDate && (w.config.minDate.getHours() > 0 || w.config.minDate.getMinutes() > 0 || w.config.minDate.getSeconds() > 0), 
                        w.maxDateHasTime = !!w.config.maxDate && (w.config.maxDate.getHours() > 0 || w.config.maxDate.getMinutes() > 0 || w.config.maxDate.getSeconds() > 0);
                    }(), w.utils = {
                        getDaysInMonth: function(e, n) {
                            return void 0 === e && (e = w.currentMonth), void 0 === n && (n = w.currentYear), 
                            1 === e && (n % 4 == 0 && n % 100 != 0 || n % 400 == 0) ? 29 : w.l10n.daysInMonth[e];
                        }
                    }, w.isMobile || function() {
                        var e = window.document.createDocumentFragment();
                        if (w.calendarContainer = d("div", "flatpickr-calendar"), w.calendarContainer.tabIndex = -1, 
                        !w.config.noCalendar) {
                            if (e.appendChild((w.monthNav = d("div", "flatpickr-months"), w.yearElements = [], 
                            w.monthElements = [], w.prevMonthNav = d("span", "flatpickr-prev-month"), w.prevMonthNav.innerHTML = w.config.prevArrow, 
                            w.nextMonthNav = d("span", "flatpickr-next-month"), w.nextMonthNav.innerHTML = w.config.nextArrow, 
                            V(), Object.defineProperty(w, "_hidePrevMonthArrow", {
                                get: function() {
                                    return w.__hidePrevMonthArrow;
                                },
                                set: function(e) {
                                    w.__hidePrevMonthArrow !== e && (s(w.prevMonthNav, "flatpickr-disabled", e), w.__hidePrevMonthArrow = e);
                                }
                            }), Object.defineProperty(w, "_hideNextMonthArrow", {
                                get: function() {
                                    return w.__hideNextMonthArrow;
                                },
                                set: function(e) {
                                    w.__hideNextMonthArrow !== e && (s(w.nextMonthNav, "flatpickr-disabled", e), w.__hideNextMonthArrow = e);
                                }
                            }), w.currentYearElement = w.yearElements[0], Ce(), w.monthNav)), w.innerContainer = d("div", "flatpickr-innerContainer"), 
                            w.config.weekNumbers) {
                                var n = function() {
                                    w.calendarContainer.classList.add("hasWeeks");
                                    var e = d("div", "flatpickr-weekwrapper");
                                    e.appendChild(d("span", "flatpickr-weekday", w.l10n.weekAbbreviation));
                                    var n = d("div", "flatpickr-weeks");
                                    return e.appendChild(n), {
                                        weekWrapper: e,
                                        weekNumbers: n
                                    };
                                }(), t = n.weekWrapper, a = n.weekNumbers;
                                w.innerContainer.appendChild(t), w.weekNumbers = a, w.weekWrapper = t;
                            }
                            w.rContainer = d("div", "flatpickr-rContainer"), w.rContainer.appendChild(z()), 
                            w.daysContainer || (w.daysContainer = d("div", "flatpickr-days"), w.daysContainer.tabIndex = -1), 
                            U(), w.rContainer.appendChild(w.daysContainer), w.innerContainer.appendChild(w.rContainer), 
                            e.appendChild(w.innerContainer);
                        }
                        w.config.enableTime && e.appendChild(function() {
                            w.calendarContainer.classList.add("hasTime"), w.config.noCalendar && w.calendarContainer.classList.add("noCalendar");
                            var e = E(w.config);
                            w.timeContainer = d("div", "flatpickr-time"), w.timeContainer.tabIndex = -1;
                            var n = d("span", "flatpickr-time-separator", ":"), t = m("flatpickr-hour", {
                                "aria-label": w.l10n.hourAriaLabel
                            });
                            w.hourElement = t.getElementsByTagName("input")[0];
                            var a = m("flatpickr-minute", {
                                "aria-label": w.l10n.minuteAriaLabel
                            });
                            w.minuteElement = a.getElementsByTagName("input")[0], w.hourElement.tabIndex = w.minuteElement.tabIndex = -1, 
                            w.hourElement.value = o(w.latestSelectedDateObj ? w.latestSelectedDateObj.getHours() : w.config.time_24hr ? e.hours : function(e) {
                                switch (e % 24) {
                                  case 0:
                                  case 12:
                                    return 12;

                                  default:
                                    return e % 12;
                                }
                            }(e.hours)), w.minuteElement.value = o(w.latestSelectedDateObj ? w.latestSelectedDateObj.getMinutes() : e.minutes), 
                            w.hourElement.setAttribute("step", w.config.hourIncrement.toString()), w.minuteElement.setAttribute("step", w.config.minuteIncrement.toString()), 
                            w.hourElement.setAttribute("min", w.config.time_24hr ? "0" : "1"), w.hourElement.setAttribute("max", w.config.time_24hr ? "23" : "12"), 
                            w.hourElement.setAttribute("maxlength", "2"), w.minuteElement.setAttribute("min", "0"), 
                            w.minuteElement.setAttribute("max", "59"), w.minuteElement.setAttribute("maxlength", "2"), 
                            w.timeContainer.appendChild(t), w.timeContainer.appendChild(n), w.timeContainer.appendChild(a), 
                            w.config.time_24hr && w.timeContainer.classList.add("time24hr");
                            if (w.config.enableSeconds) {
                                w.timeContainer.classList.add("hasSeconds");
                                var i = m("flatpickr-second");
                                w.secondElement = i.getElementsByTagName("input")[0], w.secondElement.value = o(w.latestSelectedDateObj ? w.latestSelectedDateObj.getSeconds() : e.seconds), 
                                w.secondElement.setAttribute("step", w.minuteElement.getAttribute("step")), w.secondElement.setAttribute("min", "0"), 
                                w.secondElement.setAttribute("max", "59"), w.secondElement.setAttribute("maxlength", "2"), 
                                w.timeContainer.appendChild(d("span", "flatpickr-time-separator", ":")), w.timeContainer.appendChild(i);
                            }
                            w.config.time_24hr || (w.amPM = d("span", "flatpickr-am-pm", w.l10n.amPM[r((w.latestSelectedDateObj ? w.hourElement.value : w.config.defaultHour) > 11)]), 
                            w.amPM.title = w.l10n.toggleTitle, w.amPM.tabIndex = -1, w.timeContainer.appendChild(w.amPM));
                            return w.timeContainer;
                        }());
                        s(w.calendarContainer, "rangeMode", "range" === w.config.mode), s(w.calendarContainer, "animate", !0 === w.config.animate), 
                        s(w.calendarContainer, "multiMonth", w.config.showMonths > 1), w.calendarContainer.appendChild(e);
                        var i = void 0 !== w.config.appendTo && void 0 !== w.config.appendTo.nodeType;
                        if ((w.config.inline || w.config.static) && (w.calendarContainer.classList.add(w.config.inline ? "inline" : "static"), 
                        w.config.inline && (!i && w.element.parentNode ? w.element.parentNode.insertBefore(w.calendarContainer, w._input.nextSibling) : void 0 !== w.config.appendTo && w.config.appendTo.appendChild(w.calendarContainer)), 
                        w.config.static)) {
                            var l = d("div", "flatpickr-wrapper");
                            w.element.parentNode && w.element.parentNode.insertBefore(l, w.element), l.appendChild(w.element), 
                            w.altInput && l.appendChild(w.altInput), l.appendChild(w.calendarContainer);
                        }
                        w.config.static || w.config.inline || (void 0 !== w.config.appendTo ? w.config.appendTo : window.document.body).appendChild(w.calendarContainer);
                    }(), function() {
                        w.config.wrap && [ "open", "close", "toggle", "clear" ].forEach((function(e) {
                            Array.prototype.forEach.call(w.element.querySelectorAll("[data-" + e + "]"), (function(n) {
                                return P(n, "click", w[e]);
                            }));
                        }));
                        if (w.isMobile) return void function() {
                            var e = w.config.enableTime ? w.config.noCalendar ? "time" : "datetime-local" : "date";
                            w.mobileInput = d("input", w.input.className + " flatpickr-mobile"), w.mobileInput.tabIndex = 1, 
                            w.mobileInput.type = e, w.mobileInput.disabled = w.input.disabled, w.mobileInput.required = w.input.required, 
                            w.mobileInput.placeholder = w.input.placeholder, w.mobileFormatStr = "datetime-local" === e ? "Y-m-d\\TH:i:S" : "date" === e ? "Y-m-d" : "H:i:S", 
                            w.selectedDates.length > 0 && (w.mobileInput.defaultValue = w.mobileInput.value = w.formatDate(w.selectedDates[0], w.mobileFormatStr));
                            w.config.minDate && (w.mobileInput.min = w.formatDate(w.config.minDate, "Y-m-d"));
                            w.config.maxDate && (w.mobileInput.max = w.formatDate(w.config.maxDate, "Y-m-d"));
                            w.input.getAttribute("step") && (w.mobileInput.step = String(w.input.getAttribute("step")));
                            w.input.type = "hidden", void 0 !== w.altInput && (w.altInput.type = "hidden");
                            try {
                                w.input.parentNode && w.input.parentNode.insertBefore(w.mobileInput, w.input.nextSibling);
                            } catch (e) {}
                            P(w.mobileInput, "change", (function(e) {
                                w.setDate(g(e).value, !1, w.mobileFormatStr), De("onChange"), De("onClose");
                            }));
                        }();
                        var e = l(re, 50);
                        w._debouncedChange = l(Y, 300), w.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && P(w.daysContainer, "mouseover", (function(e) {
                            "range" === w.config.mode && oe(g(e));
                        }));
                        P(w._input, "keydown", ie), void 0 !== w.calendarContainer && P(w.calendarContainer, "keydown", ie);
                        w.config.inline || w.config.static || P(window, "resize", e);
                        void 0 !== window.ontouchstart ? P(window.document, "touchstart", X) : P(window.document, "mousedown", X);
                        P(window.document, "focus", X, {
                            capture: !0
                        }), !0 === w.config.clickOpens && (P(w._input, "focus", w.open), P(w._input, "click", w.open));
                        void 0 !== w.daysContainer && (P(w.monthNav, "click", xe), P(w.monthNav, [ "keyup", "increment" ], N), 
                        P(w.daysContainer, "click", me));
                        if (void 0 !== w.timeContainer && void 0 !== w.minuteElement && void 0 !== w.hourElement) {
                            var n = function(e) {
                                return g(e).select();
                            };
                            P(w.timeContainer, [ "increment" ], _), P(w.timeContainer, "blur", _, {
                                capture: !0
                            }), P(w.timeContainer, "click", H), P([ w.hourElement, w.minuteElement ], [ "focus", "click" ], n), 
                            void 0 !== w.secondElement && P(w.secondElement, "focus", (function() {
                                return w.secondElement && w.secondElement.select();
                            })), void 0 !== w.amPM && P(w.amPM, "click", (function(e) {
                                _(e);
                            }));
                        }
                        w.config.allowInput && P(w._input, "blur", ae);
                    }(), (w.selectedDates.length || w.config.noCalendar) && (w.config.enableTime && F(w.config.noCalendar ? w.latestSelectedDateObj : void 0), 
                    ye(!1)), S();
                    var n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                    !w.isMobile && n && de(), De("onReady");
                }(), w;
            }
            function T(e, n) {
                for (var t = Array.prototype.slice.call(e).filter((function(e) {
                    return e instanceof HTMLElement;
                })), a = [], i = 0; i < t.length; i++) {
                    var o = t[i];
                    try {
                        if (null !== o.getAttribute("data-fp-omit")) continue;
                        void 0 !== o._flatpickr && (o._flatpickr.destroy(), o._flatpickr = void 0), o._flatpickr = k(o, n || {}), 
                        a.push(o._flatpickr);
                    } catch (e) {
                        console.error(e);
                    }
                }
                return 1 === a.length ? a[0] : a;
            }
            "undefined" != typeof HTMLElement && "undefined" != typeof HTMLCollection && "undefined" != typeof NodeList && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(e) {
                return T(this, e);
            }, HTMLElement.prototype.flatpickr = function(e) {
                return T([ this ], e);
            });
            var I = function(e, n) {
                return "string" == typeof e ? T(window.document.querySelectorAll(e), n) : e instanceof Node ? T([ e ], n) : T(e, n);
            };
            return I.defaultConfig = {}, I.l10ns = {
                en: e({}, i),
                default: e({}, i)
            }, I.localize = function(n) {
                I.l10ns.default = e(e({}, I.l10ns.default), n);
            }, I.setDefaults = function(n) {
                I.defaultConfig = e(e({}, I.defaultConfig), n);
            }, I.parseDate = C({}), I.formatDate = b({}), I.compareDates = M, "undefined" != typeof jQuery && void 0 !== jQuery.fn && (jQuery.fn.flatpickr = function(e) {
                return T(this, e);
            }), Date.prototype.fp_incr = function(e) {
                return new Date(this.getFullYear(), this.getMonth(), this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e));
            }, "undefined" != typeof window && (window.flatpickr = I), I;
        }));
        let step = 1;
        let roomPrice = 0;
        let bedroomsPrice = 0;
        let bathroomsPrice = 0;
        let extrasPrice = 0;
        let homeCleaningPrice = 0;
        let pipePrice = 0;
        let windowsPrice = 0;
        let lawnPrice = 0;
        let squerePrice = 0;
        let bathroomsARPrice = 0;
        let repairExtras = 0;
        let repairWindowPrice = 0;
        let repairCleanPrice = 0;
        $(".service").on("click", (function() {
            $(this).toggleClass("_select");
        }));
        $(".living-quarters").on("click", (function() {
            $(".living-quarters").removeClass("_select");
            $(this).addClass("_select");
            const price = $(this).attr("data-room-price");
            roomPrice = price;
            updeteHomeCleaningPrice();
            updetePrice();
            $('[name="houseSize"]').val($(this).children("p").text());
        }));
        $(".bedrooms__item").on("click", (function() {
            $(".bedrooms__item").removeClass("_select");
            $(this).toggleClass("_select");
            const price = parseInt($(this).attr("data-bedroom-price"));
            bedroomsPrice = parseInt(price);
            updeteHomeCleaningPrice();
            updetePrice();
            $('[name="numberBeadroom"]').val($(this).text());
        }));
        $(".bathrooms__item").on("click", (function() {
            $(".bathrooms__item").removeClass("_select");
            $(this).toggleClass("_select");
            const price = parseInt($(this).attr("data-bathrooms-price"));
            bathroomsPrice = parseInt(price);
            updeteHomeCleaningPrice();
            updetePrice();
            $('[name="numberBathrooms"]').val($(this).text());
        }));
        $(".living-extras").on("click", (function() {
            $(this).toggleClass("_setected");
            let sum = 0;
            let extrass = "";
            $(".living-extras._setected").each((function() {
                let price = $(this).attr("data-extras-price");
                sum += parseInt(price);
                extrass = extrass + $(this).text() + ", ";
            }));
            extrasPrice = sum;
            updeteHomeCleaningPrice();
            updetePrice();
            $('[name="extras"]').val(extrass);
        }));
        let isDeep = false;
        $("#clStandart").on("click", (function() {
            isDeep = false;
            $(this).addClass("_select");
            $("#clDeep").removeClass("_select");
            updetePrice();
            $('[name="cleaningLevel"]').val("");
        }));
        $("#clDeep").on("click", (function() {
            isDeep = true;
            $(this).addClass("_select");
            $("#clStandart").removeClass("_select");
            updetePrice();
            $('[name="cleaningLevel"]').val("Deep");
        }));
        $('[data-service="1"]').on("click", (function() {
            $('[name="houseClean"]').val($(this).text());
            if (!$(this).hasClass("_select")) {
                roomPrice = 0;
                bedroomsPrice = 0;
                extrasPrice = 0;
                updeteHomeCleaningPrice();
                $(".living-quarters").removeClass("_select");
                $(".bedrooms__item").removeClass("_select");
                $(".living-extras").removeClass("_setected");
                $("#clStandart").trigger("click");
                $('[name="houseSize"]').val("");
                $('[name="houseClean"]').val("");
                $('[name="numberBeadroom"]').val("");
                $('[name="numberBathrooms"]').val("");
                $('[name="extras"]').val("");
                $('[name="cleaningLevel"]').val("");
            }
            updetePrice();
        }));
        $(".after-repair").on("click", (function() {
            $(".after-repair").removeClass("_select");
            $(this).addClass("_select");
            const price = $(this).attr("data-room-price");
            squerePrice = price;
            updateAllRepairCleanPrice();
            updetePrice();
            $('[name="renovationHouseSize"]').val($(this).text());
        }));
        $(".bathrooms-ar__item").on("click", (function() {
            $(".bathrooms-ar__item").removeClass("_select");
            $(this).toggleClass("_select");
            const price = parseInt($(this).attr("data-bathrooms-price"));
            bathroomsARPrice = parseInt(price);
            updateAllRepairCleanPrice();
            updetePrice();
            $('[name="renovationNumberBathrooms"]').val($(this).text());
        }));
        $(".renovation-extras").on("click", (function() {
            $(this).toggleClass("_setected");
            let sum = 0;
            let extras = "";
            $(".renovation-extras._setected").each((function() {
                let price = $(this).attr("data-extras-price");
                sum += parseInt(price);
                extras = extras + $(this).text() + ", ";
            }));
            repairExtras = sum;
            updateAllRepairCleanPrice();
            updetePrice();
            $('[name="renovationExtras"]').val(extras);
        }));
        let isRepairClinlevel = false;
        $("#clRepairStandart").on("click", (function() {
            isRepairClinlevel = false;
            $(this).addClass("_select");
            $("#clRepairDeep").removeClass("_select");
            updetePrice();
            $('[name="renovationCleaningLevel"]').val("");
        }));
        $("#clRepairDeep").on("click", (function() {
            isRepairClinlevel = true;
            $(this).addClass("_select");
            $("#clRepairStandart").removeClass("_select");
            updetePrice();
            $('[name="renovationCleaningLevel"]').val("Deep");
        }));
        flsModules.numberWindows?.noUiSlider.on("update", (function(values, handle) {
            const price = $("#numberWindows").attr("data-price-window");
            if ($('[data-service="5"]').hasClass("_select")) {
                repairWindowPrice = values[handle] * price;
                $('[name="renovationNumberWindows"]').val(values[handle]);
            } else {
                repairWindowPrice = 0;
                $('[name="renovationNumberWindows"]').val("");
            }
            updateAllRepairCleanPrice();
            updetePrice();
        }));
        $('[data-service="5"]').on("click", (function() {
            $('[name="afterRenovationClean"').val($(this).text());
            if (!$(this).hasClass("_select")) {
                squerePrice = 0;
                repairExtras = 0;
                repairWindowPrice = 0;
                repairCleanPrice = 0;
                flsModules.numberWindows?.noUiSlider.set(0);
                updateAllRepairCleanPrice();
                $(".after-repair").removeClass("_select");
                $("#clRepairStandart").trigger("click");
                $(".is-furniture").removeClass("_select");
                $(".renovation-extras__wrap").css("display", "none");
                $(".renovation-extras").removeClass("_setected");
                $(".is-window").removeClass("_select");
                $(".window-wash__wrap").css("display", "none");
                $('[name="afterRenovationClean"').val("");
                $('[name="renovationHouseSize"]').val("");
                $('[name="renovationNumberBathrooms"]').val("");
                $('[name="renovationExtras"]').val("");
                $('[name="renovationCleaningLevel"]').val("");
                $('[name="renovationNumberWindows"]').val("");
            }
            updetePrice();
        }));
        $(".calculator__btn-next").on("click", (function() {
            if (!checkSelectedService()) {
                $(".calculator__alerts").fadeIn("slow");
                $(".calculator__alerts").text("Please make a selection to continue.");
                return;
            }
            const hasSelect = $('[data-service="1"]').hasClass("_select");
            if (hasSelect && step === 2 && !checkSelectedRoomSize()) {
                $(".calculator__alerts").fadeIn("slow");
                $(".calculator__alerts").text("Please select your home size to continue.");
                return;
            }
            const hasLawnSelect = $('[data-service="3"]').hasClass("_select");
            if (hasLawnSelect && step === 2 && !checkSelectedLawnSize()) {
                $(".calculator__alerts").fadeIn("slow");
                $(".calculator__alerts").text("Please make a lawn area selection to continue.");
                return;
            }
            $(".calculator__alerts").fadeOut();
            showedSpollers();
            if (step < 3) step++;
            stepControl();
        }));
        $(".calculator__btn-prev").on("click", (function() {
            if (step >= 2) step--;
            stepControl();
        }));
        function stepControl() {
            $(".calculator__steps div").removeClass("_active");
            $(`[data-step=${step}]`).addClass("_active");
            if (step === 1) {
                $(".calculator__services").slideDown("slow");
                $(".calculator__form").slideUp("slow");
                $(".calculator__square").slideUp("slow");
                $(".calculator__total-price").css({
                    opacity: "0",
                    "max-height": "0"
                });
                $(".calculator__btn-prev").hide();
                scrollTopOffer();
            }
            if (step === 2) {
                $(".calculator__services").slideUp("slow");
                $(".calculator__form").slideUp("slow");
                $(".calculator__square").slideDown("slow");
                $(".calculator__btn-prev").show();
                $(".calculator__btn-next").show();
                $(".calculator__total-price").css({
                    opacity: "1",
                    "max-height": "unset"
                });
                $(".calculator__total-price strong").hide();
                scrollTopOffer();
            }
            if (step === 3) {
                $(".calculator__square").slideUp("slow");
                $(".calculator__form").slideDown("slow");
                $(".calculator__btn-next").hide();
                let price = $(".calculator__total-price span").text();
                let totalPrice = price * 1.05;
                $('.stripe-form input[name="item_price"]').val(totalPrice.toFixed(2));
                $("#totalPrice").val(totalPrice.toFixed(2));
                $("#clientId").val($('.stripe-form input[name="client_reference_id"]').val());
                $(".calculator__total-price strong").text("(+GST 5%)");
                $(".calculator__total-price strong").show();
                $(".calculator__total-price strong").removeClass("_plus");
                scrollTopOffer();
            }
        }
        function scrollTopOffer() {
            $("html, body").animate({
                scrollTop: $(".offer").offset().top + 60
            }, 1e3);
        }
        function checkSelectedService() {
            let service = document.querySelectorAll(".service._select");
            if (service.length) return true; else return false;
        }
        function checkSelectedRoomSize() {
            const room = document.querySelectorAll(".room._select");
            if (room.length) return true; else return false;
        }
        function checkSelectedLawnSize() {
            const lawn = document.querySelectorAll(".lawn-area__item._select");
            if (lawn.length) return true; else return false;
        }
        function showedSpollers() {
            $(".calculator__spollers .spollers__item").hide();
            $(".service._select").each((function() {
                let serviceId = $(this).attr("data-service");
                $(`[data-service-filters=${serviceId}]`).show();
            }));
        }
        function updeteHomeCleaningPrice() {
            homeCleaningPrice = parseInt(roomPrice) + parseInt(bedroomsPrice) + parseInt(extrasPrice) + parseInt(bathroomsPrice);
        }
        function updateAllRepairCleanPrice() {
            repairCleanPrice = parseInt(squerePrice) + parseInt(repairExtras) + parseInt(repairWindowPrice) + parseInt(bathroomsARPrice);
        }
        $(".cleaning-level__item").on("click", (function() {
            $(".cleaning-level__item").removeClass("_select");
            $(this).toggleClass("_select");
        }));
        $(".lawn-area__item").on("click", (function() {
            $(".lawn-area__item").removeClass("_select");
            $(this).toggleClass("_select");
            const sevicePrice = $('[data-service="3"]').attr("data-service-price");
            const lawnAreaPrice = $(this).attr("data-lawn-area");
            const text = $(this).text();
            lawnPrice = parseInt(lawnAreaPrice) + parseInt(sevicePrice);
            $('[name="lawnArea"]').val($(this).text());
            updetePrice();
            if (text.indexOf("+") > 0) {
                $(".calculator__total-price strong").text("+");
                $(".calculator__total-price strong").show();
                $(".calculator__total-price strong").addClass("_plus");
            } else {
                $(".calculator__total-price strong").removeClass("_plus");
                $(".calculator__total-price strong").hide();
            }
        }));
        $('[data-service="3"]').on("click", (function() {
            if (!$(this).hasClass("_select")) {
                lawnPrice = 0;
                $(".lawn-area__item").removeClass("_select");
                $('[name="lawnMowing"]').val("");
                $('[name="lawnArea"]').val("");
            }
            $('[name="lawnMowing"]').val($(this).text());
            updetePrice();
        }));
        $(".payment-options__option").on("click", (function() {
            $(".payment-options__option").removeClass("_setected");
            $(this).toggleClass("_setected");
            let procent = parseInt($(this).attr("data-discont-procent"));
            if (procent) {
                $(".payment-options__option").children().css("opacity", "0");
                $(this).children().css("opacity", "1");
                let price = $(".calculator__total-price span").text();
                let totalPrice = price * ((100 - procent) / 100);
                $(".payment-options__desc").slideDown("slow");
                $(this).children().text(`Disc. price: $${totalPrice.toFixed(1)}`);
            } else {
                $(".payment-options__option").children().css("opacity", "0");
                $(".payment-options__desc").slideUp("slow");
            }
        }));
        $(".is-window").on("click", (function() {
            $(this).toggleClass("_select");
            $(".window-wash__wrap").fadeToggle("slow");
        }));
        let exteriorWindow = false;
        $("#inside").on("click", (function() {
            $(this).toggleClass("_select");
            if ($(this).hasClass("_select") && $("#outside").hasClass("_select")) exteriorWindow = true; else exteriorWindow = false;
            if ($(this).hasClass("_select")) $('[name="insideWindowsClean"]').val("Inside"); else $('[name="insideWindowsClean"]').val("");
            exteriorWindows();
        }));
        $("#outside").on("click", (function() {
            $(this).toggleClass("_select");
            if ($(this).hasClass("_select") && $("#inside").hasClass("_select")) exteriorWindow = true; else exteriorWindow = false;
            if ($(this).hasClass("_select")) $('[name="outsideWindowsClean"]').val("Outside"); else $('[name="outsideWindowsClean"]').val("");
            exteriorWindows();
        }));
        function exteriorWindows() {
            const price = $("#rangeWindows").attr("data-price-window");
            const price2 = $("#rangeWindows").attr("data-price-exterior-window");
            const departurePrice = $("#rangeWindows").attr("data-price-one-window");
            const numberWindow = parseInt(flsModules.rangeWindows?.noUiSlider.get());
            if (!exteriorWindow) windowsPrice = numberWindow * price + parseInt(departurePrice); else windowsPrice = numberWindow * price2 + parseInt(departurePrice);
            updetePrice();
        }
        $('[data-service="2"]').on("click", (function() {
            if ($(this).hasClass("_select")) {
                const price = $("#rangeWindows").attr("data-price-one-window");
                windowsPrice = parseInt(price);
                $('[name="cleaningWindow"]').val($(this).text());
            } else {
                windowsPrice = 0;
                flsModules.rangeWindows?.noUiSlider.set(0);
                $('[name="cleaningWindow"]').val("");
                $('[name="numberWindow"]').val("");
                $('[name="interiorWindowsClean"]').val("");
            }
            updetePrice();
        }));
        flsModules.rangeWindows?.noUiSlider.on("update", (function(values, handle) {
            const price = $("#rangeWindows").attr("data-price-window");
            const price2 = $("#rangeWindows").attr("data-price-exterior-window");
            const departurePrice = $("#rangeWindows").attr("data-price-one-window");
            if ($('[data-service="2"]').hasClass("_select")) {
                if (!exteriorWindow) windowsPrice = values[handle] * price + parseInt(departurePrice); else windowsPrice = values[handle] * price2 + parseInt(departurePrice);
                $('[name="numberWindow"]').val(values[handle]);
            } else {
                windowsPrice = 0;
                $('[name="numberWindow"]').val("");
            }
            updetePrice();
        }));
        $('[data-service="4"]').on("click", (function() {
            if ($(this).hasClass("_select")) {
                const price = $("#rangePipe").attr("data-price-one-pipe");
                pipePrice = parseInt(price);
                $('[name="pipeCleaning"]').val($(this).text());
            } else {
                pipePrice = 0;
                flsModules.rangePipe?.noUiSlider.set(0);
                $('[name="pipeCleaning"]').val("");
                $('[name="pipeCleaningNumber"]').val("");
            }
            updetePrice();
        }));
        flsModules.rangePipe?.noUiSlider.on("update", (function(values, handle) {
            const price = $("#rangePipe").attr("data-price-pipe");
            const departurePrice = $("#rangePipe").attr("data-price-one-pipe");
            if ($('[data-service="4"]').hasClass("_select")) {
                pipePrice = values[handle] * price + parseInt(departurePrice);
                $('[name="pipeCleaningNumber"]').val(values[handle]);
            } else {
                pipePrice = 0;
                $('[name="pipeCleaningNumber"]').val("");
            }
            updetePrice();
        }));
        $('[data-service="6"]').on("click", (function() {
            if ($(this).hasClass("_select")) flsModules.popup.open("#popup");
        }));
        const header = document.querySelector(".header");
        window.addEventListener("scroll", (function() {
            if (window.scrollY >= 80) header.classList.add("header-scrolling"); else header.classList.remove("header-scrolling");
        }));
        function updateDiscountPrice() {
            let procent = parseInt($(".payment-options__option._setected").attr("data-discont-procent"));
            if (procent) {
                $(".calculator__discount").css("opacity", "1");
                let price = $(".calculator__total-price span").text();
                let totalPrice = price * ((100 - procent) / 100);
                $(".calculator__discount span").text(totalPrice.toFixed(1));
            } else {
                $(".calculator__discount").css("opacity", "0");
                $(".calculator__discount span").text(0);
            }
        }
        function updetePrice() {
            let dopProcent = 0;
            if (isDeep) dopProcent = homeCleaningPrice * 1.2 - homeCleaningPrice;
            let isRepairExtras = $(".renovation-extras._setected");
            let dopRepairProcent = 0;
            if (isRepairClinlevel && isRepairExtras.length) dopRepairProcent = repairCleanPrice * 1.25 - repairCleanPrice;
            let finalPrice = parseInt(homeCleaningPrice) + parseInt(dopProcent) + parseInt(windowsPrice) + parseInt(lawnPrice) + parseInt(pipePrice) + (parseInt(repairCleanPrice) + parseInt(dopRepairProcent));
            $(".calculator__total-price span").text(finalPrice);
            updateDiscountPrice();
        }
        $("#buyNowBtn").on("click", (function() {
            $("#calcForm").addClass("payment");
            $("#bookNowBtn").trigger("click");
        }));
        $("#payment_method").on("change", (function() {
            if (this.value == 2) $("#calcForm").addClass("payment"); else $("#calcForm").removeClass("payment");
        }));
        let datapiker = flatpickr("#cleaningDate", {
            position: "above",
            minDate: new Date,
            onChange: function(selectedDates, dateStr, instance) {
                if (selectedDates.length == 0) setDatePick();
                console.log(selectedDates);
            }
        });
        $("#cleaningDate").on("input", (function() {
            if ($(this).val() === "") setDatePick();
        }));
        function setDatePick() {
            datapiker.setDate(new Date, true);
        }
        setDatePick();
        let timepicker = flatpickr("#timeInput", {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            position: "above",
            onChange: function(selectedDates, dateStr, instance) {
                if (selectedDates.length == 0) setTime();
            }
        });
        function setTime() {
            timepicker.setDate("12:00", true);
        }
        $("#timeInput").on("input", (function() {
            if ($(this).val() === "") setTime();
        }));
        setTime();
        document.addEventListener("DOMContentLoaded", (function() {
            const toggleLinks = document.querySelectorAll(".read-more .toggle-link");
            toggleLinks.forEach((function(toggleLink) {
                toggleLink.addEventListener("click", (function(event) {
                    event.preventDefault();
                    const content = this.parentNode.querySelector(".content");
                    content.classList.toggle("expanded");
                    this.textContent = content.classList.contains("expanded") ? "Read Less" : "Read More";
                }));
            }));
        }));
        document.querySelector(".banner__btn")?.addEventListener("click", (function() {
            flsModules.popup.open("#popup");
        }));
        document.querySelector(".poster__btn")?.addEventListener("click", (function() {
            flsModules.popup.open("#popup");
        }));
        document.querySelector(".header__btn")?.addEventListener("click", (function() {
            flsModules.popup.open("#popup");
        }));
        $(".menu__link").on("click", (function() {
            if (!$(this).is("[data-goto]")) document.documentElement.classList.contains("menu-open") ? menuClose() : null;
        }));
        function isValidPhone(p) {
            var phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
            var digits = p.replace(/\D/g, "");
            return phoneRe.test(digits);
        }
        function isValidEmail(value) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(value);
        }
        function isValidLastName(value) {
            return /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(value);
        }
        function isValidName(value) {
            return /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(value);
        }
        function isValidZipCode(value) {
            return /^(?:[0-9a-zA-Z]+([- ]?[0-9a-zA-Z]+)*)?$/.test(value);
        }
        function isValidAdress(value) {
            return /^(?![ -.&,_'":?!/])(?!.*[- &_'":]$)(?!.*[-.#@&,:?!/]{2})[a-zA-Z0-9- .#@&,_'":.?!/]+$/.test(value);
        }
        function isValidCityName(value) {
            return /^\s*[a-zA-Z]{1}[0-9a-zA-Z][0-9a-zA-Z '-.=#/]*$/.test(value);
        }
        const popupEmail = document.querySelector("#popupEmail");
        const popupPhone = document.querySelector("#popupPhone");
        const popupUserName = document.querySelector("#popupUserName");
        popupPhone?.addEventListener("input", (function() {
            if (!isValidPhone(popupPhone.value)) popupPhone.classList.add("_notvalid"); else popupPhone.classList.remove("_notvalid");
        }));
        popupEmail?.addEventListener("input", (function() {
            if (!isValidEmail(popupEmail.value)) popupEmail.classList.add("_notvalid"); else popupEmail.classList.remove("_notvalid");
        }));
        popupUserName?.addEventListener("input", (function() {
            if (!isValidName(popupUserName.value)) popupUserName.classList.add("_notvalid"); else popupUserName.classList.remove("_notvalid");
        }));
        const popupForm = document.querySelector("#popupForm");
        popupForm?.addEventListener("submit", (async function(e) {
            e.preventDefault();
            let error = isValidEmail(popupEmail.value) && isValidPhone(popupPhone.value) && isValidName(popupUserName.value);
            let formData = new FormData(popupForm);
            if (error) {
                popupForm.classList.add("_sending");
                let response = await fetch("mail.php", {
                    method: "POST",
                    body: formData
                });
                if (response.ok) {
                    await response.json();
                    let alertMsg = document.querySelector(".popup__alert");
                    alertMsg.innerHTML = '<p class="alert__msg" >Your message has been sent!!!<p/>';
                    alertMsg.classList.add("_show__success");
                    popupForm.reset();
                    popupForm.classList.remove("_sending");
                } else {
                    let alertMsg = document.querySelector(".popup__alert");
                    alertMsg.innerHTML = '<p class="alert__msg" >Error!!!<p/>';
                    alertMsg.classList.add("_show");
                    console.log(response.data);
                    popupForm.classList.remove("_sending");
                }
            } else {
                let alertMsg = document.querySelector(".popup__alert");
                alertMsg.innerHTML = '<p class="alert__msg" >Fill in required fields!!!<p/>';
                alertMsg.classList.add("_show");
            }
        }));
        const calcFirstName = document.querySelector("#firstName");
        const calcLasttName = document.querySelector("#lastName");
        const calcEmail = document.querySelector("#userEmail");
        const calcPhone = document.querySelector("#userPhone");
        const calcZipCode = document.querySelector("#zipCode");
        const calcCityName = document.querySelector("#userCity");
        const calcAdress = document.querySelector("#userAddres");
        calcPhone?.addEventListener("input", (function() {
            if (!isValidPhone(calcPhone.value)) calcPhone.classList.add("_notvalid"); else calcPhone.classList.remove("_notvalid");
        }));
        calcEmail?.addEventListener("input", (function() {
            if (!isValidEmail(calcEmail.value)) calcEmail.classList.add("_notvalid"); else calcEmail.classList.remove("_notvalid");
        }));
        calcFirstName?.addEventListener("input", (function() {
            if (!isValidName(calcFirstName.value)) calcFirstName.classList.add("_notvalid"); else calcFirstName.classList.remove("_notvalid");
        }));
        calcLasttName?.addEventListener("input", (function() {
            if (!isValidLastName(calcLasttName.value)) calcLasttName.classList.add("_notvalid"); else calcLasttName.classList.remove("_notvalid");
        }));
        calcZipCode?.addEventListener("input", (function() {
            if (!isValidZipCode(calcZipCode.value)) calcZipCode.classList.add("_notvalid"); else calcZipCode.classList.remove("_notvalid");
        }));
        calcCityName?.addEventListener("input", (function() {
            if (!isValidCityName(calcCityName.value)) calcCityName.classList.add("_notvalid"); else calcCityName.classList.remove("_notvalid");
        }));
        calcAdress?.addEventListener("input", (function() {
            if (!isValidAdress(calcAdress.value)) calcAdress.classList.add("_notvalid"); else calcAdress.classList.remove("_notvalid");
        }));
        const calcForm = document.querySelector("#calcForm");
        calcForm?.addEventListener("submit", (async function(e) {
            e.preventDefault();
            let error = isValidEmail(calcEmail.value) && isValidPhone(calcPhone.value) && isValidName(calcFirstName.value) && isValidLastName(calcLasttName.value) && isValidZipCode(calcZipCode.value) && isValidCityName(calcCityName.value) && isValidAdress(calcAdress.value);
            let formData = new FormData(calcForm);
            if (error) {
                calcForm.classList.add("_sending");
                let response = await fetch("calcmail.php", {
                    method: "POST",
                    body: formData
                });
                if (response.ok) {
                    await response.json();
                    let alertMsg = document.querySelector(".calculator__alert");
                    alertMsg.innerHTML = '<p class="alert__msg" >Your message has been sent!!!<p/>';
                    alertMsg.classList.add("_show__success");
                    calcForm.reset();
                    calcForm.classList.remove("_sending");
                    if ($(e.target).hasClass("payment")) {
                        $('.stripe-form input[type="submit"]').trigger("click");
                        return;
                    }
                    window.location.href = "https://www.tivacleaners.com/confirmation/";
                } else {
                    let alertMsg = document.querySelector(".calculator__alert");
                    alertMsg.innerHTML = '<p class="alert__msg" >Error!!!<p/>';
                    alertMsg.classList.add("_show");
                    calcForm.classList.remove("_sending");
                }
            } else {
                let alertMsg = document.querySelector(".calculator__alert");
                alertMsg.innerHTML = '<p class="alert__msg" >Fill in required fields!!!<p/>';
                alertMsg.classList.add("_show");
            }
        }));
        window["FLS"] = false;
        isWebp();
        menuInit();
        fullVHfix();
        spollers();
        pageNavigation();
    })();
})();