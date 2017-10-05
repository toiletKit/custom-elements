(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function a(a, b) {
    for (var c, d = 0; d < b.length; d++) {
      c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, 'value' in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
  }return function (b, c, d) {
    return c && a(b.prototype, c), d && a(b, d), b;
  };
}();function _classCallCheck(a, b) {
  if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function');
}function _possibleConstructorReturn(a, b) {
  if (!a) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b && ('object' == (typeof b === 'undefined' ? 'undefined' : _typeof(b)) || 'function' == typeof b) ? b : a;
}function _inherits(a, b) {
  if ('function' != typeof b && null !== b) throw new TypeError('Super expression must either be null or a function, not ' + (typeof b === 'undefined' ? 'undefined' : _typeof(b)));a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b);
}(function () {
  var a = function (a) {
    function b() {
      return _classCallCheck(this, b), _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
    }return _inherits(b, a), _createClass(b, [{ key: 'connectedCallback', value: function connectedCallback() {
        var a = this,
            b = this.firstElementChild;this.mode = 'hover' === this.mode ? 'mouseover' : 'click', b.setAttribute('aria-haspopup', !0), b.setAttribute('aria-expanded', !1), b.addEventListener(this.mode, function () {
          a.hasAttribute('expanded') ? (a.removeAttribute('expanded'), b.setAttribute('aria-expanded', !1), a.dispatchCustomEvent('tk.dropdown.hide')) : (a.setAttribute('expanded', ''), b.setAttribute('aria-expanded', !0), a.dispatchCustomEvent('tk.dropdown.show')), document.addEventListener(a.mode, function (c) {
            c.target === b || a.findAncestor(c.target, 'tk-dropdown') || a.close();
          });
        });
      } }, { key: 'disconnectedCallback', value: function disconnectedCallback() {
        this.removeEventListener('tk.dropdown.show', this.close, !0), this.removeEventListener('tk.dropdown.hide', this.close, !0), this.removeEventListener('mouseover', this.close, !0), this.removeEventListener('click', this.close, !0);
      } }, { key: 'attributeChangedCallback', value: function attributeChangedCallback(a) {
        switch (a) {}
      } }, { key: 'close', value: function close() {
        this.removeAttribute('expanded'), this.firstElementChild.setAttribute('aria-expanded', !1), this.dispatchCustomEvent('tk.dropdown.hide');
      } }, { key: 'dispatchCustomEvent', value: function dispatchCustomEvent(a) {
        var b = new CustomEvent(a, { bubbles: !0, cancelable: !0 });b.relatedTarget = this, this.dispatchEvent(b), this.removeEventListener(a, this);
      } }, { key: 'findAncestor', value: function findAncestor(a, b) {
        for (; (a = a.parentElement) && a.nodeName.toLowerCase() !== b;) {}return a;
      } }, { key: 'mode', get: function get() {
        return this.getAttribute('mode');
      }, set: function set(a) {
        return this.setAttribute('mode', a);
      } }], [{ key: 'observedAttributes', get: function get() {
        return ['mode'];
      } }]), b;
  }(HTMLElement);customElements.define('tk-dropdown', a);
})();

},{}]},{},[1]);
