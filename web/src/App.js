import Routes from "./routes";

function App({ isDark, setIsDark }) {
  return (
    <div>
      <Routes isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default App;
