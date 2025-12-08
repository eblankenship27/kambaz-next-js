/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const USERS_API = `${HTTP_SERVER}/api/users`;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const MODULES_API = `${HTTP_SERVER}/api/modules`;
const ASSIGNMENT_API = `${HTTP_SERVER}/api/assignments`;
const ENROLLMENTS_API = `${HTTP_SERVER}/api/enrollments`;
const QUIZZES_API = `${HTTP_SERVER}/api/quizzes`;
const QUIZ_RESPONSES_API = `${HTTP_SERVER}/api/quiz-responses`;
export const findEnrollmentsForUser = async (userId: string) => {
    const response = await axios.get(`${ENROLLMENTS_API}/${userId}`);
    return response.data;
}
export const enrollUserInCourse = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/${userId}/courses/${courseId}`);
    return response.data;
}
export const unenrollFromCourse = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.delete(`${USERS_API}/${userId}/courses/${courseId}`);
    return response.data;
};
export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};
export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
    return response.data;
}
export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios.delete(`${ASSIGNMENT_API}/${assignmentId}`);
    return response.data;
}
export const updateAssignment = async (assignment: any) => {
    const { data } = await axios.put(`${ASSIGNMENT_API}/${assignment._id}`, assignment);
    return data;
};
export const deleteModule = async (courseId: string, moduleId: string) => {
    const response = await axios.delete(`${COURSES_API}/${courseId}/modules/${moduleId}`);
    return response.data;
}
export const updateModule = async (courseId: string, module: any) => {
    const { data } = await axios.put(`${COURSES_API}/${courseId}/modules/${module._id}`, module);
    return data
}
export const findModulesForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/modules`)
    return response.data;
};
export const createModuleForCourse = async (courseId: string, module: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module);
    return response.data;
};
export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};
export const findMyCourses = async () => {
    const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
    return data;
}
export const createCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
    return data;
}
export const deleteCourse = async (id: string) => {
    const { data } = await axios.delete(`${COURSES_API}/${id}`);
    return data;
}
export const updateCourse = async (course: any) => {
    const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
    return data;
}
export const findUsersForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/users`);
    return response.data;
}


export const findQuizzesByPartialTitle = async (title: string, courseId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/quizzes/${title}`);
    return response.data;
}
export const findQuizzesForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/quizzes`);
    return response.data;
}
export const createQuizForCourse = async (courseId: string, quiz: any) => {
    const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/quizzes`, quiz);
    return response.data
}
export const deleteQuiz = async (quizId: string) => {
    const response = await axiosWithCredentials.delete(`${QUIZZES_API}/${quizId}`);
    return response.data;
}
export const updateQuiz = async (quiz: any) => {
    const response = await axiosWithCredentials.put(`${QUIZZES_API}/${quiz._id}`, quiz);
    return response.data;
}

export const findQuizResponsesForQuiz = async (userId: string, quizId: string) => {
    const response = await axiosWithCredentials.get(`${QUIZ_RESPONSES_API}/user/${userId}/quiz/${quizId}`);
    return response.data;
}
export const createQuizResponse = async (quizResponse: any) => {
    const response = await axiosWithCredentials.post(`${QUIZ_RESPONSES_API}`, quizResponse);
    return response.data;
}
export const updateQuizResponse = async (quizResponse: any) => {
    const response = await axiosWithCredentials.put(`${QUIZ_RESPONSES_API}/${quizResponse._id}`, quizResponse);
    return response.data;
}