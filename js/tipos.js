const randomQuestions = [
    {
        text: "¿Cuál es la capital de Japón?",
        answers: ["Tokio", "Kioto", "Osaka", "Seúl"],
        correctAnswer: "Tokio"
      },
      {
        text: "¿Quién pintó 'La noche estrellada'?",
        answers: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Frida Kahlo"],
        correctAnswer: "Vincent van Gogh"
      },
      {
        text: "¿Cuál es el símbolo químico del oro?",
        answers: ["Ag", "Au", "Fe", "Cu"],
        correctAnswer: "Au"
      },
      {
        text: "¿En qué año se descubrió América?",
        answers: ["1492", "1776", "1519", "1812"],
        correctAnswer: "1492"
      },
      {
        text: "¿Quién escribió 'Cien años de soledad'?",
        answers: ["Gabriel García Márquez", "Pablo Neruda", "Julio Cortázar", "Isabel Allende"],
        correctAnswer: "Gabriel García Márquez"
      },
      {
        text: "¿Cuál es el planeta más grande del sistema solar?",
        answers: ["Marte", "Venus", "Júpiter", "Urano"],
        correctAnswer: "Júpiter"
      },
      {
        text: "¿Qué famosa pintora mexicana fue conocida por sus autorretratos?",
        answers: ["Frida Kahlo", "Diego Rivera", "Salvador Dalí", "Pablo Picasso"],
        correctAnswer: "Frida Kahlo"
      },
      {
        text: "¿Cuál es el río más largo del mundo?",
        answers: ["Nilo", "Amazonas", "Misisipi", "Yangtsé"],
        correctAnswer: "Nilo"
      },
      {
        text: "¿Qué elemento químico es conocido por el símbolo 'Fe'?",
        answers: ["Hierro", "Oxígeno", "Plata", "Flúor"],
        correctAnswer: "Hierro"
      },
      {
        text: "¿En qué país se encuentra la Torre Eiffel?",
        answers: ["Reino Unido", "Italia", "Francia", "Alemania"],
        correctAnswer: "Francia"
      },
      {
        text: "¿Cuál es el animal terrestre más rápido del mundo?",
        answers: ["Guepardo", "León", "Elefante", "Rinoceronte"],
        correctAnswer: "Guepardo"
      },
      {
        text: "¿Quién fue el primer presidente de los Estados Unidos?",
        answers: ["Thomas Jefferson", "Benjamin Franklin", "George Washington", "John Adams"],
        correctAnswer: "George Washington"
      },
      {
        text: "¿Qué instrumento musical es conocido como el 'rey de los instrumentos'?",
        answers: ["Guitarra", "Piano", "Violín", "Órgano"],
        correctAnswer: "Órgano"
      },
      {
        text: "¿Cuál es el océano más grande del mundo?",
        answers: ["Océano Atlántico", "Océano Índico", "Océano Ártico", "Océano Pacífico"],
        correctAnswer: "Océano Pacífico"
      },
      {
        text: "¿Qué famosa científica polaca ganó dos premios Nobel en diferentes campos?",
        answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Jane Goodall"],
        correctAnswer: "Marie Curie"
      },
      {
        text: "¿En qué año comenzó la Primera Guerra Mundial?",
        answers: ["1914", "1918", "1939", "1945"],
        correctAnswer: "1914"
      },
      {
        text: "¿Qué ciudad es conocida como la 'Ciudad de los Rascacielos'?",
        answers: ["Chicago", "Los Ángeles", "Nueva York", "Miami"],
        correctAnswer: "Nueva York"
      },
      {
        text: "¿Cuál es el número atómico del hidrógeno?",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "1"
      },
      {
        text: "¿Cuál es el país más grande de América del Sur?",
        answers: ["Brasil", "Argentina", "Colombia", "Perú"],
        correctAnswer: "Brasil"
      },
      {
        text: "¿Cuál es el famoso lema de Nike?",
        answers: ["Just Do It", "Live Your Best Life", "Think Different", "Have a Break, Have a Kit Kat"],
        correctAnswer: "Just Do It"
      },
    // Agrega más preguntas generales aquí...
  ];
  
  // Define las preguntas de rock argentino
  const rockArgentinoQuestions = [
    {
      text: "¿Qué banda de rock argentino lanzó el álbum 'La Historia'?",
      answers: ["Los Pericos", "Los Enanitos Verdes", "Los Auténticos Decadentes", "Los Fabulosos Cadillacs"],
      correctAnswer: "Los Fabulosos Cadillacs"
    },
    {
      text: "¿Cuál de estas bandas es conocida por el tema 'De Música Ligera'?",
      answers: ["Soda Stereo", "Patricio Rey y sus Redonditos de Ricota", "La Renga", "Babasónicos"],
      correctAnswer: "Soda Stereo"
    },
    {
      text: "¿Qué famosa banda de rock argentino fue liderada por Andrés Calamaro?",
      answers: ["Ratones Paranoicos", "Los Piojos", "Virus", "Los Rodríguez"],
      correctAnswer: "Los Rodríguez"
    },
    {
      text: "¿Quién es el vocalista de la banda Charly García?",
      answers: ["Andrés Calamaro", "Luis Alberto Spinetta", "Fito Páez", "Charly García"],
      correctAnswer: "Charly García"
    },
    {
      text: "¿Qué banda de rock argentino lanzó el álbum 'Doble Vida'?",
      answers: ["Los Pericos", "Los Auténticos Decadentes", "Los Fabulosos Cadillacs", "Soda Stereo"],
      correctAnswer: "Soda Stereo"
    },
    {
      text: "¿Cómo se llama el líder de la banda Patricio Rey y sus Redonditos de Ricota?",
      answers: ["Charly García", "Gustavo Cerati", "Indio Solari", "Andrés Calamaro"],
      correctAnswer: "Indio Solari"
    },
    {
      text: "¿Cuál de estas bandas de rock argentino es conocida por la canción 'Lamento Boliviano'?",
      answers: ["Los Piojos", "Ratones Paranoicos", "Enanitos Verdes", "Babasónicos"],
      correctAnswer: "Enanitos Verdes"
    },
    {
      text: "¿Qué banda de rock argentino es conocida por su hit 'Mejor no hablemos de amor'?",
      answers: ["Soda Stereo", "Los Fabulosos Cadillacs", "Virus", "Los Auténticos Decadentes"],
      correctAnswer: "Los Auténticos Decadentes"
    },
    {
      text: "¿En qué década surgió el movimiento del rock nacional argentino?",
      answers: ["1960s", "1970s", "1980s", "1990s"],
      correctAnswer: "1970s"
    },
    {
      text: "¿Qué banda de rock argentino es conocida por el tema 'La Colina de la Vida'?",
      answers: ["Divididos", "Sumo", "Las Pelotas", "La Renga"],
      correctAnswer: "Sumo"
    }

    // Agrega más preguntas de rock argentino aquí...
  ];
  const footballQuestions = [
    {
      text: "¿En qué país se celebró la Copa Mundial de la FIFA 2018?",
      answers: ["Francia", "Brasil", "Alemania", "Rusia"],
      correctAnswer: "Rusia"
    },
    {
      text: "¿Qué equipo ganó la UEFA Champions League en la temporada 2020-2021?",
      answers: ["Real Madrid", "Chelsea", "Bayern Munich", "Manchester City"],
      correctAnswer: "Chelsea"
    },
    // Agrega más preguntas de fútbol aquí...
  ];
  function startFootballGame() {
    currentQuestions = footballQuestions;
    startGame();
  }
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
  const answerButtons = document.querySelectorAll(".answer");
  const correctAnswerIndex = currentQuestions[currentQuestion].answers.indexOf(currentQuestions[currentQuestion].correctAnswer);

  if (answer === currentQuestions[currentQuestion].correctAnswer) {
    score++;
    answerButtons[correctAnswerIndex].style.backgroundColor = "#4caf50"; // Respuesta correcta
  } else {
    answerButtons[correctAnswerIndex].style.backgroundColor = "#4caf50"; // Respuesta correcta
    answerButtons[currentQuestions[currentQuestion].answers.indexOf(answer)].style.backgroundColor = "#f44336"; // Respuesta incorrecta
  }

  // Deshabilita los botones para evitar respuestas adicionales
  answerButtons.forEach(button => {
    button.disabled = true;
  });

  setTimeout(() => {
    // Restaura los estilos y pasa a la siguiente pregunta
    answerButtons.forEach(button => {
      button.style.backgroundColor = "";
      button.disabled = false;
    });
    nextQuestion();
  }, 1000); // 1 segundo de duración de la animación
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