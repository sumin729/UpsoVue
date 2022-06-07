import Vue from "vue";
import { Component, Emit } from "vue-property-decorator";
import OrderItem from "../../components/User/OrderItem.vue";

interface order {
  img: string;
  customer: string;
  product: string;
  phone: string;
  addr: string;
}
@Component({
  components: {
    OrderItem,
  },
})
export default class OrderlistContainer extends Vue {
  clickList(item: any) {
    this.$emit("clickList", item);
    console.log(item.product);
  }

  orderList: Array<order> = [
    {
      img: "/cm/gres/upso/images/slipper.png",

      product: "EVA 항균 거실화",
      customer: "홍이동",
      phone: "010-1111-1111",
      addr: "서울특별시 강남구 도산대로 164 3층",
    },
    {
      img: "/cm/gres/upso/images/bas.png",
      customer: "홍이동",
      product: "바스 논슬립 규조토 매트",

      phone: "010-1111-1111",
      addr: "서울특별시 강남구 도산대로 164 3층",
    },
    {
      img: "/cm/gres/upso/images/hand_pen.png",

      product: "윈드밀 자동회전 미니 선풍기",
      customer: "홍사동",
      phone: "010-1111-1111",
      addr: "서울특별시 강남구 도산대로 164 3층",
    },
    {
      img: "/cm/gres/upso/images/hand_pen.png",

      product: "윈드밀 자동회전 미니 선풍기",
      customer: "홍사동",
      phone: "010-1111-1111",
      addr: "서울특별시 강남구 도산대로 164 3층",
    },
  ];
}
