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
  
  .image-container{
    height: 250px;
    width: 100%;
    position: relative;
    
    &:hover .overlay{
      display: flex;
    }
  
    .overlay{
      height: 100%;
      width: 100%;
      background-color: rgba(0,0,0,0.25);
      display: none;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-start;
      position: absolute;
      
      button {
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
    
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  
  .input-container{
    border: 1px dashed #a0a0a0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 24px;
    
    &.error{
      border-color: brown;
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
