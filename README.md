# Variable-base Factoradic numbers

Implementation of https://xkcd.com/2835/

## Installation

https://www.npmjs.com/package/variable-base-factoradic

```bash
npm install variable-base-factoradic
```

## Usage

```javascript
import { fromFactoradic, toFactoradic } from "variable-base-factoradic";

// Convert from decimal to factoradic
toFactoradic(5038);
// Out: "654320"

// Convert from factoradic to decimal
fromFactoradic("654320");
// Out: 5038
```