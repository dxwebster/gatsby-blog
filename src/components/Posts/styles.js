import styled from "styled-components";

export const PostContainerList = styled.div`
  max-width: 700px;
  padding: 10px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    color: #000000;
    text-decoration: none;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      opacity: 0.9;
    }

    .featured-thumbnail {
      flex: 1;
      margin: 0 16px 0;

      img {
        width: 100%;
        border-radius: 50%;
      }
    }

    .title-box {
      flex: 1;
      margin: 0 16px 0;

      strong {
        font-size: 20px;
        color: #3d3d4d;

        h2 {
          margin-bottom: 5px;
          font-size: 22px;
          font-weight: bold;

          p {
            margin-bottom: 5px;
          }
        }
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
  }
`;
