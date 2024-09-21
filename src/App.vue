<script setup>
import { ref } from 'vue';
import Menu from 'vue-material-design-icons/Menu.vue';
import Close from 'vue-material-design-icons/Close.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue';

let menuOpen = ref(false);

// State for each item to control the Chevron
let isOpen = ref({
	about: false,
	contact: false,
	students: false,
	applicant: false,
	college: false
});

// Toggle function for each item
const toggleOpen = (item) => {
	isOpen.value[item] = !isOpen.value[item];
};

</script>

<template>
	<!-- Header:start -->
	<header id="header" class="header relative">
		<div class="fixed bg-[#fbfbfb] flex items-center h-[60px]  w-full">
			<nav id="navigation" class="w-full">
				<!-- mobile addaptation:start -->
				<ul class="menu flex justify-center md:hidden">
					<li class="menu-item"><img width="140" src="/icons/kogpa-logo.png" alt="logo"></li>

					<li @click="menuOpen = !menuOpen" v-if="!menuOpen"
						:class="!menuOpen ? 'transition duration-500' : 'transition duration-500'"
						class=" menu-item fixed top-5 right-5">
						<Menu />

					</li>
					<li @click="menuOpen = !menuOpen" v-if="menuOpen"
						:class="menuOpen ? 'transition duration-500 ' : 'transition duration-500 '"
						class="menu-item fixed top-5 right-5">
						<Close />
					</li>
				</ul>
				<!-- mobile addaptation:end -->

				<!-- desktop addaptation:start	 -->
				<ul class="menu md:w-full  md:gap-20  md:block md:flex  md:items-center hidden">
					<li class="menu-item px-5"><img width="150" src="/icons/kogpa-logo.png" alt="logo"></li>
					<ul class="menu-list flex justify-around w-[50%] w-full">

						<div class="flex items-center">
							<li class="menu-item">About</li>
						</div>

						<div class="flex items-center">
							<li class="menu-item">Contact</li>
						</div>

						<div class="flex items-center">
							<li class="menu-item">Students</li>
						</div>

						<div class="flex items-center">
							<li class="menu-item">Applicant</li>
						</div>

						<div class="flex items-center">
							<li class="menu-item">Proffesion College</li>
						</div>
						
					</ul>
				</ul>
				<!-- desktop addaptation:end -->
			</nav>
		</div>
	</header>
</template>

<style scoped></style>
