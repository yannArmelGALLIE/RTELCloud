import React, { useEffect, useRef } from "react";
import CustomizedSwitches from "./widgets/switch";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Lottie from "lottie-react";
import Network from "../assets/Network.json";
import Device from "../assets/Device.json";
import Import from "../assets/Import.json";
import Export from "../assets/Export.json";
import CustomCard from "./widgets/card";
import Footer from "./widgets/footer";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import logo from "../assets/logo.png"

const Main = ({ isDark, setIsDark }) => {
  const Navigate = useNavigate();
  const theme = useTheme();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const cardsRef = useRef(null);
  const cardsIsInView = useInView(cardsRef, { once: true });
  const cardsMainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  useEffect(() => {
    if (cardsIsInView) {
      cardsMainControls.start("visible");
    }
  }, [cardsIsInView]);

  const cardsInfo = [
    {
      animation: Device,
      title: "Accédez à vos documents",
      subTitle:
        "Retrouvez et ouvrez vos fichiers instantanément, où que vous soyez et depuis n'importe quel appareil.",
    },
    {
      animation: Import,
      title: "Importer des documents",
      subTitle:
        "Ajoutez facilement vos fichiers au cloud pour les stocker et les partager en toute sécurité.",
    },
    {
      animation: Export,
      title: "Exportez vos documents",
      subTitle:
        "Téléchargez et partagez vos fichiers en toute sécurité, quand vous en avez besoin.",
    },
  ];

  return (
    <div className="main">
      <div className="navbar-main">
        <div>
          <img src={ logo } alt="Logo" />
          <h1>RTELCloud</h1>
        </div>
        <div>
          <Stack spacing={2} direction="row">
            <Button
              variant="text"
              sx={{ color: "text.primary" }}
              onClick={() => {
                Navigate("/auth/login/");
              }}
            >
              Se connecter
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "text.primary",
                color: "background.default",
              }}
              onClick={() => {
                Navigate("/auth/register/");
              }}
            >
              S'inscrire
            </Button>
            <CustomizedSwitches isDark={isDark} setIsDark={setIsDark} />
          </Stack>
        </div>
      </div>
      <div className="body-main">
        <div>
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2>
              Plateforme de gestion de documents pour la filière Réseaux et
              Télécommunications RTEL
            </h2>
            <p>
              Retrouvez et ouvrez rapidement vos fichiers grâce à une recherche
              intelligente et une organisation claire.
            </p>
            <Button
              onClick={() => {
                Navigate("/auth/login/");
              }}
              sx={{ color: "text.primary", borderColor: "text.primary" }}
              variant="outlined"
            >
              parcourir la bibliothèque
            </Button>
          </motion.div>
          <Lottie animationData={Network} className="network-animation" />
        </div>
        <motion.div
          ref={cardsRef}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={cardsMainControls}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {cardsInfo.map((card) => {
            return (
              <CustomCard
                animation={card.animation}
                title={card.title}
                subTitle={card.subTitle}
                textColor={theme.palette.background.default}
                background={theme.palette.text.primary}
              />
            );
          })}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
