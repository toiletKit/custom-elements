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
  var a = { TAB: 9, ESC: 27 },
      b = function (b) {
    function c() {
      _classCallCheck(this, c);var a = _possibleConstructorReturn(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this));return a.triggerBtn = '', a.focusableElements = null, a.focusableSelectors = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'], a.container = a.querySelector('.tk-modal-dialog'), a;
    }return _inherits(c, b), _createClass(c, [{ key: 'attributeChangedCallback', value: function attributeChangedCallback(a) {
        switch (a) {}
      } }, { key: 'connectedCallback', value: function connectedCallback() {
        if (!this.id) throw new Error('`Tk-modal` requires an id');if (this.title = this.getAttribute('title') || 'Modal', this.setAttribute('role', 'dialog'), this.classList.add('fade'), this.iframe = this.getAttribute('iframe') || '', this.width = this.getAttribute('width') || '100%', this.height = this.getAttribute('height') || '600px', !this.container) {
          var b = document.createElement('div');b.classList.add('tk-modal-dialog'), b.setAttribute('role', 'document'), b.innerHTML = this.innerHTML, this.innerHTML = '', this.appendChild(b), this.container = this.querySelector('.tk-modal-dialog');
        }this.header = this.querySelector('header'), this.main = this.querySelector('section'), this.footer = this.querySelector('footer'), this.setAttribute('tabindex', -1);var a = 'modal-title-' + new Date().getUTCMilliseconds();if (this.setAttribute('aria-labelledby', a), !this.header) {
          var c = document.createElement('h5');c.innerText = this.title, c.id = a;var d = document.createElement('button');d.setAttribute('aria-label', 'Close'), d.setAttribute('data-dismiss', ''), d.innerHTML = '<span aria-hidden="true">\xD7</span>';var e = document.createElement('header');e.appendChild(c), e.appendChild(d), this.container.insertAdjacentElement('afterbegin', e);
        }this.header = this.container.querySelector('header'), this.body = this.container.querySelector('section'), this.footer = this.container.querySelector('footer'), this.triggerBtn = document.querySelector('[data-href="#' + this.id + '"]'), this.triggerBtn && this.triggerBtn.addEventListener('click', this.open.bind(this));
      } }, { key: 'disconnectedCallback', value: function disconnectedCallback() {
        this.triggerBtn && this.triggerBtn.removeEventListener('click', this.open);
      } }, { key: 'open', value: function open() {
        var a = this,
            b = document.createElement('div');if (b.classList.add('modal-backdrop', 'fade'), b.classList.add('modal-backdrop', 'show'), document.body.appendChild(b), this.removeAttribute('aria-hidden'), this.body && (this.iframeEl = this.main.querySelector('iframe'), this.iframe)) {
          this.iframeEl && this.iframeEl.parentNode.remove(this.iframeEl);var d = document.createElement('iframe');d.width = this.width, d.height = this.height, d.src = this.iframe, d.setAttribute('frameborder', 0), this.body.appendChild(d), this.iframeEl = this.main.querySelector('iframe');
        }this.adjustDimensions(), this.scrollTop = 0, this.classList.add('show'), this.focusableElements = [].slice.call(this.querySelectorAll(this.focusableSelectors.join())), this.focusableElements.length ? this.focusableElements[0].focus() : this.header.querySelector('button').focus(), this.evKeypress = this.keyPress.bind(this), this.evClose = this.close.bind(this), this.evDocumentClose = this.documentClose.bind(this), this.addEventListener('keydown', this.evKeypress), document.addEventListener('click', this.evDocumentClose);var c = [].slice.call(this.querySelectorAll('[data-dismiss]'));c.forEach(function (b) {
          b.addEventListener('click', a.evClose);
        });
      } }, { key: 'close', value: function close() {
        var a = this;this.removeEventListener('keydown', this.evKeypress), document.removeEventListener('click', this.evDocumentClose);var b = [].slice.call(this.querySelectorAll('[data-dismiss]'));b.forEach(function (b) {
          b.removeEventListener('click', a.evClose);
        });var c = document.querySelector('.modal-backdrop');c && document.body.removeChild(c), this.setAttribute('aria-hidden', 'true'), this.classList.remove('show'), this.main.innerHTML = '', this.triggerBtn.focus();
      } }, { key: 'documentClose', value: function documentClose(a) {
        this.findAncestorByClass(a.target, 'tk-modal-dialog') || a.target === this.triggerBtn || this.close();
      } }, { key: 'keyPress', value: function keyPress(b) {
        if (b.keyCode === a.ESC && this.close(), b.keyCode === a.TAB) {
          var c = this.focusableElements.indexOf(document.activeElement);b.shiftKey && (0 === c || -1 === c) && (this.focusableElements[this.focusableElements.length - 1].focus(), b.preventDefault()), b.shiftKey || c !== this.focusableElements.length - 1 || (this.focusableElements[0].focus(), b.preventDefault());
        }
      } }, { key: 'adjustDimensions', value: function adjustDimensions() {
        var a = this.offsetHeight;a += parseInt(window.getComputedStyle(this).getPropertyValue('margin-top'), 10), a += parseInt(window.getComputedStyle(this).getPropertyValue('margin-bottom'), 10);var b = this.body.getBoundingClientRect.height,
            c = this.body.offsetHeight;c += parseInt(window.getComputedStyle(this.body).getPropertyValue('margin-top'), 10), c += parseInt(window.getComputedStyle(this.body).getPropertyValue('margin-bottom'), 10);var d = this.header.offsetHeight;d += parseInt(window.getComputedStyle(this.header).getPropertyValue('margin-top'), 10), d += parseInt(window.getComputedStyle(this.header).getPropertyValue('margin-bottom'), 10);var e = this.footer.offsetHeight;e += parseInt(window.getComputedStyle(this.footer).getPropertyValue('margin-top'), 10), e += parseInt(window.getComputedStyle(this.footer).getPropertyValue('margin-bottom'), 10);var f = this.offsetTop,
            g = window.height - 2 * f,
            h = c - b,
            i = g - (d + e + h);if (this.iframeEl) {
          var j = this.iframeEl.getBoundingClientRect().height;j > i && (this.container.style.maxHeight = i, this.container.style.overflowY = 'auto', this.iframeEl.style.maxHeight = i - h);
        } else a > g && (this.container.style.maxHeight = i, this.container.style.overflowY = 'auto');
      } }, { key: 'findAncestorByClass', value: function findAncestorByClass(a, b) {
        for (; (a = a.parentElement) && !a.classList.contains(b);) {}return a;
      } }], [{ key: 'observedAttributes', get: function get() {
        return ['width', 'height', 'innerWidth', 'innerHeight', 'iframe'];
      } }]), c;
  }(HTMLElement);customElements.define('tk-modal', b);
})();

},{}]},{},[1]);
