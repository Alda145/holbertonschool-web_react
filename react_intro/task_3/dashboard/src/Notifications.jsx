import './Notifications.css';
import close from './assets/close-button.png';

const Notifications = () => {
    const latestNotification = 'Urgent requirement - complete by EOD';

    return (
        <div className="notification-items">
            
            <p>Here is the list of notifications</p>

            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent">{latestNotification}</li>
            </ul>

            <button
                aria-label="Close"
                style={{ position: 'absolute', top: '10px', right: '10px' }}
                onClick={() => console.log('Close button has been clicked')}
            >
                <img src={close} style={{ width: '30px', height: '30px' }} alt="close" />
            </button>
        </div>
    );
};

export default Notifications;