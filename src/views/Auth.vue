<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card border-0">
          <div class="card-body text-start">
            <h6><strong>LOGIN TO ACCOUNT</strong></h6>
            <hr>
            <div class="form-group text-start">
              <label for="user"><strong>Email</strong></label>
              <div class="input-group mb-3 mt-2">
                <span class="input-group-text" id="basic-addon1"
                  ><i class="fa fa-user"></i
                ></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email Address"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div class="form-group text-start">
              <label for="user"><strong>Password</strong></label>
              <div class="input-group mb-3 mt-2">
                <span class="input-group-text" id="basic-addon1"
                  ><i class="fa fa-lock"></i
                ></span>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <button class="btn btn-danger w-100 mt-1">
              LOGIN
            </button>
          </div>
        </div>
        <p class="text-center mt-3">Need an Account ? <a href="http://">Register</a></p>
        <hr>
        <button class="btn btn-light w-100"><i class="fa-brands fa-google ms-3"></i>  Login With Google </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
<style scoped>
.row {
  margin-top: 50px;
}
.card {
  border-radius: 10px;
}

a{
    text-decoration: none;
}
</style>