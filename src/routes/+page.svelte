<script> 
    import ProductCard from './common/components/ProductCard.svelte';
    import ProcessCard from './common/components/ProcessCard.svelte'
    import { info } from './data';
  
    let a=info[0];
    let imgs=['img6.jpg', 'img7.jpg', 'img8.jpg', 'img6.jpg'];

    
</script>

<div class=" p-[8%] bg-red-50 flex lg:flex-nowrap flex-wrap lg:justify-end items-center gap-10 lg:h-[600px]">
    <div class="mr-[120px]">
        <div class="text-orange-600 font-bold mb-[2%] text-[18px]"><h3>Good4Me</h3></div>
    
        <div class="lg:text-[clamp(10px,4vw,50px)] w-[140%] leading-[130%] text-4xl font-bold mb-[5%]">
            <h1 class="">MULTI-VITAMIN</h1>
            <h1>(3 MONTH SUPPLY)</h1>
        </div>
    
        <div class="mb-[5%] sm:w-[90%]  w-[140%]">
            Good4Me Apple Cider Vineger gummies are the newest addition to your morning health and well-being regime.
        </div>

        <button class="h-[auto] bg-orange-600 text-white text-[small] p-[1%]">SHOP NOW</button>
    </div>
    <div class="mr-[-50px]  w-[100%] ">
        <img src="img1.png" alt="img" class="w-[100%]">
    </div>
</div>

<div class="h-[auto] p-[5%]">
    <div class="">
        <ul class="flex text-gray-500 text-[clamp(12px,1.5cqw,48px)] justify-evenly">
            <li>GLUTEN FREE</li>
            <li>VEGAN FRIENDLY</li>
            <li>NO NASTIES</li>
            <li>PECTINBASE</li>
        </ul>
    </div>
    <div class="mt-[5%] leading-[140%] text-center text-[clamp(22px,2.2vw,50px)] font-bold">
        <h1>We Have The Main Process to</h1>
        <h1>Run The GOOD4ME</h1>
    </div>
    <div class="flex flex-wrap h-[auto] justify-center gap-10 mt-24">
        <div class="h-[280px] w-[300px] flex justify-center flex-col items-center">
            <div class="h-[80px] w-[80px] rounded-2xl bg-gray-100"></div>
            <br />
            <h2 class="text-[24px] font-bold">Quality Assured</h2>
            <div class="text-center text-gray-500 leading-5">
                <p class="text-[x-small]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p class="text-[x-small]">
                    Ducimus quis blanditiis placeat obcaecati,
                </p>
                <p class="text-[x-small]">cumque voluptate.</p>
            </div>
        </div>
        <div class="h-[280px] w-[280px] flex justify-center flex-col items-center bg-gray-100 shadow-inner rounded-lg">
            <div class="border h-[80px] w-[80px] bg-orange-500 rounded-2xl"></div>
            <br />
            <h2 class="text-[24px] font-bold">Clean Ingredients</h2>
            <div class="text-center text-gray-500 leading-5">
                <p class="text-[x-small]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p class="text-[x-small]">
                    Ducimus quis blanditiis placeat obcaecati,
                </p>
                <p class="text-[x-small]">cumque voluptate.</p>
            </div>
        </div>
        <div
            class="h-[280px] w-[300px] flex justify-center flex-col items-center"
        >
            <div class="h-[80px] w-[80px] rounded-2xl bg-gray-100"></div>
            <br />
            <h2 class="text-[24px] font-bold">Chemical Free</h2>
            <div class="text-center text-gray-500 leading-5">
                <p class="text-[x-small]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p class="text-[x-small]">
                    Ducimus quis blanditiis placeat obcaecati,
                </p>
                <p class="text-[x-small]">cumque voluptate.</p>
            </div>
        </div>
    </div>
</div>

