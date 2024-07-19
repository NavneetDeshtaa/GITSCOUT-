import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";

import Sidebar from "./components/Sidebar";
import { useAuthContext } from "./context/AuthContext";
import "./App.css"; // Import the CSS file

function App() {
	const { authUser, loading } = useAuthContext();

	if (loading) return null;

	return (
		<div className="app-container">
			<Sidebar />
			<div className="content-container">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
					<Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
					<Route path="/explore" element={authUser ? <ExplorePage /> : <Navigate to="/login" />} />
				</Routes>
				<Toaster />
			</div>
		</div>
	);
}

export default App;
