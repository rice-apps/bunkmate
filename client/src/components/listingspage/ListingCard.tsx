import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faBed, faVenusMars, faLocationDot, faGraduationCap, faBroom, faBath, faMoneyBill, faKitchenSet, faJugDetergent, faDog} from '@fortawesome/free-solid-svg-icons';
import '../../styles/ListingCard.css';
import '../../styles/ListingCard.scss';
import benPfp from '../../media/ben-liu-pfp-400x400.png';
import defaultPfp from '../../media/empty-pfp-400x400.png';
import lifeTowerPic from '../../media/life_tower_picture.jpeg';
import UserData from "../../types/UserData";
import { Link } from 'react-router-dom';

interface ListingProps {
    "id": number,
    "title": string,
    "address": string,
    "total_rent": number,
    "rent_per_person": number,
    "capacity": number,
    "bedrooms": number,
    "bathrooms": number,
    "has_kitchen": boolean,
    "has_washer_dryer": boolean,
    "has_pets": boolean,
    "miles_from_campus": number,
}

let listingPics = new Map();

listingPics.set(0, lifeTowerPic);
listingPics.set(1, lifeTowerPic);
listingPics.set(2, lifeTowerPic);

const ListingCard = ({id, title, address, total_rent, rent_per_person, capacity, bedrooms, bathrooms, has_kitchen, has_washer_dryer, has_pets, miles_from_campus}: ListingProps) => {
    const listing_url = "/listing/" + id;
    return (
        <div className="listing-card-wrapper">
            <Link to={listing_url}>
                <div className="listing-card">
                    <img className="listing-card-picture" src={listingPics.get(id)} alt={title}/>
                    <div className="listing-card-content">
                        <div className="listing-card-heading">
                            <div className="listing-card-header">
                                <div className="listing-card-title">
                                    <h2>{title}</h2>
                                    <p className="listing-pronouns"> {address}</p>
                                </div>
                                <div className="listing-tags">
                                    <div className="listing-tag" id="bedrooms">
                                        <div className="tag-content">
                                            <FontAwesomeIcon className="tag-icon" icon={faBed}></FontAwesomeIcon>
                                            <small>{bedrooms}</small>
                                        </div>
                                    </div>
                                    <div className="listing-tag" id="bathrooms">
                                        <div className="tag-content">
                                            <FontAwesomeIcon className="tag-icon" icon={faBath}></FontAwesomeIcon>
                                            <small>{bathrooms}</small>
                                        </div>
                                    </div>
                                    <div className="listing-tag" id="residential-college">
                                        <div className="tag-content">
                                            <FontAwesomeIcon className="tag-icon" icon={faLocationDot}></FontAwesomeIcon>
                                            <small>{miles_from_campus} mi from Rice</small>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="listing-card-body">
                            <div className="listing-card-attr-col">
                                <div className="listing-card-attr" id="total-rent">
                                    <FontAwesomeIcon className="attr-icon" icon={faMoneyBill}/>
                                    <div className="attr-info">
                                        <p className="attr-value">${rent_per_person}</p>
                                        <small className="attr-desc">Rent/person (max capacity)</small>
                                    </div>
                                </div>
                                <div className="listing-card-attr" id="has-kitchen">
                                    <FontAwesomeIcon className="attr-icon" icon={faKitchenSet}/>
                                    <div className="attr-info">
                                        <p className="attr-value">{has_kitchen}</p>
                                        <small className="attr-desc">Has kitchen</small>
                                    </div>
                                </div>
                            </div>
                            <div className="listing-card-attr-col">
                                <div className="listing-card-attr" id="has-washer-dryer">
                                    <FontAwesomeIcon className="attr-icon" icon={faJugDetergent}/>
                                    <div className="attr-info">
                                        <p className="attr-value">{has_washer_dryer}</p>
                                        <small className="attr-desc">Has washer & dryer</small>
                                    </div>
                                </div>
                                <div className="listing-card-attr" id="has-pets">
                                    <FontAwesomeIcon className="attr-icon" icon={faDog}/>
                                    <div className="attr-info">
                                        <p className="attr-value">{has_pets}</p>
                                        <small className="attr-desc">Has pets</small>
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
export default ListingCard;

