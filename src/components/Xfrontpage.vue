<template>
	<div>
		<div class="nav-tab" data-v-56b50de9="" data-v-39623280="">
			<div class="scroll-wrap" data-v-56b50de9="">
				<div class="scroll-inner" data-v-56b50de9="">
					<span @click="changeTab(index,n)" v-for="(n,index) in tab" :class="{'nav-link':true,active:index===activeIndex}" data-v-56b50de9="" :key="index" >{{n}}</span> 
				</div>
			</div>
		</div>
	</div>
	
</template>
<script>
	export default {
		data() {
			return {
				tab:["推荐","关注","养肝护肝","关爱糖友","心脑血管"],
				activeIndex:0,
				druglist:[]
			}
		},
		methods:{
             changeTab(index,n){
                    // 事件处理函数中的this指向Vue的实例
					// console.log(index,n)
					this.activeIndex = index
					this.$store.dispatch("setNewList",n);
                },
         },
// 		created() {	
// 			this.changeTab()
// 		}
	}
	
</script>

<style scoped>
	.nav-tab .scroll-wrap .scroll-inner span{
		height: 50px;
	}
@import url(//g.alicdn.com/de/prismplayer/2.7.1/skins/default/aliplayer-min.css);@font-face {
    font-family: iconfont;
    src: url(/dist/iconfont.eot?081754d050ac4cd09a798427a67444b4);
    src: url(/dist/iconfont.eot?081754d050ac4cd09a798427a67444b4#iefix) format("embedded-opentype"),url("data:application/x-font-woff;charset=utf-8;base64,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") format("woff"),url(/dist/iconfont.ttf?588a3e18735178969a7b3c4dd853363c) format("truetype"),url(/dist/iconfont.d5cc5c10.svg#iconfont) format("svg")
}

.iconfont {
    font-family: iconfont!important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

.icon-close:before {
    content: "\E6A7"
}

.icon-add:before {
    content: "\E64E"
}

.icon-share_blank:before {
    content: "\E626"
}

.icon-player:before {
    content: "\E602"
}

.icon-zan2_blank:before {
    content: "\E680"
}

.icon-zan_blank:before {
    content: "\E681"
}

.icon-right:before {
    content: "\E635"
}

.icon-arrowdown:before {
    content: "\E603"
}

.icon-arrowup:before {
    content: "\E606"
}

.icon-loading:before {
    content: "\E634"
}

.icon-message:before {
    content: "\E617"
}

.icon-comment:before {
    content: "\E604"
}

.icon-zan2:before {
    content: "\E605"
}

.icon-zan:before {
    content: "\E607"
}

.icon-Give_the_thumbs_up:before {
    content: "\E608"
}

.icon-share:before {
    content: "\E609"
}

.icon-double-arrow-down:before {
    content: "\E60A"
}

.icon-back-to-home:before {
    content: "\E60E"
}

.icon-qq:before {
    content: "\E60F"
}

.icon-wechatzone:before {
    content: "\E610"
}

.icon-wechat:before {
    content: "\E611"
}

.icon-qzone:before {
    content: "\E612"
}

.icon-weibo:before {
    content: "\E613"
}

.icon-back-top:before {
    content: "\E614"
}

.icon-dajian-face:before {
    content: "\E615"
}

.icon-tab-classify:before {
    content: "\E678"
}

.icon-tab-home:before {
    content: "\E67A"
}

.icon-tab-mine:before {
    content: "\E67B"
}

.icon-tab-jktt-active:before {
    content: "\E67C"
}

.icon-tab-cart:before {
    content: "\E679"
}

.icon-add_pictures_experie:before {
    content: "\E60B"
}

.icon-all_circles:before {
    content: "\E60C"
}

.icon-choice:before {
    content: "\E60D"
}

.icon-circle_news:before {
    content: "\E616"
}

.icon-comment1:before {
    content: "\E618"
}

.icon-delete:before {
    content: "\E619"
}

.icon-delete_popup:before {
    content: "\E61A"
}

.icon-content_share:before {
    content: "\E61B"
}

.icon-drop_down:before {
    content: "\E61C"
}

.icon-browse:before {
    content: "\E61D"
}

.icon-edit:before {
    content: "\E61E"
}

.icon-Interactivemessage:before {
    content: "\E621"
}

.icon-expand_more:before {
    content: "\E622"
}

.icon-look_at_the_whole:before {
    content: "\E624"
}

.icon-more_circle:before {
    content: "\E625"
}

.icon-more:before {
    content: "\E627"
}

.icon-news:before {
    content: "\E628"
}

.icon-Publish:before {
    content: "\E629"
}

.icon-refresh:before {
    content: "\E62A"
}

.icon-select:before {
    content: "\E62D"
}

.icon-share1:before {
    content: "\E62E"
}

.icon-system_message:before {
    content: "\E62F"
}

.icon-time:before {
    content: "\E630"
}

.icon-tips:before {
    content: "\E631"
}

.icon-warning:before {
    content: "\E632"
}

.icon-put_questions:before {
    content: "\E62C"
}

.icon-collection1:before {
    content: "\E633"
}

.icon-doctor:before {
    content: "\E61F"
}

.icon-label:before {
    content: "\E623"
}

.icon-ellipsis:before {
    content: "\E636"
}

.icon-collection:before {
    content: "\E620"
}

/*! normalize.css v3.0.2 | MIT License | git.io/normalize */
html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
}

body {
    margin: 0
}

article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary {
    display: block
}

audio,canvas,progress,video {
    display: inline-block;
    vertical-align: baseline
}

audio:not([controls]) {
    display: none;
    height: 0
}

[hidden],template {
    display: none
}

a {
    background-color: transparent;
    text-decoration: none
}

a:active,a:hover {
    outline: 0
}

abbr[title] {
    border-bottom: 1px dotted
}

b,strong {
    font-weight: 700
}

dfn {
    font-style: italic
}

h1 {
    font-size: 2em;
    margin: .67em 0
}

mark {
    background: #ff0;
    color: #000
}

small {
    font-size: 80%
}

sub,sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline
}

sup {
    top: -.5em
}

sub {
    bottom: -.25em
}

img {
    border: 0
}

svg:not(:root) {
    overflow: hidden
}

figure {
    margin: 1em 40px
}

hr {
    box-sizing: content-box;
    height: 0
}

pre {
    overflow: auto
}

code,kbd,pre,samp {
    font-family: monospace,monospace;
    font-size: 1em
}

button,input,optgroup,select,textarea {
    color: inherit;
    font: inherit;
    margin: 0;
    -webkit-appearance: none;
    outline: none
}

textarea {
    resize: none
}

button {
    overflow: visible
}

button,select {
    text-transform: none
}

button,html input[type=button],input[type=reset],input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer
}

button[disabled],html input[disabled] {
    cursor: default
}

button::-moz-focus-inner,input::-moz-focus-inner {
    border: 0;
    padding: 0
}

input {
    line-height: normal
}

input[type=checkbox],input[type=radio] {
    box-sizing: border-box;
    padding: 0
}

input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button {
    height: auto
}

input[type=search] {
    -webkit-appearance: textfield;
    box-sizing: content-box
}

input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}

fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: .35em .625em .75em
}

legend {
    border: 0;
    padding: 0
}

textarea {
    overflow: auto
}

optgroup {
    font-weight: 700
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

td,th {
    padding: 0
}

.skeleton .cloums {
    background: #eee
}

body,html {
    overflow: hidden
}

#app,#app>div,body,html {
    height: 100%
}

#app>div {
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch
}

