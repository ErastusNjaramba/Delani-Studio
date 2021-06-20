$(document).ready(function() {
  $('.design').click(function (){
      $('.design').hide()
      $('.des1').show();
  })
  $('.des1').click(function (){
      $('.des1').hide()
      $('.design').show();
  })

  $('.development').click(function (){
    $('.development').hide();
    $('.des2').show();
  })
    $('.des2').click(function (){
        $('.des2').hide()
        $('.development').show();
  })
  
    $('.product').click(function (){
      $('.product').hide();
      $('.des3').show();
  })
    $('.des3').click(function (){
        $('.des3').hide()
        $('.product').show();
    })
  })
