<script lang="ts">
import printJS from 'print-js';
import health_calc from "@widlestudiollp/health-calculation";


const formValues = {
  gender : "Men",
  weight: 0,
  weightType: "Pound",
  height: 0,
  heightType: "Feet",
  distance: 0,
  distanceType: "miles",
  time: 0,
  timeType: "min",
  Result : "",
  summary: "",
  resultType: "",
}




function Result() {
  
    formValues.Result = health_calc.pace(formValues.distance, formValues.distanceType,formValues.time, formValues.timeType) ;

    
}


function ClientPrint() {
  printJS({ printable: 'result-print', type: 'html', header: 'calculationviz.com | Fixed Deposit Calculator' })
}






</script>



<div class="row">
      <div class="col-md-4 h-100">
        <div class="card " >
                <div class="card-header">
                  <h3 class="card-title">PACE Calculator</h3>
                </div>
                <div class="card-body">
                  <div class="mb-3">
                            <div class="form-label">Select Gender</div>
                            <div>
                              <label class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" value="Men" name="radios-inline"   bind:group={ formValues.gender}>
                                <span class="form-check-label">Men</span>
                              </label>
                              <label class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" value="Women" name="radios-inline" bind:group={ formValues.gender} >
                                <span class="form-check-label">Women</span>
                              </label>
                              
                            </div>
                    </div>
                  
                    <div class="mb-3">
                              <label class="form-label" for="">Distance</label>
                              <div class="input-group">
                                    <input type="number" bind:value={formValues.distance} on:input={ () => {Result()} }  class="form-control"> 
                                    <select class="form-select w-20"  bind:value={formValues.distanceType} on:change={() => {Result()}}>
                                        <option   value="miles">miles</option>
                                        <option  value="kms">kms</option>
                                        <option value="meters">meters</option>
                                    </select>
                                
                                
                                
                              </div>
                    </div>
                    <div class="mb-3">
                              <label class="form-label" for="">Time</label>
                              <div class="input-group">
                                    <input type="number" bind:value={formValues.time} on:input={ () => {Result()} }  class="form-control"> 
                                    <select class="form-select w-20"  bind:value={formValues.timeType} on:change={() => {Result()}}>
                                        <option value="sec">sec</option>
                                        <option value="min">min</option>
                                        <option value="hour">hour</option>
                                    </select>
                                
                                
                                
                              </div>
                    </div>
                    
                    <div class="mb-3">
                              <label class="form-label page-title text-uppercase" for="">PACE:&nbsp{ formValues.Result }&nbsp </label>
                              
                    </div>
                    
                    <div class={formValues.resultType} >
                      {formValues.summary}
                    </div>

                   
                       

                  
                  
                </div>
                
          </div>
      
  </div>


    <div class="col-md-8">
                  <div class="card h-100">
                      <div class="card-header">
                        <h3 class="card-title">Result:</h3>
                      </div>
                    <div class="card-body" id="result-print">
                      
                      <div class="row">
                          <div class="col-2">
                              <label class="form-label text-uppercase" for="">Gender</label>
                              <div class="input-group mb-2">
                                
                                <p class ="" >{formValues.gender }</p>
                              </div>
                          </div>
                          <div class="col-2">
                              <label class="form-label  text-uppercase" for="">Distance</label>
                              <div class="input-group mb-2">
                                
                                <p class ="" >{`${formValues.distance}  ${formValues.distanceType}` }</p>
                              </div>
                          </div>
                          <div class="col-2">
                              <label class="form-label  text-uppercase" for="">Time </label>
                              <div class="input-group mb-2">
                                
                                <p class ="" >{`${formValues.time}  ${formValues.timeType}` }</p>
                              </div>
                          </div>
                          
                      </div>
                      <div class="row">
                          
                          <div class="col-3">
                              <label class="form-label page-title text-uppercase" for="">PACE:</label>
                              <div class="input-group mb-2">
                                
                                <p class ="page-title" >{formValues.Result} </p>
                              </div>
                          </div>
                          
                      </div>
                      
                    </div>
                    <div class="card-footer text-end ">
                          
                          <a href="#" class="btn btn-facebook w-20" on:click={ ClientPrint }>
                            <!-- Download SVG icon from http://tabler-icons.io/i/brand-facebook -->
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-printer"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" /><path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" /><path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" /></svg>
                            Print
                          </a>
                        
                    </div>
                    
                  </div>
    </div>

</div>






<style>
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            input[type="number"] {
                -moz-appearance: textfield;
            }
</style>