<template>
    <div class='product'>
        <h3>{{ product.name }}</h3>
        <p class="price">{{ product.price.toFixed(2)}}</p>
        <div class="actions">
            <!-- Link to product details page -->
            <router-link :to="{ name: 'showProduct', params: { id: product.id } }">
                <unicon name="eye" class="icon" />
            </router-link>

            <!-- Delete product -->
            <unicon name="multiply" class="icon" @click="onDelete(product.id)"/>

            <!-- Link to edit product page -->
            <router-link :to="{ name: 'editProduct', params: { id: product.id } }">
                <unicon name="edit-alt" class="icon" />
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
  props: ['product'],
  methods: {
    onDelete (id) {
      // Handle delete action
      console.log(`Deleting product with id ${id}`)
    }
  }
}
</script>
