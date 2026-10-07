function StudentProfile(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        margin: "15px 0",
        borderRadius: "5px",
      }}
    >
      <h2>{props.name}</h2>
      <p>Department: {props.department}</p>
      <p>Year: {props.year}</p>
    </div>
  );
}

export default StudentProfile;