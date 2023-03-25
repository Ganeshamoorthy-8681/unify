

ipcRenderer.on('update-message',(e,a)=>{
    console.log(a)
})

const information = document.getElementById('info');
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

let but = document.getElementById('but');
but.addEventListener("click",()=>{
    alert('A button clicked');
})
