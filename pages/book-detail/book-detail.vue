<template>
	<view class="book_detail">
		<view class="image">
			<image :src="detail.image" mode="aspectFit"></image>
		</view>
		<view class="middle">
			<view class="title">{{detail.title}}</view>
			<view class="author">{{detail.author[0]}}</view>
			<view class="price">￥{{detail.price}}</view>
		</view>
		<view class="detail">
			<image :src="detail.detail"></image>
		</view>
		<view class="goods_nav">
			<uni-goods-nav :fill="true" :options="options" :button-group="buttonGroup"  @click="onClick" @buttonClick="buttonClick" ></uni-goods-nav>
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				detail: {},
				options: [{
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png',
					text: '客服'
				}, {
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
					text: '店铺'
				}, {
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		components: {
			uniGoodsNav
		},
		methods: {
			async fetchDetail(id) {
				const res = await this.$xuRequest({
					url: '/api/bookDetail?id=' + id
				})
				this.detail = res
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		},
		onLoad(options) {
			this.fetchDetail(options.id)
		}
	}
</script>

<style lang="scss">
	.book_detail {
		padding: 20rpx;
		padding-bottom: 55rpx;
		.image {
			text-align: center;
			width: 710rpx;

			image {
				width: 600rpx;
			}
		}

		.middle {
			text-align: center;

			.title {
				font-size: 44rpx;
				font-weight: bold;
				margin-top: 10px;
			}

			.author {
				font-size: 34rpx;
				margin-top: 5px;
			}

			.price {
				margin-top: 5px;
				margin-bottom: 10px;
				color: $book-shop-color;
			}
		}

		.detail {
			image {
				width: 710rpx;
				height: 7000rpx;
			}
		}
		.goods_nav {
			position: fixed;
			bottom: 0;
			width: 100%;
		}
	}
</style>
