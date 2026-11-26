import imagedata from "../../utils/Food_data";
import FoodCard from "./FoodCard";

export  default function Foodoption() {
    return (
        <>
        <div className="w-[80%] container mx-auto   mt-20 gap-7">
        <div className="text-3xl font-bold mb-5 mt-6"> Order our best food options</div>
         <div className="flex flex-wrap gap-5">

        {
            imagedata.map((foodData) => {
                return (
                    <FoodCard key = {foodData.id} foodData = {foodData} ></FoodCard>
                )
            })
        }
        </div>
        </div>

        </>
    );
    
}

