const link = "https://dog.ceo/api/breeds/image/random";
interface api {
  message: string;
  status: string;
}
export let fetchResultData: api = {
  message: "https://images.dog.ceo/breeds/terrier-irish/n02093991_594.jpg",
  status: "success",
};
// export let fetchResultData = "";

export const fetchData = async () => {
  const result = await fetch(`${link}`);
  fetchResultData = await result.json();
};
fetchData();
