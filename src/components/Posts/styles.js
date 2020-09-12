import styled from "styled-components";

export const PostContainerList = styled.div`
    width: 90%;
    margin: auto;
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;

  a {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    text-decoration: none;
    color: #929293;
    min-height: 420px;

    &:hover {
      -webkit-transform: translateY(-7px);
      transform: translateY(-7px);
    }

.content{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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
      justify-content: space-between;

      strong {
        font-size: 20px;
        color: #3d3d4d;

        h2 {
          margin-bottom: 5px;
          font-size: 22px;
          font-weight: bold;

        }
      }

      p {
        margin: 20px 0 0;
      }
    }

    .footer-box{
      display: flex;
      flex-direction: row;
      margin: 20px;
      justify-content: space-between;
    }
  
}

  }
`;
