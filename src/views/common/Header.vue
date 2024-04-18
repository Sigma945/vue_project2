<template>
  <nav class="navbar navbar-default bootsnav">
    <div class="top-search">
      <div class="container">
        <div class="input-group">
          <span class="input-group-addon"><i class="fa fa-search"></i></span>
          <input
            type="text"
            placeholder="Search Products"
            class="form-control"
          /><span class="input-group-addon close-search"
            ><i class="fa fa-times"></i
          ></span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="attr-nav lang_bar">
        <ul>
          <li class="search">
            <a href="#"><i class="fa fa-search"></i></a>
          </li>
        </ul>
      </div>

      <div class="navbar-header">
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbar-menu"
          class="navbar-toggle"
        >
          <i class="fa fa-bars"></i></button
        ><a href="/index" class="navbar-brand"
          ><img src="img/brand/logo.svg" alt="" class="logo"
        /></a>
      </div>

      <div id="navbar-menu" class="collapse navbar-collapse">
        <ul
          data-in="fadeInDown"
          data-out="fadeOutUp"
          class="nav navbar-nav navbar-right"
        >
          <li>
            <a href="/about">
              <span class="nav_img">
                <img src="/img/icons/icon_about.svg" alt="" />
              </span>
              <p class="nav_p">關於</p></a
            >
          </li>
          <li>
            <a href="/news">
              <span class="nav_img">
                <img src="/img/icons/news_icon.svg" alt="" />
              </span>
              <p class="nav_p">最新消息</p></a
            >
          </li>
          <li class="dropdown">
            <a href="#" data-toggle="dropdown" class="dropdown-toggle">
              <span class="nav_img">
                <img src="/img/icons/icon_product.svg" alt="" />
              </span>
              <p class="nav_p">好茶</p></a
            >
            <ul class="dropdown-menu">
              <li v-for="item in layer1" :key="item.id">
                <a href="#" @click="list(item.id)">{{ item.layer1_name }}</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/knowl"
              ><span class="nav_img"
                ><img src="/img/icons/icon_knowl.svg" alt=""
              /></span>
              <p class="nav_p">品茶知識</p></a
            >
          </li>
          <li>
            <a href="/contact"
              ><span class="nav_img"
                ><img src="/img/icons/icon_contact.svg" alt=""
              /></span>
              <p class="nav_p">聯絡我們</p></a
            >
          </li>
        </ul>
        <ul class="lang_bar">
          <li class="lang"><a href="#">中文/</a></li>
          <li class="lang"><a href="#">En/</a></li>
          <li class="lang"><a href="#">日本語</a></li>
        </ul>
      </div>
      <!-- /.navbar-collapse-->
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import all from "@/service/all";

export default {
  name: "header",
  data() {
    return {
      layer1: sessionStorage.getItem("layer1"),
    };
  },
  mounted() {
    this.getLayer1();
  },
  methods: {
    async getLayer1() {
      const res = await axios.get(this.$api + all.getFrontLayer1);
      if (res.status == 200) {
        this.layer1 = res.data;
        window.sessionStorage.setItem("layer1", JSON.stringify(res.data));
      }
    },
    list(layer1) {
      this.$router.push({
        name: "productList",
        params: { layer1: layer1 },
      });
    },
  },
};
</script>
