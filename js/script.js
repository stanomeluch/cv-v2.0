/*First Bar*/

setTimeout(function start() {
  $(".barFirst").each(function (i) {
    let $bar = $(this);
    $(this).append('<span class="countFirst"></span>');
    setTimeout(function () {
      $bar.css("width", $bar.attr("data-percent"));
    }, i * 100);
  });

  $(".countFirst").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).parent(".barFirst").attr("data-percent"),
        },
        {
          duration: 2000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now) + "%");
          },
        }
      );
  });
}, 4500);

/*Second Bar*/

setTimeout(function start() {
  $(".barSecond").each(function (i) {
    let $bar = $(this);
    $(this).append('<span class="countSecond"></span>');
    setTimeout(function () {
      $bar.css("width", $bar.attr("data-percent"));
    }, i * 100);
  });

  $(".countSecond").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).parent(".barSecond").attr("data-percent"),
        },
        {
          duration: 2000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now) + "%");
          },
        }
      );
  });
}, 5000);

/*To to Top Button  */

let btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
