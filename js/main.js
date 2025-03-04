const images = document.querySelectorAll("img");

for (const image of images) {
    image.addEventListener("click", e => {
        image.classList.toggle("active");
    })
}