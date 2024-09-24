<script setup>
import { defineProps } from 'vue';
import Home from 'vue-material-design-icons/HomeAccount.vue';
import Folder from 'vue-material-design-icons/FolderAccountOutline.vue';
import MailBox from 'vue-material-design-icons/MailboxOpenOutline.vue';
import Book from 'vue-material-design-icons/BookAccountOutline.vue';
import BookAlert from 'vue-material-design-icons/BookAlert.vue';

const props = defineProps({
	text: {
		type: String,
		required: true
	}
})
</script>

<template>
	<div
		class="bar-menu-block border-b border-gray-200 shadow-sm gap-3 font-light text-[1.0rem] flex justify-center text-white  w-full  min-h-[80px] items-center">
		<Home v-if="text === 'Home'" fillColor="rgb(120, 120, 120)" />
		<MailBox v-if="text === 'Contact'" fillColor="rgb(120, 120, 120)" />
		<Book v-if="text === 'Students'" fillColor="rgb(120, 120, 120)" />
		<BookAlert v-if="text === 'Applicant'" fillColor="rgb(120, 120, 120)" />
		<Folder v-if="text === 'College'" fillColor="rgb(120, 120, 120)" />
		<li class="menu-bar-item ">
			{{ text }}
		</li>
	</div>
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
