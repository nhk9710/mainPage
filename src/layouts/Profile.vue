<template>
  <header>
    <div class="all-container">
      <div class="header-container">
        <div class="header">
          <div class="header-content">
            <p>Profile</p>
            <div class="ham">
              <span class="bar1"></span>
              <span class="bar2"></span>
              <span class="bar3"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="top-btn">
        <p>▲</p>
      </div>
      <div class="all-body">
        <div class="modal">
          <div class="modal-desc">
            <h1 class="modal-title">👉INTRODUCE👈</h1>
            <p>안녕하십니까~ 노호관입니다~</p>
            <p>Carpe Diem</p>
            <p>Spero Spera </p>
            <p>veni, vidi, vici </p>
          </div>
        </div>
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
                <div class="project-picture">
                  <div class="picture-filter">
                    <div class="picture-info">
                      <h2 class="picture-title">(대충 프로젝트 설명)</h2>
                    </div>
                  </div>
                </div>
              <p class="left-name1">project1</p>
              <p class="left-link1">Click this Link!👈</p>
            </div>

          </div>
        </div>
            <div class="set-back">
              <div class="body-container">
                <div class="project-right">
                  <p class="right-link1">👉Click this Link!</p>
                  <p class="right-name1">project2</p>
                  <div class="project-picture">
                      <div class="picture-filter">
                        <div class="picture-info">
                          <h2 class="picture-title">project2</h2>
                        </div>
                      </div>
                  </div>
                </div>

                <div class="project-left">
                  <div class="project-picture">
                      <div class="picture-filter">
                        <div class="picture-info">
                          <h2 class="picture-title">project3</h2>
                        </div>
                      </div>
                  </div>
                  <p class="left-name2">project3</p>
                  <p class="left-link2">Click this Link!👈</p>
                </div>
              </div>

            </div>

        <div class="body-container" style="padding-top: 0">
          <div class="project-right">
            <p class="right-link2">👉Click this Link!</p>
            <p class="right-name2">project4</p>
            <div class="project-picture">
              <div class="picture-filter">
                <div class="picture-info">
                  <h2 class="picture-title">project4</h2>
                </div>
              </div>
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

    $(".ham").click(function(){
      $(this).toggleClass("active")
      $(".modal").toggleClass("on")
    });

    $(".left-name1").click(function(){
      $(".left-link1").toggleClass("on")
    });
    $(".left-name2").click(function(){
      $(".left-link2").toggleClass("on")
    });
    $(".right-name1").click(function(){
      $(".right-link1").toggleClass("on")
    });
    $(".right-name2").click(function(){
      $(".right-link2").toggleClass("on")
    });
  }
}

</script>

<style scoped lang="scss">

</style>