import { createContext, useContext, useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../api/api";
import { useAuth } from "./AuthContext";

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const { isAuthenticated } = useAuth();

  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loadTasks = async () => {
    try {
      setIsLoading(true);
      setError("");

      const data = await getTasks();

      setCards(data.tasks);
    } catch (error) {
      setError(error.message || "Не удалось загрузить задачи");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      setCards([]);
      setIsLoading(false);
      setError("");
      return;
    }

    loadTasks();
  }, [isAuthenticated]);

  const addCard = async (task) => {
    const data = await createTask(task);

    setCards(data.tasks);
  };

  const removeCard = async (id) => {
    const data = await deleteTask(id);

    setCards(data.tasks);
  };

  const updateCard = async (id, task) => {
    const data = await updateTask(id, task);

    setCards(data.tasks);
  };

  return (
    <TaskContext.Provider
      value={{
        cards,
        isLoading,
        error,
        loadTasks,
        addCard,
        removeCard,
        updateCard,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
