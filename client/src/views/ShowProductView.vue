<template>
    <div class="custom-modal-container">
        <div class="modal">
            <header>
                <router-link to="/">
                    <unicon name="multiply" fill="lightgrey" class="close-modal"/>
                </router-link>
            </header>
            <div v-if="product">
                <h3>{{ product.name }}</h3>
                <p class='price'>{{ parseFloat(product.price.toFixed(2)) }}</p>
                <p class='description'> {{ product.description }} </p>
                <!-- Other product details -->
                <footer>
                    <router-link class="modal-button" :to="`/edit/${product.id}`">Modify</router-link>
                    <span class="modal-button" @click="deleteProduct">Delete</span>
                </footer>
            </div>
            <div v-else>
                <h3>Product not found</h3>
            </div>
        </div>
    </div>
</template>
<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  props: ['inventory', 'removeInv'],
  data () {
    return {
      id: parseInt(this.$route.params.id)
    }
  },
  methods: {
    deleteProduct () {
      ProductDataService.delete(this.id)
        .then(response => {
          this.removeInv(this.id)
          this.$router.push({ name: 'home' })
        })
        .catch((e) => {
          this.message = e.response.data.message
        })
    }
  },
  computed: {
    product () {
      // Find the product in inventory with the matching id
      return this.inventory.find((item) => item.id === this.id)
    }
  }
}
</script>
