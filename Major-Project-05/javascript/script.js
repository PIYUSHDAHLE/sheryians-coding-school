// search section

document.querySelectorAll('.dropbtn').forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.querySelector('.arrow').innerHTML = '<i class="ri-arrow-up-s-line"></i>'; // Up arrow
    });
    button.addEventListener('mouseout', () => {
        button.querySelector('.arrow').innerHTML = '<i class="ri-arrow-down-s-line"></i>'; // Down arrow
    });
}); 

document.querySelectorAll('.dropdown-content a').forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const dropdownContent = event.target.closest('.dropdown-content');
        const dropbtn = dropdownContent.previousElementSibling;
        dropbtn.innerHTML = `${event.target.textContent} <span class="arrow"><i class="ri-arrow-down-s-line"></i></span>`;
        dropdownContent.style.display = 'none'; // Hide the dropdown content
    });
});

document.querySelectorAll('.dropdown').forEach((dropdown) => {
    dropdown.addEventListener('mouseenter', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'block'; // Show dropdown on hover
    });
    dropdown.addEventListener('mouseleave', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'none'; // Hide dropdown when not hovering
    });
});

//pop-up section

const btn = document.querySelector('.get-btn');
const popUp = document.querySelector('.pop-up');
const close = document.querySelector('.close');

btn.addEventListener('click', () => {
    popUp.style.display = 'flex';
});

close.addEventListener('click', () => {
    popUp.style.display = 'none';
});

//Targeting from navbar list name to there heading page
function scrollToSection(sectionId) {
    var element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        element.style.margin = "0px";
    }
}