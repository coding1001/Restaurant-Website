import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Modal, ModalHeader, ModalBody, Breadcrumb, BreadcrumbItem, Button, Row, Col, Label } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super()
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
}
handleSubmit(values) {
    this.toggleModal();
    this.props.postComment(this.props.mainId, values.rating, values.author, values.comment);
    return  <Redirect  to="/mains/" />
}
toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
    render(){
    return (
    <div><Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
     <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
     <div className="row row-content">
     <div className="col-12">
     <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
        </div>
     <div className="col-12 col-md-9">
     <ModalBody>
     <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
     <Row className="form-group">
                 <Label htmlFor="rating" md={12}>Rating</Label>
                 <Col md={12}>
                     <Control.select model=".rating" name="rating"
                         className="form-control">
                         <option>1</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                         <option>5</option>
                     </Control.select>
                 </Col>
             </Row>
             <Row className="form-group">
                 <Label htmlFor="author" md={12}>Author</Label>
                 <Col md={12}>
                     <Control.text model=".author" id="author" name="author"
                         placeholder="Full Name"
                         className="form-control"
                         validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                     <Errors
                         className="text-danger"
                         model=".author"
                         show="touched"
                         messages={{
                             required: 'Required',
                             minLength: 'Must be 3 characters or greater',
                             maxLength: 'Must be 15 characters or less'
                         }} />
                 </Col>
             </Row>
             <Row className="form-group">
                 <Label htmlFor="comment" md={12}>Comment</Label>
                 <Col md={12}>
                 <Control.textarea model=".comment" id="comment" name="comment"
                         rows="6"
                         className="form-control" />
                 </Col>
             </Row>
             <Row className="form-group">
                 <Col md={{size:10, offset: 2}}>
                     <Button type="submit" color="primary">Submit</Button>
                 </Col>
             </Row>
         </LocalForm>
         </ModalBody>
     </div>
</div>
</Modal>
</div>
    );
    }
} 

function RenderMain({main}) {
        return (
            <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
        <Card>
            <CardImg top src={baseUrl + main.image} alt={main.name} />
            <CardBody>
                <CardTitle>{main.name}</CardTitle>
                <CardText>{main.description}</CardText>
            </CardBody>
        </Card>
        </FadeTransform>
        );
    }
    function RenderComments({comments, postComment, mainId}) {
        const allComments = comments.map(comment => {
            return (
                <li key={comment.id}>
                    {comment.comment}
                    <br /><br />
                    -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                    <br /><br />
                </li>
            );
        });
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {allComments}
                    <CommentForm mainId={mainId} postComment={postComment} />
                </ul>
            </div>
        );
    }
    const MainsDetail = (props) => {
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.main != null) 
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/mains">Mains</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.main.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.main.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderMain main={props.main} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    <RenderComments 
                        comments={props.comments}
                        postComment={props.postComment}
                        mainId={props.main.id}
                    />
                    </div>
                </div>
                </div>
            );
        else {
            return (
                <div></div>
            );
        }
    }
export default MainsDetail;