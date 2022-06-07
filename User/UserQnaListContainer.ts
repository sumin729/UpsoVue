import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import UserQnaList from "../../components/User/UserQnaList.vue";

@Component({
  components: {
    UserQnaList,
  },
})
export default class UserQnaListContainer extends Vue {
  qnaList: upso.qna[] = [
    {
      id: 1,
      state: true,
      title: "윈드밀 자동회전 미니 선풍기가 이상해요",
      goodsId: 1,
      goodsImg: "/cm/gres/upso/images/dawoni.png",
      goodsName: "윈드밀 자동회전 미니 선풍기",
      userId: "parkjs",
      date: "2022.02.21",
      qnaType: 0,
      reply: {
        question: "윈드밀 자동회전 미니 선풍기",
        answer: "아니요. 이상한점 없는데요",
      },
    },
    {
      id: 2,
      state: false,
      title: "윈드밀 자동회전 미니 선풍기 짜증남",
      goodsId: 1,
      goodsImg: "/cm/gres/upso/images/dawoni.png",
      goodsName: "윈드밀 자동회전 미니 선풍기",
      userId: "parkjs",
      date: "2022.02.21",
      qnaType: 0,
      reply: {
        question: "윈드밀 자동회전 미니 선풍기 짜증남 망가짐 빨리 고쳐주세요!",
        answer: "",
      },
    },
    {
      id: 3,
      state: false,
      title: "다우니가 이상해요",
      goodsId: 1,
      goodsImg: "/cm/gres/upso/images/dawoni.png",
      goodsName: "다우니",
      userId: "parkjs",
      date: "2022.02.21",
      qnaType: 0,
      reply: {
        question: "우리집에서 발견한 가장좋은 숫가락 , 엄마가 선물로 주셨음",
        answer: "",
      },
    },
    {
      id: 4,
      state: false,
      title: "다우니가 이상해요",
      goodsId: 2,
      goodsImg: "/cm/gres/upso/images/dawoni.png",
      goodsName: "다우니",
      userId: "parkjs",
      date: "2022.02.21",
      qnaType: 0,
      reply: {
        question: "우리집에서 발견한 가장좋은 숫가락 , 엄마가 선물로 주셨음",
        answer: "",
      },
    },
  ];
}
