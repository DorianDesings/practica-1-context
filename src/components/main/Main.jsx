import UsersList from '../users-list/UsersList';
import { StyledMain } from './styles';

const Main = ({ userActive, setUserActive }) => {
	return (
		<StyledMain>
			<UsersList userActive={userActive} setUserActive={setUserActive} />
		</StyledMain>
	);
};

export default Main;
