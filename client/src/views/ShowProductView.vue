<template>
    <div class="custom-modal-container">
        <div class="modal">
            <header>
              <div v-if="product">
                <h3>{{ product.name }}</h3>
              </div>
                <router-link to="/">
                    <unicon name="multiply" fill="lightgrey" class="close-modal"/>
                </router-link>
            </header>
            <div v-if="product">
                <h3>{{ product.name }}</h3>
                <div class="image-container">
                  <p class="price">{{ product.price.toFixed(2)}}</p>
                  <picture class="image-container">
                    <img class="modal-image" v-if="product.photo" :src="require(`@/assets/imgs/${product.photo}`)" :alt="product.name" />
                  </picture>
                </div>
                <!-- <p class='price'>{{ parseFloat(product.price.toFixed(2)) }}</p> -->
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
    <ProductsSection
    :inventory="inventory"
    :removeInv="removeInventory"/>
</template>
<script>
import ProductDataService from '@/services/ProductDataService'
import ProductsSection from '@/components/ProductsSection.vue'
export default {
  props: ['inventory', 'removeInv'],
  components: {
    ProductsSection
  },
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
