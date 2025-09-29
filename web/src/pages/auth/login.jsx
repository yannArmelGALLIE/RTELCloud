import { Link } from "react-router-dom";
import Footer from "../widgets/footer";
import { useTheme } from "@emotion/react";

const Login = ({ isDark, setIsDark }) => {
    const  theme = useTheme();

  return (
    <div className="login-main">
      <div className="login-content">
        <div>
          <h1>Connectez-vous à votre compte</h1>
        </div>
        <div>
          <form action="">
            <label htmlFor="email">Matricule ou Email</label>
            <input type="text" name="" id="" />
            <label htmlFor="password">Mot de passe</label>
            <input type="password" name="" id="" />
            <div>
              <Link>Mot de passe oublié ?</Link>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Se souvenir de moi</label>
              </div>
            </div>
            <button type="submit" style={{ color: theme.palette.background.default, backgroundColor: theme.palette.text.primary }}>Connectez-vous</button>
          </form>
          <p>Vous n'avez pas encore de compte ? <Link to={"/auth/register"} >Inscrivez-vous</Link></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
