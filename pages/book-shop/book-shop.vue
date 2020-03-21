<template>
	<view class="book_shop">
		<books-list :books="books"></books-list>
		<view class="bottom_line" v-if="isBottom">----- 我是有底线的 -----</view>
	</view>
</template>

<script>
	import booksList from '@/components/books-list.vue'
	export default {
		data() {
			return {
				books: [],
				page: 1,
				isBottom: false,
			}
		},
		components: {
			booksList
		},
		onLoad() {
			this.fetchBooks()
		},
		methods: {
			// 获取推荐书籍数据
			async fetchBooks(callback) {
				const data = await this.$xuRequest({
					url: '/api/books?page=' + this.page,
				})
				this.books = [...this.books, ...data]
				callback && callback()
			},
		},
		onReachBottom() {
			if (this.page === 3) {
				this.isBottom = true
				return
			}
			this.page++
			this.fetchBooks()
		},
		onPullDownRefresh() {
			this.isBottom = false
			this.page = 1
			setTimeout(() => {
				this.fetchBooks(() => {
					this.books.length = 10
					uni.stopPullDownRefresh()
				})
			}, 500)
		}
	}
</script>

<style>
	.book_shop {
		background: #f2f2f2;
		padding-top: 20rpx;
	}

	.bottom_line {
		text-align: center;
		line-height: 50px;
		font-size: 30rpx;
		color: #666666;
	}
</style>
