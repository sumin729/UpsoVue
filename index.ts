import { RouteConfig } from "vue-router";
import { component } from "vue/types/umd";

const Upso = () => import(/* webpackChunkName: "example" */ "@upso/Index.vue");
const UpsoMaster = () =>
  import(/* webpackChunkName: "example" */ "@upso/views/Master.vue");
const MyPageMaster = () =>
  import(/* webpackChunkName: "example" */ "@upso/views/MyPageMaster.vue");
const JoinMaster = () =>
  import(
    /* webpackChunkName: "example" */ "@/modules/upso/views/JoinMaster.vue"
  );

//login
const JoinView = () =>
  import(
    /* webpackChunkName: "example" */ "@/modules/upso/views/Login/JoinView.vue"
  );
const PasswordFindView = () =>
  import(
    /* webpackChunkName: "example" */ "@/modules/upso/views/Login/PasswordFindView.vue"
  );
const PasswordReset = () =>
  import(
    /* webpackChunkName: "example" */ "@/modules/upso/container/Login/PasswordReset.vue"
  );
// const LoginCont = () => import(/* webpackChunkName: "example" */ '@upso/container/login/LoginContainer.vue')

//Main
const MainView = () =>
  import(/* webpackChunkName: "example" */ "@upso/views/Main/MainView.vue");
const MainList = () =>
  import(
    /* webpackChunkName: "example" */ "@upso/container/Main/ListContainer.vue"
  );
const MainQna = () =>
  import(
    /* webpackChunkName: "example" */ "@upso/container/Main/BoardContainer.vue"
  );
const GoodsDetail = () =>
  import(
    /* webpackChunkName: "example" */ "@upso/container/Main/GoodsContainer.vue"
  );
  const QnaEditer = () =>
  import(
    /* webpackChunkName: "example" */ "@upso/container/Main/QnaEditerContainer.vue"
  );

const OrderView = () =>
  import(/* webpackChunkName: "example" */ "@upso/views/Order/OrderView.vue");
const OrderComplete = () =>
  import(
    /* webpackChunkName: "example" */ "@upso/container/Order/OrderComplete.vue"
  );
const Order = () =>
  import(
    /* webpackChunkName: "example" */ "@upso/container/Order/OrderContainer.vue"
  );
const Basket = () =>
  import(
    /* webpackChunkName: "example" */ "@upso/container/Order/BasketContainer.vue"
  );

//Admin
const AdminView = () =>
  import(/* webpackChunkName: "example" */ "@upso/views/Admin/AdminView.vue");
const ListProduct = () =>
  import(
    /* webpackChunkName: "example" */ "@/modules/upso/container/Admin/ListContainer.vue"
  );
const AddProduct = () =>
  import(
    /* webpackChunkName: "example" */ "@/modules/upso/container/Admin/AddContainer.vue"
  );
const UpdateContainer = () =>
  import(
    /* webpackChunkName: "example" */ "@/modules/upso/container/Admin/UpdateContainer.vue"
  );
const QnAContainer = () =>
  import(
    /* webpackChunkName: "example" */ "@/modules/upso/container/Admin/QnAContainer.vue"
  );

//user
const OrderlistContainer = () =>
  import(
    /* webpackChunkName: "example" */ "@upso/container/User/OrderlistContainer.vue"
  );
const UserQnaList = () =>
  import(
    /* webpackChunkName: "example" */ "@upso/container/User/UserQnaListContainer.vue"
  );
const ModifyContainer = () =>
  import(
    /* webpackChunkName: "example" */ "@upso/container/User/ModifyContainer.vue"
  );
const UserQnaForm = () =>
  import(
    /* webpackChunkName: "example" */ "@upso/container/User/UserQnaFormContainer.vue"
  );
const UserView = () =>
  import(/* webpackChunkName: "example" */ "@upso/views/User/UserView.vue");
const JoinForm = () =>
  import(
    /* webpackChunkName: "example" */ "@upso/container/User/JoinFormContainer.vue"
  );

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Upso,
    children: [
      {
        path: "",
        redirect: "/main/list",
        component: UpsoMaster,
        children: [
          {
            path: "/main",
            name: "main",
            component: MainView,
            children: [
              {
                path: "/main/list",
                name: "goodsList",
                component: MainList,
              },
              {
                path: "/main/board",
                name: "qnaBoard",
                component: MainQna,
              },
              {
                path: "/main/goodsDetail",
                name: "goodsDetail",
                component: GoodsDetail,
              },
              {
                path: "/main/QnaEditer",
                name: "qnaEditer",
                component: QnaEditer,
              },
            ],
          },
          {
            path: "/order",
            component: OrderView,
            children: [
              {
                path: "/order1",
                name: "order",
                component: Order,
              },
              {
                path: "/orderComplete",
                name: "orderComplete",
                component: OrderComplete,
              },
              {
                path: "/basket",
                name: "basket",
                component: Basket,
              },
            ],
          },
        ],
      },
      {
        path: "/user",
        name: "user",
        component: JoinMaster,
        children: [
          {
            path: "/login",
            name: "login",
            component: JoinView,
          },
          {
            path: "/passwordFind",
            name: "passwordFind",
            component: PasswordFindView,
          },
          {
            path: "/PasswordReset",
            component: PasswordReset,
          },
          {
            path: "/join",
            component: JoinForm,
          },
          //reset /login/reset
          //회원가입
          //아이디찾기
        ],
      },
      {
        path: "/admin",
        component: MyPageMaster,
        children: [
          {
            path: "/adminView",
            component: AdminView,
            children: [
              {
                path: "/adminview/listproduct",
                component: ListProduct,
              },
              {
                path: "/adminview/addproduct",
                component: AddProduct,
              },
              {
                path: "/adminview/updateproduct",
                component: UpdateContainer,
              },
              {
                path: "/adminview/adminqna",
                component: QnAContainer,
              },
              {
                path: "/userqnaList",
                component: UserQnaList,
                name: "userqnaList",
              },
            ],
          },
          {
            path: "/userView",
            component: UserView,
            children: [
              {
                path: "/userView/Modify",
                component: ModifyContainer,
              },
              {
                path: "/userView/orderList",
                component: OrderlistContainer,
              },
              {
                path: "/userView/UserQnaForm",
                component: UserQnaForm,
              },
            ],
          },
        ],
      },
    ],
  },
];
export default routes;
