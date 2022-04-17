import { NavigationIds } from "../constants/header.constants";

export interface NavigationTabsInterface {
  id: NavigationIds;
  label: string;
  path: string;
  color: string;
}
