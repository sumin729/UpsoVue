import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import UserQnaForm from "../../components/User/UserQnaForm.vue";

@Component({
  components: {
    UserQnaForm,
  },
})
export default class UserQnaFormContainer extends Vue {
  @Prop({})
  selectedList!: Array<any>;
}
