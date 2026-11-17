
return (
    <div className="student-page">

        <nav className="student-nav">
            <h2>Student Management</h2>

            <button className="bg20 b1" onClick={() => navigate("/")}>
                Logout
            </button>
        </nav>

        <main className="student-content">

            <div className="student-heading">
                <h1>Student Dashboard</h1>
                <p>Manage your student records easily.</p>
            </div>

            <form onSubmit={saveStudent} className="student-form">
                <h2>{editId ? "Update Student" : "Add Student"}</h2>

                {/* Keep your existing name, email and age inputs here */}

                <button type="submit" className="bg50">
                    {editId ? "Update Student" : "Add Student"}
                </button>

                {editId && (
                    <button type="button" className="bg30" onClick={clearForm}>
                        Cancel
                    </button>
                )}
            </form>

            <section className="student-list">
                <h2>All Students ({students.length})</h2>

                <input
                    className="student-search"
                    type="text"
                    placeholder="Search student by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* Keep your existing loading and table logic here */}

                <div className="student-table-wrapper">
                    <table className="student-table">
                        {/* Keep your existing thead and tbody here */}
                    </table>
                </div>
            </section>

        </main>
    </div>
);
