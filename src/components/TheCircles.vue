<template>
        <div class="circles">
            <div class="circle c1">
                <div class="inner i1"></div> 
            </div>
            <div class="circle c2">
                <div class="inner i2"></div> 
            </div>
            <div class="circle c3">
                <div class="inner i3"></div> 
            </div>
            <div class="circle c4">
                <div class="inner i4"></div> 
            </div>
        </div>
</template>

<style>

.circles{
    position: relative;
}

.circle {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}

.circle::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(to bottom right, #ff0000, #00ff00);
}

.inner {
  width: 380px;
  height: 380px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: white; /* or any other background color */
  
}




.c3{
    top: -15rem;
}




</style>