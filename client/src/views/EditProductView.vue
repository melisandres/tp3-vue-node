<template>
    <div class="custom-modal-container">
        <div class="modal">
        <header>
          <div>
            <router-link to="/">
                <unicon name="multiply" fill="lightgrey" class="close-modal"/>
            </router-link>
          </div>
        </header>
          <form>
              <div>
                  <label>Product</label>
                  <input
                  type='text'
                  id="name"
                  placeholder="Add Product"
                  v-model="product.name"
                  />
              </div>
              <div>
                  <label>Price</label>
                  <input
                  type='number'
                  placeholder="Add Price"
                  v-model.number="product.price"
                  />
              </div>
              <div>
                  <label>Description</label>
                  <textarea
                      placeholder="Add Description"
                      value={description}
                      rows="4"
                      cols="50"
                      v-model="product.description"
                  ></textarea>
              </div>
              <div>
                  <label>Category</label>
                  <input
                  type='text'
                  placeholder="Add Category"
                  value={category}
                  v-model="product.category"
                  />
              </div>
              <div class="photo-select">
                <label>Photo</label>
                <select name="photo" v-model="product.photo">
                  <option value="bookplane.jpeg">Select a Photo</option>
                  <option value="dinning.jpeg">dinning</option>
                  <option value="experience.jpeg">experience</option>
                  <option value="play.jpeg">play</option>
                  <option value="work.jpeg">work</option>
                </select>
              </div>
              <input type="button" @click="updateProduct" value="update" class="modal-button white-text"/>
          </form>
          <hr/>
          <!-- <div class='info'>
              <h5>previously saved product information:</h5>
              <h4>
                  {{ product.name }}
              </h4>
              <p>
                  $ {{ product.price }}
              </p>
              <p>
                  {{ product.description }}
              </p>
          </div> -->
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
  props: ['updateInv', 'inventory', 'removeInv', 'remove'],
  components: {
    ProductsSection
  },
  data () {
    return {
      message: null,
      submitted: false,
      product: {},
      id: parseInt(this.$route.params.id)
    }
  },
  methods: {
    updateProduct () {
      ProductDataService.update(this.id, this.product)
        .then(response => {
          this.updateInv(this.productIndex, this.product)
          this.submitted = true
          this.message = null
          // Open the single product view
          this.$router.push({ name: 'showProduct', params: { id: this.product.id } })
        })
        .catch((e) => {
          this.message = e.response.data.message
        })
    },
    deleteProduct () {
      ProductDataService.delete(this.id)
        .then(response => {
          this.removeInv(this.productIndex)
          this.remove(this.product.name)
          this.$router.push({ name: 'home' })
        })
        .catch((e) => {
          this.message = e.response.data.message
        })
    }
  },
  computed: {
    productIndex () {
      const index = this.inventory.findIndex((p) => {
        return p.id === this.id
      })
      return index
    }
  },
  mounted () {
    ProductDataService.get(this.id)
      .then(response => {
        this.product = response.data
      })
  }
}
</script>
