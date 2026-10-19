function openSide(h){document.getElementById('sidebody').innerHTML=h;document.getElementById('side').classList.add('open')}
function closeSide(){document.getElementById('side').classList.remove('open')}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSide()});
function sortable(t){t.querySelectorAll('th.s').forEach((th,i)=>th.onclick=()=>{const b=t.tBodies[0],r=[...b.rows],ix=th.cellIndex,d=th.dataset.d=th.dataset.d==='a'?'z':'a';
r.sort((x,y)=>{let p=x.cells[ix].dataset.v||x.cells[ix].innerText,q=y.cells[ix].dataset.v||y.cells[ix].innerText;return (isNaN(p)||isNaN(q)?p.localeCompare(q):p-q)*(d==='a'?1:-1)});r.forEach(x=>b.appendChild(x))})}
window.ST=(name,fn)=>{if(location.hash!=='#selftest')return;window.addEventListener('load',()=>setTimeout(()=>{let r;try{r=fn()||'PASS'}catch(e){r='FAIL '+e.message}document.body.setAttribute('data-selftest',name+':'+r)},1500))};