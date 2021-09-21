import reactDom from 'react-dom';
import Button from '../UI/Button/Button';
import './Modal.scss'

const Modal = ({ header, children, icon, testid }) => {
  let iconClass = '';
  icon === 'error' ? iconClass = 'far fa-times-circle' : iconClass = 'far fa-check-circle';

  const CloseModal = () => {
    reactDom.render('', document.getElementById('modal'));
  }

  return (
    <div data-testid={testid}>
      <div className="modal">
        <i className={iconClass}></i>
        <div>
          <p className="msg">{header}</p>
          <p>{children}</p>
        </div>
        <Button
          variant="primary"
          onClick={CloseModal}
          children="ok" >
        </Button>
      </div>
      <div className="overlay"></div>
    </div>
  )
}

export default Modal;
