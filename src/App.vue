<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import sideBarItem from './components/sideBarItem.vue';
import verificationField from './components/verificationField.vue';

import Menu from 'vue-material-design-icons/Menu.vue';
import Close from 'vue-material-design-icons/Close.vue';


import Language from 'vue-material-design-icons/Earth.vue';


// For header
const toggles = reactive({
	desktopMenuOpen: ref(false),
	mobileMenuOpen: ref(false)
});

let lastScrollTop = 0;
let scrollingDown = ref(false);
let headerVisible = ref(true);

const headerIconMap = {
	menu: Menu,
	close: Close,
};

function handleScroll() {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	// Toggle visibility based on scroll direction
	if (scrollTop > lastScrollTop) {
		scrollingDown.value = true;
		headerVisible.value = false;
	} else {
		scrollingDown.value = false;
		headerVisible.value = true;

	}
	lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Ensure lastScrollTop doesn't go below 0
};

// Add scroll event listener
onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

// Remove event listener on unmount
onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
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

const submit = () => {
	if (!isFormValid.value) {
		alert('Form is not valid');
	} else {
		submited.value = true;
		alert(`You have successfully signed in as a ${user.value.name}`);
		setTimeout(() => {
			isValidated.value = true;
			console.log('isValidated set to true');
		}, 1000); // 20 seconds delay (20,000 milliseconds)
	}
};

</script>




<template>
	<!-- Header -->
	<header id="header" class="header fixed w-full  transition-all duration-500 ease-in-out" :class="{
		'opacity-100 ': headerVisible,
		'opacity-0 -translate-y-full': !headerVisible,
		'shadow-lg shadow-blue-100': toggles.desktopMenuOpen
	}">
		<div class=" shadow-md flex items-center px-20 h-[81px] w-full">
			<nav id="navigation" class="w-full">
				<!-- Mobile Adaptation -->
				<ul class="menu flex justify-center  w-full md:hidden">
					<li class="menu-item">
						<img width="160" src="/icons/kogpa-logo.png" alt="Kogpa Accademy Logo">

					</li>
					<li v-if="isValidated" @click="toggles.mobileMenuOpen = !toggles.mobileMenuOpen"
						class="menu-item transition-all duration-500  fixed top-7 right-5"
						:aria-expanded="toggles.mobileMenuOpen.toString()" aria-controls="navigation">
						<component :is="toggles.mobileMenuOpen ? Close : Menu"
							:key="toggles.mobileMenuOpen ? headerIconMap.close : headerIconMap.menu" />
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

					<li @mouseenter="toggles.desktopMenuOpen = true" @mouseleave="toggles.desktopMenuOpen = false"
						class="menu-list lg:pl-10 flex justify-around lg:w-[70vw] md:text-[0.9rem] md:w-[70vw]  lg:text-[1.2rem]"
						:class="!isValidated ? 'hidden' : ''">

						<div class="menu-item ">
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

				<div class="flex w-[60%] md:w-[100%] gap-2  flex-col items-center">
					<h3 class="text-center sm:text-4xl md:text-5xl lg:text-5xl font-serif text-3xl">Welcome to Kogpa Accademy
					</h3>
					<p
						class=" text-center text-gray-500 text-[0.8rem] text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] font-light">
						Enter your email and password to acces your account</p>
				</div>

				<div class="flex w-[50%] sm:w-[40%] md:w-[30%] lg:w-[30%] flex-col gap-8">

					<verificationField v-model="user.name" :component-data="nameComponent" @form-validate="validateForm" />

					<verificationField v-model="user.password" :component-data="passwordComponent"
						@form-validate="validateForm" />

					<verificationField v-model="user.email" :component-data="emailComponent" @form-validate="validateForm" />

					<button @click="submit"
						class="bg-gradient-to-r from-cyan-900 to-blue-200 transition-all dutation-500 ease-in-out text-white py-2 px-4 rounded rounded-lg"
						:class="submited ? 'w-[80px] transition-all duration-500 ease-in-out' : ''">
						<p v-if="!submited" class="font-serif text-[0.9rem]">Sign in</p>
						<p v-else class="font-serif text-[0.9rem]">Verified</p>
					</button>
				</div>
			</div>
		</div>
	</section>


	<!-- Mobile Sidebar -->
	<aside id="sideBar" class="relative z-50 md:hidden">
		<div :aria-hidden="!(toggles.mobileMenuOpen && headerVisible && lastScrollTop > 0)"
			:class="toggles.mobileMenuOpen && headerVisible && lastScrollTop >= 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'"
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
		:class="toggles.mobileMenuOpen && headerVisible && lastScrollTop >= 0 || toggles.desktopMenuOpen ? 'opacity-60' : 'opacity-0'"
		class="w-screen fixed h-screen transition-all duration-700 ease-in-out bg-black  z-40 ">
	</div>
	<!-- Main -->
	<main v-if="isValidated" id="main" class="pt-[80px]">
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		v
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.



		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		v
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.



		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		v
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.



		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.

		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur atque, veniam, facilis nemo sequi
		quasi tenetur sunt similique itaque deserunt voluptate reiciendis dolor ratione perspiciatis, deleniti impedit
		numquam debitis.
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
