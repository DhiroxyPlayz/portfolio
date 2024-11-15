const blob = document.getElementById("blob");


document.body.onpointermove = event => {
  const { clientX } = event;
  const scrollY = window.pageYOffset;
  const adjustedY = scrollY + event.clientY;

  blob.animate({
    left: `${clientX}px`,
    top: `${adjustedY}px`
  }, { duration: 3000, fill: "forwards" });
}
