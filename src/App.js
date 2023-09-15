import './App.scss';
import { Navbar } from './components/index';
import { Header, About, Work, Skills, Testimonial, Footer } from "./container/index"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
