import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalking, faHeart, faShareNodes, faHouse, faBed, faBath, faMap} from '@fortawesome/free-solid-svg-icons';

const ListingOverview = () => {
    return (
    <div className="box">
        <div className="top-row">
          <div className="element"><span className='bold-text'>1625 Main St,</span> Houston, TX 77002</div>
          <div className="element">|</div>
          <div className="element"><FontAwesomeIcon className="attr-icon" icon={faPersonWalking}/><span className='bold-text'>2.7 miles</span> from Rice</div>
          <div className="element">|</div>
          <div className="element"><span className='bold-text'>Studio</span></div>
          <div className="element"><FontAwesomeIcon className="attr-icon" icon={faHeart}/></div>
          <div className="element"><FontAwesomeIcon className="attr-icon" icon={faShareNodes}/></div>
        </div>
        <div className="bottom-row">
          <div className="element"><FontAwesomeIcon className="attr-icon" icon={faHouse}/><span className='extra-bold'>2152/mo.</span></div>
          <div className="element"><span className='extra-bold'>3</span> <FontAwesomeIcon className="attr-icon" icon={faBed}/> 
          <span className='extra-bold'>3</span> <FontAwesomeIcon className="attr-icon" icon={faBath}/>
          </div>
          <div className="element"><span className='extra-bold'>1331 sqft</span></div>
          <div className="element"><FontAwesomeIcon className="attr-icon" icon={faMap}/></div>
        </div>
    </div> 
    );
  };
  
  export default ListingOverview;
  