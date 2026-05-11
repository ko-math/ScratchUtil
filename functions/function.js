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
        Fetch('GET','user_id');
    }
    if(url.includes('/projects/')){
        Fetch('GET','turbowarp_button');
    }
    if(url.includes('/search/')){
        Fetch('GET','search_user');
    }
} else {
    alert('Scratchで開いてください');
}

async function Fetch(method, name) {
    await fetch(`https://ko-math.github.io/ScratchUtil/functions/${method}method/${name}/${name}.js`)
    .then(r => r.text())
    .then(r => eval(r));
}
