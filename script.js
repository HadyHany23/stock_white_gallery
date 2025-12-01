fetch("images.json")
  .then(res => res.json())
  .then(images => {
    const gallery = document.getElementById("gallery");

    images.forEach(filename => {
      const img = document.createElement("img");
      img.src = `images/${filename}`;
      gallery.appendChild(img);
    });
  })
  .catch(err => console.error("Error loading images:", err));
