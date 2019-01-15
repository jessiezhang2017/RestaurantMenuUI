import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewCard from './ReviewCard';
import axios from 'axios';
import './ReviewList.css';


const URL = 'http://www.localhost:8080/reviews/users/';

class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // user: props.user,
      reviewList: [],
      masterList:[],
      currentReview: undefined,

    }
    // this.deleteReview = this.deleteReview.bind(this);
    // this.editReview = this.editReview.bind(this);
  }

  componentDidMount(){

    if (this.props.user) {
      const encoded = encodeURIComponent(this.props.user.uid);

      axios.get(URL+encoded)
      .then((response) =>{

        this.setState({
          reviewList: response.data,
          masterList: response.data
        });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        })
      })
    }
  }

  componentDidUpdate(prevProps) {
    const { user } = this.props;
    const prevUser = prevProps.user;
    if (prevUser !== user ) {

      this.setState({ user:this.props.user });
      if (user) {
        const encoded = encodeURIComponent(user.uid);

        axios.get(URL+encoded)
        .then((response) =>{

          this.setState({
            reviewList: response.data,
            masterList: response.data
          });
        })
        .catch((error) => {
          console.log(error.message);
          this.setState({
            errorMessage: error.message,
          })
        })
      }else{
        this.setState({ reviewList:[]});
      }
    }
  }

  // getReviewList(){
  //    if(this.state.user) {
  //      const url = 'http://www.localhost:8080/reviews/users/';
  //      const encoded = encodeURIComponent(this.state.user.uid);
  //
  //      axios.get(url+encoded)
  //      .then((response) =>{
  //
  //        this.setState({
  //          reviewList: response.data,
  //          masterList: response.data
  //        });
  //
  //      })
  //      .catch((error) => {
  //        console.log(error.message);
  //        this.setState({
  //          errorMessage: error.message,
  //        })
  //      })
  //   }
  //  }




  // deleteReview = (reviewId) => {
  //   let deleteIndex = -1;
  //   const reviews =[...this.state.masterList];
  //
  //   reviews.forEach((review, index) => {
  //     if (reviewId === review.id) {
  //       deleteIndex = index;
  //     }
  //   });
  //
  //   reviews.splice(deleteIndex, 1);
  //
  //   this.setState({
  //     reviewList: reviews,
  //
  //   })



  render() {
    const reviewList = this.state.reviewList.map((review) => {
      return <ReviewCard key={review.id}
               deleteReviewCallback={this.deleteReviewCallback}
               editReviewCallback={this.editReviewCallback}
               {...review} />
    });

    return (
      <div className="card-group">
        {reviewList}
      </div>
    );
  }
}

// const ReviewList = (props) => {
//   const { user, reviews } = props;
//
//
//     if(user) {
//       if(reviews === []){
//         return (
//           <div className="card-group">
//               <p>No reviews</p>
//           </div>
//         )
//       }else{
//         const result = reviews.map((review) => {
//               return <ReviewCard key={review.id}
//                        deleteReviewCallback={this.deleteReviewCallback}
//                        editReviewCallback={this.editReviewCallback}
//                        {...review} />
//          });
//          return (
//            <div className="card-group">
//                {result}
//            </div>
//          )
//       }
//     }else{
//       return (
//         <div className="card-group">
//             <p> Please log in</p>
//         </div>
//       )
//
//     }
//
// }

ReviewList.propTypes = {
  user: PropTypes.object.isRequired,

};

export default ReviewList;
