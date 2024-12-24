// import React from "react";

// const LoadingScreen = () => {
//   return (
//     <div className="fixed z-[100000] top-0 left-0 w-full h-full bg-primary flex justify-center items-center text-secondary">
//       <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-secondary"></div>{" "}
//     </div>
//   );
// };

// export default LoadingScreen;

// ========================================================================================================================================================================================================================================

import { div } from "framer-motion/client";
import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <div className="fixed z-[100000] top-0 left-0 w-full h-full bg-primary flex justify-center items-center text-secondary">
      <StyledWrapper>
        <div className="card">
          <div className="loader">
            <p className="mr-1">loading</p>
            <div className="words">
              <span className="word">about</span>
              <span className="word">projects</span>
              <span className="word">resume</span>
              <span className="word">about</span>
              <span className="word">projects</span>
              <span className="word">resume</span>
            </div>
          </div>
        </div>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .card {
    /* color used to softly clip top and bottom of the .words container */
    /* --bg-color: #212121; */
    background-color: var(--bg-color);
    padding: 1rem 3rem;
    border-radius: 1.25rem;
  }
  .loader {
    color: rgb(109, 107, 107);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 23px;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 40px;
    padding: 10px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 8px;
  }

  .words {
    overflow: hidden;
    position: relative;
  }
  .words::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      var(--bg-color) 10%,
      transparent 30%,
      transparent 70%,
      var(--bg-color) 90%
    );
    z-index: 20;
  }

  .word {
    display: block;
    height: 100%;
    padding-left: 6px;
    color: #ffffff;
    animation: spin_4991 3s infinite;
  }

  @keyframes spin_4991 {
    10% {
      -webkit-transform: translateY(-102%);
      transform: translateY(-102%);
    }

    25% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }

    35% {
      -webkit-transform: translateY(-202%);
      transform: translateY(-202%);
    }

    50% {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
    }

    60% {
      -webkit-transform: translateY(-302%);
      transform: translateY(-302%);
    }

    75% {
      -webkit-transform: translateY(-300%);
      transform: translateY(-300%);
    }

    85% {
      -webkit-transform: translateY(-402%);
      transform: translateY(-402%);
    }

    100% {
      -webkit-transform: translateY(-400%);
      transform: translateY(-400%);
    }
  }
`;

export default Loader;
