import * as S from "./style.ts";
import plus from "../../assets/plus.svg";

export default function Message() {
  return (
    <div>
      <S.ButtonObject>
        <S.Morebutton>
          <img
            src={plus}
            style={{ marginRight: "7px" }}
            width="14"
            height="14"
            alt="menu"
          />
          <S.MoreText>더보기</S.MoreText>
        </S.Morebutton>
      </S.ButtonObject>
      <S.chatObject>
        <S.chatBox>
          <S.chatText>디자인 안할래요 ㅋㅋ 이게맞냐</S.chatText>
        </S.chatBox>
      </S.chatObject>
      <S.chatObject>
        <S.OwnchatBox>
          <S.chatText style={{ color: "#000000", textAlign: "left" }}>
            반갑습니다.
          </S.chatText>
        </S.OwnchatBox>
      </S.chatObject>

      <S.chatObject>
        <S.OwnchatBox>
          <S.chatText style={{ color: "#000000", textAlign: "left" }}>
            긴문장을테스트중이에요반갑습니다이런게줄바꿈이된다고하면정말이쁘지않을까요?
          </S.chatText>
        </S.OwnchatBox>
      </S.chatObject>
      <S.SendMessageObject>
        <S.AddButton>
          <img src={plus} width="14" height="14" alt="menu" />
        </S.AddButton>
        <S.SendMessageBox />
      </S.SendMessageObject>
    </div>
  );
}
