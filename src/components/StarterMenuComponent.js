import React from 'react'; 
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb,BreadcrumbItem, ListGroup, CardDeck} from 'reactstrap';
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderStarterItem ({starter, onClick}) {

    return(
            
                <Card>
                    <Link to={`/starters/${starter.id[0]}`} >
                        <CardImg width="100%" src={baseUrl + starter.image} alt={starter.name} />
                        <CardImgOverlay>
                            <CardTitle classname="white">{starter.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                </Card>
    );
    }
   
    const StarterMenu = (props) => {
        const starterMenu = props.starters.starters.map((starter) => {
            return (
                
                <div key={starter.id} className="col-12 m-1 menu-img">
                
                  <RenderStarterItem starter={starter} />
                  
                </div>
              );
        });
        if (props.starters.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.starters.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.starters.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else
        return (
            <div className="container body">
                <div className="row">
                    <Breadcrumb>
                         <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Starters
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                    <h3>Starters</h3>
                    <hr />
                    </div>
                </div>
                <div className="row">
                    {starterMenu}
                </div>
            </div>
        );
    }
export default StarterMenu;