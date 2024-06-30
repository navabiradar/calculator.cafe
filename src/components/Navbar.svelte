<script>

    import {urlsLists} from "./ListUrls"

    const urls = urlsLists

    const svgList = [
        '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#006ed9"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-tools-kitchen"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 3h8l-1 9h-6z" /><path d="M7 18h2v3h-2z" /><path d="M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12z" /><path d="M20 15v6h-1v-3" /><path d="M8 12l0 6" /></svg>',
        '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#ef4444"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-microwave"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 6m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" /><path d="M15 6v12" /><path d="M18 12h.01" /><path d="M18 15h.01" /><path d="M18 9h.01" /><path d="M6.5 10.5c1 -.667 1.5 -.667 2.5 0c.833 .347 1.667 .926 2.5 0" /><path d="M6.5 13.5c1 -.667 1.5 -.667 2.5 0c.833 .347 1.667 .926 2.5 0" /></svg>',
    ]
    

</script>



<header class="navbar-expand-md">
    <div class="collapse navbar-collapse" id="navbar-menu">
      <div class="navbar">
        <div class="container-xl">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/" >
                <span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                </span>
                <span class="nav-link-title">
                  Home
                </span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false" >
                <span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/package -->
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-coins"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z" /><path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" /><path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z" /><path d="M3 6v10c0 .888 .772 1.45 2 2" /><path d="M3 11c0 .888 .772 1.45 2 2" /></svg>
                </span>
                <span class="nav-link-title">
                  Finance
                </span>
              </a>
              <div class="dropdown-menu">
                <div class="dropdown-menu-columns">
                  <div class="dropdown-menu-column">
                    
                    <!-- <a class="dropdown-item" href="/finance/fixed-deposit-calculator">
                      Fixed Deposit Calculator 
                    </a> -->
                   {#each urls['finance'] as url }

                    {#if url.status === true}
                        <a class="dropdown-item" href={url.url}>
                            {@html svgList[0]} &nbsp; {url.name} &nbsp; <span class="badge badge-sm bg-green-lt text-uppercase ms-auto">Ready</span>
                        </a>
                    {:else}
                        <a class="dropdown-item" href="/coming-soon">
                            {@html svgList[1]} &nbsp; {url.name} &nbsp; <span class="badge badge-sm bg-yellow-lt text-uppercase ms-auto">Cooking</span>
                        </a> 
                    {/if}
                        
                   {/each}
                    
                    
                   
                    
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false" >
                <span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/package -->
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-transform"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3" /><path d="M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3" /><path d="M15 18a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg>
                </span>
                <span class="nav-link-title">
                  Unit Conversion
                </span>
              </a>
              <div class="dropdown-menu">
                <div class="dropdown-menu-columns">
                  <div class="dropdown-menu-column">
                    <a class="dropdown-item" href="/coming-soon">
                      Coming Soon  <span class="badge badge-sm bg-pink-lt text-uppercase ms-auto">Upcoming</span>
                    </a>
                    
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false" >
                <span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/package -->
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-heartbeat"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572" /><path d="M3 13h2l2 3l2 -6l1 3h3" /></svg>
                </span>
                <span class="nav-link-title">
                  Health
                </span>
              </a>
              <div class="dropdown-menu">
                <div class="dropdown-menu-columns">
                  <div class="dropdown-menu-column">
                    {#each urls['health'] as url }

                    {#if url.status === true}
                        <a class="dropdown-item" href={url.url}>
                            {@html svgList[0]} &nbsp; {url.name} &nbsp; <span class="badge badge-sm bg-green-lt text-uppercase ms-auto">Ready</span>
                        </a>
                    {:else}
                        <a class="dropdown-item" href="/coming-soon">
                            {@html svgList[1]} &nbsp; {url.name} &nbsp; <span class="badge badge-sm bg-yellow-lt text-uppercase ms-auto">Cooking</span>
                        </a> 
                    {/if}
                        
                   {/each}
                    
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false" >
                <span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/package -->
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-clock"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.5 21h-4.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h10" /><path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M18 16.5v1.5l.5 .5" /></svg>
                </span>
                <span class="nav-link-title">
                  Date and Time
                </span>
              </a>
              <div class="dropdown-menu">
                <div class="dropdown-menu-columns">
                  <div class="dropdown-menu-column">
                    <a class="dropdown-item" href="./coming-soon">
                      Coming Soon <span class="badge badge-sm bg-green-lt text-uppercase ms-auto">Upcoming</span>
                    </a>
                    
                </div>
              </div>
            </li>
            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false" >
                <span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/package -->
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-blogger"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 21h8a5 5 0 0 0 5 -5v-3a3 3 0 0 0 -3 -3h-1v-2a5 5 0 0 0 -5 -5h-4a5 5 0 0 0 -5 5v8a5 5 0 0 0 5 5z" /><path d="M7 7m0 1.5a1.5 1.5 0 0 1 1.5 -1.5h3a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1 -1.5 1.5h-3a1.5 1.5 0 0 1 -1.5 -1.5z" /><path d="M7 14m0 1.5a1.5 1.5 0 0 1 1.5 -1.5h7a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1 -1.5 1.5h-7a1.5 1.5 0 0 1 -1.5 -1.5z" /></svg>
                </span>
                <span class="nav-link-title">
                  Blog
                </span>
              </a>
              <div class="dropdown-menu">
                <div class="dropdown-menu-columns">
                  <div class="dropdown-menu-column">
                    <a class="dropdown-item" href="/blog/term-deposit">
                      Term Deposit - Fixed Deposit
                    </a>
                    <a class="dropdown-item" href="/blog/recurring-deposit">
                      Recurring Deposit
                    </a>
                    
                    
                    
                    
                  </div>
                  
                </div>
              </div>
            </li>
            
          </ul>
          <!-- <div class="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
           
          </div> -->
        </div>
      </div>
    </div>
  </header>