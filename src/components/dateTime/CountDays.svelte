<script lang="ts">
    import printJS from 'print-js';
   
    
    const formValues = {
      from_day : "",
      from_month : "",
      from_year : "",
      to_day : "",
      to_month : "",
      to_year : "",
    }
    
    
    
    
    function Result() {
      
        
    
      
    
        
    
        
      
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
                            <label class="form-label">From</label>
                            <div class="row g-2">
                              
                              <div class="col-3">
                                <select name="user[day]" class="form-select">
                                  <option value="">Day</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  <option value="7">7</option>
                                  <option value="8">8</option>
                                  <option value="9">9</option>
                                  <option value="10">10</option>
                                  <option value="11">11</option>
                                  <option value="12">12</option>
                                  <option value="13">13</option>
                                  <option value="14">14</option>
                                  <option value="15">15</option>
                                  <option value="16">16</option>
                                  <option value="17">17</option>
                                  <option value="18">18</option>
                                  <option value="19">19</option>
                                  <option value="20" selected="">20</option>
                                  <option value="21">21</option>
                                  <option value="22">22</option>
                                  <option value="23">23</option>
                                  <option value="24">24</option>
                                  <option value="25">25</option>
                                  <option value="26">26</option>
                                  <option value="27">27</option>
                                  <option value="28">28</option>
                                  <option value="29">29</option>
                                  <option value="30">30</option>
                                  <option value="31">31</option>
                                </select>
                              </div>
                              <div class="col-5">
                                <select name="user[month]" class="form-select">
                                  <option value="">Month</option>
                                  <option value="1">January</option>
                                  <option value="2">February</option>
                                  <option value="3">March</option>
                                  <option value="4">April</option>
                                  <option value="5">May</option>
                                  <option selected="selected" value="6">June</option>
                                  <option value="7">July</option>
                                  <option value="8">August</option>
                                  <option value="9">September</option>
                                  <option value="10">October</option>
                                  <option value="11">November</option>
                                  <option value="12">December</option>
                                </select>
                              </div>
                              <div class="col-4">
                                <select name="user[year]" class="form-select">
                                  <option value="">Year</option>
                                  <option value="2014">2014</option>
                                  <option value="2013">2013</option>
                                  <option value="2012">2012</option>
                                  <option value="2011">2011</option>
                                  <option value="2010">2010</option>
                                  <option value="2009">2009</option>
                                  <option value="2008">2008</option>
                                  <option value="2007">2007</option>
                                  <option value="2006">2006</option>
                                  <option value="2005">2005</option>
                                  <option value="2004">2004</option>
                                  <option value="2003">2003</option>
                                  <option value="2002">2002</option>
                                  <option value="2001">2001</option>
                                  <option value="2000">2000</option>
                                  <option value="1999">1999</option>
                                  <option value="1998">1998</option>
                                  <option value="1997">1997</option>
                                  <option value="1996">1996</option>
                                  <option value="1995">1995</option>
                                  <option value="1994">1994</option>
                                  <option value="1993">1993</option>
                                  <option value="1992">1992</option>
                                  <option value="1991">1991</option>
                                  <option value="1990">1990</option>
                                  <option value="1989" selected="">1989</option>
                                  <option value="1988">1988</option>
                                  <option value="1987">1987</option>
                                  <option value="1986">1986</option>
                                  <option value="1985">1985</option>
                                  <option value="1984">1984</option>
                                  <option value="1983">1983</option>
                                  <option value="1982">1982</option>
                                  <option value="1981">1981</option>
                                  <option value="1980">1980</option>
                                  <option value="1979">1979</option>
                                  <option value="1978">1978</option>
                                  <option value="1977">1977</option>
                                  <option value="1976">1976</option>
                                  <option value="1975">1975</option>
                                  <option value="1974">1974</option>
                                  <option value="1973">1973</option>
                                  <option value="1972">1972</option>
                                  <option value="1971">1971</option>
                                  <option value="1970">1970</option>
                                  <option value="1969">1969</option>
                                  <option value="1968">1968</option>
                                  <option value="1967">1967</option>
                                  <option value="1966">1966</option>
                                  <option value="1965">1965</option>
                                  <option value="1964">1964</option>
                                  <option value="1963">1963</option>
                                  <option value="1962">1962</option>
                                  <option value="1961">1961</option>
                                  <option value="1960">1960</option>
                                  <option value="1959">1959</option>
                                  <option value="1958">1958</option>
                                  <option value="1957">1957</option>
                                  <option value="1956">1956</option>
                                  <option value="1955">1955</option>
                                  <option value="1954">1954</option>
                                  <option value="1953">1953</option>
                                  <option value="1952">1952</option>
                                  <option value="1951">1951</option>
                                  <option value="1950">1950</option>
                                  <option value="1949">1949</option>
                                  <option value="1948">1948</option>
                                  <option value="1947">1947</option>
                                  <option value="1946">1946</option>
                                  <option value="1945">1945</option>
                                  <option value="1944">1944</option>
                                  <option value="1943">1943</option>
                                  <option value="1942">1942</option>
                                  <option value="1941">1941</option>
                                  <option value="1940">1940</option>
                                  <option value="1939">1939</option>
                                  <option value="1938">1938</option>
                                  <option value="1937">1937</option>
                                  <option value="1936">1936</option>
                                  <option value="1935">1935</option>
                                  <option value="1934">1934</option>
                                  <option value="1933">1933</option>
                                  <option value="1932">1932</option>
                                  <option value="1931">1931</option>
                                  <option value="1930">1930</option>
                                  <option value="1929">1929</option>
                                  <option value="1928">1928</option>
                                  <option value="1927">1927</option>
                                  <option value="1926">1926</option>
                                  <option value="1925">1925</option>
                                  <option value="1924">1924</option>
                                  <option value="1923">1923</option>
                                  <option value="1922">1922</option>
                                  <option value="1921">1921</option>
                                  <option value="1920">1920</option>
                                  <option value="1919">1919</option>
                                  <option value="1918">1918</option>
                                  <option value="1917">1917</option>
                                  <option value="1916">1916</option>
                                  <option value="1915">1915</option>
                                  <option value="1914">1914</option>
                                  <option value="1913">1913</option>
                                  <option value="1912">1912</option>
                                  <option value="1911">1911</option>
                                  <option value="1910">1910</option>
                                  <option value="1909">1909</option>
                                  <option value="1908">1908</option>
                                  <option value="1907">1907</option>
                                  <option value="1906">1906</option>
                                  <option value="1905">1905</option>
                                  <option value="1904">1904</option>
                                  <option value="1903">1903</option>
                                  <option value="1902">1902</option>
                                  <option value="1901">1901</option>
                                  <option value="1900">1900</option>
                                  <option value="1899">1899</option>
                                  <option value="1898">1898</option>
                                  <option value="1897">1897</option>
                                </select>
                              </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">To</label>
                            <div class="row g-2">
                              
                              <div class="col-3">
                                <select name="user[day]" class="form-select">
                                  <option value="">Day</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  <option value="7">7</option>
                                  <option value="8">8</option>
                                  <option value="9">9</option>
                                  <option value="10">10</option>
                                  <option value="11">11</option>
                                  <option value="12">12</option>
                                  <option value="13">13</option>
                                  <option value="14">14</option>
                                  <option value="15">15</option>
                                  <option value="16">16</option>
                                  <option value="17">17</option>
                                  <option value="18">18</option>
                                  <option value="19">19</option>
                                  <option value="20" selected="">20</option>
                                  <option value="21">21</option>
                                  <option value="22">22</option>
                                  <option value="23">23</option>
                                  <option value="24">24</option>
                                  <option value="25">25</option>
                                  <option value="26">26</option>
                                  <option value="27">27</option>
                                  <option value="28">28</option>
                                  <option value="29">29</option>
                                  <option value="30">30</option>
                                  <option value="31">31</option>
                                </select>
                              </div>
                              <div class="col-5">
                                <select name="user[month]" class="form-select">
                                  <option value="">Month</option>
                                  <option value="1">January</option>
                                  <option value="2">February</option>
                                  <option value="3">March</option>
                                  <option value="4">April</option>
                                  <option value="5">May</option>
                                  <option selected="selected" value="6">June</option>
                                  <option value="7">July</option>
                                  <option value="8">August</option>
                                  <option value="9">September</option>
                                  <option value="10">October</option>
                                  <option value="11">November</option>
                                  <option value="12">December</option>
                                </select>
                              </div>
                              <div class="col-4">
                                <select name="user[year]" class="form-select">
                                  <option value="">Year</option>
                                  <option value="2014">2014</option>
                                  <option value="2013">2013</option>
                                  <option value="2012">2012</option>
                                  <option value="2011">2011</option>
                                  <option value="2010">2010</option>
                                  <option value="2009">2009</option>
                                  <option value="2008">2008</option>
                                  <option value="2007">2007</option>
                                  <option value="2006">2006</option>
                                  <option value="2005">2005</option>
                                  <option value="2004">2004</option>
                                  <option value="2003">2003</option>
                                  <option value="2002">2002</option>
                                  <option value="2001">2001</option>
                                  <option value="2000">2000</option>
                                  <option value="1999">1999</option>
                                  <option value="1998">1998</option>
                                  <option value="1997">1997</option>
                                  <option value="1996">1996</option>
                                  <option value="1995">1995</option>
                                  <option value="1994">1994</option>
                                  <option value="1993">1993</option>
                                  <option value="1992">1992</option>
                                  <option value="1991">1991</option>
                                  <option value="1990">1990</option>
                                  <option value="1989" selected="">1989</option>
                                  <option value="1988">1988</option>
                                  <option value="1987">1987</option>
                                  <option value="1986">1986</option>
                                  <option value="1985">1985</option>
                                  <option value="1984">1984</option>
                                  <option value="1983">1983</option>
                                  <option value="1982">1982</option>
                                  <option value="1981">1981</option>
                                  <option value="1980">1980</option>
                                  <option value="1979">1979</option>
                                  <option value="1978">1978</option>
                                  <option value="1977">1977</option>
                                  <option value="1976">1976</option>
                                  <option value="1975">1975</option>
                                  <option value="1974">1974</option>
                                  <option value="1973">1973</option>
                                  <option value="1972">1972</option>
                                  <option value="1971">1971</option>
                                  <option value="1970">1970</option>
                                  <option value="1969">1969</option>
                                  <option value="1968">1968</option>
                                  <option value="1967">1967</option>
                                  <option value="1966">1966</option>
                                  <option value="1965">1965</option>
                                  <option value="1964">1964</option>
                                  <option value="1963">1963</option>
                                  <option value="1962">1962</option>
                                  <option value="1961">1961</option>
                                  <option value="1960">1960</option>
                                  <option value="1959">1959</option>
                                  <option value="1958">1958</option>
                                  <option value="1957">1957</option>
                                  <option value="1956">1956</option>
                                  <option value="1955">1955</option>
                                  <option value="1954">1954</option>
                                  <option value="1953">1953</option>
                                  <option value="1952">1952</option>
                                  <option value="1951">1951</option>
                                  <option value="1950">1950</option>
                                  <option value="1949">1949</option>
                                  <option value="1948">1948</option>
                                  <option value="1947">1947</option>
                                  <option value="1946">1946</option>
                                  <option value="1945">1945</option>
                                  <option value="1944">1944</option>
                                  <option value="1943">1943</option>
                                  <option value="1942">1942</option>
                                  <option value="1941">1941</option>
                                  <option value="1940">1940</option>
                                  <option value="1939">1939</option>
                                  <option value="1938">1938</option>
                                  <option value="1937">1937</option>
                                  <option value="1936">1936</option>
                                  <option value="1935">1935</option>
                                  <option value="1934">1934</option>
                                  <option value="1933">1933</option>
                                  <option value="1932">1932</option>
                                  <option value="1931">1931</option>
                                  <option value="1930">1930</option>
                                  <option value="1929">1929</option>
                                  <option value="1928">1928</option>
                                  <option value="1927">1927</option>
                                  <option value="1926">1926</option>
                                  <option value="1925">1925</option>
                                  <option value="1924">1924</option>
                                  <option value="1923">1923</option>
                                  <option value="1922">1922</option>
                                  <option value="1921">1921</option>
                                  <option value="1920">1920</option>
                                  <option value="1919">1919</option>
                                  <option value="1918">1918</option>
                                  <option value="1917">1917</option>
                                  <option value="1916">1916</option>
                                  <option value="1915">1915</option>
                                  <option value="1914">1914</option>
                                  <option value="1913">1913</option>
                                  <option value="1912">1912</option>
                                  <option value="1911">1911</option>
                                  <option value="1910">1910</option>
                                  <option value="1909">1909</option>
                                  <option value="1908">1908</option>
                                  <option value="1907">1907</option>
                                  <option value="1906">1906</option>
                                  <option value="1905">1905</option>
                                  <option value="1904">1904</option>
                                  <option value="1903">1903</option>
                                  <option value="1902">1902</option>
                                  <option value="1901">1901</option>
                                  <option value="1900">1900</option>
                                  <option value="1899">1899</option>
                                  <option value="1898">1898</option>
                                  <option value="1897">1897</option>
                                </select>
                              </div>
                            </div>
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