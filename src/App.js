import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WithProps from './hoc/WithProps';
import { Button } from 'reactstrap';

function App() {
  const [dragging, setDragging] = useState(false);
  const [topPostion, setTopPostion] = useState(0);
  const [leftPostion, setLeftPostion] = useState(0);

  const updateDragging = (e) => {
    if (dragging) {
      setTopPostion(e.clientY);
      setLeftPostion(e.clientX);
    }
  }

  const updateDragStart = (e) => {
    setDragging(true);
  }

  const updateDragEnd = (e) => {
    setTopPostion(e.clientY);
    setLeftPostion(e.clientX);
    setDragging(false);
  }

  return (
    <div className="App">
      <WithProps>
      <Button draggable color="primary" style={{ position: 'absolute', top: topPostion, left: leftPostion }} onDragStart={event => { updateDragStart(event) }} onDragEnd={event => { updateDragEnd(event) }} onDrag={event => { updateDragging(event) }}>{`Click me & drag`}</Button>
      </WithProps>
    </div>
  );
}

export default App;
