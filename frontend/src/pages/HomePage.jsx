import { useCallback, useEffect, useState } from "react";
import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import Search from "../components/Search";
import SortRepos from "../components/SortRepos";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";
import "./css-files/homepage.css";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [sortType, setSortType] = useState("recent");

  const getUserProfileAndRepos = useCallback(async (username = "NavneetDeshtaa") => {
    setLoading(true);

    try {
      const res = await fetch(`https://gitscout.onrender.com/api/users/profile/${username}`);
      const { repos, userProfile } = await res.json();

      setRepos(repos);
      setUserProfile(userProfile);

      return { userProfile, repos };
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
  }, []);

  const onSearch = async (e, username) => {
    e.preventDefault();

    setLoading(true);
    setRepos([]);
    setUserProfile(null);

    const { userProfile, repos } = await getUserProfileAndRepos(username);

    setUserProfile(userProfile);
    setRepos(repos);
    setLoading(false);
  };

  const onSort = (sortType) => {
    if (sortType === "recent") {
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortType === "stars") {
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    } else if (sortType === "forks") {
      repos.sort((a, b) => b.forks_count - a.forks_count);
    }
    setSortType(sortType);
    setRepos([...repos]);
  };

  return (
    <div className="homepage-container">
      <Search onSearch={onSearch}/>
      {loading && <Spinner />}
      {!loading && userProfile && (
        <div className="homepage-content">
          <div className="userprofile">
            <ProfileInfo userProfile={userProfile} />
          </div>
          <div className="repos">
            <SortRepos onSort={onSort} sortType={sortType} />
            <Repos repos={repos} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
