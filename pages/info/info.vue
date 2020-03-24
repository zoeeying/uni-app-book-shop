<template>
	<view>
		<view :key="item.id" v-for="item in bookInfo" @click="goDetail(item)">
			<info-item :item="item"></info-item>
		</view>
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
			},
			goDetail(item) {
				uni.navigateTo({
					url: '/pages/info-detail/info-detail?id=' + item.id
				})
			}
		}
	}
</script>
