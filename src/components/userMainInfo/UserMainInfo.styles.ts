import styled from "styled-components";

export const UserMainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 769px) {
    align-items: center;
  }
`;

export const UserMainInfoImg = styled.img`
  border-radius: 12px;
  max-width: 354px;
  max-height: 236px;
  object-fit: cover;
`;

export const UserName = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
`;

export const UserLogin = styled.a`
  color: #999faa;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
  text-decoration: none;
`;
export const UserText = styled.div`
  color: #999faa;
  font-size: 14px;
  font-weight: 400;
`;
export const UserFollow = styled.div`
  display: flex;
  gap: 20px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;
export const UserMainInfoDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
