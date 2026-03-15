
import Notifications from "../Notifications/Notifications";
import Login from '../Login/Login'
import Header from '../Header/Header'
import Footer from "../Footer/Footer";

import './App.css'

const App = () => {
  const date = new Date()


  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
      <Header />
      <Login />
      <Footer />
    </>
  )
}

export default App
