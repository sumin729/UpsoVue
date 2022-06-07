import Vue from "vue";
import { Component } from "vue-property-decorator";

export interface user {
  id: string;
  oldPassword: string;
}

@Component({
  components: {},
})
export default class ModifyForm extends Vue {
  Users: user[] = [{ id: "upso01", oldPassword: "upso1234" }];

  //정보 초기화
  oldPwData: string = ""; //현재 비밀번호
  pwData: string = ""; //새 비밀번호
  pwConfirmData: string = ""; //새 비밀번호 확인
  newPhoneNumber: string = ""; //연락처
  newAddress1: string = ""; //주소
  newAddress2: string = ""; //상세주소

  pwValidate: boolean = true;

  password_vali() {
    if (this.pwData != this.pwConfirmData) {
      this.pwValidate = false;
    } else {
      this.pwValidate = true;
    }
  } //비밀번호 일치 확인

  //수정완료 버튼 클릭 시 변경된 회원정보 보여주기
  modifySubmit() {
    if (
      this.newPhoneNumber === "" ||
      this.pwData === "" ||
      this.pwConfirmData === "" ||
      this.newAddress1 === "" ||
      this.newAddress2 === ""
    ) {
      alert("항목을 모두 기재해주세요.");
      return;
    } else {
      alert("회원정보가 수정되었습니다.");
      console.log(
        this.newPhoneNumber,
        this.pwData,
        this.pwConfirmData === "" || this.newAddress1,
        this.newAddress2
      );
    }
  }
}
