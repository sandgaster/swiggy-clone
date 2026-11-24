import React from "react";
import Reactdom from "react-dom/client";
import App from "./App";

function main(){
    return(
        <App/>
    );
}




const root = Reactdom.createRoot(document.getElementById('root'))
root.render(main())