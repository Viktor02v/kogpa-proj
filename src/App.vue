<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Menu from 'vue-material-design-icons/Menu.vue';
import Close from 'vue-material-design-icons/Close.vue';
import Home from 'vue-material-design-icons/HomeAccount.vue';
import Folder from 'vue-material-design-icons/FolderAccountOutline.vue';

import MailBox from 'vue-material-design-icons/MailboxOpenOutline.vue';
import Book from 'vue-material-design-icons/BookAccountOutline.vue';
import BookAlert from 'vue-material-design-icons/BookAlert.vue';
import Language from 'vue-material-design-icons/Earth.vue';


let menuOpen = ref(false);

let lastScrollTop = 0;
let scrollingDown = ref(false);
let headerVisible = ref(true);

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
	<header id="header" class="header fixed w-full transition-all duration-500 ease-in-out"
		:class="headerVisible ? 'opacity-100 ' : 'opacity-0 -translate-y-full'">
		<div class=" shadow-md flex items-center h-[80px] w-full">
			<nav id="navigation" class="w-full">

				<!-- Mobile Adaptation -->
				<ul class="menu flex justify-center md:hidden">
					<li class="menu-item">
						<img width="160" src="/icons/kogpa-logo.png" alt="logo">
					</li>
					<li @click="menuOpen = !menuOpen" class="menu-item fixed top-7 right-5">
						<component :is="menuOpen ? Close : Menu" />
					</li>
				</ul>

				<!-- Desktop Adaptation -->
				<ul class="menu hidden px-5 md:flex md:items-center  w-full">
					<li class="logo">
						<img width="150" src="/icons/kogpa-logo.png" alt="logo">
					</li>
					<ul class="menu-list flex justify-around w-[50%] text-[1.2rem]">
						<div class="flex md:relative items-center">
							<li class="menu-item">
								About
								<span class="chevron chevron-down"></span>
							</li>
						</div>
						<div class="flex md:relative items-center">
							<li class="menu-item">
								Contact
								<span class="chevron chevron-down"></span>
							</li>
						</div>
						<div class="flex md:relative items-center">
							<li class="menu-item ">
								Students
								<span class="chevron chevron-down"></span>
							</li>
						</div>
						<div class="flex md:relative items-center">
							<li class="menu-item">
								Applicant
								<span class="chevron chevron-down"></span>
							</li>
						</div>
						<div class="flex md:relative items-center">
							<li class="menu-item">
								Profession College
								<span class="chevron chevron-down"></span>
							</li>
						</div>
					</ul>
				</ul>
			</nav>
		</div>
	</header>

	<!-- Mobile Sidebar -->
	<section id="sideBar" class="md:hidden relative">
		<div
			class="fixed w-[calc(100vw-550px)] h-[calc(100vh-80px)] border-l border-gray-200 shadow-lg  shadow-gray-800 bg-white flex flex-col justify-between top-[80px] right-0">
			<ul class="flex  flex-col  gap-0">
				<div
					class="bar-menu-block border-b border-gray-200 shadow-sm gap-3 font-light text-[1.0rem] flex justify-center text-white  w-full  h-[80px]  items-center">
					<Home fillColor="rgb(120, 120, 120)" />
					<li class="menu-bar-item">
						Home
					</li>
				</div>

				<div
					class="bar-menu-block border-b border-gray-200 shadow-sm gap-3 font-light text-[1.0rem] flex justify-center text-white  w-full  h-[80px]  items-center">
					<MailBox fillColor="rgb(120, 120, 120)" />
					<li class="menu-bar-item">
						Contact
					</li>
				</div>

				<div
					class="bar-menu-block border-b border-gray-200 shadow-sm gap-3 font-light text-[1.0rem] flex justify-center text-white  w-full  h-[80px]  items-center">
					<Book fillColor="rgb(120, 120, 120)" />
					<li class="menu-bar-item">
						Students
					</li>
				</div>

				<div
					class="bar-menu-block border-b border-gray-200 shadow-sm gap-3 font-light text-[1.0rem] flex justify-center text-white  w-full  h-[80px]  items-center">
					<BookAlert fillColor="rgb(120, 120, 120)" />
					<li class="menu-bar-item">
						Applicant
					</li>
				</div>

				<div
					class="bar-menu-block border-b border-gray-200 shadow-sm gap-3 font-light text-[1.0rem] flex justify-center text-white  w-full  h-[80px]  items-center">
					<Folder fillColor="rgb(120, 120, 120)" />
					<li class="menu-bar-item">
						College
					</li>
				</div>

			</ul>

			<div id="language"
				class="bar-menu-block border-b border-gray-200 shadow-sm gap-3 font-light text-[1.0rem] flex justify-center text-white  w-full  h-[80px]  items-center">
				<div class="flex gap-1 items-center text-[15px]">
					<Language size="17" fillColor="rgb(120, 120, 120)" />
					<span class="menu-bar-item__lang">ENG</span>
				</div>
			</div>
		</div>
	</section>
	<!-- Mobile Sidebar: End -->

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

.menu-bar-item {
	padding-right: 1.2rem;
	color: rgb(120, 120, 120);
}

.menu-bar-item:active {
	transition: color 0.3s ease;
	color: rgb(255, 255, 255);
}

.menu-bar-item__lang {
	color: rgb(120, 120, 120);

}
</style>
