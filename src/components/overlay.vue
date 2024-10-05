<script setup>
// Pinia stores
// Header Store
import { useHeaderStore } from '../stores/header.js';
const headerStore = useHeaderStore();
</script>

<template>
			<div
			:class="headerStore.toggles.mobileMenuOpen && headerStore.headerVisible && headerStore.lastScrollTop >= 0 || headerStore.toggles.desktopMenuOpen ? 'opacity-60' : 'opacity-0'"
			class="w-screen fixed h-screen transition-all duration-700 ease-in-out bg-black  z-20 ">
		</div>
</template>