
  // Função para calcular a contagem regressiva
  function countdown() {
    var gameDate = new Date("2023-08-06"); // Defina a data do jogo
    var now = new Date().getTime();
    var timeRemaining = gameDate - now;

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("dias").innerHTML = days + "<span>Dias</span>";
    document.getElementById("horas").innerHTML = hours + "<span>Horas</span>";
    document.getElementById("minutos").innerHTML = minutes + "<span>Minutos</span>";
    document.getElementById("segundos").innerHTML = seconds + "<span>Segundos</span>";

    if (timeRemaining < 0) {
      clearInterval(countdownInterval);
      document.getElementById("dias").innerHTML = "0<span>Dias</span>";
      document.getElementById("horas").innerHTML = "0<span>Horas</span>";
      document.getElementById("minutos").innerHTML = "0<span>Minutos</span>";
      document.getElementById("segundos").innerHTML = "0<span>Segundos</span>";
    }
  }

  // Iniciar a contagem regressiva
  var countdownInterval = setInterval(countdown, 1000);

  