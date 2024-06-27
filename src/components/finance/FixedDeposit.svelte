<script>
import printJS from 'print-js';




let intialAmount = 0;


let formValues = {
  initialAmount : 0,
  interestRate : 0,
  compoundingPeriod: 0,
  time : 0,
  result: 0,
}



function ClientPrint() {
  printJS({ printable: 'result-print', type: 'html', header: 'calculationviz.com | Fixed Deposit Calculator' })
}




</script>



<div class="row">
      <div class="col-md-4">
        <div class="card" >
                <div class="card-header">
                  <h3 class="card-title">Fixed Deposit Calculator</h3>
                </div>
                <div class="card-body">
                  
                  <div class="mb-3">
                      <div class="col-12">
                        <label class="form-label" for="">Initial Investment / Starting Amount</label>
                        <div class="input-group mb-2">
                              
                              <input type="number"  min="0" bind:value={intialAmount} class="form-control"  placeholder="Enter Amount"  autocomplete="off">
                        </div>
                      </div>
                  </div>
                  
                    
                        <div class="row">
                              <div class="col-6">
                                  <label class="form-label" for="interest">Interest Rate</label>
                                  <div class="input-icon mb-3">
                                      <input type="number" value="" min="0" class="form-control" placeholder="Interest Rate">
                                      <span class="input-icon-addon">
                                        <!-- Download SVG icon from http://tabler-icons.io/i/search -->
                                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-percentage"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M7 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M6 18l12 -12" /></svg>
                                      </span>
                                    </div>
                              </div>
                              <div class="col-6">
                                  <label class="form-label" for="compound">Compound</label>
                                  <select name="user[day]" class="form-select">
                                    <option value="1">Daily</option>
                                    <option value="2">Weekly</option>
                                    <option value="3">Monthly</option>
                                    <option selected value="4">Quaterly</option>
                                    <option value="5">Yearly</option>
                                  </select>
                              </div>
                             
                        </div>
                  
                  <div class="mb-3">
                      <div class="col-12">
                        
                         <div class="row">
                              <div class="col-6">
                                  <label class="form-label" for="time">Time Period</label>
                                  <div class="input-icon mb-3">
                                      <input type="number" value="" min="0" class="form-control" placeholder="">
                                      <span class="input-icon-addon">
                                        <!-- Download SVG icon from http://tabler-icons.io/i/search -->
                                        
                                      </span>
                                    </div>
                              </div>
                              <div class="col-6">
                                  <label class="form-label" for="type">Type</label>
                                  <select name="user[day]" class="form-select">
                                    <option selected value="1">Years</option>
                                    <option value="2">Months</option>
                                    <option value="3">Days</option>
                                    
                                  </select>
                              </div>
                             
                        </div>
                      </div>
                  </div>

                  
                  
                </div>
                <div class="card-footer text-end">
                  <button type="submit" class="btn btn-danger">Clear</button>
                  <button type="submit" class="btn btn-primary">Submit</button>
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
                          <div class="col-4">
                              <label class="form-label page-title text-uppercase" for="">Intial Investment</label>
                              <div class="input-group mb-2">
                               
                                <p class ="page-title" >{intialAmount}</p>
                              </div>
                          </div>
                          <div class="col-4">
                              <label class="form-label page-title text-uppercase" for="">Interest Earned</label>
                              <div class="input-group mb-2">
                                
                                <p class ="page-title" >{intialAmount}</p>
                              </div>
                          </div>
                          <div class="col-4">
                              <label class="form-label page-title text-uppercase" for="">End Balance</label>
                              <div class="input-group mb-2">
                                
                                <p class ="page-title" >{intialAmount}</p>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-3">
                              <label class="form-label text-uppercase" for="">Starting Amount</label>
                              <div class="input-group mb-2">
                                
                                <p class ="" >{intialAmount}</p>
                              </div>
                          </div>
                          <div class="col-3">
                              <label class="form-label  text-uppercase" for="">Interest Rate</label>
                              <div class="input-group mb-2">
                                
                                <p class ="" >{intialAmount}</p>
                              </div>
                          </div>
                          <div class="col-3">
                              <label class="form-label  text-uppercase" for="">Compound Type</label>
                              <div class="input-group mb-2">
                                
                                <p class ="" >{intialAmount}</p>
                              </div>
                          </div>
                          <div class="col-3">
                              <label class="form-label  text-uppercase" for="">For a Period</label>
                              <div class="input-group mb-2">
                                
                                <p class ="" >{intialAmount}</p>
                              </div>
                          </div>
                      </div>
                      <div class="hr-text hr-text-center">
                        <span>Breakup Details</span>
                      </div>
                      <div class="row">
                          <div class="col-7">
                            <div class="card ">
                              <div class="table-responsive">
                                <table class="table table-vcenter card-table">
                                  <thead>
                                    <tr>
                                      <th>Year</th>
                                      <th>Deposit</th>
                                      <th>Interest</th>
                                      <th>End Balance</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td class="text-secondary align-right">
                                        5000
                                      </td>
                                      <td class="text-secondary">500</td>
                                      <td class="text-secondary">
                                        5500
                                      </td>
                                      
                                    </tr>
                                    <tr>
                                      <td>1</td>
                                      <td class="text-secondary">
                                        5000
                                      </td>
                                      <td class="text-secondary">500</td>
                                      <td class="text-secondary">
                                        5500
                                      </td>
                                      
                                    </tr>
                                    <tr>
                                      <td>1</td>
                                      <td class="text-secondary">
                                        5000
                                      </td>
                                      <td class="text-secondary">500</td>
                                      <td class="text-secondary">
                                        5500
                                      </td>
                                      
                                    </tr>
                                    <tr>
                                      <td>1</td>
                                      <td class="text-secondary">
                                        5000
                                      </td>
                                      <td class="text-secondary">500</td>
                                      <td class="text-secondary">
                                        5500
                                      </td>
                                      
                                    </tr>
                                    <tr>
                                      <td>1</td>
                                      <td class="text-secondary">
                                        5000
                                      </td>
                                      <td class="text-secondary">500</td>
                                      <td class="text-secondary">
                                        5500
                                      </td>
                                      
                                    </tr>
                                    <tr>
                                      <td>1</td>
                                      <td class="text-secondary">
                                        5000
                                      </td>
                                      <td class="text-secondary">500</td>
                                      <td class="text-secondary">
                                        5500
                                      </td>
                                      
                                    </tr>
                                    <tr>
                                      <td>1</td>
                                      <td class="text-secondary">
                                        5000
                                      </td>
                                      <td class="text-secondary">500</td>
                                      <td class="text-secondary">
                                        5500
                                      </td>
                                      
                                    </tr>
                                    <tr>
                                      <td>1</td>
                                      <td class="text-secondary">
                                        5000
                                      </td>
                                      <td class="text-secondary">500</td>
                                      <td class="text-secondary">
                                        5500
                                      </td>
                                      
                                    </tr>
                                    <tr>
                                      <td>1</td>
                                      <td class="text-secondary">
                                        5000
                                      </td>
                                      <td class="text-secondary">500</td>
                                      <td class="text-secondary">
                                        5500
                                      </td>
                                      
                                    </tr>
                                    <tr>
                                      <td>1</td>
                                      <td class="text-secondary">
                                        5000
                                      </td>
                                      <td class="text-secondary">500</td>
                                      <td class="text-secondary">
                                        5500
                                      </td>
                                      
                                    </tr>
                                    <tr>
                                      <td>1</td>
                                      <td class="text-secondary">
                                        5000
                                      </td>
                                      <td class="text-secondary">500</td>
                                      <td class="text-secondary">
                                        5500
                                      </td>
                                      
                                    </tr>
                                    <tr>
                                      <td>1</td>
                                      <td class="text-secondary">
                                        5000
                                      </td>
                                      <td class="text-secondary">500</td>
                                      <td class="text-secondary">
                                        5500
                                      </td>
                                      
                                    </tr>
                                    
                                    
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
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