import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { success } from '../../store/actions';
import Loader from '../common/Loader';

const Success = props => {
  let { jwt } = useParams();
  useEffect(() => props.success(props.history, jwt), []);

  return (
    <>
      <Loader message={false} />
    </>
  );
};

export default connect(null, { success })(Success);