a,div,img {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.content[data-v-39623280],.home-container[data-v-39623280] {
    height: 100%;
    overflow: hidden
}

.content[data-v-39623280] {
    background: #f5f5f5
}

.content .content-inner[data-v-39623280] {
    padding: .74rem 0 0;
    box-sizing: border-box
}

.content .load-data-error[data-v-39623280],.content .no-login-content[data-v-39623280] {
    padding: 56% 0 0;
    position: relative
}

.content .load-data-error .inner[data-v-39623280],.content .no-login-content .inner[data-v-39623280] {
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    white-space: nowrap
}

.content .load-data-error p[data-v-39623280],.content .no-login-content p[data-v-39623280] {
    margin: 0;
    font-size: .32rem;
    color: #999;
    text-align: center
}

.content .load-data-error .btn[data-v-39623280],.content .no-login-content .btn[data-v-39623280] {
    width: 2rem;
    border-radius: .4rem;
    color: #fff;
    font-size: .28rem;
    padding: .1rem 0;
    background: #0bd68c;
    cursor: pointer;
    display: block;
    margin: .46rem auto 0;
    text-align: center
}

.content .no-concerns-content[data-v-39623280] {
    padding: 56% 0 0;
    position: relative
}

.content .no-concerns-content .no-concerns-inner[data-v-39623280] {
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    white-space: nowrap
}

.content .no-concerns-content .no-concerns-inner p[data-v-39623280] {
    font-size: .24rem;
    color: #999;
    text-align: center;
    margin: .3rem 0 0
}

.content .no-concerns-content .no-concerns-inner img[data-v-39623280] {
    width: 1.54rem;
    height: 1.83rem;
    display: block;
    margin: 0 auto
}

.content .action-block .default-text {
    font-size: 24px;
    color: #777
}

.content .vue-pull-to-wrapper .scroll-container {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    overflow-x: hidden
}

.content .vue-pull-to-wrapper .action-block:last-of-type {
    top: 100%
}

.content .bottom-load-wrapper.ignore,.content .top-load-wrapper.ignore {
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    color: #777
}

.content .bottom-load-wrapper.ignore .iconfont,.content .top-load-wrapper.ignore .iconfont {
    font-size: 14px;
    font-weight: 700;
    display: inline-block;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    transition: -webkit-transform .3s linear;
    transition: transform .3s linear;
    transition: transform .3s linear,-webkit-transform .3s linear;
    position: relative;
    top: 2px
}

.content .bottom-load-wrapper.ignore .icon-arrow-dwon,.content .bottom-load-wrapper.ignore .icon-arrow-up,.content .top-load-wrapper.ignore .icon-arrow-dwon,.content .top-load-wrapper.ignore .icon-arrow-up {
    top: -1px;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.content .bottom-load-wrapper.ignore .icon-right:before,.content .top-load-wrapper.ignore .icon-right:before {
    content: "\E635"
}

.icon-loading {
    font-size: 10px;
    position: relative;
    top: 4px;
    text-indent: -9999em;
    border-top: .04rem solid hsla(0,0%,47%,.2);
    border-right: .04rem solid hsla(0,0%,47%,.2);
    border-bottom: .04rem solid hsla(0,0%,47%,.2);
    border-left: .04rem solid #777;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: roatate-loading 1.1s infinite linear;
    animation: roatate-loading 1.1s infinite linear;
    display: inline-block;
    overflow: hidden
}

.icon-loading,.icon-loading:after {
    border-radius: 50%;
    width: .24rem;
    height: .24rem
}

@-webkit-keyframes roatate-loading {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@keyframes roatate-loading {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}
.nav-tab{
	height: 50px;
}
.nav-tab[data-v-a0bfe588] {
    height: 50px;
    font-size: 0;
    text-align: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center
}

.nav-tab span[data-v-a0bfe588] {
    font-size: 15px;
    height: 20px;
    padding: 9px 0;
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    background: #eee;
    width: 50px;
    border-radius: 2px;
    margin: 10px
}

.item-main[data-v-a0bfe588] {
    width: 100%;
    padding: 56% 0 0;
    background: #eee;
}

.item[data-v-a0bfe588] {
    background: #fff;
    margin-bottom: 5px;
    padding: 0 20px
}

.item .item-header[data-v-a0bfe588] {
    padding: 10px 0;
    overflow: hidden
}

.item .item-header span[data-v-a0bfe588] {
    float: left;
    display: block
}

.item .item-header .img-healthid[data-v-a0bfe588] {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background: #f5f5f5
}

.item .item-header .health-name[data-v-a0bfe588] {
    width: 50px;
    height: 15px;
    padding: 0 8px;
    background: #eee;
    margin: 8px
}

.item .item-header .concerns-btn[data-v-a0bfe588] {
    float: right;
    width: 61px;
    height: 22px;
    margin: 4px 0 0;
    border-radius: 5px;
    padding: 0 4px 0 0;
    background: #eee
}

.item .item-body[data-v-a0bfe588] {
    display: block;
    position: relative;
    padding: 0 112px 0 0
}

.item .item-body h2[data-v-a0bfe588] {
    margin: 0 0 10px;
    width: 200px;
    height: 15px;
    background: #eee
}

.item .item-body p[data-v-a0bfe588] {
    padding: 0;
    margin: 0;
    width: 100px;
    height: 15px;
    background: #eee
}

.item .item-body .item-image[data-v-a0bfe588] {
    width: 107px;
    height: 80px;
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    background: #eee
}

.item .item-foot[data-v-a0bfe588] {
    font-size: 10px;
    color: #777;
    padding: 10px 0;
    margin: 15px 0 0
}

.item .item-foot span[data-v-a0bfe588] {
    display: inline-block;
    padding: 0 8px 0 0;
    width: 20px;
    height: 10px;
    background: #eee
}

.nav-tab[data-v-56b50de9] {
    height: .74rem;
    font-size: 0;
    text-align: center;
    padding: 0 .4rem 0 .3rem;
    box-sizing: border-box;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    overflow: hidden
}

.nav-tab[data-v-56b50de9]:after {
    content: "";
    width: 100%;
    height: 1px;
    background: #f5f5f5;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0
}

.nav-tab .scroll-wrap[data-v-56b50de9] {
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    height: 50px;
    font-size: 0;
}

.nav-tab .scroll-wrap[data-v-56b50de9]:after,.nav-tab .scroll-wrap[data-v-56b50de9]:before {
    width: .2rem;
    content: "";
    display: block;
    height: .74rem;
    position: absolute;
    top: 0;
    z-index: 10;
    overflow: hidden
}

.nav-tab .scroll-wrap[data-v-56b50de9]:before {
    border-left: 2px solid #fff;
    left: 0;
    background: -webkit-gradient(linear,left top,right top,color-stop(0,#fff),to(hsla(0,0%,100%,0)));
    background: -webkit-linear-gradient(left,#fff,hsla(0,0%,100%,0));
    background: -o-linear-gradient(left,#fff 0,hsla(0,0%,100%,0) 100%);
    background: linear-gradient(90deg,#fff 0,hsla(0,0%,100%,0))
}

.nav-tab .scroll-wrap[data-v-56b50de9]:after {
    border-right: 2px solid #fff;
    right: 0;
    background: -webkit-gradient(linear,right top,left top,color-stop(0,#fff),to(hsla(0,0%,100%,0)));
    background: -webkit-linear-gradient(right,#fff,hsla(0,0%,100%,0));
    background: -o-linear-gradient(right,#fff 0,hsla(0,0%,100%,0) 100%);
    background: linear-gradient(270deg,#fff 0,hsla(0,0%,100%,0))
}

.nav-tab .scroll-wrap .scroll-inner[data-v-56b50de9] {
    width: 100%;
	height: 50px;
    white-space: nowrap;
    overflow-x: auto
}

.nav-tab span[data-v-56b50de9] {
    font-size: .3rem;
    height: .74rem;
    padding: .17rem 0;
    display: inline-block;
    margin: 0 .2rem;
    vertical-align: middle;
    box-sizing: border-box
}

.nav-tab span[data-v-56b50de9]:last-child {
    margin-right: .25rem
}

.nav-tab span.active[data-v-56b50de9] {
    font-weight: 700;
    position: relative
}

.nav-tab span.active[data-v-56b50de9]:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .06rem;
    background: #0bd68c;
    display: block;
    margin: 0;
    padding: 0;
    z-index: 2
}

.icon-tab-home[data-v-7fb4e699]:before {
    content: "\E67A"
}

.iconfont[data-v-7fb4e699] {
    font-family: iconfont!important
}

.tab-bar[data-v-7fb4e699] {
    width: 100%;
    max-width: 960px;
    min-width: 320px;
    height: 1.18rem;
    position: fixed;
    border-top: 1px solid #e3e3e3;
    bottom: 0;
    z-index: 999;
    background: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center
}

.tab-bar-item[data-v-7fb4e699] {
    flex: 1;
    text-align: center;
    display: inline-block;
    color: #333
}

.tab-bar-item icon[data-v-7fb4e699] {
    width: 26px;
    font-size: 20px;
    height: 26px
}

.tab-bar-item.active[data-v-7fb4e699] {
    color: #28b2f9
}

.tab-bar-item i[data-v-7fb4e699] {
    font-size: 20px
}

.tab-bar-item p[data-v-7fb4e699] {
    font-size: 12px;
    margin-top: 1px;
    margin-bottom: 0
}

.list-wrapper[data-v-5146fc42] {
    position: relative;
    height: 100%;
    overflow: hidden;
    background: #fff
}

.list-wrapper .scroll-content[data-v-5146fc42] {
    position: relative;
    z-index: 1
}

.list-wrapper .list-content[data-v-5146fc42] {
    position: relative;
    z-index: 10;
    background: #fff
}

.list-wrapper .list-content .list-item[data-v-5146fc42] {
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    padding-left: 20px;
    border-bottom: 1px solid #e5e5e5
}

.pulldown-wrapper[data-v-5146fc42] {
    position: absolute;
    width: 100%;
    left: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    transition: all
}

.pulldown-wrapper .after-trigger[data-v-5146fc42] {
    margin-top: 10px
}

.pullup-wrapper[data-v-5146fc42] {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    padding: 16px 0
}

.mf-loading-container img[data-v-b7580550] {
    width: 20px;
    height: 20px;
    display: block
}

.artcle-list[data-v-aed32f50] {
    overflow-x: hidden
}

.text-recommend-box[data-v-3d70ccad] {
    margin-top: .2rem;
    background: #fff;
    padding: .3rem .4rem
}

.text-recommend-box .text-recommend[data-v-3d70ccad] {
    border-left: 3px solid #0bd68c;
    padding-left: .2rem;
    display: block;
    font-weight: 700
}

.box-two-lines[data-v-3d70ccad] {
    margin-bottom: .3rem;
    overflow: hidden;
    flex-grow: 1
}

.item[data-v-3d70ccad] {
    background: #fff;
    border-bottom: 2px solid #f5f5f5;
    padding: .3rem .4rem .2rem
}

.item .img-healthid[data-v-3d70ccad] {
    width: .6rem;
    height: .6rem;
    border-radius: .5rem;
    background: #f5f5f5
}

.item .health-name[data-v-3d70ccad] {
    color: #222;
    font-size: .24rem;
    padding: 0 .15rem;
    display: inline-block;
    vertical-align: top;
    margin-top: .15rem
}

.item .concerns-btn[data-v-3d70ccad] {
    float: right
}

.item .concerns-close[data-v-3d70ccad] {
    float: right;
    color: #ccc;
    margin: 5px 0 0
}

.item .concerns-close .iconfont[data-v-3d70ccad] {
    font-size: .45rem
}

.item .item-header[data-v-3d70ccad] {
    padding: 0 0 .2rem;
    display: block;
    overflow: hidden
}

.item .item-body[data-v-3d70ccad] {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    text-decoration: none
}

.item .item-body h2[data-v-3d70ccad] {
    font-size: .3rem;
    color: #222;
    margin: 0;
    font-weight: 400
}

.item .item-foot[data-v-3d70ccad] {
    font-size: .2rem;
    color: #777;
    padding: .2rem 0 0
}

.item .item-foot span[data-v-3d70ccad] {
    padding: 0 .15rem 0 0
}

.item .item-foot .img-healthid[data-v-3d70ccad] {
    margin: 0 .1rem 0 0;
    width: .34rem;
    height: .34rem;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    vertical-align: middle
}

.item .item-foot .health-name[data-v-3d70ccad] {
    font-size: .2rem;
    color: #777;
    margin-top: 0
}

.item .item-foot .health-name[data-v-3d70ccad],.item .item-foot .skim[data-v-3d70ccad] {
    display: inline-block;
    box-sizing: border-box;
    vertical-align: middle
}

.item-video.single-image i[data-v-3d70ccad] {
    border: 2px solid #fff;
    display: block;
    width: .8rem;
    height: .8rem;
    text-align: center;
    line-height: .8rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background: rgba(0,0,0,.5);
    z-index: 10
}

.item-video.single-image i[data-v-3d70ccad]:before {
    content: "\E602";
    display: inline-block;
    color: #fff;
    font-family: iconfont!important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    font-size: .3rem;
    position: relative;
    right: -.04rem
}

.video-type .item-image[data-v-3d70ccad] {
    padding: 52% 0 0;
    position: relative;
    width: 100%
}

.video-type .item-image i[data-v-3d70ccad] {
    border: 2px solid #fff;
    display: block;
    width: 1.14rem;
    height: 1.14rem;
    text-align: center;
    line-height: 1.24rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background: rgba(0,0,0,.5);
    z-index: 10
}

.video-type .item-image i[data-v-3d70ccad]:before {
    content: "\E602";
    display: inline-block;
    color: #fff;
    font-family: iconfont!important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    font-size: .4rem;
    position: relative;
    right: -.04rem
}

.video-type .item-image .img-tag[data-v-3d70ccad] {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: block
}

.muti-image .item-image[data-v-3d70ccad] {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between
}

.muti-image .item-image .img-tag[data-v-3d70ccad] {
    width: 2.14rem;
    height: 1.61rem
}

.item-related[data-v-3d70ccad],.single-image[data-v-3d70ccad] {
    padding-bottom: .3rem
}

.single-image .item-body[data-v-3d70ccad] {
    position: relative;
    padding: 0 2.24rem 0 0;
    min-height: 1.61rem
}

.single-image .item-body .item-image[data-v-3d70ccad] {
    width: 2.14rem;
    height: 1.61rem;
    position: absolute;
    top: 0;
    right: 0;
    display: block
}

.single-image .item-body .item-image .img-tag[data-v-3d70ccad] {
    width: 100%;
    height: 100%
}

.item-related[data-v-3d70ccad] {
    margin-bottom: 1px
}

.item-related[data-v-3d70ccad]:last-child {
    margin-bottom: .2rem
}

.recommends-first-image[data-v-3d70ccad] {
    padding: 0!important;
    margin: 0!important
}

.recommends-first-image .item-foot[data-v-3d70ccad],.recommends-first-image .item-header[data-v-3d70ccad] {
    display: none
}

.recommends-first-image .item-image[data-v-3d70ccad] {
    padding: 0
}

.recommends-first-image .item-body[data-v-3d70ccad] {
    padding: 52% 0 0;
    position: relative
}

.recommends-first-image .item-body h2[data-v-3d70ccad] {
    font-size: .26rem;
    color: #fff;
    padding: .1rem .4rem;
    position: absolute;
    bottom: .2rem;
    background: rgba(0,0,0,.4);
    border-radius: .3rem;
    text-align: center;
    z-index: 2;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden
}

.recommends-first-image .item-body .item-image[data-v-3d70ccad] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1
}

.recommends-first-image .item-body .item-image .img-tag[data-v-3d70ccad] {
    width: 100%;
    height: 100%
}

.img-cover[data-v-3d70ccad] {
    background-size: cover;
    background-position: 50%
}

.detail-concerned[data-v-6b5a8c45] {
    color: #fff;
    background: #ccc
}

.detail-unconcerned[data-v-6b5a8c45] {
    color: #fff;
    background: #0bd68c
}

.item-concerned[data-v-6b5a8c45] {
    color: #ccc
}

.item-unconcerned[data-v-6b5a8c45] {
    color: #0bd68c;
    border: 1px solid #0bd68c
}

.span-concern[data-v-6b5a8c45] {
    display: block;
    width: 1.2rem;
    border-radius: .26rem;
    text-align: center;
    font-size: .24rem;
    padding: .05rem .05rem .05rem 0;
    box-sizing: border-box;
    border: 1px solid;
    cursor: pointer
}

.span-concern i[data-v-6b5a8c45] {
    position: relative;
    right: -2px;
    font-size: .24rem
}

.img-cover[data-v-85b1983e] {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-size: cover;
    background-position: 50%
}

.video-preshow {
    height: 4rem;
    background-color: #e6e6e6;
    position: relative
}

.video-preshow .fake-control {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    left: 0;
    bottom: 0;
    height: .9rem;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-top: .1rem solid #fff
}

.video-preshow .fake-control .fake-play-triangle:before {
    margin-left: .4rem;
    content: "\E602";
    display: inline-block;
    color: #fff;
    font-family: iconfont!important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    font-size: .4rem;
    position: relative;
    right: -.04rem
}

.video-preshow .fake-control .fake-full-btn {
    width: .4rem;
    height: .4rem;
    margin-right: .4rem;
    background-color: #fff
}

.item-video .play-btn {
    border: 2px solid #fff;
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    text-align: center;
    line-height: 1.2rem;
    border-radius: 50%;
    position: relative;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background: rgba(0,0,0,.4);
    z-index: 10
}

.item-video .play-btn:before {
    content: "\E602";
    display: inline-block;
    color: #fff;
    font-family: iconfont!important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    font-size: .3rem;
    position: relative;
    right: -.04rem
}

.prism-player .prism-big-play-btn[style] {
    position: absolute;
    left: 50%!important;
    top: 50%!important;
    -webkit-transform: translate(-50%,-50%)!important;
    transform: translate(-50%,-50%)!important
}

.prism-player .prism-cc-btn,.prism-player .prism-info-display {
    display: none!important
}

.message-content[data-v-5e2566d2] {
    word-break: normal;
    margin: 0 2rem;
    border-radius: 4px;
    background: rgba(0,0,0,.6);
    color: #fff
}

.message-content .hasFavourInfo[data-v-5e2566d2] {
    margin-bottom: -.3rem;
    padding: .16rem .3rem;
    font-size: .28rem;
    text-align: center
}

.back-to-home[data-v-5e2566d2] {
    position: fixed;
    bottom: 1.3rem;
    right: .2rem
}

.back-to-home div[data-v-5e2566d2] {
    width: 1rem;
    height: 1rem;
    background-size: cover;
    background-position: 50%
}

.footer-image[data-v-5e2566d2] {
    height: 1.8rem;
    background-size: cover;
    background-position: 50%
}

.icon-double-arrow-down[data-v-5e2566d2] {
    color: #0bd68c;
    font-weight: 700
}

.img-jianke-logo[data-v-5e2566d2] {
    width: .7rem;
    height: .7rem;
    margin: 0,.2rem;
    background-size: cover;
    background-position: 50%
}

.logo-title-box[data-v-5e2566d2] {
    height: 1rem;
    color: #fff;
    background-color: rgba(0,0,0,.8)
}

.logo-title-box .logo-title[data-v-5e2566d2] {
    height: 100%;
    align-items: center;
    margin: auto .4rem;
    font-size: .28rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}

.logo-title-box .logo-title a[data-v-5e2566d2] {
    color: #fff;
    background: #0bd68c;
    text-align: center;
    width: 1.1rem;
    margin: auto 0;
    padding: .05rem;
    font-size: .24rem;
    border-radius: .26rem
}

.logo-title-box .logo-title .logo[data-v-5e2566d2] {
    width: 1rem;
    height: 1rem;
    background-size: cover
}

.logo-title-box .logo-title .logo-desc[data-v-5e2566d2] {
    height: .7rem;
    margin: 0 .2rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between
}

.logo-title-box .logo-title .logo-desc .logo-desc-sub[data-v-5e2566d2] {
    font-size: .2rem
}

.logo-title-box .logo-title .logo-desc .upper-text[data-v-5e2566d2] {
    font-size: .28rem
}

.bold[data-v-5e2566d2] {
    font-weight: 700
}

.go-and-see-box[data-v-5e2566d2] {
    text-align: center;
    font-size: .3rem;
    background-color: #fff
}

.go-and-see-box .text-link[data-v-5e2566d2] {
    padding-top: .6rem
}

.go-and-see-box .text-link a[data-v-5e2566d2] {
    color: #0bd68c
}

.go-and-see-box .circle[data-v-5e2566d2] {
    box-shadow: -1px -1px 30px 3px hsla(0,0%,80%,.4);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: .6rem auto 0;
    width: 1.3rem;
    height: 1.3rem;
    text-align: center;
    border-radius: 50%;
    font-size: .26rem;
    color: #fff;
    background: -webkit-linear-gradient(45deg,#0bd68c,#59ffd2);
    background: -o-linear-gradient(45deg,#0bd68c,#59ffd2);
    background: linear-gradient(45deg,#0bd68c,#59ffd2)
}

.go-and-see-box .circle i[data-v-5e2566d2] {
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    font-size: .5rem
}

.article-box[data-v-5e2566d2] {
    position: relative
}

.readall-box[data-v-5e2566d2] {
    text-align: center;
    background-color: #fff;
    font-size: .33rem
}

.readall-box .read-in-app-box[data-v-5e2566d2] {
    margin: 0 .4rem .2rem
}

.readall-box .read-in-app-box .read-in-app[data-v-5e2566d2] {
    margin-bottom: .8rem;
    display: inline-block;
    border-radius: .1rem;
    background-color: #0bd68c;
    color: #fff;
    width: 100%;
    height: .9rem;
    line-height: .9rem
}

.read-more-mask[data-v-5e2566d2] {
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
    height: 3rem;
    background: -webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),color-stop(70%,#fff),to(#fff));
    background: -webkit-linear-gradient(top,hsla(0,0%,100%,0),#fff 70%,#fff);
    background: -o-linear-gradient(top,hsla(0,0%,100%,0),#fff 70%,#fff);
    background: linear-gradient(180deg,hsla(0,0%,100%,0),#fff 70%,#fff)
}

.read-more-mask .show-more-btn[data-v-5e2566d2] {
    display: inline-block;
    height: 100%;
    -webkit-transform: translateY(80%);
    transform: translateY(80%)
}

.video-box[data-v-5e2566d2] {
    margin-left: -.4rem;
    margin-right: -.4rem;
    margin-bottom: .5rem;
    min-height: 3.5rem
}

.concers-btn[data-v-5e2566d2] {
    float: right
}

.related-box[data-v-5e2566d2] {
    background: #fff;
    padding: .3rem 0 .3rem .2rem
}

.related-box h3[data-v-5e2566d2] {
    margin: 0 0 0 .2rem;
    font-size: .28rem;
    color: #222;
    padding-left: .2rem;
    position: relative
}

.related-box h3[data-v-5e2566d2]:before {
    content: "";
    height: .38rem;
    width: 3px;
    background: #0bd68c;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px
}

.mask-box[data-v-5e2566d2] {
    display: block;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .6;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 888
}

.article-container[data-v-5e2566d2] {
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    height: 100%;
    position: relative
}

.content[data-v-5e2566d2] {
    background: #eee
}

.content-con[data-v-5e2566d2] {
    background: #fff;
    padding: 1rem .4rem 20px;
    overflow: hidden
}

.content-con p[data-v-5e2566d2] {
    font-size: .45rem;
    word-break: break-word
}

.content-con h1[data-v-5e2566d2] {
    font-size: .6rem;
    padding: 0;
    color: #222;
    margin-top: 1rem;
    margin-bottom: 0;
    word-break: break-word
}

.content-con .sub-title[data-v-5e2566d2] {
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    padding: .44rem 0 0
}

.content-con .sub-title .health-link[data-v-5e2566d2] {
    flex-grow: 1;
    -webkit-flex-grow: 1
}

.content-con .sub-title span[data-v-5e2566d2] {
    display: block;
    float: left
}

.content-con .sub-title .health-ava[data-v-5e2566d2] {
    width: .6rem;
    height: .6rem;
    border-radius: 50%;
    display: block;
    float: left;
    background: #eee
}

.content-con .sub-title .health-name[data-v-5e2566d2] {
    font-size: .24rem;
    color: #777;
    line-height: .6rem;
    padding: 0 .15rem
}

.content-con .sub-title .health-concers[data-v-5e2566d2] {
    float: right;
    width: 1.5rem;
    height: .49rem;
    margin: 8px 0 0;
    border: 1px solid #0bd68c;
    background: #0bd68c;
    border-radius: .25rem;
    text-align: center;
    font-size: .24rem;
    line-height: .49rem;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer
}

.content-con .sub-title .health-concers i[data-v-5e2566d2] {
    position: relative;
    right: -6px
}

.content-con .content-body[data-v-5e2566d2] {
    line-height: .6rem;
    font-size: .33rem;
    color: #222
}

.content-con .content-body p[data-v-5e2566d2] {
    margin: 0
}

.content-con .content-body img[data-v-5e2566d2] {
    max-width: 100%
}

.content-con .report-btn[data-v-5e2566d2] {
    color: #999;
    font-size: .24rem;
    float: right
}

.content-con .article-zan-btn[data-v-5e2566d2] {
    clear: both;
    overflow: hidden;
    display: block;
    margin: .3rem auto;
    width: 2rem;
    padding: .15rem 0;
    border-radius: .4rem;
    border: 1px solid #0bd68c;
    color: #0bd68c;
    text-align: center;
    font-size: .28rem;
    cursor: pointer
}

.content-con .article-zan-btn .iconfont[data-v-5e2566d2] {
    font-size: .38rem;
    vertical-align: middle;
    position: relative
}

.share-pane[data-v-5e2566d2] {
    padding: 0 auto;
    text-align: center
}

.share-btn[data-v-5e2566d2] {
    width: 100%
}

.share-btn button[data-v-5e2566d2] {
    width: 3.2rem;
    height: .74rem;
    text-align: center;
    margin: 10px auto;
    padding: 5px 10px;
    display: block;
    border: 1px solid #0cd68c;
    border-radius: .4rem;
    background: #0cd68c;
    outline: none;
    color: #fff
}

.article-container .content-body {
    margin-top: .8rem
}

.article-container .content-body a {
    text-decoration: none
}

.article-container .content-body p {
    margin: .8rem 0
}

.article-container .content-body img {
    max-width: 100%;
    height: auto
}

.article-container .content-body>div {
    margin: .8rem 0
}

.content-con .content-body[data-v-5e2566d2] br {
    display: block;
    margin: 0;
    line-height: 0;
    content: " "
}

.content-con .content-body[data-v-5e2566d2] h1,.content-con .content-body[data-v-5e2566d2] h2,.content-con .content-body[data-v-5e2566d2] h3,.content-con .content-body[data-v-5e2566d2] h4,.content-con .content-body[data-v-5e2566d2] h5,.content-con .content-body[data-v-5e2566d2] h6 {
    font-size: .4rem;
    line-height: .4rem
}

.article-skeleton[data-v-48aa93cb] {
    padding: 0 20px
}

.article-skeleton h1[data-v-48aa93cb] {
    height: 30px;
    width: 100%;
    margin: 50px 0 20px;
    background: #eee
}

.article-skeleton .item-sub-item[data-v-48aa93cb] {
    overflow: hidden;
    padding: 0 0 20px
}

.article-skeleton .item-sub-item span[data-v-48aa93cb] {
    display: block;
    float: left
}

.article-skeleton .item-sub-item .author[data-v-48aa93cb] {
    background: #eee;
    width: 30px;
    height: 30px;
    border-radius: 30px
}

.article-skeleton .item-sub-item .author-name[data-v-48aa93cb] {
    height: 15px;
    margin: 8px;
    background: #eee;
    width: 100px
}

.article-skeleton .item-sub-item .action[data-v-48aa93cb] {
    float: right;
    width: 62px;
    height: 23px;
    background: #eee;
    border-radius: 5px
}

.article-skeleton p[data-v-48aa93cb] {
    width: 100%;
    height: 15px;
    background: #eee;
    margin: 0 0 10px
}

.article-skeleton p.single-p[data-v-48aa93cb] {
    width: 60%
}

.article-skeleton .con-image[data-v-48aa93cb] {
    height: 200px;
    width: 100%;
    background: #eee;
    display: block
}

.report-container .report-tips[data-v-c7d34536] {
    height: .7rem;
    line-height: .7rem;
    font-size: .24rem;
    background: #f5f5f5;
    padding: 0 .3rem;
    margin: 0;
    color: #999
}

.report-container ul[data-v-c7d34536] {
    margin: 0;
    padding: 0 0 0 .3rem
}

.report-container ul li[data-v-c7d34536] {
    height: .9rem;
    line-height: .9rem;
    font-size: .3rem;
    color: #666;
    border-bottom: 1px solid #e5e5e5;
    list-style: none;
    padding: 0 .3rem 0 0
}

.report-container ul li span[data-v-c7d34536] {
    width: .3rem;
    height: .3rem;
    display: inline-block;
    border-radius: .3rem;
    border: 1px solid #ddd;
    vertical-align: middle;
    position: relative;
    top: -2px
}

.report-container ul li textarea[data-v-c7d34536] {
    width: 100%
}

.report-container ul .text-area-item[data-v-c7d34536] {
    height: auto;
    border-bottom: 0
}

.report-container ul .text-area-item p[data-v-c7d34536] {
    line-height: .9rem;
    height: .9rem;
    margin: 0
}

.report-container ul .text-area-item .text-area-cn[data-v-c7d34536] {
    width: 100%;
    height: 2.4rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    padding: 0 .15rem .4rem;
    position: relative
}

.report-container ul .text-area-item .text-area-cn textarea[data-v-c7d34536] {
    border: 0;
    line-height: .5rem;
    width: 100%;
    margin: 0;
    height: 2rem;
    outline: none
}

.report-container ul .text-area-item .text-area-cn textarea[data-v-c7d34536]::-webkit-input-placeholder {
    color: #999
}

.report-container ul .text-area-item .text-area-cn .text-area-tip[data-v-c7d34536] {
    position: absolute;
    right: .2rem;
    bottom: 0;
    line-height: .4rem;
    color: #999;
    font-style: normal
}

.report-container ul .active[data-v-c7d34536] {
    color: #333
}

.report-container ul .active span[data-v-c7d34536] {
    background-color: transparent;
    background-image: url(/dist/checked.e80fc07c.png);
    background-size: cover;
    background-position: 50%;
    border: none;
    width: .34rem;
    height: .34rem
}

.report-container button[data-v-c7d34536] {
    height: .8rem;
    width: 3.7rem;
    line-height: .8rem;
    display: block;
    background: #6de6ba;
    color: #fff;
    font-size: .36rem;
    text-align: center;
    margin: .4rem auto;
    border: 0;
    border-radius: .4rem;
    outline: none
}

.report-container button.active[data-v-c7d34536] {
    background: #0bd68c
}

.health-con[data-v-324be0c0] {
    height: 100%
}

.health-con .health-body[data-v-324be0c0] {
    background: -webkit-linear-gradient(top,#e4fff5,#fff 100px);
    background: -o-linear-gradient(top,#e4fff5 0,#fff 100px);
    background: linear-gradient(180deg,#e4fff5 0,#fff 100px)
}

.health-con .health-body h4[data-v-324be0c0] {
    margin-left: .4rem;
    margin-bottom: .2rem
}

.health-con .header[data-v-324be0c0] {
    padding: .4rem;
    overflow: hidden
}

.health-con .header img[data-v-324be0c0],.health-con .header span[data-v-324be0c0] {
    display: block;
    float: left
}

.health-con .header img[data-v-324be0c0] {
    width: 1.28rem;
    height: 1.28rem;
    border-radius: 128px
}

.health-con .header .info[data-v-324be0c0] {
    margin: 0;
    float: left;
    padding: .3rem 0 0 .2rem
}

.health-con .header .info span[data-v-324be0c0] {
    float: none;
    font-size: .32rem;
    color: #222;
    font-weight: 700
}

.health-con .header .info span[data-v-324be0c0]:last-of-type {
    font-size: .24rem;
    color: #999;
    font-weight: 400
}

.health-con .header .info span:last-of-type i[data-v-324be0c0] {
    color: #222;
    font-weight: 700;
    font-style: normal;
    padding: 0 5px
}

.health-con .header .concers-btn[data-v-324be0c0] {
    float: right;
    margin: .4rem 0 0
}

.health-con .description[data-v-324be0c0] {
    color: #222;
    font-size: .24rem;
    padding: .4rem
}

.health-con .description p[data-v-324be0c0] {
    line-height: .32rem;
    margin: 0
}

.health-con .list[data-v-324be0c0] {
    background: #fff;
    border-top: 1px solid #f5f5f5
}

.health-con .list h4[data-v-324be0c0] {
    font-size: .28rem;
    color: #777;
    padding: 0 .4rem .2rem 0;
    font-weight: 400;
    margin: .4rem 0 0
}

.health-con .list .item[data-v-324be0c0] {
    border-bottom: 1px solid #f5f5f5;
    padding-left: 0
}

.health-con .action-block .default-text {
    font-size: 24px;
    color: #777
}

.health-con .vue-pull-to-wrapper .scroll-container {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    overflow-x: hidden
}

.health-con .vue-pull-to-wrapper .action-block:last-of-type {
    top: 100%
}

.health-con .bottom-load-wrapper.ignore {
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    color: #777
}

.health-con .bottom-load-wrapper.ignore .iconfont {
    font-size: 14px;
    font-weight: 700;
    display: inline-block;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    transition: -webkit-transform .3s linear;
    transition: transform .3s linear;
    transition: transform .3s linear,-webkit-transform .3s linear;
    position: relative;
    top: 2px
}

.health-con .bottom-load-wrapper.ignore .icon-arrow-dwon,.health-con .bottom-load-wrapper.ignore .icon-arrow-up {
    top: -1px;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.health-con .bottom-load-wrapper.ignore .icon-right:before {
    content: "\E635"
}

.icon-loading {
    font-size: 10px;
    position: relative;
    top: 4px;
    text-indent: -9999em;
    border-top: .04rem solid hsla(0,0%,47%,.2);
    border-right: .04rem solid hsla(0,0%,47%,.2);
    border-bottom: .04rem solid hsla(0,0%,47%,.2);
    border-left: .04rem solid #777;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: roatate-loading 1.1s infinite linear;
    animation: roatate-loading 1.1s infinite linear;
    display: inline-block;
    overflow: hidden
}

.icon-loading,.icon-loading:after {
    border-radius: 50%;
    width: .24rem;
    height: .24rem
}

@-webkit-keyframes roatate-loading {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@keyframes roatate-loading {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

.health-index-skeleton[data-v-7a7b0092] {
    padding: 21px 10px
}

.health-index-skeleton .head span[data-v-7a7b0092] {
    display: block;
    float: left
}

.health-index-skeleton .head .ava[data-v-7a7b0092] {
    width: 64px;
    height: 64px;
    background: #eee;
    border-radius: 64px
}

.health-index-skeleton .head .info[data-v-7a7b0092] {
    padding: 15px 0 0
}

.health-index-skeleton .head .info i[data-v-7a7b0092] {
    display: block;
    height: 12px;
    background: #eee;
    width: 100px;
    margin: 0 0 10px 10px
}

.health-index-skeleton .head .btn[data-v-7a7b0092] {
    width: 60px;
    height: 23px;
    background: #eee;
    float: right;
    border-radius: 10px;
    margin: 20px 0 0
}

.health-index-skeleton .description[data-v-7a7b0092] {
    clear: both;
    padding: 20px 0
}

.health-index-skeleton .description p[data-v-7a7b0092] {
    height: 12px;
    width: 100%;
    background: #eee;
    margin: 0 0 7px
}

.health-index-skeleton .item[data-v-7a7b0092] {
    background: #fff;
    margin-bottom: 5px
}

.health-index-skeleton .item .item-body[data-v-7a7b0092] {
    display: block;
    position: relative;
    padding: 0 112px 0 0
}

.health-index-skeleton .item .item-body h2[data-v-7a7b0092] {
    margin: 0 0 10px;
    width: 200px;
    height: 15px;
    background: #eee
}

.health-index-skeleton .item .item-body p[data-v-7a7b0092] {
    padding: 0;
    margin: 0;
    width: 100px;
    height: 15px;
    background: #eee
}

.health-index-skeleton .item .item-body .item-image[data-v-7a7b0092] {
    width: 107px;
    height: 80px;
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    background: #eee
}

.health-index-skeleton .item .item-foot[data-v-7a7b0092] {
    font-size: 10px;
    color: #777;
    padding: 10px 0;
    margin: 15px 0 0
}

.health-index-skeleton .item .item-foot span[data-v-7a7b0092] {
    display: inline-block;
    padding: 0 7px 0 0;
    width: 20px;
    height: 10px;
    background: #eee
}

ul[data-v-11861c63] {
    list-style-type: none;
    padding-left: 0
}

li[data-v-11861c63] {
    border-bottom: 1px solid #e6e6e6
}

.health-item-box[data-v-11861c63] {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    margin: .2rem;
    color: #000
}

.health-item-box .health-desc[data-v-11861c63] {
    color: #707070;
    font-size: .8em;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical
}

.health-item-box .health-content p[data-v-11861c63] {
    margin: .2rem .3rem
}

.health-item-box .health-ava[data-v-11861c63] {
    flex: 0 0 1rem;
    width: 1rem;
    height: 1rem;
    border-radius: .6rem;
    border: 1px solid #e5e5e5
}

.no-concerns-content[data-v-11861c63] {
    height: 100%;
    position: relative
}

.no-concerns-content .no-concerns-inner[data-v-11861c63] {
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    white-space: nowrap;
    text-align: center
}

.no-concerns-content .no-concerns-inner p[data-v-11861c63] {
    font-size: .28rem;
    color: #999;
    text-align: center
}

.no-concerns-content .no-concerns-inner img[data-v-11861c63] {
    width: 2.4rem;
    display: block;
    margin: 0 auto
}

.no-concerns-content .no-concerns-inner button[data-v-11861c63] {
    width: 2.8rem;
    height: .7rem;
    border: none;
    background: #0bd68c;
    border-radius: .35rem;
    color: #fff
}

span[data-v-11f43db4] {
    display: block
}

ul[data-v-11f43db4] {
    list-style-type: none;
    padding-left: 0
}

li[data-v-11f43db4] {
    border-bottom: 1px solid #e6e6e6
}

.skeleton-item-box[data-v-11f43db4] {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    margin: 10px
}

.skeleton-item-box .skeleton-content[data-v-11f43db4] {
    display: inline-block;
    vertical-align: top
}

.skeleton-item-box .skeleton-content .title[data-v-11f43db4] {
    width: 160px;
    background: #eee;
    height: 20px;
    margin: 10px
}

.skeleton-item-box .skeleton-content .skeleton-desc[data-v-11f43db4] {
    display: block;
    height: 20px;
    width: 200px;
    background: #eee;
    margin: 10px
}

.skeleton-item-box .skeleton-ava[data-v-11f43db4] {
    width: 50px;
    height: 50px;
    background: #eee;
    border-radius: 30px
}

.fade-appear,.fade-enter-active,.fade-leave-active {
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.fade-appear,.fade-enter-active {
    -webkit-animation-name: ivuFadeIn;
    animation-name: ivuFadeIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.fade-leave-active {
    -webkit-animation-name: ivuFadeOut;
    animation-name: ivuFadeOut;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.fade-appear,.fade-enter-active {
    opacity: 0
}

.fade-appear,.fade-enter-active,.fade-leave-active {
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear
}

@-webkit-keyframes ivuFadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@keyframes ivuFadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@-webkit-keyframes ivuFadeOut {
    0% {
        opacity: 1
    }

    to {
        opacity: 0
    }
}

@keyframes ivuFadeOut {
    0% {
        opacity: 1
    }

    to {
        opacity: 0
    }
}

.ease-appear,.ease-enter-active,.ease-leave-active {
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.ease-appear,.ease-enter-active {
    -webkit-animation-name: ivuEaseIn;
    animation-name: ivuEaseIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.ease-leave-active {
    -webkit-animation-name: ivuEaseOut;
    animation-name: ivuEaseOut;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.ease-appear,.ease-enter-active {
    opacity: 0
}

.ease-appear,.ease-enter-active,.ease-leave-active {
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-duration: .2s;
    animation-duration: .2s
}

@-webkit-keyframes ivuEaseIn {
    0% {
        opacity: 0;
        -webkit-transform: scale(.9);
        transform: scale(.9)
    }

    to {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

@keyframes ivuEaseIn {
    0% {
        opacity: 0;
        -webkit-transform: scale(.9);
        transform: scale(.9)
    }

    to {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

@-webkit-keyframes ivuEaseOut {
    0% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    to {
        opacity: 0;
        -webkit-transform: scale(.9);
        transform: scale(.9)
    }
}

@keyframes ivuEaseOut {
    0% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    to {
        opacity: 0;
        -webkit-transform: scale(.9);
        transform: scale(.9)
    }
}

.slide-up-appear,.slide-up-enter-active,.slide-up-leave-active {
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.slide-up-appear,.slide-up-enter-active {
    -webkit-animation-name: ivuSlideUpIn;
    animation-name: ivuSlideUpIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.slide-up-leave-active {
    -webkit-animation-name: ivuSlideUpOut;
    animation-name: ivuSlideUpOut;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.slide-up-appear,.slide-up-enter-active {
    opacity: 0
}

.slide-up-appear,.slide-up-enter-active,.slide-up-leave-active {
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out
}

.slide-down-appear,.slide-down-enter-active,.slide-down-leave-active {
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.slide-down-appear,.slide-down-enter-active {
    -webkit-animation-name: ivuSlideDownIn;
    animation-name: ivuSlideDownIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.slide-down-leave-active {
    -webkit-animation-name: ivuSlideDownOut;
    animation-name: ivuSlideDownOut;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.slide-down-appear,.slide-down-enter-active {
    opacity: 0
}

.slide-down-appear,.slide-down-enter-active,.slide-down-leave-active {
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out
}

.slide-left-appear,.slide-left-enter-active,.slide-left-leave-active {
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.slide-left-appear,.slide-left-enter-active {
    -webkit-animation-name: ivuSlideLeftIn;
    animation-name: ivuSlideLeftIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.slide-left-leave-active {
    -webkit-animation-name: ivuSlideLeftOut;
    animation-name: ivuSlideLeftOut;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.slide-left-appear,.slide-left-enter-active {
    opacity: 0
}

.slide-left-appear,.slide-left-enter-active,.slide-left-leave-active {
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out
}

.slide-right-appear,.slide-right-enter-active,.slide-right-leave-active {
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.slide-right-appear,.slide-right-enter-active {
    -webkit-animation-name: ivuSlideRightIn;
    animation-name: ivuSlideRightIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.slide-right-leave-active {
    -webkit-animation-name: ivuSlideRightOut;
    animation-name: ivuSlideRightOut;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.slide-right-appear,.slide-right-enter-active {
    opacity: 0
}

.slide-right-appear,.slide-right-enter-active,.slide-right-leave-active {
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out
}

@-webkit-keyframes ivuSlideUpIn {
    0% {
        opacity: 0;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(.8);
        transform: scaleY(.8)
    }

    to {
        opacity: 1;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(1);
        transform: scaleY(1)
    }
}

@keyframes ivuSlideUpIn {
    0% {
        opacity: 0;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(.8);
        transform: scaleY(.8)
    }

    to {
        opacity: 1;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(1);
        transform: scaleY(1)
    }
}

@-webkit-keyframes ivuSlideUpOut {
    0% {
        opacity: 1;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(1);
        transform: scaleY(1)
    }

    to {
        opacity: 0;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(.8);
        transform: scaleY(.8)
    }
}

@keyframes ivuSlideUpOut {
    0% {
        opacity: 1;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(1);
        transform: scaleY(1)
    }

    to {
        opacity: 0;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(.8);
        transform: scaleY(.8)
    }
}

@-webkit-keyframes ivuSlideDownIn {
    0% {
        opacity: 0;
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        -webkit-transform: scaleY(.8);
        transform: scaleY(.8)
    }

    to {
        opacity: 1;
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        -webkit-transform: scaleY(1);
        transform: scaleY(1)
    }
}

@keyframes ivuSlideDownIn {
    0% {
        opacity: 0;
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        -webkit-transform: scaleY(.8);
        transform: scaleY(.8)
    }

    to {
        opacity: 1;
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        -webkit-transform: scaleY(1);
        transform: scaleY(1)
    }
}

@-webkit-keyframes ivuSlideDownOut {
    0% {
        opacity: 1;
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        -webkit-transform: scaleY(1);
        transform: scaleY(1)
    }

    to {
        opacity: 0;
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        -webkit-transform: scaleY(.8);
        transform: scaleY(.8)
    }
}

@keyframes ivuSlideDownOut {
    0% {
        opacity: 1;
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        -webkit-transform: scaleY(1);
        transform: scaleY(1)
    }

    to {
        opacity: 0;
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        -webkit-transform: scaleY(.8);
        transform: scaleY(.8)
    }
}

@-webkit-keyframes ivuSlideLeftIn {
    0% {
        opacity: 0;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleX(.8);
        transform: scaleX(.8)
    }

    to {
        opacity: 1;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }
}

@keyframes ivuSlideLeftIn {
    0% {
        opacity: 0;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleX(.8);
        transform: scaleX(.8)
    }

    to {
        opacity: 1;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }
}

@-webkit-keyframes ivuSlideLeftOut {
    0% {
        opacity: 1;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }

    to {
        opacity: 0;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleX(.8);
        transform: scaleX(.8)
    }
}

@keyframes ivuSlideLeftOut {
    0% {
        opacity: 1;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }

    to {
        opacity: 0;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleX(.8);
        transform: scaleX(.8)
    }
}

@-webkit-keyframes ivuSlideRightIn {
    0% {
        opacity: 0;
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
        -webkit-transform: scaleX(.8);
        transform: scaleX(.8)
    }

    to {
        opacity: 1;
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }
}

@keyframes ivuSlideRightIn {
    0% {
        opacity: 0;
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
        -webkit-transform: scaleX(.8);
        transform: scaleX(.8)
    }

    to {
        opacity: 1;
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }
}

@-webkit-keyframes ivuSlideRightOut {
    0% {
        opacity: 1;
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }

    to {
        opacity: 0;
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
        -webkit-transform: scaleX(.8);
        transform: scaleX(.8)
    }
}

@keyframes ivuSlideRightOut {
    0% {
        opacity: 1;
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }

    to {
        opacity: 0;
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
        -webkit-transform: scaleX(.8);
        transform: scaleX(.8)
    }
}

.move-up-appear,.move-up-enter-active,.move-up-leave-active {
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.move-up-appear,.move-up-enter-active {
    -webkit-animation-name: ivuMoveUpIn;
    animation-name: ivuMoveUpIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.move-up-leave-active {
    -webkit-animation-name: ivuMoveUpOut;
    animation-name: ivuMoveUpOut;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.move-up-appear,.move-up-enter-active {
    opacity: 0
}

.move-up-appear,.move-up-enter-active,.move-up-leave-active {
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out
}

.move-down-appear,.move-down-enter-active,.move-down-leave-active {
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.move-down-appear,.move-down-enter-active {
    -webkit-animation-name: ivuMoveDownIn;
    animation-name: ivuMoveDownIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.move-down-leave-active {
    -webkit-animation-name: ivuMoveDownOut;
    animation-name: ivuMoveDownOut;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.move-down-appear,.move-down-enter-active {
    opacity: 0
}

.move-down-appear,.move-down-enter-active,.move-down-leave-active {
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out
}

.move-left-appear,.move-left-enter-active,.move-left-leave-active {
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.move-left-appear,.move-left-enter-active {
    -webkit-animation-name: ivuMoveLeftIn;
    animation-name: ivuMoveLeftIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.move-left-leave-active {
    -webkit-animation-name: ivuMoveLeftOut;
    animation-name: ivuMoveLeftOut;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.move-left-appear,.move-left-enter-active {
    opacity: 0
}

.move-left-appear,.move-left-enter-active,.move-left-leave-active {
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out
}

.move-right-appear,.move-right-enter-active,.move-right-leave-active {
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.move-right-appear,.move-right-enter-active {
    -webkit-animation-name: ivuMoveRightIn;
    animation-name: ivuMoveRightIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.move-right-leave-active {
    -webkit-animation-name: ivuMoveRightOut;
    animation-name: ivuMoveRightOut;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.move-right-appear,.move-right-enter-active {
    opacity: 0
}

.move-right-appear,.move-right-enter-active,.move-right-leave-active {
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out
}

@-webkit-keyframes ivuMoveDownIn {
    0% {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
        opacity: 0
    }

    to {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }
}

@keyframes ivuMoveDownIn {
    0% {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
        opacity: 0
    }

    to {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }
}

@-webkit-keyframes ivuMoveDownOut {
    0% {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }

    to {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
        opacity: 0
    }
}

@keyframes ivuMoveDownOut {
    0% {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }

    to {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
        opacity: 0
    }
}

@-webkit-keyframes ivuMoveLeftIn {
    0% {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        opacity: 0
    }

    to {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1
    }
}

@keyframes ivuMoveLeftIn {
    0% {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        opacity: 0
    }

    to {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1
    }
}

@-webkit-keyframes ivuMoveLeftOut {
    0% {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1
    }

    to {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        opacity: 0
    }
}

@keyframes ivuMoveLeftOut {
    0% {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1
    }

    to {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        opacity: 0
    }
}

@-webkit-keyframes ivuMoveRightIn {
    0% {
        opacity: 0;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(100%);
        transform: translateX(100%)
    }

    to {
        opacity: 1;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@keyframes ivuMoveRightIn {
    0% {
        opacity: 0;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(100%);
        transform: translateX(100%)
    }

    to {
        opacity: 1;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@-webkit-keyframes ivuMoveRightOut {
    0% {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1
    }

    to {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        opacity: 0
    }
}

@keyframes ivuMoveRightOut {
    0% {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1
    }

    to {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        opacity: 0
    }
}

@-webkit-keyframes ivuMoveUpIn {
    0% {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
        opacity: 0
    }

    to {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }
}

@keyframes ivuMoveUpIn {
    0% {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
        opacity: 0
    }

    to {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }
}

@-webkit-keyframes ivuMoveUpOut {
    0% {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }

    to {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
        opacity: 0
    }
}

@keyframes ivuMoveUpOut {
    0% {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }

    to {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
        opacity: 0
    }
}

.move-notice-appear,.move-notice-enter-active,.move-notice-leave-active {
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.move-notice-appear,.move-notice-enter-active {
    -webkit-animation-name: ivuMoveNoticeIn;
    animation-name: ivuMoveNoticeIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.move-notice-leave-active {
    -webkit-animation-name: ivuMoveNoticeOut;
    animation-name: ivuMoveNoticeOut;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.move-notice-appear,.move-notice-enter-active {
    opacity: 0
}

.move-notice-appear,.move-notice-enter-active,.move-notice-leave-active {
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out
}

.jk-notice {
    width: 335px;
    margin-right: 24px;
    position: fixed;
    z-index: 1010
}

.jk-notice-notice {
    margin-bottom: 10px;
    padding: 16px;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    background: #fff;
    line-height: 1;
    position: relative;
    overflow: hidden
}

.jk-notice-notice-close {
    position: absolute;
    right: 16px;
    top: 15px;
    color: #999;
    outline: none
}

.jk-notice-notice-close i {
    font-size: 22px;
    color: #999;
    transition: color .2s ease;
    position: relative;
    top: -3px
}

.jk-notice-notice-close i:hover {
    color: #444
}

.jk-notice-notice-with-desc .jk-notice-notice-close {
    top: 11px
}

.jk-notice-title {
    font-size: 14px;
    color: #464c5b;
    padding-right: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.jk-notice-with-desc .jk-notice-title {
    margin-bottom: 8px
}

.jk-notice-with-desc.jk-notice-with-icon .jk-notice-title {
    margin-left: 51px
}

.jk-notice-desc {
    font-size: 12px;
    color: #999;
    text-align: justify;
    line-height: 1.5
}

.jk-notice-with-desc.jk-notice-with-icon .jk-notice-desc {
    margin-left: 51px
}

.jk-notice-with-icon .jk-notice-title {
    margin-left: 26px
}

.jk-notice-icon {
    position: absolute;
    left: 20px;
    margin-top: -1px;
    font-size: 16px
}

.jk-notice-icon-success {
    color: #0c6
}

.jk-notice-icon-info {
    color: #39f
}

.jk-notice-icon-warning {
    color: #f90
}

.jk-notice-icon-error {
    color: #f30
}

.jk-notice-with-desc .jk-notice-icon {
    font-size: 36px
}

.jk-notice-custom-content:after {
    content: "";
    display: block;
    width: 4px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0
}

.jk-notice-with-info:after,.jk-notice-with-normal:after {
    background: #39f
}

.jk-notice-with-success:after {
    background: #0c6
}

.jk-notice-with-warning:after {
    background: #f90
}

.jk-notice-with-error:after {
    background: #f30
}

@-webkit-keyframes ivuMoveNoticeIn {
    0% {
        opacity: 0;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(100%);
        transform: translateX(100%)
    }

    to {
        opacity: 1;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@keyframes ivuMoveNoticeIn {
    0% {
        opacity: 0;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(100%);
        transform: translateX(100%)
    }

    to {
        opacity: 1;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@-webkit-keyframes ivuMoveNoticeOut {
    0% {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1
    }

    70% {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        height: auto;
        padding: 16px;
        margin-bottom: 10px;
        opacity: 0
    }

    to {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        height: 0;
        padding: 0;
        margin-bottom: 0;
        opacity: 0
    }
}

@keyframes ivuMoveNoticeOut {
    0% {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1
    }

    70% {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        height: auto;
        padding: 16px;
        margin-bottom: 10px;
        opacity: 0
    }

    to {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        height: 0;
        padding: 0;
        margin-bottom: 0;
        opacity: 0
    }
}

.jk-modal {
    width: auto;
    margin: 0 auto;
    position: relative;
    outline: none
}

.jk-modal-hidden {
    display: none!important
}

.jk-modal-wrap {
    position: fixed;
    overflow: auto;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100000;
    -webkit-overflow-scrolling: touch;
    outline: 0
}

.jk-modal-wrap * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0)
}

.jk-modal-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(55,55,55,.6);
    height: 100%;
    z-index: 100000
}

.jk-modal-mask-hidden {
    display: none
}

.jk-modal-content {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    background-color: #fff;
    border: 0;
    border-radius: 6px;
    background-clip: padding-box
}

.jk-modal-header {
    border-bottom: 1px solid #e3e8ee;
    padding: 20px;
    line-height: 1;
    word-wrap: break-word;
    text-align: center
}

.jk-modal-header-inner,.jk-modal-header p {
    display: inline-block;
    width: 100%;
    color: #464c5b;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.jk-modal-close {
    font-size: 12px;
    position: absolute;
    overflow: hidden;
    cursor: pointer;
    top: 5px;
    right: 5px
}

.jk-modal-close i {
    font-size: 20px;
    color: #555
}

.jk-modal-body {
    padding: 15px 15px 0;
    line-height: 1.5;
    word-break: break-word
}

.jk-modal-footer {
    text-align: right;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: .3rem 0
}

.jk-modal-footer button+button {
    margin-bottom: 0
}

.jk-modal-footer .modal-btn {
    border: none;
    background: transparent;
    flex: 0 1 50%;
    text-align: center;
    padding: 12px 0
}

.jk-modal-footer .modal-btn.btn-cancle {
    color: #657180;
    border-right: 1px solid #e3e8ee
}

.jk-modal-footer .modal-btn.btn-ok {
    color: #39f;
    background: #39f;
    color: #fff;
    border-radius: 0 0 5px 0
}

.jk-modal-footer .modal-btn.btn-ok.only-one-btn {
    margin: 0 auto;
    color: #39f;
    background: #fff
}

@media (max-width: 768px) {
    .jk-modal {
        width:auto!important
    }

    .vertical-center-modal .jk-modal {
        flex: 1
    }
}

.jk-modal-confirm-head {
    text-align: center
}

.jk-modal-confirm-head-title {
    display: inline-block;
    font-size: 14px;
    color: #464c5b;
    padding: 0 10px 10px
}

.jk-modal-confirm-body {
    line-height: 1.4;
    color: #657180;
    position: relative;
    padding: 0 15px;
    text-align: center;
    min-height: .6rem
}

.jk-modal-confirm-body-icon {
    position: absolute;
    top: 0;
    left: 0
}

.jk-modal-confirm-body-icon-info {
    color: #39f
}

.jk-modal-confirm-body-icon-success {
    color: #0c6
}

.jk-modal-confirm-body-icon-warning {
    color: #f90
}

.jk-modal-confirm-body-icon-error {
    color: #f30
}

.jk-modal-confirm-body-icon-confirm {
    color: #f90
}

.jk-modal-confirm-footer {
    text-align: right;
    border-top: 1px solid #e3e8ee;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}

.jk-modal-confirm-footer button+button {
    margin-bottom: 0
}

.jk-modal-confirm-footer .modal-btn {
    border: none;
    background: transparent;
    flex: 0 1 50%;
    text-align: center;
    padding: 12px 0
}

.jk-modal-confirm-footer .modal-btn.btn-cancle {
    color: #657180;
    border-right: 1px solid #e3e8ee
}

.jk-modal-confirm-footer .modal-btn.btn-ok {
    color: #39f;
    background: #39f;
    color: #fff;
    border-radius: 0 0 5px 0
}

.jk-modal-confirm-footer .modal-btn.btn-ok.only-one-btn {
    margin: 0 auto;
    color: #39f;
    background: #fff
}

.jk-message[data-v-62365e4a] {
    position: fixed;
    left: 10%;
    top: 40px;
    width: 80%;
    text-align: center
}

.message-content[data-v-62365e4a] {
    display: inline-block;
    word-break: normal;
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    padding: 8px 15px;
    border-radius: 4px;
    background: rgba(0,0,0,.6);
    color: #fff;
    font-size: 14px
}

.jk-message-enter-active[data-v-62365e4a] {
    transition: all .4s linear;
    opacity: 1;
    -webkit-transform: translateY(50px);
    transform: translateY(50px)
}

.jk-message-leave-active[data-v-62365e4a] {
    transition: all .4s linear;
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0)
}

.jk-message-enter[data-v-62365e4a],.jk-message-leave-to[data-v-62365e4a] {
    opacity: 0;
    -webkit-transform: translateY(0);
    transform: translateY(0)
}

</style>
