const url = location.href;
if(url.includes('scratch.mit.edu')){
    if(url.includes('/users/')){
        run('GET','userID');
    }
    if(url.includes('/projects/')){
        run('GET','TurbowarpButton');
    }
    if(url.includes('/search/')){
        run('GET','searchUser');
    }
} else {
    alert('Scratchで開いてください');
}
async function run(method, name) {
    await fetch(`https://ko-math.github.io/ScratchUtil/functions/${method}method/${name}/${name}.js`)
    .then(r => r.text())
    .then(r => eval(r));
}



