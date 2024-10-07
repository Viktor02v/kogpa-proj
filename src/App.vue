<script setup>
// Vue methods
import { onMounted, onUnmounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Pinia stores
// Header Store
import { useHeaderStore } from './stores/header.js';
const headerStore = useHeaderStore();

// SingIn Store
import { useSingInStore } from './stores/singIn.js';

const SingInStore = useSingInStore();

// Logic
let auth;

onMounted(() => {
	// Add event listener
	window.addEventListener('scroll', headerStore.handleScroll);

	// Check if user is signed in
	auth = getAuth();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			SingInStore.isSignedIn = true;
		} else {
			SingInStore.isSignedIn = false;
		}
	})
});


onUnmounted(() => {
	// Remove event listener on unmount
	window.removeEventListener('scroll', headerStore.handleScroll);
});

</script>




<template>
	<div class="w-full h-full bg-white relative flex flex-col ">


		<main id="main" class="z-30 pb-20 pt-[80px]">
			<RouterView />
		</main>

	</div>
</template>


<style scoped></style>
