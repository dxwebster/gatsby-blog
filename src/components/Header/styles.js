import styled from "styled-components";

export const HeaderContainer = styled.div`
    padding: 1.0rem 1.5rem 1.0rem 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    background-color: #21092d;

    .nav-container{
      max-width: 1000px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      .nav {
        width: 30%;
        display: flex;
        justify-content: space-between;

      
        a {
          text-decoration: none;

          
          .header-title {
            font-weight: bold;
            color: #fff;
            font-size: 14px;
            text-transform: uppercase;
          }
        }

      }

 
      .social{
        width: 30%;
        display: flex;
        justify-content: space-between;

        a {
          text-decoration: none;

          .header-title {
            font-weight: bold;
            color: #fff;
            font-size: 14px;
            text-transform: uppercase;
          }
        }
      }
      
    }
`



/*# sourceMappingURL=Header.css.map */
