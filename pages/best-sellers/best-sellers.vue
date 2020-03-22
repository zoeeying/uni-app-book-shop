<template>
	<view class="best_sellers">
		<scroll-view class="left" scroll-y>
			<view v-for="(item,index) in cates" :key="item.id" @click="handleClick(index,item.title)" :class="index === active ? 'active' : ''">
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="one_book" v-for="item in books" :key="item.id">
				<view class="image">
					<image :src="item.image" mode="aspectFit" @click="previewImg(item.image)"></image>
				</view>
				<view class="title">
					<text>{{item.title}}</text>
				</view>
				<view class="detail">
					<text>{{item.author[0]}}/{{item.publisher}}/{{item.pubdate}}</text>
				</view>
			</view>
			<view v-if="books.length === 0" class="none">暂无数据</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: 0,
				books: [],
			}
		},
		onLoad() {
			this.fetchCates()
		},
		methods: {
			async fetchCates() {
				const res = await this.$xuRequest({
					url: '/api/cates'
				})
				this.cates = res
				this.handleClick(0, this.cates[0].title)
			},
			async handleClick(index, tag) {
				this.active = index
				const res = await this.$xuRequest({
					url: `/api/bestsellers?tag=${tag}`
				})
				this.books = res
			},
			previewImg(current) {
				uni.previewImage({
					urls: this.books.map(item => item.image),
					current,
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;

		.best_sellers {
			height: 100%;
			display: flex;

			.left {
				height: 100%;
				width: 200rpx;
				border-right: 1px solid #eee;

				view {
					line-height: 50px;
					text-align: center;
					border-bottom: 1px solid #eee;
					font-size: 34rpx;
					color: #333333;
				}

				.active {
					background-color: $book-shop-color;
					color: #FFFFFF
				}
			}

			.right {
				height: 100%;
				width: 550rpx;
				text-align: center;

				.none {
					margin-top: 5px;
					color: #666666;
					font-size: 34rpx;
				}

				.one_book {
					width: 500rpx;
					margin: 20rpx auto 50rpx;

					.image {
						width: 300rpx;
						height: 190px;
						margin: 0 auto;

						image {
							width: 100%;
							height: 190px;
						}
					}

					.title {
						font-size: 38rpx;
						color: $book-shop-color;
						font-weight: bold;
						margin-top: 8px;

					}

					.detail {
						font-size: 32rpx;
						color: #333333;
						margin-top: 5px;
					}
				}
			}
		}
	}
</style>
