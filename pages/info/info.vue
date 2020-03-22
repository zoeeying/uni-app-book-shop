<template>
	<view>
		<info-item :key="item.id" v-for="item in bookInfo" :item="item"></info-item>
	</view>
</template>

<script>
	import infoItem from '@/components/info_item.vue'
	export default {
		data() {
			return {
				bookInfo: []
			}
		},
		components: {
			infoItem
		},
		onLoad() {
			this.fetchInfo()
		},
		methods: {
			async fetchInfo() {
				const res = await this.$xuRequest({
					url: '/api/bookInfo'
				})
				this.bookInfo = res
			}
		}
	}
</script>

<style>

</style>
