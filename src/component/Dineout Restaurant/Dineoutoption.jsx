
import { dineoutRestaurants } from "../../utils/Dineout_resta";
import DineoutCard from "./DineoutCard";

export default function DineoutOption() {
    return (
        <div className="w-[80%] container mx-auto mt-20">
            <div className="text-3xl font-bold mb-5 mt-6">
                Dineout Restaurants
            </div>

            <div className="flex overflow-x-auto gap-5">
                {dineoutRestaurants.map((item) => (
                    <DineoutCard
                        key={item.info.id}
                        data={item}
                    />
                ))}
            </div>
        </div>
    );
}
