

//first div swiggy logo



export default function Header() {
    return (
        <header className="bg-[#ff5200]">

        {/* // first div swiggy logo and icon details */}
        <div className="flex justify-between container mx-auto py-8">
            <img  className="w-40 h-12"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="Swiggy Logo" 

            />

            <div className="flex gap-15 items-center font-serif text-white text-base font-bold ">
            <a  href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
            <a  href="https://partner.swiggy.com/login#/swiggy" target="_blank">Partner with us</a>
            <a className="py-4 px-3 border border-white rounded-2xl" href="https://partner.swiggy.com/lo" target="_blank">Get the app</a>
            <a className="py-4 px-3 border bg-black border-black rounded-2xl" href="https://partner.swiggy." target="_blank">Sign up</a>

            </div>
                
            
        </div>

        {/*  second div */}

        <div className="pt-16 pb-8 relative ">

            <img className="h-120 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="left_img"></img>
            <img className="h-120 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="right_img"></img>

            <div className="max-w-[50%] pl-3 font-serif text-white text-5xl container mx-auto py-8 ">
                Order food & groceries. Discover best restaurants. Swiggy it!
            </div>

            <div className="max-w-[70%] pl-3 font-serif text-white text-base container mx-auto py-8 ">

            <input type="text" placeholder="Search for restaurants or dishes..." 
            className="bg-white border border-white w-[40%] text-base py-4 px-6 rounded-xl mr-1 text-black">   
            </input>

            <input type="text" placeholder="Search for restaurants or dishes..." 
            className="bg-white border border-white w-[50%] text-base py-4 px-6 rounded-xl  text-black">   
            </input>

            </div>
        </div>


        <div className="flex max-w-[80%] container mx-auto py-8">
            <a href="https://www.swiggy.com/restaurants" title="Food" >
               <img src=" https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_640/MERCHANDISING_BANNERS/IMAGES/MERCH/2026/11/16/bfe0be8c-2a2c-44f3-b434-1e31099c83f6_10522.png" alt="DO"
                    
                />
            </a>

            <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1" >
                <img src=" https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_640/MERCHANDISING_BANNERS/IMAGES/MERCH/2026/11/16/bfe0be8c-2a2c-44f3-b434-1e31099c83f6_10522.png" alt="DO"
                    
                />
            </a>

            <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1" >
                <img src=" https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_640/MERCHANDISING_BANNERS/IMAGES/MERCH/2026/11/16/bfe0be8c-2a2c-44f3-b434-1e31099c83f6_10522.png" alt="DO"
                    
                />
            </a>

            <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1" >
                <img src=" https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_640/MERCHANDISING_BANNERS/IMAGES/MERCH/2026/11/16/bfe0be8c-2a2c-44f3-b434-1e31099c83f6_10522.png" alt="DO"

                />
            </a>


        </div>

        </header>
    );
}