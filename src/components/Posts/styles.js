import styled from "styled-components";

export const PostContainerList = styled.div`
    width: 90%;
    max-width: 980px;
    margin: auto;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: minmax(250px, 1fr) [auto-fit];
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;

  a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: #cbbcff;
    cursor: pointer;
    -webkit-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;

    &:hover {
      -webkit-transform: translateY(-7px);
      transform: translateY(-7px);
    }

    .featured-thumbnail {
      width: 100%;
      padding-top: 56.25%;
      /* 16:9 */
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
    }

    .title-box {
      margin: 20px;

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
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-item-align: end;
        align-self: end;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
    }
  }
`;
