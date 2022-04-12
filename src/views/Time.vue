<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>phone</md-icon>
                <label>Утасны дугаар</label>
                <md-input v-model="phone" type="number"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>И-мэйл</label>
                <md-input v-model="email" type="mail"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon></md-icon>
                <el-date-picker
                  v-model="dateTime"
                  type="datetime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  placeholder="Цагаа сонгоно уу"
                >
                </el-date-picker>
              </md-field>
              <md-button
                slot="footer"
                @click="onPressTimeOrder"
                class="md-simple md-success md-lg"
              >
                Цаг авах
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import axios from "axios";

export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      phone: null,
      email: null,
      password: null,
      dateTime: null,
      allTime: []
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/profile_city.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    onPressTimeOrder() {
      if (this.phone && this.email && this.dateTime) {
        const body = {
          data: {
            date: this.dateTime,
            phone: this.phone,
            mail: this.email
          }
        };
        axios
          .post("http://localhost:1337/api/time-orders", body)
          .then(response => {
            if (response) {
              this.$notify({
                title: "Амжилттай",
                message: "Цаг бүртгэгдлээ",
                type: "success"
              });
            }
          }).catch(err => {
            this.$notify({
              title: "Амжилтгүй",
              message: "Та мэдээллээ шалгана уу",
              type: "warning"
            });
          });
      } else {
        this.$notify({
          title: "Амжилтгүй",
          message: "Та талбарыг гүйцэт бөглөнө үү!!!",
          type: "warning"
        });
      }
    }
  }
};
</script>

<style lang="css"></style>
