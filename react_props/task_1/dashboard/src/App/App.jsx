
import Notifications from "../Notifications/Notifications";
import Login from '../Login/Login'
import Header from '../Header/Header'
import Footer from "../Footer/Footer";


const App = () => {



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
