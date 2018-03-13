function createGallery() {
  const dir = "../html/imgs/logos/";
  const gallery = document.getElementById('gallery');

  for (let i = 0; i < 10; i++) {
    let element = document.createElement("img");
    element.setAttribute("src", "00" + i + ".svg");
    gallery.appendChild(element);
  }
}