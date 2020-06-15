import React, { Component } from 'react';
import { I18nManager } from 'react-native';
import { connect } from 'react-redux';
import { appActionCreators } from '../../store/reducers/appReducer';
import { RootStack, AppContainer, setTopLevelNavigator } from '../../navigator';

interface Props {
    appStop: () => void;
    appStart: () => void;
}

class RootContainerComponent extends Component<Props> {
    constructor(props: Props) {
        super(props);

        // To avoid unexpected app behaviour if user use RTL
        I18nManager.allowRTL(false);
        I18nManager.forceRTL(false);
    }

    componentDidMount() {
        this.props.appStart();
    }

    componentWillUnmount() {
        this.props.appStop();
    }

    render(): React.ReactNode {
        return (
            <AppContainer ref={setTopLevelNavigator}>
                <RootStack />
            </AppContainer>
        );
    }
}

const mapDispatchToProps = {
    appStop: appActionCreators.appStop,
    appStart: appActionCreators.appStart,
};

export const RootContainer = connect(
    undefined,
    mapDispatchToProps,
)(RootContainerComponent);
