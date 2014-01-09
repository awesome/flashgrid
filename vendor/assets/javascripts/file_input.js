$(function() {

  $("input[type=file].file-input").each(function(i,el){

    // Maybe some fields don't need to be standardized.
    if (typeof $(this).attr("data-vendor-style") != 'undefined') {
      return;
    }

    // Set the word to be displayed on the button
    var buttonWord = "Browse";
    if (typeof $(this).attr("title") != "undefined") {
      buttonWord = $(this).attr("title");
    }

    var input = $("<div>").append( $(el).eq(0).clone() ).html();

    // Set class used to style the input
    var view = "btn";
    if (typeof $(this).attr("data-view") != "undefined") {
      view = $(this).attr("data-view");
    }

    $(el).replaceWith("<a class='"+view+" file-input'>"+buttonWord+input+"</a>");

    // Set class when input has changed change
    var viewChanged = null;
    if (typeof $(this).attr("data-view-changed") != "undefined") {
      viewChanged = $(this).attr("data-view-changed");
    }

    // Updated button on change to show add a class which can show an indicator
    $(".file-input input[type=file]").change(function(){
      $("a.file-input").addClass(viewChanged);
    });
  })

  // After we have found all of the file inputs let's apply a listener for tracking the mouse movement.
  // This is important because the in order to give the illusion that this is a button in FF we actually need to move the button from the file input under the cursor. Ugh.
  .promise().done( function(){

    // As the cursor moves over our new Bootstrap button we need to adjust the position of the invisible file input Browse button to be under the cursor.
    // This gives us the pointer cursor that FF denies us
    $(".file-input").mousemove(function(cursor) {

      var input, wrapper, wrapperX, wrapperY, inputWidth, inputHeight, cursorX, cursorY;

      // This wrapper elent (the button surround this file input)
      wrapper = $(this);

      // The invisible file input elent
      input = wrapper.find("input");

      // The left-most position of the wrapper
      wrapperX = wrapper.offset().left;

      // The top-most position of the wrapper
      wrapperY = wrapper.offset().top;

      // The with of the browsers input field
      inputWidth= input.width();

      // The height of the browsers input field
      inputHeight= input.height();

      //The position of the cursor in the wrapper
      cursorX = cursor.pageX;
      cursorY = cursor.pageY;

      //The positions we are to move the invisible file input
      // The 20 at the end is an arbitrary number of pixels that we can shift the input such that cursor is not pointing at the end of the Browse button but somewhere nearer the middle
      moveInputX = cursorX - wrapperX - inputWidth + 20;

      // Slides the invisible input Browse button to be positioned middle under the cursor
      moveInputY = cursorY- wrapperY - (inputHeight/2);

      // Apply the positioning styles to actually move the invisible file input
      input.css({
        left:moveInputX,
        top:moveInputY
      });
    });
});

// Add the styles before the first stylesheet
// This ensures they can be easily overridden with developer styles
var cssHtml = "<style>"+
  ".file-input { overflow: hidden; position: relative; cursor: pointer; z-index: 1; }"+
  ".file-input input[type=file], .btn-file input[type=file]:focus, .btn-file input[type=file]:hover { position: absolute; top: 0; left: 0; cursor: pointer; opacity: 0; z-index: 99; outline: 0; }"+
  "</style>";

  $("link[rel=stylesheet]").eq(0).before(cssHtml);

});