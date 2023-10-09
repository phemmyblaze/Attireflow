import dress from "./Assets/Data";
import HoverStar from "./HoverStar";

export default function AddToCartDetails() {
	return (
		<>
			<h2 className="text-center text-blue-600 uppercase text-lg font-bold">All Stylist Attire For You</h2>

			<div className="grid grid-cols-4 p-6 gap-10 ">
				{dress.map((dress) => (
					<div key={dress.id} className="bg-white shadow rounded p-10">
						<img src={dress.image} alt={dress.description} className="w-64 h-72" />
						<div className="">
							<h2 className="text-lg font-semibold">{dress.name}</h2>
							<p className="text-sm">Price: ₦{dress.price}</p>
						</div>

						<HoverStar />
					</div>
				))}
			</div>
		</>
	);
}
