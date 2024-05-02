import * as S from "./style.ts";

interface ButtonType {
  subject: string;
  url: string;
  logo?: string;
  alert?: boolean;
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
      {button.alert && <S.Alert />}
      {button.logo && (
        <img
          src={button.logo}
          style={{ marginRight: "30px" }}
          width="30"
          height="30"
          alt="menu"
        />
      )}
      <S.ButtonText style={{ color: button.textcolor }}>
        {button.subject}
      </S.ButtonText>
    </S.ButtonObject>
  </div>
);

export default Button;
