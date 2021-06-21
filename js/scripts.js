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
    $('#submit').click(function(){
      const divs  = $('.form-control');
      divs.forEach(element => {
          console.log(element)
      });
  })
});

function getName(inp){
  let value = inp.value;

  if(inp == ""){
      alert('please enter name')
  }else{
      return value
  }
}
