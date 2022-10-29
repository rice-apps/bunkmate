import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faBed, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import '../../styles/UserCard.css'
import benPfp from '../../media/ben-liu-pfp-400x400.png';

interface UserProps {
    id: number;
    name: string;
    pref_temp: string;
    bedtime: string;
    pref_gender: string;
}

const UserCard = ({id, name, pref_temp, bedtime, pref_gender}: UserProps) => {
    
    return (
        
        <div className="user-card">
            <div className="card-heading">
                <img src={ benPfp }/>
                <h1>Ben Liu '26</h1>
            </div>
            <div className="card-body">
                <div className="user-attr" id="pref-temp">
                    <FontAwesomeIcon className='card-icon' icon={faTemperatureHalf}/>
                    <p>70℉</p>
                </div>
                <div className="user-attr" id="bedtime">
                    <FontAwesomeIcon className='card-icon' icon={faBed}/>
                    <p>9 PM</p>
                </div>
                <div className="user-attr" id="pref-gender">
                    <FontAwesomeIcon className='card-icon' icon={faVenusMars}/>
                    <p>Male roommate preferred</p>
                </div>
            </div>
            <div className="card-footer">
                <div className="roommate-pfps">
                    <img className="roommate-pfp" src={ benPfp }></img>
                    <img className="roommate-pfp" src={ benPfp }></img>
                    <img className="roommate-pfp" src={ benPfp }></img>
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

