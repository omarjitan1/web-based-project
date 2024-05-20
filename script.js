
document.addEventListener('DOMContentLoaded', function () {

    const bgColorPicker = document.getElementById('bg-color-picker');
    const heroSection = document.getElementById('hero-section');


    bgColorPicker.addEventListener('input', function () {
        // Change the background color of the hero section
        heroSection.style.backgroundColor = bgColorPicker.value;
    });


    const usedCarCard = document.querySelector('.card:nth-child(1)');
    const newCarCard = document.querySelector('.card:nth-child(2)');

    usedCarCard.addEventListener('click', function () {
        alert('You clicked on a Used Car!');
    });

    newCarCard.addEventListener('click', function () {
        alert('You clicked on a New Car!');
    });
});
