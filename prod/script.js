"use strict";

document.addEventListener('DOMContentLoaded', function () {
  //Animacion menu
  // $(".menu a").each(function(index, elemento) {
  //   $(this).css({
  //     top: "-200px"
  //   });
  //   $(this).animate(
  //     {
  //       top: "0"
  //     },
  //     2000 + index * 500
  //   );
  // });
  //Animacion Header
  // if ($(window).width() > 800) {
  // $("header .textos").css({
  //   opacity: 0,
  //   marginTop: 0
  // });
  // $("header .textos").animate(
  //   {
  //     opacity: 1,
  //     marginTop: "-52px"
  //   },
  //   1500
  // );

  /* --- NO JQUERY NEEDED FOR THOSE ANIMATIONS, JUST USE CSS KEYFRAMES AND ANIMATION!!! --- */
  // }
  //Scroll elementos menu

  /* ---Whitout JQUERY--- */
  // scrollTo = (element) => {
  //   window.scroll({
  //     behavior: 'smooth',
  //     left: 0,
  //     top: element
  //   });
  // }
  var acercaDe = document.getElementById('acercade').offsetTop;
  var galeria = document.getElementById('galeria').offsetTop;
  var menu = document.getElementById('menu').offsetTop;
  var ubicacion = document.getElementById('ubicacion').offsetTop;
  document.getElementById('btn-acercade').addEventListener('click', function (e) {
    e.preventDefault();
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: acercaDe
    });
  });
  document.getElementById('btn-galeria').addEventListener('click', function (e) {
    e.preventDefault();
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: galeria
    });
  });
  document.getElementById('btn-menu').addEventListener('click', function (e) {
    e.preventDefault();
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: menu + 550
      /* el offset lo agarra mal, idk why, +500 para arreglarlo */

    });
  });
  document.getElementById('btn-ubicacion').addEventListener('click', function (e) {
    e.preventDefault();
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: ubicacion
    });
  });
  /* ---Whit JQUERY--- */
  // var acercaDe = $("#acercade").offset().top;
  // var galeria = $("#galeria").offset().top;
  // var menu = $("#menu").offset().top;
  // var ubicacion = $("#ubicacion").offset().top;
  // $("#btn-acercade").on("click", function(e) {
  //   e.preventDefault();
  //   $("html, body").animate(
  //     {
  //       scrollTop: acercaDe
  //     },500);
  // });
  // $("#btn-galeria").on("click", function(e) {
  //   e.preventDefault();
  //   $("html, body").animate(
  //     {
  //       scrollTop: galeria
  //     },500);
  // });
  // $("#btn-menu").on("click", function(e) {
  //   e.preventDefault();
  //   $("html, body").animate(
  //     {
  //       scrollTop: menu
  //     },500);
  // });
  // $("#btn-ubicacion").on("click", function(e) {
  //   e.preventDefault();
  //   $("html, body").animate(
  //     {
  //       scrollTop: ubicacion
  //     },500);
  // });
});