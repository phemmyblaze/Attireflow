import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackgroundImage from "./Assets/ankara.png";
import { faCaretDown, faCaretRight, faList } from "@fortawesome/free-solid-svg-icons";
import CartDetails from "./AddToCartDetails";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Hero() {
	return (
		<>
			<NavBar />
			<div
				className="w-full h-full"
				style={{
					backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${BackgroundImage})`,
				}}
			>
				<div className="mt-24">
					<h2 className="text-blue-700 px-6 py-8 text-3xl font-extrabold w-[60%] md:w-[30%]">Grab Up To 40% Discount On Purchase</h2>
				</div>
			</div>

			<div className="flex md:justify-between justify-center flex-col md:flex-row  items-start md:items-center my-8 mx-4 text-blue-800">
				<div className="flex justify-between items-center gap-8">
					<div className="flex items-center gap-2">
						<FontAwesomeIcon className="text-sm md:text-base" icon={faList} />
						<p className="text-sm md:text-base">Category</p>
					</div>
					<div className="flex items-center gap-2">
						<p className="text-sm md:text-base">Women</p>
						<FontAwesomeIcon className="text-sm md:text-base" icon={faCaretDown} />
					</div>

					<div className="flex items-center gap-2">
						<FontAwesomeIcon className="text-sm md:text-base" icon={faList} />
						<p className="text-sm md:text-base">Filter By</p>
					</div>

					<div className="flex items-center gap-2">
						<p className="text-sm md:text-base">Size</p>
						<FontAwesomeIcon className="text-sm md:text-base" icon={faCaretRight} />
					</div>
					<div className="flex items-center gap-2">
						<p className="text-sm md:text-base">Price</p>
						<FontAwesomeIcon className="text-sm md:text-base" icon={faCaretRight} />
					</div>
				</div>
				<div className="flex justify-between">
					<div className="flex items-center gap-2">
						<p className="text-sm md:text-base">Sort by</p>
						<FontAwesomeIcon className="text-sm md:text-base" icon={faCaretDown} />
					</div>
				</div>
			</div>
			<CartDetails />
			<Footer />
		</>
	);
}
