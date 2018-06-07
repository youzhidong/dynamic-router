<template>
  <div class="login-container">
    <el-form class="login-form" autoComplete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">登录</h3>
      </div>
      <el-form-item >
        <el-input name="username" type="text" v-model="user.username" autoComplete="on" placeholder="username" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input name="password" :type="passwordType" @keyup.enter.native="handleLogin" v-model="user.password" autoComplete="on" placeholder="password" />
      </el-form-item>
      <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>
      <div class="tips">
        <span>超级用户 : admin</span>
        <span>密码 :随便</span>
      </div>
      <div class="tips">
        <span>普通用户 : common</span>
        <span>密码 :随便</span>
      </div>
    </el-form>


  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: 'login',
    data() {
      return {
        user: {
          username: '',
          password: ''
        },
        loading: false,
      }
    },
    methods: {
      ...mapActions({add_Routes: 'add_Routes'}),

      handleLogin() {
        // 这里为了方便就设置两个用户，其它不允许
        if (this.user.username !== 'common' && this.user.username !== 'admin') {
          return
        }
        this.loading = true
        this.$api.login(this.user.username, this.user.password).then((res) => {
          if (res.status === 200) {
            // 将路由信息，菜单信息，用户信息存到sessionStorage里
            sessionStorage.setItem('menuData', JSON.stringify(res.data.navData))
            sessionStorage.setItem('user', this.user.username)
            sessionStorage.setItem('routes', JSON.stringify(res.data.routerData))
            this.add_Routes(res.data.routerData) //触发vuex里的增加路由
          }
        })
      }
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  $bg:#2d3a4b;
  $light_gray:#eee;

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      }
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 520px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        font-weight: 400;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
      .set-language {
        color: #fff;
        position: absolute;
        top: 5px;
        right: 0px;
      }
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
    .thirdparty-button {
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
  }
</style>
