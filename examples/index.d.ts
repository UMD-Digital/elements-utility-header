declare global {
    interface Window {
        UtilityHeaderElement: typeof UtilityHeaderElement;
    }
}
export default class UtilityHeaderElement extends HTMLElement {
    _shadow: ShadowRoot;
    _containerElement: HTMLDivElement;
    _menuContainerElement: HTMLDivElement;
    _logoElement: HTMLAnchorElement;
    _menuElements: {
        order: number;
        element: HTMLElement;
    }[];
    _paddingAmount: string;
    _isSearchSet: boolean;
    _isEventsSet: boolean;
    _isNewsSet: boolean;
    _isSchoolsSet: boolean;
    _isAdmissionsSet: boolean;
    _isGiftSet: boolean;
    constructor();
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    connectedCallback(): void;
    resizeEvent({ menu }: {
        menu: HTMLDivElement;
    }): void;
    paddingContainer({ padding }: {
        padding: string;
    }): void;
    sizeContainer({ width }: {
        width: string;
    }): void;
    setSearch(): void;
    addMenuItems(): void;
}
//# sourceMappingURL=index.d.ts.map