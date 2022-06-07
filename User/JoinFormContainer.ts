import Vue from "vue";
import { Component } from "vue-property-decorator";
import JoinForm from "../../components/User/JoinForm.vue";

@Component({
  components: {
    JoinForm,
  },
})
export default class ModifyView extends Vue {}
