import { MenuItem } from "../types";
import {ResultKey, results} from "./results";

export function loadMenuItems(id: ResultKey = 'small'): Promise<MenuItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(results[id]);
    }, 2000);
  });
}
