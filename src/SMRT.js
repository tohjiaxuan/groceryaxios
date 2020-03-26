import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
          //labels:['2020-3-05',4,5,6],
          labels:[],
          datasets: [
            {
              label: 'MRT, LRT, Bus and Taxi Riders in Singapore',
               data:[],
              //backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"grey",
              backgroundColor:'grey',
              fill:false
            }
          ]
          
        },
        options: {
           
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            }
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a').then(response=>{
        // console.log(response.data.result.records)
        this.results = response.data.result.records
        for (let key in this.results) {
            // console.log(this.results[key].average_ridership)
            this.chartdata.datasets[0].data.push(this.results[key].average_ridership)
            this.chartdata.labels.push(key+'')
        }
        this.renderChart(this.chartdata, this.options)
    })
    
    }
    
    },
     mounted(){
        //console.log('Do I come here')
        this.fetchData()
        
     }

    
    
    
}