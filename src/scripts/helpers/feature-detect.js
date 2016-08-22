export default function () {
    const feature = {
        touch: !!(('ontouchstart' in window)
                || window.navigator && window.navigator.msPointerEnabled && window.MSGesture
                || window.DocumentTouch && document instanceof DocumentTouch),
        ie: window.navigator.userAgent.indexOf('MSIE') > 0
            || !!window.navigator.userAgent.match(/Trident.*rv\:11\./),
        small: window.matchMedia('(max-width: 34em)').matches
    };

    return (feature.touch && !feature.ie) || feature.small;
}
