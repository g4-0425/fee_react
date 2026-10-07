import React, { useEffect, useRef, useState } from "react";

export function Notes() {
    const titleRef = useRef("");
    const contentRef = useRef("");

    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes");
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    useEffect(() => {
        document.title = "Notes App";
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    function handleAddNote() {
        if (!titleRef.current.value || !contentRef.current.value) {
            alert("Please enter both title and content.");
            return;
        }

        const newNote = {
            id: Date.now(),
            title: titleRef.current.value,
            content: contentRef.current.value,
        };

        setNotes([...notes, newNote]);

        titleRef.current.value = "";
        contentRef.current.value = "";
    }

    function handleDelete(id) {
        const updatedNotes = notes.filter(
            (note) => note.id !== id
        );

        setNotes(updatedNotes);
    }

    function handleEdit(note) {
        titleRef.current.value = note.title;
        contentRef.current.value = note.content;
    }

    return (
        <section className="c1 box">
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
                    Add Note
                </button>
            </div>

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
                        <p className="fs2" style={{whiteSpace:"pre-wrap"}}>{note.content}</p>
                        <button className="btn1 mt2"
                            onClick={() => handleEdit(note)}
                        >
                            Edit
                        </button>
<span style={{width:"8.5rem"}}></span>
                        <button
                            onClick={() => handleDelete(note.id)}>
                            Delete
                        </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}