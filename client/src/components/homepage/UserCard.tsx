import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faBed, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import '../../styles/UserCard.css';
import '../../styles/UserCard.scss';
import benPfp from '../../media/ben-liu-pfp-400x400.png';
import defaultPfp from '../../media/empty-pfp-400x400.png';

interface UserProps {
    id: number;
    name: string;
    pref_temp: string;
    bedtime: string;
    pref_gender: string;
    grad_year: string;
    pfp_src: string;
}

let pfps = new Map();

pfps.set("Ben Liu", benPfp);
pfps.set("Huzaifa Ali", defaultPfp);
pfps.set("Sofia Lakhani", defaultPfp);
pfps.set("Jonathan Jang", defaultPfp);
pfps.set("Isabel Wang", defaultPfp);

const UserCard = ({id, name, pref_temp, bedtime, pref_gender, grad_year, pfp_src}: UserProps) => {
    return (
        <div className="user-card-wrapper">
            <div className="user-card">
                <div className="card-content">
                    <div className="card-heading">
                        <img className="user-pfp" src={pfps.get(name)} alt={name}/>
                        <h1>{name} '{grad_year}</h1>
                    </div>
                    <div className="card-body">
                        <div className="user-attr" id="pref-temp">
                            <FontAwesomeIcon className='card-icon' icon={faTemperatureHalf}/>
                            <p>{pref_temp}℉</p>
                        </div>
                        <div className="user-attr" id="bedtime">
                            <FontAwesomeIcon className='card-icon' icon={faBed}/>
                            <p>{bedtime}</p>
                        </div>
                        <div className="user-attr" id="pref-gender">
                            <FontAwesomeIcon className='card-icon' icon={faVenusMars}/>
                            <p>{pref_gender} roommate preferred</p>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="roommate-pfps">
                            <img className="roommate-pfp" src={defaultPfp} alt=""></img>
                            <img className="roommate-pfp" src={benPfp} alt=""></img>
                            <img className="roommate-pfp" src={benPfp} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
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

