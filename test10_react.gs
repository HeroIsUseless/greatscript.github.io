{useState} : React : import('react'),

CountView() : (
  [count, setCount] : useState(0),
  onBtnClick() : (
    setCount(count + 1)
  ),
  <Button onClick:onBtnClick>`count`</Button>
)
