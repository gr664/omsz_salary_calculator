// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Ez egy NEM HIVATALOS webApp, ami az OMSZ kivonuló állományának készítettem.
//           A dolgozott műszakok megadása után a program kiszámolja a bruttó fizetésed nagyságát.
//           Ha hibát észlelsz, szólj nekem!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Kiszámolom a fizetésem
//         </a>
//       </header>
//       <footer>
//       Icon by <a href="https://freeicons.io/profile/350417">Barudak Lier</a> on <a href="https://freeicons.io">freeicons.io</a>
//       </footer>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' exact element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/sign-up' element={<SignUp />} />
			</Routes>
		</Router>
	);
}

export default App;

