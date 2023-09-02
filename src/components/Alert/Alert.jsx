import styled from "styled-components";
import { IconContext } from "react-icons";
import { TiDelete } from "react-icons/ti";
import { useEffect, useState } from "react";

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
  animation: fadeIn 0.5s ease-in-out 5s;

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    });

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <StyledAlert>
          <span className="fadeIn">
            <IconContext.Provider value={{ size: "17px" }}>
              <TiDelete />
              The field is empty
            </IconContext.Provider>
          </span>
        </StyledAlert>
      )}
    </>
  );
}
//
//AiFillCheckCircle
