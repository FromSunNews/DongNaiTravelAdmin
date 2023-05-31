const changeText = () => {
  const text = document.getElementById ('text');
  text.innerHTML = 'Xin Chào';
}


const changeWidthHeigthWinDow = () => {
  document.getElementById("size").innerHTML = window.innerWidth + "x" + window.innerHeight; 
}

window.addEventListener("resize",changeWidthHeigthWinDow)