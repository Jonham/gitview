import React from 'react';
import {
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

const RootView = styled.View`

`;

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => bindActionCreators(
  {

  },
  dispatch,
);

class Profile extends React.Component {
  static propTypes = {
  }
  render() {
    return (
      <RootView>
        <Text>Profile</Text>
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
