<template>
  <div id="app">
    <Top></Top>
    <div class="content">
      <div class="leftMenu">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;position:absolute;left:20px;top:-80px;width:120px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu  theme="dark" default-active="adminResourceList" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" unique-opened router>
        <!-- <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router> -->
          <el-submenu index='1'>
            <div slot="title">
              <i class="el-icon-time"></i>
              <span slot="title">系统管理</span>
            </div>
            <el-menu-item-group>
              <!-- <el-menu-item :index="item.index">
                  <i :class="item.icon"></i>{{ item.title }}
              </el-menu-item> -->
              <el-menu-item index="roleList">角色列表-翻页</el-menu-item>
              <el-menu-item index="adminResourceList">资源列表</el-menu-item>
              <el-menu-item index="userList">用户列表</el-menu-item>
              <el-menu-item index="departmentList">部门列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-submenu index='2'>
            <div slot="title">
              <i class="el-icon-time"></i>
              <span slot="title">订单管理</span>
            </div>
            <el-menu-item-group>
              <el-menu-item index="orderList">订单列表</el-menu-item>
              <el-menu-item index="payList">支付列表</el-menu-item>
              <el-menu-item index="rePayList">重复支付列表</el-menu-item>
              <el-menu-item index="peccancyList">违章列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>

      <router-view style="padding-left:64px;"></router-view>
    </div>
  </div>
</template>

<script>
  import Top from './components/top.vue'
  export default {
    components:{
      Top,
    },
    data() {
      return {
        isCollapse: false,//导航栏的展开或收起
        items: []
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
*{
  margin:0;
  padding:0;
}
a{text-decoration: none;color:none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

.content{position:relative;}
.leftMenu{position:absolute;left: 0;top:0;}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
