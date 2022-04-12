import './file-loading.css';

function FileLoading(props) {

  return (
    <div className="file-loading_input-wrapper">
      <img className="file-loading_jpg-icon" src="img/jpg-icon.png" alt="jpg-icon" />
      <div className="file-loading_info-wrapper">
        <div className="file-loading_file-name">Photo 01-02-2021=20-33</div>
        <div className="file-loading_progress-bar">
          <div className="file-loading_progress-bar__loaded"></div>
          <div className="file-loading_progress-bar__rest"></div>
        </div>
      </div>
      <img src="img/spiner-icon.png" alt="spiner" className="file-loading_spiner" hidden />
      <div className="file-loading_pail"></div>
    </div>
  );
}

export default FileLoading;
