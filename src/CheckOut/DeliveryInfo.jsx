export default function DeliveryInfo() {
	return (
		<div className="border-2 rounded-md border-blue-400 px-10 py-5">
			<h2 className=" Capitalize text-blue-400 font-bold text-2xl">Delivery Information</h2>
			<form>
				<div className="flex flex-col gap-2">
					<label className="font-bold text-lg text-blue-400">Full Name</label>
					<input type="text" className="border-none bg-blue-400 p-3 text-white" />
				</div>
				<div className="flex flex-col gap-2">
					<label className="font-bold text-lg text-blue-400">Address</label>
					<input type="text" className="border-none bg-blue-400 p-3 text-white" />
				</div>
				<div className="flex flex-col gap-2">
					<label className="font-bold text-lg text-blue-400">Email</label>
					<input type="email" className="border-none bg-blue-400 p-3 text-white" />
				</div>
				<div className="flex flex-col gap-2">
					<label className="font-bold text-lg text-blue-400">Mobile Number</label>
					<input type="tel" className="border-none bg-blue-400 p-3 text-white" />
				</div>

				<button className="bg-blue-800 text-white text-sm w-full p-4 mt-8">Submit</button>
			</form>
		</div>
	);
}
