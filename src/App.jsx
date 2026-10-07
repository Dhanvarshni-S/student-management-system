import Header from "./Header";
import StudentProfile from "./StudentProfile";
import Footer from "./Footer";

function App() {
  const student1Name = "Anu";
  const student1Department = "CSE";
  const student1Year = "3rd Year";

  const student2Name = "Bala";
  const student2Department = "Computer Science";
  const student2Year = "3rd Year";

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Header />

      <div style={{ width: "90%", maxWidth: "600px" }}>
        <h2>Student 1</h2>

        <StudentProfile
          name={student1Name}
          department={student1Department}
          year={student1Year}
        />

        <h2>Student 2</h2>

        <StudentProfile
          name={student2Name}
          department={student2Department}
          year={student2Year}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;