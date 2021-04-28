# Submission For The OpenInstitute Frontend Development Job Test

This is an initial submission for a job interview coding test by [Open
Institute](https://openinstitute.africa/ "Open Institute").

It is a React application coded from a Figma design located [here](https://www.figma.com/file/dHqJGE6ZUcUoh7QtDXKxX7/Frontend-developer-test?node-id=0%3A1).

The various parts of the interface have been broken down into different
reusable components that work really well by just swapping in and out different
prop values.

Clearly, a lot of improvements can be made, such as:

  - Adding a more secure authentication mechanism from the likes of [Oauth](https://oauth.net/) and
    [Google]('https://developers.google.com/identity/protocols/oauth2')
  - Replacing placeholder images with real images from retribution-free sites
    such as [Pexels](https://pexels.com/)
  - Refactor the React components (I use function-based components and hooks)
    to be more reusable and modular, for example by taking in more props.
  - Implement a global state object using `useContext` and `useReducer` to
    manage logged in state.


### How to run

1. Clone the repository:

```
git clone https://github.com/dekarpaulvictor/open-institute-frontend-dev-test.git

```

2. If you have `yarn` installed, run `yarn start` at the root of the repo and
   you're good to go.




