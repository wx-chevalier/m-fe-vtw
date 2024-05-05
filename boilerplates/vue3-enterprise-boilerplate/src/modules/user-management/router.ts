import type { RouteRecordRaw } from 'vue-router';
import { AppRoute, Permission } from '@/constants';

export const userManagementRoutes: RouteRecordRaw[] = [
  {
    path: AppRoute.User.path,
    name: AppRoute.User.name,
    component: () => import('@/modules/user-management/user/pages/UserListing.vue'),
    meta: {
      requiresAuth: true,
      authorities: [Permission.CREATE_USER, Permission.EDIT_USER, Permission.VIEW_USER_LISTING, Permission.VIEW_USER_DETAILS]
    }
  },
  {
    path: AppRoute.UserDetails.path,
    name: AppRoute.UserDetails.name,
    component: () => import('@/modules/user-management/user/pages/UserDetails.vue'),
    meta: {
      requiresAuth: true,
      authorities: [Permission.CREATE_USER, Permission.EDIT_USER, Permission.VIEW_USER_LISTING, Permission.VIEW_USER_DETAILS]
    }
  },
  {
    path: AppRoute.Role.path,
    name: AppRoute.Role.name,
    component: () => import('@/modules/user-management/role/RoleView.vue'),
    meta: {
      requiresAuth: true,
      authorities: [Permission.CREATE_ROLE, Permission.EDIT_ROLE, Permission.VIEW_ROLE_LISTING, Permission.VIEW_ROLE_DETAILS]
    }
  }
];
