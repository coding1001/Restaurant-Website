import React from 'react'; 
import { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle, Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderVegItem ({veg, onClick}) {

    return(
            <Card>
                    <Link to={`/veg/${veg.id}`} >
                        <CardImg width="100%" src={baseUrl + veg.image} alt={veg.name} />
                        <CardImgOverlay>
                            <CardSubtitle className="white subtitle">{veg.name}</CardSubtitle>
                        </CardImgOverlay>
                    </Link>
                </Card>
    );
    }
    const VegMenu = (props) => {
        const vegMenu = props.veg.veg.map((veg) => {
            return (
                <div key={veg.id} className="col-12 col-sm-6 col-md-4">
                    <RenderVegItem veg={veg} />
                </div>
              );
        });
        if (props.veg.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.veg.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.veg.errMess}</h4>
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
                        <BreadcrumbItem active> Vegetarian Dishes </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                    <h3>Vegetarian Dishes</h3>
                    <hr />
                    </div>
                </div>
                <div className="row">
                    {vegMenu}
                </div>
            </div>
        );
    }
export default VegMenu;