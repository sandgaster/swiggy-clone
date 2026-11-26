import imagedata from "../utils/Food_data";
import FoodCard from "./FoodCard";

export  default function Foodoption() {
    return (
        <>
        <div className="w-[80%] container mx-auto  flex flex-wrap mt-20 gap-7">
        {
            imagedata.map((foodData) => {
                return (
                    <FoodCard key = {foodData.id} foodData = {foodData} ></FoodCard>
                )
            })
        }
        </div>

        </>
    );
    
}

