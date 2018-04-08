import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Col } from 'react-materialize';
import { connect } from 'react-redux';
import { loadMovies } from '../../actions/moviesActions';

class CategoryItem extends Component {
  timer = null;

  state = {
    page: 0,
  }

  componentDidMount = () => {
    this.props.load(this.props.category, 'language=en-US&page=1');
    const that = this;
    this.timer = setInterval(() => {
      that.setState(prevState => ({
        page: prevState.page === 19 ? 0 : prevState.page + 1,
      }));
    }, 3000);
  }

  componentWillUnmount = () => {
    clearInterval(this.timer);
  }

  render() {
    const { title, category, match } = this.props;
    const { results } = this.props.movies[category];
    return (
      <Col s={4}>
        <NavLink to={`${match.url}/${category}`}>
          <div className="card">
            <h4>{title}</h4>
            <div className="card-image">
              <img src={results && `http://image.tmdb.org/t/p/w500/${results[this.state.page].poster_path}`} alt={title} />
            </div>
          </div>
        </NavLink>
      </Col>
    );
  }
}
const mapStateToProps = state => ({
  movies: state.movies,
});

const mapDispatchToProps = dispatch => ({
  load(querry, param) {
    dispatch(loadMovies(querry, param));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
