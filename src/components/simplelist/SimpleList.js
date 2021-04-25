import ItemCell from "../Itemcell/ItemCell";
import "./SimpleList.css";

function SimpleList({ data, isGrid }) {
  const classNameList = isGrid ? "custom-grid-list" : "custom-list";
  return (
    <div class="custom">
      <ul class={classNameList}>
        {data.map((item, i) => (
          <ItemCell description={item} />
        ))}
      </ul>
    </div>
  );
}

export default SimpleList;
