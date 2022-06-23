export async function getTracts() {
  return fetch("http://127.0.0.1:5000/tracts").then((res) => res.json());
}

export async function getTract(id: number) {
  return fetch(`http://127.0.0.1:5000/tracts/${id}`).then((res) => res.json());
}
