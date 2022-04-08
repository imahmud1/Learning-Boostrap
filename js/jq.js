function DrawCaptcha()
  {
  var a = Math.ceil(Math.random() * 6)+ '';
  var b = Math.ceil(Math.random() * 6)+ '';
  var c = Math.ceil(Math.random() * 6)+ '';
  var d = Math.ceil(Math.random() * 6)+ '';
  var e = Math.ceil(Math.random() * 6)+ '';
  var f = Math.ceil(Math.random() * 6)+ '';
  var g = Math.ceil(Math.random() * 6)+ '';
  var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f ;
  document.getElementById("txtCaptcha").value = code

  function removeSpaces(string){
    return string.split(' ').join('');