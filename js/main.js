//ハンバーガーメニュー
$(function() {
    $("#hamburger").click(function() {
        $(this).toggleClass("active");
        $(".menu-content").toggleClass("open");
    })
});

//トップボタン
$(function() {
    $("#top-btn").click(function() {
      $("html,body").animate({scrollTop: 0}, 700);
    });
  });

  //スムーススクロール
  $(function(){
    $('a[href^="#"]').click(function(){
      var speed = 800;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

  