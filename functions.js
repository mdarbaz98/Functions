function scrollSmoothTo(elementId) {
    const yOffset = -150; 
      var element = document.getElementById(elementId);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
//   element.scrollIntoView({ block: "center", behavior: "smooth" });
  // element.hide();
}