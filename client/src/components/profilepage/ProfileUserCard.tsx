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
    overnight_guests: string;
    drinking: string;
    smoking: string;
    dynamic: string;
}

let pfps = new Map();

pfps.set("Ben Liu", benPfp);
pfps.set("Huzaifa Ali", defaultPfp);
pfps.set("Sofia Lakhani", defaultPfp);
pfps.set("Jonathan Jang", defaultPfp);
pfps.set("Isabel Wang", defaultPfp);


const ProfileUserCard = ({name, pref_temp, bedtime, pref_gender, grad_year, pronouns, res_college, cleaning_freq, major, minor, overnight_guests, drinking, smoking, dynamic}: UserProps) => {
    return (
        <div className="profile-user-card-wrapper">
            <div className="card-content">
                <div className="card-heading">
                    <img className="user-pfp" src={pfps.get(name)} alt={name}/>
                    <div className="user-title">
                        <h1>{name}</h1>
                        <p className="user-pronouns">{pronouns}</p>
                    </div>
                </div>
                <div className="card-body">
                    <div className="attr-col" id="left-attr-col">
                        <div className="user-attr" id="pref-gender">
                            <FontAwesomeIcon className="attr-icon" icon={faVenusMars}/>
                            <div className="attr-info">
                                <p className="attr-value">{pref_gender}</p>
                                <p className="attr-desc">Looking for</p>
                            </div>
                        </div>
                        <div className="user-attr" id="cleaning-freq">
                        <FontAwesomeIcon className="attr-icon" icon={faLocationDot}/>
                            <div className="attr-info">
                                <p className="attr-value">{res_college}</p>
                                <p className="attr-desc">College</p>
                            </div>
                        </div>
                    </div>
                    <div className="attr-col" id="right-attr-col">
                        <div className="user-attr" id="bedtime">
                            <FontAwesomeIcon className="attr-icon" icon={faBookOpen}/>
                            <div className="attr-info">
                                <p className="attr-value">{major}</p>
                                <p className="attr-desc">Major</p>
                            </div>
                        </div>
                        <div className="user-attr" id="pref-temp">
                            <FontAwesomeIcon className="attr-icon" icon={faGraduationCap}/>
                            <div className="attr-info">
                                <p className="attr-value">{grad_year}</p>
                                <p className="attr-desc">Class of</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileUserCard;

