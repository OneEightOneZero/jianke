<template>
  <div data-v-272cdcd6 data-v-5cb28b68 class="cart-list">
    <div data-v-272cdcd6>
      <div data-v-272cdcd6 class="cart-item-contain">
        <div data-v-38a55694 data-v-272cdcd6 class="cart-item-contain" style="display: none;">
          <div data-v-38a55694 class="cart-item-title rx-title">
            <label
              data-v-0fe15bb6
              data-v-38a55694
              class="jk-checkbox-wrapper jk-checkbox-wrapper-checked"
            >
              <!---->
              <span data-v-0fe15bb6 class="jk-checkbox jk-checkbox-checked">
                <span data-v-0fe15bb6 class="jk-checkbox-inner large"></span>
                <!---->
                <input data-v-0fe15bb6 type="checkbox" class="jk-checkbox-input">
              </span>
              健客大药房网订店送
            </label>
            <span data-v-38a55694 class="cart-item-rxtips">您的订单交由健客线下药店委托第三方快递为您配送</span>
          </div>
        </div>
      </div>
    </div>
    <!---->
    <div data-v-272cdcd6 class="no-car">
      <img
        data-v-272cdcd6
        src="data:image/png;base64,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"
        alt
      >
      <div data-v-272cdcd6 class="tips">购物车空空如也，感觉不会再爱了ㄟ( ▔, ▔ )ㄏ</div>
      <a data-v-272cdcd6 href="/#/app/xindex" class="index-btn router-link-active">随便逛逛</a>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>