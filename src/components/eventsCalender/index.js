
import {  Calendar, Badge  } from 'antd';
import './style.css';

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 12:
      listData = [
        { type: 'warning', content: 'Music' },
        { type: 'success', content: 'Will Heard' },
        { type: 'success', content: '6:00PM-9:00PM' }

      ];
      break;
    case 13:
      listData = [
        { type: 'warning', content: 'Music' },
        { type: 'success', content: 'Adam Lasher' },
        { type: 'success', content: '6:30PM-9:30PM' }
      
      ];
      break;
    case 14:
      listData = [
        { type: 'warning', content: 'Music' },
        { type: 'success', content: 'Lauren Black' },
        { type: 'success', content: '6:30PM-9:30PM' }
  
      ];
      break;
      case 18:
        listData = [
          { type: 'warning', content: 'Music' },
          { type: 'success', content: 'Roderick C' },
          { type: 'success', content: '6:00PM-9:00PM' }
    
        ];
        break;
        case 20:
          listData = [
            { type: 'warning', content: 'Music' },
            { type: 'success', content: 'Kai Kalama' },
            { type: 'success', content: '6:30PM-9:30PM' }
      
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
