import React, {Component } from 'react';
import {Redirect} from 'react-router-dom';
import logo from './logo.svg';
import MainContainer from './components/Main/main_container';
import {BrowserRouter,HashRouter, Route} from  'react-router-dom';
import {Provider} from  'react-redux';
import store from './REDUX/Redux_Store.js';
import './App.css';
import MusicDataFile from './components/Music/MusicDataFile'
import MusicContainer from './components/Music/Music_Container';
import Header from './components/Header/Header'
import MusicFileContainer from './components/Music/MusicFile_Container'
function App() {
  return (
    <div className="App">
   <HashRouter basename={process.env.PUBLIC_URL}>
     <Provider store ={store}>
     <Redirect from="/" to="/main" />
     <div class='header__wrapper'>
          <Header  />  
     </div> 
     
        <Route path='/main'  render= { ()=> {
          return  <React.Suspense>
            <div class='app_wrapper'>

                <MainContainer />
            </div>
              </React.Suspense>
        }} />
            <Route path='/result-line'  render= { ()=> {
          return  <React.Suspense>
            <div class='app_wrapper'>
                <MusicContainer />
               

            </div>
              </React.Suspense>
        }} />
                    <Route path='/result-file'  render= { ()=> {
          return  <React.Suspense>
            <div class='app_wrapper'>
                <MusicFileContainer />

            </div>
              </React.Suspense>
        }} />
     
        
      </Provider>
     </HashRouter>
    </div>
  );
}

export default App;
