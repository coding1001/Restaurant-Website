import React from 'react'; 
import { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle, Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderMainsMenuItem ({seafood, veg, onClick}) {

    return (
        <div>
                <Card >
                    <Link to={'/seafood'} >
                    <CardImg width="100%" src={baseUrl + seafood.image} alt={seafood.name} />
                        <CardImgOverlay>
                            <CardSubtitle classname="white">{seafood.name}</CardSubtitle>
                        </CardImgOverlay>
                        </Link>
                  </Card>
                  <Card >
                    <Link to={'/seafood'} >
                    <CardImg width="100%" src={baseUrl + seafood.image} alt={seafood.name} />
                        <CardImgOverlay>
                            <CardSubtitle classname="white">{seafood.name}</CardSubtitle>
                        </CardImgOverlay>
                        </Link>
                  </Card>
                  <Card >
                    <Link to={'/veg'} >
                    <CardImg width="100%" src={baseUrl + veg.image} alt={veg.name} />
                        <CardImgOverlay>
                            <CardSubtitle classname="white">{veg.name}</CardSubtitle>
                        </CardImgOverlay>
                        </Link>
                  </Card>
                  </div>
     );
    }
   
    const MainsMenu = (props) => {
        const mainsMenu = props.mains.mains.map((seafood) => {
            return (
                <div key={seafood.id} className="col-12 m-1">
                  <RenderMainsMenuItem seafood={seafood} />
                </div>
              );
        });
        const mainsMenu = props.veg.veg.map((veg) => {
            return (
                <div key={veg.id} className="col-12 m-1">
                  <RenderMainsMenuItem veg={veg} />
                </div>
              );
        });
        if (props.mains.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.mains.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.mains.errMess}</h4>
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
                        <BreadcrumbItem active>Mains
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                    <h3>Mains</h3>
                    <hr />
                    </div>
                </div>
                <div className="row">
                    {mainsMenu}
                </div>
            </div>
        );
    }
export default MainsMenu;