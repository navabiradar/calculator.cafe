<script>
import printJS from 'print-js';
import { Finance } from 'financejs'
import { ToWords } from 'to-words';

let toWords = new ToWords();

let finance = new Finance();
    
let formValues = {
    initialAmount : 0,
    rate : 0,
    timePeriod: 0,
    periods: "Years",
    compoundInterest: "Quaterly",
    interestEarned: 0,
    numOfCompounding:0,
    numOfPeriods:0,
    result: 0,
    words: "",
}




function Result() {

    switch(formValues.periods){

      case "Years":
        formValues.numOfPeriods = formValues.timePeriod;
        break;
      case "Months":
        formValues.numOfPeriods = (formValues.timePeriod / 12).toFixed(2) ;
        break;
      case "Days":
        formValues.numOfPeriods = (formValues.timePeriod / 365).toFixed(2) ;
        break;
    }

    

    switch(formValues.compoundInterest){

      case "Daily":
        formValues.numOfCompounding = 365 ;
        break;
      case "Weekly":
        formValues.numOfCompounding = 52;
        break;
      case "Monthly":
        formValues.numOfCompounding = 12;
        break;
      case "Quaterly":
        formValues.numOfCompounding = 4;
        break;
      case "Yearly":
        formValues.numOfCompounding = 1;
        break;


    }


    formValues.result = finance.CI(formValues.rate, formValues.numOfCompounding, formValues.initialAmount, formValues.numOfPeriods);

    formValues.words = toWords.convert(formValues.result);


}


function ClientPrint() {
  printJS({ printable: 'result-print', type: 'html', header: 'calculator.cafe | Fixed Deposit Calculator' })
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
                              
                              <input type="number"  min="0" bind:value={formValues.initialAmount} class="form-control"  placeholder="Enter Amount"  autocomplete="off">
                        </div>
                      </div>
                  </div>
                  
                    
                        <div class="row">
                              <div class="col-6">
                                  <label class="form-label" for="interest">Interest Rate</label>
                                  <div class="input-icon mb-3">
                                      <input type="number" bind:value={formValues.rate} min="0" class="form-control" placeholder="Interest Rate">
                                      <span class="input-icon-addon">
                                        
                                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-percentage"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M7 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M6 18l12 -12" /></svg>
                                      </span>
                                    </div>
                              </div>
                              <div class="col-6">
                                  <label class="form-label" for="compound">Compound</label>
                                  <select name="user" bind:value={formValues.compoundInterest}  class="form-select" >
                                    <option value="Daily">Daily</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Monthly">Monthly</option>
                                    <option selected value="Quaterly">Quaterly</option>
                                    <option value="Yearly">Yearly</option>
                                  </select>
                              </div>
                             
                        </div>
                  
                  <div class="mb-3">
                      <div class="col-12">
                        
                         <div class="row">
                              <div class="col-6">
                                  <label class="form-label" for="time">Time Period</label>
                                  <div class="input-icon mb-3">
                                      <input type="number" bind:value={formValues.timePeriod} min="0" class="form-control" placeholder="">
                                      <span class="input-icon-addon">
                                        <!-- Download SVG icon from http://tabler-icons.io/i/search -->
                                        
                                      </span>
                                  </div>
                              </div>
                              <div class="col-6">
                                  <label class="form-label" for="type">Type</label>
                                  <select name="type" bind:value={formValues.periods} class="form-select">
                                    <option value="Years">Years</option>
                                    <option selected value="Months">Months</option>
                                    <option value="Days">Days</option>
                                    
                                  </select>
                              </div>
                             
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
                          <div class="col-4">
                              <label class="form-label page-title text-uppercase" for="">Intial Investment</label>
                              <div class="input-group mb-2">
                               
                                <p class ="page-title" >{ formValues.initialAmount }</p>
                              </div>
                          </div>
                          <div class="col-4">
                              <label class="form-label page-title text-uppercase" for="">Interest Earned</label>
                              <div class="input-group mb-2">
                                
                                <p class ="page-title" >{ formValues.result}</p>
                              </div>
                          </div>
                          <div class="col-4">
                              <label class="form-label page-title text-uppercase" for="">End Balance</label>
                              <div class="input-group mb-2">
                                
                                <p class ="page-title" >{formValues.result}</p>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                            <label class="form-label page-title text-uppercase" for="">In Words: </label>
                            <div class="input-group mb-2">
                             
                              <p class ="page-title" >{ formValues.words }</p>
                            </div>
                        </div>
                        
                    </div>
                      <div class="row">
                          <div class="col-3">
                              <label class="form-label text-uppercase" for="">Starting Amount</label>
                              <div class="input-group mb-2">
                                
                                <p class ="" >{formValues.initialAmount}</p>
                              </div>
                          </div>
                          <div class="col-3">
                              <label class="form-label  text-uppercase" for="">Interest Rate</label>
                              <div class="input-group mb-2">
                                
                                <p class ="" >{formValues.rate}</p>
                              </div>
                          </div>
                          <div class="col-3">
                              <label class="form-label  text-uppercase" for="">Compound Type</label>
                              <div class="input-group mb-2">
                                
                                <p class ="" >{formValues.compoundInterest}</p>
                              </div>
                          </div>
                          <div class="col-3">
                              <label class="form-label  text-uppercase" for="">For a Period</label>
                              <div class="input-group mb-2">
                                
                                <p class ="" >{formValues.periods}</p>
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