<div class="3xl:h-[900px] sm2:h-[1100px] h-[1400px]">
    <div class="md:text-[48px] text-[35px] font-bold md:mr-52 absolute end-0 mt-[-120px]  w-[350px]">
        <h2>TAKE</h2>
        <h2>CONTROL OF</h2>
        <h2>YOUR HEALTH</h2>
    </div>
    <div class="bg-red-50 lg:h-[700px] sm2:h-[580px] lg:w-[830px] sm2:w-[660px] h-[500px] w-[87%] mt-[150px] rounded-br-[140px] pt-52 sm2:pl-28 pl-10">
        <div class="sm2:ml-[-110px] ml-[-40px] mt-[-180px] w-[200px]">
            <img src="img2.png" alt="img" class="sm2:w-[200px] w-[150px]">
        </div>
        <div class="flex flex-wrap 3xl:w-[1300px] lg:w-[850px] sm2:w-[652px] w-[98%] mt-[-120px]">
            <div class="h-[400px] w-[540px] mt-[90px]">
                <div class="flex gap-12">
                    <div class="">
                        <p class="sm2:text-[20px] text-[clamp(10px,3vw,20px)] font-bold mb-3">
                            It is a long established <br /> fact that a reader
                        </p>
                        <p class="sm2:text-[small] text-[clamp(5px,2vw,17px)] text-gray-700">
                            It is a long established fact that <br /> a reader
                            will be distracted <br /> by the...
                        </p>
                    </div>
                    <div class="">
                        <p class="sm2:text-[20px] text-[clamp(10px,3vw,20px)] font-bold mb-3">
                            It is a long established <br /> fact that a reader
                        </p>
                        <p class="sm2:text-[small] text-[clamp(5px,2vw,17px)] text-gray-700">
                            It is a long established fact that <br /> a reader
                            will be distracted <br /> by the...
                        </p>
                    </div>
                    
                </div>
                <br /><br />
                <div class="flex gap-12">
                    <div class="">
                        <p class="sm2:text-[20px] text-[clamp(10px,3vw,20px)] font-bold mb-3">
                            It is a long established <br /> fact that a reader
                        </p>
                        <p class="sm2:text-[small] text-[clamp(5px,2vw,17px)] text-gray-700">
                            It is a long established fact that <br /> a reader
                            will be distracted <br /> by the...
                        </p>
                    </div>
                    <div class="">
                        <p class="sm2:text-[20px] text-[clamp(10px,3vw,20px)] font-bold mb-3">
                            It is a long established <br /> fact that a reader
                        </p>
                        <p class="sm2:text-[small] text-[clamp(5px,2vw,17px)] text-gray-700">
                            It is a long established fact that <br /> a reader
                            will be distracted <br /> by the...
                        </p>
                    </div>
                    
                </div>
            </div>
            <div class="3xl:w-[400px] sm2:block sm2:w-[300px] flex justify-end w-full">
                <img src="img3.png" alt="img" class="3xl:w-[400px] w-[300px]">
            </div>
            <div class=" h-[300px] w-[300px] sm2:mt-32 mt-5 sm2:ml-12 text-gray-500 font-semibold text-[15px]">
                <p>
                    The Good4Me range has been <br /> formulated baserd on
                    scientific. Our <br /> vitamins are here and ready to boost
                    you <br /> mood, immunity and overall well-being!
                </p>
                <br />
                <p>
                    Oru vitamins are here and ready to boost <br /> your mood.
                    New Zealand from local and <br /> imported ingredients.
                </p>
                <br /><br />
                <button class="h-[44px] w-[190px] border-[2px] text-[13px] font-bold border-orange-600">
                    BROWSE OUR RANGE</button>
            </div>
        </div>
    </div>
</div>

