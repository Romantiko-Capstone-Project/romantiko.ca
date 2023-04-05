import { ServerResponse } from "http";
import Router from "next/router";

export const redirectToLogin = (router) => {
  // add the redirected query param for debugging
  const login = "/Login?redirected=true";

  router.push(login);
};
