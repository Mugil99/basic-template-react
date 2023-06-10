import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Sections from './Components/Sections';
import Footer from './Components/Footer';
function App() {
  return (
   <div>
      <Header/>
      <About/>
      <Sections title={"Skills"}/>
      <Sections title={"Projects"}/>
      <Sections title={"Contact"}/>
      <Footer/>
   </div>
  );
}

export default App;
