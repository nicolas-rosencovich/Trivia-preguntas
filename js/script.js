const randomQuestions = [
    // ... tus preguntas generales aquí ...
  ];
  
  const rockArgentinoQuestions = [
    // ... tus preguntas de rock argentino aquí ...
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let currentQuestions;
  
  function startGame(section) {
    if (section === "random") {
      currentQuestions = randomQuestions;
    } else if (section === "rock") {
      currentQuestions = rockArgentinoQuestions;
    }
  
    currentQuestion = 0;
    score = 0;
  
    const optionsDiv = document.querySelector(".options");
    const gameContainer = document.getElementById("gameContainer");
    optionsDiv.style.display = "none";
    gameContainer.style.display = "block";
  
    displayQuestion();
  }
  
  function displayQuestion() {
    const questionText = document.getElementById("questionText");
    questionText.textContent = currentQuestions[currentQuestion].text;
  
    const answerButtons = document.querySelectorAll(".answer");
    for (let i = 0; i < answerButtons.length; i++) {
      answerButtons[i].textContent = currentQuestions[currentQuestion].answers[i];
    }
  }
  
  function checkAnswer(answer) {
    if (answer === currentQuestions[currentQuestion].correctAnswer) {
      score++;
      updateScore();
    }
    nextQuestion();
  }
  
  function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = score;
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < currentQuestions.length) {
      displayQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    const gameContainer = document.getElementById("gameContainer");
    gameContainer.innerHTML = `<h1>¡Juego completado!</h1><p>Puntaje final: ${score} / ${currentQuestions.length}</p>`;
  }
  
  // Al cargar la página, oculta la sección de juego
  document.getElementById("gameContainer").style.display = "none";