const inner = document.body.innerHTML;
inner = link(inner);



function link(text){
    return text.replace(
        /https:\/\/[^\s<]+/g,
        (url) => `<a href="${url}" target="_blank">${url}</a>`
    );
}
