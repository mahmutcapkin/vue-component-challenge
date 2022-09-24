function filterByGroups(data) {
	const groups = data.reduce((currentData, person) => {
		if (!currentData[person.group]) {
			currentData[person.group] = []
		}
		return currentData;
	}, {});

	Object.keys(groups).forEach(group => {
		const students = data.filter(person => person.group == group);
		groups[group] = students;
	})

	return groups;
}

export default filterByGroups;