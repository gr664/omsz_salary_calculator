import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import NewShift from './pages/newshift';
import Shifts from './pages/shifts';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/omsz_salary_calculator' exact element={<Home />} />
				<Route path='/omsz_salary_calculator/about' element={<About />} />
				<Route path='/omsz_salary_calculator/contact' element={<Shifts />} />
				<Route path='/omsz_salary_calculator/blogs' element={<NewShift />} />
			</Routes>
		</Router>
	);
}

export default App;

