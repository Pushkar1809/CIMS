import React, { useState } from "react";
import "../../styles/internet.scss";
import { markIn, markOut } from "../../utils/connect";

const InOut = ({ user, inCampus, setInCampus }) => {
	const [entryId, setEntryId] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		// handle API here
		console.log(e);
		if (!inCampus) {
			// console.log(instId);
			const id = await markIn({ userId: user.mis });
			setEntryId(id);
			console.log(inCampus);
			setInCampus(true);
			console.log(inCampus);
		} else {
			markOut({ userId: user.mis }, entryId);
			setInCampus(false);
		}
	};

	return (
		<>
			<section className="info-text">
				MARK IN if coming in the campus <br />
				MARK OUT if leaving the campus
			</section>

			<section className="io-card">
				<div className="card">
					<form onSubmit={handleSubmit}>
						{inCampus ? (
							<input
								className="submit"
								id="submit-warning"
								type="submit"
								value="Mark Out"
							/>
						) : (
							<input
								className="submit"
								id="submit-success"
								type="submit"
								value="Mark In"
							/>
						)}
					</form>

					<div className={`badge ${inCampus ? "success" : "warning"}`}>
						{inCampus ? "You are in Campus" : "You are not in Campus"}
					</div>
				</div>
			</section>
		</>
	);
};

export default InOut;
