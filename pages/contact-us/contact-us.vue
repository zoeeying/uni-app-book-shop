<template>
	<view class="contact_us">
		<image src="https://wx4.sinaimg.cn/mw690/600a9336gy1gd1pq8n1x6j20xc0ctq5w.jpg"></image>
		<view class="info">
			<view @click="callPhone"><b>联系电话：</b>17502514869（点击拨打）</view>
			<view><b>联系地址：</b>江苏省南京市六合区程桥镇古墩村周营组14号</view>
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
			height: 288rpx;
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
