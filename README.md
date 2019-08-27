Todo Hook
===

## Todo List with React Hook & TypeScript

Functional Programming
---
함수형 프로그래밍이란 기존 어떤 알고리즘(**How**)으로 동작하라고 명시하는 식의 프로그래밍에서 벗어나 무엇(**What**)을 해야하는 지 명시하는 방식의 프로그래밍이다. 함수가 특정 동작을 수행하는 
역할을 담당하는 것과 반대로 함수가 다른 값을 변경시키거나 할 수 없다.  

필요한 개념
---
- [1급 객체 (First Object)](#1급-객체-(First-Object))
- [고차 함수 (High-Order Function)](#고차-함수-(High-Order-Function))
- [불변성 (Immutablility)](#불변성-(Immutablility))
- [순수 함수 (Pure Function)](#순수-함수-(Pure-Function))
- [합성 함수 (Function Composition)](#합성-함수-(Function-Composition))

1급 객체 (First Object)
---
함수를 변수처럼 사용할 수 있어야한다. 파라미터로 전달하거나 함수의 반환값으로 사용할 수 있어야한다. 변수 명이 아닌 고유 식별자가 존재해야한다.

고차 함수 (High-Order Function)
---
- 함수에 함수를 파라미터로 전달할 수 있다.
- 함수의 반환값으로 함수를 사용할 수 있다.

```javascript
const foo = function() {
    const closure = 10;
    return function() {
        console.log('foo' + closure);
    }
}

const bar = function(fc) {
    fc();
}

bar(foo);

// 실행값
// foo10
```

불변성 (Immutablility)
---
데이터가 변경되어서는 안된다. 만약 변경이 필요할 경우 직접 원본 데이터를 변경하지 않고, 복사본을 만들고 변경한 복사본을 이용해 작업을 진행한다. 자바스크립트는 이를 위해 `map`과 `reduce`와 같은 함수를 제공한다.
```javascript
const A = [10,20,30];
const B = A;
B.push(40);
```
> 위와 같이 한다면 A = B = [10, 20, 30, 40] 이므로 불변성에 위배된다.
```javascript
const A = [10,20,30];
const B = [].concat(A);
B.push(40);
```
> concat함수를 이용해 A의 복사본을 만들어서 변경해야한다.

순수 함수 (Pure Function)
---
- 동일한 입력값에 항상 같은 값을 반환하는 함수 (random이나 date같은 함수가 내부에서 사용되면 안된다.)
- 함수 외부의 상태값을 변경하거나 인자로 받은 값을 변경하지 않는 함수 (side effect 가 존재하면 안된다.)

합성 함수 (Function Composition)
---
함수형 프로그램은 여러 작은 순수함수들로 이루어져 있기 때문에 이 함수들을 연쇄적으로 병렬적으로 호출해서 사용할 수 있어야한다.  
`(x + y)^2 + 10` 을 수행 할 떄
```javascript
const sum = (x, y) => x + y;
const square = x => x * x;
const addTen = x => x + 10;

const answer = addTen(square(sum(1, 2))); // 이렇게 하지 않고

//compose를 활용해 연쇄적으로 호출을 처리하도록 한다.
const compose = (...fns) => fns.reduce((prevFn, nextFn) => (...args) => nextFn(prevFn(...args)), value => value);

const composeAnswer = compose(addTen, square, sum);
```


React Hook
---
- [useState](#usestate)
- [useEffect](#useeffect)
- [useContext](#usecontext)
- [useRef](#useref)
- [useReducer](#usereducer)

useState
---
기존 class component에서만 관리할 수 있던 state를 function component 에서도 관리할 수 있도록 만들어졌다.
```tsx
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
state와 마찬가지로 class component에서만 관리할 수 있던 react의 라이프사이클을 관리할 수 있다. `useEffect`가 접근할 수 있는 라이프 사이클은 `componentDidMount`, `componentWillUnmount`, `componentDidUpdate`, `shouldComponentUpdate`이다.

```tsx
import React, {useEffect} from 'react';

const App: React.FC = () => {
    useEffect(() => {
        // 최초 componentDidMount 이후 componentDidUpdate
        console.log('did');
        return () => {
            // 반환 함수 componentWillUnmount
            console.log('unmount');
        }
    }, []); // 두번째 인자로 들어간 배열로 어떤 값이 변경되었을 때 update할지 정할 수 있다. 빈 배열일 경우 update하지 않음

    return (
        console.log('render');
    )
}
```

useContext
---
component간의 계층이 깊어질수록 state를 전달할 때 불필요하게 props를 계속 타고 내려가야한다. 
![](https://www.filepicker.io/api/file/t7O9woo2RUyRoM7JK0FH)  
이 때문에 상태관리를 해주는 redux나 mobX와 같은 라이브러리를 사용했다.
![](https://www.filepicker.io/api/file/rPmpyjOLRiK6iUWb054s)  
하지만 해당 라이브러리보다 더욱 간편하게 사용할 수 있는 react의 contextApi를 hook을 이용해서 더욱 간편하게 사용할 수 있다.  
전달할 state를 갖고있을 store부분은 기존 contextApi와 동일하다.
```tsx
import React from 'react';

interface ContextInterface {
    state: any;
}

export const Context = React.createContext<ContextInterface>(defaultContext);

type Props = {

}

const Store: React.FC<Props> = (props) => {
    return (
        <Context.Provider value={{state}}>
            {props.children}
        </Context.Provider>
    )
}
export default Store;
```
```tsx
import React from 'react';
import Store from './Store';

const App: React.FC = () => {
    return (
        <Store>
            <Container />
        </Store>
    )
}
```
state를 갖는 store에서 context를 만들고 provider안에 해당 state가 필요한 component를 넣는다.
```tsx
import React, {useContext} from 'react';
import {Context} from './Store';

const Container: React.FC = () => {
    const {state} = useContext(Context);
    return (
        <div>
            {state}
        </div>
    )
}
```
위와 같이 store에서 context를 가져와서 contextApi의 consumer와 같이 `useContext`를 사용하면 해당 state를 불러올 수 있다. 이 방식을 이용하면 props를 사용하지 않고 쉽게 상태를 가져올 수 있다.

useRef
---
기존 스크립트로 html의 dom객체를 불러오기 위해서 `document.getElementById`와 같은 함수를 이용했었다. react로는 dom을 직접 조작하는 것보다 react가 관리하도록 ref를 사용하는 것이 좋다.
```tsx
import React, {useState, useRef} from 'react';

const Form: React.FC = () => {
    const [inputData, setInputData] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const addInputData = (e:React.MouseEvent<HTMLInputElement>) => {
      e.preventDefault();
      if(inputRef && inputRef.current){
        setInputData(inputRef.current.value);
        inputRef.current.value = '';
      }
    }

    return (
        <form>
            <input type="text" ref={inputRef} />
            <input type="submit" value="확인" onClick={addInputData} />
        </form>
    );
}
```
원하는 dom에게 ref를 설정해서 해당 dom의 내용을 쉽게 가져올 수 있다.

useReducer
---
contextApi를 이용해서 state들을 관리했었는데 보다 더 복잡한 처리를 해주어야 할 경우 결국 redux와 같은 상태관리 도구를 이용해야한다. 하지만 hook을 이용해 좀 더 간편하게 사용할 수 있다. [redux에 대한 간략한 설명](#redux에-대한-간략한-설명)  

contextApi를 이용해 store를 만들었던 곳에서 reducer를 적용해준다. 그러기 위해서 action을 분기해서 실행할 수 있는 reducer를 만들어야한다.
```ts
type ActionType = {
    type: 'SET_INIT_DATA'|'ADD_DATA'|'UPDATE_DATA'|'DELETE_DATA';
    payload: any;
}

interface Data {
    
}
  
const reducer = (data:Array<Data>, {type, payload}:ActionType) => {
    switch(type){
        case 'SET_INIT_DATA':
            return ;
        case 'ADD_DATA':
            return ;
        case 'UPDATE_DATA':
            return ;
        case 'DELETE_DATA':
            return ;
        default:
            return;
    }
}

export default reducer;
```
store를 직접 변경하는 reducer를 만들고 store에서 불러와서 사용한다.
```tsx
import React, {useReducer} from 'react';
import reducer from './reducer';

interface Data {
}

type ActionType = {
    type: 'SET_INIT_DATA'|'ADD_DATA'|'UPDATE_DATA'|'DELETE_DATA';
    payload: any;
}

interface ContextInterface {
    state: Data;
    dispatch?: React.Dispatch<ActionType>;
}

const defaultContext: ContextInterface = {
    state: null,
}

export const TodoContext = React.createContext<TodoInterface>(defaultContext);

interface Props {

}

const Store:React.FC<Props & {defaultData?: Data}> = (props, {defaultData = null}) => {
    const [data, dispatch] = useReducer(reducer, defaultData);

    return (
        <TodoContext.Provider value={{data, dispatch}}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default Store;
```
위와같이 `useReducer`를 이용해 dispatch를 만들고 contextApi에 전송시킬 수 있다. 전송받은 dispatch는 `dispatch({type:'ADD_DATA', payload: data});`와 같이 사용할 수 있다.

redux에 대한 간략한 설명
---
redux는 여러 컴포넌트들에서 사용될 데이터들을 store에 저장해두고 store에 있는 데이터들은 반드시 reducer만이 조작할 수 있게 한다. 각 컴포넌트에서 데이터를 조작할 경우 어떤 일을 할지에 대해 action이라는 것을 dispatch에게 보내면 dispatch는 reducer에게 action을 전달하고 해당 작업이 끝나면 등록된 컴포넌트들에게 데이터가 변경됨을 알린다.
>[Redux로의 카툰 안내서](http://bestalign.github.io/2015/10/26/cartoon-intro-to-redux/)