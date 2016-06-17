import _debounce from 'lodash/debounce';

export default class Vidage {
    constructor (selector, helperClass = 'Vidage--allow') {
        // Store the name of the plugin, for future error handling.
        this._name = this.constructor.name;

        // Validate given selector and handle errors
        this.element = this.validateSelector(selector);

        // Helper class for detection use through CSS
        this.helperClass = helperClass;

        // Initiate the logic
        this.init();
    }


    init () {
        this.element.addEventListener('canplay', () => this.handler());
        window.addEventListener('resize', _debounce(() => this.handler(), 250));
        window.addEventListener('orientationchange', () => this.handler());
    }


    handler () {
        const body = document.body;

        if (this.detectTouchOrSmallScreen()) {
            this.element.pause();
            body.classList.remove(this.helperClass);
        }
        else {
            this.element.play();
            body.classList.add(this.helperClass);
        }
    }


    validateSelector (selector) {
        if (typeof selector === 'undefined') {
            throw new Error(`${this._name} requires a video selector as first argument.`);
        }

        selector = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector;

        if (selector.nodeName.toLowerCase() !== 'video') {
            throw new Error(`${this._name} requires a valid video selector. You passed a <${validSelector.nodeName}>`);
        }

        return selector;
    }


    detectTouchOrSmallScreen () {
        const feature = {
            touch: !!(('ontouchstart' in window)
                      || window.navigator && window.navigator.msPointerEnabled && window.MSGesture
                      || window.DocumentTouch && document instanceof DocumentTouch),
            small: window.matchMedia('(max-width: 34em)').matches
        };

        return feature.touch || feature.small;
    }
}
