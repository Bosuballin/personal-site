import Header from "./components/Header";
import Splash from "./components/Splash";
import CV from "./components/CV";
import Footer from "./components/Footer";
import HorizontalBarChart from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Splash />
      <Portfolio />
      <CV />
      <HorizontalBarChart />
      <Hobbies />
      <Footer />
    </>
  );
}

export default App;
