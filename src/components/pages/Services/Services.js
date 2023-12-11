
import SforMPrinter from '../../SforMPrinter';
import { homeObjOne, homeObjThree} from './Data';
import MPrinter4 from '../../MPrinter4';
import Footer from '../Footer.js/Footer';
function Services() {
  return (
    <>
      <SforMPrinter {...homeObjOne} /> 
      <Footer></Footer>          
    </>
  );
}

export default Services;
