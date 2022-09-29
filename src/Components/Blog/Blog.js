import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-com'>
            <div className='card'>
                <div className="card-contain">
                    <h4 className="name">How does react work</h4>
                    <p className='des'>ReactJS is an open source, component-based front end library responsible only for the view layer of the application.</p>
                </div>
            </div>
            <div className='card'>
                <div className="card-contain">
                    <h4 className="name">UseEffect is used in any function</h4>
                    <p className='des'>We know that, the useEffect is used for causing side effects in functional components and it is also capable for handling componentDidMount, componentDidUpdate and componentWillUnmount life-cycle methods of class based components into functional component.</p>
                </div>
            </div>
            <div className='card'>
                <div className="card-contain">
                    <h4 className="name">What is the difference between state and props in React?</h4>
                    <p className='des'>Props are a JavaScript object that React components receive as an arbitrary input to produce a React element. They provide a data flow between the components. To pass the data (props) from one component to another as a parameter:
                    <br />
                    State is a JavaScript object which contains data that influence how the component looks at a certain point in time. The second part is what makes the state different compared to props. State is just a snapshot of the app in a time. Every user interaction with your app may lead to changes in the underlying state and in the whole UI as a result. State changes over the lifetime of a React component. Examples of state:
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;        