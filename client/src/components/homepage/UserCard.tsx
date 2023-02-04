import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faBed, faVenusMars, faLocationDot, faGraduationCap, faBroom} from '@fortawesome/free-solid-svg-icons';
import '../../styles/UserCard.css';
import '../../styles/UserCard.scss';
import benPfp from '../../media/ben-liu-pfp-400x400.png';
import defaultPfp from '../../media/empty-pfp-400x400.png';
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
    net_id: string;
}

let pfps = new Map();

pfps.set("Ben Liu", benPfp);
pfps.set("Huzaifa Ali", defaultPfp);
pfps.set("Sofia Lakhani", defaultPfp);
pfps.set("Jonathan Jang", defaultPfp);
pfps.set("Isabel Wang", defaultPfp);


const UserCard = ({name, pref_temp, bedtime, pref_gender, grad_year, pronouns, res_college, cleaning_freq, net_id}: UserProps) => {
    const profile_url = "/profile/" + net_id;
    return (
        <div className="user-card-wrapper">
            <a href={profile_url}>
                <div className="user-card">
                    <div className="user-card-content">
                        <div className="user-card-heading">
                            <img className="user-card-pfp" src={pfps.get(name)} alt={name}/>
                            <div className="user-card-header">
                                <div className="user-card-title">
                                    <h1>{name}</h1>
                                    <p className="user-pronouns"> {pronouns}</p>
                                </div>
                                <div className="user-tags">
                                    <div className="user-tag" id="residential-college">
                                        <div className="tag-content">
                                            <FontAwesomeIcon className="tag-icon" icon={faLocationDot}></FontAwesomeIcon>
                                            <small>{res_college}</small>
                                        </div>
                                    </div>
                                    <div className="user-tag" id="grad-year">
                                        <div className="tag-content">
                                            <FontAwesomeIcon className="tag-icon" icon={faGraduationCap}></FontAwesomeIcon>
                                            <small>{grad_year}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="user-card-body">
                            <div className="user-card-attr-col">
                                <div className="user-card-attr" id="pref-gender">
                                    <FontAwesomeIcon className="attr-icon" icon={faVenusMars}/>
                                    <div className="attr-info">
                                        <p className="attr-value">{pref_gender}</p>
                                        <small className="attr-desc">roommate preferred</small>
                                    </div>
                                </div>
                                <div className="user-card-attr" id="bedtime">
                                    <FontAwesomeIcon className="attr-icon" icon={faBed}/>
                                    <div className="attr-info">
                                        <p className="attr-value">{bedtime}</p>
                                        <small className="attr-desc">bedtime</small>
                                    </div>
                                </div>
                            </div>
                            <div className="user-card-attr-col">
                                <div className="user-card-attr" id="pref-temp">
                                    <FontAwesomeIcon className="attr-icon" icon={faTemperatureHalf}/>
                                    <div className="attr-info">
                                        <p className="attr-value">{pref_temp}℉</p>
                                        <small className="attr-desc">room temperature</small>
                                    </div>
                                </div>
                                <div className="user-card-attr" id="cleaning-freq">
                                    <FontAwesomeIcon className="attr-icon" icon={faBroom}/>
                                    <div className="attr-info">
                                        <p className="attr-value">{cleaning_freq}</p>
                                        <small className="attr-desc">cleaning frequency</small>
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
/*
const tags = (props: tags) => {
    const tag1 = props.tag1;
    const tag2 = props.tag2;
    const tag3 = props.tag3;    
    const tag4 = props.tag4;

    return (
        <div className="allTags">
            <p>{tag1}</p>
            <p>{tag2}</p>
            <p>{tag3}</p>
            <p>{tag4}</p>
        </div>
    )
}
*/
export default UserCard;

