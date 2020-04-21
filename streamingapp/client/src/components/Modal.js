// Modal Portal 
import React from 'react'; 
import ReactDOM from 'react-dom'; 




const Modal = props => { 
  return ReactDOM.createPortal(
    <div  
    onClick={props.onDismiss}
      className="ui dimmer modals visible active">
        <div 
        // Prevent hide on click for other DIV's
        onClick={(e) => e.stopPropagation()} 
        className="ui standard modal visible active">
          <div className="header">{props.title}</div>
          <div className="content">{props.content} 
          </div>
          <div className="actions">
            {props.actions}
          </div>
        </div>
        {/* Create a new div with id modal in index.html */}
      </div>,
      document.querySelector('#modal')
    )
}


export default Modal; 