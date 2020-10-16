import ReactDOM from 'react-dom';

function MusicPortal({ children }) {
  const el = document.getElementById('modal');
  return ReactDOM.createPortal(children, el);
}

export default MusicPortal;
