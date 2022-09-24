function getGroupNames(data) {
	const groupNames = data.map(person => person.group);
	const uniqueNames = [...new Set(groupNames)];
	return uniqueNames;
}

export default getGroupNames;