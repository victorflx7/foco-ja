import "../App.css";
import "../index.css";

function Login() {
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
              <h1 className="text-3xl bg-gradient-to-r from-[#7AFFC3] to-[#20B981] bg-clip-text text-transparent font-bold tracking-tighter">
                Foco Já
              </h1>
              <p className="text-gray-500">
                “Pequenos passos, grandes conquistas.”
              </p>
            </div>
          </div>
          <div id="bloco-direita" className="flex flex-row">
            <a href="https://github.com/victorflx7" target="blank">
            <img src="git.svg" className="h-10 shadow-2xl"/>
            </a>
          </div>
        </div>
    </header>
    <main>
      <div className="h-[calc(100vh-100px)] flex justify-center items-center overflow-hidden">
        <div className="flex justify-center items-center border-2 border-gray-300 size-100 rounded-4xl shadow-lg">
          <div className="flex flex-col gap-2 justify-center items-center">
            <h1 className="text-3xl font-extrabold tracking-tight">Acesse sua conta</h1>
            <p className="text-sm text-gray-500">Prossiga na sua jornada de estudos e conquistas</p>
            <br />
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="E-mail ou Nome de Usuário"
                className="border-2 border-gray-300 rounded-lg px-4 py-[5px] placeholder:text-sm hover:border-[#55EBA5] focus:border-[#55EBA5] outline-none"
              />
              <input
                type="text"
                placeholder="Senha"
                className="border-2 rounded-lg px-4 py-[5px] border-gray-300 placeholder:text-sm hover:border-[#55EBA5] focus:border-[#55EBA5] outline-none"
              />
              <br />
              <div className="flex flex-col gap-5">
              <div className="flex flex-row justify-center items-center text-black bg-[#7AFFC3] px-30 py-4 rounded-4xl hover:bg-[#55EBA5] shadow-md transition-all duration-300 ease-out hover:bg-[#55EBA5] hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-95">
                <div className="texto-animado">
                  <button className="flex flex-row justify-between items-center gap-3">
                    <p className="text-sm font-bold text-[#202923]">Entrar</p>
                    <img src="arrow_icon 1.svg" className="h-4" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-500">Não tem uma conta? <span className="text-[#55EBA5]">Crie uma gratuitamente</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
      
    </>
  );
}

export default Login;
