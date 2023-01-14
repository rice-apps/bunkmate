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
    overnight_guests: string;
    dynamic: string;
    internal_clock: string;
    drinking: string;
    smoking: string;
}

const ProfilePrefsCard = ( {bedtime, pref_temp, cleaning_freq, overnight_guests, dynamic, internal_clock, drinking, smoking}: UserProps) => {
    return (
        <div className="prefs-card-wrapper">
            <div className="card-content">
                <div className="card-body">
                    <div className="attr-col">
                        <div className="user-attr" id="pref-gender">
                            <FontAwesomeIcon className="attr-icon" icon={faVenusMars}/>
                            <div className="attr-info">
                                <p className="attr-value">{bedtime}</p>
                                <p className="attr-desc">roommate preferred</p>
                            </div>
                        </div>
                        <div className="user-attr" id="bedtime">
                            <FontAwesomeIcon className="attr-icon" icon={faBed}/>
                            <div className="attr-info">
                                <p className="attr-value">{bedtime}</p>
                                <p className="attr-desc">bedtime</p>
                            </div>
                        </div>
                    </div>
                    <div className="attr-col">
                        <div className="user-attr" id="pref-temp">
                            <FontAwesomeIcon className="attr-icon" icon={faTemperatureHalf}/>
                            <div className="attr-info">
                                <p className="attr-value">{pref_temp}℉</p>
                                <p className="attr-desc">room temperature</p>
                            </div>
                        </div>
                        <div className="user-attr" id="cleaning-freq">
                            <FontAwesomeIcon className="attr-icon" icon={faBroom}/>
                            <div className="attr-info">
                                <p className="attr-value">{cleaning_freq}</p>
                                <p className="attr-desc">cleaning frequency</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfilePrefsCard;