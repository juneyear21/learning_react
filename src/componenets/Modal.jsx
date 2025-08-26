import ReactDOM from "react-dom";

const Modal = ({children}) => {
  return ReactDOM.createPortal(

    <div style={{
      position: 'fixed',
      top: '40%',
      left: '40%',
      background: 'white',
      padding: '20px',
      border: '2px solid black'
    }}>{children}</div>,
    document.getElementById("root-portal")
  );
};

export default Modal