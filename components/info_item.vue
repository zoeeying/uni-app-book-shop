<template>
	<view class="info_item">
		<view class="image">
			<image :src="item.imgUrl"></image>
		</view>
		<view class="text">
			<view>{{item.title}}</view>
			<view>{{item.author}}</view>
			<view>出版时间：{{item.time}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['item']
	}
</script>

<style lang="scss">
	.info_item {
		display: flex;
		padding: 20rpx 20rpx 0;
		border-bottom: 1px solid #ccc;

		.image {
			height: 300rpx;
			width: 300rpx;

			image {
				height: 280rpx;
				width: 90%;
			}
		}

		.text {
			width: 450rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			view:nth-child(1){
				color: $book-shop-color;
				font-weight: bold;
				font-size: 36rpx;
			}
			view:nth-child(2){
				font-size: 32rpx;
				color: #333;
				margin-top: 3px;
			}
			view:nth-child(3){
				font-size: 30rpx;
				color: #333;
				margin-top: 6px;
			}
		}

	}
</style>
