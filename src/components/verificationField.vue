<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
	modelValue: {
		type: null,
		required: true,
	},
	componentData: {
		type: Object,
		default: () => {
			return {
				text: 'text',
				label: '',
				placeholer: '',
				errorMessage: null,
				pattern: '',
				minLength: null,
				maxLength: null
			}
		}
	}
})

const emits = defineEmits(['update:modelValue', 'form-validate'])

const localError = ref('');

const onImput = (e) => {
	emits('update:modelValue', e.target.value);
}

const validate = (event) => {

	const isPatternValid = props.componentData.pattern
		? !!event.target.value.match(new RegExp(props.componentData.pattern))
		: true;

	const isLengthValid = event.target.value.length >= props.componentData.minLength && event.target.value.length <= props.componentData.maxLength;

	if (!isPatternValid || !isLengthValid) {
		localError.value = 'Invalid input'
	} else {
		localError.value = ''
	}

	emits('form-validate', !!(isPatternValid && isLengthValid))
}
</script>

<template>
	<div class="flex items-start gap-1 flex-col">
		<label for=""><span>{{ componentData.label }}</span></label>
		<input
			class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5"
			:type="componentData.type" :placeholder="componentData.placeholder" @input="onImput" @blur="validate">
		<span v-if="componentData.errorMessage || localError">{{ componentData.errorMessage ||
			localError }}</span>
	</div>
</template>

<style setup></style>