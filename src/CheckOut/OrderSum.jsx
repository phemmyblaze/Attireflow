import MCard from "../Assets/mastercard.png";
import Visa from "../Assets/visa.png";

export default function OrderSum() {
	return (
		<>
			<div className="border-2 rounded-md border-blue-400 px-5 py-5 md:w-[40%] text-blue-400">
				<div className="text-center text-2xl font-bold text-blue-400">
					<h2>Order Summary</h2>
				</div>
				<div className="mt-5">
					<h3>Payment Details</h3>
					<div className="flex gap-4 mt-3">
						<input type="radio" name="cash" id="" />
						<p>Cash on delivery</p>
					</div>
					<div className="flex gap-4">
						<input type="radio" name="cash" id="" />
						<p>Debit Card</p>
					</div>
				</div>

				<div className="mt-5 flex items-center gap-7">
					<img src={MCard} alt="mastercard" className="w-20" />
					<img src={Visa} alt="visa" className="w-20 h-11" />
				</div>

				<form className="mt-5">
					<div className="flex flex-col gap-2">
						<label className="font-bold text-lg text-blue-400">Card Holder Name</label>
						<input type="text" className="border-none bg-blue-400 p-3 text-white" />
					</div>
					<div className="flex flex-col gap-2 mt-5">
						<label className="font-bold text-lg text-blue-400">Card Number</label>
						<input type="text" className="border-none bg-blue-400 p-3 text-white" />
					</div>
					<div className="flex gap-10 mt-5">
						<div className="flex flex-col gap-2 ">
							<label className="font-bold text-lg text-blue-400">Expiry Date</label>
							<input type="email" className="border-none bg-blue-400 p-3 text-white w-[50%] rounded-lg" />
						</div>
						<div className="flex flex-col gap-2 ">
							<label className="font-bold text-lg text-blue-400">Cvc</label>
							<input type="tel" className="border-none bg-blue-400 p-3 text-white w-[50%] rounded-lg" />
						</div>
					</div>
					<div className="mt-6 text-blue-800">
						<h5 className="font-bold text-lg">SubTotal</h5>
						<div className="flex justify-between items-center">
							<p>Original price</p>
							<p>₦12000</p>
						</div>
						<div className="flex justify-between items-center">
							<p>Original price</p>
							<p>₦12000</p>
						</div>
						<div className="flex justify-between items-center">
							<p>Original price</p>
							<p>₦12000</p>
						</div>
						<div className="flex justify-between items-center">
							<p>Original price</p>
							<p>₦12000</p>
						</div>
						<div className="flex justify-between items-center">
							<p>Original price</p>
							<p>₦12000</p>
						</div>
					</div>

					<button className="bg-blue-800 text-white text-sm w-full p-4 mt-8">Pay Now</button>
				</form>
			</div>
		</>
	);
}
