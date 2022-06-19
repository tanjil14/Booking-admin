import { KeyboardArrowUp } from "@mui/icons-material";
import { widgetChecker } from "../../utils/widgetChecker";
import "./widget.scss";

const Widget = ({ type }) => {
  //temporary
  const amount = 100;
  const diff = 20;
  const data=widgetChecker(type)
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
