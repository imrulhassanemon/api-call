const loadComment = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("data load error", error);
  }
};
