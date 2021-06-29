declare global {
  interface Window {
    UtilityHeaderElement: typeof UtilityHeaderElement;
  }
}

const flagIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28"><title>Flag</title><path d="M5 4c0 .72-.39 1.36-1 1.72V25.5c0 .266-.234.5-.5.5h-1c-.266 0-.5-.234-.5-.5V5.72c-.61-.36-1-1-1-1.72 0-1.11.89-2 2-2s2 .89 2 2zm23 1v11.922c0 .578-.36.797-.812 1.03-1.766.954-3.72 1.814-5.766 1.814-2.875 0-4.25-2.188-7.656-2.188-2.484 0-5.094 1.125-7.25 2.28-.172.095-.328.142-.516.142-.547 0-1-.453-1-1V7.406c0-.375.187-.64.484-.86.375-.25.828-.468 1.234-.67 1.97-1 4.36-1.876 6.578-1.876 2.453 0 4.375.812 6.547 1.828.438.22.89.297 1.375.297C23.67 6.125 26.312 4 26.998 4c.548 0 1 .453 1 1z"></path></svg>`;
const homeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28"><title>School</title><path d="M22 15.5V23c0 .547-.453 1-1 1h-6v-6h-4v6H5c-.547 0-1-.453-1-1v-7.5c0-.03.016-.063.016-.094L13 8l8.984 7.406c.016.03.016.063.016.094zm3.484-1.078l-.97 1.156c-.077.094-.202.156-.327.172h-.047c-.125 0-.234-.03-.328-.11L13 6.626 2.185 15.64c-.11.08-.234.126-.375.11-.124-.016-.25-.078-.327-.172l-.97-1.156c-.17-.203-.14-.53.064-.703L11.81 4.36c.657-.547 1.72-.547 2.376 0L18 7.547V4.5c0-.28.218-.5.5-.5h3c.28 0 .5.22.5.5v6.375l3.42 2.844c.204.17.235.5.064.702z"></path></svg>`;
const starIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28"><title>Star</title><path d="M26 10.11c0 .28-.203.546-.406.75l-5.672 5.53 1.344 7.812c.016.11.016.203.016.313 0 .406-.187.78-.64.78-.22 0-.44-.077-.626-.186L13 21.42 5.984 25.11c-.203.108-.406.186-.625.186-.454 0-.657-.375-.657-.78 0-.11.016-.204.03-.314L6.08 16.39.39 10.86c-.187-.204-.39-.47-.39-.75 0-.47.483-.657.874-.72l7.844-1.14 3.516-7.11c.14-.297.406-.64.766-.64s.625.343.766.64l3.516 7.11 7.844 1.14c.375.063.875.25.875.72z"></path></svg>`;
const calendarIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28"><title>Calendar</title><path d="M2 26h22V10H2v16zM8 7V2.5c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5zm12 0V2.5c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5zm6-1v20c0 1.094-.906 2-2 2H2c-1.094 0-2-.906-2-2V6c0-1.094.906-2 2-2h2V2.5C4 1.125 5.125 0 6.5 0h1C8.875 0 10 1.125 10 2.5V4h6V2.5C16 1.125 17.125 0 18.5 0h1C20.875 0 22 1.125 22 2.5V4h2c1.094 0 2 .906 2 2z"></path></svg>`;
const mIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 35 28"><title>Gift</title><path d="M16 1.4C7.937 1.4 1.4 7.937 1.4 16S7.937 30.6 16 30.6c8.063 0 14.6-6.537 14.6-14.6S24.063 1.4 16 1.4zm3.38 22.66v-2.55h2L21 13l-4.68 8.36h-.38L11.11 13l-.27 8.55h2v2.55H6.08v-2.55H8l.45-11.5H6.42V7.5h4.54l5.16 9.19 5-9.27h4.51v2.55h-2.04l.61 11.49h2v2.55z"></path></svg>`;
const searchIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28"><title>Search</title><path d="M18 13c0-3.86-3.14-7-7-7s-7 3.14-7 7 3.14 7 7 7 7-3.14 7-7zm8 13c0 1.094-.906 2-2 2-.53 0-1.047-.22-1.406-.594l-5.36-5.344C15.408 23.328 13.22 24 11.002 24 4.924 24 0 19.076 0 13S4.924 2 11 2s11 4.92 11 11c0 2.218-.67 4.405-1.936 6.233l5.36 5.36c.358.358.577.874.577 1.405z"></path></svg>`;

