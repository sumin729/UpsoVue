import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class JoinForm extends Vue {
  //정보 초기화
  idData: string = ""; //id
  pwData: string = ""; //비밀번호
  pwConfirmData: string = ""; //비밀번호 확인
  phoneData: string = ""; //연락처
  addrData: string = ""; //주소
  detailAddrData: string = ""; //상세주소

  idValidate: boolean = true;
  pwValidate: boolean = true; //id, 비밀번호 중복 확인
  userInfo = {
    userId: "upso01",
  };

  JoinSubmit() {
    if (
      this.idData === "" ||
      this.pwData === "" ||
      this.pwConfirmData === "" ||
      this.phoneData === "" ||
      this.addrData === "" ||
      this.detailAddrData === ""
    ) {
      alert("항목을 모두 기재해주세요.");
      return;
    } else {
      alert("가입이 완료되었습니다.");
      this.$router.push("/login");
      console.log(
        this.idData,
        this.pwData,
        this.pwConfirmData,
        this.phoneData,
        this.addrData,
        this.detailAddrData
      );
    }
  }

  //비밀번호 일치 체크
  password_vali() {
    if (this.pwData != this.pwConfirmData) {
      this.pwValidate = false;
    } else {
      this.pwValidate = true;
    }
  }

  //id중복체크
  id_vali() {
    if (this.idData != this.userInfo.userId) {
      this.idValidate = true;
    } else {
      this.idValidate = false;
    }
  }
}
