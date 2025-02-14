import Showcase1 from "./Mains/Showcase1";
import Showcase2 from "./Mains/Showcase2";
import Showcase3 from "./Mains/Showcase3";
import TaxCalculator from "./Mains/TaxCalculator";

function MainPage() {
  return (
    <div  className="container text-center">
      <Showcase1 />
      <Showcase2 />
      <Showcase3 />
      <TaxCalculator />
    </div>
  );
}
export default MainPage