<script setup>
// Vue methods
import { onMounted, onUnmounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { getAuth, onAuthStateChanged, signOut, deleteUser } from 'firebase/auth';
import { useRouter } from 'vue-router';

// Components
import sideBarItem from './components/sideBarItem.vue';

// Icons
import AccountOff from 'vue-material-design-icons/AccountOff.vue';
import Language from 'vue-material-design-icons/Earth.vue';

// Pinia stores
// Header Store
import { useHeaderStore } from './stores/header.js';
const headerStore = useHeaderStore();

// SingIn Store
import { useSingInStore } from './stores/singIn.js';
const SingInStore = useSingInStore();

// Router
const router = useRouter();


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

const handleSingOut = () => {
	signOut(auth).then(() => {
		SingInStore.isSignedIn = false;
		router.push({ name: 'home' });
		SingInStore.user.email = '';
		SingInStore.user.password = '';
		SingInStore.errMsgs.errorEmail = '';
		SingInStore.errMsgs.errorPassword = '';
		SingInStore.errMsgs.notFound = '';
		SingInStore.errMsgs.default = '';
	})
}


// Remove event listener on unmount
onUnmounted(() => {
	window.removeEventListener('scroll', headerStore.handleScroll);
});

</script>




<template>
	<div class="w-full h-full bg-white relative flex flex-col ">
		<!-- Header -->
		<header id="header" class="header fixed w-full  transition-all duration-500 ease-in-out" :class="{
			'opacity-100 ': headerStore.headerVisible,
			'opacity-0 -translate-y-full': !headerStore.headerVisible,
			'shadow-lg shadow-blue-100': headerStore.toggles.desktopMenuOpen
		}">
			<div class=" shadow-md flex items-center px-20 h-[81px] w-full">
				<nav id="navigation" class="w-full">

					<!-- Mobile Adaptation -->
					<ul class="menu flex justify-center  w-full md:hidden">
						<li class="menu-item">
							<img width="160" src="/icons/kogpa-logo.png" alt="Kogpa Accademy Logo">
						</li>

						<li v-if="router.path !== '/sing-in'"
							@click="headerStore.toggles.mobileMenuOpen = !headerStore.toggles.mobileMenuOpen"
							class="menu-item transition-all duration-500  fixed top-7 right-5"
							:aria-expanded="headerStore.toggles.mobileMenuOpen.toString()" aria-controls="navigation">
							<component
								:is="headerStore.toggles.mobileMenuOpen ? headerStore.headerIconMap.close : headerStore.headerIconMap.menu"
								:key="headerStore.toggles.mobileMenuOpen ? headerStore.headerIconMap.close : headerStore.headerIconMap.menu" />
						</li>

					</ul>

					<!-- Desktop Adaptation -->
					<ul class="menu hidden md:flex md:items-center w-full">
						<router-link to="/">
							<li class="logo">
								<img width="150" src="/icons/kogpa-logo.png" alt="logo">
							</li>
						</router-link>

						<li @mouseenter="headerStore.toggles.desktopMenuOpen = true"
							@mouseleave="headerStore.toggles.desktopMenuOpen = false"
							class="menu-list lg:pl-10 flex justify-around lg:w-[70vw] md:text-[0.9rem] md:w-[70vw]  lg:text-[1.2rem]">
							<div class="items-center menu-item ">
								About
								<span class="chevron chevron-down"></span>
							</div>
							<div class="menu-item  items-center">
								Contact
								<span class="chevron chevron-down"></span>
							</div>
							<div class="menu-item  items-center">
								Students
								<span class="chevron chevron-down"></span>
							</div>
							<div class="menu-item  items-center">
								Applicant
								<span class="chevron chevron-down"></span>
							</div>
							<div class="menu-item  items-center">
								Profession College
								<span class="chevron chevron-down"></span>
							</div>
							<router-link to="/sing-in">
								<div class="menu-item flex flex-col items-center  items-center">
									Sing-in
									<span class="text-[0.7rem] text-gray-400">Only For Admins</span>
									<span class="chevron chevron-down"></span>
								</div>
							</router-link>
						</li>

					</ul>
				</nav>
			</div>
		</header>


		<!-- Mobile Sidebar -->
		<aside aria-hidden="!headerStore.toggles.mobileMenuOpen" id="sideBar" class="fixed z-30 md:hidden">
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
						class="bar-menu-block border-b border-gray-200  shadow-sm gap-3 font-light text-base flex justify-center text-white w-full min-h-20 items-center">
						<AccountOff fillColor="rgb(120, 120, 120)" />
						<span class="menu-bar-item">Sign Out</span>
					</button>
				</ul>

				<div id="language"
					class="bar-menu-block border-t border-gray-200 shadow-sm gap-3 font-light text-[1.0rem] flex justify-center text-white  w-full  min-h-[80px]  items-center">
					<div class="flex gap-1 pb-10 items-center text-[15px]">
						<Language fillColor="rgb(120, 120, 120)" />
						<span class="menu-bar-item__lang">ENG</span>
					</div>
				</div>
			</div>
		</aside>

		<!-- Overlay -->
		<div
			:class="headerStore.toggles.mobileMenuOpen && headerStore.headerVisible && headerStore.lastScrollTop >= 0 || headerStore.toggles.desktopMenuOpen ? 'opacity-60' : 'opacity-0'"
			class="w-screen fixed h-screen transition-all duration-700 ease-in-out bg-black  z-10 ">
		</div>
		<!-- Main -->
		<main id="main" class="z-20 pt-[80px]">
			<RouterView />
		</main>

		<!-- Footer -->
		<footer id="footer">
			<div class="w-full z-20 ">
				<div class="">
				</div>
			</div>
		</footer>
	</div>
</template>


<style scoped>
/* Header */
.header {
	top: 0;
	left: 0;
	z-index: 100;
	background-color: #ffffff;
}

.menu-item {
	padding-right: 1.2rem;
	display: flex;

	@media screen and (min-width: 768px) {
		position: relative;
	}
}

.menu-item:hover {
	transition: color 0.3s ease;
	color: rgb(109, 145, 148);
}

/* SideBarItem */
.menu-bar-item {
	padding-right: 1.2rem;
	color: rgb(120, 120, 120);
}

.menu-bar-item:active {
	transition: color 0.3s ease;
	color: rgb(255, 255, 255);
}


.chevron {
	position: absolute;
	right: 0;
	top: 45%;
	margin-left: 0.5rem;
	width: 6px;
	height: 6px;
	border-right: 2px solid rgba(2, 37, 10, 0.534);
	border-bottom: 2px solid rgb(92, 3, 3);
	transform: rotate(45deg);
	transition: transform 0.3s ease;
	opacity: 0.2;
	transition: ease-in-out 0.6s;
}

.menu-item:hover .chevron {
	transform: rotate(-858deg);
	border-radius: 50%;
	opacity: 1;
	width: 8px;
	height: 8px;
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
