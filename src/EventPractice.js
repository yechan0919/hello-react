// // import React from 'react';
// //
// // const EventPractice = () => {
// //     return (
// //         <div>
// //             <h2>이벤트 연습</h2>
// //             <input
// //                 type={"text"}
// //                 name={"message"}
// //                 placeholder={"아무거나"}
// //                 onChange={(e) => {
// //                     console.log(e.target.value)
// //                 }}
// //             />
// //         </div>
// //     );
// // };
// //
// // export default EventPractice;
//
// import React, {Component} from 'react';
//
// class EventPractice extends Component {
//
//     state = {
//         message: ''
//     }
//
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this)
//         this.handleChange = this.handleChange.bind(this)
//     }
//
//     handleChange1 = (e) => {
//         this.setState({
//             message: e.target.value
//         })
//     }
//
//     handleChange(e) {
//         this.setState({
//             message: e.target.value
//         })
//     }
//
//     handleClick1 = (e) => {
//         alert(this.state.message)
//         this.setState({
//             message: ''
//         })
//     }
//
//     handleClick(e) {
//         alert(this.state.message)
//         this.setState({
//             message: ''
//         })
//     }
//
//
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.message}</h1>
//                 <input
//                     name={"message"}
//                     type={"text"}
//                     placeholder={"아무거나 입력해 보세요"}
//                     value={this.state.message}
//                     onChange={this.handleChange}
//                 />
//                 <button onClick={this.handleClick}>
//                     확인
//                 </button>
//             </div>
//         );
//     }
// }
//
// export default EventPractice;

import React, {useState} from 'react';

const EventPractice = () => {
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('')

    const [form, setForm] = useState({
        username: '',
        message: ''
    })

    const onClickForm = () => {
        setForm({
            username: '',
            message: ''
        })
    }

    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(nextForm)
    }

    const onChangeUsername = e => setUsername(e.target.value)
    const onChangeMessage = e => setMessage(e.target.value)
    const onClick = () => {
        alert(username + ': ' + message);
        setUsername('')
        setMessage('')
    }

    const onKeyPress = e => {
        if(e.key === 'Enter'){
            onClick()
        }
    }

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type={"text"}
                name={"username"}
                placeholder={"사용자명"}
                value={username}
                onChange={onChangeUsername}
            />
            <input
                type={"text"}
                name={"message"}
                placeholder={"아무거나 입력해보세요"}
                value={message}
                onChange={onChangeMessage}
                onKeyDown={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;