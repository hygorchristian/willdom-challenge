import React from 'react';

import Container from './styles';

const itemsMock = [
  {
    id: 1,
    image: 'https://hodinkee.imgix.net/uploads/images/9a2f1140-6b24-40a3-8577-b9f364c6b6b2/L1270083-2.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&ch=Width%2CDPR%2CSave-Data&fit=crop&h=126&w=224&dpr=2',
    title: 'Hands-On Tudor\'s New Silver Dive Watch: The Black Bay Fifty-Eight 925',
    author: 'JAMES STACEY',
  },
  {
    id: 2,
    image: 'https://hodinkee.imgix.net/uploads/images/af81d309-e4c7-4ae6-8e88-1b9baef587d3/naoya_h1.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&ch=Width%2CDPR%2CSave-Data&fit=crop&h=126&w=224&dpr=2',
    title: 'Buying, Selling, & Collecting I’m Obsessed With This Japanese Microbrand',
    author: 'Eric Ku',
  },
  {
    id: 3,
    image: 'https://hodinkee.imgix.net/uploads/images/f812057e-151a-4a2b-89cc-580280c5c38a/NN07_TIMEX_PRODUCT-2.jpeg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&ch=Width%2CDPR%2CSave-Data&fit=crop&h=126&w=224&dpr=2',
    title: 'Introducing The Timex x NN07 M79 Limited Edition',
    author: 'JON BUES',
  },
  {
    id: 4,
    image: 'https://hodinkee.imgix.net/uploads/images/9138508c-3912-4485-85e6-4eebac8dcd49/L1020085-Edit-Edit.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&ch=Width%2CDPR%2CSave-Data&fit=crop&h=126&w=224&dpr=2',
    title: 'Hands-On Taking The 41mm IWC Pilot\'s Chronograph Out For A Meal',
    author: 'DANNY MILTON',
  },
  {
    id: 5,
    image: 'https://hodinkee.imgix.net/uploads/images/65fe63f5-9de4-45f9-9302-b83809ed0d41/BP7D4M.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&ch=Width%2CDPR%2CSave-Data&fit=crop&h=126&w=224&dpr=2',
    title: 'Watching Movies Dustin Hoffman’s Two Watches From \'Kramer vs. Kramer\'',
    author: 'DANNY MILTON',
  },
];

function MoreNews() {
  return (
    <Container>
      <section>
        <h2 className="title">Last week’s stories</h2>
        <div className="grid">
          {itemsMock.map((item) => (
            <div key={item.id} className="item">
              <img src={item.image} alt="thumbnail" />
              <h4 className="title">{item.title}</h4>
              <div className="author">
                <span className="by">by&nbsp;</span>
                <span className="author-name">{item.author}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}

export default MoreNews;
