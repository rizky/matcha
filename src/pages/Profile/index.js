import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import Layout from 'app/components/Layout/Basic';
import { selectCurrentUser } from 'app/pages/Auth/selector';
import type { UserType } from 'app/types/User';
import { COLORS, MARGINS } from 'app/constants/design';
import { User } from 'app/components/Users';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 0,
    margin: MARGINS.TINY,
  },
});

type Props = {
  currentUser: UserType,
};

const Profile = (props: Props) => (
  <Layout style={{ flexDirection: 'row', justifyContent: 'center' }}>
    <ScrollView style={styles.container}>
      <User user={props.currentUser} />
    </ScrollView>
  </Layout>
);

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(Profile);
export { Profile };
