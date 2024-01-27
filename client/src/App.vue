<template>
  <div>
    <div>
      <nav className="nav">
        <router-link to="/" className="nav-link">Products</router-link>
        <router-link to="/about" className="nav-link">About</router-link>
        <router-link to="/create" className="nav-link">Add Product</router-link>
      </nav>
    </div>
  </div>
  <router-view/>
</template>
