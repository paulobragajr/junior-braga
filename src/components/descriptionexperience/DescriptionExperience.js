import SimpleList from "../simplelist/SimpleList";
import "./DescriptionExperience.css";

function DescriptionExperience({ experience }) {
  const {
    positionInCompany,
    admissionDate,
    locality,
    description,
  } = experience;
  return (
    <div>
      <text className="title">{positionInCompany}</text>
      <br />
      <text className="txt_info detail">{admissionDate}</text>
      <br />
      <text className="txt_detail detail ">{locality}</text>
      <hr />
      <br />

      <SimpleList data={description.data} isGrid={description.isGrid} />
    </div>
  );
}

export default DescriptionExperience;
