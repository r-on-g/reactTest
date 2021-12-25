import axios from "axios";


// the base API URL
export const API = axios.create({ baseURL: "http://localhost:5000" }); // work on localhost

// send token back to backend, so that backend middleware can verify that user is actually log in.
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchALLTasks = () => API.get('http://localhost:5000/tasks')

export const fetchSingleTask = (id) => API.get(`http://localhost:5000/tasks/${id}`)

export const addTask = (task) => API.post('http://localhost:5000/tasks',task)

export const deleteTask = (id) => API.delete(`http://localhost:5000/tasks/${id}`)

export const updateTask = (id, singleTask) => API.patch(`http://localhost:5000/tasks/${id}`,{taskReminder:!singleTask.taskReminder })








