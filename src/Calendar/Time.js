import "./Time.css";

const Time = (props) => {
  console.log(props);
  const time = [
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "07:00 PM",
    "07:30 PM",
    "08:00 PM",
    "08:30 PM",
    "09:00 PM",
    "09:30 PM",
    "10:30 PM",
    "11:00 PM",
  ];
  return (
    <div className="section">
      <table>
        <tbody>
        <tr><td>
        <div className="day">
          <h3>{props.day}</h3> <span>{props.date}</span>
        </div>
        </td>
        <td>
        <div className="time">
          {time.map((t) => (
            <div>
              {props.time === t ? (
                <div>
                  <input type="checkbox" checked />
                  <label>{t}</label>
                </div>
              ) : (
                <div>
                  <input type="checkbox" unchecked />
                  <label>{t}</label>
                </div>
              )}
            </div>
          ))}
        </div>
        </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Time;
