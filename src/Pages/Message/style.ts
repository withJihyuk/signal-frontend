import styled from "styled-components";

export const ButtonObject = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 14px;
  margin-bottom: 30px;
`;

export const Morebutton = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  border: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const MoreText = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: -0.5px;
`;

export const chatText = styled.a`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 87.5% */
  letter-spacing: -0.5px;
  word-break: break-all;
  text-align: right;
`;

export const chatBox = styled.div`
  display: inline-flex;
  padding: 15px 29px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #f82e62;
  margin-right: 30px;
  margin-left: 30px;
  float: right;
`;

export const chatObject = styled.div`
  width: 100%;
  height: 70px;
`;

export const OwnchatBox = styled.div`
  display: inline-flex;
  padding: 15px 29px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: #fff;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25);
  margin-left: 30px;
  margin-right: 30px;
  float: left;
`;

export const SendMessageObject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 30px;
  width: 100%;
  left: 50%;

  transform: translate(-50%, 0);
`;

export const SendMessageBox = styled.input`
  width: 70%;
  height: 40px;
  border-radius: 100px;
  border: none;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: -0.5px;
  text-indent: 20px;
  position: relative;

  &:focus {
    outline: none;
  }
`;

export const AddButton = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 40px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
`;

export const SumbitButton = styled.button`
  position: absolute;
  width: 60px;
  height: 30px;
  color: #f82e62;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px; /* 87.5% */
  letter-spacing: -0.5px;
  top: 0;
  border: none;
  background: none;
  bottom: 0;
  right: 13%;
  margin: auto 0;
  border-radius: 3px;
`;
