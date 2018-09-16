import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONT_SIZES, MARGINS } from 'src/constants/design';
import DoubleSquare from 'src/primitives/Icons/DoubleSquareIcon';
import Icon from 'react-native-vector-icons/Entypo';

type Choice = {
  id: string,
  value: string,
};

type Props = {
  choices: Array<Choice>,
  onChange: (string) => void,
  value: ?{ labels: Array<string> },
};

type State = {
  selectedValues: Array<string>,
};

const styles = {
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: MARGINS.TINY,
    padding: MARGINS.SMALL,
  },
  text: {
    fontSize: FONT_SIZES.MEDIUM2,
    marginLeft: MARGINS.SMALL,
  },
};

class Checkbox extends React.Component<Props, State> {
  state = { selectedValues: this.props.value ? this.props.value.labels : [] }

  onChange = (selectedValue: string) => {
    if (this.state.selectedValues.includes(selectedValue)) {
      const newSelectedValues = this.state.selectedValues.filter((value) => value !== selectedValue);
      this.setState({ selectedValues: newSelectedValues });
      this.props.onChange(newSelectedValues.length ? { labels: newSelectedValues } : null);
    } else {
      const newSelectedValues = [...this.state.selectedValues, selectedValue];
      this.setState({ selectedValues: newSelectedValues });
      this.props.onChange({ labels: newSelectedValues });
    }
  }

  getStyle = (id: string) => {
    if (!this.state.selectedValues.includes(id)) {
      return {
        colorSmallSquare: '#ececec',
        container: styles.container,
        secondColorSmallSquare: '#ececec',
      };
    }
    return {
      colorSmallSquare: COLORS.BLUE_DARK,
      container: [styles.container, { backgroundColor: COLORS.BLUE_LIGHTEST }],
    };
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        {
          this.props.choices.map((choice) => {
            const finalStyle = this.getStyle(choice.id);
            return (
              <TouchableOpacity
                onPress={() => this.onChange(choice.id)}
                style={finalStyle.container}
                key={choice.id}
              >
                <DoubleSquare
                  linearGradient
                  colorSmallSquare={finalStyle.colorSmallSquare}
                  sizeSmallSquare={15}
                  sizeBigSquare={20}
                  icon={this.state.selectedValues.includes(choice.id)
                    ? <Icon name="check" size={13} color={COLORS.BACKGROUND} />
                    : null
                  }
                />
                <Text style={styles.text}>{choice.value}</Text>
              </TouchableOpacity>
            );
          })
        }
      </View>
    );
  }
}

export default Checkbox;
