<template>
	<view>
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        src: ''
			}
		},
    onLoad(option) {
		  this.src = option.fileUrl
    },
		methods: {

		}
	}
</script>

<style>

</style>
