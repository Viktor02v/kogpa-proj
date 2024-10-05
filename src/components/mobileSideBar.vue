<script setup>
import { signOut, getAuth } from 'firebase/auth';

// Components
import sideBarItem from '../components/sideBarItem.vue';

// Icons
import AccountOff from 'vue-material-design-icons/AccountOff.vue';
import Language from 'vue-material-design-icons/Earth.vue';


// Pinia stores
// Header Store
import { useHeaderStore } from '../stores/header.js';
const headerStore = useHeaderStore();

// SingIn Store
import { useSingInStore } from '../stores/singIn.js';
const SingInStore = useSingInStore();

// Router
import { useRouter } from 'vue-router';
const router = useRouter();

const handleSingOut = async () => {
	try {
		const auth = getAuth();
		await signOut(auth);
		SingInStore.isSignedIn = false;
		router.push({ name: 'home' });
		SingInStore.user.email = '';
		SingInStore.user.password = '';
		SingInStore.errMsgs.errorEmail = '';
		SingInStore.errMsgs.errorPassword = '';
		SingInStore.errMsgs.notFound = '';
		SingInStore.errMsgs.default = '';
	} catch (error) {
		console.error("Error signing out:", error);
	}
}

</script>

<template>
	<!-- Mobile Sidebar -->
	<aside aria-hidden="!headerStore.toggles.mobileMenuOpen" id="sideBar" class="fixed z-[99] md:hidden">
		<div
			:class="headerStore.toggles.mobileMenuOpen && headerStore.headerVisible && headerStore.lastScrollTop >= 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'"
			class="fixed w-[50vw] h-[91vh] border-l border-gray-200 shadow-lg  shadow-gray-800 bg-white flex flex-col justify-between top-[80px] right-0 overflow-y-auto transition-all duration-700 ease-in-out">

			<ul class="flex flex-col">

				<router-link to="/">
					<sideBarItem iconComponent="Home" iconColor="rgb(120, 120, 120)" text="Home" />
				</router-link>

				<sideBarItem iconComponent="Contact" iconColor="rgb(120, 120, 120)" text="Contact" />
				<sideBarItem iconComponent="Students" iconColor="rgb(120, 120, 120)" text="Students" />
				<sideBarItem iconComponent="Applicant" iconColor="rgb(120, 120, 120)" text="Applicant" />
				<sideBarItem iconComponent="College" iconColor="rgb(120, 120, 120)" text="College" />

				<router-link to="/tools">
					<sideBarItem iconComponent="Tools" iconColor="rgb(120, 120, 120)" text="Tools" />
				</router-link>

				<div v-if="!SingInStore.isSignedIn">
					<router-link to="/sing-in">
						<sideBarItem iconComponent="Account" description="Only For Admins" iconColor="rgb(120, 120, 120)"
							text="Sing-in" />
					</router-link>
				</div>

				<button v-if="SingInStore.isSignedIn" @click="handleSingOut"
					class="bar-menu-block border-b border-gray-200  shadow-sm gap-3 font-light text-base flex justify-center text-white w-fullitems-center">
					<AccountOff fillColor="rgb(120, 120, 120)" />
					<span class="menu-bar-item">Sign Out</span>
				</button>
			</ul>

			<div id="language"
				class="bar-menu-block border-t border-gray-200 shadow-sm gap-3 font-light text-[1.0rem]  flex justify-center text-white  w-full  min-h-[90px]  items-center">
				<div class="flex gap-1  items-center pb-20 text-[15px]">
					<Language fillColor="rgb(120, 120, 120)" />
					<span class="menu-bar-item__lang">ENG</span>
				</div>
			</div>
		</div>
	</aside>
</template>

<style scoped>
.menu-bar-item {
	padding-right: 1.2rem;
	color: rgb(120, 120, 120);
}

.menu-bar-item:active {
	transition: color 0.3s ease;
	color: rgb(255, 255, 255);
}


/* SideBar */
.bar-menu-block {
	position: relative;
	padding: 20px;
	/* border-radius: 20px; */
	/* border: none; */
	text-align: center;
	-webkit-transition-duration: 0.4s;
	/* Safari */
	transition-duration: 0.4s;
	text-decoration: none;
	overflow: hidden;
	cursor: pointer;
}

.bar-menu-block:after {
	content: "";
	/* border-radius: 20px; */
	background: #c3c4c374;
	display: block;
	position: absolute;
	padding-top: 300%;
	padding-left: 350%;
	margin-left: -20px !important;
	margin-top: -120%;
	opacity: 0;
	transition: all 0.8s
}

.bar-menu-block:active:after {
	padding: 0px;
	margin: 0;
	opacity: 1;
	transition: 0s
}

.menu-bar-item__lang {
	color: rgb(120, 120, 120);
}
</style>