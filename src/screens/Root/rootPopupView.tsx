import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { appActionCreators } from '../../store/reducers/appReducer';
import { PopupView } from '../../common/components/PopupView';
import { RootState } from '../../store/reducers';
import { getPopupViewModel, PopupViewModel } from './selectors';

interface Props extends PopupViewModel {
    handleErrorMessage: () => void;
    handleInformMessage: () => void;
}

const PopupViewComponent = ({
    errorMessage,
    informMessage,
    backgroundColor,
    handleInformMessage,
    handleErrorMessage,
}: Props) => {
    const popupInformRef = useRef<PopupView>(null);

    useEffect(() => onShowPopup(), [errorMessage, informMessage]);

    const onShowPopup = () => {
        if (errorMessage || informMessage) {
            popupInformRef?.current?.show();
        }
    };

    const onModalHide = () => {
        errorMessage && handleErrorMessage();
        informMessage && handleInformMessage();
    };

    return (
        <PopupView
            ref={popupInformRef}
            message={errorMessage || informMessage || ''}
            onModalHide={onModalHide}
            backgroundColor={backgroundColor}
        />
    );
};

const mapStateToProps = (state: RootState) => getPopupViewModel(state);

const mapDispatchToProps = {
    handleErrorMessage: appActionCreators.handleErrorMessage,
    handleInformMessage: appActionCreators.handleInformMessage,
};

export const RootPopupView = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PopupViewComponent);
