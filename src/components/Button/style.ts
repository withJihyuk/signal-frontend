import styled from "styled-components";

export const ButtonObject = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 15px;
  @media (max-width: 320px) {
    width: 200px;
  }

  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const ButtonBetween = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: center;
  padding-left: 50px;
`;

export const ButtonText = styled.div`
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: -0.5px;
`;

export const Alert = styled.div`
  width: 10px;
  margin-right: 10px;
  height: 10px;
  flex-shrink: 0;
  background-color: #f82e62;
  border-radius: 100%;
`;
