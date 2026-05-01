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
    const message = true;
    /*
    (() => {
      if (document.getElementById('scratch_box')) return;
    
      const box = document.createElement('div');
      box.id = 'scratch_box';
      box.style.position = 'fixed';
      box.style.top = '50px';
      box.style.right = '20px';
      box.style.padding = '10px';
      box.style.background = 'rgba(0,0,0,0.8)';
      box.style.fontColor = '#fff';
      box.style.zIndex = 999999;
      box.style.borderRadius = '10px';
      box.style.fontFamily = 'monospace';
    
      const input = document.createElement('input');
      input.placeholder = 'Scratch username';
      input.style.width = '150px';
    
      const btn = document.createElement('button');
      btn.textContent = 'Get';
      btn.style.marginLeft = '5px';
    
      const result = document.createElement('div');
      result.style.marginTop = '8px';
    
      btn.onclick = async () => {
        const name = input.value.trim();
        if (!name) return;
    
        result.textContent = 'loading...';
    
        try {
          const res = await fetch(`https://api.scratch.mit.edu/users/${name}/messages/count`);
          const data = await res.json();
          result.textContent = `Messages: ${data.count}`;
        } catch (e) {
          result.textContent = 'error';
        }
      };
    
      box.appendChild(input);
      box.appendChild(btn);
      box.appendChild(result);
      document.body.appendChild(box);
    })();
    
    if(message){
        (() => {
            let el = document.createElement('button');
            el.style.position = 'fixed';
            el.style.top = '50px';
            el.style.right = '25px';
            el.style.width = '75px';
            el.style.height = '50px';
            el.style.opacity = '0.75';
            el.style.color = '#000000';
            el.style.borderRadius = '15px';
            el.id = 'SUmessageButton';
            document.body.append(el);
            el = document.createElement('script');
            el.textContent = `
                const button = document.querySelector('#SUmessageButton');
                button.addEventListener('click',async function(){
                    //let i = document.createElement('input');document.body.append(i);
                    alert(await fetch('https://api.scratch.mit.edu/users/ko-math/messages/count'));
                });
            `;
            document.body.append(el);
        })();
    }
    */
} else {
    alert('Scratchで開いてください');
}
/*
async function run(method,name){
    const file = await Fetch(method,name);
    file.default();
}
async function Fetch(method, name) {
    const module = await import(`https://ko-math.github.io/ScratchUtil/functions/${method}method/${name}.js`);
    return module;
}
*/
async function run(method, name) {
    await fetch(`https://ko-math.github.io/ScratchUtil/functions/${method}method/${name}.js`)
    .then(r=>r.text())
    .then(r=>eval(r));
}




