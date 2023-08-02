import ben from '../../media/ben pfp.png'

const ListingDesc = () => {
  return (
    <div>
        <div className="image-container">
            <div className="large-image-container">
                <img src= {ben} alt="Large Image" className='large-image'/>
            </div>
            <div className="small-images">
                
                    <img src= {ben} alt="Small Image 1" className="small-image"/>                
                
                    <img src= {ben} alt="Small Image 2" className="small-image"/>
                
                    <img src= {ben} alt="Small Image 3" className="small-image"/>
                
                    <img src= {ben} alt="Small Image 4" className="small-image"/>
                
            </div>
        </div>
    </div>
  );
};

export default ListingDesc;
