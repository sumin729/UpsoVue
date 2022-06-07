import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import OrderItem from "./OrderItem";

@Component({
  components: {
    OrderItem,
  },
})
export default class UserQnaForm extends Vue {
  @Prop({})
  selectedList!: Array<any>;

  qnaSub: string = ""; //QnA 제목
  qnaText: string = ""; //QnA 내용

  //QnA제출
  QnaSubmit() {
    let qna = { qnaText: this.qnaText };
    let qnaSub = { qnaSub: this.qnaSub };

    if (this.qnaText === "") {
      alert("내용을 입력해 주세요.");
      return;
    } //내용이 없으면 alert창 표시.

    if (this.qnaSub === "") {
      alert("제목을 입력해 주세요.");
      return;
      //제목 없으면 alert창 표시.
    } else {
      console.log(qna);
      console.log(qnaSub);
      alert("Q&A가 등록되었습니다."); //콘솔에 내용, 제목 출력.
    }
  }
}
