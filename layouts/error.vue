<template>
 
  <div class="main-container">
            <section class="text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 col-lg-8">
                            <h1 v-if="error.statusCode === 404">Page not found</h1>
                            <h1 v-else>An error occurred</h1>
                            <p class="lead">  <a href="/">Home page</a> </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>