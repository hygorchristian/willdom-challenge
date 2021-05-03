import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 56px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  
  section{
    flex-direction: row;
    
    .logo{
      width: 160px;
      object-fit: contain;
    }
    
    nav{
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;
      
      ul{
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;
        gap: 32px;
        margin-right: 32px;
        
        li{
          text-transform: uppercase;
          font-family: Brown, sans-serif;
          font-size: .75rem;
          cursor: pointer;
          position: relative;
          
          &::before{
            display: none;
            content: '';
            width: 100%;
            height: 2px;
            background-color: black;
            bottom: -5px;
            position: absolute;
          }
          
          &:hover::before, &.selected::before{
            display: block;
          }
            
        }
      }
      
      svg{
        cursor: pointer;
      }
    }
    
    .auth-controls{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      gap: 24px;
      
      span{
        display: block;
        cursor: pointer;
        font-size: .75rem;
        font-family: Brown, sans-serif;
        text-transform: uppercase;
      }
    }    
  }  
`;

export const Main = styled.main`
  
`;
