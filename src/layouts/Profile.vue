<template>
  <header>
    <div class="all-container">
      <div class="header-container">
        <div class="header">
          <div class="header-content">
            <p>Profile</p>
          </div>
        </div>
      </div>

      <div class="top-btn">
        <p>▲</p>
      </div>

      <div class="all-body">
        <div class="body-container">
          <div class="body-content">
            <div class="first-content">
              <div class="picture"></div>
              <div class="info">
                <p class="">이름 : <span>노호관</span></p>
                <p class="">Skill : <span>JS, Vue</span></p>
                <p class="">Tool : <span>WebStorm</span></p>
              </div>
            </div>

            <div class="separate"></div>

            <div class="second-content">
              <p>Project📃</p>
            </div>

            <div class="project-left">
              <div class="project-picture"></div>
              <p class="left-name">project1</p>
            </div>

            <div class="project-right">
              <p class="right-name">project2</p>
              <div class="project-picture"></div>
            </div>

            <div class="project-left">
              <div class="project-picture"></div>
              <p class="left-name">project3</p>
            </div>

            <div class="project-right">
              <p class="right-name">project4</p>
              <div class="project-picture"></div>
            </div>
          </div>
        </div>
      </div>



      <div class="footer-container">
        <div class="footer">
          <div class="footer-content">
            <p class="foot-title">Contact</p>

            <div class="contact-info">
              <p>Github</p>
              <p>CodePen</p>
            </div>
            <div class="copyright">
              <p>© 2022. Noh Ho Kwan. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>


export default {
  mounted() {
    $(window).scroll(function (){
      if ($(this).scrollTop() > 300){
        $('.top-btn').show();
      } else{
        $('.top-btn').hide();
      }
    });
    $('.top-btn').click(function(){
      $('html, body').animate({scrollTop:0},400);
      return false;
    });
  }


}

</script>

<style scoped lang="scss">

</style>