<template>
  <div class="cv">
    <div class="header">
      <div class="container">
        <div class="header--content">
          <div class="name">
            <div class="title">
              {{ "lastname" | localize }} {{ "firstname" | localize }}
            </div>
            <div class="posada">
              {{ "posada" | localize }}
            </div>
          </div>

          <div class="info">
            <div class="adress">
              {{ "adress" | localize }}
            </div>
            <div class="cont">
              <div class="contact">{{ " +380 (99) 15 16 010 " }}</div>
              <div class="contact">{{ "lytvynovsky.volodymyr@gmail.com" }}</div>
              <div class="contact2">{{ " +380 (99) 15 16 010 &nbsp | &nbsp lytvynovsky.volodymyr@gmail.com" }}</div>
            </div>
          </div>

          <div class="lang">
            <!-- <router-link :to="'/'" replace>Рус</router-link> -->
            <input
              v-model="locate"
              @click="changeLanguage"
              type="radio"
              value="en"
              id="en"
              :disabled="locate === 'en'"
            />
            <label
              class="lang__item"
              for="en"
              :class="[locate === 'en' ? 'active' : null]"
            >
              EN
            </label>
            <span class="lang__separator">|</span>

            <!-- <router-link :to="'/ua'" > -->

              <input
                v-model="locate"
                @click="changeLanguage"
                type="radio"
                value="ua"
                id="ua"
                :disabled="locate === 'ua'"
              />
              <label
                class="lang__item"
                for="ua"
                :class="[locate === 'ua' ? 'active' : null]"
              >
                UA
              </label>
            <!-- </router-link> -->

          </div>
        </div>
      </div>
    </div>

    <div class="main">
      <div class="container">
        <div class="wrap">
          <div class="summary"> {{ "summary" | localize }} </div>
          <div class="summary"> {{ "summary2" | localize }} </div>

          <div class="block">
            <div class="title">
              <div class="name">{{ "skills" | localize }}</div>
              <div class="line"></div>
            </div>

            <div class="skills">

              <div class="skil">
                <li class="nam">{{ "1" | localize }}</li>
                <div class="val">JavaScript, TypeScript</div>
              </div>

              

              <div class="skil">
                <li class="nam">{{ "2" | localize }}</li>
                <div class="val">
                  Vue 2/3, Nuxt 2/3, React, Next
                </div>
              </div>

              <div class="skil">
                <li class="nam">{{ "9" | localize }}</li>
                <div class="val">Node | Express, Nest</div>
              </div>

              <div class="skil">
                <li class="nam">{{ "10" | localize }}</li>
                <div class="val">MongoDB, Firebase, PosgreSQL</div>
              </div>
              
              <!-- <div class="skil">
                <li class="nam">{{ "4" | localize }}</li>
                <div class="val">Element UI, Tailwind, Bootstrap, Quasar</div>
              </div> -->

              <div class="skil">
                <li class="nam">{{ "6" | localize }}</li>
                <div class="val">Vite, Webpack, Gulp | npm</div>
              </div>

              <div class="skil">
                <li class="nam">{{ "7" | localize }}</li>
                <div class="val">Gitlab, Git</div>
              </div>
              <div class="skil">
                <li class="nam">{{ "8" | localize }}</li>
                <div class="val">RESTful, GraphQL, WebSocket</div>
              </div>

              <div class="skil">
                <li class="nam">{{ "4" | localize }}</li>
                <div class="val">Element UI, Tailwind, Bootstrap, Quasar</div>
              </div>

              <!-- <div class="skil">
                <li class="nam">{{ "9" | localize }}</li>
                <div class="val">Node, Express, Nest</div>
              </div> -->
              <!-- <div class="skil">
                <li class="nam">{{ "10" | localize }}</li>
                <div class="val">MongoDB, Firebase, PosgreSQL</div>
              </div> -->
              <div class="skil">
                <li class="nam">{{ "11" | localize }}</li>
                <div class="val">Jest, Cypress, VUE/REACT Testing Library</div>
              </div>
              <div class="skil">
                <li class="nam">{{ "12" | localize }}</li>
                <div class="val">Figma, Swagger, Postman</div>
              </div>
              <div class="skil">
                <li class="nam">{{ "3" | localize }}</li>
                <div class="val">HTML5, CSS3, SASS/SCSS | PUG, Stylus</div>
              </div>
              <div class="skil">
                <li class="nam">{{ "5" | localize }}</li>
                <div class="val">Chart.js, Three.js</div>
              </div>
            </div>
          </div>

          <div class="block">
            <div class="title">
              <div class="name">{{ "exp" | localize }}</div>
              <div class="line"></div>
            </div>

            <div class="job-title">
              {{ "job1" | localize }}
              <span class="date">{{ "job111" | localize }}</span>
            </div>
            <div class="job-details">{{ "job11" | localize }}</div>
            <li class="jb">{{ "job11111" | localize }}</li>
            <li class="j_b"> -  {{ "job111111" | localize }}</li>
            <li class="j_b"> -  {{ "job1111111" | localize }}</li>
            <li class="j_b"> -  {{ "job11111111" | localize }}</li>
            <li class="j_b j_b_m"> -  {{ "job111111111" | localize }}</li>

            <li class="jb">{{ "job01" | localize }}</li>
            <li class="j_b"> -  {{ "job011" | localize }}</li>
            <li class="j_b"> -  {{ "job0111" | localize }}</li>
            <li class="j_b"> -  {{ "job01111" | localize }}</li>

            <div class="job-title">
              {{ "job2" | localize }}
              <span class="date">{{ "job222" | localize }}</span>
            </div>
            <div class="job-details">{{ "job22" | localize }}</div>
            <li class="jb">{{ "job2222" | localize }}</li>
            <li class="j_b"> -  {{ "job22222" | localize }}</li>
            <li class="j_b"> -  {{ "job222222" | localize }}</li>
            <li class="j_b"> -  {{ "job2222222" | localize }}</li>




            <!-- <div class="job-title">
              {{ "job22" | localize }}
              <span class="date">{{ "job222" | localize }}</span>
            </div>
            <div class="job-details">{{ "job2" | localize }}</div>
            <li class="jb">{{ "job2222" | localize }}</li>

            <div class="job-title">
              {{ "job33" | localize }}
              <span class="date">{{ "job333" | localize }}</span>
            </div>
            <div class="job-details">{{ "job3" | localize }}</div>
            <li class="jb">{{ "job3333" | localize }}</li> -->


          </div>

          <div class="block">
            <div class="title">
              <div class="name">{{ "add" | localize }}</div>
              <div class="line"></div>
            </div>

            <div class="experiance">
              <div class="ex1">
                <div class="ex_item">- {{ "add1" | localize }}</div>
                <div class="ex_item">- {{ "add2" | localize }}</div>
                <div class="ex_item">- {{ "add3" | localize }}</div>
                <div class="ex_item">- {{ "add4" | localize }}</div>
                <div class="ex_item">- {{ "add5" | localize }}</div>
              </div>
              <div class="ex2">
                <div class="ex_item">- {{ "add6" | localize }}</div>
                <div class="ex_item">- {{ "add7" | localize }}</div>
                <div class="ex_item">- {{ "add8" | localize }}</div>
                <div class="ex_item">- {{ "add9" | localize }}</div>
                <div class="ex_item">- {{ "add10" | localize }}</div>
              </div>
            </div>
          </div>

          <div class="block port">
            <div class="title">
              <div class="social">
                <a href="https://t.me/VolodymyrLytv" target="_blank"><div class="item tel"></div></a>
                <a href="https://linkedin.com/in/" target="_blank"><div class="item lin"></div></a>
                <a href="https://www.facebook.com/" target="_blank"><div class="item fac"></div></a>
              </div>
              <div class="line"></div>
            </div>

            
          </div>




        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "cv",
  data: () => ({
    locate: null,
  }),
  methods: {
    changeLanguage(e) {
      let event = e.target.value;
      this.$store.dispatch("CHANGE_LANGUAGE", event);

      console.log( this.locate )
      if (event === "ua") {
        this.$router.push(`/ua`)
      } else {
        this.$router.push(`/`)
      }
    },
  },
  computed: { ...mapGetters(["locale"]) },

  async mounted() {
    console.log( this.$route.name )

    // if ( this.$route.name === "ua" ) {
    //   this.locate = "ua"
    //   this.$store.dispatch("CHANGE_LANGUAGE", "ua");
    // }

    this.$store.dispatch("LOAD_LANGUAGE");
    this.locate = this.$store.getters.locale;
  },
};
</script>



