//This file formats the file

//Thanks to http://blog.mojotech.com/responsive-dynamic-height-sticky-footers/
  var bumpIt = function() {
    $('#content').css('margin-bottom', $('#footer').height());
  },
  didResize = false;

  bumpIt();

window.onload = bumpIt;

$(window).resize(function() {
  didResize = true;
});

setInterval(function() {
  if(didResize) {
    didResize = false;
    bumpIt();
  }
}, 250);
