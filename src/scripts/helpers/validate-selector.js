export default function (selector, moduleName) {
    if (typeof selector === 'undefined') {
        throw new Error(`${moduleName} requires a video selector as first argument.`);
    }

    selector = typeof selector === 'string'
        ? document.querySelector(selector)
        : selector;

    if (selector.nodeName.toLowerCase() !== 'video') {
        throw new Error(`${moduleName} requires a valid video selector. You passed a <${selector.nodeName}>`);
    }

    return selector;
}
