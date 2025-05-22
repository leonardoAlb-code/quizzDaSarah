const perguntas = [
    {
      pergunta: "A esfera tem alguma face plana?",
      imagem: "esfera.jpeg",
      opcoes: ["a) Sim", "b) Não"],
      correta: 1
    },
    {
      pergunta: "Um dado comum tem o formato de qual sólido geométrico?",
      imagem: "dado.jpeg",
      opcoes: ["a) Pirâmide", "b) Cilindro", "c) Cubo", "d) Cone"],
      correta: 2
    },
    {
      pergunta: "Qual sólido geométrico pode rolar e também ficar em pé?",
      imagem: "varios.jpeg",
      opcoes: ["a) Cone", "b) Cubo", "c) Prisma", "d) Pirâmide"],
      correta: 0
    },
    {
      pergunta: "Qual desses sólidos tem vértices?",
      imagem: "verticie.jpeg",
      opcoes: ["a) Esfera", "b) Cubo", "c) Cilindro", "d) Nenhum"],
      correta: 1
    },
    {
      pergunta: "O cone tem vértices?",
      imagem: "cone.jpeg",
      opcoes: ["a) Sim, tem um vértice", "b) Não tem nenhum", "c) Tem quatro", "d) Tem dois"],
      correta: 0
    },
    {
      pergunta: "O que são vértices de um sólido?",
      opcoes: ["a) Superfícies lisas", "b) Pontos onde as arestas se encontram", "c) Linhas retas", "d) Cores da figura"],
      correta: 1
    },
    {
      pergunta: "Qual sólido geométrico parece uma caixa de sapato?",
      imagem: "caixa.jpeg",
      opcoes: ["a) Cubo", "b) Esfera", "c) Paralelepípedo", "d) Cone"],
      correta: 2
    },
    {
      pergunta: "Qual dessas figuras não é um sólido geométrico?",
      opcoes: ["a) Cone", "b) Triângulo", "c) Cilindro", "d) Cubo"],
      correta: 1
    }
  ];

  let perguntaAtual = 0;
  let pontuacao = 0;

  function atualizarContador() {
    document.getElementById("contador").innerText = `Acertos: ${pontuacao} de ${perguntaAtual}`;
  }

  function mostrarPergunta() {
    const q = perguntas[perguntaAtual];
    document.getElementById("pergunta").innerText = q.pergunta;

    document.getElementById("imagem-pergunta").innerHTML = 
  q.imagem ? `<img src="${q.imagem}" style="max-width: 100%; height: auto; margin: 15px 0;">` 
           : "";

    const opcoesDiv = document.getElementById("opcoes");
    opcoesDiv.innerHTML = "";

    q.opcoes.forEach((opcao, index) => {
      const btn = document.createElement("button");
      btn.className = "opcao";
      btn.innerText = opcao;
      btn.onclick = () => verificarResposta(index);
      opcoesDiv.appendChild(btn);
    });

    atualizarContador();
    document.getElementById("feedback").innerHTML = "";
  }

  function verificarResposta(respostaSelecionada) {
    const correta = perguntas[perguntaAtual].correta;
    const feedback = document.getElementById("feedback");

    if (respostaSelecionada === correta) {
      pontuacao++;
      feedback.innerHTML = "✅ Você acertou!";
      feedback.className = "correto";
    } else {
      feedback.innerHTML = "❌ Você errou!";
      feedback.className = "incorreto";
    }

    perguntaAtual++;

    setTimeout(() => {
      if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
      } else {
        document.getElementById("quiz-container").innerHTML = `
          <h1>Quiz Finalizado!</h1>
          <p>Você acertou <strong>${pontuacao}</strong> de <strong>${perguntas.length}</strong> perguntas.</p>
        `;
      }
    }, 1500);
  }

  mostrarPergunta();