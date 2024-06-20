import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen.jsx'
import {Provider} from 'react-redux'
import {store} from './App/Store.js'
import VideoPlaying from './Screens/VideoPlaying/VideoPlaying.jsx'



const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App />}>
      <Route path='' element = {<HomeScreen />} />
      <Route path='/MyTube-1' element = {<HomeScreen />} />
      <Route path='home' element = {<HomeScreen />} />
      <Route path='videoPlaying' element = {<VideoPlaying />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>,
)
