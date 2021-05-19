import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 345px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  position: relative;
  
  &:hover .overlay{
    display: flex;
  }
  
  .info{
    flex: 1;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    
    p{
      margin-top: 20px;
      font-family: "Portrait Text", serif;
      font-size: 1.125rem;
      color: #666;
    }
  }
  
  .image{
    height: 100%;
    width: 720px;
    
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  
  .overlay{
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.05);
    display: none;
    flex-direction: row;
    align-items: flex-end;
    padding: 16px;
    gap: 16px;
    
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
