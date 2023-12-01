import { MenuItem } from "./types";
export function loadMenuItems(): Promise<MenuItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          text: "main 1",
          children: [
            { text: "Child 1", url: "https://www.byzzer.com" },
            { text: "Child 2", url: "https://www.byzzer.com" },
            { text: "Child 3", url: "https://www.byzzer.com" }
          ]
        },
        {
          text: "main 2",
          children: [
            { text: "Child 1", url: "https://www.byzzer.com" },
            { text: "Child 2", url: "https://www.byzzer.com" },
            {
              text: "Child 3",
              children: [
                { text: "Child 1", url: "https://www.byzzer.com" },
                { text: "Child 2", url: "https://www.byzzer.com" },
                { text: "Child 3", url: "https://www.byzzer.com" }
              ]
            }
          ]
        },
        { text: "Byzzer", url: "https://www.byzzer.com" },
        { text: "Google", url: "https://google.com" }
      ]);
    }, 2000);
  });
}

// create a function to retrieve a paramaterized number of users from https://randomuser.me/api/?results=10
