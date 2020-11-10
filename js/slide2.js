$(function() {
var $headerTop = $('header').offset().top; //a가 위에서부터 거리가 얼마인지
var scroll = $(window).scrollTop();//스크롤된거$
console.log($headerTop);

$(window).scroll(function () {
var scroll = $(window).scrollTop();

if(scroll+80 > $headerTop) {
  $('header').hide();
  $('#scroll').show();
}else {
  $('header').show();
  $('#scroll').hide();
}
});




});
