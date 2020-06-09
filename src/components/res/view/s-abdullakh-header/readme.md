# s-abdullakh-header



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

 - [my-component](../../../my-component)

### Depends on

- [s-abdullakh-head-menu](./res/view/s-abdullakh-head-menu)

### Graph
```mermaid
graph TD;
  s-abdullakh-header --> s-abdullakh-head-menu
  s-abdullakh-head-menu --> s-abdullakh-head-nav-start
  s-abdullakh-head-menu --> s-abdullakh-head-nav-end
  s-abdullakh-head-menu --> s-abdullakh-head-menu-popup
  s-abdullakh-head-menu-popup --> s-abdullakh-head-menu-in-popup
  my-component --> s-abdullakh-header
  style s-abdullakh-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
