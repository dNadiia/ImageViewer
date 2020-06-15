import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/reducers';
import { getProgressViewModel, ProgressViewModel } from './selectors';
import { ProgressView } from '../../common/components/ProgressView';

const ProgressViewComponent = ({ isLoading }: ProgressViewModel) => (
    <ProgressView isLoading={isLoading} />
);

const mapStateToProps = (state: RootState) => getProgressViewModel(state);

export const RootProgressView = connect(
    mapStateToProps,
    {},
)(ProgressViewComponent);
