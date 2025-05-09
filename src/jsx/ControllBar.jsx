import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LeftBarBox = styled.div`
  padding: 72px 24px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  border-right: 1px solid #d9d9d9;
  height: 100%;
  background-color: #fff;
  align-items: center;
`;

const StyledImg = styled.img`
  transition: transform 0.1s ease;
  width: 36px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

function ControllBar() {
  const navigate = useNavigate();

  return (
    <LeftBarBox>
      <StyledImg src={`${import.meta.env.BASE_URL}Logo.svg`} onClick={() => navigate("/")} />
      <StyledImg src={`${import.meta.env.BASE_URL}Home.svg`} onClick={() => navigate("/")} />
      <StyledImg src={`${import.meta.env.BASE_URL}Add.svg`} onClick={() => navigate("/write")} />
    </LeftBarBox>
  );
}

export default ControllBar;
