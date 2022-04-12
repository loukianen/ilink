import { useCallback, useEffect } from 'react';
import './file-loading.css';

const MAX_PROGRESS = 100;
const warningFileMessage = 'Your file is too big!';

const getFileInfo = (files, loadingState) => {
  if (loadingState === 'failed') {
    return warningFileMessage;
  }
  return files[0].name;
};

function FileLoading(props) {
  const { loadingState, files, onCancelChoosingFile, onSetFileLoadingState } = props;
  const fileInfo = getFileInfo(files, loadingState);
  const spinerVisibilityClass = loadingState === 'started' ? '' : ' hidden';
  const pailVisibilityClass = loadingState === 'finished' || loadingState === 'failed' ? '' : ' hidden';
  const fileInfoClass = loadingState === 'failed' ? ' warning' : '';
  const progressBarClass = loadingState === 'failed' ? ' warning' : '';

  const handlePailClick = () => {
    onCancelChoosingFile();
  }

  const startProgressBarAnimation = useCallback(() => {
    const progressbar = document.getElementById('file-loading_progress-bar');
    const intervalId = setInterval(tick, 10);
    function tick() {
      if (progressbar.value >= progressbar.max) {
        onSetFileLoadingState('finished');
        clearInterval(intervalId);
      }
      progressbar.value = progressbar.value + 1;
    }
  }, [onSetFileLoadingState]);

  useEffect(() => {
    if (loadingState === 'started') {
      startProgressBarAnimation();
    }
  }, [loadingState, startProgressBarAnimation]);

  return (
    <div className="file-loading_input-wrapper">
      <img className="file-loading_jpg-icon" src="img/jpg-icon.png" alt="jpg-icon" />
      <div className="file-loading_info-wrapper">
        <div className={`file-loading_file-info${fileInfoClass}`}>{fileInfo}</div>
        <progress className={`file-loading_progress-bar${progressBarClass}`} id="file-loading_progress-bar" value="0" max={MAX_PROGRESS}></progress>
      </div>
      <img src="img/spiner-icon.png" alt="spiner" className={`file-loading_spiner${spinerVisibilityClass}`} />
      <div className={`file-loading_pail${pailVisibilityClass}`} onClick={handlePailClick}></div>
    </div>
  );
}

export default FileLoading;
