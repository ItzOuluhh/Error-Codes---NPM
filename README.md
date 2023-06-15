# Error Code Pages

This package is made for the people who don't feel like creating their own error page. It contains all HTML codes, 100, 200, 300, 400 and 500.

It is super fast to use and easy for people who need a super simple yet beautiful html code page.

## Get Started

Install the package

```bash
npm install html-code-pages
```

Create your first error page

```js
import { NotFound } from "html-code-pages";
import React from "react";

// EXAMPLE PAGE //

function App() {
  return (
    <>
      <NotFound />
    </>
  );
}
export default App;
```

With custom error description

```js
import { OK } from "html-code-pages/lib/200"; // Imports only 200 errors
import React from "react";

// EXAMPLE PAGE //

function App() {
  return (
    <>
      <OK customText="This is a 404 error!" />
    </>
  );
}
export default App;
```

##### This example is based on a react project!

## Screenshots

![App Screenshot](https://cdn.discordapp.com/attachments/863316298129080331/1118954928623341681/image.png)

## Authors

- [@ItzOuluhh](https://github.com/ItzOuluhh)
