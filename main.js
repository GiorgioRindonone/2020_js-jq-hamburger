metodo1
$('.header-right > a').click(
  function () {
    $('.hamburger-menu').fadeIn(300);
  }
);
$('.close').click(
  function () {
    $('.hamburger-menu').fadeOut(300);
  }
);


// //metodo2
// $('.header-right > a').click(
//   function () {
//     $('.hamburger-menu').addClass('active');
//   }
// );
// $('.close').click(
//   function () {
//     $('.hamburger-menu').removeClass('active');
//   }
// );
