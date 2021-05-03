import styled from 'styled-components';

export default styled.div`
  width: 100%;
  background-color: #222222;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  
  section{
    flex-direction: column;
  
    h2.title{
      font-family: Brown, sans-serif;
      text-transform: uppercase;
      font-weight: 400;
      font-size: 0.9375rem;
    }
    
    .grid{
      width: 100%;
      margin-top: 16px;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1rem;
      
      .item{
        width: 100%;
        cursor: pointer;
        
        img{
          width: 100%;
          height: 126px;
          object-fit: cover;
        }
        
        h4.title{
          font-size: 1.125rem;
          line-height: 1.2em;
          margin-top: 12px;
          font-family: Portrait, serif;
          font-weight: 400;
        }
        
        .author{
          color: #666;
          font-size: 0.75em;
          letter-spacing: 1px;
          margin-top: 6px;
          
          .by{
            text-transform: none;
            font-family: Portrait, serif;
            font-style: italic;
          }
          
          .author-name{          
            text-transform: uppercase;
            font-family: Brown, serif;
          }
        }
      }
    }
  }
  
  
`;
