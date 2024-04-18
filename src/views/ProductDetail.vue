<template>
  <div data-scroll-watch="" class="fade_in title">
    <div class="breadcrumbs">
      <a href="/">首頁</a> /
      <a @click="getLayer1Product()">{{ layer1_name }}</a> /
      <span>四季春碳培烏龍茶</span>
    </div>
  </div>
  <div id="product_detail">
    <div class="main_info">
      <div class="main_pic">
        <div class="m_pic">
          <img
            id="zoom_03"
            :src="url + 'images/product/M/' + img"
            :data-zoom-image="url + 'images/product/' + img"
          />
        </div>
        <div id="thumb_pic">
          <ul id="gallery_01">
            <li v-for="item in photo" :key="item.id">
              <a
                href="#"
                :data-image="url + 'images/product/M/' + item.photo"
                :data-zoom-image="url + 'images/product/' + item.photo"
                ><img
                  id="zoom_03"
                  :src="url + 'images/product/S/' + item.photo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="right_info">
        <h3 class="product_tit">{{ product.title }}</h3>
        <p class="subtitle">
          {{ product.sub_title }}
        </p>
        <table class="prod_table" v-if="spec != ''">
          <tr v-for="item in spec" :key="item.id">
            <th></th>
            <td>{{ item.title }}</td>
            <td>{{ item.content }}</td>
          </tr>
        </table>
        <div class="shop_link" v-if="shop != '' && shop.length > 0">
          <h6>買好茶</h6>
          <!-- 
            :href="item.url"
            :href="`${item.url}`"   //網址前有http需使用這個方法
           -->
          <a
            :href="`${item.url}`"
            target="blank"
            v-for="item in shop"
            :key="item.id"
          >
            <p>{{ item.shopName }}</p>
          </a>
        </div>
      </div>
      <div class="mobile_slider">
        <!-- 小尺寸用-->
        <h3 class="product_tit">{{ product.title }}</h3>
        <p class="subtitle">{{ product.sub_title }}</p>
        <ul class="bx_mobile" v-if="photo != '' && photo.length > 0">
          <li v-for="item in photo" :key="item.id">
            <img :src="url + 'images/product/' + item.photo" />
          </li>
        </ul>
        <table class="prod_table" v-if="spec != '' && spec.length > 0">
          <tr v-for="item in spec" :key="item.id">
            <th></th>
            <td>{{ item.title }}</td>
            <td>{{ item.content }}</td>
          </tr>
        </table>
        <div class="shop_link" v-if="shop != '' && shop.length > 0">
          <h6>買好茶</h6>
          <a
            :href="`${item.url}`"
            target="blank"
            v-for="item in shop"
            :key="item.id"
          >
            <p>{{ item.shopName }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
  <h2 class="main_title">關於好茶</h2>
  <div class="product_int">
    <div v-html="content"></div>
  </div>
</template>

<script>
import axios from "axios";
import all from "@/service/all";

export default {
  name: "productDetail",
  data() {
    return {
      // 由上頁取得的id
      id: this.$route.params.id,
      layer1: this.$route.params.layer1,
      photo: [],
      spec: [],
      product: "",
      shop: [],
      layer1_name: "",
      url: this.$img,
      img: "",
      content: "",
    };
  },
  mounted() {
    this.getProduct();
    this.getPhoto();
    this.getSpec();
    this.getShop();
    this.getLayer1();
    this.getContent();
  },
  methods: {
    async getContent() {
      const res = await axios.get(this.$api + all.getContent + "/" + this.id);
      if (res.status == 200) {
        this.content = res.data.content;
      }
    },

    async getProduct() {
      const res = await axios.get(this.$api + all.getProduct + "/" + this.id);
      if (res.status == 200) {
        this.product = res.data;
      }
    },

    async getPhoto() {
      const res = await axios.get(this.$api + all.getPhoto + "/" + this.id);
      if (res.status == 200) {
        this.photo = res.data;
        if (this.photo != "" && this.photo.length > 0) {
          this.img = this.photo[0].photo;
        }
      }
    },

    async getSpec() {
      const res = await axios.get(this.$api + all.getSpec + "/" + this.id);
      if (res.status == 200) {
        this.spec = res.data;
      }
    },

    async getShop() {
      const res = await axios.get(this.$api + all.getShop + "/" + this.id);
      if (res.status == 200) {
        this.shop = res.data;
      }
    },

    async getLayer1() {
      const res = await axios.get(
        this.$api + all.getLayer1 + "/" + this.layer1
      );
      if (res.status == 200) {
        this.layer1_name = res.data.layer1_name;
      }
    },
    getLayer1Product() {
      this.$router.push({
        name: "layer1",
        params: { layer1: this.layer1 },
      });
    },
  },
};
</script>
