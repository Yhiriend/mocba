import { getRouteName } from "../router/navigate.helper";
import { RoutesEnum } from "../router/routes.enum";
import authService, { AuthService } from "../services/auth.service";
import { useAuhtStore } from "../stores/authStore";
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export const authGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const authStore = useAuhtStore();

  if (
    to.name === getRouteName(RoutesEnum.LOGIN) ||
    to.name === getRouteName(RoutesEnum.REGISTER)
  ) {
    return next();
  }

  if (authStore.isAuthenticated) {
    return next();
  }

  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decoded = await authService.verifyToken(token);
      const user = await authService.getUserById(decoded?.id ?? "");
      if (user) {
        authStore.setUser(user);
        authStore.setIsAuth(true);
        authStore.setToken(token);
        return next();
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  return next({ name: getRouteName(RoutesEnum.LOGIN) });
};
