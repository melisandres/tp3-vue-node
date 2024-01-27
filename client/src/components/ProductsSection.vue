<template>
    <div className="products-container">
        <div v-if="inventory.length === 0">
            <p>Empty List</p>
        </div>
        <div className="products" v-else >
            <SingleProduct v-for="(product, key, i) in inventory" :key="i"
            :product = 'product'/>
        </div>
    </div>
</template>
<script>
import SingleProduct from '@/components/SingleProduct.vue'
export default {
  props: ['inventory'],
  components: {
    SingleProduct
  }
}
</script>
