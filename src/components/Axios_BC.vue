<template>
    <div id="main">
        <div id="chart">
            <axiosExample></axiosExample>
        
        </div>
        <div id="chart">
            <PSIIndex></PSIIndex>
        
        </div>
        <div id="chart">
            <Covid19></Covid19>
        
        </div>
        <div id="chart">
            <SMRT></SMRT>
        
        </div>
        <!-- <div id="biggerchart">
            <CallAPI></CallAPI>
        
        </div> -->
        
    </div>
</template>

<script>
import axiosExample from '../axiosExample.js'
import PSIIndex from '../PSIIndex.js'
import Covid19 from '../Covid19.js'
import SMRT from '../SMRT.js'
// import CallAPI from '../components/CallAPI.vue'

export default {
    components:{
        axiosExample,PSIIndex,Covid19,SMRT,
        // CallAPI
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
    height:240px;
    width:350px;
    border-style: solid;
    border-color:rgb(155, 84, 84);
    border-width: 1px;
    padding-bottom: 160px;
    float:left;
}
/* #biggerchart{
    height:240px;
    width:800px;
    border-style: solid;
    border-color:rgb(155, 84, 84);
    border-width: 1px;
    padding-bottom: 60px;
    float:left;
} */
</style>