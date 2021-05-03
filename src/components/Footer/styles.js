import styled from 'styled-components';

export default styled.footer`
  width: 100%;
  background-color: #232323;
  background-image: url(https://hodinkee.imgix.net/site/footer-pattern.png);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: Brown, sans-serif;
  
  section{
    border-top: 1px solid #333;
    padding-top: 32px;
    padding-bottom: 40px;
    flex-direction: column;
    align-items: center;
    
    .groups{
      display: flex;
      width: 100%;
      flex-direction: row;
    
      .group{
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        
        h2{
          margin-bottom: 10px;
          font-size: 16px;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-align: center;
        }
        
        ul{
          list-style: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          
          li{
            line-height: 2;
            font-size: 11px;
            color: #999;
            letter-spacing: 1px;
            text-transform: uppercase;
            transition: all 250ms ease;
            cursor: pointer;
            font-weight: 700;
            
            &:hover{
              color: white;
            }
          }
        }
      }
    }
    
    img{
      margin-top: 72px;
      width: 160px;
    }
    
    .rights{
      margin-top: 20px;
      line-height: 2;
      font-size: 11px;
      font-weight: 700;
      color: #999;
      letter-spacing: 1px;
      text-transform: uppercase;
      text-align: center;
    }
  }
`;
