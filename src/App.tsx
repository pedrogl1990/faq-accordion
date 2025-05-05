import desktopBackground from "./assets/images/background-pattern-desktop.svg";
import mobileBackground from "./assets/images/background-pattern-mobile.svg";
import FAQCard from "./components/FAQCard";

const App = () => {
  return (
    <div className="min-h-screen h-full bg-purple-100">
      <div className="h-1/5">
        <img src={mobileBackground} alt="background" className="w-full md:hidden" />
        <img src={desktopBackground} alt="background" className="w-full hidden md:block" />
      </div>
      <div className="flex justify-center">
        <FAQCard />
      </div>
    </div>
  );
};

export default App;
