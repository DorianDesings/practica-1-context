import { StyledHeader } from './styles';

const Header = ({ userActive, setUserActive }) => {
	return (
		<StyledHeader>
			<h1>Users Control</h1>
			{!userActive && <p>No user active</p>}
			{userActive && (
				<>
					<p>User Active: {userActive}</p>
					<button onClick={() => setUserActive('')}>Logout User</button>
				</>
			)}
		</StyledHeader>
	);
};

export default Header;
