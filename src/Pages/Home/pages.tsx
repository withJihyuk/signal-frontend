import * as S from "./style.ts";
import Button from "../../components/Button/pages.tsx";

export default function Home() {
  return (
    <div>
      <S.TextObject>
        <S.Text>
          간편하고 쉬운 <br />
          소통 플랫폼,
        </S.Text>
        <S.ColorText>시그널</S.ColorText>
        <S.ButtonMargin>
          <Button
            button={{
              subject: "시작하기",
              url: "https://google.com",
              color: "#F82E62",
              textcolor: "#FFFFFF",
            }}
          />
          <Button
            button={{
              subject: "자세히 알아보기",
              url: "https://google.com",
              color: "#000000",
              textcolor: "#FFFFFF",
            }}
          />
        </S.ButtonMargin>
      </S.TextObject>
    </div>
  );
}
