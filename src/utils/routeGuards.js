import store from "@/store";

const guard = function(to, from, next) {
  if (store.getters["user/AUTH_STATUS"]) {
    next();
  } else {
    next("auth/login");
  }
};

const redirect = function(to, from, next) {
  if (!store.getters["user/AUTH_STATUS"]) {
    next();
  } else {
    next("/playground");
  }
};

export const requireAuth = guard;
export const redirectIfLoggedIn = redirect;
