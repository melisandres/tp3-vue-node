<template>
    <div className='product'>
        <h3>{{ product.name }}</h3>
        <p className="price">{{ product.price.toFixed(2)}}</p>
        <div className="actions">
            <!-- Link to product details page -->
<!--             <router-link :to="{ name: 'product-details', params: { id: product.id } }">
                <unicon name="eye" fill="royalblue" />
            </router-link> -->

            <!-- Delete product -->
            <unicon name="multiply" fill="lightgrey" @click="onDelete(product.id)"/>

            <!-- Link to edit product page -->
<!--             <router-link :to="{ name: 'edit-product', params: { id: product.id } }">
                <unicon name="edit-alt" fill="royalblue" />
            </router-link> -->
        </div>
    </div>
</template>
<script>
export default {
  props: ['product'],
  components: {
  },
  methods: {
    onDelete (id) {
      // Handle delete action
      console.log(`Deleting product with id ${id}`)
    }
  }
}
</script>
