function process(node){
    if(node.nodeType === Node.TEXT_NODE){
        const text = node.textContent;
        if(/https:\/\/[^\s]+/.test(text)){
            const span = document.createElement("span");
            span.innerHTML = text.replace(
                /https:\/\/[^\s]+/g,
                url => `<a href="${url}" target="_blank">${url}</a>`
            );
            node.replaceWith(span);
        }
    }
    else if(node.nodeType === Node.ELEMENT_NODE){
        if(["SCRIPT","STYLE","A"].includes(node.tagName)) return;
        [...node.childNodes].forEach(process);
    }
}

process(document.body);