<div class=" xl:h-[48vw] mt-[-70px] bg-red-50 sm11:p-[75px] sm9:p-[140px] p-[80px] flex flex-wrap sm8:justify-evenly justify-center items-center">
   <ProcessCard {a}/>
    <div class="sm11:mt-[160px] flex sm8:flex-col flex-row leading-5">
        {#each info as number}
        <label >
            <input 
                type="radio"
                name="process"
                value={number} 
                bind:group={a}
                class="ml-[18px]"
            />  
            
        </label><br>
    {/each}
    </div>
</div>

<div class="pb-[100px] pt-[100px] flex sm12:justify-evenly max-lg:flex-col items-center justify-center w-full">
    <div class="sm12:m-[] ml-[10px] sm12:mt-[0px] mt-[290px]">
    <div>
        <h4 class="text-orange-600 font-bold text-[small]">
            GAME-CHANGING VITAMINS
        </h4>
        <br />
        <h1 class="text-[30px] font-bold">OUR PRODUCTS ARE</h1>
        <br />
        <p class="text-[small] text-gray-600 md:w-[700px]">
            Low in suger (sweetened with a fruit base) Free from gluten,
            gelatin, dairy, egg, nutsor soy Free from artificial flavours or colours Vegan friendly It is a long
            established fact that a reader will be distracted by the Free from artificaial flavours or
            volours Vegan friendly It is a long established fact that a reader will br distracted by the...
        </p>
    </div>
    <br />

    <div class="grid grid-flow-col md:h-[240px] h-[190px] md:w-[730px] w-[80vw] overflow-scroll overflow-y-auto">
        <p></p>
        {#each imgs as img}        
          <ProductCard {img}/>
        {/each}
        <p></p>
    </div>
    </div>
    <div class="sm12:w-[470px] w-full sm12:block  ">
        <div class="sm12:h-[500px] sm12:w-[470px] sm59:h-[360px]  bg-orange-50 rounded-3xl flex justify-center h-fit">
            <img src="img5.png" alt="img" class="mt-[-30px]">
        </div>
    </div>
</div>

<div class="flex flex-col items-center lg:h-[58vw] sm:h-[65vw] h-[110vw] p-16 bg-red-50">
    <h1 class="w-[350px] text-[30px] font-bold">WHAT'S IN GOOD4ME?</h1>
    <p class="text-gray-600 text-[clamp(12px,1.9vw,19px)]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi blanditiis  laudantium quibusdam placeat .
     </p>

    <div class="md:w-[52%] w-[350px] flex justify-center items-center sm:mt-[28%] mt-[62%]">
        <div class="absolute p-[18%] pl-[18%] pr-[18%] border-2 border-gray-400 border-dashed  rounded-[50%] flex items-center justify-center">
        <div class=" absolute p-[40%] pl-[40%] pr-[40%] border-2 border-gray-400 border-dashed  rounded-[50%] flex items-center justify-center">
        <div class=" absolute p-[43%] pl-[43%] pr-[43%] border-2 border-gray-400 border-dashed  rounded-[50%] flex items-center justify-center">
        <div class=" absolute p-[37%] pl-[37%] pr-[37%] bg-red-100  rounded-[50%] flex items-center justify-center">
                  
        </div>
        </div>
        </div>
    </div>

    <div class="absolute sm:mt-[-29%] sm52:mt-[-40%] mt-[-47%] sm:ml-[-32%] ml-[-3%]">
        <h2 class="text-[clamp(12px,1vw,18px)] sm:w-[350px] w-[200px] font-bold text-orange-500">SUPPORTS WEIGHT MANAGEMENT</h2>
        <p class="text-[clamp(10px,1vw,13px)] sm:w-[55%] w-[40%]">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
    </div>
    <hr class="border border-orange-600 w-[8%] mt-[-30%] ml-[-20%] absolute z-10">
    <hr class="border border-orange-600 w-[5%] mt-[-26.5%] ml-[-8.5%] rotate-[45deg] absolute z-10">
    <div class="w-[15px] h-[15px] border-2 bg-white ml-[-4.5%] mt-[-22.5%] border-orange-600 rounded-[50%] absolute z-10"></div>
    
    <div class="absolute sm:mt-[-5%] mt-[-2%] sm:ml-[-32%] ml-[-15%]">
        <h2 class="text-[clamp(12px,1vw,18px)] sm:w-[300px] w-[100px] font-bold text-orange-500">SUPPORTS HEALTHY SKIN</h2>
        <p class="text-[clamp(10px,1vw,13px)] sm:w-[45%] w-[30%]">It is a long established fact that a reader will be distracted by the readable layout.</p>
    </div>
    <hr class="border border-orange-600 w-[11%] mt-[-8%] ml-[-27%] absolute z-10">
    <hr class="border border-orange-600 w-[2%] mt-[-6.6%] ml-[-14.7%] rotate-[45deg] absolute z-10">
    <div class="w-[15px] h-[15px] border-2 bg-white ml-[-13%] mt-[-4.2%] border-orange-600 rounded-[50%] absolute z-10"></div>
    
    <div class="absolute sm:mt-[20%] sm52:mt-[38%] mt-[45%] sm:ml-[-32%] ml-[-10%]">
        <h2 class="text-[clamp(12px,1vw,18px)] sm:w-[300px] w-[120px] font-bold text-orange-500">SUPPORTS OVERALL <br> HEALTH AND WELLBEING</h2>
        <p class="text-[clamp(10px,1vw,13px)] w-[50%]">It is a long established fact that a reader will be distracted by the readable layout.</p>
    </div>
    <hr class="border border-orange-600 sm:w-[15%] w-[10%] sm:mt-[17%] mt-[30%] sm:ml-[-25%] ml-[-23%] absolute z-10">
    <div class="w-[15px] h-[15px] border-2 bg-white ml-[-11%] sm:mt-[17%] mt-[30%] border-orange-600 rounded-[50%] absolute z-10"></div>
    


    <div class="sm9:ml-[68%] sm:ml-[86%] ml-[75%] sm:mt-[4%] sm52:mt-[-13%] mt-[-19%] mb-[30%] absolute">
        <h2 class="text-[clamp(12px,1vw,18px)] sm:w-[350px] w-[200px] font-bold text-orange-500">SUPPORTS WEIGHT MANAGEMENT</h2>
        <p class="text-[clamp(10px,1vw,13px)] w-[55%] ">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
    </div>
    <hr class="border border-orange-600 ml-[20%] mt-[-30%] w-[12%] absolute z-10">
    <div class="w-[15px] h-[15px] border-2 bg-white border-orange-600 mt-[-30%] ml-[7%] rounded-[50%] absolute z-10"></div>
    
    <div class="sm9:ml-[69%] sm:ml-[86%] ml-[70%] sm52:mt-[23%] mt-[28%] mb-[27%] absolute">
        <h2 class="text-[clamp(12px,1vw,18px)] sm:w-[300px] w-[100px] font-bold text-orange-500">SUPPORTS HEALTHY SKIN</h2>
        <p class="text-[clamp(10px,1vw,13px)] sm:w-[50%] ">It is a long established fact that a reader will be distracted by the readable layout.</p>
    </div>
    <hr class="border border-orange-600 w-[12%] mt-[-5%] ml-[25%] absolute z-10">
    <hr class="border border-orange-600 w-[4%] mt-[-2.1%] ml-[10.3%] rotate-[-45deg] absolute z-10">
    <div class="w-[15px] h-[15px] border-2 bg-white ml-[8%] mt-[16px] border-orange-600 rounded-[50%] absolute z-10"></div>
    
    <div class="sm9:ml-[68%] sm:ml-[86%] ml-[68%] sm:mt-[20%] sm52:mt-[35%] mt-[50%] absolute">
        <h2 class="text-[clamp(12px,1vw,18px)] sm:w-[300px] w-[100%] font-bold text-orange-500">SUPPORTS OVERALL <br> HEALTH AND WELLBEING</h2>
        <p class="text-[clamp(10px,1vw,13px)] sm:w-[50%]">It is a long established fact that a reader will be distracted by the readable layout.</p>
    </div>
    <hr class="border border-orange-600 w-[13%] sm:mt-[17%] mt-[29%] ml-[23%] absolute z-10">
    <div class="w-[15px] h-[15px] border-2 bg-white ml-[10%] sm:mt-[17%] mt-[29%] border-orange-600 rounded-[50%] absolute z-10"></div>
   
    <img src="img9.png" alt="img" class="w-[18%] absolute">
    </div>
</div>

<div class="h-[700px] flex justify-center items-center flex-col">
    <div class="sm52:w-[470px] w-[380px] text-center">
        <h1 class="text-[30px] font-bold">WHAT OUR HAPPY CLIENTS SAY</h1>
    </div>
    <br />
    <div class="lg:h-[400px] h-[350px] lg:w-[800px] w-[70%] bg-red-50 ">
    </div>
        <div class="grid grid-flow-col w-[95%] overflow-scroll overflow-y-auto absolute gap-8">
            {#each [1,2,3,4] as count}

            <div class="w-[430px] h-[190px] bg-white border-2 border-gray-200 rounded-2xl p-5">
                <div class="flex items-center mt-[-10px] h-[80px]">
                    <div class=" h-[70px] w-[70px] rounded-full bg-red-100 border"></div>
                    <div class="ml-[15px]">
                        <h2 class="font-bold">Sophie M</h2>
                        <h3 class="text-[x-small] text-orange-500 w-[100px]">Management Support</h3>
                    </div>
                    <div class="flex justify-end w-[220px] mt-[30px]">
                        <p class="text-[100px]">"</p>
                    </div>
                </div>
                <div class="mt-[10px] ">
                    <p class="text-[12px] leading-5">
                        "We have perfected our formulas over time, based on your
                        feedback. Check out hundreds of reviews on our website. We
                        can't wait unitl you are a part of our Good4Me Family."
                    </p>
                </div>
            </div>
            {/each}
         
        </div>
</div>

<div class="">
    <div class="text-center">
        <h1 class="text-[32px] font-bold">LATEST NEWS</h1>
        <p class="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat voluptas <br>
             totam harum mollitia.</p>
    </div>
    <div class="flex flex-wrap justify-center items-center p-10 gap-14">
        <div class="h-[400px] w-[300px]">
            <div class="border h-[300px] mb-3">
              <img src="img10.jpg" alt="img" class="w-full h-full">
            </div>
            <div >
            <h3 class="font-bold">WE DONATE ONE WEEKS SUPPLY</h3>             
            <p class="text-[11px] text-gray-600 mt-2 mb-3">We care about New Zealand children, and we want to <br>
               support our commutiny by providing our children in need <br>
               with necessary vitamins to improve...</p>
               <h3 class="font-bold">READ MORE </h3>
            </div>
        </div>
        <div class="h-[400px] w-[300px]">
            <div class="border h-[350px] mb-3">
                <img src="img11.jpg" alt="img" class="w-full h-full">
            </div>
            <div >
            <h3 class="font-bold">WE DONATE ONE WEEKS SUPPLY</h3>             
            <p class="text-[11px] text-gray-600 mt-2 mb-3">We care about New Zealand children, and we want to <br>
               support our commutiny by providing our children in need <br>
               with necessary vitamins to improve...</p>
               <h3 class="font-bold">READ MORE </h3>
            </div>
        </div>
        <div class="h-[400px] w-[300px]">
            <div class="border h-[300px] mb-3">
                <img src="img12.jpg" alt="img" class="w-full h-full">
            </div>
            <div >
            <h3 class="font-bold">WE DONATE ONE WEEKS SUPPLY</h3>             
            <p class="text-[11px] text-gray-600 mt-2 mb-3">We care about New Zealand children, and we want to <br>
               support our commutiny by providing our children in need <br>
               with necessary vitamins to improve...</p>
               <h3 class="font-bold">READ MORE </h3>
            </div>
        </div>
    </div>
    <div>
        <div class="flex justify-center w-full mt-[-150px] sm52:gap-10 absolute flex-wrap">
            <div class="h-[210px] w-[210px] border-2">
                <img src="img13.jpg" alt="img" class="w-full h-full">
            </div>
            <div class="h-[210px] w-[210px] mt-[50px] border-2">
                <img src="img14.jpg" alt="img" class="w-full h-full">
            </div>
            <div class="h-[210px] w-[210px] border-2">
                <img src="img15.jpg" alt="img" class="w-full h-full">
            </div>
            <div class="h-[210px] w-[210px] mt-[50px] border-2">
                <img src="img16.jpg" alt="img" class="w-full h-full">
            </div>
            <div class="h-[210px] w-[210px] border-2">
                <img src="img17.jpg" alt="img" class="w-full h-full">
            </div>
        </div>
        <div class="sm12:h-[250px] md:h-[520px] sm42:h-[780px] h-[1170px] bg-red-50 mt-[300px] flex justify-center items-center">
            <h1 class="text-[50px] font-bold text-red-200 sm12:mt-20 md:mt-[390px] sm42:mt-[600px] mt-[1000px]">@GOOD4ME</h1>
        </div>
    </div>
</div>

<style>
    ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}

</style>