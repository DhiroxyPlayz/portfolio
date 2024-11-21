const span = document.querySelector('#hero span');
const content = document.querySelector('#hero .content');

span.addEventListener('mouseover', () => {
    content.style.visibility = 'visible';
    content.style.opacity = '1';
});

span.addEventListener('mouseout', () => {
    content.style.visibility = 'hidden';
    content.style.opacity = '0';
});