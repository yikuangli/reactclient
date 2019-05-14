import React from 'react';
import ReactDOM from 'react-dom';

// class Modal extends React.Component {
//     render() {
//         return ReactDOM.createPortal(
//             <div onClick={()=>history.push('/')} className="ui dimmer modals visible active">
//                 <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
//                     <div className="header">Delete Stream</div>
//                     <div className="content">hi</div>
//                     <div className="actions">
//                         <button className="ui primary button">Yes</button>
//                         <button className="ui button">Cancel</button>
//                         </div>
//                 </div>
//             </div>, document.querySelector('#modal')
//         )
//     }
// }
const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>, document.querySelector('#modal')
    )
}

export default Modal;