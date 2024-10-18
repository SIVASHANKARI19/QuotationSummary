import PricingComponent from "./components/PricingComponent/PricingComponent";
import Ownership from "./pages/Ownership/Ownership";
import Amenities from "./components/Amenities/Amenities";
import Discount from "./components/Discount/Discount";
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