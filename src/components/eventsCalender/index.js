
import {  Calendar, Badge  } from 'antd';
import './style.css';

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 2:
      listData = [
        { type: 'warning', content: 'Music' },
        { type: 'success', content: 'Will Heard' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'Music' },
        { type: 'success', content: 'Adam Lasher' },
      
      ];
      break;
    case 28:
      listData = [
        { type: 'warning', content: 'StandUp Comedy' },
        { type: 'success', content: 'Peter Russell' },
        { type: 'success', content: '9PM-10PM' }
  
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

export default function CalendarInfo() {

    return(
<Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />

    )
}

// ReactDOM.render(<ComponentDemo />, mountNode);
