
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStudentStore } from "./useStudentStore";

export default function UpdateForm() {
    const navigate = useNavigate();
    const { id } = useParams();

    const { students, getRecords, updateRecord } = useStudentStore();

    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        roll_number: "",
        name: "",
        section: "",
        marks: "",
    });

    useEffect(() => {
        if (students.length === 0) {
            getRecords();
        }
    }, [students.length, getRecords]);

    useEffect(() => {
        const currentstudent = students.find(
            (s) => String(s.id) === id
        );

        if (currentstudent) {
            setFormData({
                roll_number: currentstudent.roll_number,
                name: currentstudent.name,
                section: currentstudent.section,
                marks: currentstudent.marks,
            });
        }
    }, [students, id]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        try {
            const studentData = {
                ...formData,
                marks: Number(formData.marks),
            };

            const result = await updateRecord(Number(id), studentData);

            if (result) {
                navigate("/login");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="hf fyc p3 bg71"
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
            }}
        >
            <h2>Update Student Record</h2>

            <form
                onSubmit={handleSubmit}
                className="fy bg70 p4 br2"
                style={{ width: "275px" }}
            >
                <button
                    type="button"
                    className="bg31"
                    onClick={() => navigate("/login")}
                    style={{
                        marginLeft: "auto",
                        display: "block",
                    }}
                >
                    Cancel
                </button>

                <div className="form-group">
                    <label>Roll Number</label>
                    <input
                        type="text"
                        placeholder="Roll Number"
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
                        placeholder="Section"
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
                        placeholder="Name"
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
                        placeholder="Marks"
                        name="marks"
                        value={formData.marks}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg50 mt2"
                >
                    {isLoading ? "Updating..." : "Update Record"}
                </button>
            </form>
        </div>
    );
}
