<script >
export default {
    name: 'AppHeader',
    
    data() {
        return {
        }
    }
}

</script>

<template>
  <div class="container-header">
    <img src="../..//images.jpg" alt="rick n morty" >
    <h1>Rick n Morty API</h1>
  </div>
</template>

<style lang="scss" scoped>


.container-header {
  background-color: #191919;
  width: 25%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  margin-top: 70px;
  margin: auto;
  border-radius: 50px;

  h1 {
    color: rgb(255, 0, 98);
    font-size: 30px;
    font-weight: bold;
  }
  img {
    width: 120px;
    height: 70px;
  }
}
</style>