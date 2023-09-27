import { Amplify, API, Auth } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App() {
	//Get API for auth
	async function callApi() {
		const user = await Auth.currentAuthenticatedUser()
		const token = user.signInUserSession.idToken.jwtToken
		console.log({ token })
		const requestInfo = {
			headers: {
				Authorization: token
			}
		}
		const data = await API.get('reactrestauthapicocoashield', '/users', requestInfo)
		console.log({ data })
	}

	//Deconnexion
	async function signOut() {
		try {
			await Auth.signOut({ global: true });
		} catch (error) {
			console.log('error signing out: ', error);
		}
	}

	return (
		<div>
			<button onClick={callApi}>Call API</button>
			<button onClick={signOut}>Déconnexion</button>
		</div>
	);
}

export default withAuthenticator(App);
