import { MdLogout } from "react-icons/md";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import "./cssFiles/Logout.css"; 

const Logout = () => {
	const { authUser, setAuthUser } = useAuthContext();

	const handleLogout = async () => {
		try {
			const res = await fetch("http://localhost:5000/api/auth/logout", { credentials: "include" });
			const data = await res.json();
			console.log(data);
			setAuthUser(null);
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<>
			<img src={authUser?.avatarUrl} className="avatar" />

			<div
				className="logout-button"
				onClick={handleLogout}
			>
				<MdLogout size={22} />
			</div>
		</>
	);
};

export default Logout
