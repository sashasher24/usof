import './App.css';
import Header from './Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState();

  const getUsersToken = (tok) => setToken(tok);

  return (
    <>
     
     <BrowserRouter>
      <Header getUsersToken={getUsersToken}/>
      <Main token={token}/>
      <Footer />
       {/* <Route exact path="/tags" component={Tags}/> */}
     </BrowserRouter>
    </>
  );
}

export default App;
