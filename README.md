# blog

My blog!

- **Still in development**: The development is not finished yet. There are some bugs and many things can be changed.
- Also look at [my homepage](https://avantgarde95.github.io) and [its code](https://github.com/Avantgarde95/Avantgarde95.github.io) :)

### How does the blog work
- Write the posts in [Markdown](https://en.wikipedia.org/wiki/Markdown) at the directory `src/post`.
- When building the website (`npm run debug` or `npm run build`), `PostLoader.js` (built on [marked.js](https://marked.js.org/)) converts the posts to HTML.
- The results are wrapped to JS module and loaded in the blog code by using [dynamic import](https://webpack.js.org/guides/code-splitting/#dynamic-imports).

### Technologies
#### [React.js](https://reactjs.org/) ([Preact.js](https://preactjs.com/))
- For re-using the components such as app button, app template, etc.
- Use [state](https://reactjs.org/docs/hooks-state.html) for managing the local states such as lock and time.
- Use [context](https://reactjs.org/docs/context.html) for managing the global states such as language and theme.

#### [React Router](https://reacttraining.com/blog/react-router-v6-pre/)
- For navigating the posts, categories, and search page
- `/`: Home screen
- `/post/...`: Post pages
- `/category/...`: Category pages
- `/search/...`: Search page

#### [Emotion](https://emotion.sh/)
- For constructing the dynamic styles
- And re-using the styles

#### [Marked](https://marked.js.org/)
- For converting the posts (Markdown) to HTML

#### [Disqus](https://disqus.com/)
- For supporting the comments

#### [Luminous](https://github.com/imgix/luminous)
- For attaching the 'lightbox' to each image

#### [Webpack](https://webpack.js.org/)
- For handling the imports and compiling the code

#### [Typescript](https://www.typescriptlang.org/)
- For writing & debugging the code easier

### How to deploy
- Run `npm install` to install the dependencies.
- Run `npm run build` to build the website.

### How to test
- Run `npm install` to install the dependencies.
- Run `npm run debug` to build the website.
- Run `npm run server` to run the test server.
- Open <http://localhost:8080> or <http://your-ip:8080> on the web browser.
