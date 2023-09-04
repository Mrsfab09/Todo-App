import styled from "styled-components";
import { TiDelete } from "react-icons/ti";

const StyledAlert = styled.div`
  width: 100%;
  background-color: ${({ $bgColor }) =>
    $bgColor ? "green" : "rgba(255, 0, 0, 0.589)"};
  color: #e2e2e2;
  border-radius: 12px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export function Alert() {
  return (
    <StyledAlert>
      <TiDelete />
      <span className="fadeIn">The field is empty</span>
    </StyledAlert>
  );
}
//
//AiFillCheckCircle
