# s-abdullakh-head-menu



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description | Type    | Default     |
| ---------- | ----------- | ----------- | ------- | ----------- |
| `headNav`  | --          | массив меню | `any[]` | `undefined` |
| `headText` | `head-text` | массив меню | `any`   | `undefined` |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `clickOnHeader` | массив меню | `CustomEvent<any>` |


## Dependencies

### Used by

 - [s-abdullakh-header](../../..)

### Depends on

- [s-abdullakh-head-nav-start](./res/view/s-abdullakh-head-nav-strat)
- [s-abdullakh-head-nav-end](./res/view/s-abdullakh-head-nav-end)
- [s-abdullakh-head-menu-popup](./res/view/s-abdullakh-head-menu-popup)

### Graph
```mermaid
graph TD;
  s-abdullakh-head-menu --> s-abdullakh-head-nav-start
  s-abdullakh-head-menu --> s-abdullakh-head-nav-end
  s-abdullakh-head-menu --> s-abdullakh-head-menu-popup
  s-abdullakh-head-menu-popup --> s-abdullakh-head-menu-in-popup
  s-abdullakh-header --> s-abdullakh-head-menu
  style s-abdullakh-head-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
