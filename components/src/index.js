import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';



const App = () => { 
  return (
    <div className = "ui container comments">

      <ApprovalCard> 
      <CommentDetail  author="Mike"  timeAgo="Today at 4:45PM" text="Really Nice" img={faker.image.avatar()}/>
      
      </ApprovalCard>
      {/* Import from Comment Detail */}

      <ApprovalCard>
      <CommentDetail author="John" timeAgo="Today at 5:46PM" text="Basic B" img={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail  author="Bull" timeAgo="Today at 8:46PM" text="Nice one" img={faker.image.avatar()} />
      </ApprovalCard>
      
    </div>

  )

};

ReactDOM.render(<App />, document.querySelector('#root'));