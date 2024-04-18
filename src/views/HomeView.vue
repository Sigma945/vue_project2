<template>
  <video
    autoplay="true"
    muted="true"
    loop="true"
    preload="auto"
    style="width: 100%; height: auto"
  >
    <source src="img/video/index_video.mp4" type="video/mp4" />
    <source src="img/video/index_video.ogv" type="video/ogv" />
  </video>
  <div class="index_banner">
    <img src="img/video/index_video.jpg" style="width: 100%" />
  </div>
  <div class="index-list">
    <div
      class="col-lg-3 col-md-4 col-sm-6 col-xs-12"
      v-for="item in product"
      :key="item.id"
    >
      <div class="hover ehover13">
        <a href="#" @click="detail(item.layer1, item.id)"
          ><img
            :src="url + 'images/product/' + item.photo"
            class="img-responsive" />
          <div class="overlay">
            <h2>
              {{ item.sub_title }}
            </h2>
            <p>more <i aria-hidden="true" class="fa fa-leaf"></i></p></div
        ></a>
      </div>
      <p class="product_tit">{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import all from "@/service/all";

export default {
  name: "HomeView",
  data() {
    return {
      product: [],
      url: this.$img,
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    async getProduct() {
      const res = await axios.get(this.$api + all.getHomeProduct);
      if (res.status == 200) {
        this.product = res.data;
      }
    },
    detail(layer1, id) {
      this.$router.push({
        name: "productDetail",
        params: { layer1: layer1, id: id },
      });
    },
  },
};
</script>
