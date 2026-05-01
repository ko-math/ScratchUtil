(() => {
  if(!(document.querySelector('#SUTurbutton'))){
    const a = document.createElement('a');
    a.href = location.href.replace('scratch.mit.edu/projects','turbowarp.org');
    a.target = '_blank';
    a.id = 'SUTurbutton';
    
    const img = document.createElement('img');
    img.src = './t.png';
    img.style.width = '50px';
    img.style.height = '50px';
    img.style.position = 'relative';
    img.style.left = '10px';
    img.style.borderRadius = '15px';
    
    a.append(img);
    
    const target = document.querySelector('#view .preview .inner :first-child');
    if (target) target.append(a);
  }
})();
