<script lang="ts">
    import printJS from 'print-js';
    import health_calc from "@widlestudiollp/health-calculation";
    
    
    const formValues = {
      gender : "Male",
      age: 0,
      weight: 0,
      weightType: "Pound",
      height: 0,
      heightType: "Feet",
      result : 0,
      summary: "",
      resultType: "",
    }
    
    
    
    
    function Result() {
      
        formValues.result = health_calc.bmr(formValues.gender, formValues.age, formValues.weight, formValues.weightType,formValues.height,formValues.heightType)
    
        console.log(formValues)
      
    }
    
    
    function ClientPrint() {
      printJS({ printable: 'result-print', type: 'html', header: 'calculationviz.com | Fixed Deposit Calculator' })
    }
    
    
    
    
    
    
    </script>
    
    
    
    <div class="row">
          <div class="col-md-4">
            <div class="card" >
                    <div class="card-header">
                      <h3 class="card-title">Healthy Weight Calculator</h3>
                    </div>
                    <div class="card-body">
                      <div class="mb-3">
                            <div class="row">
                              <div class="col-6">
                                <div class="form-label">Select Gender</div>
                                <div>
                                  <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" value="Male" name="radios-inline"   bind:group={ formValues.gender} on:input={ () => {Result()} }>
                                    <span class="form-check-label">Men</span>
                                  </label>
                                  <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" value="Female" name="radios-inline" bind:group={ formValues.gender} on:input={ () => {Result()} }>
                                    <span class="form-check-label">Women</span>
                                  </label>
                                  
                                </div>
                              </div>
                              <div class="col-6">
                                  <label class="form-label">Age</label>
                                  <div class="input-group">
                                        <input type="number" bind:value={formValues.age} on:input={ () => {Result()} }  class="form-control"> 
                                        <span class="input-group-text">
                                          Years
                                        </span>
                                  </div>
                              </div>
                            </div>
                        </div>
                      
                        <div class="mb-3">
                                  <label class="form-label">Height</label>
                                  <div class="input-group">
                                        <input type="number" bind:value={formValues.height} on:input={ () => { Result() } }  class="form-control"> 
                                        <select class="form-select w-20"  bind:value={formValues.heightType} on:change={() => { Result() } }>
                                            <option   value="Feet">Feet</option>
                                            <option  value="Inches">Inches</option>
                                            <option value="Meters">Meters</option>
                                        </select>
                                    
                                    
                                    
                                  </div>
                        </div>
                        <div class="mb-3">
                                  <label class="form-label">Weight</label>
                                  <div class="input-group">
                                        <input type="number" bind:value={formValues.weight}  on:input={ () => {Result()}  } class="form-control"> 
                                        <select class="form-select w-20"  bind:value={formValues.weightType} on:change={() => {Result()}}>
                                            <option  value="Pound">Pound</option>
                                            <option value="Kgs">Kgs</option>
                                            
                                        </select>
                                    
                                    
                                    
                                  </div>
                        </div>
                        <div class="mb-3">
                                  <label class="form-label page-title text-uppercase" for="">Healthy Weight:&nbsp{ formValues.result }&nbsp %</label>
                                  
                        </div>
                        <pre>
                          {JSON.stringify(formValues, null,2)}
                        </pre>
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
                                  <label class="form-label page-title text-uppercase" for="">Body Fat:</label>
                                  <div class="input-group mb-2">
                                    
                                    <p class ="page-title" >{formValues.result} &nbsp %</p>
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
                          <div class="accordion" id="accordion-example">
                            <div class="accordion-item">
                              <h2 class="accordion-header" id="heading-1">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false">
                                  What is Body Fat?
                                </button>
                              </h2>
                              <div id="collapse-1" class="accordion-collapse collapse" data-bs-parent="#accordion-example" style="">
                                <div class="accordion-body pt-0">
                                  <p>Body fat is more than just a number on a scale; it’s a vital part of our bodies. It plays a crucial role in protecting internal organs, insulating the body, and serving as an energy reserve. However, maintaining a healthy body fat percentage is important for overall health.</p>
                                </div>
                              </div>
                            </div>
                            <div class="accordion-item">
                              <h2 class="accordion-header" id="heading-2">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false">
                                  Why Calculate Body Fat?
                                </button>
                              </h2>
                              <div id="collapse-2" class="accordion-collapse collapse" data-bs-parent="#accordion-example" style="">
                                <div class="accordion-body pt-0">
                                  <p>Knowing your body fat percentage can be a more accurate indicator of health than weight alone. It helps distinguish between pounds that come from body fat and those that come from lean body mass or muscle.</p>
          
                                </div>
                              </div>
                            </div>
                            <div class="accordion-item">
                              <h2 class="accordion-header" id="heading-3">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false">
                                  What are ranges for Body Fat?
                                </button>
                              </h2>
                              <div id="collapse-3" class="accordion-collapse collapse" data-bs-parent="#accordion-example">
                                <div class="accordion-body pt-0">
                                  <table class="table table-vcenter card-table">
                                    <tr>
                                      <th>Category</th>
                                      <th>Men</th>
                                      <th>Women</th>
                                    </tr>
                                    <tr>
                                      <td>Essential fat</td>
                                      <td>2-5%</td>
                                      <td>10-13%</td>
                                    </tr>
                                    <tr>
                                      <td>Athletes</td>
                                      <td>6-13%</td>
                                      <td>14-20%</td>
                                    </tr>
                                    <tr>
                                      <td>Fitness</td>
                                      <td>14-17%</td>
                                      <td>21-24%</td>
                                    </tr>
                                    <tr>
                                      <td>Average</td>
                                      <td>18-24%</td>
                                      <td>25-31%</td>
                                    </tr>
                                    <tr>
                                      <td>Obese</td>
                                      <td>25% and above</td>
                                      <td>32% and above</td>
                                    </tr>
                                  </table>
    
                                </div>
                              </div>
                            </div>
                            <div class="accordion-item">
                              <h2 class="accordion-header" id="heading-4">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false">
                                  What are Limitations of Body Fat?
                                </button>
                              </h2>
                              <div id="collapse-4" class="accordion-collapse collapse" data-bs-parent="#accordion-example">
                                <div class="accordion-body pt-0">
                                  <h3>Limitations:</h3>
                                  <ul>
                                    <li>Indirect and imperfect measurement that does not distinguish between body fat and lean body mass.</li>
                                    <li>Not as accurate a predictor of body fat in the elderly as it is in younger and middle-aged adults.</li>
                                    <li>Shows ethnic and gender differences at the same Body Mass Index (BMI).</li>
                                    <li>Assessments often show higher body fat percentages than recommended, questioning the realism of ideal percentages.</li>
                                    <li>BMI does not distinguish between lean muscle mass and body fat, possibly misclassifying individuals with high muscle mass.</li>
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