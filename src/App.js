import React, {useRef, useReducer, useMemo, useCallback} from 'react';
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
    console.log('확성 사용자 수를 세는중...');
    return users.filter(user=>user.active).length;
}

const initialState = {
   inputs: {
       username: '',
       email: ''
   },
  users: [
      {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com',
          active: true
      },
      {
          id: 2,
          username: 'tester',
          email: 'tester@example.com',
          active: false
      },
      {
          id: 3,
          username: 'liz',
          email: 'liz@example.com',
          active: false
      }
  ]
};

function reducer(state, action) {
    return state;
}

function App() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const {users} = state;
    const {username, email} = state.inputs;

  return (
      <>
          <CreateUser
              username={username}
              email={email}
          />
          <UserList
              users={users}
          />
          <div>활성사용자 수 : 0</div>
      </>
  );
}

export default App;
