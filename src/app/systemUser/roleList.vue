<template>
  <div>
    角色列表roleList
    <br>
    <br>
    第{{cur_page}}页
    <br>
    <br>
    <div class="pagination">
        <el-pagination
                @current-change ="handleCurrentChange"
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        cur_page: 1,
      }
    },
    created(){
      console.log("created")
    },
    computed:{
      data(){
        return console.log("computed")
      }
    },
    methods:{
      handleCurrentChange(val){
        this.cur_page = val;
        console.log(val)
      }
    }
  }
</script>
