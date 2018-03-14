function createGallery() {
  const dir = "../html/imgs/logos/";
  const gallery = document.getElementById('gallery');

  for (let i = 1; i <= 10; i++) {
    const element = document.createElement("img");
    let url = dir + i + ".svg";
    element.setAttribute("src", url);
    gallery.appendChild(element);
  }
}