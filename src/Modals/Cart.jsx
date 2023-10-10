import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Cart = ({ open, onClose, children }) => {
	// if (!open) return null;

	return (
		<div onClick={onClose} className={`fixed inset-0 flex items-center justify-center tanssition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
			<div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadown p-6 transition-all ${open ? "scale100 opacity-100" : "scale-125 opacity-0"}`}>
				<button onClick={onClose} className="ml-48 p-1 rounded-lg text-gray-400 bg-white hover:bg-red-500 hover:text-white">
					<FontAwesomeIcon icon={faXmark} size={"2xl"} />
				</button>
				{children}
			</div>
		</div>
	);
};

export default Cart;

// {/* <div className="bg-black opacity-50 fixed inset-0"></div>
// 			<div className="bg-white p-8 rounded-md z-10">
// 				<button className="absolute top-4 right-4 text-gray-700" onClick={onClose}>
// 					&times;
// 				</button>
// 				<div className="modal-content">{children}</div>
// 			</div> */}
