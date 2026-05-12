let inner = document.body.innerHTML;
inner = link(inner);
document.body.innerHTML = inner;

function link(text){
    return text.replace(
        /https:\/\/[^\s<]+/g,
        (url) => `<a href="${url}" target="_blank">${url}</a>`
    );
}
