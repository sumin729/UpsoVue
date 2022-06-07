<template>
  <div id="mypage_box">
    <div id="mypage_main">
      <h1 style="padding: 30px; text-align: left">주문내역</h1>
      <p
        style="
          background-color: #84c5f1;
          height: 10px;
          border-radius: 5px;
          margin-left: 20px;
          margin-right: 20px;
        "
      ></p>
      <div id="orderlist_table">
        <table id="customers">
          <thead>
            <tr>
              <th colspan="2" style="padding: 20px 15px">상품정보</th>
              <th colspan="2">배송정보</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orderList" v-bind:key="order">
              <td>
                <img
                  v-bind:src="order.img"
                  style="width: 215px; height: 115px"
                />
              </td>
              <td
                style="width: 25%; text-align: left; font-weight: bold"
                class="name"
              >
                {{ order.product }}
              </td>

              <td>
                <ul class="orderlist_delivery">
                  <li class="customer_name">수령인: {{ order.customer }}</li>
                  <li class="phone_number">연락처: {{ order.phone }}</li>
                  <li class="delivery_addr">배송지:{{ order.addr }}</li>
                </ul>
              </td>
              <td>
                <div id="orderlist_buttons">
                  <router-link to="/UserView/UserQnaForm">
                    <button class="order_button" @click="clickList(order)">
                      문의&환불
                    </button>
                  </router-link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./OrderItem.ts"></script>

<style scoped>
table {
  border-collapse: collapse;
  width: 700px;
}

th {
  background-color: #f3f3f3;
}
th,
td {
  padding: 0.5em;
  text-align: center;
  border-bottom: 1px solid #ddd;
}
</style>
