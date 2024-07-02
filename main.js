$(document).ready(() => {
  function add() {
    $(".copied").addClass("bounce-effect");
  }
  function remove() {
    $(".copied").removeClass("bounce-effect");
  }

  $('.copy-btn').click(() => {
    $('#textField').select();
    document.execCommand('copy');
    add();
    setTimeout(remove, 800);
  });


});

