<template>
  <div class="order">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Order.vue'

export default {
  name: 'Order',
  components: {
    HelloWorld
  }
}
</script>
