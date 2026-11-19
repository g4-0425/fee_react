
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStudentStore } from "./useStudentStore";

export default function StudentsApp() {
    const navigate = useNavigate();

    const { students, getRecords, deleteRecord } = useStudentStore();

    useEffect(() => {
        getRecords();
    }, [getRecords]);

    function updateRecord(id) {
        navigate(`/update/${id}`);
    }

    return (
        <div className="hf bg20">
            <nav className="bg50 fxc jsb p3">
                <div>LOGO</div>

                <button onClick={() => navigate("/")}>
                    Logout
                </button>
            </nav>

            <div className="p2" style={{ width: "800px", maxWidth: "100%" }}>
                <h1>Student Dashboard</h1>

                <div
                    className="fx p1 b1 br2 bg72"
                    style={{ textAlign: "center", color: "white" }}
                >
                    Total Students: {students.length}
                </div>

                {/* <button
                    className="bg50 btn1"
                    onClick={() => navigate("/add")}
                >
                    Add Student
                </button> */}

                <h2>All Students</h2>

                <div className="fx p1 bg50 br2">
                    <span style={{ flex: 1 }}>Section</span>
                    <span style={{ flex: 1 }}>ID</span>
                    <span style={{ flex: 2 }}>Name</span>
                    <span style={{ flex: 1 }}>Marks</span>
                    <span style={{ flex: 2 }}>Actions</span>
                </div>

                {students.length === 0 ? (
                    <p style={{ textAlign: "center", color: "white" }}>
                        No students found. Please add a student.
                    </p>
                ) : (
                    students.map((student) => (
                        <div
                            key={student.id}
                            className="fx p1 bg71 br2 mt1"
                            style={{ alignItems: "center", textAlign: "center" }}
                        >
                            <span style={{ flex: 1 }}>{student.section}</span>

                            <span style={{ flex: 1 }}>{student.id}</span>

                            <div style={{ flex: 2 }}>
                                {student.name}
                            </div>

                            <span style={{ flex: 1 }}>{student.marks}</span>

                            <div className="fx" style={{ flex: 2, gap: "5px" }}>
                                <button
                                    onClick={() => updateRecord(student.id)}
                                    className="bg50 btn1"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => deleteRecord(student.id)}
                                    className="bg30 btn1"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
