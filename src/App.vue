<script setup>
// Vue methods
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

// Pinia stores
import { useHeaderStore } from './stores/header.js';
const headerStore = useHeaderStore();

// Components
import sideBarItem from './components/sideBarItem.vue';
import verificationField from './components/verificationField.vue';

// Icons
// import Menu from 'vue-material-design-icons/Menu.vue';
// import Close from 'vue-material-design-icons/Close.vue';
import Language from 'vue-material-design-icons/Earth.vue';

// const headerIconMap = {
// 	menu: Menu,
// 	close: Close,
// };

// Add scroll event listener
onMounted(() => {
	window.addEventListener('scroll', headerStore.handleScroll);
});

// Remove event listener on unmount
onUnmounted(() => {
	window.removeEventListener('scroll', headerStore.handleScroll);
});




// For custom verification field

const isFormValid = ref(true);

// To trigger the changes in view
const isValidated = ref(null);

const submited = ref(false);

const user = ref({
	name: '',
	email: '',
	password: ''
});

const nameComponent = ref({
	type: 'text',
	label: 'Name',
	placeholder: 'Name',
	errorMessage: null,
	patern: '',
	minLength: 3,
	maxLength: 30
});

const passwordComponent = ref({
	type: 'password',
	label: 'Password',
	placeholder: 'Password',
	errorMessage: null,
	patern: '',
	minLength: 8,
	maxLength: 12
});

const emailComponent = ref({
	type: 'email',
	label: 'Email',
	placeholder: 'Email',
	errorMessage: null,
	pattern: '^[\\w-\\.]+@[\\w-]+\\.[\\w-]{2,4}$',
	minLength: 5,
	maxLength: 100,
});

const validateForm = (isValid) => {
	isFormValid.value = isValid;
}

const checkForEmptyFields = () => {
	return user.value.name !== '' && user.value.email !== '' && user.value.password !== '';
};

const submit = () => {
	if (!isFormValid.value) {
		alert('Form is not valid(');
	} else {
		if (!checkForEmptyFields()) {
			alert('Some fields are empty(');
			return;
		}
		submited.value = true;
		alert(`You have successfully signed in as a ${user.value.name}`);
		setTimeout(() => {
			isValidated.value = true;
			console.log('isValidated set to true');
		}, 2000); // 20 seconds delay (20,000 milliseconds)
	}
};

</script>




