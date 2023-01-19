// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faBed, faVenusMars, faLocationDot, faGraduationCap, faBroom} from '@fortawesome/free-solid-svg-icons';

// CSS
import '../../styles/ProfilePrefsCard.css';

// Google Auth
import UserData from "../../types/UserData";

interface UserProps {
    bedtime: string;
    pref_temp: string;
    cleaning_freq: string;
    snoring: string;
    overnight_guests: string;
    dynamic: string;
    internal_clock: string;
    drinking: string;
    smoking: string;
}

const ProfilePrefsCard = ( {bedtime, pref_temp, cleaning_freq, snoring, overnight_guests, dynamic, internal_clock, drinking, smoking}: UserProps) => {
    return (
            <div className="card-wrapper">
                <div className="profile-prefs-card-content">
                    <div className="room-card-heading">
                        <h2>Preferences</h2>
                    </div>
                    <div className="room-card-body">
                        <div className="room-col" id="left-room-col">
                            <div className="user-attr" id="pref-gender">
                                <FontAwesomeIcon className="attr-icon" icon={faBroom}/>
                                <div className="attr-info">
                                    <p className="attr-value">{bedtime}</p>
                                    <p className="attr-desc">Bedtime</p>
                                </div>
                            </div>
                            <div className="user-attr" id="pref-gender">
                                <FontAwesomeIcon className="attr-icon" icon={faBroom}/>
                                <div className="attr-info">
                                    <p className="attr-value">{cleaning_freq}</p>
                                    <p className="attr-desc">Cleaning Frequency</p>
                                </div>
                            </div>
                        </div>
                        <div className="room-col" id="right-room-col">
                            <div className="user-attr" id="bedtime">
                                <FontAwesomeIcon className="attr-icon" icon={faBroom}/>
                                <div className="attr-info">
                                    <p className="attr-value">{[pref_temp]}° F</p>
                                    <p className="attr-desc">Preferred Room Temp</p>
                                </div>
                            </div>
                            <div className="user-attr" id="pref-gender">
                                <FontAwesomeIcon className="attr-icon" icon={faBroom}/>
                                <div className="attr-info">
                                    <p className="attr-value">{snoring}</p>
                                    <p className="attr-desc">Loudness</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default ProfilePrefsCard;