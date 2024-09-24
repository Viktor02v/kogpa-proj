<script setup>
import { computed } from 'vue';
import Home from 'vue-material-design-icons/HomeAccount.vue';
import Folder from 'vue-material-design-icons/FolderAccountOutline.vue';
import MailBox from 'vue-material-design-icons/MailboxOpenOutline.vue';
import Book from 'vue-material-design-icons/BookAccountOutline.vue';
import BookAlert from 'vue-material-design-icons/BookAlert.vue';

// Define props
const props = defineProps({
  text: {
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
};

// Dynamically resolve the icon component based on the prop value
const activeIconComponent = computed(() => iconMap[props.iconComponent] || null);
</script>

<template>
  <ul
    class="bar-menu-block border-b border-gray-200 shadow-sm gap-3 font-light text-base flex justify-center text-white w-full min-h-20 items-center">
    
    <!-- Use dynamic component binding -->
    <component v-if="activeIconComponent" :is="activeIconComponent" :fillColor="iconColor" />
    
    <li class="menu-bar-item">{{ text }}</li>
  </ul>
</template>

<style scoped>
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
</style>
