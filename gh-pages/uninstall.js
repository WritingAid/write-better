const scriptURL =
    'https://script.google.com/macros/s/AKfycbwhHQ92h2SCoXLRKnWOmCnDdU8-00jG_npynrgBEm5JIe01G0R-POcXI-ZJDH2Bd7Ak/exec?missing_feature=no&'
const extensionUrl = 'https://justiceo.github.io/chrome-extension-starter';
const form = document.forms['google-sheet'];
const formData = new FormData(form);

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log("Submitting data: ", form, formData);

    let dataUrl = scriptURL;
    formData.forEach(file => console.log("File: ", file));
    for( let pair of formData.entries() ) {
        console.log(pair);
        dataUrl = dataUrl + encodeURIComponent( pair[0] ) + '=' + encodeURIComponent( pair[1] ) + "&";
    }
    fetch(dataUrl, {
        method: 'GET', 
    }).then(response => {
        console.log("Response: ", response);
        form.reset();
        // window.location.href = extensionUrl;
    }).catch(error => console.error('Error!', error.message));
})