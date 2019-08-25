Todo Hook
===

## Todo List with React Hook & TypeScript

Hook
---
- [useState](#usestate)
- [useEffect](#useeffect)
- [useContext](#usecontext)
- [useRef](#useref)
- [useReducer](#usereducer)

useState
---
기존 class component에서만 관리할 수 있던 state를 function component 에서도 관리할 수 있도록 만들어졌다.
```jsx
import React, {useState} from 'react';

const App: React.FC = () => {
    const [state, setState] = useState(defaultState);

    return (
        <>
            <h1>{state}</h1>
            <button onClick={()=>{setState(state+1)}}>increment</button>
        </>
    )
}
```
위처럼 useState를 이용해 기본 state값을 초기화 해주고 배열을 반환받는데 첫번째 요소가 해당 state, 두번째 요소가 해당 state를 변경할 수 있는 함수이다.

만약 props를 받는 함수의 경우 다음과 같이 type을 설정해 줄 수 있다.

```tsx
import React, {useState} from 'react';

type Props = {
    title: string;
}

const App: React.FC<Props> = (props) => {
    const [state, setState] = useState(defaultState);

    return (
        <>
            <h1>{props.title}</h1>
            <h2>{state}</h2>
            <button onClick={()=>{setState(state+1)}}>increment</button>
        </>
    )
}
```

useEffect
---

useContext
---

useRef
---

useReducer
---