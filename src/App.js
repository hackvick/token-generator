import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';

function App() {
  
  return (

  <>
  <Router>
    <Routes>
      <Route path='/generator'element={[<Header/>,<Main/>,<Footer/>]} />
    </Routes>
  </Router>
  {/* <Header />
  <Main />
  <Footer /> */}
  </> 
    );
}

export default App;
