import React  from "react";
import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { formatDate } from "../utils/functions";
import { PROGRAMMING_LANGUAGES } from "../utils/constants";
import './cssFiles/Repo.css';
import toast from "react-hot-toast";

const Repo = ({repo}) => {

	const repoCreated = formatDate(repo.created_at);

	const handleCloneClick = async (repo)=>{
        try {
		 await navigator.clipboard.writeText(repo.clone_url);
		  toast.success("URL copied successfully");	
	 } catch (error) {
		toast.error("Failed to copy");
	 }

	};

	return (
		<li className="repo-item">

			<span className="repo-icon">
				<FaCodeBranch className="icon" />
			</span>

			<div className="repo-details">
				<a
					href={repo?.html_url}
					target='_blank'
					rel='noreferrer'
					className="repo-name"
				>
					{repo?.name}
				</a>
				<span className="repo-star">
					<FaRegStar /> {repo?.stargazers_count}
				</span>
				<span className="repo-fork">
					<FaCodeFork /> {repo?.forks_count}
				</span>
				<span
					onClick={() => handleCloneClick(repo)}
					className="repo-clone"
				>
					<FaCopy /> Clone
				</span>
			</div>

			<time className="repo-date">
			    {repoCreated}
			</time>

			<p className="repo-description">
			 {repo.description? repo.description : "No description"}
			</p>
			{PROGRAMMING_LANGUAGES[repo.language] ? (
			<img src={PROGRAMMING_LANGUAGES[repo.language]} alt='Programming language icon' className='repo-lang-icon' />
			) : null}
		</li>
	);
};

export default Repo;



