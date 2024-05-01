import Button from "../../components/Button/pages.tsx";
import * as S from "./style.ts";
import googlelogo from "../../assets/googlelogo.svg";
import applelogo from "../../assets/applelogo.svg";

export default function Login() {
  return (
    <div>
      <S.TextObject>
        <S.ColorText>간편로그인</S.ColorText>
        <S.Text>
          을 통해 이용이
          <br />
          가능합니다
        </S.Text>
        <S.ButtonMargin>
          <Button
            button={{
              subject: "구글 로그인",
              url: "https://google.com",
              logo: `${googlelogo}`,
              color: "#F2F2F2",
              textcolor: "#000000",
            }}
          />
          <Button
            button={{
              subject: "애플 로그인",
              url: "https://google.com",
              logo: `${applelogo}`,
              color: "#000000",
              textcolor: "#F2F2F2",
            }}
          />
        </S.ButtonMargin>
      </S.TextObject>
    </div>
  );
}
