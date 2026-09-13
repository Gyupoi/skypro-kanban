import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }

  100% {
    background-position: 400px 0;
  }
`;

const skeletonBackground = `
  linear-gradient(
    90deg,
    #d7dce5 25%,
    #e5e9f0 50%,
    #d7dce5 75%
  )
`;

export const MainWrapper = styled.main`
  width: 100%;
  background-color: #eaeef6;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    padding: 40px 0 64px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;

  .skeleton-column {
    width: 20%;
    margin: 0 auto;
    display: block;
  }

  .skeleton-column-title {
    width: 90px;
    height: 14px;
    margin: 15px 10px;
    border-radius: 4px;

    background-image: ${skeletonBackground};
    background-size: 800px 100%;
    animation: ${shimmer} 1.5s infinite linear;
  }

  .skeleton-card {
    width: 220px;
    height: 130px;
    margin: 5px;
    padding: 15px 13px 19px;
    box-sizing: border-box;

    border-radius: 10px;

    background-image: ${skeletonBackground};
    background-size: 800px 100%;
    animation: ${shimmer} 1.5s infinite linear;
  }

  .skeleton-line {
    height: 10px;
    margin-bottom: 12px;
    border-radius: 4px;

    background-color: rgba(255, 255, 255, 0.45);
  }

  .skeleton-line-small {
    width: 65px;
    height: 20px;
    margin-bottom: 12px;
    border-radius: 10px;
  }

  .skeleton-line-title {
    width: 170px;
    height: 14px;
    margin-bottom: 18px;
  }

  .skeleton-line-date {
    width: 80px;
    height: 10px;
    margin-bottom: 0;
  }

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;

    .skeleton-column {
      width: 100%;
      margin: 0;
    }

    .skeleton-card {
      width: 220px;
    }
  }
`;