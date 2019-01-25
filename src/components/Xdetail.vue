<template>
	<div class="header" :class="menu?'menu':''">
		<section class="swipe main-swiper" data-v-a079eb9c="" data-v-725f5da8="">
			<div class="swipe-wrap" style="width: 2070px;" data-v-a079eb9c="">
				<div data-v-a079eb9c="" 
				style="width: 414px; left: 0px; transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
					<a data-v-a079eb9c="" href="/swiper" class="swiper-item" rel="nofollow" style="width: 331.2px; height: 331.2px;">
						<img data-v-a079eb9c="" :src="`${list.url}`" alt="健客产品">
					</a>
				</div>
				<!-- <div data-v-a079eb9c="" style="width: 414px; left: -414px; transition-duration: 0ms; transform: translate(414px, 0px) translateZ(0px);">
					<a data-v-a079eb9c="" href="/swiper" class="swiper-item" rel="nofollow" style="width: 331.2px; height: 331.2px;">
						<img data-v-a079eb9c="" src="//img.jianke.com/suo//upload/prodimage/201812/20181228164637279!400x400.jpg" alt="健客产品">
					</a>
				</div>
				<div data-v-a079eb9c="" style="width: 414px; left: -828px; transition-duration: 0ms; transform: translate(414px, 0px) translateZ(0px);">
					<a data-v-a079eb9c="" href="/swiper" class="swiper-item" rel="nofollow" style="width: 331.2px; height: 331.2px;">
						<img data-v-a079eb9c="" src="//img.jianke.com/suo//upload/prodimage/201812/2018122816465760!400x400.jpg" alt="健客产品">
					</a>
				</div>
				<div data-v-a079eb9c="" style="width: 414px; left: -1242px; transition-duration: 0ms; transform: translate(414px, 0px) translateZ(0px);">
					<a data-v-a079eb9c="" href="/swiper" class="swiper-item" rel="nofollow" style="width: 331.2px; height: 331.2px;">
						<img data-v-a079eb9c="" src="//img.jianke.com/suo//upload/prodimage/201901/2019114141740929!400x400.jpg" alt="健客产品">
					</a>
				</div>
				<div data-v-a079eb9c="" style="width: 414px; left: -1656px; transition-duration: 0ms; transform: translate(-414px, 0px) translateZ(0px);">
					<a data-v-a079eb9c="" href="/swiper" class="swiper-item" rel="nofollow" style="width: 331.2px; height: 331.2px;">
						<img data-v-a079eb9c="" src="//img.jianke.com/suo//upload/prodimage/201812/20181228164627304!400x400.jpg" alt="健客产品">
					</a>
				</div> -->
			</div>
			<div class="swiper-controls" data-v-a079eb9c="">
				<div class="swiper-pagination" style="" data-v-a079eb9c="">
					<span class="swiper-pagination-bullet active" data-v-a079eb9c=""></span>
					<span class="swiper-pagination-bullet" data-v-a079eb9c=""></span>
					<span class="swiper-pagination-bullet" data-v-a079eb9c=""></span>
					<span class="swiper-pagination-bullet" data-v-a079eb9c=""></span>
					<span class="swiper-pagination-bullet" data-v-a079eb9c=""></span>
				</div>
			</div>
		</section>
		<div class="product-box" data-v-2ff286ed="" data-v-725f5da8="">
			<div class="product-info info-box" data-v-2ff286ed="">
				<div class="info-box-item" data-v-2ff286ed="">
					<div data-v-2ff286ed="">
						<div class="product-name" data-v-2ff286ed="">
							<h1 data-v-2ff286ed="">{{list.name}}</h1>
							<span class="quality-product" data-v-2ff286ed="">
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAYCAIAAADmjT3GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTcyN0QwMjhDNUJFMTFFNzlDRTREQThFNTNEOTA1QzUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTcyN0QwMjdDNUJFMTFFNzlDRTREQThFNTNEOTA1QzUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNCQjg1MzFDOTc2QzExRTY5RkE3RTU2NTM1MjE0OUJEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNCQjg1MzFEOTc2QzExRTY5RkE3RTU2NTM1MjE0OUJEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+akv32wAAA5ZJREFUeNpiZEg+wTBCALcYw6/PDB8eMry5xkItM//PMR8ivtdjTBFjYhiRYNTb2AAHK1Ohq8S+Es1QE6Hh5G18eTvEWGhVhuqkvS86tj+bHa9kJM9dve7xv/9UdgFjykliSgqulOPf5lhiNQGPFLHeZmRkkBVkM1PkCTcT1pLk9J1089LTb6zMjA5d16q9pX7PMi9a+XDzxff33/z8/58c/2D1FRoXj0agD5G5EN8CSYjP0WTRlOH0NtDPf2eZP37/68yDL5suvAfGrZQA24p0FV525ur1T7p3Pp958FW8lcjuIk1FEfaE+XcXHXtDZNkO9AklRT1yfMIZyJ6E+5/IJIDi7TQ7sXlHXjdseqIjzaUpyTE5SsFNmx8itSlX7cS9L6fvf6nd8LR41WMTBe6eMDn83h4yefvvPwYmJgZffcFpMQqYSi2UeK4+/W6pzCMnzHbu4TdOViaaZm9cCRszJUNESMreKN5+/fm3CA/Lmy+/sSoFpoLGTU+BabVw5UNxPpaXn34T4x+CaRu/ArRMC/EbWgJGVkBk8Ybi7ctPv+lIcd148ePnn3/sLCiRWb3+cfeO50An5i9/CCzbi90lrz37TnaUQryKFslAQUwRtOyKycbjSTxqULx97/XPv///szIxrjj1Dlh0wcWr1j0GevX7dNOgabfWn3uvLcXpoM4388BLyluvcEG4hzFFMAtkIqMUjxr0/AkspYJNhBYeew0XiZ93d8KeF1+mmlp3XFMQZm/0l/nzj8FNi3/XtY8DUhpB4hBrXYWrAiPs7ekHXmbYiz1693Pb5Q9AbvTsO9suffg2zVS/4bKmJGdfuPzqM29TbUXbtz379ef/gPgZua4mu9GC3lx58+XP7EOvKjylC1c8PPvw6/G7X15PMLbvusbPyTw/UUm29LwYH2u2k7h40TkaleH42yqYJRlmfU5m47Ry3WNgowVYRddtePKg08C9/wZQ8FC5lgeQwcgwNVqhdsOTT9//EukfTAZyHiYvb2OKwEt45KSOp0hjxDrM4KjBtzlXPW7e3c0X3kdbiADj2bXvBrDo7g+Xe/7xd8GKh0O5vw0KUOxNjv03PqUturcwScnfQPDe6x8mzVcevPk5M1bh1ec/WP08fDqey06+jZ1zF9ggd9Xi5+dk2VmocfXZ99xlD4Z/f3vD+fcypeeBPc3mQOn6jU8q1j4eNv1tRmoNIQ6HvD3sAeMIGjBGAgABBgB1qdMMap1C3gAAAABJRU5ErkJggg=="
									alt="正品保证" data-v-2ff286ed=""></span>
						</div>
						<div class="product-tip" data-v-2ff286ed="">
							<span data-v-2ff286ed=""></span>
							<div class="fav-bar" data-v-2ff286ed="">
								<div class="collect-btn" data-v-2ff286ed="">
									<i class="icon iconfont icon-collect" data-v-2ff286ed=""></i>
								</div>
								<p class="fav-number" data-v-2ff286ed="">人气：0</p>
							</div>
						</div>
						<div class="product-price" data-v-2ff286ed="">
							<p class="new-price" data-v-2ff286ed="">
								<span class="new-price-icon" data-v-2ff286ed="">￥</span>
								<span data-v-2ff286ed="" v-text="`${list.price}`"></span>
							</p>
						</div>
					</div>
				</div>
				<div class="info-box-item" data-v-2ff286ed="">
					<dl data-v-2ff286ed=""><dt data-v-2ff286ed="">功效：</dt>
						<dd data-v-2ff286ed="">
							<div class="efficacy hide" data-v-2ff286ed="" v-text="list.name "> 
								<span class="efficacy-btn" style="display:none;" data-v-2ff286ed="">收起</span>
							</div>
							<span class="efficacy-btn" style="display:;" data-v-2ff286ed="">展开</span>
						</dd>
					</dl>
					<dl data-v-2ff286ed=""><dt data-v-2ff286ed="">厂商：</dt>
						<dd data-v-2ff286ed="">Patheon Inc.</dd>
					</dl>
				</div>
			</div>
			<div class="promotion-info info-box" data-v-2ff286ed="">
				<div class="info-box-item" data-v-2ff286ed="">
					<dl class="product-sizes" data-v-2ff286ed=""><dt data-v-2ff286ed="">规格：</dt>
						<dd data-v-2ff286ed="">
							<ul data-v-2ff286ed="">
								<li class="product-size active" data-v-2ff286ed="">
									<a href="/product/856835.html" class="router-link-exact-active router-link-active" data-v-2ff286ed="">25mg*30s</a>
								</li>
							</ul>
						</dd>
					</dl>
				</div>
				<div class="info-box-item" data-v-2ff286ed="">
					<dl class="product-number" data-v-2ff286ed=""><dt data-v-2ff286ed="">数量：</dt>
						<dd data-v-2ff286ed="">
							<span class="product-number-btn reduce-btn" data-v-2ff286ed="">
								<i class="icon iconfont icon-minus" data-v-2ff286ed=""></i>-
							</span>
							<input type="number" aria-label="数量" value="1" class="product-number-btn" data-v-2ff286ed="">
							<span class="product-number-btn add-btn" data-v-2ff286ed="">
								<i class="icon iconfont icon-plus" data-v-2ff286ed=""></i>+
							</span>
						</dd>
					</dl>
				</div>
			</div>
			<div class="info-box" data-v-2ff286ed="">
				<div class="info-box-item" data-v-2ff286ed="">
					<div class="tel-box" data-v-2ff286ed="">
						<div class="consult-phone" data-v-2ff286ed="">
							<ul data-v-2ff286ed="">
								<li data-v-2ff286ed="">
									<a href="tel:4006989999" rel="nofollow" data-v-2ff286ed="">咨询电话：
										<span data-v-2ff286ed="" data-stat="1000102">400-6989-999</span>
									</a>
								</li>
								<li data-v-2ff286ed="">
									<a rel="nofollow" data-v-2ff286ed="">
										<span data-v-2ff286ed="" data-stat="1000104">
											<i class="icon iconfont icon-consult-message" data-v-2ff286ed=""></i>在线咨询
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="info-box-item" data-v-2ff286ed="">
					<dl class="product-service" data-v-2ff286ed="">
						<dt data-v-2ff286ed="">服务：</dt>
						<dd data-v-2ff286ed="">
							<span data-v-2ff286ed="">本商品由
								<em class="owner-product" data-v-2ff286ed="">健客医院</em>发货并提供服务
							</span>
						</dd>
					</dl>
				</div>
			</div>
		</div>
		<div data-v-7ecf4e21="" data-v-725f5da8="" class="tabs">
			<div data-v-7ecf4e21="" class="tab-header">
				<div class="" style="">
					<div data-v-7ecf4e21="" class="tab-header-list"><span data-v-7ecf4e21="" class="tab-active"><a data-v-7ecf4e21=""
							rel="nofollow">说明书</a></span><span data-v-7ecf4e21="" class=""><a data-v-7ecf4e21="" rel="nofollow">图文详情</a></span><span
							data-v-7ecf4e21="" class=""><a data-v-7ecf4e21="" rel="nofollow">用户评论
								<i data-v-7ecf4e21="">(5)</i></a></span></div>
				</div>
			</div>
			<div data-v-7ecf4e21="" id="tab-contain">
				<div data-v-7ecf4e21="" class="tab-panel" style="">
					<div data-v-7ecf4e21="">
						<dl data-v-7ecf4e21=""><dt data-v-7ecf4e21="">药品名称：</dt>
							<dd data-v-7ecf4e21="" >{{list.name}}</dd>
							<dd data-v-7ecf4e21=""v-text="`${list.name}`"></dd>
							<dd data-v-7ecf4e21="" v-text="`${list.name}`"></dd>
						</dl>
						<dl data-v-7ecf4e21=""><dt data-v-7ecf4e21="">主要成分：</dt>
							<dd data-v-7ecf4e21="">丙-2-基 N-[(S)-({[(2R)-1-(6-氨基-9H-嘌呤-9-基)丙-2-基]-氧化}甲基)(苯氧基)磷酰基]-l-丙氨酸酯，(2E)-丁-2-烯二酸 (2:1)</dd>
						</dl>
						<dl data-v-7ecf4e21=""><dt data-v-7ecf4e21="">性状：</dt>
							<dd data-v-7ecf4e21="">本品为黄色、圆形的薄膜衣片。除去包衣后，呈白色或类白色。片剂直径 8 mm，一面凹刻有“GSI”，另一面凹刻有“25”。</dd>
						</dl>
						<dl data-v-7ecf4e21=""><dt data-v-7ecf4e21="">适应症/功能主治：</dt>
							<dd data-v-7ecf4e21="">富马酸丙酚替诺福韦片适于治疗成人和青少年（年龄 12 岁及以上，体重至少为 35 kg）慢性乙型肝炎（参见【药理毒理】）。</dd>
						</dl>
						<dl data-v-7ecf4e21=""><dt data-v-7ecf4e21="">规格型号：</dt>
							<dd data-v-7ecf4e21="">25mg*30s</dd>
						</dl>
						<dl data-v-7ecf4e21=""><dt data-v-7ecf4e21="">用法用量：</dt>
							<dd data-v-7ecf4e21="">应当由具备慢性乙型肝炎管理经验的医生开始治疗。
								成人和青少年（年龄为 12 岁及以上且体重至少为 35 kg）：每日一次，一次一片。口服。需随食物服用。
								漏服剂量
								如果漏服一剂富马酸丙酚替诺福韦片且已超过通常服药时间不足 18 小时，则患者应尽快服用一剂，并恢复正常给药时间。如果已超过通常服药时间 18 小时以上，则患者不应服用漏服药物，仅应恢复正常给药时间。
								如果患者在服用富马酸丙酚替诺福韦片后 1 小时内呕吐，则该患者应再服用一片。
								如果患者在服用富马酸丙酚替诺福韦片后超过 1 小时呕吐，则该患者无需再服用一片。
								特殊人群
								老年人
								无需针对年龄为 65 岁及以上的患者进行富马酸丙酚替诺福韦片剂量调整（参见【药理毒理】）。
								肾功能损害
								对于肌酐清除率 (CrCl) 估计值 ≥ 15 mL/min 的成人或青少年（年龄至少为12岁，并且体重至少为 35 kg）或CrCl &lt; 15
								mL/min且正在接受血液透析的患者，无需调整富马酸丙酚替诺福韦片剂量。
								在进行血液透析当天，应在血液透析治疗完成后给予富马酸替诺福韦片（参见【药理毒理】）。
								对于CrCl &lt; 15 mL/min且未接受血液透析的患者，尚无给药剂量推荐（参见【药理毒理】）。
								肝功能损害无需针对肝功能损害患者进行富马酸丙酚替诺福韦片剂量调整（参见【注意事项】和参见【药理毒理】）。
								儿童人群
								尚未确定富马酸丙酚替诺福韦片在 12 岁以下或体重 &lt; 35 kg 的儿童中的安全性和疗效。尚无可用数据。
							</dd>
						</dl>
						<dl data-v-7ecf4e21=""><dt data-v-7ecf4e21="">不良反应：</dt>
							<dd data-v-7ecf4e21="">海外患者的安全性特征总结
								不良反应评估基于 2 项对照 3 期研究中的汇总安全性数据，研究中 866 名HBV 感染患者以双盲方式接受丙酚替诺福韦 25 mg 每日一次治疗至第 96 周（盲态研究药物暴露的中位持续时间为 104
								周）。最常报告的不良反应为头痛 (12%)、恶心 (6%) 和疲劳 (6%)。第 96 周后，患者继续接受其原始盲态治疗或接受开放标签富马酸丙酚替诺福韦片治疗。在双盲期第 96 周至第 120
								周，在接受开放标签富马酸丙酚替诺福韦片治疗的受试者亚组中未发现富马酸丙酚替诺福韦片的其他不良反应（参见【药理毒理】）。
								不良反应总结表
								在慢性乙型肝炎患者中使用丙酚替诺福韦时，已发现了以下药品不良反应（表1）。下文基于海外研究第96周分析按身体系统器官分类及发生频率列出了不良反应。频率界定如下：非常常见 (≥ 1/10)、常见（≥ 1/100 至 &lt;
								1/10）、少见（≥ 1/1,000 至 &lt; 1/100）、罕见（≥ 1/10,000 至 &lt;1/1,000）或极罕见 (&lt; 1/10,000)。
								表 1：海外受试者使用丙酚替诺福韦时发现的不良反应
								系统器官分类
								频率 不良反应
								胃肠道疾病
								常见 腹泻、呕吐、恶心、腹痛、腹胀、肠胃胀气
								全身性疾病与用药部位状况
								常见 疲劳
								神经系统疾病
								非常常见 头痛
								常见 头晕
								皮肤及皮下组织疾病
								常见 皮疹、瘙痒症
								肝胆疾病
								常见 丙氨酸氨基转移酶增加
								肌肉骨骼和结缔组织疾病
								常见 关节痛
								中国大陆患者的安全性特征总结
								中国大陆患者的不良反应评估基于 2 项 3 期研究（研究中 227 名中国大陆 HBV感染患者接受了 25 mg 每日一次丙酚替诺福韦治疗）中至第 96 周分析的安全性数据。中国大陆 HBV
								感染患者接受丙酚替诺福韦的安全性特征与 在海外2 项 3 期研究中观察到的安全性特征基本一致。
								中国大陆患者均未因不良事件停止丙酚替诺福韦治疗。
								疑似不良反应的报告
								药品批准后疑似不良反应的报告十分重要。如此可持续监测使用该药品的效益/风险平衡。在中国，要求医疗保健专业人员通过国家报告系统报告任何疑似不良反应。</dd>
						</dl>
						<dl data-v-7ecf4e21=""><dt data-v-7ecf4e21="">禁忌：</dt>
							<dd data-v-7ecf4e21="">对活性成分或以下所列任一赋形剂过敏：α乳糖、微晶纤维素、交联羧甲基纤维素钠、硬脂酸镁、聚乙烯醇、二氧化钛、聚乙二醇、滑石粉和氧化铁黄。</dd>
						</dl>
						<dl data-v-7ecf4e21=""><dt data-v-7ecf4e21="">注意事项：</dt>
							<dd data-v-7ecf4e21="">1、肝炎恶化停止治疗后突发<br>警告：已有报告指出，停止乙型肝炎治疗的患者出现了肝炎急性加重的情况（通常与血浆中 HBV DNA
								水平升高相关）。大部分病例属于自限型，但严重加重的情况（包括致命性结局）可能在停止乙型肝炎治疗之后出现。应在停止乙型肝炎治疗至少6 个月内，通过临床和实验室随访定期进行肝功能监测。如果合适，可能需要恢复乙型肝炎治疗。<br>在进展期肝病或肝硬化患者中，不建议停止治疗，因为治疗后肝炎加重可能导致肝功能失代偿。在失代偿期肝病患者中，肝病突发尤其严重，有时甚至致命。<br>治疗期间突发<br>慢性乙型肝炎自发性加重相对较为常见，特点是血清丙氨酸氨基转移酶
								(ALT) 短暂增加。开始抗病毒治疗后，一些患者的血清 ALT 可能有所增加。在代偿性肝病患者中，此类血清 ALT
								增加通常不伴有血清胆红素浓度增加或肝功能失代偿。肝硬化患者在肝炎恶化后出现肝功能失代偿的风险可能更高，因此，应在治疗期间加以严密监测。<br>2、HBV 传播<br>必须告知患者富马酸丙酚替诺福韦片不能预防通过性接触或血液污染的方式传播<br>HBV
								的风险。必须继续采取适当预防措施。<br>3、失代偿性肝病患者<br>对于患有失代偿性肝病以及 Child Pugh Turcotte (CPT) 评分 &gt; 9（即 C 级）的HBV
								感染患者，尚无富马酸丙酚替诺福韦片安全性和疗效方面的数据。这些患者出现严重肝脏或肾脏不良反应的风险可能更高。因此，应严密监测此患者人群的肝胆和肾脏各项指标和参数（参见【药理毒理】）。<br>4、乳酸性酸中毒/严重脂肪性肝肿大<br>单独使用核苷类似物（包括富马酸替诺福韦酯或其他替诺福韦前体药物）治疗或联用其它抗逆转录病毒药物治疗时，曾有发生乳酸性酸中毒和严重脂肪性肝肿大的报告，包括出现致死病例。任何患者的临床或实验室结果如果提示有乳酸性酸中毒或显著的肝毒性（可能包括肝肿大和脂肪变性，即便转氨酶没有显著升高），应当暂停富马酸丙酚替诺福韦片治疗。<br>5、肾功能损害<br>肌酐清除率
								&lt; 30 mL/min 的患者<br>在 CrCl ≥ 15 mL/min 但 &lt; 30 mL/min 的患者以及 CrCl &lt; 15 mL/min
								且正在接受血液透析的患者中，每日一次富马酸丙酚替诺福韦片的使用是基于极为有限的药代动力学数据和建模与模拟而确定。尚无使用富马酸丙酚替诺福韦片治疗 CrCl &lt; 30 mL/min 的 HBV 感染患者的安全性数据。<br>不推荐富马酸丙酚替诺福韦片用于
								CrCl &lt; 15 mL/min 且未接受血液透析的患者（参见【用法用量】）。<br>6、肾毒性<br>无法排除丙酚替诺福韦给药导致长期暴露于低水平替诺福韦而引起肾毒性的潜在风险（请参见【药理毒理】）。<br>7、合并感染
								HBV 和丙型肝炎或丁型肝炎病毒的患者<br>尚无关于富马酸丙酚替诺福韦片在合并感染丙型肝炎或丁型肝炎病毒患者中的安全性和疗效的数据。应遵循关于丙型肝炎治疗的联合用药指南（参见【药物相互作用】）。<br>8、乙型肝炎和
								HIV 合并感染<br>由于存在出现 HIV 耐药性的风险，不建议将富马酸丙酚替诺福韦片用于 HIV-1 感染的治疗。尚未确定富马酸丙酚替诺福韦片在合并感染 HIV-1 和 HBV
								的患者中的安全性和疗效。在开始富马酸丙酚替诺福韦片治疗前，应为所有 HBV 感染患者进行HIV 抗体检测，如果为阳性，应使用为合并感染 HIV-1 的患者推荐的相应抗逆转录病毒联合方案。<br>9、与其他药品合用<br>富马酸丙酚替诺福韦片不应与含丙酚替诺福韦、富马酸替诺福韦酯或阿德福韦酯的产品合用。<br>10、乳糖不耐受<br>富马酸丙酚替诺福韦片含有α乳糖。因此，患有半乳糖不耐受、Lapp
								乳糖酶缺乏症或葡萄糖-半乳糖吸收不良的罕见遗传问题的患者不应服用此药品。<br>11、对驾驶及操作机械能力的影响 <br>富马酸丙酚替诺福韦片对驾驶和操作机械的能力无影响或影响可忽略。应该告知患者在富马酸丙酚替诺福韦片治疗期间已有头晕报告。</dd>
						</dl>
						<dl data-v-7ecf4e21=""><dt data-v-7ecf4e21="">药物相互作用：</dt>
							<dd data-v-7ecf4e21="">仅在成人中进行了相互作用研究。
								富马酸丙酚替诺福韦片不应与含富马酸替诺福韦酯、丙酚替诺福韦或阿德福韦酯的药品合用。
								可能影响丙酚替诺福韦的药品
								丙酚替诺福韦由 P-gp 和乳腺癌耐药蛋白 (BCRP) 转运。预计 P-gp 诱导剂类药品会降低丙酚替诺福韦血浆浓度，这可能导致富马酸丙酚替诺福韦片失去疗效（见表 2）。
								富马酸丙酚替诺福韦片与抑制 P-gp 和/或 BCRP 的药品合用可能增加丙酚替诺福韦血浆浓度。
								在体外，丙酚替诺福韦是 OATP1B1 和 OATP1B3 的底物。丙酚替诺福韦的体内分布可能会受到 OATP1B1 和/或 OATP1B3 活性的影响。
								丙酚替诺福韦对其他药品的影响
								在体外，丙酚替诺福韦不是 CYP1A2、CYP2B6、CYP2C8、CYP2C9、CYP2C19 或 CYP2D6 的抑制剂。在体内，其也并非 CYP3A 的抑制剂或诱导剂。
								在体外，丙酚替诺福韦不是人尿苷二磷酸葡糖醛酸基转移酶 (UGT) 1A1 的抑制剂。尚不清楚丙酚替诺福韦是否是其他 UGT 酶的抑制剂。
								下表2中总结了富马酸丙酚替诺福韦片与可能合用的药品之间的药物相互作用信息（“↑”表示增加，“↓”表示降低，“←→”表示无变化“b.i.d.”表示每日两次，“s.d.”表示单次给药，“q.d.”表示每日一次；“IV”表示静脉方式）。所述药物相互作用基于采用丙酚替诺福韦开展的研究得出，或者是使用富马酸丙酚替诺福韦片时可能出现的药物相互作用。
								详见说明书。</dd>
						</dl>
						<p data-v-7ecf4e21="" class="introduct-hd">
							贮藏：
							<span data-v-7ecf4e21="" class="introduct-bd">30°C以下保存</span></p>
						<p data-v-7ecf4e21="" class="introduct-hd">
							包装：
							<span data-v-7ecf4e21="" class="introduct-bd">高密度聚乙烯 (HDPE) 瓶，使用带感应活性铝箔内衬的聚丙烯连续螺纹防儿童开启瓶盖密封。每瓶均含硅胶干燥剂和聚酯棉塞。
								提供以下包装规格：每盒内含有 1 瓶，每瓶含 30 片薄膜衣片。</span></p>
						<p data-v-7ecf4e21="" class="introduct-hd">
							有效期：
							<span data-v-7ecf4e21="" class="introduct-bd">24月</span></p>
						<p data-v-7ecf4e21="" class="introduct-hd">
							批准文号：
							<span data-v-7ecf4e21="" class="introduct-bd">H20180060</span></p>
						<p data-v-7ecf4e21="" class="introduct-hd">
							生产企业：
							<span data-v-7ecf4e21="" class="introduct-bd">Patheon Inc.</span></p>
						<!---->
					</div>
				</div>
				<div data-v-7ecf4e21="" class="tab-panel" style="display: none;">
					<!---->
					<div data-v-7ecf4e21="">
						<div data-v-7ecf4e21="" id="tab-wapManual">
							<div style="text-align:center;">
								<img src="//img.jianke.com/userfiles/images/201901/5418654186_20190104102832025.jpg" width="750" alt=""><img
											src="//img.jianke.com/userfiles/images/201901/8805188051_20190104102832519.jpg" width="750" alt=""><img src="//img.jianke.com/userfiles/images/201901/5733157331_20190104102832966.jpg"
											width="750" alt=""><img src="//img.jianke.com/userfiles/images/201901/3446034460_20190104102833352.jpg" width="750"
											alt=""><img src="//img.jianke.com/userfiles/images/201901/6832568325_20190104102833837.jpg" width="750" alt=""><img
											src="//img.jianke.com/userfiles/images/201901/6017960179_20190104102834220.jpg" width="750" alt=""><img src="//img.jianke.com/userfiles/images/201901/9718297182_20190104102834429.jpg"
											width="750" alt=""><img src="//img.jianke.com/userfiles/images/201901/4702647026_20190104102834694.jpg" width="750"
											alt=""><img src="//img.jianke.com/userfiles/images/201901/8373283732_20190104102835233.jpg" width="750" alt=""><img
											src="//img.jianke.com/userfiles/images/201901/5017150171_20190104102835632.jpg" width="750" alt=""><img src="//img.jianke.com/userfiles/images/201901/1945119451_20190104102836088.jpg"
											width="750" alt=""><img src="//img.jianke.com/userfiles/images/201901/6116461164_20190104102836515.jpg" width="750"
											alt=""><img src="//img.jianke.com/userfiles/images/201901/5301953019_20190104102836894.jpg" width="750" alt=""><img
											src="//img.jianke.com/userfiles/images/201901/9757397573_20190104102837353.jpg" width="750" alt=""><img src="//img.jianke.com/userfiles/images/201901/6401264012_20190104102837765.jpg"
											width="750" alt=""><img src="//img.jianke.com/userfiles/images/201901/1856618566_20190104102838231.jpg" width="750"
											alt=""><img src="//img.jianke.com/userfiles/images/201901/3262332623_20190104102851633.jpg" width="750" alt=""><img
											src="//img.jianke.com/userfiles/images/201901/3703737037_20190104102852146.jpg" width="750" alt=""><img src="//img.jianke.com/userfiles/images/201901/8846888468_20190104102852675.jpg"
											width="750" alt=""><img src="//img.jianke.com/userfiles/images/201901/9004190041_20190104102853142.jpg" width="750"
											alt=""><img src="//img.jianke.com/userfiles/images/201901/1417214172_20190104102853743.jpg" width="750" alt=""><img
											src="//img.jianke.com/userfiles/images/201901/1574515745_20190104102854210.jpg" width="750" alt=""><img src="//img.jianke.com/userfiles/images/201901/2015820158_20190104102854732.jpg"
											width="750" alt=""><img src="//img.jianke.com/userfiles/images/201901/2173121731_20190104102855198.jpg" width="750"
											alt=""><img src="//img.jianke.com/userfiles/images/201901/5058850588_20190104102855800.jpg" width="750" alt=""><img
											src="//img.jianke.com/userfiles/images/201901/2487624876_20190104102856132.jpg" width="750" alt=""><img src="//img.jianke.com/userfiles/images/201901/6471964719_20190104102856405.jpg"
											width="750" alt=""><img src="//img.jianke.com/userfiles/images/201901/8886688866_20190104102856790.jpg" width="750"
											alt=""><img src="//img.jianke.com/userfiles/images/201901/8572885728_20190104102857065.jpg" width="750" alt=""><img
											src="//img.jianke.com/userfiles/images/201901/1770817708_20190104102857605.jpg" width="750" alt=""><img src="//img.jianke.com/userfiles/images/201901/4185541855_20190104102857998.jpg"
											width="750" alt=""><img src="//img.jianke.com/userfiles/images/201901/4342743427_20190104102858466.jpg" width="750"
											alt=""><img src="//img.jianke.com/userfiles/images/201901/9799797997_20190104102858720.jpg" width="750" alt=""><br>
							</div>
						</div>
					</div>
				</div>
				<div data-v-7ecf4e21="" class="tab-panel" style="display: none;">
					<section data-v-6da93acb="" data-v-7ecf4e21="" class="evalution">
						<div data-v-6da93acb="">
							<div data-v-6da93acb="" class="evalute-all">
								<p data-v-6da93acb="" class="evalute-good">100%
									<a data-v-6da93acb="">好评率</a></p>
								<p data-v-6da93acb="" class="evalute-whole">
									整体评价：
									<a data-v-306f672e="" data-v-6da93acb="" class="rate"><span data-v-306f672e="" class="star whole"><i
											data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 20px;"></i></span><span
											data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 20px;"></i></span><span
											data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 20px;"></i></span><span
											data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 20px;"></i></span><span
											data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 20px;"></i></span></a></p>
							</div>
							<ul data-v-6da93acb="" class="comment-list">
								<li data-v-6da93acb="" class="comment-item"><a data-v-306f672e="" data-v-6da93acb="" class="rate comment-star"><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span></a>
									<p data-v-6da93acb="" class="comment-text">健客网值得信赖，物流速度也快！</p>
									<p data-v-6da93acb="" class="comment-images less"></p>
									<div data-v-6da93acb="" class="comment-autor"><span data-v-6da93acb="">186****7032</span><span data-v-6da93acb="">2019-1-20
											9:05</span></div>
								</li>
								<li data-v-6da93acb="" class="comment-item"><a data-v-306f672e="" data-v-6da93acb="" class="rate comment-star"><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span></a>
									<p data-v-6da93acb="" class="comment-text">第一次购买，顺丰快递，疗效用后再评</p>
									<p data-v-6da93acb="" class="comment-images less"></p>
									<div data-v-6da93acb="" class="comment-autor"><span data-v-6da93acb="">138****4948</span><span data-v-6da93acb="">2019-1-19
											15:30</span></div>
								</li>
								<li data-v-6da93acb="" class="comment-item"><a data-v-306f672e="" data-v-6da93acb="" class="rate comment-star"><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span></a>
									<p data-v-6da93acb="" class="comment-text">不错！！！！！！！！！</p>
									<p data-v-6da93acb="" class="comment-images"><span data-v-6da93acb=""><img data-v-6da93acb="" alt="https://img5.jianke.com/mall/approval/201901/6891fc73db2f47a199efaff44f7be94b.jpg"
											data-src="https://img5.jianke.com/mall/approval/201901/6891fc73db2f47a199efaff44f7be94b.jpg" src="https://img5.jianke.com/mall/approval/201901/6891fc73db2f47a199efaff44f7be94b.jpg"
											lazy="loaded"></span><span data-v-6da93acb=""><img data-v-6da93acb="" alt="https://img5.jianke.com/mall/approval/201901/b8634b23e8964a07a5bf154ce508d463.jpg"
											data-src="https://img5.jianke.com/mall/approval/201901/b8634b23e8964a07a5bf154ce508d463.jpg" src="https://img5.jianke.com/mall/approval/201901/b8634b23e8964a07a5bf154ce508d463.jpg"
											lazy="loaded"></span><span data-v-6da93acb=""><img data-v-6da93acb="" alt="https://img5.jianke.com/mall/approval/201901/c4204909db5f41f2989d3c54ff19db2e.jpg"
											data-src="https://img5.jianke.com/mall/approval/201901/c4204909db5f41f2989d3c54ff19db2e.jpg" src="https://img5.jianke.com/mall/approval/201901/c4204909db5f41f2989d3c54ff19db2e.jpg"
											lazy="loaded"></span></p>
									<div data-v-6da93acb="" class="comment-autor"><span data-v-6da93acb="">180****8282</span><span data-v-6da93acb="">2019-1-16
											19:37</span></div>
								</li>
								<li data-v-6da93acb="" class="comment-item"><a data-v-306f672e="" data-v-6da93acb="" class="rate comment-star"><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span></a>
									<p data-v-6da93acb="" class="comment-text">正品包装，物流迅速，亲自送达。</p>
									<p data-v-6da93acb="" class="comment-images less"></p>
									<div data-v-6da93acb="" class="comment-autor"><span data-v-6da93acb="">138****7408</span><span data-v-6da93acb="">2019-1-15
											13:38</span></div>
								</li>
								<li data-v-6da93acb="" class="comment-item"><a data-v-306f672e="" data-v-6da93acb="" class="rate comment-star"><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span><span
										data-v-306f672e="" class="star whole"><i data-v-306f672e="" class="icon iconfont icon-star-score-on" style="font-size: 16px;"></i></span></a>
									<p data-v-6da93acb="" class="comment-text">值得信赖，就是价格高了点!</p>
									<p data-v-6da93acb="" class="comment-images less"></p>
									<div data-v-6da93acb="" class="comment-autor"><span data-v-6da93acb="">189****1608</span><span data-v-6da93acb="">2019-1-7
											6:46</span></div>
								</li>
							</ul>
							<div data-v-04ca0784="" data-v-6da93acb="" class="pagination">
								<span data-v-04ca0784="">
									<a data-v-04ca0784="" class="hasPrevPage">上一页</a>
								</span>
								<span data-v-04ca0784="" class="page-button">1/1
									<i data-v-04ca0784="" class="icon iconfont icon-arrows-down"></i>
								</span>
								<span data-v-04ca0784="">
									<a data-v-04ca0784="" class="hasNextPage">下一页</a>
								</span>
								<div data-v-04ca0784="" class="page-modal" style="display: none;">
									<div data-v-04ca0784="" class="page-bg"></div>
									<div data-v-04ca0784="" class="page-box">
										<ul data-v-04ca0784="" class="page-list">
											<li data-v-04ca0784="" class="active">
												第1页
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<!---->
					</section>
				</div>
			</div>
			<div data-v-7ecf4e21="" class="tabs-footer">
				<button  data-v-7ecf4e21="" class="footer-text" data-stat="1000117">
					<span data-v-7ecf4e21="">更多内容</span>
					<i data-v-7ecf4e21="" class="icon iconfont icon-detail-down"></i>
				</button>
				<button data-v-7ecf4e21="" class="footer-text" style="display: none;">
					<span data-v-7ecf4e21="">点击收回</span>
					<i data-v-7ecf4e21="" class="icon iconfont icon-detail-down"></i>
				</button>
			</div>
		</div>
		<div data-v-62f1ba4d="" data-v-725f5da8="" class="product-suit" data-stat="1000111" style="display: none;">
			<div data-v-62f1ba4d="" class="product-suit-title">
				套装组合
			</div>
			<div data-v-62f1ba4d="" class="product-suit-list"></div>
		</div>
		<section data-v-a079eb9c="" data-v-725f5da8="" class="swipe">
			<div data-v-a079eb9c="" class="swiper-controls">
				<div data-v-a079eb9c="" class="swiper-pagination" style="display: none;"></div>
			</div>
		</section>
		<div data-v-91713868="" data-v-725f5da8="" class="product-similar">
			<div data-v-91713868="" class="product-similar-title">
				相关推荐
			</div>
			<ul data-v-91713868="" class="similar-list">
				<li data-v-91713868="" class="similar-item">
					<div data-v-eb0ca386="" data-v-91713868="" class="similar-item-box">
						<a data-v-eb0ca386="" href="/product/12428.html" class="similar-info" data-stat="1000113">
							<img data-v-eb0ca386="" alt="片仔癀(片仔癀)-产品图" data-src="//img.jianke.com/suo/upload/prodimage/201604/201642695747314!200x200.jpg"
								src="//img.jianke.com/suo/upload/prodimage/201604/201642695747314!200x200.jpg" lazy="loaded">
							<p data-v-eb0ca386="">片仔癀(片仔癀)</p>
						</a>
						<p data-v-eb0ca386="" class="similar-price">
							<span data-v-eb0ca386="">￥530.00</span>
							<a data-v-eb0ca386="" href="/product/12428.html" class="similar-goto">去看看</a>
						</p>
					</div>
				</li>
				<li data-v-91713868="" class="similar-item">
					<div data-v-eb0ca386="" data-v-91713868="" class="similar-item-box">
						<a data-v-eb0ca386="" href="/product/1234.html" class="similar-info" data-stat="1000114">
							<img data-v-eb0ca386="" alt="三磷酸腺苷二钠片(白云山)-产品图" data-src="//img.jianke.com/suo/upload/prodimage/201601/2016114154913516!200x200.jpg"
								src="//img.jianke.com/suo/upload/prodimage/201601/2016114154913516!200x200.jpg" lazy="loaded">
							<p data-v-eb0ca386="">三磷酸腺苷二钠片(白云山)</p>
						</a>
						<p data-v-eb0ca386="" class="similar-price">
							<span data-v-eb0ca386="">￥8.50</span>
							<a data-v-eb0ca386="" href="/product/1234.html" class="similar-goto">去看看</a>
						</p>
					</div>
				</li>
				<li data-v-91713868="" class="similar-item">
					<div data-v-eb0ca386="" data-v-91713868="" class="similar-item-box"><a data-v-eb0ca386="" href="/product/73440.html"
							class="similar-info" data-stat="1000115">
							<img data-v-eb0ca386="" alt="恩替卡韦分散片(雷易得)-产品图" data-src="//img.jianke.com/suo/upload/prodimage/201712/20171213185057160!200x200.jpg"
								src="//img.jianke.com/suo/upload/prodimage/201712/20171213185057160!200x200.jpg" lazy="loaded">
							<p data-v-eb0ca386="">恩替卡韦分散片(雷易得)</p>
						</a>
						<p data-v-eb0ca386="" class="similar-price">
							<span data-v-eb0ca386="">￥66.00</span>
							<a data-v-eb0ca386="" href="/product/73440.html" class="similar-goto">去看看</a>
						</p>
					</div>
				</li>
				<li class="similar-item" data-v-91713868="">
					<div class="similar-item-box" data-v-eb0ca386="" data-v-91713868=""><a href="/product/4959.html" class="similar-info"
							data-v-eb0ca386="" data-stat="1000116"><img alt="多烯磷脂酰胆碱胶囊(易善复)-产品图" data-v-eb0ca386="" data-src="//img.jianke.com/suo/mall/product/201901/69321af0b0e44e59b2335a3e0a581fc8!200x200.jpg"
							src="//img.jianke.com/suo/mall/product/201901/69321af0b0e44e59b2335a3e0a581fc8!200x200.jpg" lazy="loaded">
							<p data-v-eb0ca386="">多烯磷脂酰胆碱胶囊(易善复)</p>
						</a>
						<p class="similar-price" data-v-eb0ca386=""><span data-v-eb0ca386="">￥55.00</span><a href="/product/4959.html"
								lass="similar-goto" data-v-eb0ca386="">去看看</a></p>
					</div>
				</li>
			</ul>
		</div>
		<div data-v-467169e6="" data-v-725f5da8="">
			<div data-v-467169e6="" class="search-bar">
				<form data-v-467169e6="" class="search-contain"><input data-v-467169e6="" type="text" placeholder="请输入关键字搜索"
					aria-label="搜索关键字"><a data-v-467169e6="" rel="nofollow" class="search-btn"><i data-v-467169e6="" class="icon iconfont icon-search"></i></a></form>
			</div>
			<div data-v-467169e6="" class="back-index"><a data-v-467169e6="" href="/" class="router-link-active">返回首页</a></div>
		</div>
		<section data-v-15333cf9="" data-v-725f5da8="" class="activity-contain">
			<h3 data-v-15333cf9="" class="activity-header buttom-line">健客活动</h3>
			<p data-v-15333cf9="" class="activity-item buttom-line">
				<a data-v-15333cf9="" href=" https://m-zt.jianke.com/activity/mobile/act-6863db20-175f-411d-86b8-32e08542d1bd?mdxqylb20190118">带上金戈回家过年，您是家里的顶梁柱</a><b
				data-v-15333cf9="" class="line"></b></p>
			<p data-v-15333cf9="" class="activity-item buttom-line">
				<a data-v-15333cf9="" href="https://m-zt.jianke.com/activity/mobile/act-b913eb4b-801d-4085-a214-e15d2d5b5021?hdlb">皮肤用药全场满减！日常用药低至6.9元起</a><b
				data-v-15333cf9="" class="line"></b></p>
			<p data-v-15333cf9="" class="activity-item buttom-line">
				<a data-v-15333cf9="" href="https://m-zt.jianke.com/activity/mobile/act-eecbe1b8-fdec-4f39-b20c-17fe7651da6a">“营”在起跑线！29.9买一赠一</a><b
				data-v-15333cf9="" class="line"></b></p>
		</section>
	</div>


</template>

<script>
	import bus from "../configs/bus.js";
	export default {
		data() {
			return {
				menu: false,
				list:{}
			}
		},
		methods: {
			menu2() {
				bus.$on("menu", res => {
					this.menu = res;
				});
			},
			async getlist(){
				let name = this.$store.getters.getcurrentDetail
				
				console.log(name)
				this.list = name 
				console.log(this)	
			}
		},
		mounted() {
			this.menu2();
		},
		created(){
			this.getlist();
		}
	}
</script>

<style>
	.header {
		padding-top: 0.88rem;
	}

	.menu {
		margin-top: 1.25rem;
	}
</style>
