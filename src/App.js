import React from 'react';
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
      <Wrapper>
          <Hello color="white" backgroundColor="black" isSpecial/>
          <Hello color="pink" />
      </Wrapper>
  );
}

export default App;
