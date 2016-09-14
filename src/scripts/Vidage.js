// Dependencies
import debounce from 'debounce';
import objectAssign from 'object-assign';

// Moved out of the class some helper methods
import validateSelector from './helpers/validate-selector';
import detectTouchOrSmallScreen from './helpers/feature-detect';
import { restoreVideo, removeVideo } from './helpers/handle-video-selector';


export default class Vidage {
    constructor (selector, options = {}) {
        const defaults = {
            // Helper class for detection use through CSS
            helperClass: 'Vidage--allow',
            // Remove and Restore `<video>` selector if required
            videoRemoval: false
        };

        // Combine defaults and possible options
        this.options = objectAssign(defaults, options);

        // Store the name of the module
        this._name = this.constructor.name;

        // Validate given selector and handle errors
        this.element = validateSelector(selector, this._name);

        // Initiate the logic
        this.init();
    }


    init () {
        this.element.addEventListener('canplay', () => this.handler());
        window.addEventListener('resize', debounce(() => this.handler(), 250));
    }


    handler () {
        const body = document.body;

        if (detectTouchOrSmallScreen()) {
            this.element.pause();

            if (this.options.videoRemoval) {
                removeVideo(this.element);
            }

            body.classList.remove(this.options.helperClass);
        }
        else {
            if (this.options.videoRemoval) {
                restoreVideo(this.element);
            }

            this.element.play();

            body.classList.add(this.options.helperClass);
        }
    }
}
