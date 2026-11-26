import React from "react";
import Header from "./component/header";
import Foodoption from "./component/Food option/Foodoption";
import Groceryoption from "./component/Grocery/Groceryoption";
import DineoutOption from "./component/Dineout Restaurant/Dineoutoption";

function App(){
    return (
        <>
            <Header/>
            <Foodoption/>
            <Groceryoption/>
            <DineoutOption/>
            <img className="w-[80%] container mx-auto mt-20"
            alt="Get the Swiggy App banner" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"></img>
        </>
    )
}


export default App