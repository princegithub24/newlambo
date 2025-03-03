const images = [
    "./src/image/lim1.avif",
    "./src/image/lim2.avif",
    "./src/image/lim3.avif"
];

const texts = [
    {
        title: "TEMERARIO",
        description: "YOU CAN'T HIDE WHO YOU ARE"
    },
    {
        title: "REVUELTO",
        description: "FROM NOW ON"
    },
    {
        title: "URUS",
        description: "DARE TO LIVE MORE"
    }
];

let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    updateSlide();

    // Attach event listeners to buttons
    document.getElementById("prevBtn").addEventListener("click", prevImage);
    document.getElementById("nextBtn").addEventListener("click", nextImage);
});

function updateSlide() {
    // Update the main image
    document.getElementById("slider").style.backgroundImage = `url('${images[currentIndex]}')`;

    // Update the text
    document.getElementById("sliderText").innerHTML = `
        <h1 class="text-4xl md:text-6xl font-bold">${texts[currentIndex].title}</h1>
        <p class="mt-4 text-lg md:text-xl max-w-md">${texts[currentIndex].description}</p>
    `;

    // Update the blurred images
    const blurredImagesContainer = document.getElementById("blurredImages");
    blurredImagesContainer.innerHTML = "";

    images.forEach((img, index) => {
        const opacity = index === currentIndex ? "opacity-40" : "opacity-20"; // More opacity for the active one
        const blurClass = index === currentIndex ? "blur-md" : "blur-lg"; // Stronger blur for non-active ones

        blurredImagesContainer.innerHTML += `
            <div class="absolute inset-0 w-full h-full bg-cover bg-center ${blurClass} ${opacity}"
                 style="background-image: url('${img}');">
            </div>
        `;
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlide();
}


const image = {
    "TEMERARIO": "./src/image/lim1.avif",
    "REVUELTO": "./src/image/lim2.avif",
    "URUS": "./src/image/lim3.avif"
};

const blurredName = document.getElementById("blurredName");
const carImage = document.getElementById("carImage");
const leftSection = document.getElementById("leftSection");
const nameButtons = document.querySelectorAll(".name-btn");

nameButtons.forEach(button => {
    button.addEventListener("click", function() {
        const name = this.getAttribute("data-name");
        blurredName.textContent = name;
        carImage.src = image[name];
        leftSection.querySelector("h1").textContent = `Create Your ${name}`;
    });
});
