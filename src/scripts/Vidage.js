// Single dependency
import _debounce from 'lodash/debounce';

// Moved out of the class some helper methods
import validateSelector from './helpers/validate-selector';
import detectTouchOrSmallScreen from './helpers/feature-detect';
import { restoreVideo, removeVideo } from './helpers/handle-video-selector';


export default class Vidage {
    constructor (selector, helperClass = 'Vidage--allow', removeVideo = false) {
        // Store the name of the module
        this._name = this.constructor.name;

        // Validate given selector and handle errors
        this.element = validateSelector(selector, this._name);

        // Helper class for detection use through CSS
        this.helperClass = helperClass;

        // Remove and Restore `<video>` selector if required
        this.removeVideo = removeVideo;

        // Helper to prevent running handler multiple times
        // On `resize` it would run it multiple times
        // On `canplay` it would run it, once video has started over after end
        this.status = false;

        // Initiate the logic
        this.init();
    }


    init () {
        this.element.addEventListener('canplay', () => this.handler());
        window.addEventListener('resize', _debounce(() => this.handler(), 250));
        // `orientationchange` event - No longer required, will be removed in the future.
        // window.addEventListener('orientationchange', () => this.handler());
    }


    handler () {
        const body = document.body;

        if (detectTouchOrSmallScreen()) {
            if (!this.status) return;

            this.element.pause();

            if (this.removeVideo) {
                removeVideo(this.element);
            }

            body.classList.remove(this.helperClass);

            this.status = false;
        }
        else {
            if (this.status) return;

            if (this.removeVideo) {
                restoreVideo(this.element);
            }

            this.element.play();
            body.classList.add(this.helperClass);

            this.status = true;
        }
    }
}
