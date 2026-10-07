import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Stamp from './Stamp.jsx'
// import Store from './Store.jsx'
// import ShowList from './ShowList.jsx' 
// import {ShowList2}  from './ShowList2.jsx'
// import { RfDemo } from './RfDemo.jsx'
// import {Header} from './Header.jsx'
// import { Footer } from './Footer.jsx'
// import { Notes } from './Notes.jsx'
// import {Notes} from './Notes1.jsx'
import RoutingApp from './RoutingApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App x="+" y="-"/> */}
  {/* <Store /> */}
  {/* <ShowList /> */}
  {/* <RfDemo/> */}
  {/* <ShowList2/> */}
   {/* <Stamp/> */}
   {/* <Footer/> */}
   {/* <Header/> */}
   {/* <Notes/> */}
   {/* <Notes/> */}
   <RoutingApp/>
  </StrictMode>
)
