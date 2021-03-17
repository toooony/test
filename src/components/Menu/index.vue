<template>
    <el-menu :default-openeds="[]" class="app-menu">
        <template v-for="(item,index) in dataArr">
            <el-submenu :index="'bb'+index" :key="index">
                <template slot="title">{{item.name}}</template>
                <el-menu-item-group v-for="(el,g) in item.children" :key="g">
                    <el-menu-item :index="'aa'+index+g" @click="changePage('/'+item.path +'/'+ el.path)">{{el.name}}</el-menu-item>
                 </el-menu-item-group>
            </el-submenu>
        </template>
    </el-menu>
</template>
<script>
export default {
    name:'Menu',
    data(){
        return{
            dataArr:[]
        }
    },
    mounted(){
        this.handleSetMenuData()
    },
    methods:{
        // 设置页面菜单
        handleSetMenuData(){
            console.log(this.$router.options.routes[0].children)
            this.dataArr = this.$router.options.routes[0].children
        },
        // 切换页面方法
        changePage(ipath){
            console.log(ipath)
            this.$router.push(ipath)
        }
    }
}
</script>