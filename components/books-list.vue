<template>
	<view class="books">
		<view class="one_book" v-for="(item,index) in books" :key="index" @click="goDetail(item)">
			<image :src="item.image"></image>
			<view class="name">{{item.title}}</view>
			<view class="publish">{{item.author[0]}}/{{item.publisher}}/{{item.pubdate}}</view>
			<view class="price">￥{{item.price}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['books'],
		methods: {
			goDetail(item){
				uni.navigateTo({
					url: '/pages/book-detail/book-detail?id=' + item.id
				})
			}
		}
	}
</script>

<style lang="scss">
	.books {
		padding: 0 20rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.one_book {
			width: 345rpx;
			padding: 15px 10px;
			margin-bottom: 20rpx;
			background: #fff;

			image {
				width: 280rpx;
				height: 200px;
				display: block;
				margin: 0 auto;
			}


			.name {
				font-size: 32rpx;
				font-weight: bold;
				margin-top: 10px;
			}

			.publish {
				font-size: 30rpx;
				margin-top: 5px;
			}

			.price {
				font-size: 36rpx;
				font-weight: bold;
				color: $book-shop-color;
				margin-top: 4px;
			}



		}
	}
</style>
