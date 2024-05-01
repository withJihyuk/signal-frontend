import * as S from "./style.ts";

interface ButtonType {
  subject: string;
  url: string;
  logo: string;
  color: string;
  textcolor: string;
}

interface Props {
  button: ButtonType;
}

const Button: React.FC<Props> = ({ button }) => (
  <div>
    <S.ButtonObject
      onClick={() => window.open(`${button.url}`)}
      style={{ backgroundColor: button.color }}
    >
      <img src={button.logo} width="30" height="30" alt="menu" />
      <S.ButtonText style={{ color: button.textcolor }}>
        {button.subject}
      </S.ButtonText>
    </S.ButtonObject>
  </div>
);

export default Button;
