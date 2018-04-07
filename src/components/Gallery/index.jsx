import React, { PropTypes } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import { Row, Col } from 'react-materialize';
import List from '../List';
import MoviePage from '../MoviePage';

const Gallery = (props) => {
  const { match } = props;
  return (
    <div>
      <Row className="valign">
        <Col s={12}>
          <div className="card">
            <div className="card-action center-align">
              <NavLink to={`${match.url}/now_playing`} activeClassName="sub-route--active white-text" >Now Playing</NavLink>
              <NavLink to={`${match.url}/upcoming`} activeClassName="sub-route--active white-text" >Upcoming</NavLink>
              <NavLink to={`${match.url}/top_rated`} activeClassName="sub-route--active white-text" >Top Rated</NavLink>
            </div>
            <div className="card-content">
              <Route exact path={`${match.url}/:option`} component={List} />
              <Route path={`${match.url}/:option/:id`} component={MoviePage} />
              <Redirect to={`${match.url}/now_playing`} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Gallery;
