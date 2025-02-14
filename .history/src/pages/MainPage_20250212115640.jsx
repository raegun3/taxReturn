import Showcase1 from "./Mains/Showcase1";
import Showcase2 from "./Mains/Showcase2";
import Showcase3 from "./Mains/Showcase3";
import TaxCalculator from "./Mains/TaxCalculator";
import "./ Mains.css";

function MainPage() {
  return (
    <>
      <div className="content">
        <Showcase1 />  
      </div>
      <TaxCalculator />
      <Showcase2 />
      <Showcase3 />
      
      </>
  );
}
export default MainPage