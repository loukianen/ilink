import { createContext, useState } from "react";
import DefaultWindow from "./default-window/DefaultWindow";

const windowStyle = {
  position: 'absolute',
  top: '0',
}

const defaultBlurValue = '4px';

export const PopUpContext = createContext();
PopUpContext.displayName = 'popUpContext';

const PopUpWindowProvider = (props) => {
  const [windowState, setWindowState] = useState('closed');
  const [blurValue, setBlurValue] = useState(defaultBlurValue);

  const initComponentData = { component: DefaultWindow, componentProps: { onClose: resetOptions } };
  const [componentData, setComponentData] = useState(initComponentData);
  
  const display = windowState !== 'open' ? 'none': 'block';
  const currrentBlurValue = windowState !== 'open' ? '0': blurValue;

  const renderImportedComponent = (component, componentProps = {}, blurValue) => {
    if (blurValue) {
      setBlurValue(blurValue);
    }
    if (typeof component === 'string') {
      setComponentData({ component: DefaultWindow, componentProps: { onClose: resetOptions, text: component } });
    } else {
      setComponentData({ component, componentProps });
    }
    setWindowState('open');
  };

  function resetOptions() {
    setComponentData(initComponentData);
    setWindowState('closed');
  }

  const handleBackgroundClick = (evt) => {
    if (windowState === 'open') {
      evt.stopPropagation();
    }
  };

  const {component: Component, componentProps} = componentData;
  return (
    <PopUpContext.Provider value={{onShow: renderImportedComponent, onClose: resetOptions}}>
      <div style={{filter: `blur(${currrentBlurValue})`}} onClickCapture={handleBackgroundClick}>
        {props.children}
      </div>
      <div style={{...windowStyle, display }} id="popUpWinowWrapper">
        <Component {...componentProps} />
      </div>
    </PopUpContext.Provider>
  )
};

export default PopUpWindowProvider;
