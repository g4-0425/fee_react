
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStudentStore } from "./useStudentStore";

export default function StudentsApp() {
    const navigate = useNavigate();

    const { students, getRecords, deleteRecord } = useStudentStore();

    useEffect(() => {
        getRecords();
    }, [getRecords]);

    function addStudent() {
        navigate("/add");
    }

    function updateStudent(id) {
        navigate(`/update/${id}`);
    }

    function removeStudent(id) {
        deleteRecord(id);
    }

    return (
        <div className="hf bg20">

            <nav className="bg50 fxc jsb p3">
                <div>LOGO</div>

                <button className="bg10" onClick={() => navigate("/")}>
                    Logout
                </button>
            </nav>

            <div className="p2" style={{ maxWidth: "1000px" }}>

                <h1>Student Dashboard</h1>

                <div className="p2 b1 br2 bg72 mt1 mb1">
                    Total Students: {students.length}
                </div>

                <button className="bg50 btn1 mb2" onClick={addStudent}>
                    Add Student
                </button>

                <h2 className="mb1">All Students</h2>

                <div className="student-header bg50 br2">
                    <span>Section</span>
                    <span>ID</span>
                    <span>Name</span>
                    <span>Marks</span>
                    <span>Actions</span>
                </div>

                {students.length === 0 ? (
                    <p className="p2">No students found. Please add a student.</p>
                ) : (
                    students.map((student) => (
                        <div className="student-row bg71 br2" key={student.id}>

                            <span>{student.section}</span>
                            <span>{student.id}</span>
                            <span>{student.name}</span>
                            <span>{student.marks}</span>

                            <div className="actions">
                                <button
                                    className="bg50 btn1"
                                    onClick={() => updateStudent(student.id)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="bg30 btn1"
                                    onClick={() => removeStudent(student.id)}
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
