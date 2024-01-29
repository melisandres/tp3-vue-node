<template>
  <ProductsSection
    :inventory="inventory"
    :removeInv="removeInventory"/>
</template>
<script>
import ProductsSection from '@/components/ProductsSection.vue'
import ProductDataService from '@/services/ProductDataService'
export default {
  components: {
    ProductsSection
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.inventory = response.data
      })
  },
  data () {
    return {
      inventory: []
    }
  },
  methods: {
    addInventory (product) {
      this.inventory.push(product)
    },
    updateInventory (index, data) {
      this.inventory[index].name = data.name
      this.inventory[index].photo = data.photo
      this.inventory[index].price = data.price
      this.inventory[index].description = data.description
      this.inventory[index].category = data.category
    },
    removeInventory (id) {
      console.log('this id is ', id)
      const position = this.inventory.findIndex(item => item.id === id)
      if (position !== -1) {
        this.inventory.splice(position, 1)
      }
    }
  }
}
</script>
