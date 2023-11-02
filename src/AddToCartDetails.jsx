import dress from "./Assets/Data";
import HoverStar from "./HoverStar";

export default function AddToCartDetails() {
	return (
		<>
			<h2 className="text-center text-blue-600 uppercase text-lg font-bold">All Stylist Attire For You</h2>

			<div className="grid lg:grid-cols-4 md:grid-cols-2  p-6 gap-10 ">
				{dress.map((dress) => (
					<div key={dress.id} className="bg-white shadow rounded p-10 mx-auto">
						<img src={dress.image} alt={dress.description} className="w-64 h-72" />
						<div className="my-3">
							<h2 className="text-lg font-semibold text-blue-400">{dress.name}</h2>
							<p className="text-sm text-blue-400">Price: ₦{dress.price}</p>
						</div>

						<HoverStar />

						<div className="border rounded-full w-[50%] mt-3 px-4 py-2 hover:bg-blue-400 hover:text-white cursor-pointer">Add to cart</div>
					</div>
				))}
			</div>
		</>
	);
}
