import React, { useState } from "react";
import "./DataSet.css";
const DataSet = () => {
	const [dataSet, setDataSet] = useState([
		{
			moduleName: "Buy",
			activityName: "Mobile",
			isCreate: false,
			isView: false,
			isEdit: false,
			isDelete: false,
			isApprove: false,
		},
		{
			moduleName: "Sell",
			activityName: "Oil",
			isCreate: false,
			isView: false,
			isEdit: false,
			isDelete: false,
			isApprove: false,
		},
		{
			moduleName: "Service",
			activityName: "Auto Repair",
			isCreate: false,
			isView: false,
			isEdit: false,
			isDelete: false,
			isApprove: false,
		},
		{
			moduleName: "Products",
			activityName: "Chicken",
			isCreate: false,
			isView: false,
			isEdit: false,
			isDelete: false,
			isApprove: false,
		},
	]);
	// handle input checkbox
	const handleCheckBox = (name, e) => {
		let newData = [];
		dataSet.forEach((data) => {
			if (data.activityName === name) {
				const newItem = { ...data };
				newItem[e.target.name] = e.target.checked;
				newData.push(newItem);
			} else {
				newData.push(data);
			}
		});
		setDataSet(newData);
	};

	return (
		<div>
			<h1 className="Header">Data Set</h1>
			<table>
				<tbody>
					<tr>
						<th>Module Name</th>
						<th>Activity Name</th>
						<th>Create</th>
						<th>View</th>
						<th>Edit</th>
						<th>Delete</th>
						<th>Approve</th>
					</tr>
					{dataSet.map((item) => (
						<tr>
							<td>{item.moduleName}</td>
							<td>{item.activityName}</td>
							<td>
								<input
									type="checkbox"
									name="isCreate"
									checked={
										item.isCreate
									}
									onChange={(e) =>
										handleCheckBox(
											item.activityName,
											e
										)
									}
								/>
							</td>
							<td>
								<input
									type="checkbox"
									name="isView"
									checked={
										item.isView
									}
									onChange={(e) =>
										handleCheckBox(
											item.activityName,
											e
										)
									}
								/>
							</td>
							<td>
								<input
									type="checkbox"
									name="isEdit"
									checked={
										item.isEdit
									}
									onChange={(e) =>
										handleCheckBox(
											item.activityName,
											e
										)
									}
								/>
							</td>
							<td>
								<input
									type="checkbox"
									name="isDelete"
									checked={
										item.isDelete
									}
									onChange={(e) =>
										handleCheckBox(
											item.activityName,
											e
										)
									}
								/>
							</td>
							<td>
								<input
									type="checkbox"
									name="isApprove"
									checked={
										item.isApprove
									}
									onChange={(e) =>
										handleCheckBox(
											item.activityName,
											e
										)
									}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DataSet;
