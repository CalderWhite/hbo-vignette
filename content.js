function clearVignette() {
    let vignetteElement = document.querySelector('[data-testid="protection_layer"]');
    if (vignetteElement) {
        vignetteElement.style.display = 'none';
    }
}

window.onload = function () {
    window.setInterval(function () {
        clearVignette();
    }, 1000);
}