import { USERS } from '../../constants/users';
import User from '../user/User';
import { StyledUsersList } from './styles';

const UsersList = ({ userActive, setUserActive }) => {
	return (
		<StyledUsersList>
			{USERS.map(user => (
				<User
					key={user.id}
					userActive={userActive}
					setUserActive={setUserActive}
					{...user}
				/>
			))}
		</StyledUsersList>
	);
};

export default UsersList;
