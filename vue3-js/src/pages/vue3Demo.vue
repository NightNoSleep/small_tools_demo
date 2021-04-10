<template>
  <div id="box">
    <p>num {{ num }}</p>
    <p>num1 {{ num1 }}</p>
    <button @click="Demo">按钮</button>

    <div id="circle"></div>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
export default{
  name: 'Vue3Demo',
  data () {
    const num = ref(0)
    const num1 = computed(() => {
      if (num.value === 6) {
        alert('到6了哦')
      } else {
        return num.value
      }
    })
    function Demo () {
      num.value += 1
    }
    return {
      num,
      num1,
      Demo
    }
  }
}
</script>

<style scoped lang="scss">
#box{
  #circle{
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin: auto;
    width: 80px;
    height:160px;
    border:1px solid;
    overflow: hidden;
    //transform: rotate3d(1, -1, 0, 45deg);
    --a-1: 0deg;
    --a-2: 360deg;
    --a-3: 720deg;
    --a-4: 360deg;
    --a-5: 0deg;
    //animation: circle 1s infinite;
  }
  @keyframes circle {
    0% {
      transform: rotateY(var(--a-1));
    }
    25% {
      transform: rotateY(var(--a-2));
    }
    50% {
      transform: rotateY(var(--a-3));
    }
    75% {
      transform: rotateY(var(--a-4));
    }
    100% {
      transform: rotateY(var(--a-5));
    }
  }
}
</style>
