import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import Repos from "../components/Repos";
import "./css-files/explorepage.css";

const ExplorePage = () => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [activeIcon, setActiveIcon] = useState("");

  const exploreRepos = async (language) => {
		setLoading(true);
		setRepos([]);
		try {
			const res = await fetch(" https://gitscout.onrender.com/api/explore/repos/" + language);
			const { repos } = await res.json();
			setRepos(repos);

			setSelectedLanguage(language);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

  const handleIconClick = (language) => {
    setActiveIcon(language);
    exploreRepos(language);
  };

  return (
    <div className="explore-container">
      <div className="explore-content">
        <h1 className="explore-title">Explore Popular Repositories</h1>
        <div className="language-icons">
          <img
            src="/javascript.svg"
            alt="JavaScript logo"
            className={`language-icon ${
              activeIcon === "javascript" ? "active" : ""
            }`}
            onClick={() => handleIconClick("javascript")}
          />
          <img
            src="/typescript.svg"
            alt="TypeScript logo"
            className={`language-icon ${ activeIcon === "typescript" ? "active" : "" }`}
            onClick={() => handleIconClick("typescript")}
          />
          <img
            src="/c++.svg"
            alt="C++ logo"
            className={`language-icon ${activeIcon === "c++" ? "active" : ""}`}
            onClick={() => handleIconClick("c++")}
          />
          <img
            src="/python.svg"
            alt="Python logo"
            className={`language-icon ${activeIcon === "python" ? "active" : ""}`}
            onClick={() => handleIconClick("python")}
          />
          <img
            src="/java.svg"
            alt="Java logo"
            className={`language-icon ${activeIcon === "java" ? "active" : ""}`}
            onClick={() => handleIconClick("java")}
          />
        </div>
        {!loading && repos.length > 0 && <Repos  repos={repos} />}
        {loading && <Spinner />}
      </div>
    </div>
  );
};
export default ExplorePage;
