import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ReviewList from './components/ReviewList';
import ReviewDetail from './components/ReviewDetail';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<ReviewList />} />
                    <Route path="/reviews/:id" element={<ReviewDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;



