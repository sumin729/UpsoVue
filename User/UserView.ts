import Vue from "vue";
import { Component, Emit, Prop } from "vue-property-decorator";
import ModifyContainer from "../../container/User/ModifyContainer.vue";
import OrderlistContainer from "../../container/User/OrderlistContainer.vue";
import UserQnaFormContainer from "../../container/User/UserQnaFormContainer.vue";
import UserQnaListContainer from "../../container/User/UserQnaListContainer.vue";

@Component({
  components: {
    ModifyContainer,
    OrderlistContainer,
    UserQnaFormContainer,
    UserQnaListContainer,
  },
})
export default class UserView extends Vue {
  selectedList: any = {};

  clickList(item: any) {
    this.selectedList = item;
    console.log(this.selectedList.product);
  }
}

/*
  temp: Array<any> = [];

  created() {
    this.initTempData();
  }

  initTempData() {
    this.temp.push({ name: "ddd", id: 0 });
  }
  */
