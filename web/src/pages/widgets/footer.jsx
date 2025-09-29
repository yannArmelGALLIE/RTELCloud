import { useTheme } from "@emotion/react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
    const theme = useTheme();

  return (
    <div
      className="footer"
      style={{
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.background.default,
      }}
    >
      <div>
        <img src={logo} alt="Logo" />
        <Link to={"/"} style={{ color:  theme.palette.background.default}}><h2>RTELCloud</h2></Link>
      </div>
      <div>
        <h4>Contact</h4>
        <p>
          Email: <a href="mailto:support@rtelcloud.com">support@rtelcloud.com</a>
        </p>
        <p>
          Téléphone: <a href="tel:+2250710971006">+225 07 10 97 10 06</a>
        </p>
      </div>
      <div>
        &copy; {new Date().getFullYear()} RTELCloud. Tous droits réservés.
      </div>
    </div>
  );
};

export default Footer;