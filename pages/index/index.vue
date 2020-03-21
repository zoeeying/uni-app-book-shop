<template>
	<view class="index">
		<!-- 轮播图 -->
		<swiper indicator-dots circular>
			<swiper-item v-for="item in carousels" :key="item.id">
				<image :src="item.imgUrl"></image>
			</swiper-item>
		</swiper>
		<!-- 导航 -->
		<view class="nav">
			<view v-for="item in navs" :key="item.text" class="nav_item" @click="navLink(item)">
				<view :class="item.class"></view>
				<text>{{item.text}}</text>
			</view>
		</view>
		<!-- 推荐 -->
		<view class="recommend">
			<view class="title">· 特 / 别 / 推 / 荐 ·</view>
			<books-list :books="books"></books-list>
		</view>
	</view>
</template>

<script>
	import booksList from '@/components/books-list.vue'
	export default {
		data() {
			return {
				carousels: [],
				navs: [{
						text: '书铺',
						class: 'iconfont icon-shudian',
						path: '/pages/book-shop/book-shop'
					},
					{
						text: '畅销榜',
						class: 'iconfont icon-bangdan',
						path: '/pages/best-sellers/best-sellers'
					},
					{

						text: '新书榜',
						class: 'iconfont icon-ziyuan',
						path: '/pages/new-books/new-books'
					},
					{
						text: '联系我们',
						class: 'iconfont icon-lianxi',
						path: '/pages/contact-us/contact-us'
					},
				],
				books: [],
			}
		},
		components: {
			booksList
		},
		onLoad() {
			this.fetchCarousels()
			this.fetchBooks()
		},
		methods: {
			// 获取轮播图数据
			async fetchCarousels() {
				const data = await this.$xuRequest({
					url: '/api/carousels',
				})
				this.carousels = data
			},
			// 获取推荐书籍数据
			async fetchBooks() {
				const data = await this.$xuRequest({
					url: '/api/books',
				})
				this.books = data
			},
			navLink(item) {
				uni.navigateTo({
					url: item.path
				})
			}
		}
	}
</script>

<style lang="scss">
	.index {
		swiper {
			width: 750rpx;
			height: 292rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}

		.nav {
			display: flex;
			padding: 20px 0 15px;

			.nav_item {
				width: 25%;
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					background: $book-shop-color;
					border-radius: 60rpx;
					margin: 0 auto;
					line-height: 120rpx;
					font-size: 60rpx;
					color: #FFFFFF;
				}

				.icon-lianxi,
				.icon-bangdan {
					font-size: 70rpx;
				}

				text {
					font-size: 30rpx;
				}
			}
		}

		.recommend {
			background: #f2f2f2;

			.title {
				line-height: 50px;
				text-align: center;
				color: $book-shop-color;
			}
		}
	}
</style>
