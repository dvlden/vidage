let vdgContainer = null;

export function restoreVideo (selector) {
    if (!document.body.contains(selector)) {
        vdgContainer.insertAdjacentElement('afterbegin', selector);
    }
}

export function removeVideo (selector) {
    if (vdgContainer === null) {
        vdgContainer = selector.parentNode;
    }

    if (document.body.contains(selector)) {
        vdgContainer.removeChild(selector);
    }
}
