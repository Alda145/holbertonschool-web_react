import './Notifications.css'
import close from './assets/close-button.png'

const Notification = () => {
    return <div className="notification-items d-flex justify-content-between ">

        <p>Here is the list of notifications</p>
        <ul>
            <li data-priority="default">
                New course available
            </li>
            <li data-priority="urgent">
                New resume available
            </li>
            <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}>
              
            </li>


        </ul>
        <button style={{}} aria-label='Close' onClick={() => { console.log('Close button has been clicked to the console.') }} >

            <img src={close} />
        </button>

    </div>
}
export default Notification;