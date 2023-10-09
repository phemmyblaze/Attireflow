import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating = () => {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [selectedRating, setSelectedRating] = useState(null);

	const handleHover = (index) => {
		setHoveredIndex(index);
	};

	const handleLeave = () => {
		setHoveredIndex(null);
	};

	const handleClick = (index) => {
		setSelectedRating(index);
	};

	return (
		<div className="flex gap-3">
			{[1, 2, 3, 4, 5].map((index) => (
				<FontAwesomeIcon
					key={index}
					icon={faStar}
					onMouseEnter={() => handleHover(index)}
					onMouseLeave={handleLeave}
					onClick={() => handleClick(index)}
					className={index <= selectedRating || index <= hoveredIndex ? "text-yellow-500 cursor-pointer" : "text-gray-400 cursor-pointer"}
				/>
			))}
		</div>
	);
};

export default StarRating;
