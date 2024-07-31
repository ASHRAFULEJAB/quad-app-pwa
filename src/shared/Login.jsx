/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import loginIamge from "../assets/images/loginbackground.png";
import loginButton from "../assets/images/loginbutton.png";
import person from "../assets/images/user.png";
import line from "../assets/images/line.png";
import password from "../assets/images/lock.png";
import { useState } from "react";
import LanguageSelector from "../component/LanguageSelector";
import { Link } from "react-router-dom";
const labels = {
  pt: {
    title: "QUAD-HCM",
    username: "Utilizador",
    password: "Senha",
    login: "Entrar",
  },
  "en-uk": {
    title: "QUAD-HCM",
    username: "Username",
    password: "Password",
    login: "Login",
  },
  "en-us": {
    title: "QUAD-HCM",
    username: "Username",
    password: "Password",
    login: "Login",
  },
  de: {
    title: "QUAD-HCM",
    username: "Benutzername",
    password: "Passwort",
    login: "Anmelden",
  },
  es: {
    title: "QUAD-HCM",
    username: "Usuario",
    password: "Contraseña",
    login: "Iniciar sesión",
  },
  fr: {
    title: "QUAD-HCM",
    username: "Nom d'utilisateur",
    password: "Mot de passe",
    login: "Connexion",
  },
  it: {
    title: "QUAD-HCM",
    username: "Nome utente",
    password: "Password",
    login: "Accedi",
  },
  ru: {
    title: "QUAD-HCM",
    username: "Имя пользователя",
    password: "Пароль",
    login: "Войти",
  },
  zh: {
    title: "QUAD-HCM",
    username: "用户名",
    password: "密码",
    login: "登录",
  },
  ko: {
    title: "QUAD-HCM",
    username: "사용자 이름",
    password: "비밀번호",
    login: "로그인",
  },
};
const Login = () => {
  const [language, setLanguage] = useState("pt");
  const handleLanguageChange = (value) => {
    setLanguage(value);
  };
  return (
    <>
      <div className=" flex  items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md  overflow-hidden  w-full">
          <div className="relative">
            <img
              src={loginIamge}
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute top-0 right-0   mt-4 mr-4 flex items-center bg-transparent
             p-2 rounded-full "
            >
              <LanguageSelector
                language={language}
                onChange={handleLanguageChange}
              />
            </div>
          </div>

          <div
            className="absolute top-[288px] left-0 right-0 mt-8  bg-white  p-6
           rounded-3xl  mb-10 "
          >
            <div className=" inset-0  flex items-center justify-center mt-6">
              <h1 className="text-[#373737] text-[24px] font-medium">LOGIN</h1>
            </div>
            <h2 className="text-center text-[14px] font-normal text-[#7D7D7D] mb-4">
              Welcome back! you've been missed!
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2 font-semibold">
                  User Name
                </label>
                <div className="flex items-center border bg-[#F8F8F8] border-[#D9D9D9] rounded-md">
                  <span className="px-3">
                    <div className="flex gap-3">
                      <img src={person} alt="" />
                      <img src={line} alt="" />
                    </div>
                  </span>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="flex-1 py-2.5 px-4 text-gray-700  border-[#D9D9D9] bg-[#F8F8F8] focus:outline-none 
                    focus:ring-2
                     focus:ring-[#D9D9D9] rounded-md"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2 font-semibold">
                  Password
                </label>
                <div className="flex items-center border bg-[#F8F8F8] border-[#D9D9D9] rounded-md">
                  <span className="px-3">
                    <div className="flex gap-3">
                      <img src={password} alt="" />
                      <img src={line} alt="" />
                    </div>
                  </span>
                  <input
                    type="password"
                    placeholder="************"
                    className="flex-1 py-2 px-4 text-gray-700 focus:outline-none focus:ring-2
                    border-[#D9D9D9] bg-[#F8F8F8] focus:ring-[#D9D9D9] rounded-md"
                  />
                </div>
              </div>
              <div className="flex items-end justify-end mb-6">
                <a
                  href="#"
                  className="text-sm text-[#8AB53E] hover:underline font-semibold"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="w-full py-4 px-2 bg-[#8AB53E] text-white rounded-md
                 hover:bg-[#8AB53E] transition duration-200"
                >
                  <Link to="/employee"> LOGIN</Link>
                </button>
                <div className="bg-[#EEEEEE] rounded-md p-3 ml-5">
                  <img src={loginButton} alt="" className="w-[46px]" />
                </div>
              </div>
              <div className="flex justify-center items-center mt-4">
                <span className="text-[#7D7D7D] text-[14px]">
                  Don't have an account?
                </span>
                <a
                  href="/sign-up"
                  className="text-[#8AB53E] font-semibold hover:underline ml-2 "
                >
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
