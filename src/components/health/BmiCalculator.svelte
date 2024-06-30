<script lang="ts">
import printJS from 'print-js';
import health_calc from "@widlestudiollp/health-calculation";


const formValues = {
  gender : "Men",
  weight: 0,
  weightType: "Pound",
  height: 0,
  heightType: "Feet",
  bmi : 0,
  summary: "",
  resultType: "",
}




function bmiResult() {
  
    formValues.bmi = health_calc.bmi(formValues.weight, formValues.weightType, formValues.height, formValues.heightType)

    if(formValues.bmi >= 18.5 && formValues.bmi <= 25){
        formValues.summary = "You are Normal. Weight is under control"
        formValues.resultType = "alert alert-success"
    }

    if(formValues.bmi >= 25 && formValues.bmi <= 30){
        formValues.summary = "You are Overweight. Do some Excerises daily."
        formValues.resultType = "alert alert-warning"
    }
    if(formValues.bmi > 30 ){
        formValues.summary = "You are Obesse. You really need to consult Doctor."
        formValues.resultType = "alert alert-danger"
    }
    if(formValues.bmi < 18.5 ){
        formValues.summary = "You are underweight. Increase your weight and have healthy diet."
        formValues.resultType = "alert alert-danger"
    }
    if(formValues.bmi == 0 && formValues.bmi == 0){
        formValues.summary = "You are Normal. Weight is under control"
        formValues.resultType = "d-none"
    }

  

    

    
  
}


function ClientPrint() {
  printJS({ printable: 'result-print', type: 'html', header: 'calculationviz.com | Fixed Deposit Calculator' })
}






</script>



<div class="row">
      <div class="col-md-4">
        <div class="card" >
                <div class="card-header">
                  <h3 class="card-title">Body Mass Index Calculator</h3>
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
                              <label class="form-label" for="">Height</label>
                              <div class="input-group">
                                    <input type="number" bind:value={formValues.height} on:input={ () => {bmiResult()} }  class="form-control"> 
                                    <select class="form-select w-20"  bind:value={formValues.heightType} on:change={() => {bmiResult()}}>
                                        <option   value="Feet">Feet</option>
                                        <option  value="Inches">Inches</option>
                                        <option value="Meters">Meters</option>
                                    </select>
                                
                                
                                
                              </div>
                    </div>
                    <div class="mb-3">
                              <label class="form-label" for="">Weight</label>
                              <div class="input-group">
                                    <input type="number" bind:value={formValues.weight}  on:input={ () => {bmiResult()}  } class="form-control"> 
                                    <select class="form-select w-20"  bind:value={formValues.weightType} on:change={() => {bmiResult()}}>
                                        <option  value="Pound">Pound</option>
                                        <option value="Kgs">Kgs</option>
                                        
                                    </select>
                                
                                
                                
                              </div>
                    </div>
                    <div class="mb-3">
                              <label class="form-label page-title text-uppercase" for="">BMI:&nbsp{ formValues.bmi }&nbsp Kg/m<sup>2</sup></label>
                              
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
                              <label class="form-label  text-uppercase" for="">Weight</label>
                              <div class="input-group mb-2">
                                
                                <p class ="" >{`${formValues.weight}  ${formValues.weightType}` }</p>
                              </div>
                          </div>
                          <div class="col-2">
                              <label class="form-label  text-uppercase" for="">Height </label>
                              <div class="input-group mb-2">
                                
                                <p class ="" >{`${formValues.height}  ${formValues.heightType}` }</p>
                              </div>
                          </div>
                          
                      </div>
                      <div class="row">
                          
                          <div class="col-3">
                              <label class="form-label page-title text-uppercase" for="">BMI:</label>
                              <div class="input-group mb-2">
                                
                                <p class ="page-title" >{formValues.bmi} &nbsp Kg/m<sup>2</sup></p>
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

<div class="row">
    <div class="col-md-8">
      <div class="card mt-4">

                    <div class="card-body">
                      <label for="" class="page-title">Frequently Asked Questions - Body Mass Index</label>
                      <div class="accordion mt-2" id="accordion-example">
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="heading-1">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false">
                              What is Body Mass Index?
                            </button>
                          </h2>
                          <div id="collapse-1" class="accordion-collapse collapse" data-bs-parent="#accordion-example" style="">
                            <div class="accordion-body pt-0">
                              <p>BMI, or Body Mass Index, is a measure that uses your height and weight to work out if your weight is healthy. It's an estimate of body fat and a good gauge of your risk for diseases that can occur with more body fat.</p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="heading-2">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false">
                              How Body Mass Index is calculated?
                            </button>
                          </h2>
                          <div id="collapse-2" class="accordion-collapse collapse" data-bs-parent="#accordion-example" style="">
                            <div class="accordion-body pt-0">
                              <p>The formula for BMI is: <strong>BMI = kg/m<sup>2</sup></strong></p>
                              <ul>
                                <li><strong>kg</strong> is a person's weight in kilograms</li>
                                <li><strong>m<sup>2</sup></strong> is their height in meters squared</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="heading-3">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false">
                              What are ranges for Body Mass Index?
                            </button>
                          </h2>
                          <div id="collapse-3" class="accordion-collapse collapse" data-bs-parent="#accordion-example">
                            <div class="accordion-body pt-0">
                              <h3>Categories:</h3>
                              <ul>
                                <li>Underweight: Below 18.5</li>
                                <li>Normal weight: 18.5–24.9</li>
                                <li>Overweight: 25–29.9</li>
                                <li>Obesity: BMI of 30 or greater</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="heading-4">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false">
                              What are Limitations of Body Mass Index?
                            </button>
                          </h2>
                          <div id="collapse-4" class="accordion-collapse collapse" data-bs-parent="#accordion-example">
                            <div class="accordion-body pt-0">
                              <h3>Limitations:</h3>
                                <ul>
                                  <li>Doesn't differentiate between muscle and fat.</li>
                                  <li>May not be accurate for all ethnic groups.</li>
                                  <li>Not suitable for pregnant women, children, and athletes.</li>
                                </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
      </div>
      
    </div>
    <div class="col-md-4" >
        <div class="card mt-4">
           <div class="card-body">
              <label for="" class="page-title">Related Health Calculators</label>

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