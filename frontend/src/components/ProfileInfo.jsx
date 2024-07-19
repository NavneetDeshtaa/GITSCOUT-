import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { RiGitRepositoryFill, RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { TfiThought } from "react-icons/tfi";
import { FaEye } from "react-icons/fa";
import { formatMemberSince } from "../utils/functions";
import './cssFiles/ProfileInfo.css';
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const ProfileInfo = ({ userProfile }) => {

    const {authUser} = useAuthContext();
    const joinedSince = formatMemberSince(userProfile?.created_at);

    const handleLinkClick = (url) => {
        if (authUser) {
            window.open(url, '_blank', 'noopener,noreferrer');
        } else {
            
            window.location.href = '/signup'; 
           toast.error("Please signup first")
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <img src={userProfile?.avatar_url} className="profile-avatar" alt='' />
                    <div className="profile-actions">
                        <button
                            onClick={() => handleLinkClick(userProfile?.html_url)}
                            className="profile-view"
                        >
                            <FaEye size={16} />
                            View on Github
                        </button>
                    </div>
                </div>
                {userProfile?.bio && (
                    <div className="profile-bio">
                        <TfiThought />
                        <p>{userProfile?.bio.substring(0, 60)}...</p>
                    </div>
                )}
                {userProfile?.location && (
                    <div className="profile-location">
                        <IoLocationOutline />
                        {userProfile?.location}
                    </div>
                )}
                {userProfile?.twitter_username && (
                    <button
                        onClick={() => handleLinkClick(`https://twitter.com/${userProfile.twitter_username}`)}
                        className="profile-twitter"
                    >
                        <FaXTwitter />
                        {userProfile?.twitter_username}
                    </button>
                )}
                <div className="profile-member-since">
                    <p>Member since</p>
                    <p>{joinedSince} </p>
                </div>
                {userProfile?.email && (
                    <div className="profile-email">
                        <p>Email address</p>
                        <p>{userProfile.email}</p>
                    </div>
                )}
                {userProfile?.name && (
                    <div className="profile-name">
                        <p>Full name</p>
                        <p>{userProfile?.name}</p>
                    </div>
                )}
                <div className="profile-username">
                    <p>Username</p>
                    <p>{userProfile?.login}</p>
                </div>
            </div>
            <div className="profile-stats">
                <div className="profile-stat">
                    <RiUserFollowFill />
                    <p>Followers: {userProfile?.followers}</p>
                </div>
                <div className="profile-stat following">
                    <RiUserFollowLine />
                    <p>Following: {userProfile?.following}</p>
                </div>
            </div>
            <div className="profile-stats">
                <div className="profile-stat">
                    <RiGitRepositoryFill />
                    <p>Public repos: {userProfile?.public_repos}</p>
                </div>
                <div className="profile-stat">
                    <RiGitRepositoryFill />
                    <p>Public gists: {userProfile?.public_gists}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;

