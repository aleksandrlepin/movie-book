import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, CardPanel, Pagination } from 'react-materialize';
import { NavLink } from 'react-router-dom'
import { loadMovies } from '../../actions/moviesActions';
import Card from '../Card';

class List extends Component {
  componentDidMount() {
    this.props.load(this.props.match.params.option, 'language=en-US&page=1');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.option !== nextProps.match.params.option) {
      this.props.load(nextProps.match.params.option, 'language=en-US&page=1');
    }
  }

  handlePagination = (page) => {
    this.props.load(this.props.match.params.option, `language=en-US&page=${page}`);
  }

  handleCardHover = (e) => {
    if (e.type === 'mouseenter') {
      e.currentTarget.classList.add('z-depth-5');
    }
    if (e.type === 'mouseleave') {
      e.currentTarget.classList.remove('z-depth-5');
    }
  }

  render() {
    const { option } = this.props.match.params.option;
    const { page, total_pages } = this.props.movies.data;
    return (
      <div>
        <Row>
          <NavLink to={`${this.props.match.url}/aaa`} activeClassName="subRouteActive white-text" >Top Rated/aaa</NavLink>
          {this.props.movies.data.results !== undefined && this.props.movies.data.results.map(item => (
            <Col s={12} m={6} l={3}>
              <Card
                backdrop_path={item.backdrop_path}
                original_title={item.original_title}
                release_date={item.release_date}
                vote_average={item.vote_average}
                handleCardHover={this.handleCardHover}
              />
            </Col>))}
        </Row>
        <Row>
          <Col s={12} className="center-align">
            <Pagination
              onSelect={this.handlePagination}
              items={total_pages}
              activePage={this.props.movies.data.page}
              maxButtons={8}
            />
          </Col>
        </Row>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(List);
