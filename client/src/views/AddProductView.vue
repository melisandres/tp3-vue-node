<template>
  <div class="custom-modal-container">
      <div class="modal">
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
            <input type="button" @click="saveProduct" value="save" class="modal-button white-text"/>
        </form>
    </div>
  </div>
</template>
<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  props: ['addInv'],
  data () {
    return {
      product: {
        name: '',
        price: '',
        description: '',
        category: ''
      }
    }
  },
  methods: {
    saveProduct () {
      ProductDataService.create(this.product)
        .then((response) => {
          const newProductId = response.data.id
          // Add the id to the product
          this.product.id = newProductId
          // Add the product to the inventory
          this.addInv(this.product)
          // Open the single product view
          this.$router.push({ name: 'showProduct', params: { id: newProductId } })
        })
        .catch((e) => {
          console.error(e)
          this.message = e.response?.data?.message || 'An error occurred'
        })
    }
  }
}

</script>
