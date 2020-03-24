<template>
	<view class="info_detail">
		<view class="image">
			<image :src="detail.imgUrl" mode="aspectFit"></image>
		</view>
		<view class="title">{{detail.title}}</view>
		<view class="author">{{detail.author}}</view>
		<view class="content">
			<rich-text :nodes="detail.detail"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: {},
			}
		},
		methods: {
			async fetchDetail(id) {
				const res = await this.$xuRequest({
					url: '/api/bookInfoDetail?id=' + id
				})
				this.detail = res
			}
		},
		onLoad(options) {
			this.fetchDetail(options.id)
		}
	}
</script>

<style lang="scss">
	.info_detail {
		padding: 30rpx 20rpx 20rpx;

		.image {
			text-align: center;

			image {
				height: 500rpx;
			}
		}

		.title {
			color: $book-shop-color;
			font-size: 40rpx;
			font-weight: bold;
			text-align: center;
			margin-top: 10px;
		}

		.author {
			font-size: 34rpx;
			margin-top: 5px;
			text-align: center;
		}

		.content {
			margin-top: 20px;
			font-size: 36rpx;
			text-indent: 72rpx;
			line-height: 60rpx;
		}
	}
</style>
