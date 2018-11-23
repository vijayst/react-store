import React, { useContext, useMemo } from 'react';
import StoreContext from './StoreContext';

export default function connect(mapStateToProps, component) {
    return function(props) {
        const context = useContext(StoreContext);
        const moreProps = mapStateToProps(context);
        const newProps = Object.assign({}, props, moreProps);
        return useMemo(() => component(newProps), Object.values(newProps));
    };
}