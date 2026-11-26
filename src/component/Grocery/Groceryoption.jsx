import {Grocerydata} from "../../utils/Grocery";
import GroceryCard from "./GroceryCard";

export default function Groceryoption() {
    return (
        
        <div className="w-[80%] container mx-auto    mt-20 gap-7">
        <div className="text-3xl font-bold mb-5 mt-6"> Shop groceries on Instamart</div>
        <div className="flex flex-wrap gap-5">

        {Grocerydata.map((groceryData) => {
            return(<GroceryCard key={groceryData.id} groceryData={groceryData} />)
        })}
        </div>
        </div>
    )
}