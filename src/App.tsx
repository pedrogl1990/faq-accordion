import mobileBackground from "./assets/images/background-pattern-mobile.svg";

const App = () => {
  return (
    <div className="min-h-screen h-full bg-purple-100">
      <img src={mobileBackground} alt="background" className="w-full h-1/4 md:hidden" />
    </div>
  );
};

export default App;
