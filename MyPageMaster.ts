import Vue from "vue";
import { Component } from "vue-property-decorator";
import MyPageHeader from "../components/Common/MyPageHeader.vue";
import UserNav from "../components/Common/UserNav.vue";
import Footer from "../components/Common/Footer.vue";
import AdminNav from "../components/Common/AdminNav.vue";

@Component({
  components: {
    MyPageHeader,
    UserNav,
    Footer,
    AdminNav,
  },
})
export default class ExampleMaster extends Vue {
  selectedVariant: number = 0;

  variants: any[] = [
    {
      variantID: 0,
    },
    {
      variantID: 1,
    },
  ];

  get Change() {
    return this.variants[this.selectedVariant].variantID;
  }
}
