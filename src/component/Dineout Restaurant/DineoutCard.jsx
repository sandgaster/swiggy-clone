
export default function DineoutCard({ data }) {
    const image = data?.info?.mediaFiles?.[0];

    return (
        <div className="w-[400px] shrink-0 border border-gray-200 rounded-2xl overflow-hidden">
            <img
                className="w-full h-60 object-cover"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${image?.url}`}
                alt={data?.info?.name}
            />

            <div className="p-3">
                <h3 className="font-bold text-lg">
                    {data?.info?.name}
                </h3>

                <p className="text-gray-500 text-sm">
                    {data?.info?.cuisines?.join(", ")}
                </p>

                <p className="text-gray-500 text-sm">
                    {data?.info?.locality}, {data?.info?.locationInfo?.city?.name}
                </p>

                <p className="mt-2">
                    ⭐ {data?.info?.rating?.value}
                    {" · "}
                    {data?.info?.costForTwo}
                </p>
            </div>
        </div>
    );
}
