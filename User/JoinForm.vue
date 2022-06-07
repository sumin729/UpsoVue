<template>
  <div class="form password_form">
    <div class="password_content signup_content" style="height: 600px">
      <div class="password_title">회원가입</div>
      <div class="password_input">
        <div class="num_3">
          <span>*</span> 아이디 :
          <input
            type="text"
            class="input_3 input_id"
            placeholder="ID를 입력해주세요"
            v-model="idData"
          />
          <button @click="id_vali">중복확인</button>
          <br />
          <span v-if="!idValidate">* ID가 중복되었습니다.</span>
        </div>
        <p class="validation num_4">
          <span>*</span> 비밀번호 :
          <input
            type="text"
            class="input_4"
            placeholder="비밀번호를 입력해주세요"
            v-model="pwData"
            @blur="password_vali"
          />
          <br />
          <span v-if="!pwValidate">* 비밀번호가 일치하지 않습니다.</span>
        </p>
        <p class="validation num_6">
          <span>*</span> 비밀번호 확인 :
          <input
            type="text"
            class="input_6"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            v-model="pwConfirmData"
            @blur="password_vali"
          /><br />
          <span v-if="!pwValidate" style="display: none"
            >* 비밀번호가 일치하지 않습니다.</span
          >
        </p>
        <p class="num_3">
          <span>*</span> 연락처 :
          <input
            type="text"
            class="input_3"
            placeholder="연락처를 입력해주세요"
            v-model="phoneData"
          />
        </p>
        <p class="num_2">
          <span>*</span> 주소 :
          <input
            type="text"
            class="input_2"
            placeholder="주소를 입력해주세요"
            v-model="addrData"
          />
        </p>
        <p class="num_4">
          <span>*</span> 상세주소 :

          <span class="detail_address"
            ><input
              type="text"
              class="input_4 detail_addr detail_addr1"
              placeholder="상세주소"
              v-model="detailAddrData" /><input
              type="text"
              class="input_4 detail_addr"
              placeholder="우편번호(생략가능)"
              v-model="postCodeData"
          /></span>
        </p>
      </div>
      <div class="small_button">
        <router-link to="/main/list">
          <button class="back_button">뒤로가기</button>
        </router-link>
        <button class="next_button" @click="JoinSubmit">가입하기</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./JoinForm.ts"></script>

<style></style>
