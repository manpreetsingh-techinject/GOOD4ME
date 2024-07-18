<script>
    import "../app.css";

    let dis=false

</script>

<div class="">
    <div class="flex justify-evenly items-center pt-[1%] pb-[1%]">
        <div class="name">
            <h1 class="text-3xl ml-[20px]">GOOD4ME.</h1>
        </div>
        <div class="w-[50%] flex justify-center ml-[50px]">
            <ul class="justify-center gap-[12%] hidden lg:flex">
                <li>HOME</li>
                <li>SHOP</li>
                <li>FAQ'S</li>
                <li>STOCKISTS</li>
                <li>WHOLESALE</li>
                <li>CONTACT</li>
            </ul>
        </div>
        <div class="h-5 w-[12%] border border-black lg:ml-[0] ml-[-140px]"></div>
        <div  class="lg:hidden ml-[20px]" >
            <button  on:click={()=>{
                dis = !dis
            }}>
                <i class="fa fa-bars"></i>
            </button>

           
        </div>
    </div>
    {#if dis}
        
   
        <div class="absolute flex justify-end w-full ">
            <div class="bg-white flex justify-center items-center flex-row h-[220px] w-[130px]">
                <ul class=" gap-[12%] text-[20px] text-center">            
                    <li>HOME</li>
                    <hr class="border border-black w-full">
                    <li>SHOP</li>
                    <hr class="border border-black">
                    <li>FAQ'S</li>
                    <hr class="border border-black">
                    <li>STOCKISTS</li>
                    <hr class="border border-black">
                    <li>WHOLESALE</li>
                    <hr class="border border-black">
                    <li>CONTACT</li>
                </ul>
            </div>
        </div>
    {/if}
    <slot></slot>

    <div class=" flex justify-center mt-[50px]  flex-wrap">
        <div class="w-[450px] text-center mb-[60px]">
            <h1 class="text-[20px]">GOOD4ME</h1>
            <p class="text-[small] leading-5">
                Good health is important, so all of our products <br />
                have been carefully designed to bring out the <br />
                best in you.
            </p>
        </div>
        <div class="w-[510px] text-center mb-[60px]">
            <h1 class="text-[20px]">Keep In Touch</h1>
            <p class="text-[small] mb-4 leading-5">
                Subscribe to revieve new product updated, be the <br />
                first to know about sales, and more.
            </p>
            <div class="flex justify-between border-b-2 border-black">
                <input
                    type="email"
                    placeholder="Enter your email address"
                    class="text-[small] text-[black]"
                />
                <h3 class="text-orange-600 font-bold text-[14px]">SUBSCRIBE</h3>
            </div>
        </div>
        <div class="w-[450px] text-center ">
            <h1 class="text-[20px]">MORE INFO</h1>
            <div class="text-[small] leading-6">
                <h4>Shipping & Delivery</h4>
                <h4>Refund Policy</h4>
                <h4>Partner Program</h4>
                <h4>Wholesale Portal</h4>
                <h4>You Buy, We Donate</h4>
                <h4>Privacy Policy</h4>
                <h4>Terms & Conditions</h4>
            </div>
        </div>
    </div>

    <div class="flex justify-evenly h-[60px] border">
        <div></div>
        <div class="flex items-center text-[small]">
            <h3>2021,</h3>
            <h3 class="text-orange-600">GOOD4ME</h3>
            <h3>. powered by Shopify</h3>
        </div>
        <div></div>
    </div>
</div>
