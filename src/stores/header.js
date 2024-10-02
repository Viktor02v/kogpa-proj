import { ref, computed, reactive, markRaw } from 'vue'
import { defineStore } from 'pinia'
import Menu from 'vue-material-design-icons/Menu.vue';
import Close from 'vue-material-design-icons/Close.vue';

export const useHeaderStore = defineStore('header', () => {
	
	const toggles = reactive({
		desktopMenuOpen: ref(false),
		mobileMenuOpen: ref(false)
	});

   let lastScrollTop = 0;
   let scrollingDown = ref(false);
   let headerVisible = ref(true);

	const headerIconMap = {
		menu: markRaw(Menu),
		close: markRaw(Close),
	};

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
	};
return { toggles , lastScrollTop, scrollingDown, headerIconMap, headerVisible, handleScroll }
})
