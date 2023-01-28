// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';

// CSS
import '../../styles/ProfileContactCard.css';

// Pfps
import benPfp from '../../media/ben-liu-pfp-400x400.png';
import defaultPfp from '../../media/empty-pfp-400x400.png';

// Google Auth
import UserData from "../../types/UserData";

interface UserProps {
    // id: number;
    // name: string;
    // pref_temp: string;
    // bedtime: string;
    // pref_gender: string;
    // grad_year: string;
    // pronouns: string;
    // res_college: string;
    // cleaning_freq: string;
    // major: string;
    // minor: string;
    // overnight_guests: string;
    // drinking: string;
    // smoking: string;
    // dynamic: string;
    phone: string;
    email: string;
}

let pfps = new Map();

pfps.set("Ben Liu", benPfp);
pfps.set("Huzaifa Ali", defaultPfp);
pfps.set("Sofia Lakhani", defaultPfp);

const ProfileContactCard = ({phone, email}: UserProps) => {
    return (
        <div className="profile-card-wrapper">
            <div className="profile-room-card-content">
                <div className="contact-card-heading">
                    <h2>Contact</h2>
                </div>
                <div className="contact-card-body">
                    <div className="contact-col" id="left-contact-col">
                        <div className="user-attr" id="pref-gender">
                            <FontAwesomeIcon className="attr-icon" icon={faPhone}/>
                            <div className="attr-info">
                                <p className="attr-value"> {[phone]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-col" id="right-contact-col">
                        <div className="user-attr" id="bedtime">
                            <FontAwesomeIcon className="attr-icon" icon={faEnvelope}/>
                            <div className="attr-info">
                                <p className="attr-value">{[email]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileContactCard;