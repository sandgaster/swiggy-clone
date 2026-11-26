export default function GroceryCard({ groceryData }) {

    const imageUrl = `https://media-assets.swiggy.com/${groceryData?.imageId}`;
    return (
        <>
          <a href={groceryData?.action?.link} className="w-40 h-50 border border-gray-300 rounded-lg p-2 flex flex-col items-center justify-center gap-2 hover:shadow-lg transition-shadow duration-300">

            <img className="w-40 h-50 object-cover"
            src={imageUrl}
             alt={groceryData?.description} />
            <div className="text-sm font-bold text-center">{groceryData?.action?.text}</div>
          </a>
        </>
    )
}