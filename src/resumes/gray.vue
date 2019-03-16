<template>
  <div class="container">
    <div class="left-col">
      <div class="avatar"/>
      <h3 class="name">{{ data.name }}</h3>
      <div class="position">
        <span>{{lang.position}}:</span>
        <strong>{{ data.position }}</strong>
      </div>
      <h3 class="contact-title">CONTACT</h3>
      <div class="contact">
        <div class="item">
          <i class="iconfont icon-phone"></i>
          <span>{{data.cotact.phone}}</span>
        </div>
        <div class="item">
          <i class="iconfont icon-github"></i>
          <span>{{data.cotact.github}}</span>
        </div>
        <div class="item">
          <i class="iconfont icon-email"></i>
          <span>{{data.cotact.email}}</span>
        </div>
      </div>
    </div>
    <div class="right-col">
      <div class="title">
        <i class="iconfont icon-education"></i>
        <strong>{{lang.education}}</strong>
      </div>
      <div class="content" v-for="(item,idx) in data.education" :key="idx + 'edu'">
        <div class="meta">
          <span>{{ item.timeperiod}}</span>
          <span>{{ item.university}}</span>
          <span>{{ item.major}}</span>
        </div>
        <p class="details">{{ item.description}}</p>
      </div>

      <div class="title">
        <i class="iconfont icon-experience"></i>
        <strong>{{lang.experience}}</strong>
      </div>
      <div class="content" v-for="(item,idx) in data.experience" :key="idx + 'exp'">
        <div class="meta">
          <span>{{ item.timeperiod}}</span>
          <span>{{ item.company}}</span>
          <span>{{ item.job}}</span>
        </div>
        <div class="block" v-for="(subitem,idx) in item.projects" :key="idx + 'detls'">
          <span class="name">{{ subitem.name }}</span>
          <p class="details">{{ subitem.description }}</p>
        </div>
      </div>

      <div class="title">
        <i class="iconfont icon-project"></i>
        <strong>{{lang.projects}}</strong>
      </div>
      <div class="content" v-for="(item,idx) in data.projects" :key="idx + 'pro'">
        <div class="block">
          <span class="name">{{ item.name}}</span>
          <p class="details">{{ item.description}}</p>
        </div>
      </div>

      <div class="title">
        <i class="iconfont icon-skill"></i>
        <strong>{{lang.skills}}</strong>
      </div>
      <div class="content" v-for="(item,key) in data.skills" :key="key">
        <div class="block">
          <span class="details">{{ item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import lang from "../../data/lang";
import data from "../../data/index";

export default {
  name: "blue",
  created: function(){
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  color: #2c3e50;
  overflow: hidden;
  font-family: "Avenir", Helvetica, Arial, sans-serif, "Microsoft YaHei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.left-col {
  width: 28%;
  height: 100%;
  float: left;
  padding: 18% 3% 0 3%;
  background: #f5f5f5;
  padding-bottom: 0;
}
.right-col {
  width: 60%;
  float: left;
  height: 100%;
  padding: 0 4% 0 2%;
  padding-top: 5%;
}
.avatar {
  background: url(../../data/avatar.jpg);
  background-position: center;
  background-size: cover;
  width: 160px;
  height: 200px;
  margin: 0 auto;
  border-radius: 4px;
}
.name {
  margin: 22px 0 20px;
  text-align: center;
  font-size: 20px;
}
.position {
  margin: 10px 0;
  text-align: center;
}
.position > span {
  font-size: 16px;
  margin-right: 8px;
}
.position > strong {
  font-size: 17px;
  font-weight: 600;
}
.contact-title {
  text-align: center;
  opacity: 0.3;
  margin: 40px 0;
  font-size: 20px;
  font-family: sans-serif;
}
.contact {
  margin-top: 30px;
  overflow: hidden;
}
.contact > .item {
  display: flex;
  align-items: center;
  margin-bottom: 34px;
}
.contact > .item > .iconfont {
  font-size: 26px;
  color: #555;
  margin-left: 10px;
}
.contact > .item > span {
  font-size: 17px;
  margin-left: 20px;
  text-align: center;
}

.title {
  position: relative;
  padding: 0 5%;
  margin: 20px 0 26px;
  display: flex;
  align-items: center;
}
.title:first-child {
  margin-top: 0;
}
.title > .iconfont {
  position: absolute;
  left: 0;
  bottom: -5px;
  color: #555;
  font-size: 34px;
}
.title > strong {
  margin-left: 5%;
  font-size: 20px;
  color: #3e5871;
}
.title:after {
  position: absolute;
  content: "";
  width: 90%;
  height: 2px;
  bottom: -10px;
  left: 10%;
  background: #3e5871;
}
.content {
  margin-left: 10%;
}
.meta {
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.meta > span {
  font-size: 16px;
}
.block {
  margin-bottom: 12px;
}
.block > .name {
  display: inline-block;
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: 600;
}
.details {
  margin: 6px 0;
  line-height: 1.55;
  font-size: 15px;
}

.dots {
  color: #d0d0d0;
  margin: 40px 0;
  text-align: center;
}
.dots > .icon-dot {
  margin: 0 2px;
}
</style>