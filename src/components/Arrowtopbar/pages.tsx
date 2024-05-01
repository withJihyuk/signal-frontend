import * as S from "./style.ts";
import arrow from "../../assets/arrow.svg";

export default function Arrowtopbar() {
  return (
    <div>
      <S.Arrow>
        <img src={arrow} width="30" height="30" alt="menu" />
      </S.Arrow>
    </div>
  );
}
