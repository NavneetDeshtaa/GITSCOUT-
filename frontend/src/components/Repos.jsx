import React from "react";
import Repo from "./Repo";
import './cssFiles/Repos.css';

const Repos = ({ repos }) => {
	
	return (
		<div className="repos-container">
			<ol className="repos-list">
				{repos.map((repo) => (
					<Repo key={repo.id} repo={repo} />
				))}
				{repos.length === 0 && <p className="no-repos">No repos found</p>}
			</ol>
		</div>
	);
};

export default Repos;


