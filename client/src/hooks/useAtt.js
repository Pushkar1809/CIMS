import { useState } from "react";
import { markAttendence, updateAttendence } from "../utils/connect";

const useAtt = (validate, user, setInClass, inClass) => {
	const [errors, setErrors] = useState({});
	const [code, setCode] = useState("");
	const [instId, setInstId] = useState("");

	const handleChange = (event) => {
		const { value } = event.target;
		setCode(value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		// console.log();

		// handle API here
		// console.log("user ->", user);
		setErrors(validate(code));

		if (event.target[1].value === "Mark Out") {
			// console.log(instId);
			updateAttendence({ userId: user.mis, code }, instId);
			if (!Object.keys(errors).length) {
				setInClass(false);
			}
		} else {
			const id = await markAttendence({ userId: user.mis, code });
			setInstId(id);
			if (!Object.keys(errors).length) {
				setInClass(true);
			}
		}

		setCode("");
	};

	return {
		handleChange,
		handleSubmit,
		code,
		errors,
	};
};

export default useAtt;
