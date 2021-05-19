import styled from 'styled-components';

export default styled.div`
  min-height: 100vh;
  
  .content{
    padding-top: 16px;
    padding-bottom: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .form-control{
      height: 80px;
      width: 1200px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      
      button{
        border: 1px solid black;
        padding: 6px 20px;
        font-size: 16px;
        cursor: pointer;
        
        &:hover{
          transform: scale(1.02);
        }
        
        &:active{
          transform: scale(1);
        }
      }
    }
    
    section{
      flex-direction: column;
      gap: 20px;
    }
  }
`;
