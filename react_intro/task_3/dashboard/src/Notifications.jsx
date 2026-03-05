import './Notifications.css';
import close from './assets/close-button.png';

const Notification = () => {
    return (
        <div className="notification-items">
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent">Urgent requirement - complete by EOD</li>
            </ul>
            <button aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
                <img src={close} />
            </button>
        </div>
    );
};

export default Notification;