/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from DigitalClock.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DigitalClock.
 * @public
 */

goog.module('DigitalClock.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'container timer');
    ie_open('div', null, null,
        'class', 'col-md-12');
      ie_open('kbd');
        ie_open('kbd');
          itext((goog.asserts.assert((opt_data.hours) != null), opt_data.hours));
        ie_close('kbd');
        itext(':');
        ie_open('kbd');
          itext((goog.asserts.assert((opt_data.minutes) != null), opt_data.minutes));
        ie_close('kbd');
        itext(':');
        ie_open('kbd');
          itext((goog.asserts.assert((opt_data.seconds) != null), opt_data.seconds));
        ie_close('kbd');
        itext(':');
        ie_open('kbd');
          itext((goog.asserts.assert((opt_data.miliseconds) != null), opt_data.miliseconds));
        ie_close('kbd');
      ie_close('kbd');
    ie_close('div');
    ie_open('div', null, null,
        'class', 'col-md-12');
      ie_open('div', null, null,
          'class', 'btn-group');
        ie_open('button', null, null,
            'class', 'btn btn-default',
            'type', 'button',
            'data-onclick', 'onStartClick');
          itext('Start');
        ie_close('button');
        ie_open('button', null, null,
            'class', 'btn btn-default',
            'type', 'button',
            'data-onclick', 'onPauseClick');
          itext('Pause');
        ie_close('button');
        ie_open('button', null, null,
            'class', 'btn btn-default',
            'type', 'button',
            'data-onclick', 'onStopClick');
          itext('Stop');
        ie_close('button');
        ie_open('button', null, null,
            'class', 'btn btn-default',
            'type', 'button',
            'data-onclick', 'onLapClick');
          itext('Lap');
        ie_close('button');
        ie_open('button', null, null,
            'class', 'btn btn-default',
            'type', 'button',
            'data-onclick', 'onClearLapClick');
          itext('Clean laps');
        ie_close('button');
      ie_close('div');
    ie_close('div');
    ie_open('div', null, null,
        'class', 'col-md-12');
      var lapList76 = opt_data.laps;
      var lapListLen76 = lapList76.length;
      for (var lapIndex76 = 0; lapIndex76 < lapListLen76; lapIndex76++) {
        var lapData76 = lapList76[lapIndex76];
        ie_open('div', null, null,
            'class', 'col-md-12');
          itext((goog.asserts.assert((lapIndex76) != null), lapIndex76));
          itext('. ');
          ie_open('kbd');
            ie_open('kbd');
              itext((goog.asserts.assert((lapData76.hours) != null), lapData76.hours));
            ie_close('kbd');
            itext(':');
            ie_open('kbd');
              itext((goog.asserts.assert((lapData76.minutes) != null), lapData76.minutes));
            ie_close('kbd');
            itext(':');
            ie_open('kbd');
              itext((goog.asserts.assert((lapData76.seconds) != null), lapData76.seconds));
            ie_close('kbd');
            itext(':');
            ie_open('kbd');
              itext((goog.asserts.assert((lapData76.miliseconds) != null), lapData76.miliseconds));
            ie_close('kbd');
          ie_close('kbd');
        ie_close('div');
      }
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'DigitalClock.render';
}

exports.render.params = ["hours","minutes","seconds","miliseconds","laps"];
exports.render.types = {"hours":"any","minutes":"any","seconds":"any","miliseconds":"any","laps":"any"};
templates = exports;
return exports;

});

class DigitalClock extends Component {}
Soy.register(DigitalClock, templates);
export { DigitalClock, templates };
export default templates;
/* jshint ignore:end */
