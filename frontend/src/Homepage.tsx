
import useDocumentTitle from './useTitleHook';
import Navbar from './Components/Navbar1';
// import siteData from './siteconfig';
import IBrandMetaData from './Interfaces/IBrands';
function HomePage() {
  useDocumentTitle('Homepage');
  return (
    <div>
      <Navbar />
    </div>
   
  );
}
export default HomePage;