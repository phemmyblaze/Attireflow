import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "./Modals/Cart";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import cart from './Assets/bag.svg'
import search from './Assets/search.svg'
import './index.css'

export default function NavBar() {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const links = [
		{ name: "Home", link: "/" },
		{ name: "About", link: "/" },
		{ name: "Shop", link: "/" },
		{ name: "Contact Us", link: "/contact" },
	];

	function handleCheckOut() {
		navigate("/checkout");
	}

	return (
		<div className="flex justify-between items-center px-8  absolute w-full top-0 bg-inherit mt-3">
			<div>
				<div className="text-2xl text-blue-700 font-bold uppercase">Great Attire</div>
			</div>
			<div className="justify-between hidden md:flex items-center gap-7 ">
				{links.map((link) => (
					<NavLink to={link.link}  className="text-blue-700 hover:text-green-700 text-[18px] ">
						{link.name}
					</NavLink>
				))}
			</div>
			<div>
				<div className="flex justify-center items-center gap-5 cursor-pointer">
					<div className="">
						<img src={search} alt="2xl"  />
					</div>
					<div className="border h-[25px] border-[#085cb2]">

					</div>
					<div className="">
						<img src={cart} alt="2xl"  onClick={() => setOpen(true)} />
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
