import { CSSProperties } from "react";
import useCountdown from "../../store/hooks/useCountdown";
import { endOfTheWorld } from "../../utils/dates";
import CounterStyled from "./Counter.styled";

interface Props {
  styles: CSSProperties;
}

const Counter = ({ styles }: Props) => {
  const { counter } = useCountdown(endOfTheWorld);

  return (
    <>
      {counter && (
        <CounterStyled style={styles}>
          <li className="counter__field">
            <span className="counter__digit">{counter.days}</span> days
          </li>
          <li className="counter__field">
            <span className="counter__digit">{counter.hours}</span> hours
          </li>
          <li className="counter__field">
            <span className="counter__digit">{counter.minutes}</span> minutes
          </li>
          <li className="counter__field">
            <span className="counter__digit">{counter.seconds}</span> seconds
          </li>
        </CounterStyled>
      )}
    </>
  );
};

export default Counter;
