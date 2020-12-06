import './App.css';
import LoginHeader from './Login/LoginHeader';
import LoginFooter from './Login/LoginFooter';
import Container from './Login/Login';

function App() {
	return (
		<div className="App">
			<LoginHeader />
			<Container />

			<LoginFooter />
		</div>
	);
}

export default App;
