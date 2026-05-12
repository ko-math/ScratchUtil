(() => {
  const tabs = document.querySelector('[role="tablist"]');
  const input = document.querySelector('#frc-q-1088');
  const search = input.value;
  fetch("https://api.scratch.mit.edu/users/" + search)
  .then(r => r.json())
  .then(d => {
    const el = document.createElement('a');
    el.href = `https://scratch.mit.edu/users/${search}/`;
    tabs.append(el);
    const img = document.createElement('img');
    img.src = d.profile.images["90x90"];
    img.style.width = "55px";
    img.style.position = 'relative';
    img.style.top = '10px';
    img.style.verticalAlign = "middle";
    el.append(img);
  }).catch(() => {
    const el = document.createElement('p');
    el.textContent = 'なし';
    tabs.append(el);
  });
})();
