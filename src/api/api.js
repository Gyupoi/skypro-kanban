const API_URL = "https://wedev-api.sky.pro/api/kanban";
const USER_API_URL = "https://wedev-api.sky.pro/api/user";

const getToken = () => {
  return localStorage.getItem("token");
};

const getAuthHeaders = () => {
  const token = getToken();

  return {
    Authorization: `Bearer ${token}`,
  };
};

export const loginUser = async (login, password) => {
  const body = {
    login,
    password,
  };

  const response = await fetch(`${USER_API_URL}/login`, {
    method: "POST",
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || data.message || "Ошибка авторизации");
  }

  return data;
};

export const getTasks = async () => {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: getAuthHeaders(),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || data.message || "Не удалось получить задачи");
  }

  return {
    tasks: data.tasks.map((task) => ({
      ...task,
      id: task._id,
    })),
  };
};

export const getTask = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "GET",
    headers: getAuthHeaders(),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || data.message || "Не удалось получить задачу");
  }

  return {
    ...data,
    task: {
      ...data.task,
      id: data.task._id,
    },
  };
};

export const createTask = async (task) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(task),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || data.message || "Не удалось создать задачу");
  }

  return {
    ...data,
    tasks: data.tasks.map((task) => ({
      ...task,
      id: task._id,
    })),
  };
};

export const updateTask = async (id, task) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(task),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || data.message || "Не удалось изменить задачу");
  }

  return {
    ...data,
    tasks: data.tasks.map((task) => ({
      ...task,
      id: task._id,
    })),
  };
};

export const deleteTask = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || data.message || "Не удалось удалить задачу");
  }

  return {
    ...data,
    tasks: data.tasks.map((task) => ({
      ...task,
      id: task._id,
    })),
  };
};

export const registerUser = async (login, name, password) => {
  const body = {
    login,
    name,
    password,
  };

  const response = await fetch(USER_API_URL, {
    method: "POST",
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error || data.message || "Не удалось зарегистрироваться",
    );
  }

  return data;
};
