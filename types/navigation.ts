export type NavItemType = "home" | "posts" | "edit" | "profile";

export const NAV_ITEMS = {
  HOME: "home",
  POSTS: "posts",
  EDIT: "edit",
  PROFILE: "profile",
} as const;

export const NAV_ITEM_LIST: NavItemType[] = [NAV_ITEMS.HOME, NAV_ITEMS.POSTS, NAV_ITEMS.EDIT, NAV_ITEMS.PROFILE];
