// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faBed, faVenusMars, faLocationDot, faGraduationCap, faBroom, faBookOpen } from '@fortawesome/free-solid-svg-icons';

// CSS
import '../../styles/ProfileUserCard.css';

// Pfps
import benPfp from '../../media/ben-liu-pfp-400x400.png';
import defaultPfp from '../../media/empty-pfp-400x400.png';

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
    overnight_guests: boolean;
    drinking: string;
    smoking: string;
    dynamic: string;
}

let pfps = new Map();

pfps.set("Ben Liu", benPfp);
pfps.set("Huzaifa Ali", defaultPfp);
pfps.set("Sofia Lakhani", defaultPfp);


const ProfileUserCard = ({name, pref_temp, bedtime, pref_gender, grad_year, pronouns, res_college, cleaning_freq, major, minor, overnight_guests, drinking, smoking, dynamic}: UserProps) => {
    return (
        <div className="profile-card-wrapper">
            <div className="profile-user-card-content">
                <div className="profile-user-card-heading">
                    <img className="profile-user-pfp" src={pfps.get(name)} alt={name}/>
                    <div className="profile-user-title">
                        <h1>{name}</h1>
                        <p className="profile-user-pronouns">{pronouns}</p>
                    </div>
                </div>
                <div className="profile-card-body">
                    <div className="attr-col" id="left-attr-col">
                        <div className="user-attr" id="pref-gender">
                            <FontAwesomeIcon className="attr-icon" icon={faVenusMars}/>
                            <div className="attr-info">
                                <p className="attr-value">{pref_gender}</p>
                                <small className="attr-desc">Looking for</small>
                            </div>
                        </div>
                        <div className="user-attr" id="cleaning-freq">
                        <FontAwesomeIcon className="attr-icon" icon={faLocationDot}/>
                            <div className="attr-info">
                                <p className="attr-value">{res_college}</p>
                                <small className="attr-desc">College</small>
                            </div>
                        </div>
                    </div>
                    <div className="attr-col" id="right-attr-col">
                        <div className="user-attr" id="bedtime">
                            <FontAwesomeIcon className="attr-icon" icon={faBookOpen}/>
                            <div className="attr-info">
                                <p className="attr-value">{major}</p>
                                <small className="attr-desc">Major</small>
                            </div>
                        </div>
                        <div className="user-attr" id="pref-temp">
                            <FontAwesomeIcon className="attr-icon" icon={faGraduationCap}/>
                            <div className="attr-info">
                                <p className="attr-value">{grad_year}</p>
                                <small className="attr-desc">Class of</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileUserCard;

