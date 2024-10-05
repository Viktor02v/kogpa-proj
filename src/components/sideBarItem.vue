<script setup>
import { computed } from 'vue';
import Home from 'vue-material-design-icons/HomeAccount.vue';
import Folder from 'vue-material-design-icons/FolderAccountOutline.vue';
import MailBox from 'vue-material-design-icons/MailboxOpenOutline.vue';
import Book from 'vue-material-design-icons/BookAccountOutline.vue';
import BookAlert from 'vue-material-design-icons/BookAlert.vue';
import Account from 'vue-material-design-icons/AccountCard.vue';
import Tools from 'vue-material-design-icons/Tools.vue';


// Define props
const props = defineProps({
	text: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	iconComponent: {
		type: String,
		required: true,
	},
	iconColor: {
		type: String,
		required: true,
	},
});

// Map icons dynamically
const iconMap = {
	Home,
	Contact: MailBox,
	Students: Book,
	Applicant: BookAlert,
	College: Folder,
	Account: Account,
	Tools: Tools,
};

// Dynamically resolve the icon component based on the prop value
const activeIconComponent = computed(() => iconMap[props.iconComponent] || null);
</script>

<template>
	<ul class="bar-menu-block border-b border-gray-200  shadow-sm gap-3 font-light text-base flex justify-center text-white w-full min-h-20 items-center">
		
		<!-- Use dynamic component binding -->

		<div v-if="props.description" :class="props.description ? 'flex flex-col gap-3 w-full items-center justify-center' : ''" class="">
			<div class="flex gap-3 w-full items-center justify-center">
			<component v-if="activeIconComponent" :is="activeIconComponent" :fillColor="iconColor" />
			<li class="menu-bar-item">{{ text }}</li>
		</div>
			<li>
			<p class="text-gray-400  text-[0.7rem]">{{ description }}</p>
		</li>
		</div>
		
		<div v-else class="flex gap-3 w-full items-center justify-center">
			<component v-if="activeIconComponent" :is="activeIconComponent" :fillColor="iconColor" />
			<li class="menu-bar-item">{{ text }}</li>
		</div>

	

	</ul>
</template>

<style scoped>
.menu-bar-item {
	padding-right: 1.2rem;
	color: rgb(120, 120, 120);
}

.menu-bar-item:active {
	transition: color 0.3s ease;
	color: rgb(255, 255, 255);
}
</style>
