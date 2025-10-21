

const bodySliderTrack = document.getElementById("thumbTrack");
const bodySliderItems = bodySliderTrack.querySelectorAll(".thumb-item");
const bodySliderPrev = document.getElementById("thumbPrev");
const bodySliderNext = document.getElementById("thumbNext");
const indicatorsContainer = document.querySelector(".thumb-indicators");

let bodySliderItemsPerView = 4;
let bodySliderTotalSlides = 0;
let bodySliderIndex = 0;

function resize() {
    if (window.innerWidth < 940) {
        bodySliderItemsPerView = 1;
    } else if (window.innerWidth < 1170) {
        bodySliderItemsPerView = 3;
    } else {
        bodySliderItemsPerView = 4;
    }

    // Recalculate slides
    const totalItems = bodySliderItems.length;
    bodySliderTotalSlides = Math.ceil(totalItems / bodySliderItemsPerView);

    // Adjust width
    if (window.innerWidth < 374) {
        bodySliderTrack.style.minWidth = `${(300 + 30) * totalItems}px`;
    } else if (window.innerWidth < 940) {
        bodySliderTrack.style.minWidth = `${(347 + 30) * totalItems}px`;
    } else if (window.innerWidth < 1170) {
        bodySliderTrack.style.minWidth = `${(196 + 30) * totalItems}px`;
    } else {
        bodySliderTrack.style.minWidth = `${(160 + 30) * totalItems}px`;
    }

    // Reset to first index if current index exceeds new max
    if (bodySliderIndex >= bodySliderTotalSlides) {
        bodySliderIndex = bodySliderTotalSlides - 1;
    }

    generateIndicators();
    updateBodySlider();
}

function generateIndicators() {
    indicatorsContainer.innerHTML = ""; // Clear existing ones
    for (let i = 0; i < bodySliderTotalSlides; i++) {
        const dot = document.createElement("div");
        dot.classList.add("indicatoor");
        if (i === bodySliderIndex) dot.classList.add("active");
        indicatorsContainer.appendChild(dot);
    }
}

function updateBodySlider() {
    let shifting;
    if (window.innerWidth < 374) {
        shifting = -(bodySliderIndex * (300 + 30) * bodySliderItemsPerView);
    } else if (window.innerWidth < 940) {
        shifting = -(bodySliderIndex * (347 + 30) * bodySliderItemsPerView);
    } else if (window.innerWidth < 1170) {
        shifting = -(bodySliderIndex * (196 + 30) * bodySliderItemsPerView);
    } else {
        shifting = -(bodySliderIndex * (160 + 30) * bodySliderItemsPerView);
    }

    bodySliderTrack.style.transform = `translateX(${shifting}px)`;
    bodySliderTrack.style.transition = "transform 0.3s ease-in-out";

    // Update indicator active state
    const dots = indicatorsContainer.querySelectorAll(".indicatoor");
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === bodySliderIndex);
    });
}

bodySliderNext.addEventListener("click", () => {
    bodySliderIndex = (bodySliderIndex + 1) % bodySliderTotalSlides;
    updateBodySlider();
});

bodySliderPrev.addEventListener("click", () => {
    bodySliderIndex = (bodySliderIndex - 1 + bodySliderTotalSlides) % bodySliderTotalSlides;
    updateBodySlider();
});

// Initial run
resize();
window.addEventListener("resize", resize);
