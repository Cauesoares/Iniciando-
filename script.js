function togglemode() {
  const html = document.documentElement
  html.classList.toggle("ligth")
  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("ligth")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-ligth.png")
  } else {
    //Se tiver sem o ligth mode , manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
