<template>
  <div>
    <MyPageHeader></MyPageHeader>
    <div id="body" v-if="Change">
      <AdminNav></AdminNav>
      <router-view></router-view>
    </div>
    <div id="body" v-else>
      <UserNav></UserNav>

      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
<script lang="ts" src="./MyPageMaster.ts"></script>
