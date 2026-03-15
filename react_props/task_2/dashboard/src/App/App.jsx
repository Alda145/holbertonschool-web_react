
import Notifications from "../Notifications/Notifications";
import Login from '../Login/Login'
import Header from '../Header/Header'
import Footer from "../Footer/Footer";


const App = () => {
  // Array of notifications
  const notificationsList = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: "<strong>Urgent requirement</strong>" } },
  ];


  return (
    <>
      <div className="root-notifications">
        <Notifications notifications={notificationsList} />
      </div>
      <Header />
      <Login />
      <Footer />
    </>
  )
}

export default App
