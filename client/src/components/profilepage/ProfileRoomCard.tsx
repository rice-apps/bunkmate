// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPeopleGroup} from '@fortawesome/free-solid-svg-icons';

// CSS
import '../../styles/ProfileRoomCard.css';

// Pfps
import benPfp from '../../media/ben-liu-pfp-400x400.png';
import defaultPfp from '../../media/empty-pfp-400x400.png';

// Google Auth
import UserData from "../../types/UserData";

interface UserProps {
    room: string;
    num_search: string;
}

let pfps = new Map();

pfps.set("Ben Liu", benPfp);
pfps.set("Huzaifa Ali", defaultPfp);
pfps.set("Sofia Lakhani", defaultPfp);

const ProfileRoomCard = ({room, num_search}: UserProps) => {
    return (
        <div className="profile-card-wrapper">
            <div className="profile-room-card-content">
                <div className="room-card-heading">
                    <h2>Housing</h2>
                </div>
                <div className="room-card-body">
                    <div className="room-col" id="left-room-col">
                        <div className="user-attr" id="pref-gender">
                            <FontAwesomeIcon className="attr-icon" icon={faHouse}/>
                            <div className="attr-info">
                                <p className="attr-value">Secured: {room}</p>
                            </div>
                        </div>
                    </div>
                    <div className="room-col" id="right-room-col">
                        <div className="user-attr" id="bedtime">
                            <FontAwesomeIcon className="attr-icon" icon={faPeopleGroup}/>
                            <div className="attr-info">
                                <p className="attr-value">Looking for {num_search} roommate(s)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileRoomCard;