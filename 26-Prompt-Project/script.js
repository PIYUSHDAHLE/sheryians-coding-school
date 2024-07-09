 document.querySelectorAll('.dropbtn').forEach(button => {
        button.addEventListener('mouseover', () => {
            button.querySelector('.arrow').innerHTML = '<i class="ri-arrow-up-s-line"></i>'; // Up arrow
        });
        button.addEventListener('mouseout', () => {
            button.querySelector('.arrow').innerHTML = '<i class="ri-arrow-down-s-line"></i>'; // Down arrow
        });
    });