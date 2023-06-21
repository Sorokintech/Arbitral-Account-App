import { fetchData, fetchResultData } from "../../../global/api";
import * as S from "./style";
import { ThemeProvider } from "styled-components";

export const Smile: React.FC = () => {
  const DefaultCoords = { lat: 0, lng: 0 };
  const getRandomCoords = () => {
    DefaultCoords["lat"] = Math.round(Math.random() * 500);
    DefaultCoords["lng"] = Math.round(Math.random() * 1000);
  };
  getRandomCoords();
  const Coords = {
    lat: `${DefaultCoords.lat}px`,
    lng: `${DefaultCoords.lng}px`,
  };
  fetchData();
  return (
    <>
      <ThemeProvider theme={Coords}>
        <S.Container>
          <S.Wrapper>
            <S.DogImage src={`${fetchResultData.message}`} />
          </S.Wrapper>
        </S.Container>
      </ThemeProvider>
    </>
  );
};
