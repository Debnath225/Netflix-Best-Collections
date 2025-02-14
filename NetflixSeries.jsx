import seriesData from "SeriesData.json";
import { SeriseCard } from "SeriseCard";
const NetflixSeries = () => {
  return (
    <ul className="grid grid-three--cols">
      {seriesData.map((curElem) => (
        <SeriseCard data={curElem} key={curElem.id} />
      ))}
    </ul>
  );
};

export default NetflixSeries;
