import { FaGithub, FaUnlockAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleSignupWithGithub } from "../lib/function";
import './css-files/signupcss.css';

const SignUpPage = () => {
	return (
		<div className='signup-container'>
			<div className='signup-box'>
				<div className='signup-content'>
					<h1 className='signup-title'>Create Account</h1>

					<button
						type='button'
						className='signup-button'
						onClick={handleSignupWithGithub}
					>
						<FaGithub className='github-icon' />
						Sign up with Github
					</button>

					<p className='signup-info'>
						By signing up, you will unlock all the features of the app.
						<span>
							<FaUnlockAlt className='unlock-icon' />
						</span>
					</p>

					<p className='signup-text'>
						Already have an account?{" "}
						<Link to='/login' className='login-link'>
							Login
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};
export default SignUpPage;


