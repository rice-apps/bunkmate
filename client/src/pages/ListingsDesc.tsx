import ListingDesc from '../components/listingdesc/ListingGallery';
import ListingOverview from '../components/listingdesc/ListingOverview';
import ListingDetails from '../components/listingdesc/ListingDetails';
import '../styles/ListingsDesc.css';

const ListingsDesc = (props: any) => {

    return (
      <div>
        <div>
          <ListingDesc />
        </div>
        <div>
          <ListingOverview/>
        </div>
        <div>
          <ListingDetails/>
        </div>
      </div>  
    )
  }
  
  export default ListingsDesc