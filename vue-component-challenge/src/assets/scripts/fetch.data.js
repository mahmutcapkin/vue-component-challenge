async function fetchData() {
	const data = await fetch("https://raw.githubusercontent.com/Front-End-Bootcamp/vue-bootcamp/main/homework%201/data.json")
		.then(data => data.json())
		.then(response => response);

	return data;
}

export default fetchData;