const template = document.createElement('template');
const Colors = {
  white: '#fff',
  offWhite: '#f1f1f1',
  grayLight: '#e6e6e6',
  grayDark: '#454545',
  red: '#e21833',
  redDark: '#951022',
};
const Breakpoints = {
  tabletMax: '1023px',
  desktopMin: '1024px',
};

template.innerHTML = `
  <style>
  
    :host {
      display: block;
      background-color: ${Colors.red};
    }

    :host * {
      padding: 0;
      margin: 0;
    }

    a {
      color: ${Colors.white} !important;
      text-decoration: none;
      text-transform: uppercase;
    }

    svg {
      fill: ${Colors.white} !important;
    }

    .lock {
      margin: 0 auto;
      display: flex;
      align-items: center;
    }

    @media (min-width: ${Breakpoints.desktopMin}) {
      .lock {
        min-width: 960px;
      }
    }

    .menu {

    }

    @media (max-width: ${Breakpoints.tabletMax}) {
      .menu {
        position: absolute;
        height: 0;
      }
    }

    @media (min-width: ${Breakpoints.desktopMin}) {
      .menu {
        display: flex;
        margin-left: auto;
      }
    }

    .menu > * {
      display: flex;
      align-items: center;
      padding: 10px 15px;
      background-color: transparent;
      transition: background .5s;
    }

    .menu > *:hover, 
    .menu > *:focus {
      background-color: ${Colors.redDark};
    }

    .menu > * > span {
      margin-left: 10px;
    }

    .menu svg {
      max-width: 15px;
    }

    .menu a {
      font-weight: 700;
      font-size: 13px;
      font-family: Source Sans,Source Sans Pro,sans-serif;
    }

    .menu button {
      background: transparent;
      border: none;
    }

    .logo {
      font-size: 14px;
      font-family: Crimson Text, Georgia, serif;
      letter-spacing: 1px;
    }
    
  </style>
`;

const makeLinkElement = ({
  name,
  icon,
  url,
}: {
  name: string;
  icon: string;
  url: string;
}) => {
  const tag = document.createElement('a');

  tag.setAttribute('href', url);
  tag.setAttribute('target', '_blank');
  tag.setAttribute('rel', 'noopener noreferrer');
  tag.innerHTML = `${icon} <span>${name}</span>`;

  return tag;
};

const makeSchoolsElement = () => {};

export default class UtilityHeaderElement extends HTMLElement {
  _shadow: ShadowRoot;
  _containerElement = document.createElement('div');
  _menuContainerElement = document.createElement('div');
  _logoElement = document.createElement('a');

  _menuElements = [] as Array<{ order: number; element: HTMLElement }>;
  _paddingAmount = '20';

  _isSearchSet = false;
  _isEventsSet = false;
  _isNewsSet = false;
  _isSchoolsSet = false;
  _isAdmissionsSet = false;
  _isGiftSet = false;

  constructor() {
    super();

    this._shadow = this.attachShadow({ mode: 'open' });
    this._shadow.appendChild(template.content.cloneNode(true));
    this.setContainer();
  }

