import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackgroundImage from "./Assets/ankara.png";
import { faCaretDown, faCaretRight, faList } from "@fortawesome/free-solid-svg-icons";
import CartDetails from "./AddToCartDetails";
export default function Hero() {
	return (
		<>
			<div
				className="w-full h-48"
				style={{
					backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${BackgroundImage})`,
				}}
			>
				<div className="mt-24">
					<h2 className="text-blue-700 px-6 py-8 text-3xl font-extrabold w-[30%]">Grab Up To 40% Discount On Purchase</h2>
				</div>
			</div>

			<div className="flex justify-between items-center m-8 text-blue-800">
				<div className="flex justify-between items-center gap-8">
					<div className="flex items-center gap-2">
						<FontAwesomeIcon icon={faList} />
						<p>Category</p>
					</div>
					<div className="flex items-center gap-2">
						<p>Women</p>
						<FontAwesomeIcon icon={faCaretDown} />
					</div>

					<div className="flex items-center gap-2">
						<FontAwesomeIcon icon={faList} />
						<p>Filter By</p>
					</div>

					<div className="flex items-center gap-2">
						<p>Size</p>
						<FontAwesomeIcon icon={faCaretRight} />
					</div>
					<div className="flex items-center gap-2">
						<p>Price</p>
						<FontAwesomeIcon icon={faCaretRight} />
					</div>
				</div>
				<div className="flex justify-between">
					<div className="flex items-center gap-2">
						<p>Sort by</p>
						<FontAwesomeIcon icon={faCaretDown} />
					</div>
				</div>
			</div>
			<CartDetails />
		</>
	);
}
