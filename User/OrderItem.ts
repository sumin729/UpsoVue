import Vue from "vue";
import { Component, Prop, Emit } from "vue-property-decorator";

@Component({})
export default class OrderItem extends Vue {
  @Prop() orderList!: Array<any>;

  clickList(item: any) {
    this.$emit("clickList", item);
    console.log(item.product);
  }
}
