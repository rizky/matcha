// @flow
import React from 'react';
import { StyleSheet, View, Text, TextInput, Platform } from 'react-native';
import { COLORS, FONT_SIZES, FONT_FAMILIES, MARGINS } from 'app/constants/design';
import { size } from 'lodash';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: COLORS.BLACK,
    width: '100%',
  },
  textStyle: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILIES.CONTENT,
    fontSize: FONT_SIZES.MEDIUM2,
    marginBottom: Platform.OS === 'android' ? MARGINS.REV_SMALL : MARGINS.TINY,
    marginTop: Platform.OS === 'android' ? MARGINS.REV_SMALL : MARGINS.TINY,
    paddingLeft: 0,
    width: '100%',
  },
  titleStyle: {
    color: 'transparent',
    fontFamily: FONT_FAMILIES.CONTENT,
    fontSize: FONT_SIZES.MEDIUM,
  },
});

type Props = {
  onChangeText: (string) => void,
  placeholder: string,
  value: string,
  title?: string,
};

type State = {
  containerStyle: Object,
  titleStyle: Object,
  value: string,
};

class TextField extends React.Component<Props, State> {
  static defaultProps = {
    title: '',
  }

  state = {
    containerStyle: {},
    titleStyle: {},
    value: this.props.value,
  }

  onFocusStyle = () => {
    this.setState({
      ...this.state,
      containerStyle: { ...this.state.containerStyle, borderColor: COLORS.BLUE_DARK },
      titleStyle: {
        ...this.state.titleStyle,
        color: size(this.state.value) !== 0 ? COLORS.BLUE_DARK : 'transparent',
      },
    });
  }

  onBlurStyle = () => {
    this.setState({
      ...this.state,
      containerStyle: { ...this.state.containerStyle, borderColor: COLORS.GREY },
      titleStyle: {
        ...this.state.titleStyle,
        color: size(this.state.value) !== 0 ? COLORS.GREY : 'transparent',
      },
    });
  }

  onChangeText = (text: string) => {
    this.setState({ ...this.state, value: text }, () => {
      this.onFocusStyle();
    });
    console.log(size(this.state.value));
    this.props.onChangeText(text);
  }

  render() {
    const { onChangeText, style, ...otherProps } = this.props;
    return (
      <View style={[styles.container, this.state.containerStyle]}>
        <Text style={[styles.titleStyle, this.state.titleStyle]}>
          {this.props.title ? this.props.title : this.props.placeholder}
        </Text>
        <TextInput
          placeholder={this.props.placeholder}
          placeholderTextColor={COLORS.GREY}
          onChangeText={this.onChangeText}
          value={this.props.value}
          style={[styles.textStyle, this.state.textStyle]}
          underlineColorAndroid="transparent"
          onFocus={this.onFocusStyle}
          onBlur={this.onBlurStyle}
          {...otherProps}
        />
      </View>
    );
  }
}

export default TextField;
