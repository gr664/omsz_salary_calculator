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
				<Route exact path='/omsz_salary_calculator' exact element={<Home />} />
				<Route path='/omsz_salary_calculator/about' element={<About />} />
				<Route path='/omsz_salary_calculator/contact' element={<Contact />} />
				<Route path='/omsz_salary_calculator/blogs' element={<Blogs />} />
				<Route path='/omsz_salary_calculator/sign-up' element={<SignUp />} />
			</Routes>
		</Router>
	);
}

export default App;

