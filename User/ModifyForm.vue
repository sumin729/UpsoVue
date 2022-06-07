<template>
  <div id="mypage_box">
    <div id="mypage_main">
      <div class="userModify_bar">
        <div class="userModify_title">회원 정보 수정</div>
      </div>
      <form>
        <div id="modify_contents">
          <div class="input_wrap">
            <label for="signup_id">아이디</label>
            <div for="signup_idcheck">upso01</div>
          </div>

          <div class="input_wrap">
            <label for="signup_phone">연락처</label>
            <input
              type="text"
              class="signup_phone"
              id="signup_phone"
              name="signup_phone"
              v-model="newPhoneNumber"
            />
          </div>
          <div class="input_wrap">
            <label for="signup_password">현재 비밀번호</label>
            <input
              type="text"
              class="signup_password"
              id="signup_password"
              name="signup_password"
              v-model="oldPwData"
            />
          </div>

          <div class="input_wrap">
            <label for="signup_password">새 비밀번호</label>
            <input
              type="text"
              class="signup_password"
              id="signup_password"
              name="signup_password"
              v-model="pwData"
              @blur="password_vali"
            />
          </div>

          <div class="input_wrap">
            <label for="signup_passwordConfirm">새 비밀번호 확인</label>
            <input
              type="text"
              class="signup_password"
              id="signup_password"
              name="signup_passwordConfirm"
              v-model="pwConfirmData"
              @blur="password_vali"
            />
          </div>
          <span v-if="!pwValidate">* 비밀번호가 일치하지 않습니다.</span>
        </div>
        <div class="addrModify_bar">배송지 정보 수정</div>
        <div id="addr_contents">
          <div class="addr_juso">
            <label for="signup_addr1">주소</label>
            <input
              type="text"
              id="signup_addr1"
              class="signup_addr1"
              name="signup_addr1"
              v-model="newAddress1"
            />
            <label for="signup_addr2">상세주소</label>
            <div class="addr_details">
              <input
                type="text"
                id="signup_addr2"
                class="signup_addr2"
                name="signup_addr2"
                v-model="newAddress2"
              />
              <input
                type="text"
                id="signup_addr3"
                class="signup_addr3"
                name="signup_addr3"
                v-model="newAddress3"
              />
            </div>
          </div>
        </div>
      </form>
      <div id="modify_buttons">
        <button class="btn page-btn btn-blue">취소</button>
        <button class="btn-2 page-btn-2 btn-blue-outline" @click="modifySubmit">
          수정완료
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./ModifyForm.ts"></script>

<style scoped>
label {
  position: relative;
  display: flex;
  color: #303972;
  font-size: 16px;
  font-weight: bold;
  padding-left: 20px;
  margin-left: 10px;
  padding-top: 10px;
  margin-right: 20px;
}

span {
  margin-top: 30px;
  color: #84c5f1;
}
</style>
