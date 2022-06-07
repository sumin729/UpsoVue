import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Master extends Vue {
  @Prop({}) qnaList!: Object;

  qnaState(qnaState: boolean): string {
    return qnaState ? "답변완료" : "미답변";
  }

  deleteList() {
    alert("삭제가 완료되었습니다.");
  }
}
