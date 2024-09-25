<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import sideBarItem from './components/sideBarItem.vue';

import Menu from 'vue-material-design-icons/Menu.vue';
import Close from 'vue-material-design-icons/Close.vue';


import Language from 'vue-material-design-icons/Earth.vue';


let menuOpen = ref(false);

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
}

// Add scroll event listener
onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

// Remove event listener on unmount
onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>




<template>
	<!-- Header -->
	<header id="header" class="header fixed w-full transition-all duration-500 ease-in-out"
		:class="headerVisible ? 'opacity-100 ' : 'opacity-0 -translate-y-full'">
		<div class=" shadow-md flex items-center h-[81px] w-full">
			<nav id="navigation" class="w-full">
				<!-- Mobile Adaptation -->
				<ul class="menu flex justify-center md:hidden">
					<li class="menu-item">
						<img width="160" src="/icons/kogpa-logo.png" alt="Kogpa Accademy Logo">
					</li>
					<li @click="menuOpen = !menuOpen" class="menu-item transition-all duration-500  fixed top-7 right-5"					
						:aria-expanded="menuOpen.toString()" aria-controls="navigation">
						<component  :is="menuOpen ? Close : Menu" :key="menuOpen ? headerIconMap.close : headerIconMap.menu" />
					</li>
				</ul>

				<!-- Desktop Adaptation -->
				<ul class="menu hidden px-5 md:flex md:items-center w-[100vw]">
					<li class="logo">
						<img width="150" src="/icons/kogpa-logo.png" alt="logo">
					</li>
					<li class="menu-list flex justify-around lg:w-[60vw] md:w-[100vw] text-[1.2rem]">
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

	<!-- Mobile Sidebar -->
	<aside id="sideBar" class="relative z-50 md:hidden">
		<div :aria-hidden="!(menuOpen && headerVisible && lastScrollTop > 0)"
			:class="menuOpen && headerVisible && lastScrollTop >= 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'"
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
	<div :class="menuOpen && headerVisible && lastScrollTop >= 0 ? 'opacity-60' : 'opacity-0'"
		class="w-screen fixed h-screen transition-all duration-700 ease-in-out bg-black  z-40 ">
	</div>
	<!-- Main -->
	<main class="pt-[80px]">
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
	<footer>
		<div></div>
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
	width: 8px;
	height: 8px;
	border-right: 2px solid rgba(2, 37, 10, 0.534);
	border-bottom: 2px solid rgb(92, 3, 3);
	transform: rotate(45deg);
	transition: transform 0.3s ease;
	border-radius: 50%;
}

.menu-item:hover .chevron {
	transform: rotate(-858deg);
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
