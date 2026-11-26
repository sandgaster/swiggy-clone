
export default function FoodCard({ foodData }) {
    const imageUrl = `https://media-assets.swiggy.com/${foodData?.imageId}`;

    return (
        <>
          <a href={foodData?.action?.link} target="_blank" rel="noopener noreferrer">
            <img
            className="w-40 h-50 object-cover "
                src={imageUrl}
                alt={foodData?.accessibility?.altText || "Food"}
            />
            </a>
        </>
    );
}
