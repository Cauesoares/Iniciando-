function togglemode() {
  const html = document.documentElement
  html.classList.toggle("ligth")

  //Pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("ligth")) {
    //se tiver ligth mode, adcionar a imagem ligth
    img.setAttribute("src", "./assets/avatar-ligth.png")
    img.setAttribute("alt", "foto de caue")
  } else {
    //Se tiver sem o ligth mode , manter a imagem normal
    img.setAttribute("src", "./assets/avaar.png")
    img.setAttribute("alt", "a")
  }
}
