import { useTheme } from "@emotion/react";

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
        <img src="./logo.png" alt="Logo" />
        <h2>RTELCloud</h2>
      </div>
      <div>
        <h4>Contact</h4>
        <p>
          Email: <a href="mailto:support@rtelcloud.com">suppor@rtelcloud.com</a>
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