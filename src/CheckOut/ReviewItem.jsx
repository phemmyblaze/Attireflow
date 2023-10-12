import Logo from "../Assets/ankara.png";
export default function ReviewItem() {
	return (
		<>
			<div className="border-2 rounded-md border-blue-400 px-10 py-5">
				<h2 className="text-blue-400 font-bold text-2xl">Review Item</h2>

				<div className="flex justify-between items-center mt-5">
					<img src={Logo} alt="logo" className="w-48 h-24" />

					<div className="flex flex-col gap-5 ml-5 ">
						<h2 className="font-bold text-blue-500 text-lg">Cord Lace</h2>
						<p className="text-blue-500">Color: Bugundry</p>
					</div>
					<div className="flex flex-col gap-5 ml-8">
						<h2 className="font-bold text-blue-500">₦ 19,000.00</h2>
						<p className="text-blue-500">Quantity: 20</p>
					</div>
				</div>
			</div>
		</>
	);
}
