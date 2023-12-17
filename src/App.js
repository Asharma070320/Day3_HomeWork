import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Text from "./Components/Text";
import Footer from "./Components/Footer";

function App() {
  return (
    // <div className="App">
    <div>
      <Header />

      <div className="flexprop" style={{
        display: "flex",
      }}>
        <Navbar name="HOME" />
        <Navbar name="ABOUT"/>
        <Navbar name="SERVICES"/>
        <Navbar name="FAQ"/>
        <Navbar name="CONTACT"/>
      </div>
      <div class="image">
      <img src="https://media.istockphoto.com/id/503219100/photo/people-in-a-park.jpg?s=612x612&w=0&k=20&c=VP0QT_MR_Cckke6jA30CX7c1G3gwwVcUifgcLfOY-IQ="></img>
      </div>
      <div class="main">
        <Body />
      </div>
      <div class="text">
        <Text />
      </div>
      <br /> <br />
      <div class="footer">
        <Footer />
      </div>
      <div class="footWidth">
        <p>Powered by Website.com</p>
      </div>
    </div>
   
  );
}

export default App;
