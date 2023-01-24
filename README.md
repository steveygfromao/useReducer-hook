## useReducer Example

## Description
useReducer hook example - this is like a cousin to useState (uses redux pattern))

The useReducer hook is similar to useState, but gives us a more structured approach for updating complex values.
We typically use useReducer when our state has multiple sub-values, e.g. an object containing keys that we want to update independently.

## Running example
Make sure to install the node modules

`npm install`

Then to start:

`npm start`

This will launch the app at localhost:3000

## Using
``` javascript
import {useReducer} from 'react'
```

Create your reducer, example: (these should be placed inside a reducer folder)

``` javascript
const buttonReducer = (state,action) => {
    switch(action.type) {
        case 'increment' : return state + 1;
        case 'decrement' : return state - 1;
        default:
            throw new Error();
    }
}

export default buttonReducer;
```

Use the reducer:

```javascript
 const [state, dispatch] = useReducer(buttonReducer, 0);
```

This uses the buttonReducer reducer and sets initial state to 0

To call method on the reducer we use the dispatch method:

```javascript
dispatch({type:'increment'})
```
This would pass an action of 'increment' to the reducer which in turn adds and updates the state value by 1

Main code in example to call the reducer is in App.js:

```javascript
function App() {

  const [state, dispatch] = useReducer(buttonReducer, 0);

  return (
    <>
      Count: {state}
      <button onClick={()=>dispatch({type:'increment'})}>+</button>
      <button onClick={()=>dispatch({type:'decrement'})}>-</button>
    </>
  );
}
export default App;
```



