

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
        <div>
            <div></div>
            <div></div>
        </div>


        <div></div>
        </header>
    );
}