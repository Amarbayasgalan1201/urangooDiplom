<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="title text-center">
                Нүд улайхад ямар дусаалга сайн бэ?
              </h2>
              <div style="display: flex">
                <h5 class="description">
                  <p>
                    Нүд улайх маш олон шалтгаан байдаг. Сүүлийн үед түгээмэл
                    байгаа харшлын шалтгааныг нүдний улайлт, нүдний вирүснээс
                    шалтгаалсан нүдний улайлт нойргүйдэл ядаргаанаас шалтгаалсан
                    нүдний улайлт гэх мэт олон шалтгаан бий. <br />
                    Энэ бүхний эмчилгээ ялгаатай байдаг учраас дур мэдэн хэн
                    нэгнээс лавлан дусаалга дусаах нь аюултай. Тэгэхээр та
                    нүдний нарийн мэргэжлийн эмчид хандах зайлшгүй шаардлагатай
                  </p>
                </h5>
                <img src="../assets/img/eyeRed.jpg" alt="" style="width: 350px" />
              </div>
            </div>
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="title text-center">
                Нүдний өөх гэж юу вэ?
              </h2>
              <div style="display: flex">
                <h5 class="description">
                  <p>
                    Нүдний өөх нь маш тархмал бөгөөд 2 нүдийг хамарч ямар нэгэн
                    шинж тэмдэггүй явагддаг. Эвэрлэг бүрхүүлийн хамар болон
                    шанаа талд шаргал өнгийн товруу үүснэ. Ямар нэгэн эмчилгээ
                    шаардлагагүй. Учир нь маш удаан бөгөөд хараанд нөлөөлөхгүй.
                    Цаг агаарын хуурай байдал тоос шороотой болон уур ихтэй
                    орчны нөлөөнөөс нүдний мах, өөх үүсэх шалтгаан болдог
                  </p>
                  <h4 style="font-weight: bold">Нүдний өөх нь:</h4>
                  <li>Коллагены гэмтлээс үүснэ</li>
                  <li>Шар өнгөтэй, дээш өргөгдсөн</li>
                  <li>Хараанд нөлөөлөхгүй</li>
                  <li>Ихэвчлэн зовиургүй</li>
                  <p>
                    Нүдний салстад ургасан өөх махны дусаалга гэж байдаггүй.
                    Эмчийн заалтаар мэс заслын аргаар авдаг
                  </p>
                </h5>
                <img src="../assets/img/nud.jpg" alt="" style="width:350px" />
              </div>
            </div>
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto" style="margin-bottom: 10px">
              <h2 class="title text-center">
                Нүд яагаад хуурайшдаг вэ?
              </h2>
              <div style="display: flex">
                <h5 class="description">
                  <p>
                    Маш сонирхолтой нь бидний нүд анивчих тусам нүд чийглэгддэг
                    гэтэл бидний зуршил болох ухаалаг утас компьютерийн дэлгэцээ
                    байнга ширтэн, олон цагаар зурагт үзэх зэргээс шалтгаалан
                    нүдний анивчих тоо цөөрч нүдээ чийглэж чадахгүй улмаас
                    хуурайшилт үүсэх шалтгаан болдог. <br />
                    Нүд хуурайших тусам аргаж хорсох улайх гээд олон зовиур
                    үүсдэг тул эмч нар хиймэл нулимс дусаахыг зөвлөдөг
                  </p>
                </h5>
                <img src="../assets/img/leaf3.png" alt="" style="width: 350px; margin-bottom: 20px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  bodyClass: "profile-page",
  data() {
    return {
      tabPane1: [
        { image: require("@/assets/img/examples/studio-1.jpg") },
        { image: require("@/assets/img/examples/studio-2.jpg") },
        { image: require("@/assets/img/examples/studio-4.jpg") },
        { image: require("@/assets/img/examples/studio-5.jpg") }
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") }
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/studio-3.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/studio-1.jpg") }
      ]
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/Best-Eye-Specialist-in-Kolkata.jpg")
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
