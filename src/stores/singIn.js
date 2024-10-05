import { defineStore } from 'pinia'
import { ref, reactive } from 'vue';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router';

export const useSingInStore = defineStore('singIn', () => {

const router = useRouter();


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
	const auth = getAuth();
	const provider = new GoogleAuthProvider();

	// Sign in with Google popup
	signInWithPopup(auth, provider)
		.then((result) => {
			// Get the signed-in user's email from Google
			const userEmail = result.user.email;
			console.log(result.user); // You can log this for debugging purposes

			// Fetch the admin email stored in Firebase
			const adminEmail = "02022004v@gmail.com"; // Replace with your actual admin email

			// Check if the user's email matches the admin email
			if (userEmail === adminEmail) {
				isSignedIn.value = true;
				router.push({ name: 'tools' });
				console.log("Successfully signed in with Google as Admin");
			} else {
				// If email doesn't match the admin's email, throw an error
				alert("Access denied: Only the admin can sign in.");
				auth.signOut(); // Optionally, sign out the user to prevent access
			}
		})
		.catch((error) => {
			console.log(error.code);
			// Handle errors as you do in your email sign-in function
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
					errMsgs.default = "An error occurred during sign-in.";
					break;
			}
		});
};

return { router, user, errMsgs, isSignedIn, singIn, singInWithGoogle }
})