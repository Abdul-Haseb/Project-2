import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Contactus from "./components/Contact/Contact_us";
import Contactform from "./components/ContactForm/ContactForm";
function App() {
  return (
    <div className="container">
      <Navigation />
      <Contactus />
      <Contactform />
    </div>
  );
}

export default App;
