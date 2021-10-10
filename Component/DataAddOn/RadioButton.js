import React from "react";
import RadioButtonRN from "radio-buttons-react-native";
import { StyleSheet, View, Text } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";


class RadioButton extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
        res:'',
        example: 1
    };

    this.colors = [
        {
            label: 'For 01 Day                      Rs.100.00'
        },
        {
            label: 'For 07 Day                      Rs.130.00'
        },
        {
            label: 'For 21 Day                      Rs.200.00'
        }
    ];

    this._renderRadioBtn = this._renderRadioBtn.bind(this);
}

    handleDay = (value) => {
        this.setState({res:value})
    }

_renderRadioBtn() {
    let {example} = this.state;
    if (example === 1) {
        return (
            <RadioButtonRN
                data={this.colors}
                selectedBtn={this.handleDay}
                circleSize={16}
            />
        )
    }
}
    render()
    {
        return (
            <View>
                <View style={styles.container1}>
                    {this._renderRadioBtn()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container1: {
        top: hp('26%'),
        width: wp('90%'),
        flex: 4
    }
});

export default RadioButton;
