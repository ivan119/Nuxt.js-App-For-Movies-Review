<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
     />
    <nuxt />
  <!--Footer-->      
    <footer class="footer-distributed">
            <div class="footer-left">
                    <img class="img" src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png">
                </div>
            <div class="footer-center">
                <div>
                    <i class="fa fa-map-marker"></i>
                    <p><span>21 Review Street</span> Osijek, Croatia</p>
                </div>
                <br>
                <div>
                    <i class="fa fa-phone"></i>
                    <p>+777 888 999</p>
                </div>     
            </div>
            <div class="footer-right">
                <p class="footer-company-about">
                 <span>About the company</span>
                 <br>
                 Best Movies Reviews is company that makes best <br> reviews of movies nowadays
                 <br>
                 <br>
               </p>
                    <div class="footer-icons">       
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-github"></i></a>
                    </div>
            </div>
                 <p class="footer-company-name">Best Movies Reviews &copy; 2020</p>
     </footer>
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'

export default {
  components: {
    TheHeader,
    TheSidenav
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
  Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body{
  background-image: url('https://wallpaperaccess.com/full/1159285.jpg');
  background-size: cover;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  flex: 12%;
  margin: 1px;
  }

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
  cursor: pointer;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  flex: 12%;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
  cursor: pointer;
}
/* Header */
.intro {
  height: 250px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('https://cdn.mos.cms.futurecdn.net/LSnvRUxYe64Lg7qrMzCGQd.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: #3b8070;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
  text-align: center;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
/* Posts */
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
/* Movies List */
.movies-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.text{
  text-align: center;
}

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: whitesmoke;
  width: 100%;
}

a {
  text-decoration: none;
  color: black;
}

.post-thumbnail {
  width: 100%;
  height: 250px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
@media (min-width: 760px) {
  .post-preview {
    width: 100%;
    margin: 10px;
    margin-left: 4%;
    margin-right: 4%;
  }
}
@media (min-width: 850px) {
  .post-preview {
    width: 333px;
    margin: 10px;
  }
}
@media (min-width: 1280px) {
  .post-preview {
    width: 355px;
    margin: 10px;
  }
}

@media (min-width: 1600px) {
  .post-preview {
    width: 330px;
    margin: 10px;
  }
}
@media (min-width: 1620px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}


/*  Css when there are no result for searh or no favourite movies
 */
 .noresults{
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: #ccc;
  width: 50%;
  margin-left: 25%;
  text-align: center;
  cursor: pointer;
}
.noresults-content{
  margin-top: 2%;
  margin-bottom: 2%;
}
.noresults-thumbnail {
  width: 100%;
  height: 250px;
  background-position: center;
  background-size: cover;
}
/* Footer */
.footer-distributed{
  background-color: #292c2f;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  margin-top: 3%;
	box-sizing: border-box;
	width: 100%;
	text-align: left;
	font: bold 16px;
	padding: 10px 10px;
}
.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right{
	display: inline-block;
    vertical-align: top;
    padding-top: 30px;
}
 
.footer-distributed .footer-left{
    width: 40%;
    margin-top: 10px;
    margin-left: 50px;
}
 
.footer-distributed h3{
	color:  #ffffff;
	font:  36px;
	margin: 0;
}
 
.footer-distributed h3 span{
	color:  #129CF3;
}
 
 
.footer-distributed .footer-links{
	color:  #ffffff;
	margin: 20px 0 12px;
	padding: 0;
}
 
.footer-distributed .footer-links a{
	display:inline-block;
	line-height: 1.8;
	text-decoration: none;
	color:  inherit;
}
 
.footer-company-name{
	color:  #8f9296;
	font-size: 25px;
  font-weight: normal;
  text-align: center;
  margin-top: 20px;
}
 
.footer-distributed .footer-center{
  width: 35%;
  margin-top: 1%;
}

.footer-distributed .footer-center i{
	background-color:  #33383b;
	color: #ffffff;
	font-size: 25px;
	width: 38px;
	height: 38px;
	border-radius: 50%;
	text-align: center;
	line-height: 42px;
	margin: 10px 15px;
	vertical-align: middle;
}
 
.footer-distributed .footer-center i.fa-envelope{
	font-size: 17px;
	line-height: 38px;
}
 
.footer-distributed .footer-center p{
	display: inline-block;
	color: #ffffff;
	vertical-align: middle;
	margin:0;
}
 
.footer-distributed .footer-center p span{
	display:block;
	font-weight: normal;
	font-size:14px;
	line-height:2;
}
 
.footer-distributed .footer-center p a{
	color:  #129CF3;
	text-decoration: none;;
}
 
.footer-distributed .footer-right{
    width: 20%;
    margin-top: -30px;
}

 
.footer-distributed .footer-company-about{
	line-height: 20px;
	color:  #92999f;
	font-size: 13px;
	font-weight: normal;
	margin: 0;
}
 
.footer-distributed .footer-company-about span{
	display: block;
	color:  #ffffff;
	font-size: 14px;
	font-weight: bold;
  margin-top: 50px;
}
 
.footer-distributed .footer-icons{
	margin-top: 25px;
}
 
.footer-distributed .footer-icons a{
	display: inline-block;
	width: 35px;
	height: 35px;
	cursor: pointer;
	background-color:  #33383b;
	border-radius: 2px;
 
	font-size: 20px;
	color: #ffffff;
	text-align: center;
	line-height: 35px;
 
	margin-right: 3px;
	margin-bottom: 5px;
}

@media (max-width: 880px) {
 
	.footer-distributed{
    font: bold 14px sans-serif;
    margin-top: 6%;
	
	}
	.footer-distributed .footer-left,
	.footer-distributed .footer-center,
	.footer-distributed .footer-right{
		width: 100%;
		margin-bottom: 40px;
    text-align: center;
    margin-left: -2%;
	}
 
	.footer-distributed .footer-center i{
		margin-left: -2%;
	}
	.main {
		line-height: normal;
		font-size: auto;
	}
  .img{
     width:208px;
     height: 140px;
  }
 
}
</style>
