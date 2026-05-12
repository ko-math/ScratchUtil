/*
(async () => {
    await fetch(`https://ko-math.github.io/ScratchUtil/system/manage.js`)
    .then(r => r.text())
    .then(r => eval(r));
})();
*/

const url = location.href;
if(url.includes('scratch.mit.edu')){
    // Fetch('GET','add_');
    if(url.includes('/users/')){
        Fetch('GET','UserId');
    }
    if(url.includes('/projects/')){
        Fetch('GET','TurbowarpButton');
    }
    if(url.includes('/search/')){
        Fetch('GET','SearchUser');
    }
} else {
    alert('Scratchで開いてください');
}

async function Fetch(method, name) {
    await fetch(`https://ko-math.github.io/ScratchUtil/functions/${method}method/${name}/${name}.js`)
    .then(r => r.text())
    .then(r => eval(r));
}
