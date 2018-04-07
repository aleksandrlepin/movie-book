import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { connect } from 'react-redux';
import { loadMovies } from '../../actions/moviesActions';

class MoviePage extends Component {
  componentDidMount = () => {
    this.props.load(this.props.match.params.id, 'language=en-US');
  }

  render() {
    const { poster_path, original_title, overview } = this.props.details;
    return (
      <Row>
        <Col s={12}>
          <div className="card horizontal">
            <div className="card-image">
              <img src={`http://image.tmdb.org/t/p/w300/${poster_path}`} alt={original_title} />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h3>{original_title}</h3>
                <p>{overview}</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  details: state.movies.data,
});

const mapDispatchToProps = dispatch => ({
  load(querry, param) {
    dispatch(loadMovies(querry, param));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
