import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {lazy, Suspense} from 'react';
import Navbar from './components/navbar.js';
import Footer from './components/footer'
// import ServicesMain from './components/serviceMain.js';
import Options from './components/home/options.js';
import lcmLoc from './images/LCM.png';
import hcfLoc from './images/HCF.jpeg'
import Operation from './components/oprations/index';

function App() {
  const contentStyle = {
    minHeight: '100vh',
  }
  const availableOptions = [
    {
      name: 'LCM',
      desc: 'Find the lowest common multiple of two numbers.',
      imgLoc: lcmLoc,
      location: '/lcm',
    },
    {
      name: 'HCF',
      desc: 'Find the highest common factor of two numbers.',
      imgLoc: hcfLoc,
      location: '/hcf',
    },
  ];
  const ServiceMain = lazy(()=>import('./components/serviceMain.js'));
  return (
    <Router>
      <>
        <div style={contentStyle}>
          <Navbar availableOptions={availableOptions} />
          <Routes>
            <Route exact path="/services" element={
              <Suspense fallback={<div>Loading...</div>}>
                <ServiceMain />
              </Suspense>
            }/>
            <Route exact path="/lcm" element={<Operation/>}/>
            <Route exact path="/hcf" element={<Operation/>}/>
            <Route exact path="/" element={<Options availableOptions={availableOptions} />}/>
          </Routes>
        </div>
          <Footer />
      </>
    </Router>
  );
}

export default App;
