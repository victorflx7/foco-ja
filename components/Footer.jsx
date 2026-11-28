import { useNavigate } from "react-router-dom";
import "../src/App.css";
import "../src/index.css";

function Footer() {
    return (
        <>
    <footer>
        <div className="flex justify-center items-center px-6 py-6">
          <a href="https://github.com/victorflx7" target="blank">
            <img src="git.svg" className="h-10"/>
          </a>
        </div>
      </footer>
    </>
    )
}

export default Footer;