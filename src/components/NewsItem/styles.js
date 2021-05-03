import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 345px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  
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
`;
