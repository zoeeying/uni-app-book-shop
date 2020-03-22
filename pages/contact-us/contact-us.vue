<template>
	<view class="contact_us">
		<image src="https://wx2.sinaimg.cn/mw690/600a9336gy1gd0w3h9zj8j20u00bon0b.jpg"></image>
		<view class="info">
			<view @click="callPhone"><text>联系电话：</text>17502514869（点击拨打）</view>
			<view><text>联系地址：</text>江苏省南京市六合区程桥镇古墩村周营组14号</view>
		</view>
		<view class="map">
			<map :longitude="longitude" :latitude="latitude" :markers="markers" :scale="scale"></map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 118.717516,
				latitude: 32.458977,
				scale: 13,
				markers: [{
					longitude: 118.717516,
					latitude: 32.458977,
					iconPath: '../../static/yixiaxu.png',
					width: 50,
					height: 50,
				}]
			}
		},
		methods: {
			callPhone() {
				uni.makePhoneCall({
					phoneNumber: '17502514869'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact_us {
		image {
			width: 750rpx;
			height: 292rpx;
		}

		.info {
			padding: 30rpx 30rpx;
			font-size: 34rpx;

			view:nth-child(1) {
				padding-bottom: 16rpx;
			}

			view:nth-child(2) {
				padding-top: 16rpx;
			}
			text {
				font-weight: bold;
				font-size: 36rpx;
			}
		}

		.map {
			padding: 0 20rpx 20rpx 20rpx;

			map {
				width: 710rpx;
				height: 710rpx;
			}
		}
	}
</style>