<style lang='scss' scoped>

.social {

  display: flex;
  .item {
    width: 35px;
    height: 35px;
    background-color: var(--prim);
    mask-size: cover !important;
    margin-right: 15px;
  }
  .tel {
    mask: url(@/assets/svg/tel.svg) no-repeat center;
  }
  .lin {
    mask: url(@/assets/svg/lin.svg) no-repeat center;
  }
  .fac {
    mask: url(@/assets/svg/fac3.svg) no-repeat center;
  }
  
}



.container {
  width: 100%;
  height: 100%;
  max-width: 85%;
  display: flex;
  //   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 0 auto;
  //   background-color: rgb(119, 119, 236);
}

.cv {
  // width: 100vw;
  // margin: 0 auto;
  // min-width: 460px;
  position: relative;
  // margin-bottom: 140px;
}
.j_b {
  list-style: none;
  margin-left: 14px;
}
.j_b_m {
  margin-bottom: 7px;
}

.header {
  width: 100%;
  max-width: 960px;
  // min-width: 460px;
  display: flex;
  justify-content: center;
  margin: 15px auto 25px;
  // background-color: var(--prim);
  background: linear-gradient(90deg, rgba(29,38,54,1) 35%, black 100%);
  padding: 12px 0;
  border-radius: 65px 0px 0px 65px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);

  position: sticky;
  top: -2px;
  overflow: visible;
  // transform: translate(-50%, 0%);
}

