
import { create } from "zustand";
import { toast } from "react-toastify";
import { supabase } from "./supabaseClient";

export const useStudentStore = create((set) => ({
    students: [],

    // Get all student records
    getRecords: async () => {
        try {
            const { data, error } = await supabase
                .from("students")
                .select("*")
                .order("id", { ascending: true });

            if (error) throw error;

            set({ students: data });

        } catch (err) {
            toast.error(err.message || "Action failed...");
        }
    },

    // Add student record
    addRecord: async (newStudent) => {
        try {
            const { data, error } = await supabase
                .from("students")
                .insert([newStudent])
                .select();

            if (error) throw error;

            set((store) => ({
                students: [...store.students, ...data],
            }));

            toast.success("Student added successfully!");

            return true;

        } catch (err) {
            toast.error(err.message || "Unable to add student");
            return false;
        }
    },

    // Update student record
    updateRecord: async (id, updatedStudent) => {
        try {
            const { data, error } = await supabase
                .from("students")
                .update(updatedStudent)
                .eq("id", id)
                .select();

            if (error) throw error;

            set((store) => ({
                students: store.students.map((student) =>
                    student.id === id ? data[0] : student
                ),
            }));

            toast.success("Student updated successfully!");

            return true;

        } catch (err) {
            toast.error(err.message || "Unable to update student");
            return false;
        }
    },

    // Delete student record
    deleteRecord: async (id) => {
        try {
            const { error } = await supabase
                .from("students")
                .delete()
                .eq("id", id);

            if (error) throw error;

            set((store) => ({
                students: store.students.filter(
                    (student) => student.id !== id
                ),
            }));

            toast.success("Student removed successfully!");

        } catch (err) {
            toast.error(err.message || "Action failed...");
        }
    },
}));
