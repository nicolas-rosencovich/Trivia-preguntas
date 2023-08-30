
function checkAnswer(answer) {
  const answerButtons = document.querySelectorAll(".answer");

  // Deshabilita los botones para evitar respuestas adicionales
  answerButtons.forEach(button => {
    button.disabled = true;
  });

  if (answer === currentQuestions[currentQuestion].correctAnswer) {
    score++;
    updateScore();
    answerButtons[currentQuestions[currentQuestion].answers.indexOf(answer)].classList.add("correct-answer");
  } else {
    answerButtons[currentQuestions[currentQuestion].answers.indexOf(answer)].classList.add("incorrect-answer");
  }

  setTimeout(() => {
    // Remueve las clases de animación y pasa a la siguiente pregunta
    answerButtons.forEach(button => {
      button.classList.remove("correct-answer", "incorrect-answer");
      button.disabled = false;
    });
    nextQuestion();
  }, 1000); // 1 segundo de duración de la animación
}