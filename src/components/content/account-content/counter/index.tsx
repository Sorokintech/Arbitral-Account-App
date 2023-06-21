import * as S from "./style";
import React, { ChangeEvent, FocusEvent } from "react";
import { CounterProps } from "../../../../global/types.js";

export const Counter: React.FC<CounterProps> = ({
  onChange,
  min = 1,
  max = Infinity,
  value,
}) => {
  const changeHandler = (v: number) => {
    onChange(Math.min(max, Math.max(min, v)));
  };
  return (
    <S.Container>
      <S.CartCountIcon
        src="./icons/m.png"
        onClick={() => changeHandler(value - 1)}
      ></S.CartCountIcon>
      <S.CartCountLabel>
        <S.CartCountInput
          type="text"
          value={Math.min(max, Math.max(min, value))}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            changeHandler(+event.target.value);
          }}
          onBlur={(event: FocusEvent<HTMLInputElement>) => {
            changeHandler(+event.target.value);
          }}
        />
      </S.CartCountLabel>
      <S.CartCountIcon
        src="./icons/p.png"
        onClick={() => changeHandler(value + 1)}
      ></S.CartCountIcon>
    </S.Container>
  );
};
