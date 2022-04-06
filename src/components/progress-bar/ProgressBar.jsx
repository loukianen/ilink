import './progress-bar.css';

const barAmount = 3;
const barsIndex = Array(barAmount).fill(0).map((item, i) => item + i);

function ProgressBar({activeBar}) {
  return (
    <div className="progrss-bar">
      {barsIndex.map((item) => {
        const isActive = item === activeBar;
        const barClass = isActive ? 'bar active' : 'bar';
        return <div key={item} className={barClass}></div>;
      })}
    </div>
  );
}

export default ProgressBar;
