export type NavItemType = "home" | "post" | "edit" | "profile";

export const NAV_ITEMS = {
  HOME: "home",
  POST: "post",
  EDIT: "edit",
  PROFILE: "profile",
} as const;

export const NAV_ITEM_LIST: NavItemType[] = [NAV_ITEMS.HOME, NAV_ITEMS.POST, NAV_ITEMS.EDIT, NAV_ITEMS.PROFILE];
