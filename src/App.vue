<script setup>
import { ref } from 'vue';
import Menu from 'vue-material-design-icons/Menu.vue';
import Close from 'vue-material-design-icons/Close.vue';

let menuOpen = ref(false);

let lastScrollTop = 0;
let scrolling = ref(false);

window.addEventListener("scroll", function () {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		scrolling.value = true;
	}
	else {
		scrolling.value = false;
	}
	lastScrollTop = scrollTop;

})

</script>

<template>
	<!-- Header:start -->
	<header id="header" class="header h-[60px] relative">
		<div
			:class="scrolling ? 'bg-[#ffffff] transition duration-500 ease-in h-[80px]' : 'bg-transparent transition duration-500 easy-out  h-[60px] '"
			class="fixed flex items-center h-[60px]  w-full">
			<nav id="navigation" class=" w-full">
				<!-- mobile addaptation:start -->
				<ul  class="menu flex justify-center md:hidden">
					<li class="menu-item"><img width="160" src="/icons/kogpa-logo.png" alt="logo"></li>

					<li @click="menuOpen = !menuOpen" v-if="!menuOpen"
						:class="!menuOpen ? 'transition duration-500' : 'transition duration-500'"
						class=" menu-item fixed top-5 right-5">
						<Menu />

					</li>
					<li @click="menuOpen = !menuOpen" v-else-if="menuOpen"
						:class="menuOpen ? 'transition duration-500 ' : 'transition duration-500 '"
						class="menu-item fixed top-5 right-5">
						<Close />
					</li>
				</ul>
				<!-- mobile addaptation:end -->

				<!-- desktop addaptation:start	 -->
				<ul  class="menu md:w-full  md:gap-20  md:block md:flex  md:items-center hidden">
					<li class="logo px-5"><img width="150" src="/icons/kogpa-logo.png" alt="logo"></li>
					<ul :class="scrolling ? 'text-[1.5rem] transition duration-500 ease-in': 'text-[1.2rem] transition duration-500 ease-out'" class="menu-list flex justify-around w-[50%]">
						<div class="flex items-center">
							<li class="menu-item md:relative">
								About
								<span class="chevron chevron-down"></span>
							</li>
						</div>

						<div class="flex items-center">
							<li class="menu-item md:relative">
								Contact
								<span class="chevron chevron-down"></span>
							</li>
						</div>

						<div class="flex items-center">
							<li class="menu-item md:relative">
								Students
								<span class="chevron chevron-down"></span>
							</li>
						</div>

						<div class="flex items-center">
							<li class="menu-item md:relative">
								Applicant
								<span class="chevron chevron-down"></span>
							</li>
						</div>

						<div class="box flex items-center">
							<li class="menu-item md:relative">
								Profession College
								<span class="chevron chevron-down"></span>
							</li>
						</div>
					</ul>

				</ul>
				<!-- desktop addaptation:end -->
			</nav>
		</div>
	</header>
	<main>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!

		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		<var>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem
			earum voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet
			maxime!v</var>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		v
		v
		v
		v
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		v
		v
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!Lorem
		ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
		voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!


		<var>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem
			earum voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet
			maxime!
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
			voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet
			maxime!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus
			dolorem earum voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus
			eveniet maxime!
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
			voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
			voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
			voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
			voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
			voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
			voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
			voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse obcaecati dolor quisquam natus dolorem earum
			voluptatibus at libero aliquam dolorum tempore voluptates, est harum deleniti, vitae possimus eveniet maxime!
		</var>
	</main>
</template>

<style scoped>
.menu-item {
	/* font-size: 1.2rem; */
	padding-right: 1.2rem;
	/* Space for the chevron */
}

.menu-item:hover {
	transition: 0.3s ease;
	color: rgb(109, 145, 148);
	/* Space for the chevron */
}

.chevron {
	/* Position the chevron */
	position: absolute;
	right: 0;
	top: 35%;
	display: inline-block;
	margin-left: 0.5rem;
	width: 8px;
	height: 8px;
	border-right: 2px solid rgba(2, 37, 10, 0.534);
	/* Right side of the chevron */
	border-bottom: 2px solid rgb(92, 3, 3);
	/* Bottom side of the chevron */
	transform: rotate(45deg);
	transition: transform 0.3s ease;
}

.menu-item:hover .chevron {
	transform: rotate(585deg);
	background: rgb(109, 145, 148);
	border-radius: 50%;
	transition: 0.6s ease-out;
	/* Flip to create an upward chevron */
}
</style>
