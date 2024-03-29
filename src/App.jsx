import { useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [userActive, setUserActive] = useState('');
	return (
		<>
			<GlobalStyles />
			<Header userActive={userActive} setUserActive={setUserActive} />
			<Main userActive={userActive} setUserActive={setUserActive} />
		</>
	);
};

export default App;
