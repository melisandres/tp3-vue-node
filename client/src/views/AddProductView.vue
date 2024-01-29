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
              <option disabled value="">Select a Photo</option>
              <option value="dinning.jpeg">dinning</option>
              <option value="experience.jpeg">experience</option>
              <option value="play.jpeg">play</option>
              <option value="work.jpeg">dinning</option>
            </select>
          </div>
            <!-- <div>
              <label>Photo</label>
              <input
                type="file"
                accept="image/*"
                @change="handleFileUpload"
              />
            </div> -->
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
        category: '',
        photo: ''
      }
    }
  },
  methods: {
    saveProduct () {
      // this.uploadPhoto()
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
    },
/*     uploadPhoto () {
      // Create a FormData object to send only the photo
      const formData = new FormData()
      formData.append('photo', this.product.photo)

      // Send the photo to the server
      ProductDataService.uploadPhoto(formData)
        .then((response) => {
          // Update the product with the received filename
          this.product.photo = response.data.filename
        })
        .catch((e) => {
          console.error(e)
          this.message = e.response?.data?.message || 'An error occurred'
        })
    }, */
    handleFileUpload (event) {
      // Access the selected file from the event
      const file = event.target.files[0]
      // Handle the file as needed (e.g., store it in a variable)
      this.product.photo = file
    }
  }
}

</script>
