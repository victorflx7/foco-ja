import { useNavigate } from "react-router-dom";
import "../src/App.css";
import "../src/index.css";

function Header() {
    const navigate = useNavigate();
    return (
        <>
        <header>
        <div className="flex items-center px-10 py-5 justify-between">
          <div
            id="bloco-esquerda"
            className="flex gap-6 justify-center items-center"
          >
            <img src="logo.svg" className="h-8 justify-items-start cursor-pointer" onClick={() => navigate("/")} />
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
            <button
              className="h-10 px-4 py-6 bg-[#7AFFC3] rounded-4xl hover:bg-[#55EBA5] flex flex-row justify-center gap-3 items-center transition-all duration-300 ease-out hover:bg-[#55EBA5] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer" onClick={() => navigate("")}
            >
              <img src="user_icon_b.svg" className="h-5 cursor-pointer" />
            </button>
          </div>
        </div>
      </header>
    </>
    )
}

export default Header;