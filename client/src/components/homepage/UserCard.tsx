import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faBed, faVenusMars, faLocationDot, faGraduationCap, faBroom} from '@fortawesome/free-solid-svg-icons';
import '../../styles/UserCard.css';
import '../../styles/UserCard.scss';

import UserData from "../../types/UserData";
import { Link } from 'react-router-dom';

// PROFILE PICTURES
import benPfp from '../../media/ben pfp.png';
import sofiaPfp from '../../media/sofia pfp.jpeg';
import anthonyPfp from '../../media/anthony pfp.png';
import adrianPfp from '../../media/adrian pfp.jpeg';
import danielPfp from '../../media/daniel pfp.png';
import jasminePfp from '../../media/jasmine pfp.jpeg';
import natPfp from '../../media/nat pfp.jpeg';
import gabrielPfp from '../../media/gabriel pfp.jpeg';
import jonathanPfp from '../../media/jonathan pfp.jpeg';
import calebPfp from '../../media/caleb pfp.jpeg';
import defaultPfp from '../../media/empty pfp.png';

let pfps = new Map();
pfps.set("Ben Liu", benPfp);
pfps.set("Sofia Lakhani", sofiaPfp);
pfps.set("Anthony Yan", anthonyPfp);
pfps.set("Adrian Valdez Diaz", adrianPfp);
pfps.set("Daniel Cho", danielPfp);
pfps.set("Jasmine Lee", jasminePfp);
pfps.set("Nat Hill", natPfp);
pfps.set("Gabriel Ong", gabrielPfp);
pfps.set("Jonathan Mak", jonathanPfp);
pfps.set("Caleb McKinney", calebPfp);
pfps.set("Maggie Ku", defaultPfp);

const UserCard = (props: {net_id: string, user: UserData}) => {
    const profile_url = "/profile/" + props.net_id;
    return (
        <div className="user-card-wrapper">
            <Link to={profile_url}>
                <div className="user-card">
                    <div className="user-card-content">
                        <div className="user-card-heading">
                            <img className="user-card-pfp" src={pfps.get(props.user.name)} alt={props.user.name}/>
                            <div className="user-card-header">
                                <div className="user-card-title">
                                    <h1>{props.user.name}</h1>
                                    <p className="user-pronouns"> {props.user.pronouns}</p>
                                </div>
                                <div className="user-tags">
                                    <div className="user-tag" id="residential-college">
                                        <div className="tag-content">
                                            <FontAwesomeIcon className="tag-icon" icon={faLocationDot}></FontAwesomeIcon>
                                            <small>{props.user.res_college}</small>
                                        </div>
                                    </div>
                                    <div className="user-tag" id="grad-year">
                                        <div className="tag-content">
                                            <FontAwesomeIcon className="tag-icon" icon={faGraduationCap}></FontAwesomeIcon>
                                            <small>{props.user.grad_year}</small>
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
                                        <p className="attr-value">{props.user.roommate_gender_pref}</p>
                                        <small className="attr-desc">roommate preferred</small>
                                    </div>
                                </div>
                                <div className="user-card-attr" id="bedtime">
                                    <FontAwesomeIcon className="attr-icon" icon={faBed}/>
                                    <div className="attr-info">
                                        <p className="attr-value">{props.user.bed_time_pref}</p>
                                        <small className="attr-desc">bedtime</small>
                                    </div>
                                </div>
                            </div>
                            <div className="user-card-attr-col">
                                <div className="user-card-attr" id="pref-temp">
                                    <FontAwesomeIcon className="attr-icon" icon={faTemperatureHalf}/>
                                    <div className="attr-info">
                                        <p className="attr-value">{props.user.room_temp_pref}℉</p>
                                        <small className="attr-desc">room temperature</small>
                                    </div>
                                </div>
                                <div className="user-card-attr" id="cleaning-freq">
                                    <FontAwesomeIcon className="attr-icon" icon={faBroom}/>
                                    <div className="attr-info">
                                        <p className="attr-value">{props.user.cleaning_freq}</p>
                                        <small className="attr-desc">cleaning frequency</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
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

