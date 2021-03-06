let progressSection = document.querySelector('.progress-section');
let progressBar = document.querySelector('.progress-bar');
let progressNum = document.querySelector('.progress-num');

let x, y;

function updateProgressBar() {
    progressSection.style.transform = `translate(${x}px, ${y}px)`
    progressBar.style.height = `${getScrollPercentage()}%`;
    // progressNum.innerText = `${Math.ceil(getScrollPercentage())}%`
    requestAnimationFrame(updateProgressBar)
}

function getScrollPercentage() {
    return (((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100) + 1)
}

updateProgressBar();