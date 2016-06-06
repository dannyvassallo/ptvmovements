// iterate through errors and growl them
function toasts(){
  setTimeout(function(){
    $('span.error').each(function(){
      if($(this).html() != ""){
        var errorText = $(this).text();
        Materialize.toast(errorText, 4000, 'red break-word');
      }
    });
  }, 100);
}

// successMsg Constructor
var successMsg = "<div id=\"thankyou\" class=\"col-xs-12 cyan-text\"><h2 class=\"thanks\">Thank you for entering!</h2></div>";


$("#entry").validate({
  ignore: "",
  focusInvalid: false,
  rules: {
    // first name
    'entry.1506449844': {
      //checks for whitespace
      required: {
        // depends:function(){
        //   $(this).val($.trim($(this).val()));
        //   return true;
        // }
      },
      // lettersonly: true,
      minlength: 2
    },
    // email
    'entry.62939456': {
      //checks for whitespace
      required: {
        depends:function(){
          $(this).val($.trim($(this).val()));
          return true;
        }
      },
      email: true
    }
  },
  messages: {
    // first name
    'entry.1506449844': {
      required: "Please give your full name.",
      lettersonly: "Letters only in the name fields please.",
      minlength: jQuery.validator.format("At least {0} characters required!"),
    },
    // email
    'entry.62939456': {
      required: "Please give your e-mail address.",
      email: "Please give a valid e-mail address."
    }
  },
  invalidHandler: function(form, validator) {
    toasts();
  },
  success: "valid",
  submitHandler: function(form) {
    formH = $('#entry').height();
    form.submit();
    Materialize.toast("Thanks for your entry!", 4000, 'green');
    setTimeout(function(){
      $('#entry input').val('');
    }, 1000);
    $('#download-modal').openModal();
    var dlBtn = $('<div>');
    dlBtn.addClass('r3466056248').html('Download Now');
    $('#6447551036').html(dlBtn);
  },
  errorElement : 'span',
  errorPlacement: function (error, element) {
    var elementId = element[0].id;
    if(elementId == 'fbshareinput' || elementId == 'tour-input'){
      error.insertAfter($('#'+elementId).next('.error-box'));
    } else {
      error.insertAfter($(element).parent().next('.error-box'));
    }
  }
});
