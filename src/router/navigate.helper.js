import { RoutesEnum } from "./routes.enum";
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
export const getRouteName = (route) => {
    return routesDictionary[route];
};
export const navigateTo = (route, router, params) => {
    if (!params)
        router.push(route);
    else
        router.push({
            name: getRouteName(route),
            params: { [params.key]: params.value },
        });
};
export const navigateBefore = (router) => {
    router.back();
};
