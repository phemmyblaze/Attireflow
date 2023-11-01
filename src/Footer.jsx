import { faFacebook, faInstagram, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Footer() {
	const links = [
		{ name: "Home", link: "/home" },
		{ name: "Collections", link: "/about" },
		{ name: "Why Choose Us", link: "/contact" },
	];
	const Quicklinks = [
		{ name: "Home", link: "/home" },
		{ name: "Collections", link: "/about" },
		{ name: "Why Choose Us", link: "/contact" },
		{ name: "Why Choose Us", link: "/contact" },
	];

	const [email, setEmail] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// You can implement your subscribe logic here, for example, send the email to a server.
		console.log("Subscribed with email:", email);
		// Reset the email input after submission
		setEmail("");
	};
	return (
		<>
			<div className="bg-blue-700 px-8 py-8 flex justify-between flex-col md:flex-row gap-10 md:gap-0 ">
				<div className="">
					<div className="text-white uppercase font-extrabold text-3xl mb-4">
						<h2>Great Attire</h2>
					</div>

					<div className="flex justify-between items-center gap-4 text-white">
						<div className="border rounded-full p-4">
							<FontAwesomeIcon icon={faFacebook} size="2xl" />
						</div>
						<div className="border rounded-full p-4">
							<FontAwesomeIcon icon={faWhatsapp} size="xl" />
						</div>
						<div className="border rounded-full p-4">
							<FontAwesomeIcon icon={faInstagram} size="xl" />
						</div>
						<div className="border rounded-full p-4">
							<FontAwesomeIcon icon={faXTwitter} size="xl" />
						</div>
					</div>
				</div>
				<div>
					<div className="text-white uppercase font-extrabold mb-4">
						<h2>explore all</h2>
					</div>
					<div className="flex flex-col gap-3">
						{links.map((link) => (
							<a href={link.link} className="text-white hover:text-green-700 font-bold">
								{link.name}
							</a>
						))}
					</div>
				</div>
				<div className="">
					<div className="text-white uppercase font-extrabold mb-4">
						<h2>Quick Links</h2>
					</div>
					<div className="flex flex-col gap-3">
						{Quicklinks.map((link) => (
							<a href={link.link} className="text-white hover:text-green-700 font-bold">
								{link.name}
							</a>
						))}
					</div>
				</div>
				<div className="">
					<div className="text-white uppercase font-extrabold mb-4">
						<h2>Get in Touch</h2>
					</div>
					<form className="flex" onSubmit={handleSubmit}>
						<input type="email" className="border rounded px-6 py-3 bg-transparent focus:outline-none focus:border-blue-500" placeholder="Enter email" value={email} onChange={handleEmailChange} />
						<button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Subscribe</button>
					</form>
				</div>
			</div>
		</>
	);
}
