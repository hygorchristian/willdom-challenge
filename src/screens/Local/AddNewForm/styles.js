import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 400px;
  background-color: white;
  padding: 24px;
  justify-content: space-between;
  
  h2{
    font-family: "Portrait Inline", serif;
    font-size: 2.375rem;
    font-weight: 200;
    margin-bottom: 32px;
  }
  
  form{
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
    overflow-y: auto;
  }
  
  .control{
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    margin-top: 20px;
    
    button{
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 14px;
      font-family: Brown, sans-serif;
      border: 1px solid black;
      padding: 6px 16px;
      cursor: pointer;
      
      &:hover{
        background-color: black;
        color: white;
      }
      
      &.cancel{
        border-color: brown;
        color: brown;
        
        &:hover{
          background-color: brown;
          color: white;
        }
      }
    }
  }
`;
