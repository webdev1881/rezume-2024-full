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
            <div class="contact">
              {{ " +380 (99) 15 16 010  | lytvynovsky.volodymyr@gmail.com" }}
            </div>
          </div>

          <div class="lang">
            <input
              v-model="locate"
              @click="changeLanguage"
              type="radio"
              value="en"
              id="en"
            />
            <label
              class="lang__item"
              for="en"
              :class="[locate === 'en' ? 'active' : null]"
            >
              EN
            </label>
            <span class="lang__separator">|</span>
            <input
              v-model="locate"
              @click="changeLanguage"
              type="radio"
              value="ua"
              id="ua"
            />
            <label
              class="lang__item"
              for="ua"
              :class="[locate === 'ua' ? 'active' : null]"
            >
              UA
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="main">
      <div class="container">
        <div class="wrap">
          <div class="summary">
            {{ "summary" | localize }}
          </div>

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
                  Vue.js 2/3, Nuxt.js 2/3, React.js, NextJS, Quasar
                </div>
              </div>
              <div class="skil">
                <li class="nam">{{ "3" | localize }}</li>
                <div class="val">HTML5, CSS3, SASS/SCSS | PUG, Stylus</div>
              </div>
              <div class="skil">
                <li class="nam">{{ "4" | localize }}</li>
                <div class="val">Element UI, Tailwind, Bootstrap</div>
              </div>

              <div class="skil">
                <li class="nam">{{ "6" | localize }}</li>
                <div class="val">Vite, Webpack, Gulp, npm</div>
              </div>

              <div class="skil">
                <li class="nam">{{ "7" | localize }}</li>
                <div class="val">Gitlab, Git</div>
              </div>
              <div class="skil">
                <li class="nam">{{ "8" | localize }}</li>
                <div class="val">RESTful, GraphQL</div>
              </div>
              <div class="skil">
                <li class="nam">{{ "9" | localize }}</li>
                <div class="val">Node, Express, Nest</div>
              </div>
              <div class="skil">
                <li class="nam">{{ "10" | localize }}</li>
                <div class="val">MongoDB, Firebase, PosgreSQL</div>
              </div>
              <div class="skil">
                <li class="nam">{{ "11" | localize }}</li>
                <div class="val">Jest, Cypress, VUE Testing Library</div>
              </div>
              <div class="skil">
                <li class="nam">{{ "12" | localize }}</li>
                <div class="val">Figma, Swagger, Postman</div>
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
              {{ "job11" | localize }}
              <span class="date">{{ "job111" | localize }}</span>
            </div>
            <div class="job-details">{{ "job1" | localize }}</div>
            <li class="jb">{{ "job1111" | localize }}</li>

            <div class="job-title">
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
            <li class="jb">{{ "job3333" | localize }}</li>
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
              <div class="name">{{ "port" | localize }}</div>
              <div class="line"></div>
            </div>

            <a
              class="port_details" href="https://market-ua.netlify.app" target="_blank" >
              https://market-ua.mock.app
              <img src="@/assets/svg/tab.png" alt="" class="blank">
            </a>

            <a
              class="port_details" href="https://104.ua" target="_blank" >
              104.ua Corporate page
              <img src="@/assets/svg/tab.png" alt="" class="blank">
            </a>
            
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
    },
  },
  computed: { ...mapGetters(["locale"]) },

  async mounted() {
    this.$store.dispatch("LOAD_LANGUAGE");
    this.locate = this.$store.getters.locale;
  },
};
</script>



<style lang='scss' scoped>
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
  min-width: 460px;
  position: relative;
  // margin-bottom: 140px;
}

.header {
  width: 100%;
  max-width: 960px;
  // min-width: 460px;
  display: flex;
  justify-content: center;
  margin: 29px auto 25px;
  // background-color: var(--prim);
  background: linear-gradient(90deg, rgba(29,38,54,1) 35%, black 100%);
  padding: 12px 0;
  border-radius: 65px 0px 0px 65px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);

  position: sticky;
  top: 0px;
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
  // font-size: 15px;
  font-style: italic;
  font-weight: 600;
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
      background-color: var(--prim);;
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
      min-width: 210px;
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
  padding-bottom: 90px;
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
  font-weight: 600 !important;
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
    color: white;
    cursor: pointer;
    transition: 0.2s;
    text-decoration: none;
  }
}

@media screen and (max-width: 768px) {
  .header {
    margin: 0px auto 25px;
  }
  .header--content {
    .name {
      width: 100%;
      margin-bottom: 15px;
      .posada {
        font-size: 16px;
        margin-top: 0px;
      }
    }
  }
  .experiance {
    flex-direction: column;
  }
}
</style>