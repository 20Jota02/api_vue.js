<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid">
    <!-- <a class="navbar-brand" href="#">Usuarios</a> -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <!-- <router-link  to="/" class="nav-link active" aria-current="page" href="#">Mostar</router-link> -->
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link" href="#">crear</router-link>
        </li>
       
        
      </ul>
     
    </div>
  </div>
</nav>
<div class="fondo"></div>
<div class="container-fluid m-3">
<router-view/>

</div>

</template>

