import { useNavigate } from "react-router-dom";
import "../App.css";
import "../index.css";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";


function Login() {
  const navigate = useNavigate();
  const [modoCadastro, setModoCadastro] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [contador, setContador] = useState(0);
  const traduzirErro = (codigo) => {
    switch(codigo) {
      case "auth/email-already-in-use":
        return "Esse e-mail já foi cadastrado.";
      case "auth/invalid-email":
        return "E-mail inválido"
      case "auth/weak-password":
        return "A senha precisa de ter pelo menos 6 caracteres."
      case "auth/invalid-credential":
      case "auth/user-not-found":
      case "auth/wrong-password":
        return "E-mail ou senha incorretos."
      case "auth/too-many-requests":
        return "Muitas tentativas. Tente novamente mais tarde."
      default:
        return "Algo deu errado. Tente novamente."
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");

    if (modoCadastro && senha !== confirmarSenha) {
      setErro("A senha não coincidem");
      return;
    }

    setCarregando(true);
    try {
      if (modoCadastro) {
        const cred = await createUserWithEmailAndPassword(auth, email, senha);
        await updateProfile(cred.user, {displayName: nome});
      } else {
        await signInWithEmailAndPassword(auth, email, senha);
      }
      navigate("/dashboard");
    } catch (err) {
      setErro(traduzirErro(err.code));
    } finally {
      setCarregando(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header>
          <div className="flex items-center px-10 py-5 justify-between">
            <div
              id="bloco-esquerda"
              className="flex gap-6 justify-center items-center"
            >
              <img
                src="logo.svg"
                className="h-8 justify-items-start cursor-pointer"
                onClick={() => navigate("/")}
              />
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
                <img src="git.svg" className="h-10 shadow-2xl" />
              </a>
            </div>
          </div>
        </header>
        <main className="relative overflow-hidden">
          <div className="min-h-[calc(100vh-100px)] flex justify-center items-center px-6 py-8">
            <div className="relative">
              <img
                src="lines2.svg"
                className="absolute z-10 h-8 sm:h-12 -top-10 -right-5 sm:-top-5 sm:-right-6 -rotate-20 line-animada pointer-events-none"
              />
              <img
                src="lines3.svg"
                className="absolute z-10 h-8 sm:h-12 -bottom-5 -left-3 sm:-bottom-6 sm:-left-6 -rotate-38 line-animada pointer-events-none"
              />
              <div
                className={`flex justify-center items-center border-2 border-gray-300 rounded-4xl shadow-lg bg-white
        px-6 sm:px-20 ${modoCadastro ? "py-5" : "py-10"}`}
              >
                <div className="flex flex-col gap-1 justify-center items-center">
                  <h1 className="text-3xl font-extrabold tracking-">
                    {modoCadastro ? "Crie sua conta" : "Acesse sua conta"}
                  </h1>
                  <p className="text-sm text-gray-500 ">
                    {modoCadastro
                      ? "Comece sua jornada de estudos e conquistas."
                      : "Prossiga na sua jornada de estudos e conquistas."}
                  </p>
                  <br />
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3 animate-fade">
                  <div className="flex flex-col gap-3 animate-fade text-sm">
                    {modoCadastro && (
                      <>
                        <div className="flex flex-col gap-3 animate-fade">
                          <h1 className="text-sm translate-y-1">
                            Nome Completo{" "}
                            <span className="text-red-600">*</span>
                          </h1>
                          <div className="flex items-center border-2 border-gray-300 rounded-lg px-5 py-2 hover:border-[#aeffdb] focus:-[#7AFFC3] hover:bg-[#F0FBFD] gap-4">
                            <img src="user_icon.svg" className="h-5" />
                            <input
                              type="text"
                              placeholder="João da Silva"
                              className="w-80 placeholder:text-sm outline-none"
                            />
                          </div>
                        </div>
                      </>
                    )}
                    <h1 className="text-sm translate-y-1">
                      E-mail <span className="text-red-600">*</span>
                    </h1>
                    <div className="flex items-center border-2 border-gray-300 rounded-lg px-5 py-2 hover:border-[#aeffdb] focus:-[#7AFFC3] hover:bg-[#F0FBFD] ">
                      <img src="email.svg" className="h-5" />
                      <input
                        type="text"
                        placeholder="seuemail@gmail.com"
                        className="px-4 placeholder:text-sm outline-none w-80"
                      />
                    </div>
                    <h1 className="text-sm translate-y-1">
                      Senha <span className=" text-red-600">*</span>
                    </h1>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center border-2 border-gray-300 rounded-lg px-5 py-2 hover:border-[#7AFFC3] focus:-[#7AFFC3] hover:bg-[#F0FBFD]">
                        <img src="password-icon.svg" className="h-5" />
                        <input
                          type="text"
                          placeholder="senha123"
                          className="px-4 placeholder:text-sm outline-none w-80"
                        />
                      </div>
                      {modoCadastro && (
                        <>
                        
                            <h1 className="text-sm translate-y-1">
                              Confirme sua senha{" "}
                              <span className="text-red-600">*</span>
                            </h1>
                            <div className="flex items-center border-2 border-gray-300 rounded-lg px-5 py-2 hover:border-[#aeffdb] focus:-[#7AFFC3] hover:bg-[#F0FBFD]">
                              <img src="password-icon.svg" className="h-5" />
                              <input
                                type="text"
                                placeholder="senha123"
                                className="px-4 placeholder:text-sm outline-none w-80"
                              />
                            </div>
                        </>
                      )}
                    </div>

                    <br />
                    <div className="flex flex-col gap-5 -translate-y-3 ">
                      <div className="flex flex-row justify-center items-center text-black bg-[#7AFFC3] px-30 py-4 rounded-4xl hover:bg-[#55EBA5] shadow-md transition-all duration-300 ease-out hover:bg-[#55EBA5] hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-95 cursor-pointer ">
                        <button className="flex flex-row justify-between items-center gap-3 texto-animado text-sm font-bold text-[#202923] cursor-pointer">
                          {modoCadastro ? "Crie sua conta" : "Entrar"}
                          <img
                            src="arrow_icon 1.svg"
                            className="h-4 cursor-pointer"
                          />
                        </button>
                      </div>
                      <div
                        key={modoCadastro ? "cadastro" : "login"}
                        className="flex justify-center items-center animate-fade"
                      >
                        <p className="text-sm text-gray-500 ">
                          {modoCadastro
                            ? "Já tem uma conta?"
                            : "Não tem uma conta?"}

                          <span
                            onClick={() => setModoCadastro(!modoCadastro)}
                            className="text-[#55EBA5] cursor-pointer font-semibold ml-1"
                          >
                            {modoCadastro ? "Entrar" : "Crie uma gratuitamente"}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Login;
