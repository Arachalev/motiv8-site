import './App.css';
import { Fragment, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
// import { fetchBlogData } from './store/blog-actions';
// import { useDispatch } from 'react-redux';


function App() {

  //Fetching blog data after component is mounted
  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(fetchBlogData())
  // },[dispatch])

  return (
    <Fragment>
      <Header/>
      <Outlet/>
      <Footer/>

    </Fragment>
       
  );
}

export default App;
