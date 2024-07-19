import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleLoginWithGithub } from "../lib/function";
import './css-files/logincss.css';

const LoginPage = () => {
	return (
		<div className='login-container'>
			<div className='login-box'>
				<div className='login-content'>
					<h1 className='login-title'>Login to your account</h1>
					<button
						type='button'
						className='login-button'
						onClick={handleLoginWithGithub}
					>
						<FaGithub className='github-icon' />
						Login with Github
					</button>
					<p className='login-text'>
						{"Don't"} have an account?{" "}
						<Link to='/signup' className='signup-link'>
							Sign Up
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;


