
import './App.css';
import About from './components/about/About';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Results from './components/MatchResults/Results';
import Matches from './components/MatchUpdate/Matches';
import Navbar from './components/Navbar/Navbar';
import TeamTrophies from './components/TeamTrophies/[Team]Trophies';
import Upcoming from './components/UpcominFitures/Upcoming';

function App() {
  return (
    <main>
     <Navbar />
     <Header />
     <Features />
     <Matches/>
     <Upcoming />
     <Results />
     <TeamTrophies />
     <About />
     <Footer />
    </main>
  );
}

export default App;
