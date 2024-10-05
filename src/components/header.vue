<script setup>

// Header Store
import { useHeaderStore } from '../stores/header.js';
const headerStore = useHeaderStore();


// Router
import { useRouter } from 'vue-router';
const router = useRouter();
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

.menu-item:hover .chevron {
	transform: rotate(-858deg);
	border-radius: 50%;
	opacity: 1;
	width: 8px;
	height: 8px;
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
</style>