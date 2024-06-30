<script  >

import {urlsLists} from "./ListUrls.js";



</script>



<div class="row">
  <div class="col-md-4">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title text-uppercase">&nbsp;Finance Calculators</h2>
        
        
        {#each urlsLists['finance'] as urls }

            <h4>
              {#if urls.status === true}
                    <a href={urls.url}
                    ><span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0054a6"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-coffee"
                        ><path stroke="none" d="M0 0h24v24H0z" fill="none"
                        ></path><path
                          d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1"
                        ></path><path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"
                        ></path><path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"
                        ></path><path
                          d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z"
                        ></path><path d="M16.746 16.726a3 3 0 1 0 .252 -5.555"
                        ></path></svg
                      >
                    </span>&nbsp;{ urls.name }&nbsp;</a>
              
                    <span class="badge badge-sm text-uppercase bg-green-lt ms-auto">Ready</span>
              {:else}
                    <a href="/coming-soon"
                    ><span>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#ef4444"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-grill"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 8h-14a6 6 0 0 0 6 6h2a6 6 0 0 0 6 -5.775l0 -.225z" /><path d="M17 20a2 2 0 1 1 0 -4a2 2 0 0 1 0 4z" /><path d="M15 14l1 2" /><path d="M9 14l-3 6" /><path d="M15 18h-8" /><path d="M15 5v-1" /><path d="M12 5v-1" /><path d="M9 5v-1" /></svg>
                    </span>&nbsp;{ urls.name }&nbsp;</a>
                    <span class="badge badge-sm text-uppercase bg-red-lt ms-auto">Cooking</span>
              {/if}
            </h4>
          
        {/each}
      </div>
    </div>
  </div> 
 
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title text-uppercase">&nbsp;Health</h2>
          
          
          {#each urlsLists['health'] as urls }

              <h4>
                {#if urls.status === true}
                      <a href={urls.url}
                      ><span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#0054a6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="icon icon-tabler icons-tabler-outline icon-tabler-coffee"
                          ><path stroke="none" d="M0 0h24v24H0z" fill="none"
                          ></path><path
                            d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1"
                          ></path><path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"
                          ></path><path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"
                          ></path><path
                            d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z"
                          ></path><path d="M16.746 16.726a3 3 0 1 0 .252 -5.555"
                          ></path></svg
                        >
                      </span>&nbsp;{ urls.name }&nbsp;</a>
                
                      <span class="badge bg-green-lt">Ready</span>
                {:else}
                      <a href="/coming-soon"
                      ><span>
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#ef4444"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-grill"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 8h-14a6 6 0 0 0 6 6h2a6 6 0 0 0 6 -5.775l0 -.225z" /><path d="M17 20a2 2 0 1 1 0 -4a2 2 0 0 1 0 4z" /><path d="M15 14l1 2" /><path d="M9 14l-3 6" /><path d="M15 18h-8" /><path d="M15 5v-1" /><path d="M12 5v-1" /><path d="M9 5v-1" /></svg>
                      </span>&nbsp;{ urls.name }&nbsp;</a>
                      <span class="badge bg-red-lt">Cooking</span>
                {/if}
              </h4>
            
          {/each}
        </div>
      </div>
    </div> 
    <div class="col-md-4">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title text-uppercase">Unit Conversion</h3>
        </div>
        <div class="card-body"></div>
      </div>
    </div>
  </div>