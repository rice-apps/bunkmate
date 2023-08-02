import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTreeCity, faBuilding, faDoorClosed, faBed, faBath} from '@fortawesome/free-solid-svg-icons';


import ben from '../../media/ben pfp.png'

const ListingDetails = () => {
    return (
      <div className="details_container">
        <div className="left_column">
          <div className="notable_features">
            <div className="features_box">
              <FontAwesomeIcon className="attr-icon" icon={faTreeCity}/>
              Downtown Location
            </div>
            <div className="features_box">
              <FontAwesomeIcon className="attr-icon" icon={faBuilding}/>
              High Windows
            </div>
            <div className="features_box">
              <FontAwesomeIcon className="attr-icon" icon={faDoorClosed}/>
              Balcony Space
            </div>
          </div>

          <div className="bulleted_features">
            <div className="left_column">
              <ul>
                <li>Luxury apartment</li>
                <li>Vibrant community</li>
                <li>Downtown Houston</li>
                <li>Flexible lease</li>
              </ul>
            </div>

            <div className="right_column">
              <ul>
                <li>Floor-to-ceiling windows</li>
                <li>Patio/balcony space</li>
                <li>Breathtaking views</li>
              </ul>
            </div>
          </div>
          <hr />

          <div className="roomate-note">
            <div>
              <h2>Note from the Roomates</h2>
            </div>
            <div>
              <p className="italics">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nunc massa, pellentesque at mi non, aliquet mollis arcu. Mauris ut ex ut nunc tristique pretium sit amet id nulla. Vivamus eget lectus eu nisl ultricies venenatis quis sed est. Aenean ut arcu quis ante porttitor eleifend. Pellentesque habitant morbi tristique senectus.”</p>
              <p className = "person_name"> - Jane D.</p>
            </div>

          </div>

          <div className="home_info">
            <div className = "title">
              <h2>What's in this home</h2>
            </div>
            <div className="top-row">
              <div className="home-info-box">
                <FontAwesomeIcon className="attr-icon" icon={faBed}/>
                <div>
                  <div>Bedroom 1</div>
                  <div>1 Full Bed</div>
                </div>
              </div>
              <div className="home-info-box">
                <FontAwesomeIcon className="attr-icon" icon={faBath}/>
                <div>
                  <div>Bathroom 1</div>
                  <div>1 Full Bath</div>
                </div>
              </div>
              <div className="home-info-box">
                <FontAwesomeIcon className="attr-icon" icon={faBed}/>
                <div>
                  <div>Bedroom 2</div>
                  <div>1 Full Bed</div>
                </div>
              </div>
            </div>
            <div className="bottom-row">
              <div className="home-info-box">
                <FontAwesomeIcon className="attr-icon" icon={faBath}/>
                <div>
                  <div>Bathroom 2</div>
                  <div>1 Full Bath</div>
                </div>
              </div>
              <div className="home-info-box">
                <FontAwesomeIcon className="attr-icon" icon={faBed}/>
                <div>
                  <div>Bedroom 3</div>
                  <div>1 Full Bed</div>
                </div>
              </div>
              <div className="home-info-box">
                <FontAwesomeIcon className="attr-icon" icon={faBath}/>
                <div>
                  <div>Bathroom 3</div>
                  <div>1 Full Bath</div>
                </div>
              </div>

            </div>

          </div>


        </div>
        <div className="right_column">

          <div className="form-container">
            <div className="inner-form-container">
              <h2 className="extra-bold">Interested?</h2>
              <div className="form-group">
                <input type="text" id="full-name" name="full_name" placeholder="Full Name*" />
              </div>

              <div className="form-group">
                <input type="email" id="rice-email" name="rice_email" placeholder="Rice Email*" />
              </div>

              <div className="form-group">
                <input type="tel" id="phone-number" name="phone_number" placeholder="Phone Number*" />
              </div>

              <div className="form-group">
                <textarea id="message" name="message" placeholder="Your Message*"></textarea>
              </div>

              <button className="submit-button" type="submit">Send an Email</button>
            </div>
          </div>


          <div>
            <img className="pic-under-form"src={ben} alt="logo"/>
          </div>

        </div>
      </div>
    );
  };
  
  export default ListingDetails;
  