/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Code.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Code.
 * @public
 */

goog.module('Code.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('soy.asserts');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {{
 *    handleTabClick: (?),
 *    tabs_: (?),
 *    content_: (?soydata.SanitizedHtml|string|undefined)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  soy.asserts.assertType(opt_data.content_ == null || (opt_data.content_ instanceof Function) || (opt_data.content_ instanceof soydata.UnsanitizedText) || goog.isString(opt_data.content_), 'content_', opt_data.content_, '?soydata.SanitizedHtml|string|undefined');
  var content_ = /** @type {?soydata.SanitizedHtml|string|undefined} */ (opt_data.content_);
  ie_open('div', null, null,
      'class', 'code-tabs');
    $tabs(opt_data, null, opt_ijData);
    $content(opt_data, null, opt_ijData);
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Code.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $tabs(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  ie_open('div', null, null,
      'class', 'code-tabs-header');
    if (opt_data.tabs_) {
      var tabList21 = opt_data.tabs_;
      var tabListLen21 = tabList21.length;
      for (var tabIndex21 = 0; tabIndex21 < tabListLen21; tabIndex21++) {
        var tabData21 = tabList21[tabIndex21];
        var selected__soy11 = tabIndex21 == 0;
        ie_open('button', null, null,
            'class', 'code-tab' + (selected__soy11 ? ' selected' : ''),
            'data-index', tabIndex21,
            'type', 'button',
            'data-onclick', opt_data.handleTabClick);
          var dyn0 = tabData21;
          if (typeof dyn0 == 'function') dyn0(); else if (dyn0 != null) itext(dyn0);
        ie_close('button');
      }
    }
  ie_close('div');
}
exports.tabs = $tabs;
if (goog.DEBUG) {
  $tabs.soyTemplateName = 'Code.tabs';
}


/**
 * @param {{
 *    content_: (?soydata.SanitizedHtml|string|undefined)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $content(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  soy.asserts.assertType(opt_data.content_ == null || (opt_data.content_ instanceof Function) || (opt_data.content_ instanceof soydata.UnsanitizedText) || goog.isString(opt_data.content_), 'content_', opt_data.content_, '?soydata.SanitizedHtml|string|undefined');
  var content_ = /** @type {?soydata.SanitizedHtml|string|undefined} */ (opt_data.content_);
  ie_open('div', null, null,
      'class', 'content');
    if (content_) {
      content_();
    }
  ie_close('div');
}
exports.content = $content;
if (goog.DEBUG) {
  $content.soyTemplateName = 'Code.content';
}

exports.render.params = ["content_","handleTabClick","tabs_"];
exports.render.types = {"content_":"html","handleTabClick":"any","tabs_":"any"};
exports.tabs.params = ["handleTabClick","tabs_"];
exports.tabs.types = {"handleTabClick":"any","tabs_":"any"};
exports.content.params = ["content_"];
exports.content.types = {"content_":"html"};
templates = exports;
return exports;

});

class Code extends Component {}
Soy.register(Code, templates);
export { Code, templates };
export default templates;
/* jshint ignore:end */
