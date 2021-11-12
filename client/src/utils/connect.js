import axios from "axios";

const apiUrl = "http://localhost:8000/api";

export const sendRegister = async (data) => {
	try {
		const res = await axios.post(`${apiUrl}/user/register`, data);
		alert(`Successfully registered ${data.email}`);
		if (res.status === 400) {
			alert("User already registered");
		} else if (res.status === 401) {
			alert("Invalid email or password OR User already registered");
		} else if (res.status === 402) {
			alert(`Validtion error: ${res.data.err}`);
		}
	} catch (error) {
		console.log(error);
	}
	// console.log(res.data);
};

export const sendLogin = async (data, setUser) => {
	try {
		const res = await axios.post(`${apiUrl}/user/login`, data);
		// console.log(res.data);
		window.localStorage.setItem("token", res.data);
		// const user = await getUserData(res.data);
		// await setUser(user);
		if (res.status === 400) {
			alert("Invalid email or password OR User not Registered");
		} else if (res.status === 401) {
			alert("Invalid email or password");
		} else if (res.status === 402) {
			alert("User not registered");
		}
	} catch (error) {
		console.log(error);
	}
	// console.log(res.data);
};

export const getUserData = async () => {
	const token = window.localStorage.getItem("token");

	try {
		const res = await axios.get(`${apiUrl}/user`, {
			headers: {
				"auth-token": token,
			},
		});
		// console.log("res ->", res);
		// console.log("res.data ->", res.data);
		// if (res.status === 400) {
		// 	alert("Invalid User");
		// } else if (res.status === 401) {
		// 	alert("Access Denied to User");
		// }
		const { user } = res.data;
		return user;
	} catch (error) {
		// if (res.status === 400) {
		// 	alert("Invalid User");
		// } else if (res.status === 401) {
		// 	alert("Access Denied to User");
		// }
		console.log(error);
		return {};
	}
};

export const markAttendence = async (data) => {
	try {
		const res = await axios.post(`${apiUrl}/att`, data);
		console.log(res.data);
		const { inst } = res.data;
		return inst;
	} catch (err) {
		console.log(err);
	}
};

export const updateAttendence = async (data, id) => {
	try {
		const res = await axios.put(`${apiUrl}/att/${id}`, data);
		// console.log(res.data);
		const { newInst, msg } = res.data;
		alert(msg);
		// console.log(newInst);
	} catch (err) {
		console.log(err);
	}
};

export const markIn = async (data) => {
	try {
		const res = await axios.post(`${apiUrl}/io`, data);
		console.log(res.data);
		const { entry } = res.data;
		return entry;
	} catch (err) {
		console.log(err);
	}
};

export const markOut = async (data, id) => {
	try {
		const res = await axios.put(`${apiUrl}/io/${id}`, data);
		// console.log(res.data);
		const { newEntry, msg } = res.data;
		alert(msg);
		console.log(newEntry);
	} catch (err) {
		console.log(err);
	}
};
