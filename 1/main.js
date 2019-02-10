window.onload = function() {
  var nam1 = document.getElementById('nam1');
  var nam2 = document.getElementById('nam2');
  var btn = document.getElementById('add');

  btn.addEventListener('click', e => {
    var num1 = Number(nam1.value);
    var num2 = Number(nam2.value);

    var answer = num1 + num2;
    window.location = './results.html?result=' + answer;
  });
};
