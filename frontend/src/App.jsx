import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Landingpage/Navbar'
import Footer from './components/Landingpage/Footer';
import Home from './pages/Home';
import AccountModal from './components/Landingpage/AccountModal';
import LoginModal from './components/Landingpage/Login';
import Landing from './components/Creatorspage/Landing';
import Resources from './components/Resource-Hub/Resources';
import Createpro from './components/Resource-Hub/Createpro';
import Chat from './pages/Chat';
import DiscoverPage from './components/Discover/DiscoverPage';
import ProjectView from './components/Backers/Projectview';
import Payment1 from './components/Backers/Payment1';
import { Toaster } from 'react-hot-toast';

const App = () => {
    return (
        <>
            <Toaster position="bottom-right" />
            <Router>
                <div className="min-h-screen bg-white">
                    <Navbar />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/signup" element={<AccountModal />} />
                            <Route path="/login" element={<LoginModal />} />
                            <Route path="/creators" element={<Landing />} />
                            <Route path="/resource-hub" element={<Resources />} />
                            <Route path="/create-project" element={<Createpro />} />
                            <Route path="/discover" element={<DiscoverPage />} />
                            <Route path="/project/:projectId" element={<ProjectView />} />
                            <Route path="/payment/:projectId" element={<Payment1 />} />
                        </Routes>
                    </main>
                    <Chat />
                    <Footer />
                </div>
            </Router>
        </>
    );
};

export default App;
