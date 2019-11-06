import React, { Component } from 'react';
import Menu from './MenuComponent';
import Contact from './ContactComponent.js';
import About from './AboutComponent.js';
import DishDetail from './DishdetailComponent';
import Header from "./HeaderComponent.js";
import Footer from "./FooterComponent.js";
import Home from "./HomeComponent.js";
import MainsMenu from "./MainsMenu.js";
import MainsDetail from "./MainsDishDetailComponent.js";
import SeafoodMenu from "./SeafoodMenuComponent.js"; 
import SeafoodDetail from "./SeafoodDetailComponent.js";
import VegMenu from "./VegMenuComponent.js";
import VegDetail from "./VegDetailComponent.js";
import DessertMenu from "./DessertMenuComponent.js";
import DessertDetail from './DessertDetailComponent.js';
import StarterMenu from './StarterMenuComponent.js'; 
import StarterDetail from './StarterdetailComponent.js';
import { Switch, Route, Redirect, withRouter } from'react-router-dom';
import { connect } from "react-redux";
import { actions } from 'react-redux-form';
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedback, fetchStarters, fetchMains,  fetchDesserts, fetchSeafood, fetchVeg } from '../redux/ActionCreators.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapDispatchToProps = dispatch => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  postFeedback: (feedback) => dispatch(postFeedback(feedback)),
  fetchDishes: () => { dispatch(fetchDishes())},
  fetchStarters: () => { dispatch(fetchStarters())},
  fetchMains: () => { dispatch(fetchMains())},
  fetchSeafood: () => { dispatch(fetchSeafood()) },
  fetchVeg: () => { dispatch(fetchVeg()) },
  fetchDesserts: () => { dispatch(fetchDesserts())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
});

const mapStateToProps = state => {
  return { 
    dishes: state.dishes,
    desserts: state.desserts,
    starters: state.starters,
    mains: state.mains,
    seafood: state.seafood,
    veg: state.veg,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }        
}

class Main extends Component {
  
componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
    this.props.fetchStarters();
    this.props.fetchMains();
    this.props.fetchSeafood();
    this.props.fetchVeg();
    this.props.fetchDesserts();
}
 
