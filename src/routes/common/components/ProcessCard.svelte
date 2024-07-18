<script>
    export let a;
  </script>
  
  <div class="bg-red-100 p-[4%] pl-[1.5%] pr-[1.5%] rounded-[50%] flex items-center justify-center ml-[-40px]">
      <img src={a['img']} alt="img" class="w-[100%]">
  </div>
  <div class="mt-[60px] mb-[-50px] ">
      <div class="sm8:text-[35px] font-bold text-[clamp(10px,4.5vw,40px)]">
          <h1>{a['name']}</h1>
          <h1>{a['support']}</h1>
      </div>
      <br />
      <div class="flex gap-5">
          <h2 class="text-orange-600 font-bold sm8:text-[25px] text-[clamp(12px,3vw,32px)]">{a['prise']}</h2>
          <h3 class="sm8:text-[20px] text-[clamp(11px,2.5vw,20px)] line-through text-gray-600">{a['pprise']}</h3>
      </div>
      <br />
      <div class="sm59:w-[550px] sm42:w-[420px] w-[360px]">
          <p class="sm8:text-[small] text-[clamp(10px,2vw,15px)] text-gray-600" >
              {a['detail']}
          </p>
      </div>
      <br />
      <button class="h-[40px] w-[100px] text-[small] font-bold border-2 border-orange-600">
          SHOP NOW</button>
  </div>