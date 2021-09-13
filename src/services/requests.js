import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function signIn(body){
	const request = axios.post(`${BASE_URL}/auth/login`, body);
	return request;
}

function register(body){
	const request = axios.post(`${BASE_URL}/auth/sign-up`, body);
	return request;
}

function createHabit(body, config){
	const request = axios.post(`${BASE_URL}/habits`, body, config);
	return request;
}

function listHabits(config){
	const request = axios.get(`${BASE_URL}/habits`, config);
	return request;
}

function deleteAnHabit(id, config){
	const request = axios.delete(`${BASE_URL}/habits/${id}`, config);
	return request;
}

function myTodayHabits(config){
	const request = axios.get(`${BASE_URL}/habits/today`, config);
	return request;
}

function habitDone(id, config){
	const request = axios.post(`${BASE_URL}/habits/${id}/check`, {}, config);
	return request;
}

function habitToDo(id, config){
	const request = axios.post(`${BASE_URL}/habits/${id}/uncheck`, {}, config);
	return request;
}

export {signIn, register, createHabit, listHabits, deleteAnHabit, myTodayHabits, habitDone, habitToDo};