import { useNavigate } from "react-router-dom";

export const useLogout = (setUser, setIsLoggedIn) => {
	const navigate = useNavigate();

	const logout = () => {
		setUser({});
		window.localStorage.clear();
		// setLs(true);
		setIsLoggedIn(false);
		navigate("/");

		function preventBack() {
			window.history.forward();
		}
		setTimeout(preventBack, 0);
		window.onunload = function () {
			preventBack();
		};
	};

	return { logout };
};
