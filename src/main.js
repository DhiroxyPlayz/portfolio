const span = document.querySelector('#hero span');
const content = document.querySelector('#hero .content');

// Function to show content
const showContent = () => {
    content.style.visibility = 'visible';
    content.style.opacity = '1';
};

// Function to hide content
const hideContent = () => {
    content.style.visibility = 'hidden';
    content.style.opacity = '0';
};

// Add mouseenter event listeners to both elements
span.addEventListener('mouseenter', showContent);
content.addEventListener('mouseenter', showContent);

// Add mouseleave event listeners to both elements
span.addEventListener('mouseleave', (e) => {
    // Check if we're not moving to the content div
    if (!e.relatedTarget || !e.relatedTarget.closest('.content')) {
        hideContent();
    }
});

content.addEventListener('mouseleave', hideContent);


const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}

for(const card of document.getElementsByClassName('card')){
    card.onmousemove = e => handleOnMouseMove(e);
}





const triggerButton = document.querySelector('.myResume');
const closeButton = document.querySelector('.close-button');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');

function openModal() {
    modalOverlay.style.display = 'block';
    // Force reflow to ensure the transition works
    modalOverlay.offsetHeight;
    modalOverlay.style.opacity = '1';
    modal.classList.add('show');
}

function closeModal() {
    modalOverlay.style.opacity = '0';
    modal.classList.remove('show');

    // Wait for animations to finish before hiding
    setTimeout(() => {
        modalOverlay.style.display = 'none';
    }, 500);
}

triggerButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});


