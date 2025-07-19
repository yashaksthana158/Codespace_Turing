document.querySelectorAll('a[href^="#"]').forEach((e) => {
  e.addEventListener("click", function (e) {
    e.preventDefault(),
      document
        .querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
  });
}),
  jQuery(document).ready(function (e) {
    "use strict";
    e("form.contactForm").submit(function () {
      var t = e(this).find(".form-group"),
        a = !1,
        r = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
      if (
        (t.children("input").each(function () {
          var t = e(this),
            s = t.attr("data-rule");
          if (void 0 !== s) {
            var n = !1,
              i = s.indexOf(":", 0);
            if (i >= 0) {
              var o = s.substr(i + 1, s.length);
              s = s.substr(0, i);
            } else s = s.substr(i + 1, s.length);
            switch (s) {
              case "required":
                "" === t.val() && (a = n = !0);
                break;
              case "minlen":
                t.val().length < parseInt(o) && (a = n = !0);
                break;
              case "email":
                r.test(t.val()) || (a = n = !0);
                break;
              case "checked":
                t.attr("checked") || (a = n = !0);
                break;
              case "regexp":
                (o = new RegExp(o)).test(t.val()) || (a = n = !0);
            }
            t.next(".validation")
              .html(
                n
                  ? void 0 !== t.attr("data-msg")
                    ? t.attr("data-msg")
                    : "wrong Input"
                  : ""
              )
              .show("blind");
          }
        }),
        t.children("textarea").each(function () {
          var t = e(this),
            r = t.attr("data-rule");
          if (void 0 !== r) {
            var s = !1,
              n = r.indexOf(":", 0);
            if (n >= 0) {
              var i = r.substr(n + 1, r.length);
              r = r.substr(0, n);
            } else r = r.substr(n + 1, r.length);
            switch (r) {
              case "required":
                "" === t.val() && (a = s = !0);
                break;
              case "minlen":
                t.val().length < parseInt(i) && (a = s = !0);
            }
            t.next(".validation")
              .html(
                s
                  ? null != t.attr("data-msg")
                    ? t.attr("data-msg")
                    : "wrong Input"
                  : ""
              )
              .show("blind");
          }
        }),
        a)
      )
        return !1;
      var s = e(this).serialize();
      return (
        e.ajax({
          type: "POST",
          url: "contactform/contactform.php",
          data: s,
          success: function (t) {
            "OK" == t
              ? (e("#sendmessage").addClass("show"),
                e("#errormessage").removeClass("show"),
                e(".contactForm").find("input, textarea").val(""))
              : (e("#sendmessage").removeClass("show"),
                e("#errormessage").addClass("show"),
                e("#errormessage").html(t));
          },
        }),
        !1
      );
    });
  });
