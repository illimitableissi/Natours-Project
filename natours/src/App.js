import Header from './Components/Header'
import AboutMe from './Components/AboutMe'
import Features from './Components/Features'
import Tours from './Components/Tours'
import Stories from './Components/Stories'
import Booking from './Components/Booking'
import Footer from './Components/Footer'
import '../src/sass/main.sass'

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Features />
      <Tours />
      <Stories />
      <Booking />
    </div>
  );
}

export default App;
