<template>

          <div class="map" id="map">
        <el-amap vid="amapDemo"  :center="center" :zoom="zoom" class="amap-demo">
        </el-amap>
    </div>
</template>




<script>
export default {
    name: 'HelloeWorld',
    data () {
        return {
            zoom:12,
                center: [121.59996, 31.197646],
                
                
        }
    }
}
</script>




<style lang="less" scoped>
  #map{
		width:80vw;
        height:30vh;
        margin: 0 auto;
	}
</style>