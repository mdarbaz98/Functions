function scrollSmoothTo(elementId) {
    const yOffset = -150; 
      var element = document.getElementById(elementId);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
//   element.scrollIntoView({ block: "center", behavior: "smooth" });
  // element.hide();
}

// random number in every second
      setInterval(function(){   
    console.log(Math.floor((Math.random()*100)+1)); 
        var user = $('#randomUser')[0]
        user.innerHTML= Math.floor((Math.random()*100)+1)
        console.log(user)
 }, 1000);

// owl carousel for Category pills of bootstrap
$('.categoryBtn').click(function () {
        $('.categoryBtn').removeClass('active color');
    $(this).addClass('active color');
})
