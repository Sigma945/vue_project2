<template>
  <div data-scroll-watch="" class="fade_in title">
    <div class="breadcrumbs"><a href="/">首頁</a> / <span>好茶</span></div>
    <h1 class="top_title">Product</h1>
    <div class="top_banner">
      <img src="/img/banner_product.jpg" alt="News" />
    </div>
  </div>
  <div class="productlist" v-for="item in list" :key="item.id">
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div class="hover ehover13">
        <a href="#" @click="detail(item.layer1, item.id)">
          <img
            :src="url + 'images/product/' + item.photo"
            class="img-responsive"
          />
          <div class="overlay">
            <h2>{{ item.sub_title }}</h2>
            <p>more <i aria-hidden="true" class="fa fa-leaf"></i></p>
          </div>
        </a>
      </div>
      <p class="product_tit">{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import all from "@/service/all";

export default {
  name: "productList",
  data() {
    return {
      layer1: this.$route.params.layer1,
      list: [],
      url: this.$img,
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      const res = await axios.get(this.$api + all.getList + "/" + this.layer1);
      if (res.status == 200) {
        this.list = res.data;
        console.log(res.data);
      }
    },
    detail(layer1, id) {
      this.$router.push({
        name: "productDetail",
        params: { layer1, id },
      });
    },
  },
};
</script>
