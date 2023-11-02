import NavBar from "./../NavBar";
import Footer from "./../Footer";
import ReviewItem from "./ReviewItem";
import DeliveryInfo from "./DeliveryInfo";
import OrderSum from "./OrderSum";

export default function CheckOut() {
	return (
		<>
			<NavBar />
			<div className="flex flex-col md:flex-row  justify-evenly my-32 px-8 gap-10">
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
