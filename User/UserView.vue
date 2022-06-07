<template>
  <router-view
    @clickList="clickList"
    :selectedList="selectedList"
  ></router-view>
</template>
<script lang="ts" src="./UserView.ts"></script>
