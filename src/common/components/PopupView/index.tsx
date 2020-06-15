import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { colors } from '../../themes';
import { styles } from './styles';

interface Props {
    message: string;
    backgroundColor?: string;
    onModalHide?: () => void;
}

interface State {
    isVisible: boolean;
}

export class PopupView extends Component<Props, State> {
    private closeTimeInterval: any;
    constructor(props: Props) {
        super(props);
        this.state = {
            isVisible: false,
        };
    }

    componentWillUnmount() {
        clearInterval(this.closeTimeInterval);
    }

    public show = () => {
        this.setState({ isVisible: true });
        clearInterval(this.closeTimeInterval);
        this.closeTimeInterval = setInterval(
            () => this.setState({ isVisible: false }),
            3000,
        );
    };

    _onCancel = () => this.setState({ isVisible: false });

    _onModalHide = () => {
        clearInterval(this.closeTimeInterval);
        this.props.onModalHide && this.props.onModalHide();
    };

    render(): React.ReactNode {
        const state = this.state;
        const { message, backgroundColor } = this.props;

        return (
            <Modal
                style={styles.modal}
                isVisible={state.isVisible}
                backdropOpacity={0.5}
                backdropColor={colors.black}
                swipeDirection={'up'}
                animationIn={'slideInDown'}
                animationOut={'slideOutUp'}
                onBackButtonPress={this._onCancel}
                onBackdropPress={this._onCancel}
                onSwipeComplete={this._onCancel}
                onModalHide={this._onModalHide}
            >
                <View style={[styles.container, { backgroundColor }]}>
                    <View style={styles.content}>
                        <Text style={styles.text}>{message}</Text>
                    </View>
                </View>
            </Modal>
        );
    }
}
