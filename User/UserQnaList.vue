<template>
  <div id="mypage_box">
    <div id="mypage_main">
      <div id="mypage_contents">
        <h1 style="padding: 20px">문의내역</h1>
        <p
          style="
            background-color: #84c5f1;
            height: 10px;
            border-radius: 5px;
            margin-left: 20px;
            margin-right: 20px;
          "
        ></p>
        <!--QnA 리스트 테이블-->
        <div id="qna_tablelist">
          <table id="qna_table">
            <thead id="qnaitems">
              <tr>
                <th>답변상태</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th></th>
              </tr>
            </thead>

            <tbody v-for="qnaitem in qnaList" v-bind:key="qnaitem">
              <tr>
                <td>{{ qnaState(qnaitem.state) }}</td>
                <td>{{ qnaitem.title }}</td>
                <td>{{ qnaitem.userId }}</td>
                <td>
                  {{ qnaitem.date }}
                </td>
                <td>
                  <div id="orderlist_buttons">
                    <button class="order_button" @click="deleteList">
                      삭제
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./UserQnaList.ts"></script>

<style scoped>
table {
  border-collapse: collapse;
}

th {
  background-color: #f3f3f3;
}
th,
td {
  text-align: center;
  border-bottom: 1px solid #ddd;
  padding: 20px;
}
</style>
