import React from 'react';
import { Link, useRouteMatch, Switch, Route, useParams } from "react-router-dom";
function About(props) {
    let { path,url } = useRouteMatch();
    return (
        <div className='row container'>
            <div className='col-md-4'>  <ul className="list-group">
            <li className="list-group-item"><Link to={path}>About</Link> </li>
                <li className="list-group-item"><Link to={`${path}/1`}>First item</Link> </li>
                <li className="list-group-item"><Link to={`${path}/2`}>Second item</Link></li>
                <li className="list-group-item"><Link to={`${path}/3`}>Third item</Link></li>
                </ul></div>
<div className='col-md-8'>
            <div id="about-main" className='text-center'>
        <div className="jumbotron">
            <div className="jumbotron-inner">
                <div className="top-box">
                    <div className="content-box">
                        <h1>
                            {props.pagename}
                        </h1>
                        <Switch>
                            <Route exact path={path}>
                                <>
                            <p>
                        When you choose us, you'll feel the benefit of 10 years' experience of Web Development. Because we know the digital world and we know that how to handle it. With working knowledge of online, SEO and social media.
                        </p>
                        <p>
                        When you choose us, you'll feel the benefit of 10 years' experience of Web Development. Because we know the digital world and we know that how to handle it. With working knowledge of online, SEO and social media.
                        </p>
                        </>
                            </Route>

                            <Route path={`${path}/:id`}>
                            <TopicChange></TopicChange>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
}

function TopicChange(){
    //console.log(useParams());
    let { id }= useParams();    //Id Destruct Method from useParam();
    if( id==1) return <h2>First Item</h2>;
    else if(id==2) return <h2>Second Item</h2>; 
    else if(id==3) return <h2>Third Item</h2>;
}

export default About;