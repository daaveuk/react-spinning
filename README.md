# @daaveuk/react-spinning

> A library to facilitate the gleeful pleasure found by making things spin around

[![NPM](https://img.shields.io/npm/v/@daaveuk/react-spinning.svg)](https://www.npmjs.com/package/@daaveuk/react-spinning) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @daaveuk/react-spinning
```

## Usage

```tsx
import React, { Component } from 'react'

import { Spinning } from '@daaveuk/react-spinning'
import '@daaveuk/react-spinning/dist/index.css'

class Example extends Component {
  render() {
    return (
      <Spinning>
        <MyComponent />
      </Spinning>
    )
  }
}
```

## License

MIT © [daaveuk](https://github.com/daaveuk)
