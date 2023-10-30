import { useState } from 'react';
import Layout from './components/Layout/Layout';
import Popup from './components/Popup/Popup';

function App() {
  const [isShowPopup, setIsShowPopup] = useState(true);

  const handleOnConfirm = () => {
    setIsShowPopup(false);
  };

  const handleOnClose = () => {
    alert("You cannot close the window programmatically due to browser restrictions. Please use the browser's close button.");
  };

  return (
    <div>
      {isShowPopup && (
        <Popup className="" onConfirm={handleOnConfirm} onClose={handleOnClose} />
      )}
      <Layout isShowPopup={isShowPopup} />
    </div>
  );
}

export default App
