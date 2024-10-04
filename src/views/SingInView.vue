<script setup>
import { ref, reactive } from 'vue';
import Google from 'vue-material-design-icons/Google.vue';
import Email from 'vue-material-design-icons/Email.vue';


import { useSingInStore } from '../stores/singIn.js';
const SingInStore = useSingInStore();

</script>

<template>
	<!-- Sing-in Field -->
	<section id="verification">
		<div class="w-full h-[100vh] bg-white">
			<div
				class="w-full h-full flex flex-col gap-10 lg:flex-row md:flex-row md:w-[90vw] md:h-[90vh] lg:w-[90vw] lg:h-[90vh] justify-center items-center">

				<div class="flex w-[60%] md:w-[100%] gap-2 pt-8  flex-col items-center">
					<h1 class="text-center sm:text-4xl md:text-5xl lg:text-5xl font-serif text-3xl">Welcome to Kogpa Accademy
					</h1>
					<p
						class=" text-center text-gray-500 text-[0.8rem] text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] font-light">
						Enter your email and password to acces your account</p>
				</div>

				<div class="flex w-[50%] sm:w-[40%] md:w-[30%] lg:w-[30%] flex-col pb-10 gap-8">

					<h1 class="text-center sm:text-3xl md:text-4xl lg:text-4xl font-serif text-3xl">Sign in</h1>

					<p>
						<input
							class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							type="email" placeholder="Email" v-model="SingInStore.user.email">
					</p>

					<p class="text-red-500 text-[0.7rem]" v-if="SingInStore.errMsgs.errorEmail">{{
						SingInStore.errMsgs.errorEmail }}</p>

					<p>
						<input
							class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							type="password" placeholder="Password" v-model="SingInStore.user.password">
					</p>

					<p class="text-red-500 text-[0.7rem]" v-if="SingInStore.errMsgs.errorPassword">{{
						SingInStore.errMsgs.errorPassword }}</p>

					<p class="text-red-500 text-[0.7rem]" v-if="SingInStore.errMsgs.notFound">{{ SingInStore.errMsgs.notFound
						}}</p>

					<p class="text-red-500 text-[0.7rem]" v-if="SingInStore.errMsgs.default">{{ SingInStore.errMsgs.default
						}}</p>
					<p>
						<button @click="SingInStore.singIn"
							class="bg-gradient-to-r from-cyan-600 flex gap-2 items-center justify-center w-full to-blue-200 transition-all dutation-500 ease-in-out text-white py-2 px-4 rounded rounded-lg">
							Sign in with Email
							<Email size="20" />
						</button>
					</p>

					<p>
						<button @click="SingInStore.singInWithGoogle"
							class="bg-gradient-to-r from-cyan-200 flex gap-2 items-center justify-center w-full to-blue-500 transition-all dutation-500 ease-in-out text-white py-2 px-4 rounded rounded-lg">
							<span>Sign in with Google</span>
							<Google size="20" />
						</button>
					</p>

				</div>
			</div>
		</div>
	</section>
</template>