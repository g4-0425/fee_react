
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStudentStore } from "./useStudentStore";

export default function AddForm() {
    const navigate = useNavigate();
    const { addRecord } = useStudentStore();

    const [formData, setFormData] = useState({
        roll_number: "",
        name: "",
        section: "",
        marks: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const studentData = {
            ...formData,
            marks: Number(formData.marks),
        };

        const result = await addRecord(studentData);

        if (result) {
            navigate("/login");
        }
    };

    return (
        <div className="add-form-container bg20">

            <form onSubmit={handleSubmit} className="add-form-box">

                <h2>Add Student Record</h2>

                <button
                    type="button"
                    className="bg31 btn1"
                    onClick={() => navigate("/login")}
                    style={{ alignSelf: "flex-end" }}
                >
                    Cancel
                </button>

                <div>
                    <label>Roll Number</label>
                    <input
                        type="text"
                        placeholder="Enter Roll Number"
                        name="roll_number"
                        value={formData.roll_number}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Section</label>
                    <input
                        type="text"
                        placeholder="Enter Section"
                        name="section"
                        value={formData.section}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Marks</label>
                    <input
                        type="number"
                        placeholder="Enter Marks"
                        name="marks"
                        value={formData.marks}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="bg50 btn2">
                    Add Student
                </button>

            </form>
        </div>
    );
}
