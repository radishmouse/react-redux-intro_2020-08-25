# React + Redux Intro

Goals:

- [ ] Understand the relationship between Redux and React
- [ ] Building "Dumb" (props-only) React Components
- [ ] Building "Smart" (Redux-aware) Containers for Dumb Components
    - [ ] Demystify `mapStateToProps` and `mapDispatchToProps`
    - [ ] Understanding the `connect()` function
- [ ] Wrapping your App in a `<Provider />`

# Adding a React UI to the Redux Counter

## Setting up 

```sh
npx create-react-app react-redux-intro
cd react-redux-intro
# npm i redux react-redux
yarn add redux react-redux
```

## Dumb Components vs Smart Containers

- Division of labor
    - Redux handles state management
    - React shows props, handles events

## Creating a Smart Container

- Smart Containers "wrap" your Dumb Components
    - "Iron Man armor wraps around Tony Stark, giving him super powers"
- Redux state is provided via "mapStateToProps"
    - it should expect to receive `state` as an argument
- Redux dispatch is provided via "mapDispatchToProps"
    - it should expect to receive `dispatch()` as an argument


### To create a Smart Container v1:

- import your Dumb Component
- import the connect function from react-redux
- write a mapStateToProps
    - it should "translate" redux state into react props
- you "wire up" your dumb component to the mapStateToProps fn



## Adding a `<Provider />`

- pass it a `store` prop that points to your Redux store
- Wrap your top-level component (`<App />`) for convenience
    - It knows to communicate with any Smart Containers nested anywhere inside
