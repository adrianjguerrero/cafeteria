$(document).ready(function() {
  //Animacion menu
  $(".menu a").each(function(index, elemento) {
    $(this).css({
      top: "-200px"
    });

    $(this).animate(
      {
        top: "0"
      },
      2000 + index * 500
    );
  });

  //Animacion Header
  if ($(window).width() > 800) {
    $("header .textos").css({
      opacity: 0,
      marginTop: 0
    });

    $("header .textos").animate(
      {
        opacity: 1,
        marginTop: "-52px"
      },
      1500
    );
  }

  //Scroll elementos menu
  var acercaDe = $("#acercade").offset().top;
  var galeria = $("#galeria").offset().top;
  var menu = $("#menu").offset().top;
  var ubicacion = $("#ubicacion").offset().top;

  $("#btn-acercade").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: acercaDe
      },500);
  });

  $("#btn-galeria").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: galeria
      },500);
  });

  $("#btn-menu").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: menu
      },500);
  });

  $("#btn-ubicacion").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: ubicacion
      },500);
  });

  
});
