$(document).ready(function () {
  !(function (e) {
    "use strict";
    jQuery.validator.addMethod(
      "answercheck",
      function (e, t) {
        return this.optional(t) || /^\bcat\b$/.test(e);
      },
      "type the correct answer -_-"
    ),
      e(function () {
        e("#contactForm").validate({
          rules: {
            name: { required: !0, minlength: 2 },
            subject: { required: !0, minlength: 4 },
            number: { required: !0, minlength: 5 },
            email: { required: !0, email: !0 },
            message: { required: !0, minlength: 20 },
          },
          messages: {
            name: {
              required: "come on, you have a name, don't you?",
              minlength: "your name must consist of at least 2 characters",
            },
            subject: {
              required: "come on, you have a subject, don't you?",
              minlength: "your subject must consist of at least 4 characters",
            },
            number: {
              required: "come on, you have a number, don't you?",
              minlength: "your Number must consist of at least 5 characters",
            },
            email: { required: "no email, no message" },
            message: {
              required:
                "um...yea, you have to write something to send this form.",
              minlength: "thats all? really?",
            },
          },
          submitHandler: function (t) {
            e(t).ajaxSubmit({
              type: "POST",
              data: e(t).serialize(),
              url: "contact_process.php",
              success: function () {
                e("#contactForm :input").attr("disabled", "disabled"),
                  e("#contactForm").fadeTo("slow", 1, function () {
                    e(this).find(":input").attr("disabled", "disabled"),
                      e(this).find("label").css("cursor", "default"),
                      e("#success").fadeIn(),
                      e(".modal").modal("hide"),
                      e("#success").modal("show");
                  });
              },
              error: function () {
                e("#contactForm").fadeTo("slow", 1, function () {
                  e("#error").fadeIn(),
                    e(".modal").modal("hide"),
                    e("#error").modal("show");
                });
              },
            });
          },
        });
      });
  })(jQuery);
});
