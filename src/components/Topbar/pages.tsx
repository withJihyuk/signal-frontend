import * as S from "./style.ts";
import share from "../../assets/share.svg";
import setting from "../../assets/setting.svg";

interface PrivacyType {
  name: string;
}

interface Props {
  privacy: PrivacyType;
}

const Topbar: React.FC<Props> = ({ privacy }) => (
  <div>
    <S.Topbarlogo>
      <img src={share} width="30" height="30" alt="menu" />
      <S.Username>{privacy.name}</S.Username>
      <img src={setting} width="30" height="30" alt="menu" />
    </S.Topbarlogo>
  </div>
);

export default Topbar;
