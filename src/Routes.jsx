import PricingComponent from "./components/PricingComponent/PricingComponent";
import Ownership from "./pages/Ownership/Ownership";
import Amenities from "./components/Amenities/Amenities";

const routes = [

{
  path:"/",
  element: (
    <Ownership />
  )
},
{
    path:"/pricingComponent",
    element: (
      <PricingComponent />
    )
}

];

export default routes;