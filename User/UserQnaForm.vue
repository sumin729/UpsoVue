<template>
  <div id="mypage_box">
    <div id="mypage_main">
      <div id="mypage_contents">
        <h1 class="main_qna_title">상품 문의</h1>

        <p
          style="
            background-color: #84c5f1;
            height: 10px;
            border-radius: 5px;
            margin: 20px;
          "
        ></p>
        <div id="qna_title">
          <div id="select_box">
            <label for="select_title" class="select_title">문의 유형</label>
            <select name="qna_select" id="qna_select">
              <option value="product_qna">제품 상세문의</option>
              <option value="refund_qna">환불문의</option>
            </select>
            <label for="select_title" class="select_title">상품명</label>

            <div class="title_data">{{ selectedList.product }}</div>
          </div>
          <div id="qna_name">
            <label class="qna_subject">제목</label>

            <div class="qna_input">
              <input type="text" v-model="qnaSub" class="qna_sub" />
            </div>
          </div>

          <p
            style="
              background-color: #84c5f1;
              height: 10px;
              border-radius: 5px;
              margin: 20px;
            "
          ></p>

          <div class="qna_text">
            <label for="qna_text" class="qna_text" id="qna_text"
              >문의내용</label
            >
          </div>
        </div>
      </div>

      <div class="qna_textfield">
        <textarea type="text" v-model="qnaText" class="textfield_area">
        </textarea>
      </div>

      <div class="small_button qna_button">
        <button class="blue_button" @click="QnaSubmit">등록</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./UserQnaForm.ts"></script>
