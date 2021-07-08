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
const chevronIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28"><title>Menu</title><path d="M26.297 12.625L14.703 24.203c-.39.39-1.016.39-1.406 0L1.703 12.625c-.39-.39-.39-1.03 0-1.422l2.594-2.578c.39-.39 1.016-.39 1.406 0L14 16.922l8.297-8.297c.39-.39 1.016-.39 1.406 0l2.594 2.578c.39.39.39 1.03 0 1.422z"></path></svg>`;

const Colors = {
  white: '#fff',
  offWhite: '#f1f1f1',
  grayLight: '#e6e6e6',
  grayDark: '#454545',
  red: '#e21833',
  redDark: '#951022',
};
const Breakpoints = {
  tabletMax: 1023,
  desktopMin: 1024,
};

const MOBILE_MENU_ID = 'mobile-menu';
const SEARCH_FORM_ID = 'umd-global-search';
const isDesktop = window.innerWidth >= Breakpoints.desktopMin;

const ANIMATION_IN_SPEED = 800;
const ANIMATION_OUT_SPEED = 400;

const template = document.createElement('template');

template.innerHTML = `
  <style>
  
    :host {
      display: block;
      background-color: ${Colors.red};
    }

    :host * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    :host a {
      color: ${Colors.white} !important;
      text-decoration: none;
      text-transform: uppercase;
    }

    :host svg {
      max-width: 15px;
      transition: fill ${ANIMATION_OUT_SPEED}ms;
    }

    @media (max-width: ${Breakpoints.tabletMax}px) {
      :host svg {
        fill: ${Colors.red} !important;
        transition: fill ${ANIMATION_IN_SPEED}ms;
      }
    }

    @media (min-width: ${Breakpoints.desktopMin}px) {
      :host svg {
        fill: ${Colors.white} !important;
      }
    }

    :host button {
      background: transparent;
      border: none;
      cursor: pointer;
    }

    @media (max-width: ${Breakpoints.tabletMax}px) {
      :host form {
        padding: 20px 15px;
        order: 1;
      }
    }

    @media (min-width: ${Breakpoints.desktopMin}px) {
      :host form {
        position: absolute;
        top: 48px;
        right: 0;
        background-color: ${Colors.white};
        min-width: 420px;
        height: 0;
        overflow: hidden;
        transition: height ${ANIMATION_OUT_SPEED}ms;
      }

      :host form[aria-hidden="true"] {
        transition: height ${ANIMATION_OUT_SPEED}ms;
      }

      :host form[aria-hidden="false"] {
        transition: height ${ANIMATION_IN_SPEED}ms;
      }
    }

    :host form > div {
      display: flex;
    }

    @media (min-width: ${Breakpoints.desktopMin}px) {
      :host form > div {
        padding: 10px;
      }
    }

    :host input[type="text"] {
      width: calc(100% - 120px) !important;
      display: block !important;
      padding: 0 10px !important;
      height: 44px !important;
      font-family: Source Sans,Source Sans Pro,sans-serif !important;
      font-size: 13px !important;
      line-height: 1.3 !important;
      border: 1px solid #ccc !important;
    }

    :host input[type="submit"] {
      border: none;
      background-color: ${Colors.red};
      color: ${Colors.white};
      font-weight: 700;
      font-size: 12px;
      transition: background ${ANIMATION_OUT_SPEED}ms;
      padding: 15px 30px;
      min-width: 120px;
    }

    :host input[type="submit"]:hover,
    :host input[type="submit"]:focus {
      background-color: ${Colors.redDark};
      transition: background ${ANIMATION_IN_SPEED}ms;
    }

    :host .lock {
      margin: 0 auto;
      display: flex;
      align-items: center;
    }

    @media (min-width: ${Breakpoints.desktopMin}px) {
      :host .lock {
        min-width: 960px;
      }
    }

    :host .mobile-button {
      margin-left: auto;
    }

    @media (min-width: ${Breakpoints.desktopMin}px) {
      :host  .mobile-button  {
        display: none;
      }
    }

    :host .mobile-button:hover,
    :host .mobile-button:focus {
      background-color: ${Colors.redDark};
    }

    @media (max-width: ${Breakpoints.tabletMax}px) {
      :host .menu {
        position: absolute;
        width: 100%;
        left: 0;
        top: 39px;
        box-shadow: 0 5px 5px 1px rgba(0, 0, 0, .2);
        height: 0;
        overflow: hidden;
        transition: height ${ANIMATION_OUT_SPEED}ms;
        display: flex;
        flex-direction: column;
      }

      :host .menu[aria-hidden="true"] {
        transition: height ${ANIMATION_OUT_SPEED}ms;
        display: none;
      }

      :host .menu[aria-hidden="false"] {
        transition: height ${ANIMATION_IN_SPEED}ms;
      }
    }

    @media (min-width: ${Breakpoints.desktopMin}px) {
      :host .menu {
        display: flex;
        margin-left: auto;
        height: inherit !important;
        display: flex !important;
      }
    }

    :host .menu > a,
    :host button {
      display: flex;
      align-items: center;
      padding: 10px 15px;
      background-color: transparent;
    }

    @media (max-width: ${Breakpoints.tabletMax}px) {
      :host .menu > a {
        border-top: 1px solid ${Colors.grayLight};
        color: ${Colors.red} !important;
        order: 2;
        transition: background ${ANIMATION_OUT_SPEED}ms, color ${ANIMATION_OUT_SPEED}ms;
      }

      :host .menu > a:first-of-type {
        border-top: none;
      }
    }

    @media (max-width: ${Breakpoints.tabletMax}px) {
      :host .menu > a:hover,
      :host .menu > a:focus {
        background-color: ${Colors.red} !important;
        color: ${Colors.white} !important;
        transition: background ${ANIMATION_IN_SPEED}ms, color ${ANIMATION_IN_SPEED}ms;
      }

      :host .menu > a:hover svg,
      :host .menu > a:focus svg {
        fill: ${Colors.white} !important;
      }
    }

    @media (min-width: ${Breakpoints.desktopMin}px) {
      :host .menu > *,
      :host .lock > button {
        transition: background ${ANIMATION_OUT_SPEED}ms;
      }
    }

    @media (min-width: ${Breakpoints.desktopMin}px) {
      :host .menu > *:not(form):hover, 
      :host .menu > *:not(form):focus {
        background-color: ${Colors.redDark};
        transition: background ${ANIMATION_IN_SPEED}ms;
      }
    }

    :host .menu > * > span {
      margin-left: 10px;
    }

    :host .menu a {
      font-weight: 700;
      font-size: 13px;
      font-family: Source Sans,Source Sans Pro,sans-serif;
    }

    @media (max-width: ${Breakpoints.tabletMax}px) {
      :host .menu button {
        display: none;
      }
    }

    :host .logo {
      font-size: 14px;
      font-family: Crimson Text, Georgia, serif;
      letter-spacing: 1px;
      padding: 10px 0;
    }

    @media (max-width: ${Breakpoints.tabletMax}px) {
      :host .mobile-button svg {
        fill: ${Colors.white} !important;
        max-width: 20px;
      }
    }

    @media (min-width: ${Breakpoints.desktopMin}px) {
      :host .lock .mobile-button {
        display: none;
      }
    }

    :host sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
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

const toggleExpandElements = ({
  expandElement,
  elements,
}: {
  expandElement: HTMLElement;
  elements: Array<HTMLElement>;
}) => {
  const isOpen = expandElement.getAttribute('aria-hidden') === 'false';

  const eventKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Esc' || event.keyCode == 27) {
      close();
    }
  };

  const eventKeyUp = (event: KeyboardEvent) => {
    const path = event.composedPath();
    const currentElement = path[0] as HTMLElement;

    if (!expandElement) return;

    if (event.key === 'Tab' || event.keyCode == 9) {
      if (!expandElement.contains(currentElement)) {
        close();
      }
    }

    if (event.key === 'ArrowDown' || event.keyCode == 40) {
      const nextElement = currentElement.nextElementSibling as HTMLElement;

      if (expandElement.contains(nextElement)) {
        nextElement.focus();
      }
    }

    if (event.key === 'ArrowUp' || event.keyCode == 38) {
      const previousElement = currentElement.previousElementSibling as HTMLElement;

      if (expandElement.contains(previousElement)) {
        previousElement.focus();
      }
    }
  };

  const open = () => {
    expandElement.style.display = 'block';

    setTimeout(() => {
      const size = elements.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.offsetHeight;
      }, 0);
      expandElement.setAttribute('aria-hidden', 'false');
      expandElement.style.height = `${size}px`;

      elements[0].focus();

      window.addEventListener('keydown', eventKeyDown);
      window.addEventListener('keyup', eventKeyUp);
    }, 100);
  };

  const close = () => {
    expandElement.style.height = `0`;

    setTimeout(() => {
      expandElement.style.display = 'none';
      expandElement.setAttribute('aria-hidden', 'true');

      window.removeEventListener('keydown', eventKeyDown);
      window.removeEventListener('keyup', eventKeyUp);
    }, ANIMATION_OUT_SPEED + 100);
  };

  isOpen ? close() : open();
};

const makeMobileMenuButton = ({
  expandElement,
}: {
  expandElement: HTMLDivElement;
}) => {
  const button = document.createElement('button');
  const elements = Array.from(
    expandElement.querySelectorAll('a, form'),
  ) as Array<HTMLElement>;

  button.innerHTML = `${chevronIcon}`;
  button.setAttribute('type', 'button');
  button.setAttribute('aria-label', 'toggle mobile menu');
  button.setAttribute('aria-controls', MOBILE_MENU_ID);
  button.classList.add('mobile-button');

  button.addEventListener('click', () => {
    toggleExpandElements({ expandElement, elements });
  });

  return button;
};

const makeSearchFormButton = ({
  expandElement,
}: {
  expandElement: HTMLDivElement | HTMLFormElement;
}) => {
  const button = document.createElement('button');
  const elements = Array.from(expandElement.querySelectorAll('div'));

  button.setAttribute('aria-label', 'enable the search form');
  button.setAttribute('type', 'button');
  button.innerHTML = `${searchIcon}`;
  button.setAttribute('aria-controls', SEARCH_FORM_ID);

  button.addEventListener('click', () => {
    toggleExpandElements({ expandElement, elements });
  });

  return button;
};

const makeLogoElement = () => {
  const logo = document.createElement('a');

  logo.innerHTML = 'University of Maryland';
  logo.setAttribute('href', 'https://umd.edu');
  logo.setAttribute('target', '_blank');
  logo.setAttribute('rel', 'noopener noreferrer');
  logo.classList.add('logo');

  return logo;
};

const makeFormElement = () => {
  const form = document.createElement('form');
  const wrapper = document.createElement('div');
  const inputTextLabel = document.createElement('label');
  const inputText = document.createElement('input');
  const inputSubmit = document.createElement('input');

  inputTextLabel.setAttribute('for', 'input-text');
  inputTextLabel.classList.add('sr-only');

  inputText.setAttribute('type', 'text');
  inputText.setAttribute('id', 'input-text');
  inputText.setAttribute('name', 'query');
  inputText.setAttribute('placeholder', 'Search for People, places and things');
  inputText.setAttribute('required', '');

  inputSubmit.setAttribute('type', 'submit');
  inputSubmit.value = 'Submit';

  form.setAttribute('id', SEARCH_FORM_ID);
  form.setAttribute('aria-hidden', isDesktop.toString());

  wrapper.appendChild(inputTextLabel);
  wrapper.appendChild(inputText);

  wrapper.appendChild(inputSubmit);

  form.appendChild(wrapper);
  return form;
};

export default class UtilityHeaderElement extends HTMLElement {
  _shadow: ShadowRoot;
  _containerElement = document.createElement('div');
  _menuContainerElement = document.createElement('div');
  _logoElement = makeLogoElement();
  _formElement = makeFormElement();

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
      const button = makeSearchFormButton({
        expandElement: this._formElement,
      });
      this._isSearchSet = true;

      this._menuElements.push({
        order: 6,
        element: button,
      });
    }
  }

  connectedCallback() {
    this.addMenuItems();

    const mobileButton = makeMobileMenuButton({
      expandElement: this._menuContainerElement,
    });

    this._containerElement.classList.add('lock');
    this._menuContainerElement.classList.add('menu');
    this._menuContainerElement.setAttribute('id', MOBILE_MENU_ID);
    this._menuContainerElement.setAttribute(
      'aria-hidden',
      (!isDesktop).toString(),
    );

    this._containerElement.appendChild(this._logoElement);
    this._containerElement.appendChild(this._menuContainerElement);
    this._containerElement.appendChild(mobileButton);
    this._shadow.appendChild(this._containerElement);

    window.addEventListener('resize', () => {
      this.resizeEvent({ menu: this._menuContainerElement });
    });
  }

  resizeEvent({ menu }: { menu: HTMLDivElement }) {
    if (menu) {
      menu.setAttribute('aria-hidden', (!isDesktop).toString());
    }
  }

  paddingContainer({ padding }: { padding: string }) {
    this._containerElement.style.paddingLeft = `${padding}px`;
  }

  sizeContainer({ width }: { width: string }) {
    this._containerElement.style.maxWidth = `${width}px`;
  }

  addMenuItems() {
    const items = this._menuElements.sort((a, b) =>
      a.order > b.order ? 1 : -1,
    );

    const setPadding = ({ element }: { element: HTMLElement }) => {
      const mobileButton = this._shadow.querySelector(
        '.mobile-button',
      ) as HTMLButtonElement;
      const padding = parseInt(this._paddingAmount);
      const elementPadding = padding > 20 ? 20 : padding;

      element.style.paddingRight = `${elementPadding}px`;
      if (mobileButton) mobileButton.style.paddingRight = `${elementPadding}px`;

      if (padding > 20) {
        this._containerElement.style.paddingRight = `${padding - 20}px`;
      }
    };

    items.forEach(({ element }, i) => {
      if (i === items.length - 1) setPadding({ element });
      this._menuContainerElement.appendChild(element);
    });

    if (this._isSearchSet) {
      this._menuContainerElement.appendChild(this._formElement);
    }
  }
}

if (!window.customElements.get('umd-utility-header')) {
  window.UtilityHeaderElement = UtilityHeaderElement;
  window.customElements.define('umd-utility-header', UtilityHeaderElement);
}
