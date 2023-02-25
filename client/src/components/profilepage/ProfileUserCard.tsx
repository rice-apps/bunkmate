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

// interface UserProps {
//     id: number,
//     name: string,
//     email: string,
//     phone: string,
//     grad_year: string,
//     res_college: string,
//     major: string,
//     minor: string,
//     pronouns: string,
//     gender: string,
//     accommodations: string,
//     on_campus: boolean,
//     housing_pref: string,
//     roommate_count: string,
//     additional_room_info: string,
//     personality_traits: [string],
//     is_morning_person: boolean,
//     room_temp_pref: string,
//     bed_time_pref: string,
//     wake_time_pref: string,
//     room_usage: string,
//     outing_freq: string,
//     relationship_pref: string,
//     drinking_pref: string,
//     smoking_pref: string,
//     roommate_smoking_pref: string,
//     roommate_gender_pref: string,
//     has_overnight_guest: boolean,
//     cleaning_freq: string,
//     additional_prefs: string,
//     is_snorer: boolean,
//     additional_habit_info: string,
//     pfp: string,
//     new_user: boolean
//}

let pfps = new Map();

pfps.set("Ben Liu", benPfp);
pfps.set("Huzaifa Ali", defaultPfp);
pfps.set("Sofia Lakhani", defaultPfp);


const ProfileUserCard = (props: {user: UserData}) => {
    return (
        <div className="profile-card-wrapper">
            <div className="profile-user-card-content">
                <div className="profile-user-card-heading">
                    <img className="profile-user-pfp" src={pfps.get(props.user.name)} alt={props.user.name}/>
                    <div className="profile-user-title">
                        <h1>{props.user.name}</h1>
                        <p className="profile-user-pronouns">{props.user.pronouns}</p>
                    </div>
                </div>
                <div className="profile-card-body">
                    <div className="attr-col" id="left-attr-col">
                        <div className="user-attr" id="pref-gender">
                            <FontAwesomeIcon className="attr-icon" icon={faVenusMars}/>
                            <div className="attr-info">
                                <p className="attr-value">{props.user.roommate_gender_pref}</p>
                                <small className="attr-desc">Looking for</small>
                            </div>
                        </div>
                        <div className="user-attr" id="cleaning-freq">
                        <FontAwesomeIcon className="attr-icon" icon={faLocationDot}/>
                            <div className="attr-info">
                                <p className="attr-value">{props.user.res_college}</p>
                                <small className="attr-desc">College</small>
                            </div>
                        </div>
                    </div>
                    <div className="attr-col" id="right-attr-col">
                        <div className="user-attr" id="bedtime">
                            <FontAwesomeIcon className="attr-icon" icon={faBookOpen}/>
                            <div className="attr-info">
                                <p className="attr-value">{props.user.major}</p>
                                <small className="attr-desc">Major</small>
                            </div>
                        </div>
                        <div className="user-attr" id="pref-temp">
                            <FontAwesomeIcon className="attr-icon" icon={faGraduationCap}/>
                            <div className="attr-info">
                                <p className="attr-value">{props.user.grad_year}</p>
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

