// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faBed, faVenusMars, faLocationDot, faGraduationCap, faMoon, faSun, faBroom, faSmoking,faVolumeHigh, faHandshake, faSprayCanSparkles, faTemperatureLow} from '@fortawesome/free-solid-svg-icons';

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
                    <div className="prefs-card-heading">
                        <h2>Preferences</h2>
                    </div>
                    <div className="prefs-card-body">
                        <div className="prefs-col" id="left-prefs-col">
                            <div className="user-attr" id="pref-gender">
                                <FontAwesomeIcon className="attr-icon" icon={faBed}/>
                                <div className="attr-info">
                                    <p className="attr-value">{[bedtime]}</p>
                                    <p className="attr-desc">Bedtime</p>
                                </div>
                            </div>
                            <div className="user-attr" id="pref-gender">
                                <FontAwesomeIcon className="attr-icon" icon={faSprayCanSparkles}/>
                                <div className="attr-info">
                                    <p className="attr-value">{[cleaning_freq]}</p>
                                    <p className="attr-desc">Cleaning Frequency</p>
                                </div>
                            </div>
                            <div className="user-attr" id="bedtime">
                                <FontAwesomeIcon className="attr-icon" icon={faTemperatureLow}/>
                                <div className="attr-info">
                                    <p className="attr-value">{[pref_temp]}˚F</p>
                                    <p className="attr-desc">Preferred Room Temp</p>
                                </div>
                            </div>
                            <div className="user-attr" id="bedtime">
                                <FontAwesomeIcon className="attr-icon" icon={faMoon}/>
                                <div className="attr-info">
                                    <p className="attr-value">{[overnight_guests]}</p>
                                    <p className="attr-desc">Overnight Guests</p>
                                </div>
                            </div>
                        </div>
                        <div className="prefs-col" id="right-prefs-col">
                            <div className="user-attr" id="bedtime">
                                <FontAwesomeIcon className="attr-icon" icon={faHandshake}/>
                                <div className="attr-info">
                                    <p className="attr-value">{[dynamic]}</p>
                                    <p className="attr-desc">Dynamic</p>
                                </div>
                            </div>
                            <div className="user-attr" id="pref-gender">
                                <FontAwesomeIcon className="attr-icon" icon={faVolumeHigh}/>
                                <div className="attr-info">
                                    <p className="attr-value">{[snoring]}</p>
                                    <p className="attr-desc">Loudness</p>
                                </div>
                            </div>
                            <div className="user-attr" id="bedtime">
                                <FontAwesomeIcon className="attr-icon" icon={faSun}/>
                                <div className="attr-info">
                                    <p className="attr-value">{[internal_clock]}</p>
                                    <p className="attr-desc">Internal Clock</p>
                                </div>
                            </div>
                            <div className="user-attr" id="bedtime">
                                <FontAwesomeIcon className="attr-icon" icon={faSmoking}/>
                                <div className="attr-info">
                                    <p className="attr-value">{[smoking]}</p>
                                    <p className="attr-desc">Smoking</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}
export default ProfilePrefsCard;