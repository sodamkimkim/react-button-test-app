import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
    render(<App/>);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent(0);
});

test('minus button has correct text', () => {
    // App 컴포넌트를 렌더링
    render(<App/>);
    // screen object를 이용해서 원하는 엘리먼트에 접근 (접근할 때 ID로 접근)
    const buttonElement = screen.getByTestId("minus-button");
    // id가 counter인 엘리먼트가 0인지 테스트
    expect(buttonElement).toHaveTextContent("-");
});

test('plus button has correct text', () => {
    render(<App/>);
    const buttonElement = screen.getByTestId("plus-button");
    expect(buttonElement).toHaveTextContent("+");
});

test('when the + button is pressed, the counter changes to 1', () => {
    render(<App/>);
    const buttonElement = screen.getByTestId("plus-button");
    fireEvent.click(buttonElement);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent(1);
});

test('on/off button has blue color', () => {
  render(<App/>);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({backgroundColor:"blue"});
});

test('Prevent the -, + button from being pressed when the on/off button is clicked', ()=>{
  render(<App/>);
  const onOffButtonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
});