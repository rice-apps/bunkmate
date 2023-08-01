import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faBed, faVenusMars, faLocationDot, faGraduationCap, faBroom, faBath, faMoneyBill, faKitchenSet, faJugDetergent, faDog,faPersonWalking,faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
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
    "housing_config": string,
    "square_footage": number,
}

let listingPics = new Map();

listingPics.set(0, lifeTowerPic);
listingPics.set(1, lifeTowerPic);
listingPics.set(2, lifeTowerPic);

const ListingCard = ({id, title, address, total_rent, rent_per_person, capacity, bedrooms, bathrooms, has_kitchen, has_washer_dryer, has_pets, miles_from_campus, housing_config, square_footage}: ListingProps) => {
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
                                    
                                    <h2>${rent_per_person}/mo. — {housing_config}</h2>
                                    <p> {bedrooms} bds | {bathrooms} bath | {square_footage} sqft</p>
                                    <small> {address}</small>
                                
                                </div>
                            </div>
                        </div>
                        <div className="listing-card-body">
                            
                            <div className="listing-card-attr-col">
                                <div className="listing-card-attr" id="distance">
                                <FontAwesomeIcon className="attr-icon" icon={faPersonWalking}></FontAwesomeIcon>
                                        <div className="attr-desc">
                                            <small>{miles_from_campus} mi from Rice</small>
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
                                <div className="listing-card-attr" id="capacity">
                                    <FontAwesomeIcon className="attr-icon" icon={faPeopleGroup}/>
                                    <div className="attr-info">
                                        <small className="attr-desc">{capacity} Roommates</small>
                                        <small className="attr-desc"></small>
                                    </div>
                                </div>
                                <div className="listing-card-attr" id="has-washer-dryer">
                                    <FontAwesomeIcon className="attr-icon" icon={faJugDetergent}/>
                                    <div className="attr-info">
                                        <p className="attr-value">{has_washer_dryer}</p>
                                        <small className="attr-desc">Has washer & dryer</small>
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

