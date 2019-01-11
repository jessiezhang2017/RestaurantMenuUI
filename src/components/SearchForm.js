// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
//
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './SearchForm.css';
//
// class SearchBar extends Component {
//
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       searchValue: '',
//     };
//   }
//
//   render() {
//     return (
//       <section className='search'>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" name="username" placeholder="What's your name?" value={this.state.user.displayName || this.state.user.email} />
//           <input type="text" name="restaurantName" placeholder="Restaurant Name?" onChange={this.handleChange} value={this.state.currentItem} />
//           <input type="text" name="dishName" placeholder="Dish Name?" onChange={this.handleChange} value={this.state.currentItem} />
//           <input type="text" name="currentItem" placeholder="Your comment?" onChange={this.handleChange} value={this.state.currentItem} />
//           <button>Add Review</button>
//         </form>
//       </section>
//     );
//   }
// };
//
// SearchBar.propTypes = {
//   onSearchChange: PropTypes.func,
// };
//
// export default SearchBar;
