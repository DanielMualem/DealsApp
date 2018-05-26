// app/auth.js

import { Alert, AsyncStorage } from "react-native";

export const OWNER_KEY = "auth-demo-key";

export const onSignIn = () => AsyncStorage.setItem(OWNER_KEY, "true");

export const onSignOut = () => AsyncStorage.removeItem(OWNER_KEY);

export const isSignedIn = () => {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem(OWNER_KEY)
			.then(res => {
				if (res !== null) {
					resolve(true);
				} else {
					resolve(false);
				}
			})
			.catch(err => reject(err));
	});
};







