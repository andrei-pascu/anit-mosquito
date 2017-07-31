//Transition time for main content to avoid seeing animation at start
setTimeout(function() {
  $('#twin-tower-1').css({'transition-duration': '1s'});
  $('#twin-tower-2').css({'transition-duration': '1s'});
}, 1000);
//v.firefox => no "camera" movement
//reason: extremely poor performance on these transforms
if (typeof InstallTrigger !== 'undefined') {
//Layers not loading properly until a change in layaut
  setTimeout(function() {
    $('#container').css({'height': '99.999vh'});
  }, 200);
//Initial "camera" position
  $('#cube').css({'transform':
    'translateZ(83vh) translateX(-18%) translateY(-53%)'+
      'rotateZ(25deg) rotateY(-78deg) rotateX(-25deg)'});
//SVG mosquitos (5) first appearance
  setTimeout(function() {
    $('#filter svg').css({'height': '30vh', 'width': '30vh',
      'transform': 'translateX(40vh) translateY(0vh)  rotate(0deg)'});
    $('#filter2 svg').css({'height': '20vh', 'width': '20vh',
      'transform': 'translateX(30vh) translateY(15vh)  rotate(0deg)'});
    $('#filter3 svg').css({'height': '10vh', 'width': '10vh',
      'transform': 'translateX(30vh) translateY(-10vh)  rotate(0deg)'});
    $('#filter4 svg').css({'height': '15vh', 'width': '15vh',
      'transform': 'translateX(35vh) translateY(20vh)  rotate(0deg)'});
    $('#filter5 svg').css({'height': '25vh', 'width': '25vh',
      'transform': 'translateX(47vh) translateY(-15vh)  rotate(0deg)'});
  }, 1000);
//SVG mosquitos hitting window
  setTimeout(function() {
    $('#filter svg').css({'transition-duration': '1.5s','height': '15vh',
      'width': '15vh', 'transform':
        'translateX(55vw) translateY(15vh) rotate(30deg)'});
    $('#filter2 svg').css({'transition-duration': '1.5s','height': '10vh',
      'width': '10vh', 'transform':
        'translateX(55vw) translateY(16vh) rotate(30deg)'});
    $('#filter3 svg').css({'transition-duration': '1.5s','height': '5vh',
      'width': '5vh', 'transform':
        'translateX(58vw) translateY(14vh) rotate(30deg)'});
    $('#filter4 svg').css({'transition-duration': '1.5s','height': '8vh',
      'width': '8vh', 'transform':
        'translateX(59vw) translateY(19vh) rotate(30deg)'});
    $('#filter5 svg').css({'transition-duration': '1.5s','height': '13vh',
      'width': '13vh', 'transform':
        'translateX(55vw) translateY(24vh) rotate(30deg)'});
  }, 3000);
//Window closing
    setTimeout(function() {
      $('#anti-fly').css({'transform': 'rotateY(0deg)'});
    }, 4000);
//SVG mosquitos scattering in pain
  setTimeout(function() {
    $('#filter svg').css({'transition-duration': '1.5s',
      'transform': 'translateX(47vw) translateY(17vh) rotate(-160deg)'});
    $('#filter2 svg').css({'transition-duration': '1.5s',
      'transform': 'translateX(50vw) translateY(20vh) rotate(-120deg)'});
    $('#filter3 svg').css({'transition-duration': '1.5s',
      'transform': 'translateX(45vw) translateY(19vh) rotate(-80deg)'});
    $('#filter4 svg').css({'transition-duration': '1.5s',
      'transform': 'translateX(35vw) translateY(20vh) rotate(-60deg)'});
    $('#filter5 svg').css({'transition-duration': '1.5s',
      'transform': 'translateX(35vw) translateY(35vh) rotate(-140deg)'});
  }, 4510);
//Main content appears
  setTimeout(function() {
    $('#twin-tower-1').css({'transform': 'rotate(0deg)'});
    $('#twin-tower-2').css({'transform': 'rotate(0deg)'});
  }, 5100);
  setTimeout(function() {
//In case of window resize the 2 main content containers will not split
    $('#twin-tower-1').css({'transition-duration': '0s'});
    $('#twin-tower-2').css({'transition-duration': '0s'});
//Remove Mosquitos
    $('#filter').remove();
    $('#filter2').remove();
    $('#filter3').remove();
    $('#filter4').remove();
    $('#filter5').remove();
//Remove 3D world
    $('#container').remove();
  }, 6300);
//v.edge => only 1 mosquito
//reason: background-images flicker and dissapear
} else if (/Edge\/\d./i.test(navigator.userAgent)) {
//In case a sky background dissapears the main container will be a "backup"
  $('#container').css({'background-image':'url(images/clouds.jpg)'})
//Initial "camera" position - instant transform
  $('#cube').css({'transform':'translateZ(97vh) translateX(-5%)'+
    'translateY(-64%) rotateZ(0deg) rotateY(0deg) rotateX(0deg)'});
  setTimeout(function() {
    $('#cube').css({'transition-duration':'2s'});
  }, 100);
//Camera rotate to left
  setTimeout(function() {
    $('#cube').css({'transform': 'translateZ(90vh) translateX(4%) '+
      'translateY(-60%) rotateZ(0deg) rotateY(-180deg) rotateX(-3deg)'});
  }, 2000);
//Camera rotate to right looking at house
  setTimeout(function() {
    $('#cube').css({'transform': 'translateZ(83vh) translateX(-18%)'+
      'translateY(-53%)   rotateZ(25deg) rotateY(-78deg) rotateX(-25deg)'});
  }, 6000);
//Remove mosquito 2-5 because of bugs
  $('#filter2 svg').remove();
  $('#filter3 svg').remove();
  $('#filter4 svg').remove();
  $('#filter5 svg').remove();
//First appearance
  setTimeout(function() {
    $('#filter svg').css({'height': '30vh', 'width': '30vh',
      'transform': 'translateX(40vh) translateY(0vh)  rotate(0deg)'});
  }, 5000);
//Window close
  setTimeout(function() {
    $('#anti-fly').css({'transform': 'rotateY(0deg)'});
  }, 8000);
//Hitting the window
  setTimeout(function() {
    $('#filter svg').css({'transition-duration': '1.5s','height': '15vh',
      'width': '15vh', 'transform':
        'translateX(55vw) translateY(15vh) rotate(30deg)'});
  }, 7000);
//Scattering in pain
  setTimeout(function() {
    $('#filter svg').css({'transition-duration': '1.5s', 'transform':
      'translateX(47vw) translateY(17vh) rotate(-160deg)'});
  }, 8510);
//Main content tranform to center
  setTimeout(function() {
    $('#twin-tower-1').css({'transform': 'rotate(0deg)'});
    $('#twin-tower-2').css({'transform': 'rotate(0deg)'});
  }, 9100);
  setTimeout(function() {
//In case of window resize the 2 main content containers will not split
    $('#twin-tower-1').css({'transition-duration': '0s'});
    $('#twin-tower-2').css({'transition-duration': '0s'});
//Remove now useless content
    $('#filter').remove();
    $('#container').remove();
  }, 10300);
//v.chrome => full version
} else {
//Initial camera position
  $('#cube').css({'transform':
    'translateZ(97vh) translateX(-5%) translateY(-64%)'+
      'rotateZ(0deg) rotateY(0deg) rotateX(0deg)'});
  setTimeout(function() {
    $('#cube').css({'transition-duration':'2s'});
  }, 100);
//Camera to left
  setTimeout(function() {
    $('#cube').css({'transform':
      'translateZ(90vh) translateX(4%) translateY(-60%)'+
        'rotateZ(0deg) rotateY(-180deg) rotateX(-3deg)'});
  }, 2000);
//Camera to right looking at house
  setTimeout(function() {
    $('#cube').css({'transform':
      'translateZ(83vh) translateX(-18%) translateY(-53%)'+
        'rotateZ(25deg) rotateY(-78deg) rotateX(-25deg)'});
  }, 6000);
//First mosquito appearance
  setTimeout(function() {
    $('#filter svg').css({'height': '30vh', 'width': '30vh',
      'transform': 'translateX(40vh) translateY(0vh)  rotate(0deg)'});
    $('#filter2 svg').css({'height': '20vh', 'width': '20vh',
      'transform': 'translateX(30vh) translateY(15vh)  rotate(0deg)'});
    $('#filter3 svg').css({'height': '10vh', 'width': '10vh',
      'transform': 'translateX(30vh) translateY(-10vh)  rotate(0deg)'});
    $('#filter4 svg').css({'height': '15vh', 'width': '15vh',
      'transform': 'translateX(35vh) translateY(20vh)  rotate(0deg)'});
    $('#filter5 svg').css({'height': '25vh', 'width': '25vh',
      'transform': 'translateX(47vh) translateY(-15vh)  rotate(0deg)'});
  }, 5000);
//Mosquito attack window
  setTimeout(function() {
    $('#filter svg').css({'transition-duration': '1.5s','height': '15vh',
      'width': '15vh', 'transform':
        'translateX(55vw) translateY(15vh) rotate(30deg)'});
    $('#filter2 svg').css({'transition-duration': '1.5s','height': '10vh',
      'width': '10vh', 'transform':
        'translateX(55vw) translateY(16vh) rotate(30deg)'});
    $('#filter3 svg').css({'transition-duration': '1.5s','height': '5vh',
      'width': '5vh', 'transform':
        'translateX(58vw) translateY(14vh) rotate(30deg)'});
    $('#filter4 svg').css({'transition-duration': '1.5s','height': '8vh',
      'width': '8vh', 'transform':
        'translateX(59vw) translateY(19vh) rotate(30deg)'});
    $('#filter5 svg').css({'transition-duration': '1.5s','height': '13vh',
      'width': '13vh', 'transform':
        'translateX(55vw) translateY(24vh) rotate(30deg)'});
  }, 7000);
//Window close
  setTimeout(function() {
    $('#anti-fly').css({'transform': 'rotateY(0deg)'});
  }, 8000);
//Mosquito scatter in pain
  setTimeout(function() {
    $('#filter svg').css({'transition-duration': '1.5s', 'transform':
      'translateX(47vw) translateY(17vh) rotate(-160deg)'});
    $('#filter2 svg').css({'transition-duration': '1.5s', 'transform':
      'translateX(50vw) translateY(20vh) rotate(-120deg)'});
    $('#filter3 svg').css({'transition-duration': '1.5s', 'transform':
      'translateX(45vw) translateY(19vh) rotate(-80deg)'});
    $('#filter4 svg').css({'transition-duration': '1.5s', 'transform':
      'translateX(35vw) translateY(20vh) rotate(-60deg)'});
    $('#filter5 svg').css({'transition-duration': '1.5s', 'transform':
      'translateX(35vw) translateY(35vh) rotate(-140deg)'});
  }, 8510);
//Content tranform into field of view
  setTimeout(function() {
    $('#twin-tower-1').css({'transform': 'rotate(0deg)'});
    $('#twin-tower-2').css({'transform': 'rotate(0deg)'});
  }, 9100);
  setTimeout(function() {
//On window resize the 2 main divs will resize immediatly
    $('#twin-tower-1').css({'transition-duration': '0s'});
    $('#twin-tower-2').css({'transition-duration': '0s'});
//Remove now useless content
    $('#filter').remove();
    $('#filter2').remove();
    $('#filter3').remove();
    $('#filter4').remove();
    $('#filter5').remove();
    $('#container').remove();
  }, 10300);
}
