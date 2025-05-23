const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev")
const progress = document.querySelector(".progress");

// Document QuerySelectors for the Cirles
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");
const circle4 = document.querySelector(".circle4");

let progressLineStatus = 1;

btnNext.addEventListener("click", function() {
    progressLineStatus++;
    updateProgressLine();
})
btnPrev.addEventListener("click", function() {
    progressLineStatus--;
    updateProgressLine();

    if (progressLineStatus === 3) {
        circle4.classList.remove("active");
    } else if (progressLineStatus === 2) {
        circle3.classList.remove("active");
    } else if (progressLineStatus === 1) {
        circle2.classList.remove("active");
    }
})

const updateProgressLine = function() {
    if(progressLineStatus === 1) {
        progress.style.width = "0%";
        btnPrev.disabled = true;
        btnNext.disabled = false;
    } else if (progressLineStatus === 2) {
        progress.style.width = "35%";
        circle2.classList.add("active");
        btnPrev.disabled = false;
        btnNext.disabled = false;
    } else if (progressLineStatus === 3) {
        progress.style.width = "65%";
        circle3.classList.add("active");
        btnPrev.disabled = false;
        btnNext.disabled = false;
    } else if (progressLineStatus === 4) {
        progress.style.width = "98%";
        circle4.classList.add("active");
        btnPrev.disabled = false;
        btnNext.disabled = true;
    }
}