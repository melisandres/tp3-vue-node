<template>
  <div>
    <div>
      <nav className="nav">
        <router-link to="/" class="nav-link">Products</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/create" class="nav-link">Add Product</router-link>
      </nav>
    </div>
    <router-view
    :inventory="inventory"
    />
    <ProductsSection
    :inventory="inventory"/>
    <MainFooter/>
  </div>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue'
import ProductsSection from '@/components/ProductsSection.vue'
import ProductDataService from '@/services/ProductDataService'
export default {
  components: {
    MainFooter,
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
  }
}
</script>
