import axios from "axios";

const fetchData = async (setBooks) => {
  try {
    const res = await axios.get("/api/mybooks/");
    setBooks(res.data.allBooks);
  } catch (err) {
    console.log(err);
  }
};

export default fetchData;
