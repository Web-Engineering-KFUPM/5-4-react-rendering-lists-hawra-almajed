// src/components/CourseCard.jsx
import TaskItem from "./TaskItem";

export default function CourseCard({ course, index, onMutateCourse }) {
  /* =========================================================
     TASK 4 — Interactivity (Toggle + Delete ONLY)
     ---------------------------------------------------------
     1) Implement toggleTask(id) using onMutateCourse + .map()
     2) Implement deleteTask(id) using onMutateCourse + .filter()
     ========================================================= */

  function toggleTask(id) {
      onMutateCourse(index, (task) =>
        tasks.map((t) => 
          t.id === id ? { ...t, isDone: !t.isDone } : t
        )
      );
  }

  function deleteTask(id) {
    // TODO (TASK 4): remove the task with matching id
    onMutateCourse(index, (t) =>
      tasks.filter((t) => t.id !== id)
  );
  }


  return (
    <article className="course card">
      <header className="cardHeader">
        <h2>{course.title}</h2>

        {course.tasks.length > 0 && 
          course.tasks.every((t) => t.isDone) && (
            <span className="badge success">All caught Up</span>
          )
        }
      </header>

      <section className="tasksSection">

        {/* DISPLAY ONLY: Show a message when there are no tasks */}
        
        <ul className="tasks">
          {
            course.tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))
          }
        </ul>
      </section>
    </article>
  );
}