<template>
    <div class='product'>
        <h3 class="title">{{ product.name }}</h3>
        <div class="image-container">
          <p class="price">{{ product.price.toFixed(2)}}</p>
          <picture class="image-container single">
            <img class="single" v-if="product.photo" :src="require(`@/assets/imgs/${product.photo}`)" :alt="product.name" />
          </picture>
        </div>
        <div class="actions">
            <!-- Link to product details page -->
            <router-link :to="{ name: 'showProduct', params: { id: product.id } }">
                <unicon name="eye" class="icon" />
            </router-link>

            <!-- Delete product -->
            <unicon name="multiply" class="icon" @click="deleteProduct(product.id)"/>

            <!-- Link to edit product page -->
            <router-link :to="{ name: 'editProduct', params: { id: product.id } }">
                <unicon name="edit-alt" class="icon" />
            </router-link>
        </div>
    </div>
</template>
<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  props: ['product', 'removeInv'],
  data () {
    return {
      message: null
    }
  },
  methods: {
    deleteProduct (id) {
      ProductDataService.delete(id)
        .then(response => {
          this.removeInv(id)
        })
        .catch((e) => {
          this.message = e.response?.data?.message || 'An error occurred'
        })
    }
  }
}
</script>
