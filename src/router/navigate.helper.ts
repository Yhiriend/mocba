import { Router } from "vue-router";
import { RoutesEnum } from "./routes.enum";

export interface ParamRoute {
  key: string;
  value: string;
}

const routesDictionary = {
  [RoutesEnum.LOGIN]: "login",
  [RoutesEnum.HOME]: "home",
  [RoutesEnum.ADD_DEVICE]: "add_device",
  [RoutesEnum.SETTINGS]: "settings",
  [RoutesEnum.DEVICES]: "devices",
  [RoutesEnum.DEVICE_DETAIL]: "device_detail",
  [RoutesEnum.ALERTS]: "alerts",
  [RoutesEnum.REGISTER]: "register",
};

export const getRouteName = (route: RoutesEnum) => {
  return routesDictionary[route];
};

export const navigateTo = (
  route: RoutesEnum,
  router: Router,
  params?: ParamRoute
) => {
  if (!params) router.push(route);
  else
    router.push({
      name: getRouteName(route),
      params: { [params.key]: params.value },
    });
};

export const navigateBefore = (router: Router) => {
  router.back();
};
