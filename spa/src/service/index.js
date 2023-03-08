export async function getContext() {
  return fetch("/context").then((data) => data.json());
}