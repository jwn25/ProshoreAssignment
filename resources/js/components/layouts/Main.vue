<template>
  <div>
    <header>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container">
          <div class="row">
            <a class="navbar-brand" href="#">
              <img src="/images/logo.png" width="100" class="d-inline-block align-top" alt />
              <span class="logo-text">World News</span>
            </a>
          </div>
        </div>
      </nav>
    </header>

    <div class="main-body">
      <div class="container"> 
        <div class="row">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>