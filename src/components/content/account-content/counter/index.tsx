import React, {
  ChangeEvent,
  FocusEvent,
  MouseEvent,
  MouseEventHandler,
  useEffect,
} from "react";
import * as S from "./style";

interface CounterProps {
  stock: number;
}
export const Counter: React.FC<CounterProps> = ({ stock }) => {
  const [counter, setCounter] = React.useState(1);
  return (
    <S.Container>
      <S.CartCountIcon
        src="./icons/m.png"
        onClick={() => setCounter((prev) => (prev !== 1 ? prev - 1 : prev))}
      ></S.CartCountIcon>
      <S.CartCountLabel>
        <S.CartCountInput
          type="text"
          defaultValue={+counter}
          value={counter}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setCounter(+event.target.value);
          }}
          onBlur={(event: FocusEvent<HTMLInputElement>) => {
            if (counter > stock) {
              setCounter(stock);
            }
          }}
        />
      </S.CartCountLabel>

      <S.CartCountIcon
        src="./icons/p.png"
        onClick={() => setCounter((prev) => (prev >= stock ? stock : prev + 1))}
      ></S.CartCountIcon>
    </S.Container>
  );
};
