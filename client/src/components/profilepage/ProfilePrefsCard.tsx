// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faBed, faVenusMars, faLocationDot, faGraduationCap, faBroom} from '@fortawesome/free-solid-svg-icons';

// CSS
import '../../styles/ProfilePrefsCard.css';

// Google Auth
import UserData from "../../types/UserData";

interface UserProps {
    name: string;
    pref_temp: string;
    bedtime: string;
    pref_gender: string;
    grad_year: string;
    pronouns: string;
    res_college: string;
    cleaning_freq: string;
    major: string;
    minor: string;
    overnight_guests: string;
    drinking: string;
    smoking: string;
    dynamic: string;
}

const ProfilePrefsCard = ({name, pref_temp, bedtime, pref_gender, grad_year, pronouns, res_college, cleaning_freq, major, minor, overnight_guests, drinking, smoking, dynamic}: UserProps) => {
    return (
        <div className="user-card-wrapper">
            <a href="">
                <div className="user-card">
                    <div className="card-content">
                        <div className="card-heading">
                        
                            <div className="user-header">
                                <div className="user-title">
                                    <h1>{name}</h1>
                                    <p className="user-pronouns">{pronouns}</p>
                                </div>
                                <div className="user-tags">
                                    <div className="user-tag" id="residential-college">
                                        <div className="tag-content">
                                            <FontAwesomeIcon className="tag-icon" icon={faLocationDot}></FontAwesomeIcon>
                                            <p>{res_college}</p>
                                        </div>
                                    </div>
                                    <div className="user-tag" id="grad-year">
                                        <div className="tag-content">
                                            <FontAwesomeIcon className="tag-icon" icon={faGraduationCap}></FontAwesomeIcon>
                                            <p>'{grad_year}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="attr-col">
                                <div className="user-attr" id="pref-gender">
                                    <FontAwesomeIcon className="attr-icon" icon={faVenusMars}/>
                                    <div className="attr-info">
                                        <p className="attr-value">{pref_gender}</p>
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
            </a>
        </div>
    )
}
export default ProfilePrefsCard;