<template>
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
					<li v-if="isValidated" @click="headerStore.toggles.mobileMenuOpen = !headerStore.toggles.mobileMenuOpen"
						class="menu-item transition-all duration-500  fixed top-7 right-5"
						:aria-expanded="headerStore.toggles.mobileMenuOpen.toString()" aria-controls="navigation">
						<component :is="headerStore.toggles.mobileMenuOpen ? headerStore.headerIconMap.close :  headerStore.headerIconMap.menu"
							:key="headerStore.toggles.mobileMenuOpen ? headerStore.headerIconMap.close : headerStore.headerIconMap.menu" />
					</li>

					<li v-if="!isValidated"
						class=" transition-all duration-500  fixed top-5 p-2 border-[1.5px] border-gray-200 bg-opacity-50 bg-gray-100 text-gray-900 rounded-full right-10">
						Help
					</li>
				</ul>

				<!-- Desktop Adaptation -->
				<ul class="menu hidden md:flex md:items-center w-full" :class="!isValidated ? 'justify-center' : ''">
					<li class="logo">
						<img width="150" src="/icons/kogpa-logo.png" alt="logo">
					</li>

					<li @mouseenter="headerStore.toggles.desktopMenuOpen = true" @mouseleave="headerStore.toggles.desktopMenuOpen = false"
						class="menu-list lg:pl-10 flex justify-around lg:w-[70vw] md:text-[0.9rem] md:w-[70vw]  lg:text-[1.2rem]"
						:class="!isValidated ? 'hidden' : ''">

						<div class="menu-item ">
							<RouterLink to="/about"> About
								<span class="chevron chevron-down"></span>
							</RouterLink>
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
					</li>

					<li v-if="!isValidated"
						class=" transition-all duration-500  fixed top-5 p-2 border-[1.5px] border-gray-200 bg-opacity-50 bg-gray-100 text-gray-900 rounded-full right-10">
						Help
					</li>
				</ul>
			</nav>
		</div>
	</header>


	<!-- Verification Field -->
	<section v-if="!isValidated" id="verification">
		<div class="w-full h-full pt-[80px] fixed h-[100vh] z-50 bg-white">
			<div
				class="w-full h-full flex flex-col gap-10 lg:flex-row md:flex-row md:w-[90vw] md:h-[90vh] lg:w-[90vw] lg:h-[90vh] justify-center items-center">

				<div class="flex w-[60%] md:w-[100%] gap-2 pt-8  flex-col items-center">
					<h1 class="text-center sm:text-4xl md:text-5xl lg:text-5xl font-serif text-3xl">Welcome to Kogpa Accademy
					</h1>
					<p
						class=" text-center text-gray-500 text-[0.8rem] text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] font-light">
						Enter your email and password to acces your account</p>


				</div>

				<div class="flex w-[50%] sm:w-[40%] md:w-[30%] lg:w-[30%] flex-col pb-10 gap-8">

					<verificationField v-model="user.name" :component-data="nameComponent" @form-validate="validateForm" />

					<verificationField v-model="user.password" :component-data="passwordComponent"
						@form-validate="validateForm" />

					<verificationField v-model="user.email" :component-data="emailComponent" @form-validate="validateForm" />

					<button @click="submit"
						class="bg-gradient-to-r from-cyan-900 flex items-center justify-center w-full to-blue-200 transition-all dutation-500 ease-in-out text-white py-2 px-4 rounded rounded-lg">
						<span v-if="!submited" class="font-serif text-[0.9rem]">Sign in</span>
						<img v-else src="/gifs/load.gif" width="30" alt="">
					</button>
				</div>
			</div>
		</div>
	</section>


	<!-- Mobile Sidebar -->
	<aside id="sideBar" class="relative z-50 md:hidden">
		<div :aria-hidden="!(headerStore.toggles.mobileMenuOpen && headerStore.headerVisible && headerStore.lastScrollTop > 0)"
			:class="headerStore.toggles.mobileMenuOpen && headerStore.headerVisible && headerStore.lastScrollTop >= 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'"
			class="fixed w-[50vw] h-[91vh] border-l border-gray-200 shadow-lg  shadow-gray-800 bg-white flex flex-col justify-between top-[80px] right-0 overflow-y-auto transition-all duration-700 ease-in-out">

			<ul class="flex flex-col">
				<sideBarItem iconComponent="Home" iconColor="rgb(120, 120, 120)" text="Home" />
				<sideBarItem iconComponent="Contact" iconColor="rgb(120, 120, 120)" text="Contact" />
				<sideBarItem iconComponent="Students" iconColor="rgb(120, 120, 120)" text="Students" />
				<sideBarItem iconComponent="Applicant" iconColor="rgb(120, 120, 120)" text="Applicant" />
				<sideBarItem iconComponent="College" iconColor="rgb(120, 120, 120)" text="College" />
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
		class="w-screen fixed h-screen transition-all duration-700 ease-in-out bg-black  z-40 ">
	</div>
	<!-- Main -->
	<main v-if="isValidated" id="main" class="pt-[80px]">
		<RouterView />
	</main>

	<!-- Footer -->
	<footer v-if="isValidated" id="footer">
		<div class="w-full ">
			<div class="">

			</div>
		</div>
	</footer>
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

	@media screen and (min-width: 768px) {
		position: relative;
	}
}

.menu-item:hover {
	transition: color 0.3s ease;
	color: rgb(109, 145, 148);
}


.chevron {
	position: absolute;
	right: 0;
	top: 35%;
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
