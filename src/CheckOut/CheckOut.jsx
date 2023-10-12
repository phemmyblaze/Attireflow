import NavBar from "./../NavBar";
import Footer from "./../Footer";
import ReviewItem from "./ReviewItem";
import DeliveryInfo from "./DeliveryInfo";
import OrderSum from "./OrderSum";

export default function CheckOut() {
	return (
		<>
			<NavBar />
			<div className="flex justify-between items-center m-5">
				<div className="flex flex-col gap-5">
					<ReviewItem />
					<DeliveryInfo />
				</div>

				<OrderSum />
			</div>
			<Footer />
		</>
	);
}
