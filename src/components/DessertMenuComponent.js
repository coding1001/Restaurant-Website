import React from 'react'; 
import { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle, Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderDessertItem ({dessert, onClick}) {

    return(
            <Card>
                    <Link to={`/desserts/${dessert.id}`} >
                        <CardImg width="100%" src={baseUrl + dessert.image} alt={dessert.name} />
                        <CardImgOverlay>
                            <CardSubtitle className="white subtitle">{dessert.name}</CardSubtitle>
                        </CardImgOverlay>
                    </Link>
                </Card>
    );
    }
    const DessertMenu = (props) => {
        const dessertMenu = props.desserts.desserts.map((dessert) => {
            return (
                <div key={dessert.id} className="col-12 col-sm-6 col-md-4">
                    <RenderDessertItem dessert={dessert} />
                </div>
              );
        });
        if (props.desserts.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.desserts.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.desserts.errMess}</h4>
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
                        <BreadcrumbItem active> Desserts </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                    <h3>Desserts</h3>
                    <hr />
                    </div>
                </div>
                <div className="row">
                    {dessertMenu}
                </div>
            </div>
        );
    }
export default DessertMenu;