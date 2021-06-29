if (!window.customElements.get('umd-accordion')) {
  window.AccordionElement = AccordionElement;
  window.customElements.define('umd-accordion', AccordionElement);
}
