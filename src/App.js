import './App.css';
import Header from './Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
     
     <BrowserRouter>
      <Header />
      <Main />
      <Footer />
       {/* <Route exact path="/tags" component={Tags}/> */}
     </BrowserRouter>
    </>
  );
}

export default App;
