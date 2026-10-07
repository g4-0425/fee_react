import React, { useEffect, useRef, useState } from "react";

export function Notes() {
    const titleRef = useRef("");
    const contentRef = useRef("");

    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes");
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    // Stores the ID of the note currently being edited
    const [editingId, setEditingId] = useState(null);

    // Set browser tab title
    useEffect(() => {
        document.title = "Notes App";
    }, []);

    // Save notes whenever notes changes
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    function handleAddNote() {
        if (
            !titleRef.current.value.trim() ||
            !contentRef.current.value.trim()
        ) {
            alert("Please enter both title and content.");
            return;
        }

        // If we are editing an existing note
        if (editingId !== null) {
            const updatedNotes = notes.map((note) => {
                if (note.id === editingId) {
                    return {
                        ...note,
                        title: titleRef.current.value,
                        content: contentRef.current.value,
                    };
                }

                return note;
            });

            setNotes(updatedNotes);

            // Exit edit mode
            setEditingId(null);
        }

        // Otherwise create a new note
        else {
            const newNote = {
                id: Date.now(),
                title: titleRef.current.value,
                content: contentRef.current.value,
            };

            setNotes([...notes, newNote]);
        }

        // Clear input fields
        titleRef.current.value = "";
        contentRef.current.value = "";
    }

    function handleDelete(id) {
        const updatedNotes = notes.filter(
            (note) => note.id !== id
        );

        setNotes(updatedNotes);

        // If deleting the note currently being edited
        if (editingId === id) {
            setEditingId(null);
            titleRef.current.value = "";
            contentRef.current.value = "";
        }
    }

    function handleEdit(note) {
        titleRef.current.value = note.title;
        contentRef.current.value = note.content;

        // Remember which note we are editing
        setEditingId(note.id);
    }

    function handleCancelEdit() {
        titleRef.current.value = "";
        contentRef.current.value = "";
        setEditingId(null);
    }

    return (
        <section className="c1 box">

            {/* Add / Edit Section */}
            <div className="fy box p1 b1 mb1">

                <h3 className="mt1 mb1 fs2">
                    Notes App
                </h3>

                <input
                    ref={titleRef}
                    type="text"
                    placeholder="Enter note topic"
                    spellCheck={false}
                    className="fs1"
                />

                <textarea
                    ref={contentRef}
                    placeholder="Write your note..."
                    spellCheck={false}
                    className="fs1"
                    style={{ height: "7rem" }}
                />

                <button onClick={handleAddNote}>
                    {editingId !== null
                        ? "Update Note"
                        : "Add Note"}
                </button>

                {/* Show Cancel only while editing */}
                {editingId !== null && (
                    <button
                        className="btn1"
                        onClick={handleCancelEdit}
                    >
                        Cancel
                    </button>
                )}
            </div>


            {/* Notes List */}
            <div className="box b1">

                <h3 className="mt1 fs2 mb2">
                    My Notes
                </h3>

                {notes.map((note) => (

                    <div
                        key={note.id}
                        className="box p1 b1 mb1"
                    >

                        <div
                            className="fx"
                            style={{
                                justifyContent: "space-between",
                            }}
                        >

                            <h4
                                className="fs3 mb1"
                                style={{
                                    width: "fit-content",
                                    color: "yellow",
                                }}
                            >
                                Topic: {note.title}
                            </h4>

                            <h4 className="fs1">
                                id: {note.id}
                            </h4>

                        </div>

                        <div className="p1">

                            <p
                                className="fs2"
                                style={{
                                    whiteSpace: "pre-wrap",
                                }}
                            >
                                {note.content}
                            </p>

                            <button
                                className="btn1 mt2"
                                onClick={() => handleEdit(note)}
                            >
                                Edit
                            </button>

                            <span style={{ width: "8.5rem" }}></span>

                            <button
                                onClick={() =>
                                    handleDelete(note.id)
                                }
                            >
                                Delete
                            </button>

                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
}
