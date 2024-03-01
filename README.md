# Build A Tree Menu Component

Use your personal coding best practices to create a component or set of components that
can load and display an expandable tree menu.

## Requirements 
1. Write your code as if it will go to production.  Do not hack together a solution.
2. You may not use any additional frameworks.
2. Use proper Typescript types, do not use "any", implied any or "unknown".
2. Your implementation must be able to support a tree of infinite depth.  Don't assume it only needs to work with the examples.
3. Nodes with children are initially displayed collapsed.
4. Clicking a node with children toggles expand/collapse.
2. Collapsed nodes display a "+" next the label.
3. Expanded nodes display a "-" next the label.
4. Nodes that contain a url display a "#" next to th label.  The "#" should not be clickable. 
4. Nodes that contain a url open the url in a separate tab when clicked. The same tab must always be used.  It should not create a new tab on every click.
5. Child nodes are consistently indented from their parents.
6. Multiple menus can displayed at once, each displaying different sets of menu items.

## Assumptions
1. All nodes will have a label.
2. All nodes will have either a url or children, but never both.
3. For your initial implementation, styling does not matter.  If time permits styling can be added later.

## Example Result
```
- main 1        <-- expanded menu
  + child 1     <-- collapsed menu
  # link a      <-- link item
  - child 3
    # link b
    # link c
+ main 2
- main 3
  + child 4
  # link d
```
