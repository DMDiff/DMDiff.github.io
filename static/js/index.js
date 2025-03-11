window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/img_1";
var INTERP_BASE2 = "./static/interpolation/img_2";
var INTERP_BASE3 = "./static/interpolation/img_3";
var INTERP_BASE4 = "./static/interpolation/img_4";
var NUM_INTERP_FRAMES = 14;

var interp_images = [];
var interp_images2 = [];
var interp_images3 = [];
var interp_images4 = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.png';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}

function preloadInterpolationImages2() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE2 + '/' + String(i).padStart(6, '0') + '.png';
    interp_images2[i] = new Image();
    interp_images2[i].src = path;
  }
}

function setInterpolationImage2(i) {
  var image = interp_images2[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper2').empty().append(image);
}

function preloadInterpolationImages3() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE3 + '/' + String(i).padStart(6, '0') + '.png';
    interp_images3[i] = new Image();
    interp_images3[i].src = path;
  }
}

function setInterpolationImage3(i) {
  var image = interp_images3[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper3').empty().append(image);
}

function preloadInterpolationImages4() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE4 + '/' + String(i).padStart(6, '0') + '.png';
    interp_images4[i] = new Image();
    interp_images4[i].src = path;
  }
}

function setInterpolationImage4(i) {
  var image = interp_images4[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper4').empty().append(image);
}

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    preloadInterpolationImages();
    preloadInterpolationImages2();
    preloadInterpolationImages3();
    preloadInterpolationImages4();

    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage(this.value);
    });
    setInterpolationImage(3);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    $('#interpolation-slider2').on('input', function(event) {
      setInterpolationImage2(this.value);
    });
    setInterpolationImage2(3);
    $('#interpolation-slider2').prop('max', NUM_INTERP_FRAMES - 1);

    $('#interpolation-slider3').on('input', function(event) {
      setInterpolationImage3(this.value);
    });
    setInterpolationImage3(3);
    $('#interpolation-slider3').prop('max', NUM_INTERP_FRAMES - 1);

    $('#interpolation-slider4').on('input', function(event) {
      setInterpolationImage4(this.value);
    });
    setInterpolationImage4(3);
    $('#interpolation-slider4').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

})
