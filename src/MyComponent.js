import PropTypes from "prop-types";

// const MyComponent = props => {
//     const {name, favoriteNumber, children} = props;
//     return (
//         <>
//             <div>나의 새롭고 멋진 컴포넌트 {name} {children} </div>
//         </>
//     );
// };
//
// MyComponent.defaultProps = {
//     name: 'name'
// }
//
// MyComponent.propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired
// }
//
// export default MyComponent;

import React, {Component} from 'react';

class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름',
    }

    render() {
         const { name, favoriteNumber, children } = this.props;
         return(
             <div>
                 <>
                     <div>나의 새롭고 멋진 컴포넌트 {name} {children} </div>
                 </>
             </div>
         )
    }
}

export default MyComponent;