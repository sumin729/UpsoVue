import Vue from "vue";
import { Component } from "vue-property-decorator";
import ModifyForm from "../../components/User/ModifyForm.vue";
@Component({
  components: {
    ModifyForm,
  },
})
export default class ModifyView extends Vue {}
