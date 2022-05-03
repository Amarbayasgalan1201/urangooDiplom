<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          ></div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="title text-center">
                Нүдний урьдчилан сэргийлэх үзлэг оношлогоо
              </h2>
              <div style="display: flex">
                <h5 class="description">
                  <li>Хол ойрын хараа шалгах</li>
                  <li>Обьектив, субьектив аргаар хугарлын гажиг тодорхойлох</li>
                  <li>Нүдний дотоод даралт шинжлэх</li>
                  <li>Нүдний даралтын шинжилгээ</li>
                  <li>Нүдний ус дурандах</li>
                  <li>Микроскопоор шинжлэх</li>
                  <li>Ретиноскопи хийх</li>
                  <li>Нүдний хуурайшилт тодорхойлох</li>
                </h5>
                <img src="../assets/img/leaf3.png" alt="" style="width:350px" />
              </div>
            </div>
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="title text-center">
                Нарийн мэргэжлийн үзэх оношлогоо
              </h2>
              <div style="display: flex">
                <h5 class="description">
                  <li>Торлог шилэнцрийн эмгэг</li>
                  <li>Нүдний даралт ихсэх өвчний оношлогоо, хяналт</li>
                  <li>
                    Чихрийн шижин, цусны даралт ихсэх үеийн торлогчийн эмгэг
                  </li>
                  <li>Дутуу нярай хүүхдийн нүдний эмгэгийн оношлогоо</li>
                  <li>
                    Хүүхдийн гэрлийн хугарлын өөрчлөлтийн оношлогоо, хяналт
                  </li>
                  <li>Насжилтаас шалтгаасан шар толбот эмгэг</li>
                </h5>
                <img src="../assets/img/eye.jpg" alt="" style="width: 350px" />
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
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/istockphoto-1083316464-612x612.jpg")
    },
  },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
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
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
