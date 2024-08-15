import { useSelector } from "react-redux";
import CounterStore from "../Store";
function Display() {
    const value=useSelector(store=>store.counter);
    return (
        <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Count of Counter:{value}. </p>
          </div>
    )
}
export default Display;