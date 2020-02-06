<template>
  <div class="home-page">
    <section class="intro">
      <h1>About</h1>
    </section>
  <!--About us -->      
    <div class="contanier">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="section-title">
                        <h2> About Us</h2>
                        <p>Universal Pictures is an American film studio, owned by Comcast through its wholly owned subsidiary NBCUniversal,
                           and is one of Hollywood's "Big Six" film studios. Its production studios are at 100 Universal City Plaza Drive in Universal City,
                            California. Distribution and other corporate offices are in New York City. Universal Studios is a member of the Motion Picture Association of America (MPAA).
                             Universal was founded in 1912 by the German Carl Laemmle (pronounced "LEM-lee"), Mark Dintenfass, Charles O. Baumann, Adam Kessel, Pat Powers, William Swanson,
                              David Horsley, Robert H. Cochrane, and Jules Brulatour.</p>
                    </div>
                </div>
            </div>
     </div>
  <!--Contact us -->      
    <section class="contact-us">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-md-offset-1">
                        <div class="section-title">
                            <h2>Contact Us</h2>
                            <p>Have any questions? Feel free to ask us anything by submiting this form</p>
                        </div>
                    </div>
                </div>
            </div>
            <br>
        <!--Contact us form-->      
            <div class="contact-us-form">
                <div class="container">
                    <form class="form" id="myForm" @submit.prevent="submitForm">
                        <div class="row">
                            <div class="col-md-4">
                                <input type="text" v-model="formInput.name" class="form-control" id="name" placeholder="Name" required>
                                <input type="email" v-model="formInput.email" class="form-control" id="email" placeholder="Email" required>
                                <input type="text" v-model="formInput.subject" class="form-control" id="subject" placeholder="Subject" required>
                            </div>
                            <div class="col-md-8">
                                <textarea v-model="formInput.text" class="form-control" placeholder="Enter text here..." name="" id="message" cols="30" rows="20" required></textarea>
                                <button type="submit" class="button--green">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formInput: {
          name:'',
          email:'',
          subject:'',
          text:''
        }
      }
    },
    methods: {
      async submitForm() {
        // console.log(this.formInput)
        alert('Thank You! The Form Is Submitted Successfully!')
        this.$router.push({name:'index'})
      }
    }
  }

</script>

<style scoped>
.section-title {
    margin-top: 2%;
    margin-left: 15%;
    margin-right: 15%;
}
.section-title h2 {
    position: relative;
    text-align: center;
    color: #333;
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
}
.section-title h2:after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    width: 60px;
    height: 2px;
    background-color: #3b8070;
    margin-left: -30px;
}


.section-title p {
    color: rgb(0, 0, 0);
    font-size: 18px;
    line-height: 28px;  
    font-weight: 300;
    text-align: center;
    margin-top: 45px;
}

/* Contact Us Form */
.contact-us-form .form-control {
    display: block;
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
    height: 50px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 21px;
    color: #555;
    background-color: transparent;
    border: 1px solid #aeaeae;
    border-radius: 3px;
    margin-bottom: 15px;
    opacity: .8;
    transition: all 1s;
}
#message {
    height: 117px;
    resize: none;
}
.button--green {
  display: inline-block;
  width: 50%;
  margin-left: 25%;
  border-radius: 4px;
  height: 50px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  flex: 1 1 12%;
  }

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
  cursor: pointer;
}

</style>
