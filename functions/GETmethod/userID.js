export default async function() {
  if(!(document.querySelector('#SUuserID'))){
    const u = location.pathname.split("/")[2];
    const r = await fetch("https://api.scratch.mit.edu/users/" + u);
    const d = await r.json();
    
    const el = document.querySelector('.header-text .profile-details');
    
    const current = document.createElement('span');
    current.textContent = `UserID: ${d.id}`;
    current.style.color = "#888";
    current.id = 'SUuserID';
    el.append(current);
  }
}
