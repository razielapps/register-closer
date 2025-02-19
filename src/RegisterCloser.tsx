import { useState } from "react";
import "./RegisterCloser.css";

const RegisterCloser: React.FC = () => {
  const [totalAttendance, setTotalAttendance] = useState<string>("");
  const [totalStudents, setTotalStudents] = useState<string>("");
  const [totalDays, setTotalDays] = useState<string>("");
  const [average, setAverage] = useState<number | null>(null);

  const calculateAverage = () => {
    if (!totalAttendance || !totalStudents || !totalDays) {
      alert("Please fill in all fields.");
      return;
    }

    const attendanceValue = parseFloat(totalAttendance);
    const studentsValue = parseFloat(totalStudents);
    const daysValue = parseFloat(totalDays);

    if (isNaN(attendanceValue) || isNaN(studentsValue) || isNaN(daysValue)) {
      alert("Please enter valid numbers.");
      return;
    }

    // Operations
    const full_total = attendanceValue * studentsValue;
    const open_total = daysValue * studentsValue;
    const tastw = full_total * 100;
    const tsots = open_total * studentsValue;
    const result = tastw / tsots;

    setAverage(parseFloat(result.toFixed(1))); // Ensuring a number type with 1 decimal place
  };

  return (
    <div className="container">
      <h1 className="neon-text">Register Closer</h1>
      <div className="form">
        <label>Total Attendance for the Week (Morning Only):</label>
        <input
          type="number"
          value={totalAttendance}
          onChange={(e) => setTotalAttendance(e.target.value)}
          placeholder="Enter total attendance"
        />

        <label>Total Students in Class:</label>
        <input
          type="number"
          value={totalStudents}
          onChange={(e) => setTotalStudents(e.target.value)}
          placeholder="Enter total students"
        />

        <label>Total School Open Days in the Week:</label>
        <input
          type="number"
          value={totalDays}
          onChange={(e) => setTotalDays(e.target.value)}
          placeholder="Enter total school days"
        />

        <button onClick={calculateAverage}>Calculate Average</button>

        {average !== null && (
          <div className="result">
            <h2>Average Attendance: {average}%</h2>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>MADE WITH LOVE BY <span className="highlight">UNCLE CONSCIENCE</span></p>
        <p>DEDICATED TO <span className="highlight">CHRIST LIBERATION ACADEMY</span></p>
      </footer>
    </div>
  );
};

export default RegisterCloser;