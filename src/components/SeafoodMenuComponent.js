import React from 'react'; 
import { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle, Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderSeafoodItem ({seafood, onClick}) {

    return(
            <Card>
                <Link to={`/seafood/${seafood.id}`} >
                    <CardImg width="100%" src={baseUrl + seafood.image} alt={seafood.name} />
                    <CardImgOverlay>
                        <CardSubtitle className="white subtitle">{seafood.name}</CardSubtitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }
    const SeafoodMenu = (props) => {
        const seafoodMenu = props.seafood.seafood.map((seafood) => {
            return (
                <div key={seafood.id} className="col-12 col-sm-6 col-md-4">
                    <RenderSeafoodItem seafood={seafood} />
                </div>
              );
        });
        if (props.seafood.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.seafood.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.seafood.errMess}</h4>
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
                            <Link to="/mains">Mains</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active> Seafood </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                    <h3>Seafood</h3>
                    <hr />
                    </div>
                </div>
                <div className="row">
                    {seafoodMenu}
                </div>
            </div>
        );
    }
export default SeafoodMenu;