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


