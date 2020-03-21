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
			<view v-for="item in navs" :key="item.text" class="nav_item">
				<view :class="item.class"></view>
				<text>{{item.text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				carousels: [],
				navs: [{
						text: '书铺',
						class: 'iconfont icon-shudian'
					},
					{
						text: '畅销榜',
						class: 'iconfont icon-changxiaopaiming'
					},
					{

						text: '新书榜',
						class: 'iconfont icon-ziyuan'
					},
					{
						text: '豆瓣榜单',
						class: 'iconfont icon-douban'
					},
				],
			}
		},
		onLoad() {
			this.fetchCarousels()
		},
		methods: {
			async fetchCarousels() {
				const data = await this.$xuRequest({
					url: '/api/carousels'
				})
				this.carousels = data
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

			.nav_item {
				width: 25%;
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					background: #FF9802;
					border-radius: 60rpx;
					margin: 12px auto 6px;
					line-height: 120rpx;
					font-size: 60rpx;
					color: #FFFFFF;
				}

				.icon-changxiaopaiming {
					font-size: 70rpx;
				}

				text {
					font-size: 30rpx;
				}
			}
		}
	}
</style>