  static get observedAttributes() {
    return [
      'padding',
      'size',
      'search',
      'events',
      'news',
      'schools',
      'admissions',
      'gift',
    ];
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ) {
    if (name === 'padding' && newValue) {
      this._paddingAmount = newValue;
      this.paddingContainer({ padding: this._paddingAmount });
    }

    if (name === 'size' && newValue) {
      const width = 'full' ? '100%' : newValue;
      this.sizeContainer({ width });
    }

    if (name === 'admissions' && !this._isAdmissionsSet) {
      this._isAdmissionsSet = true;
      const element = makeLinkElement({
        name: 'Admissions',
        url: 'https://umd.edu/admissions',
        icon: flagIcon,
      });

      this._menuElements.push({
        order: 1,
        element,
      });
    }

    if (name === 'schools' && !this._isSchoolsSet) {
      this._isSchoolsSet = true;
      const element = makeLinkElement({
        name: 'Colleges & Schools',
        url: 'https://umd.edu/colleges-and-schools',
        icon: homeIcon,
      });

      this._menuElements.push({
        order: 2,
        element,
      });
    }

    if (name === 'news' && !this._isNewsSet) {
      this._isNewsSet = true;

      const element = makeLinkElement({
        name: 'News',
        url: 'https://today.umd.edu/',
        icon: starIcon,
      });

      this._menuElements.push({
        order: 3,
        element,
      });
    }

    if (name === 'events' && !this._isEventsSet) {
      this._isEventsSet = true;

      const element = makeLinkElement({
        name: 'Events',
        url: 'https://calendar.umd.edu',
        icon: calendarIcon,
      });

      this._menuElements.push({
        order: 4,
        element,
      });
    }

    if (name === 'gift' && !this._isGiftSet) {
      this._isGiftSet = true;

      const element = makeLinkElement({
        name: 'Make a Gift',
        url: 'https://giving.umd.edu/giving',
        icon: mIcon,
      });

      this._menuElements.push({
        order: 5,
        element,
      });
    }

    if (name === 'search' && !this._isSearchSet) {
      this._isSearchSet = true;
      this.setSearch();
    }
  }

  connectedCallback() {
    this.setLastElementPadding();
  }

  setContainer() {
    this._logoElement.innerHTML = 'University of Maryland';
    this._logoElement.setAttribute('href', 'https://umd.edu');
    this._logoElement.setAttribute('target', '_blank');
    this._logoElement.setAttribute('rel', 'noopener noreferrer');
    this._logoElement.classList.add('logo');

    this._containerElement.classList.add('lock');
    this._menuContainerElement.classList.add('menu');

    this._containerElement.appendChild(this._logoElement);
    this._containerElement.appendChild(this._menuContainerElement);
    this._shadow.appendChild(this._containerElement);
  }

  paddingContainer({ padding }: { padding: string }) {
    this._containerElement.style.paddingLeft = `${padding}px`;
  }

  sizeContainer({ width }: { width: string }) {
    this._containerElement.style.maxWidth = `${width}px`;
  }

  setSearch() {
    const button = document.createElement('button');
    const formElement = document.createElement('form');

    button.setAttribute('aria-label', 'enable the search form');
    button.setAttribute('type', 'button');
    button.innerHTML = `${searchIcon}`;

    this._menuElements.push({
      order: 6,
      element: button,
    });
  }

  setLastElementPadding() {
    const items = this._menuElements.sort((a, b) =>
      a.order > b.order ? 1 : -1,
    );

    items.forEach(({ element }, i) => {
      if (i === items.length - 1) {
        const padding = parseInt(this._paddingAmount);
        const elementPadding = padding > 20 ? 20 : padding;
        element.style.paddingRight = `${elementPadding}px`;
        if (padding > 20) {
          this._containerElement.style.paddingRight = `${padding - 20}px`;
        }
      }
      this._menuContainerElement.appendChild(element);
    });
  }
}

if (!window.customElements.get('umd-utility-header')) {
  window.UtilityHeaderElement = UtilityHeaderElement;
  window.customElements.define('umd-utility-header', UtilityHeaderElement);
}
