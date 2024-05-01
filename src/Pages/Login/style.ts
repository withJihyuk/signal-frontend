import styled from "styled-components";

export const TextObject = styled.div`
  display: flex;
  margin: 10%;
  margin-top: 96px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
`;

export const ColorText = styled.div`
  color: #f82e62;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.5px;
`;

export const Text = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.5px;
  white-space: pre-wrap;
`;

export const ButtonMargin = styled.div`
  margin-top: 256px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 800px) {
    align-items: center;
  }
`;
