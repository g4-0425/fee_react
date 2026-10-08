import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { App_usememo } from './components/App_usememo'
import { App } from './App';

// import {StoreApp} from './StoreApp';

//import { StateLifting } from './components/StateLifting';
createRoot(document.getElementById('root')).render(
  <StrictMode>
{/* <App_usememo/> */}
<App/>

{/* <StoreApp/> */}

{/* <StateLifting/> */}
  </StrictMode>
)
