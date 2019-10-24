import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

function RenderLeader({leader}){
    
    return (
        <Media>
            <Media left middle> 
                <Media object src={baseUrl + leader.image} alt={leader.name} />
            </Media>
            <Media body className="ml-5">
                <Media heading> {leader.name} </Media>
                <p> {leader.designation} </p>
                <p> {leader.description} </p>
            </Media>
        </Media>
    );
    }

function About(props) {
    const leaders = props.leader.map(leader => {
        return (
            <RenderLeader leader={leader} />
        );
    });
    return(
        <div className="container body">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Chef de Cuisine & Co opened its doors to the world in the spring of 2019 and quickly established itself as a culinary icon in Paris and London. Featuring four of the best Michelin star chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Balal Mohammed, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader color="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Birth</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$25,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">60</dd>
                                <dt className="col-6">Seating</dt>
                                <dd className="col-6">150</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0"><i>"There is no such thing as the perfect meal; one can always do better".</i></p>
                                <footer className="blockquote-footer">Joel Robuchon</footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>The Inventors</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}
export default About;    