render() {
  const HomePage = () => {
    return(
      <Home 
      dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
      dishesLoading={this.props.dishes.isLoading}
      dishErrMess={this.props.dishes.errMess}
      promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
      promoLoading={this.props.promotions.isLoading}
      promoErrMess={this.props.promotions.errMess}
      leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
      leaderLoading={this.props.leaders.isLoading}
      leaderErrMess={this.props.leaders.errMess}
  />
    );
  }

  const DishWithId = ({match}) => {
    return(
      <div>
      <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
      isLoading={this.props.dishes.isLoading}
      errMess={this.props.dishes.errMess}
      comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
      commentsErrMess={this.props.comments.errMess}
      postComment={this.props.postComment}
    />
    <DessertDetail dessert={this.props.desserts.desserts.filter((dessert) => dessert.id === parseInt(match.params.dessertId,10))[0]}
      isLoading={this.props.desserts.isLoading}
      errMess={this.props.desserts.errMess}
      comments={this.props.comments.comments.filter((comment) => comment.dessertId === parseInt(match.params.dessertId,10))}
      commentsErrMess={this.props.comments.errMess}
      postComment={this.props.postComment}
    />
    <StarterDetail 
      starter={this.props.starters.starters.filter((starter) => starter.id === parseInt(match.params.starterId,10))[0]}
      isLoading={this.props.starters.isLoading}
      errMess={this.props.starters.errMess}
      comments={this.props.comments.comments.filter((comment) => comment.starterId === parseInt(match.params.starterId,10))}
      commentsErrMess={this.props.comments.errMess}
      postComment={this.props.postComment}
    />
    </div>
    );
  };
  const MainsMenuWithId = ({match}) => {
    return(
      <div>
      <MainsDetail main={this.props.mains.mains.filter((main) => main.id === parseInt(match.params.mainId,10))[0]}
      isLoading={this.props.mains.isLoading}
      errMess={this.props.mains.errMess}
      comments={this.props.comments.comments.filter((comment) => comment.mainId === parseInt(match.params.mainId,10))}
      commentsErrMess={this.props.comments.errMess}
      postComment={this.props.postComment}
    />
    <SeafoodDetail
      seafood={this.props.seafood.seafood.filter((seafood) => seafood.id === parseInt(match.params.seafoodId,10))[0]}
      isLoading={this.props.seafood.isLoading}
      errMess={this.props.seafood.errMess}
      comments={this.props.comments.comments.filter((comment) => comment.seafoodId === parseInt(match.params.seafoodId,10))}
      commentsErrMess={this.props.comments.errMess}
      postComment={this.props.postComment}
    />
    <VegDetail
      veg={this.props.veg.veg.filter((veg) => veg.id === parseInt(match.params.vegId,10))[0]}
      isLoading={this.props.veg.isLoading}
      errMess={this.props.veg.errMess}
      comments={this.props.comments.comments.filter((comment) => comment.vegId === parseInt(match.params.vegId,10))}
      commentsErrMess={this.props.comments.errMess}
      postComment={this.props.postComment}
    />
    </div>
    );
  };
   const VegMenuWithId = ({match}) => {
    return(
     <VegDetail
      veg={this.props.veg.veg.filter((veg) => veg.id === parseInt(match.params.vegId,10))[0]}
      isLoading={this.props.veg.isLoading}
      errMess={this.props.veg.errMess}
      comments={this.props.comments.comments.filter((comment) => comment.vegId === parseInt(match.params.vegId,10))}
      commentsErrMess={this.props.comments.errMess}
      postComment={this.props.postComment}
    />
    );
  };
  const DessertWithId = ({match}) => {
    return(
      <DessertDetail dessert={this.props.desserts.desserts.filter((dessert) => dessert.id === parseInt(match.params.dessertId,15))[0]}
      isLoading={this.props.desserts.isLoading}
      errMess={this.props.desserts.errMess}
      comments={this.props.comments.comments.filter((comment) => comment.dessertId === parseInt(match.params.dessertId,15))}
      commentsErrMess={this.props.comments.errMess}
      postComment={this.props.postComment}
    />
    );
  };
  const StartersWithId = ({match}) => {
    return(
      <StarterDetail 
      starter={this.props.starters.starters.filter((starter) => starter.id === parseInt(match.params.starterId,10))[0]}
      isLoading={this.props.starters.isLoading}
      errMess={this.props.starters.errMess}
      comments={this.props.comments.comments.filter((comment) => comment.starterId === parseInt(match.params.starterId,10))}
      commentsErrMess={this.props.comments.errMess}
      postComment={this.props.postComment}
    />
    );
  };
  const SeafoodMenuWithId = ({match}) => {
    return(
      <SeafoodDetail
      seafood={this.props.seafood.seafood.filter((seafood) => seafood.id === parseInt(match.params.seafoodId,10))[0]}
      isLoading={this.props.seafood.isLoading}
      errMess={this.props.seafood.errMess}
      comments={this.props.comments.comments.filter((comment) => comment.seafoodId === parseInt(match.params.seafoodId,10))}
      commentsErrMess={this.props.comments.errMess}
      postComment={this.props.postComment}
    />
    );
  };
    return (
      <div>
        <Header />
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={150}>
              <Switch location={this.props.location}>
                  <Route path='/home' component={HomePage} />
                  <Route exact path="/aboutus" component={() => <About leader={this.props.leaders.leaders}/>} />
                  
                  <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                  <Route path='/menu/:dishId' component={DishWithId} />

                  <Route exact path='/starters' component={() => <StarterMenu starters={this.props.starters} />} />
                  <Route path='/starters/:starterId' component={StartersWithId} />

                  <Route exact path='/desserts' component={() => <DessertMenu desserts={this.props.desserts} />} />
                  <Route path='/desserts/:dessertId' component={DessertWithId} />

                  <Route exact path='/mains' component={() => <MainsMenu mains={this.props.mains} />} />
                  <Route path='/mains/:mainId' component={MainsMenuWithId} />

                  <Route exact path='/seafood' component={() => <SeafoodMenu seafood={this.props.seafood} />} />
                  <Route path='/seafood/:seafoodId' component={SeafoodMenuWithId} />

                  <Route exact path='/veg' component={() => <VegMenu veg={this.props.veg} />} />
                  <Route path='/veg/:vegId' component={VegMenuWithId} />

                  <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} 
                                                                           postFeedback={this.props.postFeedback}
                                                                             />} />
                  <Redirect to="/home" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

