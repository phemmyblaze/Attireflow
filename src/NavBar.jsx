import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "./Modals/Cart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const links = [
		{ name: "Home", link: "/home" },
		{ name: "About", link: "/about" },
		{ name: "Contact Us", link: "/contact" },
	];

	function handleCheckOut() {
		navigate("/checkout");
	}

	return (
		<div className="flex justify-between items-center px-8 mt-5">
			<div>
				<div className="text-2xl text-blue-700 font-bold uppercase">Great Attire</div>
			</div>
			<div className="flex justify-between items-center gap-7 ">
				{links.map((link) => (
					<a href={link.link} className="text-blue-700 hover:text-green-700 font-bold">
						{link.name}
					</a>
				))}
			</div>
			<div>
				<div className="flex justify-center items-center gap-4 cursor-pointer">
					<div className="">
						<FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" className="text-blue-700 hover:text-green-700" />
					</div>
					<div className="px-5">
						<FontAwesomeIcon icon={faCartShopping} size="2xl" className="text-blue-700 hover:text-green-700" onClick={() => setOpen(true)} />
					</div>
				</div>
			</div>

			<Cart open={open} onClose={() => setOpen(false)}>
				<div className="text-center w-56">
					<FontAwesomeIcon icon={faCartShopping} size={56} className="mx-auto text-red-900" />

					<div className="border rounded-full mt-3 px-4 py-2 bg-green-500 text-white hover:bg-blue-400 cursor-pointer" onClick={handleCheckOut}>
						Checkout
					</div>
				</div>
			</Cart>
		</div>
	);
}
