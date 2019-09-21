<template>
<div class="main-container">
            <section class="text-center height-50">
                <div class="container pos-vertical-center">
                    <div class="row">
                        <div class="col-md-8 col-lg-6">
                            <h1>Let's talk about your event</h1>
                            <p class="lead">
                                    We will customise it to meet your requirements.
                            </p>
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </section>
            <section class=" bg--secondary">
                <div class="container">
                    <div class="row justify-content-center no-gutters">
                        <div class="col-md-10 col-lg-8">
                            <div class="boxed boxed--border">
                                <form class="text-left form-email row mx-0" data-success="Thanks for your enquiry, we'll be in touch shortly." data-error="Please fill in all fields correctly." data-recaptcha-sitekey="6LewhCIUAAAAACSwFvBDhgtTbw6EnW6e9dip8o2u" data-recaptcha-theme="light">
                                    <div class="col-md-6">
                                        <span>Name:</span>
                                        <input type="text" name="name" class="validate-required" />
                                    </div>
                                    <div class="col-md-6">
                                        <span>Company:</span>
                                        <input type="text" name="company" class="validate-required" />
                                    </div>
                                    <div class="col-md-6">
                                        <span>Email Address:</span>
                                        <input type="email" name="email" class="validate-required validate-email" />
                                    </div>
                                    <div class="col-md-6">
                                        <span>Phone:</span>
                                        <input type="tel" name="phone" class="validate-required" />
                                    </div>
                                    <div class="col-md-12">
                                        <span>About Project:</span>
                                        <textarea rows="5" name="description" class="validate-required"></textarea>
                                    </div>
                                  
                                    <div class="col-md-12 boxed">
                                        <button type="submit" class="btn btn--primary type--uppercase">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </section>
</div>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style>
</style>
