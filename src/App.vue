<script setup>
import Menu from 'vue-material-design-icons/Menu.vue';
</script>

<template>
	<!-- Header:start -->
	<header id="header" class="header relative">
		<div class="fixed flex items-center h-[60px] justify-center w-full">
			<nav id="navigation">
				<!-- mobile addaptation:start -->
				<ul class="menu md:hidden">
					<li class="menu-item"><img width="140" src="/icons/kogpa-logo.png" alt="logo"></li>
					<li class="menu-item fixed top-5 right-5">
						<Menu />
					</li>
				</ul>
				<!-- mobile addaptation:end -->

				<!-- desktop addaptation:start	 -->
				<ul class="menu hidden md:flex">
					<li class="menu-item"><img width="140" src="/icons/kogpa-logo.png" alt="logo"></li>
					<li class="menu-item">Home</li>
					<li class="menu-item">About</li>
					<li class="menu-item">Contact</li>
				</ul>
				<!-- desktop addaptation:end -->
			</nav>
		</div>
	</header>
</template>

<style></style>