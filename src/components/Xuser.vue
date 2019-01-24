<template>
	<div data-v-23ed9342="" class="account view">
		<header data-v-d45bd762="" data-v-23ed9342="" id="mallHeader">
			<div data-v-d45bd762="">
				<a data-v-d45bd762="" rel="nofollow" class="back-btn common-header-btn">
					<i data-v-d45bd762="" class="icon iconfont icon-guanbi"></i></a>
					<span data-v-d45bd762="">我的健客</span>
				<div data-v-d45bd762="" class="toggle-btn common-header-btn">
					<a data-v-d45bd762="" rel="nofollow" class="common-width">
						<i ta-v-d45bd762="" class="icon iconfont icon-iconfontzhizuobiaozhun0257"></i>
					</a>
				</div>
			</div>
			<nav data-v-d45bd762="" style="display: none;">
				<ul data-v-38bce36f="" class="order-type">
					<li data-v-38bce36f="">
						<a data-v-38bce36f="" href="/user/userOrder?type=waitPay" class="type-item">
							<i data-v-38bce36f="" class="icon iconfont icon-no-payment"></i>
							待付款
						</a>
					</li>
					<li data-v-38bce36f="">
						<a data-v-38bce36f="" href="/user/userOrder?type=waitDelivery" class="type-item">
							<i data-v-38bce36f="" class="icon iconfont icon-send-goods"></i>
							待发货
						</a></li>
					<li data-v-38bce36f="">
						<a data-v-38bce36f="" href="/user/userOrder?type=waitReceiving" class="type-item">
							<i data-v-38bce36f="" class="icon iconfont icon-receiving"></i>待收货
						</a>
					</li>
					<li data-v-38bce36f="">
						<a data-v-38bce36f="" href="/user/userOrder?type=waitEvaluate" class="type-item">
							<i data-v-38bce36f="" class="icon iconfont icon-evaluate"></i>待评价
						</a>
						</li>
				</ul>
			</nav>
		</header>
		<section data-v-33bfad50="" data-v-23ed9342="" class="user-info">
			<div data-v-33bfad50="" class="user-avatar"><a data-v-33bfad50="" href="/user/userInfo" class=""><img
					data-v-33bfad50="" src="data:image/png;base64,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"
					alt="" style="width: 100%;"></a></div>
			<p data-v-33bfad50=""><a data-v-33bfad50="" href="/user/userInfo" class="user-name">132****8119</a><a
				data-v-33bfad50="" href="/user/member" class="level level1">普通</a></p>
			<p data-v-33bfad50="">
				<a data-v-33bfad50="" class="">健康币：0</a>
				<a data-v-33bfad50="" class="growth-value">成长值：0</a>
			</p>
			<div data-v-789e0544="" data-v-33bfad50="" class="wave wave">
				<div data-v-789e0544=""><canvas id="canvas1" width="414" height="32"></canvas></div>
				<div data-v-789e0544=""><canvas id="canvas2" width="414" height="32"></canvas></div>
				<div data-v-789e0544=""><canvas id="canvas3" width="414" height="32"></canvas></div>
			</div>
		</section>
		<section data-v-38bce36f="" data-v-23ed9342="" class="user-order">
			<div data-v-38bce36f="" class="my-order">
				<a data-v-38bce36f="">我的订单</a>
				<a data-v-38bce36f="" class="all-order">查看全部订单</a>
			</div>
			<ul data-v-38bce36f="" class="order-type">
				<li data-v-38bce36f="">
					<a data-v-38bce36f="" href="/user/userOrder?type=waitPay" class="type-item">
						<i data-v-38bce36f="" class="icon iconfont icon-wo"></i>
						待付款
					</a>
				</li>
				<li data-v-38bce36f="">
					<a data-v-38bce36f="" href="/user/userOrder?type=waitDelivery" class="type-item">
						<i data-v-38bce36f="" class="icon iconfont icon-wo"></i>
						待发货
					</a>
				</li>
				<li data-v-38bce36f="">
					<a data-v-38bce36f="" href="/user/userOrder?type=waitReceiving" class="type-item">
						<i data-v-38bce36f="" class="icon iconfont icon-wo">

						</i>待收货
					</a>
				</li>
				<li data-v-38bce36f="">
					<a data-v-38bce36f="" href="/user/userOrder?type=waitEvaluate" class="type-item">
						<i data-v-38bce36f="" class="icon iconfont icon-wo"></i>待评价
					</a>
				</li>
			</ul>
		</section>
		<section data-v-c726275c="" data-v-23ed9342="" class="user-option">
			<ul data-v-c726275c="" class="option-list">
				<li data-v-c726275c="">
					<a data-v-c726275c="" href="/cart" class="option-item">
						<i data-v-c726275c="" class="number-icon" style="display: none;">0</i>
						<i data-v-c726275c="" class="icon iconfont icon-wo"></i>
						购物车
					</a>
				</li>
				<li data-v-c726275c="">
					<a data-v-c726275c="" href="/user/favorite" class="option-item">
						<i data-v-c726275c="" class="number-icon" style="display: none;">0</i>
						<i data-v-c726275c="" class="icon iconfont icon-wo"></i>
						我的收藏
					</a>
				</li>
				<li data-v-c726275c="">
					<a data-v-c726275c="" href="/user/coupon" class="option-item">
						<i data-v-c726275c="" class="number-icon" style="display: none;">0</i>
						<i data-v-c726275c="" class="icon iconfont icon-wo"></i>
						优惠券
					</a></li>
				<li data-v-c726275c="">
					<a data-v-c726275c=""  class="option-item">
						<i data-v-c726275c="" class="number-icon" style="display: none;">0</i>
						<i data-v-c726275c="" class="icon iconfont icon-wo"></i>
						我的问答
					</a>
				</li>
				<li data-v-c726275c="">
					<a data-v-c726275c="" href="/kf" class="option-item">
						<!-- <i data-v-c726275c="" class="number-icon" le="display: none;">0</i> -->
						<i data-v-c726275c="" class="icon iconfont icon-wo"></i>
						用药咨询
					</a></li>
				<li data-v-c726275c="">
					<a data-v-c726275c="" href="/user/member" class="option-item">
						<i data-v-c726275c="" class="number-icon" style="display: none;">0</i>
						<i data-v-c726275c="" class="icon iconfont icon-wo"></i>
						会员中心
					</a></li>
			</ul>
		</section>
		<footer data-v-1aca7a65="" data-v-23ed9342="">
			<ul data-v-1aca7a65="" class="footer-nav">
				<li data-v-1aca7a65=""><a data-v-1aca7a65="" rel="nofollow">欢迎您：132****8119</a>|
					<a data-v-1aca7a65="" rel="nofollow">退出</a></li>
				<li data-v-1aca7a65=""><a data-v-1aca7a65="" href="//m.jianke.com/about.html" rel="nofollow">关于健客</a>|
					<a data-v-1aca7a65="" href="//m.jianke.com/help.html" rel="nofollow">帮助中心</a>
				</li>
			</ul>
			<dl data-v-1aca7a65="" class="footer-list"><dt data-v-1aca7a65=""><a data-v-1aca7a65="" href="http://v.jianke.com/zhuanti/wscxb_v/ ">微信关注【健客网上药店】领取200元优惠券</a></dt>
				<dd data-v-1aca7a65="">健客全国免费专线
					<a data-v-1aca7a65="" href="tel:4006666800" rel="nofollow">400-6666-800</a></dd>
				<dd data-v-1aca7a65="">药品交易资格证：粤C20140009</dd>
				<dd data-v-1aca7a65="">Copyright©2006-2017 健客 版权所有</dd>
			</dl>
		</footer>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
section ul li i{
	margin-left: 30%;
	
}
</style>
