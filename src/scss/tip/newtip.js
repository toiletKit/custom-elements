class HowtoTooltip extends HTMLElement {
  constructor() {
    super();
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  connectedCallback() {
    if (!this.hasAttribute('role'))
      this.setAttribute('role', 'tooltip');

    if (!this.hasAttribute('tabindex'))
      this.setAttribute('tabindex', -1);

    this.hide();

    this.target = document.querySelector('[aria-describedby=' + this.id + ']');
    if (!this.target)
      return;
    this.target.addEventListener('focus', this.show);
    this.target.addEventListener('blur', this.hide);
    this.target.addEventListener('mouseenter', this.show);
    this.target.addEventListener('mouseleave', this.hide);
  }

  disconnectedCallback() {
    if (!this.target)
      return;
    this.target.removeEventListener('focus', this.show);
    this.target.removeEventListener('blur', this.hide);
    this.target.removeEventListener('mouseenter', this.show);
    this.target.removeEventListener('mouseleave', this.hide);
    this.target = null;
  }

  show() {
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

window.customElements.define('howto-tooltip', HowtoTooltip);
