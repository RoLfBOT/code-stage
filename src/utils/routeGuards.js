import store from "@/store";

const guard = function(to, from, next) {
  if (store.getters["user/AUTHSTATUS"]) {
    next();
  } else {
    next("/login");
  }
};

const redirect = function(to, from, next) {
  if (!store.getters["user/AUTHSTATUS"]) {
    next();
  } else {
    next("/playground");
  }
};

export const requireAuth = guard;
export const redirectIfLoggedIn = redirect;
