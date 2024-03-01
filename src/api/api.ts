import { MenuItem } from "../types";
import {results} from "./results";

export function loadMenuItems(id: string = 'basic'): Promise<MenuItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(results[id]);
    }, 2000);
  });
}
