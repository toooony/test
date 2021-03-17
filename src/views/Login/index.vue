<template>
    <div>
        <div>登录页面</div>
        <div>{{msg}}</div>
        <el-form status-icon ref="form" label-width="100px" class="login-form">
            <el-form-item label="用户名" prop="pass">
                <el-input type="password" v-model="info.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="checkPass">
                <el-input type="password" v-model="info.paasword" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm()">登录</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name:'Login',
    data(){
        return{
            msg:'Hello word!',
            info:{
                name:'',
                paasword:''
            }
        }
    },
    mounted(){
        console.log(1111)
    },
    methods:{
        // 登录方法
        submitForm(){
            localStorage.setItem('token','sadfasdfas')
            setTimeout(() => {
              localStorage.removeItem('token')  
            }, 1 * 60 * 1000);
            this.$router.push('/home')
        }
    }
}
</script>
<style lang="scss" scoped>
.login-form{
    margin: 10vw auto;
    width: 30vw;
    height: 40vh;
    background: #409EFF20;
    padding: 20px 20px;
}
</style>