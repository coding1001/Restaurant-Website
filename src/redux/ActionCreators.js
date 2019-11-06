import * as ActionTypes from './ActionTypes.js';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {throw error; })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {alert('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
};

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});
export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchMains = () => (dispatch) => { 
  
  dispatch(mainsLoading(true)); 

  return fetch(baseUrl + 'mains')
  .then(response => {
    if(response.ok){
    return response; }
    else {var error = new Error ('Error ' + response.status + ': ' + response.statusText);
    error.response = response;
          throw error;}
    },
    error => {
      var errmess = new Error(error.message);
      throw errmess;
})
.then(response => response.json())
.then(mains => dispatch(addMains(mains)))
.catch(error => dispatch(mainsFailed(error.message)));
};

export const mainsLoading = () => ({
  type: ActionTypes.MAINS_LOADING
});
export const mainsFailed = (errmess) => ({
  type: ActionTypes.MAINS_FAILED,
  payload: errmess
})
export const addMains = (mains) => ({
  type: ActionTypes.ADD_MAINS,
  payload: mains
});

export const fetchVeg = () => (dispatch) => { 
  
  dispatch(vegLoading(true)); 

  return fetch(baseUrl + 'veg')
  .then(response => {
    if(response.ok){
    return response; }
    else {var error = new Error ('Error ' + response.status + ': ' + response.statusText);
    error.response = response;
          throw error;}
    },
    error => {
      var errmess = new Error(error.message);
      throw errmess;
})
.then(response => response.json())
.then(veg => dispatch(addVeg(veg)))
.catch(error => dispatch(vegFailed(error.message)));
};

export const vegLoading = () => ({
  type: ActionTypes.VEG_LOADING
});
export const vegFailed = (errmess) => ({
  type: ActionTypes.VEG_FAILED,
  payload: errmess
})
export const addVeg = (veg) => ({
  type: ActionTypes.ADD_VEG,
  payload: veg
});

export const fetchDesserts = () => (dispatch) => {

  dispatch(dessertsLoading(true));

  return fetch(baseUrl + 'desserts')
  .then(response => {
    if(response.ok){
      return response;    }
      else {var error = new Error ('Error ' + response.status + ': ' + response.statusText);
    error.response = response;
          throw error;}
    },
    error => {
      var errmess = new Error(error.message);
      throw errmess;
})
.then(response => response.json())
.then(desserts => dispatch(addDesserts(desserts)))
.catch(error => dispatch(dessertsFailed(error.message)));
};

export const dessertsLoading = () => ({
  type: ActionTypes.DESSERTS_LOADING 
});
export const dessertsFailed = (errmess) => ({
  type: ActionTypes.DESSERTS_FAILED,
  payload: errmess
})
export const addDesserts = (desserts) => ({
  type: ActionTypes.ADD_DESSERTS,
  payload: desserts
});

export const fetchStarters = () => (dispatch) => {

  dispatch(startersLoading(true));

  return fetch(baseUrl + 'starters')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(starters => dispatch(addStarters(starters)))
  .catch(error => dispatch(startersFailed(error.message)));
};

export const startersLoading = () => ({
  type: ActionTypes.STARTERS_LOADING
});
export const startersFailed = (errmess) => ({
  type: ActionTypes.STARTERS_FAILED,
  payload: errmess
});
export const addStarters = (starters) => ({
  type: ActionTypes.ADD_STARTERS,
  payload: starters
});

export const fetchSeafood = () => (dispatch) => {

  dispatch(seafoodLoading(true));

  return fetch(baseUrl + 'seafood')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(seafood => dispatch(addSeafood(seafood)))
  .catch(error => dispatch(seafoodFailed(error.message)));
};

export const seafoodLoading = () => ({
  type: ActionTypes.SEAFOOD_LOADING
});
export const seafoodFailed = (errmess) => ({
  type: ActionTypes.SEAFOOD_FAILED,
  payload: errmess
});
export const addSeafood = (seafood) => ({
  type: ActionTypes.ADD_SEAFOOD,
  payload: seafood
});

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const fetchLeaders = () => (dispatch) => {
  dispatch(leadersLoading());

  return fetch(baseUrl + 'leaders')
  .then(response => {
    if(response.ok){
      return response;
    } else {
      var error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;
    }
    },
    error => {
      var errmess = new Error(error.message);
      throw errmess;
  })
  .then(response => response.json())
  .then(leaders => dispatch(addLeaders(leaders)))
  .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

export const addFeedback = (feedback) => ({
  type: ActionTypes.ADD_FEEDBACK,
  payload: feedback
});

export const postFeedback = (feedback) => (dispatch) => {

  return fetch(baseUrl + 'feedback', {
      method: 'POST',
      body: JSON.stringify(feedback),
      headers: {
          'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
  })
      .then(response => {
          if (response.ok) {
              return response;
          } else {
              var error = new Error('Error ' + response.status + ': ' + response.statusText);
              error.response = response;
              throw error;
          }
      },
      error => {
          var errmess = new Error(error.message);
          throw errmess;
      })
      .then(response => response.json())
      .then(response => dispatch(addFeedback(response)))
      .catch(error => { console.log('Post feedback', error.message);
          alert('Your feedback could not be posted\nError: ' + error.message); });
}