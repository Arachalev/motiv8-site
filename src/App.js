import './App.css';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';


function App() {
  return (
    <Fragment>
      <Header/>
      <Outlet/>

      <Footer/>

    </Fragment>
       
  );
}

export default App;
