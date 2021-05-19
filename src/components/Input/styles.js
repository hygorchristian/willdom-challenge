import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  label{
    font-size: 16px;
    font-family: Brown, serif;
    font-weight: 200;
    margin-bottom: 8px;
  }
  
  .input-container{
    border: 1px solid #a0a0a0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    
    &.focus{
      border-color: black;
    }
    
    &.error{
      border-color: brown;
    }
    
    input, textarea{
      flex: 1;      
      font-family: Brown, sans-serif;
      font-weight: 200;
      font-size: 14px;
    }
  }
  
  .error-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 4px;
    
    span.error{
      color: brown;
      font-family: Brown, sans-serif;
      font-weight: 200;
      font-size: 14px;
      margin-left:8px;
    }
  }  
`;
