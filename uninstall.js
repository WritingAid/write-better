const scriptURL =
    'https://script.google.com/macros/s/AKfycbyd4PLN9WMHXL9dqR7zAOq-jV3oi5uHvWUm2s58lVK3AyMKveYRMQzoLpW7m2Hzb2Xw/exec'
const extensionUrl = 'https://justiceo.github.io/chrome-extension-starter';
const form = document.forms['google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(new FormData(form));
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    }).then(response => {
        form.reset();
        window.location.href = extensionUrl;
    }).catch(error => console.error('Error!', error.message));
})