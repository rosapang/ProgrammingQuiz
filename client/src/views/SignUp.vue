<template>
  <main class="form-signin w-100 m-auto">
  <form>
    <h1 class="h3 mb-3 fw-normal">Welcome and Sign Up</h1>

    <div class="form-floating">
      <input type="email" class="form-control" placeholder="name@example.com">
      <label>Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" placeholder="Password">
      <label>Password</label>
    </div>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
  </form>
  </main>
</template>

<script>

export default {
  name: 'SignUp',
}
</script>