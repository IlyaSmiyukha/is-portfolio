import Background from "./components/Background";
import Contacts from "./components/Contacts";
import Info from "./components/Info";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen p-8">
      <Background />
      <Info />
      <Contacts />
      <Projects />
    </div>
  );
};

export default App;
