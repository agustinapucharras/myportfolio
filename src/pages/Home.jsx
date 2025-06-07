import React from 'react'
import Header from '../components/Header'
import MainHome from "../components/main/MainHome"
import Footer from "../components/Footer"
import useThemeStore from "../store/authStore";
const Home = () => {

   const { background } = useThemeStore();
  return (
    <div className={background ? "dark" : "light"}>
      <Header />
      <MainHome />
      <Footer />
    </div>
  );
}


export default Home
