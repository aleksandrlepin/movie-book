import React, { PropTypes } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import { Row, Col } from 'react-materialize';
import List from '../List';
import MoviePage from '../MoviePage';

const Movies = (props) => {
  const { match } = props;
  return (
    <div>
      <Row className="valign">
        <Col s={4}>
          <NavLink to={`${match.url}/now_playing`} activeClassName="sub-route--active white-text">
            <div className="card">
              Now Playing
            </div>
          </NavLink>
        </Col>
        <Col s={4}>
          <NavLink to={`${match.url}/upcoming`} activeClassName="sub-route--active white-text">
            <div className="card">
              Upcoming
            </div>
          </NavLink>
        </Col>
        <Col s={4}>
          <NavLink to={`${match.url}/popular`} activeClassName="sub-route--active white-text">
            <div className="card">
              Popular
            </div>
          </NavLink>
        </Col>
      </Row>
      <div className="card">
        <div className="card-content">
          <Route exact path={`${match.url}/:option`} component={List} />
          <Route path={`${match.url}/:option/:id`} component={MoviePage} />
          {/* <Redirect to={`${match.url}/now_playing`} /> */}
        </div>
      </div>
    </div>
  );
};

export default Movies;
