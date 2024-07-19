import React from "react";
import "./cssFiles/SortRepos.css";

const SortRepos = ({ onSort, sortType }) => {
	return (
		<div className="sort-buttons">
			<button
				type="button"
				className="sort-button "
				onClick={() => onSort("recent")}
			>
				Most Recent
			</button>
			<button
				type="button"
				className="sort-button"
				onClick={() => onSort("stars")}
			>
				Most Stars
			</button>
			<button
				type="button"
				className="sort-button"
				onClick={() => onSort("forks")}
			>
				Most Forks
			</button>
		</div>
	);
};

export default SortRepos;
