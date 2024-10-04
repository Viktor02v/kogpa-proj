import { defineStore } from 'pinia'
import { ref, reactive } from 'vue';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, deleteUser } from 'firebase/auth'
import { useRouter } from 'vue-router';

export const useSingInStore = defineStore('singIn', () => {

const router = useRouter();

let auth;

const user = reactive({
	email: '',
	password: '',
})

const errMsgs = reactive({
	errorEmail: '',
	errorPassword: '',
	notFound: '',
	default: '',
});

const isSignedIn = ref(false);

const singIn = () => {
	const auth = getAuth();
	signInWithEmailAndPassword(auth, user.email, user.password)
		.then((data) => {
			isSignedIn.value = true;
			router.push({ name: 'tools' });
			console.log("Successfully signed in");
		})
		.catch((error) => {
			console.log(error.code);
			alert(error.message);
			switch (error.code) {
				case "auth/invalid-email":
					errMsgs.errorEmail = "Invalid email";
					break;
				case "auth/user-not-found":
					errMsgs.notFound = "No account with that email was found";
					break;
				case "auth/invalid-credential":
					errMsgs.errorPassword = "Incorrect password";
					break;
				default:
					errMsgs.default = "Email or password is incorrect";
					break;
			}
		});
}

const singInWithGoogle = () => {
	const provider = new GoogleAuthProvider();
	signInWithPopup(getAuth(), provider)
	.then((result) =>{
		isSignedIn.value = true;
		router.push({ name: 'tools' });
		console.log(result.user)
	})
	.catch((error) => {
		console.log(error.code);
		switch (error.code) {
			case "auth/invalid-email":
				errMsgs.errorEmail = "Invalid email";
				break;
			case "auth/user-not-found":
				errMsgs.notFound = "No account with that email was found";
				break;
			case "auth/invalid-credential":
				errMsgs.errorPassword = "Incorrect password";
				break;
			default:
				errMsgs.default = "Email or password is incorrect";
				break;
		}
	});
}


return { router, user, errMsgs, isSignedIn, singIn, singInWithGoogle }
})