<script lang="ts">
    import printJS from 'print-js';
    import {differenceInDays , lightFormat} from 'date-fns';
    
    const formValues = {
      from_day : 0,
      from_month : 0,
      from_year : 0,
      to_day : 0,
      to_month : 0,
      to_year : 0,
      in_days : 0,
      in_months : 0,
      in_year : 0,
    };
    
    function Result() {


            
      
        
            formValues.in_days = differenceInDays(
              new Date(formValues.from_year, formValues.from_month, formValues.from_day), new Date(formValues.to_year, formValues.to_month, formValues.to_day)
            );

            
      
    
        
    
        
      
    }
    
    
    function ClientPrint() {
      printJS({ printable: 'result-print', type: 'html', header: 'calculator.cafe | Count Days Calculator' })
    }
    
    
    
    
    
    
    </script>
    
    
    
    <div class="row">
          <div class="col-md-4">
            <div class="card" >
                    <div class="card-header">
                      <h3 class="card-title">Count Days Calculator</h3>
                    </div>
                    <div class="card-body">
                     
                      
                        <div class="mb-3">
                            <label class="form-label" for="">From</label>
                            <div class="row g-2">
                              
                              <div class="col-3">
                                <input type="number" bind:value={formValues.from_day} class="form-control" placeholder="DD" >
                              </div>
                              <div class="col-5">
                                <select name="user[month]" bind:value={formValues.from_month} class="form-select">
                                  
                                  <option value="1">January</option>
                                  <option value="2">February</option>
                                  <option value="3">March</option>
                                  <option value="4">April</option>
                                  <option value="5">May</option>
                                  <option selected value="6">June</option>
                                  <option value="7">July</option>
                                  <option value="8">August</option>
                                  <option value="9">September</option>
                                  <option value="10">October</option>
                                  <option value="11">November</option>
                                  <option value="12">December</option>
                                </select>
                              </div>
                              <div class="col-4">
                                <input type="number" class="form-control" bind:value={formValues.from_year} placeholder="YYYY" >
                              </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="">To</label>
                            <div class="row g-2">
                              
                              <div class="col-3">
                                <input type="number" bind:value={formValues.to_day} class="form-control" placeholder="DD" >
                              </div>
                              <div class="col-5">
                                <select name="user[month]" bind:value={formValues.to_month} class="form-select">
                                  <option value="">Month</option>
                                  <option value="1">January</option>
                                  <option value="2">February</option>
                                  <option value="3">March</option>
                                  <option value="4">April</option>
                                  <option value="5">May</option>
                                  <option selected value="6">June</option>
                                  <option value="7">July</option>
                                  <option value="8">August</option>
                                  <option value="9">September</option>
                                  <option value="10">October</option>
                                  <option value="11">November</option>
                                  <option value="12">December</option>
                                </select>
                              </div>
                              <div class="col-4">
                                <input type="number" class="form-control" bind:value={formValues.to_year} placeholder="YYYY" >
                              </div>
                            </div>
                        </div>
                       
                        
                        
                       
                           
    
                      
                      
                    </div>
                    <div class="card-footer text-end">
                      <button type="submit" class="btn btn-danger">Clear</button>
                      <button type="submit" on:click={() => {Result()}} class="btn btn-primary">Submit</button>
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
                                  <label class="form-label text-uppercase" for="">From</label>
                                  <div class="input-group mb-2">
                                    
                                    <p class ="" >{lightFormat(new Date(formValues.from_year,Number(formValues.from_month), formValues.from_day),"yyyy-MM-dd")}</p>
                                  </div>
                              </div>
                              <div class="col-2">
                                  <label class="form-label  text-uppercase" for="">To</label>
                                  <div class="input-group mb-2">
                                    
                                    <p class ="" >{lightFormat(new Date(formValues.to_year,formValues.to_month, formValues.to_day),"dd - MM - yyyy")}</p>
                                  </div>
                              </div>
                              
                              
                          </div>
                          <div class="row">
                              
                              <div class="col-3">
                                  <label class="form-label page-title text-uppercase" for="">Result:</label>
                                  <div class="input-group mb-2">
                                    
                                    <p class ="page-title" > &nbsp Kg/m<sup>2</sup></p>
                                  </div>
                              </div>
                              <pre>
                                {JSON.stringify(formValues,null,2)}
                              </pre>
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