.header--content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  color: white;

  .name {
    display: flex;
    flex-direction: column;
    min-width: 250px;
    margin-right: 30px;
    .title {
      font-size: 1.375rem;
      font-weight: 600;
    }
    .posada {
      font-size: 1rem;
      margin-top: 5px;
    }
  }

  .info {
    font-size: 0.813rem;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
  }
}

.main {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}
.wrap {
  display: flex;
  flex-direction: column;
}
.summary {
  text-align: justify;
  margin-bottom: 5px;
  // text-indent: 12px;
  // font-size: 15px;
  // font-style: italic;
  // font-weight: 600;
}
.block {
  margin-top: 30px;
  .title {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    .name {
      font-size: 21px;
      font-weight: 600;
      margin-right: 15px;
      text-wrap: nowrap;
    }
    .line {
      width: 100%;
      height: 3px;
      background-color: var(--prim);
      margin-left: 10px;
    }
  }
}

.skills {
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  .skil {
    display: flex;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
    // text-wrap: nowrap;
    .nam {
      min-width: 215px;
      margin-right: 25px;
      font-weight: 600;
    }
  }
}

.job-title {
  font-weight: bold;
  margin-top: 15px;
}
.job-details {
  margin-top: 0;
}
.date {
  float: right;
  font-style: italic;
}
.jb {
  padding: 4px;
}

.port {
  // padding-bottom: 90px;
  margin-bottom: 30px;
}

.port_details {
  color: var(--prim);
  width: 100%;
  padding: 4px 0;
  margin-bottom: 5px;
  margin-left: 25px;
  text-decoration: underline;
  cursor: pointer;
  display: flex;
  align-items: center;
  .blank {
    margin-left: 5px;
    margin-top: 3px;
    width: 15px;
    height: 15px;
    object-fit: cover;
  }
}

.experiance {
  display: flex;
  width: 100%;
  justify-content: space-around;
  .ex_item {
    padding: 5px;
  }
}

#ua,
#en {
  display: none;
}

.active {
  // font-weight: 600 !important;
  color: white !important;
}

.lang {
  position: absolute;
  top: 20px;
  right: 0;
  display: flex;
  margin-right: 10px;
  .lang__item {
    font-size: 15px;
    font-weight: 400;
    border: none;
    padding: 0 2px;
    background: inherit;
    color: #8387a1;
    cursor: pointer;
    transition: 0.2s;
    text-decoration: none;
  }
}

.contact {
  display: none;
}

@media screen and (max-width: 768px) {
  .header {
    margin: 0px auto 25px;
  }
  .header--content {
    padding-left: 15px;
    .name {
      width: 100%;
      margin-bottom: 15px;
      .title {
        font-size: 1.15rem;

      }
      .posada {
        font-size: 16px;
        margin-top: 0px;
      }
    }
  }
  .experiance {
    flex-direction: column;
  }
  .contact {
    display: block;
  }
  .contact2 {
    display: none;
  }
}
@media screen and (max-width: 468px) {
  .lang {
    top: auto;
    // right: 50px;
  }

}
</style>