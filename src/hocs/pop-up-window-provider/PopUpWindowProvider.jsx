import { createContext, useState } from "react";
import DefaultWindow from "./default-window/DefaultWindow";

const windowStyle = {
  position: 'absolute',
  top: '0',
  marginTop: '50vh',
  marginLeft: '50vw',
}

const defaultBlurValue = '4px';

export const PopUpContext = createContext();
PopUpContext.displayName = 'popUpContext';

const PopUpWindowProvider = (props) => {
  const [display, setDisplay] = useState('none');
  const [blurValue, setBlurValue] = useState(defaultBlurValue);

  const initComponentData = { component: DefaultWindow, componentProps: { onClose: resetOptions } };
  const [componentData, setComponentData] = useState(initComponentData);
  
  const currrentBlurValue = display === 'none' ? '0': blurValue;

  const renderImportedComponent = (component, componentProps = {}, blurValue) => {
    if (blurValue) {
      setBlurValue(blurValue);
    }
    if (typeof component === 'string') {
      setComponentData({ component: DefaultWindow, componentProps: { onClose: resetOptions, text: component } });
    } else {
      setComponentData({ component, componentProps });
    }
    setDisplay('block');
  };

  function resetOptions() {
    setComponentData(initComponentData);
    setDisplay('none');
  }

  const handleBackgroundClick = (evt) => {
    if (display !== 'none') {
      evt.stopPropagation();
    }
  };

  const {component, componentProps} = componentData;
  return (
    <PopUpContext.Provider value={{onShow: renderImportedComponent, onClose: resetOptions}}>
      <div style={{filter: `blur(${currrentBlurValue})`}} onClickCapture={handleBackgroundClick}>
        {props.children}
      </div>
      <div style={{...windowStyle, display }}>{component(componentProps)}</div>
    </PopUpContext.Provider>
  )
};

export default PopUpWindowProvider;
