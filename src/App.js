
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <div className="social-wrapper">
		<Header />
		<Navbar />
		  <div className="main">
			  <Profile />
		  </div>
    </div>
  );
}

export default App;
