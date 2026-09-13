import { createContext, useContext, useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../api/api";
import { useAuth } from "./AuthContext";

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const { isAuthenticated } = useAuth();

  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [skeletonCards, setSkeletonCards] = useState([]);

  const loadTasks = async () => {
    try {
      setIsLoading(true);
      setError("");

      // Запоминаем текущие карточки перед новым запросом.
      // Они будут использоваться для skeleton loader.
      if (cards.length > 0) {
        setSkeletonCards(cards);
      }

      const data = await getTasks();

      setCards(data.tasks);
      setSkeletonCards(data.tasks);
    } catch (error) {
      setError(error.message || "Не удалось загрузить задачи");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      setCards([]);
      setSkeletonCards([]);
      setIsLoading(false);
      setError("");
      return;
    }

    loadTasks();
  }, [isAuthenticated]);

  const addCard = async (task) => {
    const data = await createTask(task);

    setCards(data.tasks);
    setSkeletonCards(data.tasks);
  };

  const removeCard = async (id) => {
    const data = await deleteTask(id);

    setCards(data.tasks);
    setSkeletonCards(data.tasks);
  };

  const updateCard = async (id, task) => {
    const data = await updateTask(id, task);

    setCards(data.tasks);
    setSkeletonCards(data.tasks);
  };

  return (
    <TaskContext.Provider
      value={{
        cards,
        isLoading,
        error,
        skeletonCards,
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