import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div className="flex items-center px-10 py-5 justify-between">
          <div
            id="bloco-esquerda"
            className="flex gap-6 justify-center items-center"
          >
            <img src="logo.svg" className="h-8 justify-items-start" />
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl bg-gradient-to-r from-[#7AFFC3] to-[#20B981] bg-clip-text text-transparent font-bold font-">
                Foco Já
              </h1>
              <p className="text-gray-500">
                “Pequenos passos, grandes conquistas.”
              </p>
            </div>
          </div>
          <div id="bloco-direita" className="flex flex-row">
            <button
              className="h-10 px-6 py-7 bg-[#7AFFC3] rounded-4xl hover:bg-[#55EBA5] flex flex-row justify-center gap-3 items-center transition-all duration-300 ease-out hover:bg-[#55EBA5] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              <img src="login_icon(2).svg" className="h-5" />
              <p className="font-bold text-[#202923]">Login</p>
            </button>
          </div>
        </div>
      </header>
      <main>
        <br />
        <div id="blobs_section" className="flex flex-row ">
          <img
            src="blobs1.svg"
            className="size-60 absolute max-[900px]:hidden -left-20 blob-animado"
          />
          <img
            src="blobs2.svg"
            className="size-60 absolute max-[900px]:hidden  -right-25 blob-animado-atrasado"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div id="lines" className="flex gap-2 md:gap-4 lg:gap-8">
            <img src="lines3.svg" className="h-15 line-animada" />
            <div className="flex flex-col text-center gap-5">
            <h1 className=" text-[#072D2C] font-extrabold tracking-tighter text-5xl">
              Seja bem vindo ao <span className="text-[#7AFFC3]">Foco Já!</span>
            </h1>
            <p>Organiza o teu tempo, melhora o teu foco e alcança os teus objetivos <br />
            com metodos de estudo comprovados.</p>
            </div>
            <img src="lines2.svg" className="h-15 line-animada" />
          </div>
          <br />
          <div
            className="flex flex-row text-black bg-[#7AFFC3] px-9 py-5 rounded-4xl hover:bg-[#55EBA5] shadow-md transition-all duration-300 ease-out hover:bg-[#55EBA5] hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-95"
          >
            <br />
            <div className="texto-animado">
            <button className="flex flex-row justify-between items-center gap-3">
              <p className="font-bold text-[#202923]">
                Comece a focar agora mesmo
              </p>
              <img src="arrow_icon 1.png" className="h-4" />
            </button>
            </div>
          </div>
          <br />
          <br />
          <div className="text-center">
            <h1 className="p-6 text-black font-bold text-4xl">
              Técnicas comprovadas <br /> de um estudo{" "}
              <span className="bg-gradient-to-r from-[#7AFFC3] to-[#20B981] bg-clip-text text-transparent">
                mais eficiente
              </span>
            </h1>
            <p className="text-sm">
              Descobre métodos simples e eficazes para melhorares a tua
              concentração e produtividade nos estudos.
            </p>
          </div>
          <br />
          <div
            id="secoes_estudo"
            className=" p-6 justify-center items-center rounded-2xl text-center gap-5"
          >
            <div id="organizacao" className="grid grid-cols-2 gap-5">
              <div
                id="cartao_pomodoro"
                className="flex flex-col bg-white border-[#D1DDD6] border rounded-2xl p-6 text-left gap-3 shadow-sm card-animado"
              >
                <div className="flex bg-[#7AFFC3] size-17 rounded-4xl items-center justify-center">
                  <img src="pomodoro_icon.png" className="h-10" />
                </div>
                <h1 className="text-2xl font-semibold">Técnica Pomodoro</h1>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Divide o teu tempo em blocos de foco de 25 minutos, com
                  pequenas pausas. Ajuda a manter a concentração e a evitar a
                  procrastinação.
                </p>
              </div>
              <div
                id="cartao_flashcard"
                className="flex flex-col bg-white border-[#D1DDD6] border rounded-2xl p-6 text-left gap-3 shadow-sm card-animado"
              >
                <div className="flex bg-[#7AFFC3] size-17 rounded-4xl items-center justify-center">
                  <img src="flashcard_icon.png" className="h-10" />
                </div>
                <h1 className="text-2xl font-semibold">Flashcards</h1>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Transforma os teus estudos numa experiência mais dinâmica com
                  cartões de pergunta e resposta. Memoriza conceitos
                  importantes, revê conteúdos das tuas disciplinas e testa os
                  teus conhecimentos de forma prática e interativa, ao teu
                  próprio ritmo.
                </p>
              </div>
              <div
                id="cartao_active_recall"
                className="flex flex-col bg-white border-[#D1DDD6] border rounded-2xl p-6 text-left gap-3 shadow-sm card-animado"
              >
                <div className="flex bg-[#7AFFC3] size-17 rounded-4xl items-center justify-center">
                  <img src="active_recall_icon.png" className="h-13" />
                </div>
                <h1 className="text-2xl font-semibold">Active Recall (Recordação Ativa)</h1>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Técnica de aprendizagem que estimula a recuperação de informações da memória por meio de perguntas e respostas, sem consultar materiais. Ajuda a identificar dificuldades, reforçar conhecimentos e melhorar a retenção do conteúdo estudado.
                </p>
              </div>
              <div
                id="cartao_pomodoro4"
                className="flex flex-col bg-white border-[#D1DDD6] border rounded-2xl p-6 text-left gap-3 shadow-sm card-animado"
              >
                <div className="flex bg-[#7AFFC3] size-17 rounded-4xl items-center justify-center">
                  <img src="pomodoro_icon.png" className="h-10" />
                </div>
                <h1 className="text-2xl font-semibold">Técnica Pomodoro</h1>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Divide o teu tempo em blocos de foco de 25 minutos, com
                  pequenas pausas. Ajuda a manter a concentração e a evitar a
                  procrastinação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="flex justify-center items-center px-6 py-6">
          <a href="https://github.com/victorflx7" target="blank">
            <img src="github_icon.png" className="h-10"/>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
