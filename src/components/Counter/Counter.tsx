import { CSSProperties } from "react";
import CounterStyled from "./Counter.styled";

interface Props {
  styles: CSSProperties;
}

const Counter = ({ styles }: Props) => (
  <CounterStyled style={styles}>
    <li className="counter__field">
      <span className="counter__digit">02</span> days
    </li>
    <li className="counter__field">
      <span className="counter__digit">20</span> hours
    </li>
    <li className="counter__field">
      <span className="counter__digit">34</span> minutes
    </li>
    <li className="counter__field">
      <span className="counter__digit">09</span> seconds
    </li>
  </CounterStyled>
);

export default Counter;
